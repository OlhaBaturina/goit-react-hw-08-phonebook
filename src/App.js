import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkUser } from './redux/auth/auth-operations';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import CustomLoader from './Components/Loader/Loader';
import PrivateRoute from './views/PrivateRoute';
import PublicRoute from './views/PublicRout';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authSelectors from './redux/auth/auth-selectors';
const HomePage = lazy(() => import('./views/HomePage'));
const ContactsPage = lazy(() => import('./views/ContactsPage'));
const NotFound = lazy(() => import('./views/NotFound'));
const RegisterPage = lazy(() => import('./views/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));

export const App = () => {
    const dispatch = useDispatch();
    const isLoadingUser = useSelector(authSelectors.getIsLoadingUser);

    useEffect(() => {
        dispatch(checkUser());
    }, [dispatch]);

    return (
        <div className="s.Container">
            {!isLoadingUser ? (
                <>
                    <Header />
                    <Container>
                        <Suspense fallback={<CustomLoader />}>
                            <Switch>
                                <PublicRoute exact path="/">
                                    <HomePage />
                                </PublicRoute>
                                <PrivateRoute path="/contacts">
                                    <ContactsPage />
                                </PrivateRoute>
                                <PublicRoute path="/register" restricted>
                                    <RegisterPage />
                                </PublicRoute>
                                <PublicRoute path="/login" restricted>
                                    <LoginPage />
                                </PublicRoute>

                                <Route>
                                    <NotFound />
                                </Route>
                            </Switch>
                        </Suspense>
                    </Container>
                </>
            ) : (
                <CustomLoader />
            )}
            <ToastContainer />
        </div>
    );
};
