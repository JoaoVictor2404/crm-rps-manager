import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import { RPS } from '../entities/RPS';
import { notificationService } from '../services/notification.service';
import { rpsIssuanceQueue } from '../jobs/rpsIssuance.job';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();
router.use(authMiddleware);

// Issue immediate RPS
router.post('/rps', async (req, res) => {
  const repo = getRepository(RPS);
  const data = { ...req.body, issuer: req.user };
  const rps = repo.create(data);
  await repo.save(rps);
  rpsIssuanceQueue.add({ rpsId: rps.id });
  res.status(201).json(rps);
});

// List RPS
router.get('/rps', async (_, res) => {
  const list = await getRepository(RPS).find({ where: { issuer: req.user } });
  res.json(list);
});

export default router;
