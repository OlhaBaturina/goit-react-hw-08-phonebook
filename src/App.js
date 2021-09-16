import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkUser } from './redux/auth/auth-operations';
import Header from './Components/Header/Header';
import CustomLoader from './Components/Loader/Loader';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./views/HomePage'));
const ContactsPage = lazy(() => import('./views/ContactsPage'));
const NotFound = lazy(() => import('./views/NotFound'));
const RegisterPage = lazy(() => import('./views/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUser());
    }, [dispatch]);

    return (
        <>
            <Header />
            <div className="Container">
                <Suspense fallback={<CustomLoader />}>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route exact path="/contacts">
                            <ContactsPage />
                        </Route>
                        <Route path="/register">
                            <RegisterPage />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>

                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </Suspense>
            </div>
            <ToastContainer />
        </>
    );
};
