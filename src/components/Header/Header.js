import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
            <Link to='/'>Home</Link>
            <Link to='login'>Login</Link>
            <Link to='login'>about us</Link>
            <Link to='login'>Blogs</Link>
            </nav>
            
        </div>
    );
};

export default Header;