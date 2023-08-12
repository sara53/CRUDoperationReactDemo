
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, addProduct, editProduct } from '../API/productAPI'
import { useGetData } from '../hooks/useGetData';
export default function ProductForm() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [ product, setProduct ] = useState( {
        productName: '',
        price: '',
        quantity: '',
        hasDiscount: false
    } );

    useEffect( () => {


        if ( id != 0 ) {
            const fetchData = async () => {
                const response = await getProductById( id )
                setProduct( response.data )
            }
            fetchData();
        }
    }, [] )
    const changeHandler = ( e ) => {
        if ( e.target.name == 'hasDiscount' ) {
            setProduct( {
                ...product,
                [ e.target.name ]: e.target.checked
            } )
        } else {
            setProduct( {
                ...product,
                [ e.target.name ]: e.target.value
            } )
        }

    }

    const submitHandler = async ( e ) => {
        e.preventDefault();
        if ( id == 0 ) {
            await addProduct( product )
        } else {
            await editProduct( id, product )
        }

        navigate( '/products' )

    }
    return (
        <div className="container mt-5 bg-light p-5">
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control onChange={changeHandler} type="text" placeholder="Enter Product Name" name="productName" value={product.productName} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={changeHandler} type="number" placeholder="Enter Product Price" name="price" value={product.price} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control onChange={changeHandler} type="number" placeholder="Enter Product Quantity" name="quantity" value={product.quantity} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={changeHandler} type="checkbox" label="Has Discount" name="hasDiscount" checked={product.hasDiscount} />
                </Form.Group>
                <Button variant="dark" type="submit">
                    {id == 0 ? 'Add New Product ' : 'Edit Product'}
                </Button>
            </Form>
        </div>
    )
}
