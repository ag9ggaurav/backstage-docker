package metrics

import (
	"net/http"
	"strconv"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/collectors"
)

var Registry *prometheus.Registry

var (
	httpRequestsTotal *prometheus.CounterVec
	httpDuration      *prometheus.HistogramVec
)

func Init(serviceName string) {
	Registry = prometheus.NewRegistry()

	Registry.MustRegister(
		collectors.NewGoCollector(),
		collectors.NewProcessCollector(collectors.ProcessCollectorOpts{}),
	)

	httpRequestsTotal = prometheus.NewCounterVec(prometheus.CounterOpts{
		Namespace: serviceName,
		Name:      "http_requests_total",
		Help:      "Total number of HTTP requests",
	}, []string{"method", "path", "status_code"})

	httpDuration = prometheus.NewHistogramVec(prometheus.HistogramOpts{
		Namespace: serviceName,
		Name:      "http_duration_seconds",
		Help:      "HTTP request duration in seconds",
		Buckets:   []float64{.005, .01, .025, .05, .1, .25, .5, 1, 2.5, 5},
	}, []string{"method", "path"})

	Registry.MustRegister(httpRequestsTotal, httpDuration)
}

type statusRecorder struct {
	http.ResponseWriter
	status int
}

func (r *statusRecorder) WriteHeader(code int) {
	r.status = code
	r.ResponseWriter.WriteHeader(code)
}

func InstrumentHandler(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/metrics" || r.URL.Path == "/healthz" || r.URL.Path == "/readyz" {
			next.ServeHTTP(w, r)
			return
		}
		rec := &statusRecorder{ResponseWriter: w, status: http.StatusOK}
		start := time.Now()
		next.ServeHTTP(rec, r)
		duration := time.Since(start).Seconds()
		code := strconv.Itoa(rec.status)
		httpRequestsTotal.WithLabelValues(r.Method, r.URL.Path, code).Inc()
		httpDuration.WithLabelValues(r.Method, r.URL.Path).Observe(duration)
	})
}
