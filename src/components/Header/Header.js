import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './header.module.css';

const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                <NavLink className={styles.headerLink} to="/movies">MOVIES</NavLink>
                <NavLink className={styles.headerLink} to="/signup">SIGN UP</NavLink>
                <NavLink className={styles.headerLink} to="/login">SIGN IN</NavLink>
                <NavLink className={styles.headerLink} to="/">BROWSE</NavLink>
                <NavLink className={styles.headerLink} to="/signup">RESUME SIGN UP</NavLink>
            </div>
        </header>
    );
};

export default Header;