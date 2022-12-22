import css from './Form.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const formSubmitHandler = (name, phone) => {
    const normalizedName = name.toLowerCase();
    const contact = {
      name,
      phone,
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
        type="tel"
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
  );
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
};
