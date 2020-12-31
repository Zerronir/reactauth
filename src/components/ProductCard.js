import React from "react";
import {Card} from 'react-bootstrap';

const ProductCard = ({title, price, cat, id}) => {
    return (
        <Card style={{ width: '18rem', margin: '10px 15px', padding: '10px 10px'}}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {price} €
            </Card.Text>
            <Card.Text>
                <a href={`/productos/${cat}`}>Ver más de esta categoría</a>
                <a href={`/producto/ver/${id}`}>Ver producto</a>
            </Card.Text>
        </Card>
    )
}

export default ProductCard;
