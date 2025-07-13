import request from 'supertest';
import app from '../src/index';

describe('RPS Endpoints', () => {
  let token: string;
  beforeAll(async () => {
    await request(app).post('/auth/register').send({ email: 'v@v.com', password: 'pwd', role: 'finance' });
    const res = await request(app).post('/auth/login').send({ email: 'v@v.com', password: 'pwd' });
    token = res.body.accessToken;
  });

  it('should issue RPS', async () => {
    const res = await request(app)
      .post('/rps')
      .set('Authorization', `Bearer ${token}`)
      .send({ city: 'Rio', series: 'A', number: '0001', amount: 150.50 });
    expect(res.status).toBe(201);
  });
});
