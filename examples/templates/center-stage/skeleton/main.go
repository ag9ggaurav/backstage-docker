package main

import (
	"bytes"
	"context"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"os/exec"
	"sort"
	"strings"
	"sync"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

type serverConfig struct {
	Name      string
	Host      string
	User      string
	Port      string
	SecretRef string
}

type actionResult struct {
	Title  string
	Output string
	Error  bool
}

type pageData struct {
	ServiceName    string
	SelectedServer string
	Servers        []serverConfig
	Result         *actionResult
}

type application struct {
	mu                sync.RWMutex
	servers           map[string]serverConfig
	scriptPath        string
	systemKeyPath     string
	requestsTotal     *prometheus.CounterVec
	errorsTotal       *prometheus.CounterVec
	jobDuration       *prometheus.HistogramVec
	serversRegistered prometheus.Gauge
}

var page = template.Must(template.New("center-stage").Delims("[[", "]]").Parse(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Center Stage</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #f4efe4;
        --panel: #fffaf0;
        --ink: #152238;
        --muted: #667085;
        --line: #d9cdb8;
        --accent: #0f766e;
        --danger: #b42318;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
        color: var(--ink);
        background:
          radial-gradient(circle at top left, rgba(15, 118, 110, 0.12), transparent 32%),
          linear-gradient(180deg, #fbf7ef, var(--bg));
      }
      main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 32px 20px 48px;
      }
      header {
        margin-bottom: 24px;
      }
      h1, h2, h3 {
        margin: 0;
        font-weight: 700;
      }
      h1 {
        font-size: clamp(2rem, 4vw, 3.2rem);
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      p {
        margin: 0;
        color: var(--muted);
      }
      .lead {
        margin-top: 8px;
        max-width: 760px;
        line-height: 1.6;
      }
      .layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 20px;
      }
      .panel {
        border: 1px solid var(--line);
        border-radius: 20px;
        background: rgba(255, 250, 240, 0.92);
        box-shadow: 0 18px 40px rgba(21, 34, 56, 0.08);
        padding: 24px;
        backdrop-filter: blur(8px);
      }
      .panel h2 {
        margin-bottom: 6px;
      }
      .section {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid rgba(217, 205, 184, 0.9);
      }
      .section:first-of-type {
        margin-top: 0;
        padding-top: 0;
        border-top: 0;
      }
      form {
        display: grid;
        gap: 12px;
      }
      label {
        display: grid;
        gap: 6px;
        font-size: 0.95rem;
        font-weight: 600;
      }
      input, textarea, select, button {
        font: inherit;
      }
      input, textarea, select {
        width: 100%;
        border: 1px solid var(--line);
        border-radius: 12px;
        background: #fff;
        padding: 10px 12px;
        color: var(--ink);
      }
      textarea {
        min-height: 120px;
        resize: vertical;
      }
      button {
        border: 0;
        border-radius: 999px;
        background: var(--accent);
        color: #fff;
        padding: 10px 16px;
        font-weight: 700;
        cursor: pointer;
      }
      button.secondary {
        background: #344054;
      }
      button.danger {
        background: var(--danger);
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .server-grid {
        display: grid;
        gap: 12px;
      }
      .server-card {
        border: 1px solid var(--line);
        border-radius: 16px;
        padding: 14px;
        background: rgba(255, 255, 255, 0.75);
      }
      .server-card p {
        margin-top: 6px;
      }
      .server-card form {
        margin-top: 12px;
      }
      pre {
        margin: 0;
        white-space: pre-wrap;
        word-break: break-word;
        padding: 16px;
        border-radius: 14px;
        background: #111827;
        color: #ecfdf3;
        font-size: 0.92rem;
      }
      .result {
        margin-top: 24px;
      }
      .result h3 {
        margin-bottom: 10px;
      }
      .empty {
        padding: 16px;
        border-radius: 16px;
        border: 1px dashed var(--line);
        color: var(--muted);
        background: rgba(255, 255, 255, 0.45);
      }
      @media (max-width: 640px) {
        main {
          padding-inline: 14px;
        }
        .panel {
          padding: 18px;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>Center Stage</h1>
        <p class="lead">
          Remote SSH access self-service portal for onboarding servers, managing authorized keys,
          and exposing operational metrics back to Backstage.
        </p>
      </header>

      <div class="layout">
        <section class="panel">
          <h2>Admin Panel</h2>
          <p>Register servers and run cato-admin maintenance actions.</p>

          <div class="section">
            <h3>Add Server</h3>
            <form action="/admin/server/add" method="post">
              <label>
                Server Name
                <input name="name" placeholder="prod-bastion-01" required>
              </label>
              <label>
                Host or IP
                <input name="host" placeholder="10.10.10.42" required>
              </label>
              <label>
                SSH User
                <input name="user" placeholder="ubuntu" required>
              </label>
              <label>
                SSH Port
                <input name="port" value="22">
              </label>
              <label>
                Secret Reference
                <input name="secretRef" placeholder="cato-system-key">
              </label>
              <button type="submit">Register Server</button>
            </form>
          </div>

          <div class="section">
            <h3>Registered Servers</h3>
            [[ if .Servers ]]
            <div class="server-grid">
              [[ range .Servers ]]
              <article class="server-card">
                <strong>[[ .Name ]]</strong>
                <p>[[ .User ]]@[[ .Host ]]:[[ .Port ]]</p>
                <p>Secret ref: [[ .SecretRef ]]</p>
                <div class="actions">
                  <form action="/admin/keys/list" method="get">
                    <input type="hidden" name="server" value="[[ .Name ]]">
                    <button class="secondary" type="submit">List Keys</button>
                  </form>
                  <form action="/admin/keys/dedup" method="post">
                    <input type="hidden" name="server" value="[[ .Name ]]">
                    <button class="secondary" type="submit">Dedup Keys</button>
                  </form>
                  <form action="/admin/server/remove" method="post">
                    <input type="hidden" name="name" value="[[ .Name ]]">
                    <button class="danger" type="submit">Remove</button>
                  </form>
                </div>
              </article>
              [[ end ]]
            </div>
            [[ else ]]
            <div class="empty">No servers registered yet.</div>
            [[ end ]]
          </div>
        </section>

        <section class="panel">
          <h2>User Panel</h2>
          <p>Grant or revoke access, or generate a fresh SSH public key.</p>

          <div class="section">
            <h3>Grant Access</h3>
            <form action="/user/key/grant" method="post">
              <label>
                Target Server
                <select name="server">
                  [[ range .Servers ]]
                  <option value="[[ .Name ]]" [[ if eq $.SelectedServer .Name ]]selected[[ end ]]>
                    [[ .Name ]]
                  </option>
                  [[ end ]]
                </select>
              </label>
              <label>
                Public Key
                <textarea name="publicKey" placeholder="ssh-ed25519 AAAAC3Nza..." required></textarea>
              </label>
              <button type="submit">Grant Access</button>
            </form>
          </div>

          <div class="section">
            <h3>Revoke Access</h3>
            <form action="/user/key/revoke" method="post">
              <label>
                Target Server
                <select name="server">
                  [[ range .Servers ]]
                  <option value="[[ .Name ]]" [[ if eq $.SelectedServer .Name ]]selected[[ end ]]>
                    [[ .Name ]]
                  </option>
                  [[ end ]]
                </select>
              </label>
              <label>
                Public Key
                <textarea name="publicKey" placeholder="Paste the exact public key to remove" required></textarea>
              </label>
              <button class="secondary" type="submit">Revoke Access</button>
            </form>
          </div>

          <div class="section">
            <h3>Generate Key</h3>
            <form action="/user/key/genkey" method="post">
              <label>
                Email
                <input type="email" name="email" placeholder="dev@example.com" required>
              </label>
              <button type="submit">Generate Public Key</button>
            </form>
          </div>
        </section>
      </div>

      [[ if .Result ]]
      <section class="panel result">
        <h3>[[ .Result.Title ]]</h3>
        <pre>[[ .Result.Output ]]</pre>
      </section>
      [[ end ]]
    </main>
  </body>
</html>`))

func main() {
	app := &application{
		servers:       map[string]serverConfig{},
		scriptPath:    pickFirst(os.Getenv("CATO_SCRIPT_PATH"), "/scripts/cato-admin.sh", "./scripts/cato-admin.sh"),
		systemKeyPath: pickFirst(os.Getenv("SYSTEM_KEY_PATH"), "/etc/ssh/cato-system", "./cato-system"),
		requestsTotal: promauto.NewCounterVec(prometheus.CounterOpts{
			Name: "cato_ssh_requests_total",
			Help: "Total SSH operations triggered by Center Stage.",
		}, []string{"action", "server"}),
		errorsTotal: promauto.NewCounterVec(prometheus.CounterOpts{
			Name: "cato_ssh_errors_total",
			Help: "Total failed SSH operations triggered by Center Stage.",
		}, []string{"action", "server"}),
		jobDuration: promauto.NewHistogramVec(prometheus.HistogramOpts{
			Name:    "cato_job_duration_seconds",
			Help:    "Duration of cato-admin.sh executions.",
			Buckets: prometheus.DefBuckets,
		}, []string{"action"}),
		serversRegistered: promauto.NewGauge(prometheus.GaugeOpts{
			Name: "cato_servers_registered",
			Help: "Number of servers currently registered in Center Stage.",
		}),
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/", app.handleHome)
	mux.HandleFunc("/admin/server/add", app.handleAddServer)
	mux.HandleFunc("/admin/server/remove", app.handleRemoveServer)
	mux.HandleFunc("/admin/keys/list", app.handleListKeys)
	mux.HandleFunc("/admin/keys/dedup", app.handleDedupKeys)
	mux.HandleFunc("/user/key/grant", app.handleGrant)
	mux.HandleFunc("/user/key/revoke", app.handleRevoke)
	mux.HandleFunc("/user/key/genkey", app.handleGenKey)
	mux.Handle("/metrics", promhttp.Handler())
	mux.HandleFunc("/healthz", func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("ok"))
	})
	mux.HandleFunc("/readyz", func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("ok"))
	})

	addr := ":" + defaultString(os.Getenv("PORT"), "8080")
	log.Printf("center-stage listening on %s using script %s", addr, app.scriptPath)
	if err := http.ListenAndServe(addr, mux); err != nil {
		log.Fatal(err)
	}
}

func (a *application) handleHome(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	a.renderHome(w, "", nil)
}

func (a *application) handleAddServer(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	if err := r.ParseForm(); err != nil {
		a.renderHome(w, "", &actionResult{Title: "Register server failed", Output: err.Error(), Error: true})
		return
	}

	server := serverConfig{
		Name:      strings.TrimSpace(r.FormValue("name")),
		Host:      strings.TrimSpace(r.FormValue("host")),
		User:      strings.TrimSpace(r.FormValue("user")),
		Port:      defaultString(strings.TrimSpace(r.FormValue("port")), "22"),
		SecretRef: defaultString(strings.TrimSpace(r.FormValue("secretRef")), "${{ values.systemKeySecretName }}"),
	}
	if server.Name == "" || server.Host == "" || server.User == "" {
		a.renderHome(w, "", &actionResult{Title: "Register server failed", Output: "name, host, and user are required", Error: true})
		return
	}

	a.mu.Lock()
	a.servers[server.Name] = server
	a.serversRegistered.Set(float64(len(a.servers)))
	a.mu.Unlock()

	a.renderHome(w, server.Name, &actionResult{
		Title:  "Server registered",
		Output: fmt.Sprintf("Registered %s (%s@%s:%s)", server.Name, server.User, server.Host, server.Port),
	})
}

func (a *application) handleRemoveServer(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	if err := r.ParseForm(); err != nil {
		a.renderHome(w, "", &actionResult{Title: "Remove server failed", Output: err.Error(), Error: true})
		return
	}

	name := strings.TrimSpace(r.FormValue("name"))
	a.mu.Lock()
	delete(a.servers, name)
	a.serversRegistered.Set(float64(len(a.servers)))
	a.mu.Unlock()

	a.renderHome(w, "", &actionResult{
		Title:  "Server removed",
		Output: fmt.Sprintf("Removed %s from the in-memory registry.", name),
	})
}

func (a *application) handleListKeys(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	serverName := strings.TrimSpace(r.URL.Query().Get("server"))
	output, err := a.runAction(r.Context(), "list", serverName, "")
	a.renderHome(w, serverName, resultFor("List keys", output, err))
}

func (a *application) handleDedupKeys(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	if err := r.ParseForm(); err != nil {
		a.renderHome(w, "", &actionResult{Title: "Dedup keys failed", Output: err.Error(), Error: true})
		return
	}
	serverName := strings.TrimSpace(r.FormValue("server"))
	output, err := a.runAction(r.Context(), "dedup", serverName, "")
	a.renderHome(w, serverName, resultFor("Dedup keys", output, err))
}

func (a *application) handleGrant(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	if err := r.ParseForm(); err != nil {
		a.renderHome(w, "", &actionResult{Title: "Grant access failed", Output: err.Error(), Error: true})
		return
	}
	serverName := strings.TrimSpace(r.FormValue("server"))
	publicKey := strings.TrimSpace(r.FormValue("publicKey"))
	if publicKey == "" {
		a.renderHome(w, serverName, &actionResult{Title: "Grant access failed", Output: "public key is required", Error: true})
		return
	}
	output, err := a.runAction(r.Context(), "grant", serverName, publicKey)
	a.renderHome(w, serverName, resultFor("Grant access", output, err))
}

func (a *application) handleRevoke(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	if err := r.ParseForm(); err != nil {
		a.renderHome(w, "", &actionResult{Title: "Revoke access failed", Output: err.Error(), Error: true})
		return
	}
	serverName := strings.TrimSpace(r.FormValue("server"))
	publicKey := strings.TrimSpace(r.FormValue("publicKey"))
	if publicKey == "" {
		a.renderHome(w, serverName, &actionResult{Title: "Revoke access failed", Output: "public key is required", Error: true})
		return
	}
	output, err := a.runAction(r.Context(), "revoke", serverName, publicKey)
	a.renderHome(w, serverName, resultFor("Revoke access", output, err))
}

func (a *application) handleGenKey(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	if err := r.ParseForm(); err != nil {
		a.renderHome(w, "", &actionResult{Title: "Generate key failed", Output: err.Error(), Error: true})
		return
	}
	email := strings.TrimSpace(r.FormValue("email"))
	if email == "" {
		a.renderHome(w, "", &actionResult{Title: "Generate key failed", Output: "email is required", Error: true})
		return
	}
	output, err := a.runAction(r.Context(), "genkey", "local", email)
	a.renderHome(w, "", resultFor("Generated public key", output, err))
}

func (a *application) runAction(ctx context.Context, action, serverName, value string) (string, error) {
	labelServer := defaultString(serverName, "local")
	a.requestsTotal.WithLabelValues(action, labelServer).Inc()

	start := time.Now()
	defer func() {
		a.jobDuration.WithLabelValues(action).Observe(time.Since(start).Seconds())
	}()

	cmd := exec.CommandContext(ctx, a.scriptPath, action)
	if value != "" {
		cmd.Args = append(cmd.Args, value)
	}

	cmd.Env = append(os.Environ(), "SYSTEM_KEY_PATH="+a.systemKeyPath)

	if action != "genkey" {
		server, ok := a.lookupServer(serverName)
		if !ok {
			a.errorsTotal.WithLabelValues(action, labelServer).Inc()
			return "", fmt.Errorf("server %q is not registered", serverName)
		}
		cmd.Env = append(cmd.Env,
			"TARGET_HOST="+server.Host,
			"TARGET_USER="+server.User,
			"TARGET_PORT="+defaultString(server.Port, "22"),
			"TARGET_SECRET_REF="+server.SecretRef,
		)
	}

	var stdout bytes.Buffer
	var stderr bytes.Buffer
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr

	err := cmd.Run()
	output := strings.TrimSpace(stdout.String())
	if extra := strings.TrimSpace(stderr.String()); extra != "" {
		if output != "" {
			output += "\n\n"
		}
		output += extra
	}

	if err != nil {
		a.errorsTotal.WithLabelValues(action, labelServer).Inc()
		if output == "" {
			output = err.Error()
		}
		return output, err
	}
	if output == "" {
		output = "Command completed successfully."
	}
	return output, nil
}

func (a *application) renderHome(w http.ResponseWriter, selectedServer string, result *actionResult) {
	data := pageData{
		ServiceName: "${{ values.serviceName }}",
		Servers:     a.listServers(),
		Result:      result,
	}
	if selectedServer != "" {
		data.SelectedServer = selectedServer
	} else if len(data.Servers) > 0 {
		data.SelectedServer = data.Servers[0].Name
	}

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err := page.Execute(w, data); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func (a *application) listServers() []serverConfig {
	a.mu.RLock()
	defer a.mu.RUnlock()

	servers := make([]serverConfig, 0, len(a.servers))
	for _, server := range a.servers {
		servers = append(servers, server)
	}
	sort.Slice(servers, func(i, j int) bool {
		return servers[i].Name < servers[j].Name
	})
	return servers
}

func (a *application) lookupServer(name string) (serverConfig, bool) {
	a.mu.RLock()
	defer a.mu.RUnlock()
	server, ok := a.servers[name]
	return server, ok
}

func resultFor(title, output string, err error) *actionResult {
	return &actionResult{
		Title:  title,
		Output: output,
		Error:  err != nil,
	}
}

func defaultString(value, fallback string) string {
	if strings.TrimSpace(value) == "" {
		return fallback
	}
	return value
}

func pickFirst(values ...string) string {
	for _, value := range values {
		if strings.TrimSpace(value) != "" {
			return value
		}
	}
	return ""
}
