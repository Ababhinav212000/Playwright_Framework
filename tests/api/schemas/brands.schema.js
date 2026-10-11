const brandsSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  required: ['responseCode', 'brands'],
  properties: {
    responseCode: { type: 'integer', const: 200 },
    brands: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: ['id', 'brand'],
        properties: {
          id: { type: 'integer' },
          brand: { type: 'string', minLength: 1 },
        },
      },
    },
  },
};

export default brandsSchema;
