import { test, expect } from '@playwright/test';

test.describe('Health Check API', () => {
  test('should return 200 and healthy status', async ({ request }) => {
    const response = await request.get('https://practice.expandtesting.com/api/health-check');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('status', 'UP');
  });
});

test.describe('Health Check API - Negative Tests', () => {
  test('invalid path returns 404', async ({ request }) => {
    const res = await request.get('https://practice.expandtesting.com/api/health-check-invalid');
    expect(res.status()).toBe(404);
  });

  test('unsupported method returns 405', async ({ request }) => {
    const res = await request.post('https://practice.expandtesting.com/api/health-check');
    expect(res.status()).toBe(405); // Method Not Allowed
  });

  test('malformed query parameter ignored or rejected', async ({ request }) => {
    const res = await request.get('https://practice.expandtesting.com/api/health-check?foo=%%%');
    expect([200, 400]).toContain(res.status()); // depending on API design
  });
});

test.describe('Health Check API - Non Functional Tests', () => {
  test('response time under 500ms', async ({ request }) => {
    const start = Date.now();
    const res = await request.get('https://practice.expandtesting.com/api/health-check');
    const duration = Date.now() - start;
    expect(res.status()).toBe(200);
    expect(duration).toBeLessThan(500);
  });


});
