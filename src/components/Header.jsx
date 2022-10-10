import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center text-lg py-4 bg-blue-200'>
            <Link className='bg-indigo-700 hover:bg-orange-600 active:bg-orange-600 px-2 rounded text-white duration-300' to='/'>HOME</Link>
            <Link className='mx-2 bg-indigo-700 hover:bg-orange-600 px-2 rounded text-white duration-300' to='/review'>REVIEWS</Link>
            <Link className='bg-indigo-700 hover:bg-orange-600 px-2 rounded text-white duration-300' to='/dashboard'>DASHBOARD</Link>
            <Link className='mx-2 bg-indigo-700 hover:bg-orange-600 px-2 rounded text-white duration-300' to='/blog'>BLOGS</Link>
            <Link className='bg-indigo-700 hover:bg-orange-600 px-2 rounded text-white duration-300' to='/about'>ABOUT</Link>
        </div>
    );
};

export default Header;