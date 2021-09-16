import s from './Login.module.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';

export function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <form className={s.thumb} onSubmit={handleSubmit}>
            <label>
                <span className={s.name}>Email</span>
                <input
                    className={s.input}
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    id={uuidv4()}
                    required
                />
            </label>

            <label>
                <span className={s.name}>Password</span>
                <input
                    className={s.input}
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    id={uuidv4()}
                    required
                />
            </label>
            <button type="submit" className={s.button}>
                LogIn
            </button>
        </form>
    );
}
