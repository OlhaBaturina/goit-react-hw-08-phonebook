import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { UserMenu } from './Components/UserMenu/UserMenu';
import Header from './Components/Header/Header';
import CustomLoader from './Components/Loader/Loader';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomePage = lazy(() => import('./views/HomePage'));
const ContactsPage = lazy(() => import('./views/ContactsPage'));
const NotFound = lazy(() => import('./views/NotFound'));

export const App = () => {
    // const showLoader = useSelector(({ loading }) => loading);

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
                        <Route path="/authorization">
                            <UserMenu />
                        </Route>

                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </Suspense>
            </div>
            {/* <h1 className={s.title}>PhoneBook</h1>
            <Form />
            {showLoader && <CustomLoader/>}
            <h2 className={s.title}>Contacts</h2>
            <Filter />
            <Contacts /> */}
            <ToastContainer />
            {/* {showLoader && <CustomLoader/>} */}
        </>
    );
};
