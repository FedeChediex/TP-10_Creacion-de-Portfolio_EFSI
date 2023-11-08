import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Layout = () => {
    
    return (
        < >
            <Link to={`/home`}><Button>Portafolio</Button></Link>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/creations">Creaciones</Link>
                <Link to="/info">Quien Soy</Link>
                <Link to="/favs">Favoritos</Link>
            </nav>

        <Outlet/>
            
        <footer className="footer">
            <div className="footer-text">
                <p>© 2022 Your Website Name</p>
            </div>
        </footer>
        </>
    );
};

export default Layout