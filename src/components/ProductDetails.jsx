import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from './Product';
import { useAddToCart, useAddToWishlist } from '../utils';
import Navbar from './Navbar';
import Footer from './Footer';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(product => product.id === parseInt(id));
    const addToCart = useAddToCart();
    const addToWishlist = useAddToWishlist();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return <div className="text-center py-20">Product not found</div>;
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-16 py-16 lg:px-32 mb-40 mt-20">
                <div className="ml-28 mb-8">
                    <h1 className="text-lg text-gray-600">
                        <Link to="/" className="hover:underline">Home</Link> / <Link to={`/products/${product.category}`} className="hover:underline">{product.category}</Link> / {product.name}
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                    <div className="flex justify-center">
                        <img src={product.photo} alt={product.name} className="w-1/2 h-auto object-contain" />
                    </div>
                    <div className="flex flex-col justify-between py-12 px-2 mr-36">
                        <div>
                            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                            <div className="flex items-center mb-4">
                                {product.salePrice ? (
                                    <>
                                        <p className="text-2xl font-bold text-gray-800">{product.salePrice.toFixed(2)} €</p>
                                        {product.previousPrice && (
                                            <p className="text-xl text-gray-500 line-through ml-4">{product.previousPrice.toFixed(2)} €</p>
                                        )}
                                    </>
                                ) : (
                                    <p className="text-2xl font-bold text-gray-800">{product.price.toFixed(2)} €</p>
                                )}
                            </div>
                            {product.discount && (
                                <div className="bg-orange-700 text-white px-1 py-1 rounded-md text-sm mb-4 inline-block">
                                    -{product.discount.toFixed(0)}%
                                </div>
                            )}
                            <p className="text-gray-700 mb-4">Category: {product.category}</p>
                            <p className="text-gray-700 mb-8">{product.description}</p>
                        </div>
                        <div className="flex">
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-gray-100 hover:bg-gray-200 w-3/5 py-2 mr-2 rounded-sm transition duration-500"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={() => addToWishlist(product)}
                                className="bg-gray-100 hover:bg-gray-200 w-2/5 py-2 rounded-sm transition duration-500"
                            >
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
