import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addItem, removeItem } from '../store/slices/CartSlice';
import { useDispatch } from 'react-redux';

const Product = (props) => {

    const dispatch = useDispatch()

    const { product, page } = props

    const addToCart = () => {
        if (page === "dashboard")
            dispatch(addItem(product))
    }

    const removeFromCart = () => {
        if (page === "cart")
            dispatch(removeItem(product))
    }

    return (

        <div className="col-md-3 my-2">
            <Card className='h-100' style={{ width: '18rem' }}>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "130px" }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description.slice(0, 40)}</Card.Text>
                    <Card.Text>{`$${product.price}`}</Card.Text>
                </Card.Body>
                <Card.Footer className='bg-white text-center'>
                    {page === "dashboard" && <Button variant="primary" onClick={addToCart}>ADD TO CART</Button>}
                    {page === "cart" && <Button variant="danger" onClick={removeFromCart}>REMOVE FROM CART</Button>}
                </Card.Footer>
            </Card>
        </div>

    )
}

export default Product