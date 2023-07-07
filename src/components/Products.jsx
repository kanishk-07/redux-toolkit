import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';
import { getProducts } from '../store/slices/ProductsSlice';

const Products = () => {

    const dispatch = useDispatch()

    const products = useSelector((state) => {
        return state.products
    })

    useEffect(() => {
        dispatch(getProducts())
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <h3 className='text-center'>Products Dashboard</h3>
            <div className='d-flex w-100' style={{ flexWrap: 'wrap' }}>
                {products.map((product, index) => {
                    return <Product key={index} product={product} page={"dashboard"} />
                })}
            </div>
        </>
    )
}

export default Products