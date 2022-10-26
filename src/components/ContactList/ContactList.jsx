import React from 'react';

import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import css from 'components/styles.module.scss';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase()));

  let toRender = filteredContacts || contacts;

  if (filteredContacts.length === 0 && filter !== '') {
    alert(`Nothing found by filter "${filter}"`)
    toRender = contacts;
  }

  return (
    <ul>
      {toRender.map(person => {
        return (
          <li className={css.contact} key={person.id}>
            <span className={css.personName}>
              {person.name}: {person.phone}
            </span>
            <button
              className={css.deleteBtn}
              onClick={() => {
                dispatch(deleteContact(person.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
