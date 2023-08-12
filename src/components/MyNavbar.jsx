import React, { useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { CounterContext } from '../context/counterContext'
import { NavLink } from 'react-router-dom'
export default function MyNavbar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/products">Products </NavLink>
                        <NavLink className="nav-link" to="/products/0/edit">Add Product</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
