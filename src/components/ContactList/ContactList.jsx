import { MdOutlineRemoveCircleOutline } from 'react-icons/md';

import { Btn, List, ListItem } from './ContactList.styled';

export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <ListItem>
      <Btn onClick={() => onDeleteContact(contact.id)}>
        <MdOutlineRemoveCircleOutline size="24" />
      </Btn>
      {contact.name}: {contact.number}
    </ListItem>
  );
};

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};
