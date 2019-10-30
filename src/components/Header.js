import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo</h1><br></br>
            <Link to="/" style={linkStyle}>Home</Link>  -- 
            <Link to="/about" style={linkStyle}> About</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    padding: '5px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header
