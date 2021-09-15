import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import componentReducer from './contacts/contact-reducer';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import authSlice from './auth/auth-slice';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, authSlice),
    contacts: componentReducer.contactsReducer,
    filter: componentReducer.filterReducer,
    loading: componentReducer.loading,
});

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
    ],
});

const persistor = persistStore(store);

export default { store, persistor };
