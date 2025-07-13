import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/default';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ message: 'No token' });
  const token = authHeader.slice(7);
  try {
    const payload: any = jwt.verify(token, config.jwt.secret);
    const user = await getRepository(User).findOne(payload.sub);
    if (!user) throw new Error();
    (req as any).user = user;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
}
