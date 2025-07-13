import { getRepository } from 'typeorm';
import { Contact } from '../entities/Contact';
import { Lead } from '../entities/Lead';
import { Opportunity } from '../entities/Opportunity';

export const crmService = {
  async listContacts(userId: number) {
    return getRepository(Contact).find({ where: { owner: { id: userId } } });
  },
  // ...idem para leads e opportunities
};
