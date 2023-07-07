import React from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';

const Cart = () => {

    const cartProducts = useSelector((state) => {
        return state.cart
    })

    return (
        <div className='d-flex w-100' style={{ flexWrap: 'wrap' }}>
            {cartProducts.map((product, index) => {
                return <Product key={index} product={product} page={"cart"} />
            })}
        </div>
    )
}

export default Cart