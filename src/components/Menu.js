import React from 'react';
import {NavLink} from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
            <nav className='flex h-8 bg-gradient-to-r from-purple-300 via-red-300 to-blue-300'>
                <NavLink to='/' className='flex-1 border-r-2 '>Home</NavLink>
                <NavLink to='/login' className='flex-1 border-r-2'>Login</NavLink>
                <NavLink to='/register' className='flex-1 border-r-2'>register</NavLink>
                <NavLink to='/login' className='flex-1 border-r-2'>logout</NavLink>
            </nav>
        );
    }
}

export default Menu;