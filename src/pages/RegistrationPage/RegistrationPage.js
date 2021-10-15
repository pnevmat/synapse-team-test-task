import React from 'react';

import Header from '../../components/Header/Header';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import styles from './registrationPage.module.css';

const RegistrationPage = () => {

    const handleSubmit = (registrationData) => {
        console.log('Registration data in reg page: ', registrationData);
    };

    return (
        <div className={styles.container}>
            <Header />
            <RegistrationForm onSubmit={handleSubmit} />
        </div>
    );
};

export default RegistrationPage;