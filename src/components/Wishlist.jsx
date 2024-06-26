import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import Navbar from './Navbar';
import { Footer } from './Footer';
import { useAddToCart } from '../utils';

const Wishlist = () => {
    const [wishlistproducts, setWishlistproducts] = useState([]);
    const addToCart = useAddToCart();

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlistproducts(products);
    }, []);

    const removeFromWishlist = (name) => {
        const updatedWishlistproducts = wishlistproducts.filter(item => item.name !== name);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlistproducts));
        setWishlistproducts(updatedWishlistproducts);
        toast.success("Removed item from wishlist!");
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow mb-52">
                <div className="container mx-auto pl-32 pr-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                    <h1 className="text-2xl font-bold col-span-4">Your Wishlist</h1>
                    {wishlistproducts.length === 0 ? (
                        <p className="text-center w-full col-span-4">Your wishlist is empty.</p>
                    ) : (
                        wishlistproducts.map((product, index) => (
                            <div key={index} className="relative border border-gray-300 rounded-lg p-4 flex flex-col items-center h-full">
                                <Link to={`/product/${product.id}`} className="w-full h-full">

                                    {product.discount && (
                                        <div className="absolute top-2 right-2 bg-orange-700 text-white px-2 py-1 rounded-md text-sm">
                                            -{product.discount.toFixed(0)}%
                                        </div>
                                    )}
                                    <img src={product.photo} alt={product.name} className="w-full h-48 object-contain mb-4" />
                                    <h2 className="text-lg font-semibold mb-2 text-start ml-2">{product.name}</h2>
                                    <div className="w-full flex justify-start">
                                        {product.salePrice ? (
                                            <>
                                                <p className="text-gray-800 font-bold text-xl mb-2 ml-2">{product.salePrice.toFixed(2)} €</p>
                                                {product.previousPrice && (
                                                    <p className="text-gray-500 line-through mt-1 ml-2">{product.previousPrice.toFixed(2)} €</p>
                                                )}
                                            </>
                                        ) : (
                                            <p className="text-gray-800 font-bold text-xl mb-2 ml-2">{product.price.toFixed(2)} €</p>
                                        )}
                                    </div>
                                </Link>

                                <div className="mt-auto flex w-full">
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="bg-gray-100 hover:bg-gray-200 w-4/5 py-2 mb-2 ml-2 rounded-sm transition duration-500"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={() => removeFromWishlist(product.name)}
                                        className="bg-gray-100 text-gray-600 hover:bg-gray-200 w-1/5 py-2 mb-2 ml-2 text-xl rounded-sm transition duration-500"
                                        aria-label='Trash-Button'
                                    >
                                        <FaTrash style={{ marginLeft: '15px' }} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Wishlist;
