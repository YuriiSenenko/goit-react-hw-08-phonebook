import React from 'react';

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

import { Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

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
      <Grid item xs={12} md={6} key={id}>
        <Paper
          sx={{
            display: 'flex',
            alignItems: 'center',
            pl: '5px',
          }}
          elevation={8}
        >
          <Typography sx={{ flexGrow: 1 }} variant="h6" component="span">
            {name}: {number}
          </Typography>

          <Tooltip title="Delete" placement="bottom">
            <IconButton
              sx={{ alignItems: 'flex-end' }}
              onClick={() => onDeleteContact(id)}
            >
              <DeleteForeverOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Paper>
      </Grid>
    ));
  };

  const visibleContacts = getVisibleContact();

  return (
    <Box sx={{ mt: '10px' }}>
      <Grid spacing={1} container>
        {renderContacts(visibleContacts)}
      </Grid>
    </Box>
  );
};
export default ContactList;

ContactList.propTypes = {
  renderContacts: PropTypes.func,
  visibleContacts: PropTypes.array,
};
