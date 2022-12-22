import { createAction } from '@reduxjs/toolkit';

// pending
export const fetchContactRequest = createAction('contacts/fetchContactRequest');

//fulfilled
export const fetchContactSeccess = createAction('contacts/fetchContactSeccess');

//rejected
export const fetchContactError = createAction('contacts/fetchContactError');
