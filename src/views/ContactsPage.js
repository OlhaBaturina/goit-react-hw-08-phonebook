import React from 'react';

import Contacts from '../Components/Contact/Contact';
import Filter from '../Components/Filter/Filter';
import { Form } from '../Components/Form/Form';

const ContactsPage = () => (
    <div>
        <h1>PhoneBook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
    </div>
);

export default ContactsPage;
