import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import registrationOperation from '../../redux/operations/registrationOperation';
import regInterraptedOperation from '../../redux/operations/regInterraptedOperation';

import Header from '../../components/Header/Header';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import styles from './registrationPage.module.css';

const RegistrationPage = () => {
    const dispatch = useDispatch();
    const [formSubmited, setFormSubmited] = useState(false);

    useEffect(() => {

        return () => {
            if (!formSubmited) {
                dispatch(regInterraptedOperation());
            }
        }
    }, []);

    const handleSubmit = (registrationData) => {

        dispatch(registrationOperation(registrationData));

        setFormSubmited(true);
    };

    return (
        <div className={styles.container}>
            <Header />
            <RegistrationForm onSubmit={handleSubmit} />
            {formSubmited && <Redirect to="/" />}
        </div>
    );
};

export default RegistrationPage;