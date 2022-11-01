import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import css from '../../components/styles.module.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch()
  
const controlInput = evt => {
    const { name: inputName, value: inputValue } = evt.target;

    switch (inputName) {
      case 'name':
        setName(inputValue);
        break;
      case 'phone':
        setPhone(inputValue);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.find(person => person.name.toLowerCase() === name.toLowerCase())) {
      alert(`A contact with the name "${name}" already exists!`)
      return
    }

    dispatch(addContact({name, phone}))
    setName('')
    setPhone('')

  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name:
        <input
          className={css.input}
          onChange={controlInput}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Phone number:
        <input
          className={css.input}
          onChange={controlInput}
          value={phone}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
