import { getCustomRepository } from 'typeorm'

import Contact from '../models/Contact'
import ContactsRepository from '../repositories/ContactsRepository'

interface ResquestDTO {
  id: string,
  name: string;
  email: string;
  phone: string;
  celPhone: string;
  zipCode: string;
  street: string;
  houseNumber: number;
  district: string;
  city: string;
  state: string;
  category: string;
}

class CreateContactService {
  public async execute({id, name, email, phone, celPhone, zipCode, street, houseNumber, district, city, state, category
    }: ResquestDTO): Promise<Contact> {
    const contactsRepository = getCustomRepository(ContactsRepository)

    const findContactInSameName = await contactsRepository.findByName(name);

    const contact = contactsRepository.create({
      id, name, email, phone, celPhone, zipCode, street, houseNumber,  district, city, state, category
    });

    await contactsRepository.save(contact)

    if( findContactInSameName ) {
      throw Error('Usuario ja existente')
    }

    return contact
  }
}

export default CreateContactService;
