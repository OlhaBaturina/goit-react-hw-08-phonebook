import s from './Register.module.css';
import React, { useState } from 'react';
import PasswordChecklist from 'react-password-checklist';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { getSubmitData } from '../../redux/contacts-operations';
import { toast } from 'react-toastify';

export function Register() {
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    console.log(password);

    return (
        <form
            className={s.thumb}
            // onSubmit={handleSubmit}
        >
            <label>
                <span className={s.name}>Name</span>
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    // value={name}
                    // onChange={handleClick}
                    id={uuidv4()}
                />
            </label>

            <label>
                <span className={s.name}>Email</span>
                <input
                    type="email"
                    className={s.input}
                    name="email"
                    required
                    // onChange={handleClick}
                    // value={number}
                    id={uuidv4()}
                />
            </label>

            <label>
                <span className={s.name}>Password</span>
                <input
                    type="password"
                    className={s.input}
                    name="password"
                    required
                    onChange={e => setPassword(e.target.value)}
                    id={uuidv4()}
                />
            </label>

            <label>
                <span className={s.name}>Password Again</span>
                <input
                    type="password"
                    className={s.input}
                    name="password"
                    required
                    onChange={e => setPasswordAgain(e.target.value)}
                    id={uuidv4()}
                />
            </label>

            <PasswordChecklist
                rules={[
                    'minLength',
                    'specialChar',
                    'number',
                    'capital',
                    'match',
                ]}
                minLength={5}
                iconSize={8}
                value={password}
                valueAgain={passwordAgain}
                onChange={isValid => {}}
            />

            <button type="submit" className={s.button}>
                Register
            </button>
        </form>
    );
}
