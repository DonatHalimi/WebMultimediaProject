import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/cart', label: 'Cart' },
        { path: '/wishlist', label: 'Wishlist' },
        { path: '/blog', label: 'Blog' },
        { path: '/contact', label: 'Contact' },
        { path: '/about', label: 'About' },
    ];

    return (
        <nav className="flex justify-between px-20 py-10 items-center bg-white border-gray-300">
            <Link to="/">
                <h1 className="text-xl text-gray-800 font-bold select-none">Pixi</h1>
            </Link>
            <div className="flex items-center">
                {/* <div className="flex items-center mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="ml-2 outline-none bg-transparent" type="text" name="search" id="search" placeholder="Search..." />
                </div> */}
                <ul className="flex items-center space-x-6">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <Link to={link.path} className={`navbar-link font-semibold text-gray-700 ${location.pathname === link.path && 'navbar-link-active'}`}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;