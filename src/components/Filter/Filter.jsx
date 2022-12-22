import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  return (
    <label className={css.label}>
      Find contact by name:
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      ></input>
    </label>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
