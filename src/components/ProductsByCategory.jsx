import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from './Product';
import Navbar from './Navbar';
import { Footer } from './Footer';
import { useAddToCart, useAddToWishlist } from '../utils';

const ProductsByCategory = ({ category }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const addToCart = useAddToCart();
    const addToWishlist = useAddToWishlist();
    const navigate = useNavigate();

    useEffect(() => {
        if (Array.isArray(products)) {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    }, [category]);

    return (
        <>
            <Navbar />
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow mb-52">
                    <div className="container mx-auto pl-32 pr-32 mt-10">
                        <div className="flex justify-between items-center mb-6">
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-white text-gray-900 rounded-full p-3 shadow hover:bg-gray-100 transition duration-700"
                                style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </div>
                        <h1 className="text-2xl font-bold col-span-4 mb-6">{category} Headphones</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredProducts.length === 0 ? (
                                <p className="text-center w-full col-span-4">No products found.</p>
                            ) : (
                                filteredProducts.map((product, index) => (
                                    <div key={index} className="relative border border-gray-300 rounded-lg p-4 flex flex-col products-center h-full">
                                        {product.discount && (
                                            <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded-md text-sm">
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
                                                        <p className="text-gray-500 line-through mb-2 mt-1 ml-2">{product.previousPrice.toFixed(2)} €</p>
                                                    )}
                                                </>
                                            ) : (
                                                <p className="text-gray-800 font-bold text-xl mb-2 ml-2">{product.price.toFixed(2)} €</p>
                                            )}
                                        </div>
                                        <div className="mt-auto flex w-full">
                                            <button
                                                onClick={() => addToCart(product)}
                                                className="bg-gray-100 hover:bg-gray-200 w-4/5 py-2 mb-2 ml-2 rounded-sm transition duration-500"
                                            >
                                                Add to Cart
                                            </button>
                                            <button
                                                onClick={() => addToWishlist(product)}
                                                className="bg-gray-100 hover:bg-gray-200 w-1/5 py-2 mb-2 ml-2 text-xl rounded-sm transition duration-500"
                                            >
                                                &#9825;
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default ProductsByCategory;
