import { Router } from 'express';
import { getCustomRepository } from 'typeorm'

import ContactsRepository from '../repositories/ContactsRepository';
import CreateContactService from '../services/ CreateContactService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const contactsRouter = Router();

contactsRouter.use(ensureAuthenticated);

contactsRouter.get('/', async (request, response) => {
  console.log(request.user);

  const contactsRepository = getCustomRepository(ContactsRepository);
  const contacts = await contactsRepository.find();

  return response.json(contacts)
});

contactsRouter.post('/', async (request, response) => {
  try {
    const { id, name, email, phone, celPhone, zipCode, street, houseNumber,  district, city, state, category } = request.body;

    const createContact = new CreateContactService();

    const contact = await createContact.execute({
      id, name, email, phone, celPhone, zipCode, street, houseNumber,  district, city, state, category
    });

    return response.json(contact);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default contactsRouter;
