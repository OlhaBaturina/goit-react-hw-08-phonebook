import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {},
    },
});

export default authSlice.reducer;
