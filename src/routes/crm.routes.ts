import { Router } from 'express';
import crmController from '../controllers/crm.controller';
const router = Router();
router.use('/crm', crmController);
export default router;
