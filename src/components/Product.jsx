import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useAddToCart, useAddToWishlist } from '../utils';
import product1 from '../images/product-1.jpg';
import product2 from '../images/product-2.jpg';
import product3 from '../images/product-3.jpg';
import product4 from '../images/product-4.jpg';
import product5 from '../images/product-5.jpg';
import product6 from '../images/product-6.jpg';
import product7 from '../images/product-7.jpg';
import product8 from '../images/product-8.jpg';

const calculateDiscount = (previousPrice, salePrice) => {
    if (!previousPrice || !salePrice) return null;
    return ((previousPrice - salePrice) / previousPrice) * 100;
};

export const products = [
    {
        id: 1,
        name: "Kufje Sony WH-1000XM5, të kaltërta (model 2022)",
        photo: product1,
        salePrice: 459.50,
        previousPrice: 518.50,
        discount: calculateDiscount(518.50, 459.50),
        category: 'On-ear'
    },
    {
        id: 2,
        name: "Kufje Bose QuietComfort Ultra, zezë",
        photo: product2,
        salePrice: 559.50,
        previousPrice: 639.50,
        discount: calculateDiscount(639.50, 559.50),
        category: "On-ear"
    },
    {
        id: 3,
        name: "Kufje Sony WH-1000XM5, të zeza (model 2022)",
        photo: product3,
        salePrice: 529.50,
        previousPrice: 578.50,
        discount: calculateDiscount(578.50, 529.50),
        category: "On-ear"
    },
    {
        id: 4,
        name: "Kufje Bose QuietComfort 45, të zeza",
        photo: product4,
        price: 429.50,
        discount: null,
        category: 'On-ear'
    },
    {
        id: 5,
        name: "Kufje Sony WH-1000XM5, të argjendta (model 2022)",
        photo: product5,
        salePrice: 506.50,
        previousPrice: 562.50,
        discount: calculateDiscount(562.50, 506.50),
        category: 'On-ear'
    },
    {
        id: 6,
        name: "Kufje Bose QuietComfort Ultra, bardhë",
        photo: product6,
        price: 559.30,
        discount: null,
        category: 'On-ear'
    },
    {
        id: 7,
        name: "Kufje Samsung Galaxy Buds FE, bardhë",
        photo: product7,
        salePrice: 139.50,
        previousPrice: 169.50,
        discount: calculateDiscount(169.50, 139.50),
        category: 'Earbuds'
    },
    {
        id: 8,
        name: "Kufje Samsung Galaxy Buds FE, hiri",
        photo: product8,
        salePrice: 139.50,
        previousPrice: 169.50,
        discount: calculateDiscount(169.50, 139.50),
        category: 'Earbuds'
    }
];

const Product = () => {
    const addToCart = useAddToCart();
    const addToWishlist = useAddToWishlist();

    return (
        <div className="container mx-auto pl-32 pr-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <h1 className="text-2xl font-bold col-span-4 select-none">Products</h1>
            {products.map((product, index) => (
                <div key={index} className="relative border border-gray-300 rounded-lg p-4 flex flex-col items-center h-full">
                    {product.discount && (
                        <div className="absolute top-2 right-2 bg-orange-700 text-white px-2 py-1 rounded-md text-sm">
                            -{product.discount.toFixed(0)}%
                        </div>
                    )}
                    <img src={product.photo} alt={product.name} className="w-full h-48 object-contain mb-4" />
                    <h2 className="text-lg font-semibold mb-2 text-start ml-2">{product.name}</h2>
                    <div className="w-full flex justify-start ml-2">
                        {product.salePrice ? (
                            <>
                                <p className="text-gray-800 font-bold text-xl mb-2">{product.salePrice.toFixed(2)} €</p>
                                {product.previousPrice && (
                                    <p className="text-gray-500 line-through mt-1 ml-2">{product.previousPrice.toFixed(2)} €</p>
                                )}
                            </>
                        ) : (
                            <p className="text-gray-800 font-bold text-xl mb-2">{product.price.toFixed(2)} €</p>
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
            ))}
        </div>
    );
};

export default Product;