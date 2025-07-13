import request from 'supertest';
import app from '../src/index';

describe('Auth', () => {
  it('should register & login', async () => {
    const email = 'test@x.com', pwd = 'secret';
    await request(app).post('/auth/register').send({ email, password: pwd, role: 'sales' }).expect(201);
    const res = await request(app).post('/auth/login').send({ email, password: pwd }).expect(200);
    expect(res.body).toHaveProperty('accessToken');
  });
});
