import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import validator from '../../utils/validator';

import styles from './loginForm.module.css';

const LoginForm = ({onSubmit}) => {
    const [emailChange, setEmailChange] = useState('');
    const [passwordChange, setPasswordChange] = useState('');

    const [emailValidation, setEmailValidation] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState(false);

    const [formSubmited, setFormSubmited] = useState(false);

    const validationSchema = {
        capitalLetters: /([A-Z])/g,
        numbers: /([0-9])/g,
        symbols: /\W/g
    };

    const errors = {
        length: 'Statement should be at least 6 characters',
        symbols: 'Statement should contain at least 1 capital, 1 number and 1 symbol letter'
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        switch (name) {
            case 'email':
                setEmailChange(value);
                setEmailValidation(validator(emailChange, validationSchema, errors));
                console.log('emailValidation before check: ', emailValidation);
                break;
            case 'password':
                setPasswordChange(value);
                setPasswordValidation(validator(passwordChange, validationSchema, errors));
                console.log('passwordValidation before check: ', passwordValidation);
                break;
            default:
                break;
        };
    };

    const handleSubmit = () => {

        if (!emailValidation && !passwordValidation) {
            console.log('Email phrase: ', emailChange);
            console.log('Password phrase: ', passwordChange);

            setFormSubmited(true);
        };
    };

    return (
        <div className={styles.container}>
            <form
                className={styles.form}
                onSubmit={e => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <h3 className={styles.title}>Login</h3>
                <label htmlFor="" name="login">
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="E-mail"
                        name="email"
                        onChange={e => {
                            handleChange(e);
                        }}
                    />
                    {emailValidation && <p className={styles.errorMessage}>{emailValidation}</p>}
                </label>
                <label className={styles.inputLabel}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Пароль"
                        name="password"
                        onChange={e => {
                            handleChange(e);
                        }}
                    />
                    {passwordValidation && <p className={styles.errorMessage}>{passwordValidation}</p>}
                </label>
                <button className={styles.buttonSubmit}   type="submit">
                    Sign in
                </button>
                {formSubmited && <Redirect to="/" />}
            </form>
        </div>
    );
};

export default LoginForm;