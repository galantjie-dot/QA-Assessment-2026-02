import { test, expect } from '@playwright/test';

test('GET /users returns 200', async ({ request }) => {
  const response = await request.get('/users');
  expect(response.status()).toBe(200);
});
