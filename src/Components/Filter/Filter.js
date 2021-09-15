import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterValue } from '../../redux/contacts/contact-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const Filter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();
    return (
        <label className={s.label}>
            Filter contact by name
            <input
                className={s.input}
                type="text"
                value={value}
                onChange={evt => {
                    dispatch(changeFilterValue(evt.target.value));
                }}
            />
        </label>
    );
};

export default Filter;
