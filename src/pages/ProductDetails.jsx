import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

export default function ProductDetails() {

    const [ product, setProduct ] = useState( null )
    const URL = "http://localhost:3005/products/3"
    const { id } = useParams();
    useEffect( () => {
        const getProduct = async () => {
            const response = await axios.get( `http://localhost:3005/products/${id}` );
            setProduct( response.data )
        }

        getProduct();
    }, [] )
    return (
        <div className='text-light bg-dark p-5 text-center'>
            <div className="container">
                <h1>Product Id : {id} </h1>
                <p className='fs-3 '>Product Name : <strong className='text-danger'>{product?.productName}</strong> </p>
                <p className='fs-3 '>Product Price :<strong className='text-danger'> {product?.price}</strong></p>
                <p className='fs-3 '>Product Quantity : <strong className='text-danger'>{product?.quantity}</strong> </p>
                <NavLink to="/products" className='btn btn-info'>Back To Products</NavLink>
            </div>
        </div>
    )
}
