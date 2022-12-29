import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();

    const search = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return search;
  };

  const renderContacts = contacts => {
    return contacts.map(({ name, id, number }) => (
      <li className={css.contact} key={id}>
        {name}: {number}
        <button className={css.deleteBtn} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ));
  };

  const visibleContacts = getVisibleContact();

  return (
    <ul className={css.contactsList}>{renderContacts(visibleContacts)}</ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  renderContacts: PropTypes.func,
  visibleContacts: PropTypes.array,
};
