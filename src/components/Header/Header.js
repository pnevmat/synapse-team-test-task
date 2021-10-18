import React from 'react';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import logoutOperation from '../../redux/operations/logoutOperation';

import selectors from '../../redux/selectors/selectors';

import styles from './header.module.css';

const Header = ({regInterrapted}) => {
    const dispatch = useDispatch();

    const onLgout = () => {
        dispatch(logoutOperation());
    };

    const isAuthrised = useSelector(selectors.getIsAuthorised);
    const userData = useSelector(selectors.getRegistrationData);

    return (
        <header>
            <div className={styles.header}>
                {isAuthrised && <NavLink className={styles.headerLink} to="/movies">MOVIES</NavLink>}
                {!isAuthrised && !regInterrapted && <NavLink className={styles.headerLink} to="/signup">SIGN UP</NavLink>}
                {!isAuthrised && <NavLink className={styles.headerLink} to="/login">SIGN IN</NavLink>}
                <NavLink className={styles.headerLink} to="/">BROWSE</NavLink>
                {isAuthrised && <span className={styles.headerLink} onClick={onLgout}>LOGOUT</span>}
                {isAuthrised && <span className={styles.welcomeMessage}>WELCOME {userData.nameChange}</span>}
                {!isAuthrised && regInterrapted && <NavLink className={styles.headerLink} to="/signup">RESUME SIGN UP</NavLink>}
            </div>
        </header>
    );
};

export default Header;