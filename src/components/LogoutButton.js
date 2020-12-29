import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import styles from '../App.module.css';

const LoginButton = () => {
    const { logout, isAuthenticated }  = useAuth0();

    return (
        isAuthenticated && (
            <button className={styles.logoutButton} onClick={() => logout()}>
                Log out
            </button>
        )
    )
}

export default LoginButton;
