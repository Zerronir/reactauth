import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";

const Home  = () => {

    const { user, isAuthenticated }  = useAuth0();

    const [productos, setProductos] = useState([]);

    const getProducts = async () => {
        const resp = await fetch('http://127.0.0.1:8000/listProducts');
        const data = await resp.json();
        setProductos(data.productos);
        console.log(data.productos);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container>
            <p>Home</p>
        </Container>
    )
}

export default Home;
