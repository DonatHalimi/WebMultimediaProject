import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from 'react-icons/fa';
import Navbar from './Navbar';
import { Footer } from './Footer';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlistItems(items);
    }, []);

    const removeFromWishlist = (name) => {
        const updatedWishlistItems = wishlistItems.filter(item => item.name !== name);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlistItems));
        setWishlistItems(updatedWishlistItems);
        toast.success("Removed from wishlist!");
    };

    const addToCart = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        toast.success("Added item to cart!", {
            onClick: () => navigate('/cart'),
            autoClose: 2000,
            style: { cursor: 'pointer' }
        });
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto pl-32 pr-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                {wishlistItems.length === 0 ? (
                    <p className="text-center w-full col-span-4">Your wishlist is empty.</p>
                ) : (
                    wishlistItems.map((item, index) => (
                        <div key={index} className="relative border border-gray-300 rounded-lg p-4 flex flex-col items-center h-full">
                            <img src={item.photo} alt={item.name} className="w-full h-48 object-contain mb-4" />
                            <h2 className="text-lg font-semibold mb-2 text-start ml-2">{item.name}</h2>
                            <div className="w-full flex justify-start">
                                {item.salePrice ? (
                                    <>
                                        <p className="text-gray-800 font-bold text-xl mb-2 ml-2">{item.salePrice.toFixed(2)} €</p>
                                        {item.previousPrice && (
                                            <p className="text-gray-500 line-through mb-2 ml-2">{item.previousPrice.toFixed(2)} €</p>
                                        )}
                                    </>
                                ) : (
                                    <p className="text-gray-800 font-bold text-xl mb-2 ml-2">{item.price.toFixed(2)} €</p>
                                )}
                            </div>
                            <div className="mt-auto flex w-full">
                                <button
                                    onClick={() => addToCart(item)}
                                    className="bg-gray-200 hover:bg-gray-300 w-1/2 py-2 mb-2 ml-2 rounded-sm"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => removeFromWishlist(item.name)}
                                    className="bg-gray-200 text-gray-600 hover:bg-gray-300 w-1/2 py-2 mb-2 ml-2 rounded-sm"
                                >
                                    <FaTrash style={{ marginLeft: '55px' }} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Wishlist;
