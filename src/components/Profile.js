import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import styles from './css/Profile.Module.css';


const LoginButton = () => {
    const { user, isAuthenticated}  = useAuth0();

    // Comprobamos el estado de autenticación del usuario
    if (isAuthenticated) {
        return(
            <div>
                <div className={styles.userInfo}>
                    <h2>Hola, {user.given_name}</h2>

                    <img src={user.picture} alt={user.name} />
                </div>
                <p>{user.email}</p>
            </div>
        )
        // Estado de no autenticado
        // Si no lo está devolvemos un mensaje para que se autentique mediante auth0
    } else {
        return (
            <div>
                Log in please to see your profile
            </div>
        )
    }
}

export default LoginButton;
