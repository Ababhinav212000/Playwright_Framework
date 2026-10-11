import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import productsSchema from './schemas/products.schema.js';

const PRODUCTS_LIST_PATH = '/api/productsList';
const ajv = new Ajv({ allErrors: true });
const validateProductsResponse = ajv.compile(productsSchema);

test('returns a non-empty product list', async ({ request }) => {
  console.log(`GET ${PRODUCTS_LIST_PATH}`);
  const response = await request.get(PRODUCTS_LIST_PATH);
  console.log(`Response status: ${response.status()}`);

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.responseCode).toBe(200);
  expect(Array.isArray(responseBody.products)).toBe(true);
  expect(responseBody.products.length).toBeGreaterThan(0);
});
