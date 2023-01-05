import React from 'react';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { TextField } from '@mui/material';

const Filter = () => {
  const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  return (
    <TextField
      autoComplete="off"
      sx={{ mt: '10px' }}
      size="small"
      fullWidth
      placeholder="Find contact by name"
      type="search"
      value={filter}
      onChange={changeFilter}
    ></TextField>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
