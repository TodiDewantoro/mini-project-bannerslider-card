import React from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import './componentsCSS/Navbar.css'



export const NavigationBar = () => (
    
   <header>
        <Navbar expand="lg">
            <Navbar.Brand href="/">TANGANKU.ID</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Beranda</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/kategori">Kategori</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/beritaterkini">Berita Terkini</Nav.Link></Nav.Item>                    
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </header>
    
)
