import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import CartIcon from '../Cart-Icon/CartIcon';

const Header = () => {
    return (
        <nav className='nav-menu container-fluid'>
            <div className='logo'>
                <Link to='/'>DIPSON<span>store</span></Link>
                
            </div>

            <ul>
                <li>
                <Link to='/'>
                    Home
                </Link>
                </li>
                
                <li>
                <Link to='/shop'>
                    Shop
                </Link>
                </li>  
            </ul>
            <CartIcon/>

        </nav>
    )
}

export default Header;