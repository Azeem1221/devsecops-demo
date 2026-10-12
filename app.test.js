const request = require('supertest');
const app = require('./app');

test('GET /health returns ok', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});

test('GET / returns greeting', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBeDefined();
});