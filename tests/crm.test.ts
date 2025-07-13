import request from 'supertest';
import app from '../src/index';

describe('CRM Endpoints', () => {
  let token: string;
  beforeAll(async () => {
    await request(app).post('/auth/register').send({ email: 'u@u.com', password: 'pwd', role: 'sales' });
    const res = await request(app).post('/auth/login').send({ email: 'u@u.com', password: 'pwd' });
    token = res.body.accessToken;
  });

  it('should create contact', async () => {
    const res = await request(app)
      .post('/crm/contacts')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Client A', email: 'a@c.com', phone: '12345' });
    expect(res.status).toBe(201);
  });
});
