import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

import Fab from '@mui/material/Fab';

import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

function ContactForm() {
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
    // console.log(e.currentTarget.name, e.currentTarget.value);

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
    <Box sx={{ display: 'flex', mt: '20px' }}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': {
            m: 1,
            width: '30vw',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
        autoComplete="off"
        onSubmit={handelSubmit}
      >
        <TextField
          id="standard-required"
          label="Name"
          size="small"
          variant="standard"
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handelChange}
        ></TextField>
        <TextField
          id="standard-required"
          label="Number"
          size="small"
          variant="standard"
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handelChange}
        ></TextField>

        <Fab
          color="primary"
          variant="extended"
          size="small"
          type="submit"
          aria-label="add"
        >
          Add Contact
        </Fab>
      </Box>
      <Box sx={{ flexGrow: 1, ml: '20px' }}>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Box>
    </Box>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
