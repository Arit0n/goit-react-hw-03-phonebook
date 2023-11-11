import { Item, Button } from './ListItem.styled';

export const ListItem = ({ onDelete, contacts }) => {
  return contacts.map(contact => {
    return (
      <Item key={contact.id}>
        <p>{contact.name} :</p>
        <p>{contact.number}</p>
        <Button type="button" onClick={() => onDelete(contact.id)}>
          Delete
        </Button>
      </Item>
    );
  });
};
