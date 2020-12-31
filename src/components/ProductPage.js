import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";


const ProductPage = ({match}) => {
    const { user, isAuthenticated }  = useAuth0();

    const [productos, setProductos] = useState([]);

    const id = match.params.id;
    console.log(id);
    const prepUrl = `http://127.0.0.1:8000/getProduct/${id}`;
    console.log(prepUrl)

    const productAPI = async () => {
        const resp = await fetch(prepUrl);
        const data = await resp.json();
        setProductos(data.productos);
        console.log(data.productos);
    }

    useEffect(() => {
        productAPI();
    }, []);

    if(isAuthenticated) {
        return (
            <Container>
                <div>
                    <h2>Producto</h2>
                    <p>Seguro que quieres este producto {user.given_name}?</p>
                </div>
            </Container>
        )
    } else {
        return (
            <Container>
                <div>
                    <h2>Producto</h2>
                </div>
            </Container>
        )
    }
}

export default ProductPage;
