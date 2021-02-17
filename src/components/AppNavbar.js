import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AppNavbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed={"top"}>
                <Navbar.Brand as={Link} to="/">Movie App</Navbar.Brand>
                <Nav className="mr-auto mt-1">
                    <Link to="/" className="ml-3">Home</Link>
                </Nav>
            </Navbar>
        </>
    )
}
