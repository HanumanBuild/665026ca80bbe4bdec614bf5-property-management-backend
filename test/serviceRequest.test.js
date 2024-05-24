const request = require('supertest');
const app = require('../server'); // Assuming your server file is named server.js

describe('Service Request Routes', () => {
  it('should submit service request', async () => {
    const res = await request(app)
      .post('/api/service-request')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        serviceType: 'Maintenance',
        description: 'Fix the sink'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Service request submitted successfully');
  });
});