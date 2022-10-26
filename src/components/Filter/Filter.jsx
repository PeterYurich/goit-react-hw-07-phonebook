import React from 'react';
import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

import css from '../../components/styles.module.scss';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(setFilter(evt.target.value.trim()));
  };

  return (
    <label className={css.label}>
      Filter by name:
      <input
        className={css.input}
        type="filter"
        name="filter"
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;
