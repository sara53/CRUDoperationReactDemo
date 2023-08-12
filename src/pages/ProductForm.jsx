import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function ProductForm() {
    return (
        <div className="container mt-5 bg-light p-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" name="productName" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter Product Price" name="price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" placeholder="Enter Product Quantity" name="quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Has Discount" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Add New Product
                </Button>
            </Form>
        </div>
    )
}
