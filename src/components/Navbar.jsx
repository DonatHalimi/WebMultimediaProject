import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="flex justify-between px-20 py-10 items-center bg-white">
            <Link to="/">
                <h1 className="text-xl text-gray-800 font-bold select-none">Pixi</h1>
            </Link>
            <div className="flex items-center">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="ml-2 outline-none bg-transparent" type="text" name="search" id="search" placeholder="Search..." />
                </div>
                <ul className="flex items-center space-x-6">
                    <Link to={'/'} className={`navbar-link font-semibold text-gray-700 ${location.pathname === '/' && 'navbar-link-active'}`}>
                        <li>Home</li>
                    </Link>
                    <li className="font-semibold text-gray-700">Articles</li>
                </ul>
            </div>
        </nav>
    )
}
