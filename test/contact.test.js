const request = require('supertest');
const app = require('../server'); // Assuming your server file is named server.js

describe('Contact Routes', () => {
  it('should submit contact form', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello!'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Contact form submitted successfully');
  });
});