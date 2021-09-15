import s from './Register.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PasswordChecklist from 'react-password-checklist';
import { v4 as uuidv4 } from 'uuid';
import { register } from '../../redux/auth/auth-operations';

// import { set } from '@reduxjs/toolkit/node_modules/immer/dist/internal';

export function Register() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    //   const handleChange = ({target: {name, value}}) => {
    // switch (name) {
    //     case 'name':
    //          return setName(value);
    //     case 'email':
    //          return setEmail(value);
    //     case 'password':
    //          return setPassword(value);
    //     default:
    //          return;
    //     }
    //   };

    const handleSubmit = e => {
        e.preventDefault();
        // console.log({ name, email, password });
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
        setPasswordAgain('');
    };

    return (
        <form className={s.thumb} onSubmit={handleSubmit}>
            <label>
                <span className={s.name}>Name</span>
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
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
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    id={uuidv4()}
                />
            </label>

            <label>
                <span className={s.name}>Password</span>
                <input
                    type="password"
                    className={s.input}
                    name="password"
                    value={password}
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
                    name="passwordAgain"
                    value={passwordAgain}
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
                minLength={8}
                iconSize={8}
                value={password}
                valueAgain={passwordAgain}
                onChange={isValid => {
                    setButtonDisabled(false);
                }}
            />

            <button
                type="submit"
                className={s.button}
                // disabled={buttonDisabled}
            >
                Register
            </button>
        </form>
    );
}
