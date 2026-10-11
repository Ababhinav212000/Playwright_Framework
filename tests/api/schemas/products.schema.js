const productsSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  required: ['responseCode', 'products'],
  properties: {
    responseCode: { type: 'integer', const: 200 },
    products: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: ['id', 'name', 'price', 'brand', 'category'],
        properties: {
          id: { type: 'integer' },
          name: { type: 'string', minLength: 1 },
          price: { type: 'string', minLength: 1 },
          brand: { type: 'string', minLength: 1 },
          category: {
            type: 'object',
            required: ['usertype', 'category'],
            properties: {
              usertype: {
                type: 'object',
                required: ['usertype'],
                properties: {
                  usertype: { type: 'string', minLength: 1 },
                },
              },
              category: { type: 'string', minLength: 1 },
            },
          },
        },
      },
    },
  },
};

export default productsSchema;
