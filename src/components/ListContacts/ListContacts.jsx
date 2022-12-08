import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactList = ({ contact, onDeleteContact }) => {
  return (
    <ListContacts>
      {contact.map(({ name, number, id }) => (
        <ItemContact key={id}>
          <NameUser>{name}:</NameUser>
          <span>{number}</span>
          <ButtonDel type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </ButtonDel>
        </ItemContact>
      ))}
    </ListContacts>
  );
};
const ListContacts = styled.ul`
  margin: 0;
  margin-left: 10px;
  padding: 0;
`;
const ItemContact = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
const NameUser = styled.p`
  margin 0;
`;
const ButtonDel = styled.button`
  margin-right: 20px;
  width: 80px;
  padding: 3px;
  background-color: #e0ffff;
  border: solid 1px;
  border-radius: 2px;
  cursor: pointer;

  :hover,
  focus {
    transform: scale(1.05);
    background-color: rgb(135, 206, 250);
  }
`;
export default ContactList;

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
