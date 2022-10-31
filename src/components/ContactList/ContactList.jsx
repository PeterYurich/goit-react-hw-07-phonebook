import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, visibleContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

import css from 'components/styles.module.scss';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  };

  const toRender = useSelector(visibleContacts)

  return (
    <ul>
      {contacts.isLoading && <div>wait...</div>}
      {contacts.error && <div>oops! a mistake is happend. Try again!</div> }
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
