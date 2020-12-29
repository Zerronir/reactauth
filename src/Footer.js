import React from 'react';
import {Container} from "react-bootstrap";

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#0e0e0e', color: '#fefefe', height: '20vh', position: "fixed", bottom: 0, width: '100vw' }}>
            <Container>
                <p>FOOTER</p>
            </Container>
        </div>
    )
}

export default Footer;
