import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import brandsSchema from './schemas/brands.schema.js';

const brandsListPath = '/api/brandsList';
const ajv = new Ajv({ allErrors: true });
const validateBrandsResponse = ajv.compile(brandsSchema);

function expectValidBrandsResponse(responseBody) {
    const isValid = validateBrandsResponse(responseBody);
    expect(
        isValid,
        `Brands response schema validation failed:\n${JSON.stringify(
            validateBrandsResponse.errors,
            null,
            2
        )}`
    ).toBe(true);
}

test('returns a non-empty brands list', async ({ request }) => {
    console.log(`GET ${brandsListPath}`);
    const response = await request.get(brandsListPath);
    console.log(`Response status: ${response.status()}`);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expectValidBrandsResponse(responseBody);
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.brands.length).toBeGreaterThan(0);
});

test('validates a brand exists in the brands list', async ({ request }) => {
    console.log(`GET ${brandsListPath}`);
    const response = await request.get(brandsListPath);
    console.log(`Response status: ${response.status()}`);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expectValidBrandsResponse(responseBody);

    const poloBrand = responseBody.brands.find((brand) => brand.id === 37);
    expect(poloBrand).toMatchObject({
        id: 37,
        brand: 'Polo',
    });
});