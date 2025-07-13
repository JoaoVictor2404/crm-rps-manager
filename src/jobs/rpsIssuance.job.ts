import Bull from 'bull';
import { getRepository } from 'typeorm';
import { RPS } from '../entities/RPS';
import { taxApiService } from '../services/taxApi.service';
import { notificationService } from '../services/notification.service';
import config from '../config/default';

export const rpsIssuanceQueue = new Bull('rps-issuance', config.redisUrl);

rpsIssuanceQueue.process(async job => {
  const rpsRepo = getRepository(RPS);
  const rps = await rpsRepo.findOne(job.data.rpsId, { relations: ['issuer'] });
  if (!rps) throw new Error('RPS not found');
  await taxApiService.submitRPS(rps);
  await notificationService.sendEmail(rps.issuer.email, 'RPS Issued', `<p>Your RPS #${rps.number} has been submitted.</p>`);
});
