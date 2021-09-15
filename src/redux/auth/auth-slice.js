import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, checkUser } from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;

            console.log(
                'user:',
                state.user,
                'token:',
                state.token,
                'isLoggedIn:',
                state.isLoggedIn,
            );
        },
        [login.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logout.fulfilled](state, _) {
            state.token = null;
            state.isLoggedIn = false;
            state.user = { name: null, email: null };
        },
        [checkUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
        },
    },
});

export default authSlice.reducer;
