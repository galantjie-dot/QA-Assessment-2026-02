import { test, expect } from '@playwright/test';

test('API login returns token', async ({ request }) => {
  const res = await request.post('/api/login', {
    data: { username: 'testuser', password: 'password123' },
  });

  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.token).toBeDefined();
});
