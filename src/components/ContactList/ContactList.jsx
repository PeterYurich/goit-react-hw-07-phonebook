import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { fetchContacts } from 'redux/operations';

import css from 'components/styles.module.scss';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
  let toRender = filteredContacts || contacts;

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  };

  return (
    <ul>
      {contacts.isLoading}
      {toRender.map(person => {
        return (
          <li className={css.contact} key={person.id}>
            <span className={css.personName}>
              {person.name}: {person.phone}
            </span>
            <button className={css.deleteBtn} onClick={() => handleDelete(person.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
