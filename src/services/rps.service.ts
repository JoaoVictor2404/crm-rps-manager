import { getRepository } from 'typeorm';
import { RPS } from '../entities/RPS';

export const rpsService = {
  async issueRPS(data: Partial<RPS>, userId: number) {
    const repo = getRepository(RPS);
    const rps = repo.create({ ...data, issuer: { id: userId } });
    return repo.save(rps);
  },
};
