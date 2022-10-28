import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
// import { deleteContact } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/operations';

import css from 'components/styles.module.scss';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  let toRender = filteredContacts || contacts;

  return (
    <ul>
      {contacts.isLoading}
      {toRender.map(person => {
        return (
          <li className={css.contact} key={person.id}>
            <span className={css.personName}>
              {person.name}: {person.phone}
            </span>
            <button
              className={css.deleteBtn}
              onClick={() => { ''
                // dispatch(deleteContact(person.id));
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
