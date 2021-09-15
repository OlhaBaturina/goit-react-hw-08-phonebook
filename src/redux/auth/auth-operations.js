import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// export const register = createAsyncThunk('/users/signup', async credentials =>{
//     try {
// const {data} = await axios.post('/users/signup', credentials);
// console.log(data);
// return data;
//     }
//  catch (error) {
// console.log(error)
// }
// });

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
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const login = createAsyncThunk('auth/login', async userData => {
    try {
        const { data } = await axios.post('/users/login', userData);
        tokenState.setToken(data.token);
        console.log('hello,', data.user.name);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    await axios.post('/users/logout');
    tokenState.cleanToken();
});

export const checkUser = createAsyncThunk(
    'auth/checkUser',
    async (_, thunkApi) => {
        const token = thunkApi.getState().auth.token;
        tokenState.setToken(token);
        const { data } = await axios.get('/users/current');
        return data;
    },
);
