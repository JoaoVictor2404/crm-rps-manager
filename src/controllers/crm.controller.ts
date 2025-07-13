import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import { Contact } from '../entities/Contact';
import { Lead } from '../entities/Lead';
import { Opportunity } from '../entities/Opportunity';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();
router.use(authMiddleware);

// Contacts
router.post('/contacts', async (req, res) => {
  const repo = getRepository(Contact);
  const contact = repo.create({ ...req.body, owner: req.user });
  await repo.save(contact);
  res.status(201).json(contact);
});
router.get('/contacts', async (_, res) => {
  const contacts = await getRepository(Contact).find({ where: { owner: req.user } });
  res.json(contacts);
});

// Leads
router.post('/leads', async (req, res) => {
  const repo = getRepository(Lead);
  const lead = repo.create({ ...req.body, owner: req.user });
  await repo.save(lead);
  res.status(201).json(lead);
});
router.get('/leads', async (_, res) => {
  const leads = await getRepository(Lead).find({ where: { owner: req.user } });
  res.json(leads);
});

// Opportunities
router.post('/opportunities', async (req, res) => {
  const repo = getRepository(Opportunity);
  const opp = repo.create({ ...req.body, owner: req.user });
  await repo.save(opp);
  res.status(201).json(opp);
});
router.get('/opportunities', async (_, res) => {
  const opps = await getRepository(Opportunity).find({ where: { owner: req.user } });
  res.json(opps);
});

export default router;
