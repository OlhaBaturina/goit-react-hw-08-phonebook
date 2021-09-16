import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const tokenState = {
    setToken(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    cleanToken() {
        axios.defaults.headers.common.Authorization = '';
    },
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async userData => {
    try {
        const { data } = await axios.post('/users/signup', userData);
        tokenState.setToken(data.token);

        return data;
    } catch (error) {
        return toast.error('Something went wrong! Try again', {
            theme: 'dark',
        });
    }
});

export const login = createAsyncThunk('auth/login', async userData => {
    try {
        const { data } = await axios.post('/users/login', userData);
        tokenState.setToken(data.token);

        return data;
    } catch (error) {
        return toast.error('Something went wrong! Try again', {
            theme: 'dark',
        });
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        tokenState.cleanToken();
    } catch (error) {
        return toast.error('Something went wrong! Try again', {
            theme: 'dark',
        });
    }
});

export const checkUser = createAsyncThunk(
    'auth/checkUser',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistorToken = state.auth.token;

        if (persistorToken === null) {
            return thunkApi.rejectWithValue();
        }
        tokenState.setToken(persistorToken);
        try {
            const { data } = await axios.get('/users/current');

            return data;
        } catch (error) {
            return toast.error('Something went wrong! Try again', {
                theme: 'dark',
            });
        }
    },
);
