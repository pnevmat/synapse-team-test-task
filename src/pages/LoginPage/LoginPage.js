import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import authorisationOperation from '../../redux/operations/authorisationOperation';
import selectors from '../../redux/selectors/selectors';

import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';

import styles from './loginPage.module.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [formSubmited, setFormSubmited] = useState(false);

    const userData = useSelector(selectors.getRegistrationData);

    const handleSubmit = (loginData) => {

        delete userData.nameChange;
        
        if (toString(userData) === toString(loginData)) {

            dispatch(authorisationOperation());

            setFormSubmited(true);
        };
        
    };

    return (
        <div className={styles.container}>
            <Header />
            <LoginForm onSubmit={handleSubmit} />
            {formSubmited && <Redirect to="/" />}
        </div>
    );
};

export default LoginPage;