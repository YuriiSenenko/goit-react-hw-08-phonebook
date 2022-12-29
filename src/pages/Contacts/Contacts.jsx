import Title from '../../components/Title/Title';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList';

import css from './Contacts.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

function Contacts() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const formSubmitHandler = (name, number) => {
    const normalizedName = name.toLowerCase();
    const contact = {
      name,
      number,
    };
    const filteredContacts = contacts.filter(
      searchContact => searchContact.name.toLowerCase() === normalizedName
    );

    if (filteredContacts.length > 0) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(contact));
    }
  };

  const handelChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);

        break;

      default:
        return;
    }
  };

  const handelSubmit = event => {
    event.preventDefault();
    formSubmitHandler(name, number);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Title>Phonebook</Title>
      <form className={css.form} onSubmit={handelSubmit}>
        <label className={css.lable} htmlFor="">
          Name
        </label>
        <input
          value={name}
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handelChange}
        />
        <label className={css.lable} htmlFor="">
          Number
        </label>
        <input
          value={number}
          className={css.input}
          type="text"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handelChange}
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>

      <Filter />

      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </>
  );
}

export default Contacts;

Contacts.propTypes = {
  onSubmit: PropTypes.func,
};
