import { EntityRepository, Repository } from 'typeorm';

import Contact from '../models/Contact';

@EntityRepository(Contact)
class ContactsRepository extends Repository<Contact> {
  public async findByName(name: string): Promise<Contact | null> {
    const findContact = await this.findOne({
      where: { name },
    });

    return findContact || null;
  }
}

export default ContactsRepository;
