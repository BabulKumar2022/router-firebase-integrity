import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, handleSignOut} =useFirebase();
    return (
        <div className='header'>
            <nav>
            <Link to='/'>Home</Link>
            <span>{user?.displayName && user.displayName}</span>
            {
                user?.uid
                 ?
                 <button onClick={handleSignOut}>Log Out</button>
                 :
                <Link to='login'>Login</Link>
            }
            
            <Link to='product'>product</Link>
            <Link to='order'>order</Link>
            <Link to='register'>register</Link>
            <Link to='about'>About us</Link>
            <Link to='blogs'>Blogs</Link>
            </nav>
            
        </div>
    );
};

export default Header;