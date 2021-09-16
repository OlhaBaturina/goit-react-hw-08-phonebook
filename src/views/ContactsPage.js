import React from 'react';

import Contacts from '../Components/Contact/Contact';
import Filter from '../Components/Filter/Filter';
import { Form } from '../Components/Form/Form';
// import { useSelector, useDispatch } from 'react-redux';

// import authSelectors from '../redux/auth/auth-selectors';

const ContactsPage = () => {
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <div>
            {' '}
            <h1>PhoneBook</h1>
            <Form />
            <h2>Contacts</h2>
            <Filter />
            <Contacts />
        </div>
    );
};

export default ContactsPage;
