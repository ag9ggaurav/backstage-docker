import express from 'express';
{% if values.enableObservability %}
import { metricsMiddleware, metricsHandler } from './metrics';
{% endif %}

const app = express();
const port = process.env.PORT || ${{ values.port }};

{% if values.enableObservability %}
app.use(metricsMiddleware());
{% endif %}

app.get('/healthz', (_req, res) => res.json({ status: 'ok' }));
app.get('/readyz', (_req, res) => res.json({ status: 'ok' }));

{% if values.enableObservability %}
app.get('/metrics', metricsHandler);
{% endif %}

app.get('/', (_req, res) => {
  res.json({ service: '${{ values.name }}', status: 'running' });
});

app.listen(port, () => {
  console.log(JSON.stringify({ level: 'info', msg: 'server started', port, service: '${{ values.name }}' }));
});
