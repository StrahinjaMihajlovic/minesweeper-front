import React from 'react';
import {NavLink} from "react-router-dom";
import AppConfig from '../config/AppConfig.js';
import Authorization from './auth/Authorization.js'
class Menu extends Authorization {
    componentDidMount() {
        this.isLoggedIn();
    }


    render() {
        return (
            <nav className='flex h-8 bg-gradient-to-r from-purple-300 via-red-300 to-blue-300'>
                <NavLink to='/' className='flex-1 border-r-2 '>Home</NavLink>
                {!AppConfig.isLoggedIn ? <NavLink to='/login' className='flex-1 border-r-2'>Login</NavLink> : ''}
                {!AppConfig.isLoggedIn ? <NavLink to='/register' className='flex-1 border-r-2'>register</NavLink> : '' }
                {AppConfig.isLoggedIn ? <NavLink to='/logout' className='flex-1 border-r-2'>logout</NavLink> : '' }
            </nav>
        );
    }
}

export default Menu;