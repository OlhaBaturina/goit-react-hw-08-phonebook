import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, checkUser } from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoadingUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            const { user, token } = action.payload;

            if (user && token) {
                state.user = user;
                state.token = token;
                state.isLoggedIn = true;
            }
            return;
        },

        [login.fulfilled](state, { payload }) {
            const { user, token } = payload;

            if (user && token) {
                state.user = user;
                state.token = token;
                state.isLoggedIn = true;
            }
            return;
        },

        [logout.fulfilled](state, _) {
            state.token = null;
            state.isLoggedIn = false;
            state.user = { name: null, email: null };
        },

        [checkUser.pending](state) {
            state.isLoadingUser = true;
        },

        [checkUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isLoadingUser = false;
        },

        [checkUser.rejected](state) {
            state.isLoadingUser = false;
        },
    },
});

export default authSlice.reducer;
