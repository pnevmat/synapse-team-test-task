import React from 'react';

import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';

import styles from './loginPage.module.css';

const LoginPage = () => {

    const handleSubmit = () => {

    };

    return (
        <div className={styles.container}>
            <Header />
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
};

export default LoginPage;