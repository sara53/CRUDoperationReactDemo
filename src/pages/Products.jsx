import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Products() {

    let [ products, setProducts ] = useState( [] )
    const URL = 'http://localhost:3005/products'
    useEffect( () => {

        const fetchProducts = async () => {
            let response = await axios.get( URL );
            setProducts( response.data )

        }


        fetchProducts();
    }, [] )

    const deleteProduct = async ( id ) => {
        await axios.delete( `${URL}/${id}` )
        let newProducts = products.filter( ( product ) => product.id != id );
        setProducts( newProducts )
    }
    return (
        <div className='alert alert-secondary'>
            <h2 className='bg-light  p-2 rounded w-50 m-auto text-center'>Our Products</h2>
            <div className="container mt-4">
                <Table >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map( ( product ) => {
                                return (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.productName}</td>
                                        <td>{product.price} $</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <NavLink to={`/products/${product.id}`}>
                                                <i className="fs-2 mx-1 text-warning bar__databi bi-eye-fill"></i>
                                            </NavLink>

                                            <i className="fs-2 mx-1 text-info bar__databi bi-pencil-square"></i>
                                            <i onClick={() => deleteProduct( product.id )} className="fs-2 mx-1 text-danger bar__databi bi-trash3"></i>
                                        </td>
                                    </tr>
                                )

                            } )
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}
