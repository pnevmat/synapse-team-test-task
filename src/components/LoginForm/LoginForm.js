import React, {useState} from 'react';

import validator from '../../utils/validator';

import styles from './loginForm.module.css';

const LoginForm = ({onSubmit}) => {
    const [emailChange, setEmailChange] = useState('');
    const [passwordChange, setPasswordChange] = useState('');

    const [emailValidation, setEmailValidation] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState(false);

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
                // setEmailValidation(validator(emailChange, validationSchema, errors));
                break;
            case 'password':
                setPasswordChange(value);
                setPasswordValidation(validator(passwordChange, validationSchema, errors));
                break;
            default:
                break;
        };
    };

    const handleSubmit = () => {

        if (emailChange !== '' && passwordChange !== '') {

            onSubmit({emailChange, passwordChange});
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
                        placeholder="????????????"
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
            </form>
        </div>
    );
};

export default LoginForm;