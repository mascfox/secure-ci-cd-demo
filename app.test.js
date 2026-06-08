const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {

  test('GET / should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello World');
  });

  test('GET /health should return ok', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe('ok');
  });

});