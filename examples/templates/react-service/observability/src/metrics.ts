import { Request, Response, NextFunction } from 'express';
import client from 'prom-client';

const registry = new client.Registry();
client.collectDefaultMetrics({ register: registry, prefix: '${{ values.name }}_' });

const httpRequestsTotal = new client.Counter({
  name: '${{ values.name }}_http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'path', 'status_code'],
  registers: [registry],
});

const httpDurationSeconds = new client.Histogram({
  name: '${{ values.name }}_http_duration_seconds',
  help: 'HTTP request duration in seconds',
  labelNames: ['method', 'path'],
  buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5],
  registers: [registry],
});

export function metricsMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    const skip = ['/metrics', '/healthz', '/readyz'];
    if (skip.includes(req.path)) return next();
    const end = httpDurationSeconds.startTimer({ method: req.method, path: req.path });
    res.on('finish', () => {
      httpRequestsTotal.inc({ method: req.method, path: req.path, status_code: res.statusCode });
      end();
    });
    next();
  };
}

export async function metricsHandler(_req: Request, res: Response) {
  res.set('Content-Type', registry.contentType);
  res.end(await registry.metrics());
}
