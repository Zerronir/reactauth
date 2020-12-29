import React from 'react';
import {Container} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";

const UserPage = () => {
    const { user, isAuthenticated }  = useAuth0();
    if(isAuthenticated) {
        return(
            <Container>
                <div>
                    <div>
                        <h1>Hola {user.given_name}</h1>
                        <p>Esta es tu página de usuario</p>
                    </div>

                    <div>
                        <img src={user.picture} alt={user.given_name}/>
                    </div>

                </div>
            </Container>
        )
    } else {
        return(
            <Container>
                <div>
                    <h4>Prohíbido</h4>
                </div>
            </Container>
        )
    }
}

export default UserPage;
