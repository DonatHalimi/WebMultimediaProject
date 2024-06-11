import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from 'react-icons/fa';
import Navbar from './Navbar';
import { Footer } from './Footer';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(items);
    }, []);

    const removeFromCart = (name) => {
        const updatedCartItems = cartItems.filter(item => item.name !== name);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
        toast.success("Removed item from cart!");
    };

    const incrementQuantity = (name) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.name === name) {
                item.quantity = (item.quantity || 1) + 1;
            }
            return item;
        });
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };

    const decrementQuantity = (name) => {
        let itemRemoved = false;
        const updatedCartItems = cartItems.map(item => {
            if (item.name === name) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    itemRemoved = true;
                    return null;
                }
            }
            return item;
        }).filter(item => item !== null);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
        if (itemRemoved) {
            toast.success("Removed item from cart!");
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow mb-52">
                <div className="container mx-auto mt-20">
                    <h1 className="text-2xl font-bold col-span-4 mb-4">Your Cart</h1>
                    {cartItems.length === 0 ? (
                        <p className="text-center w-full">Your cart is empty.</p>
                    ) : (
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 border-b">Photo</th>
                                    <th className="py-2 border-b">Name</th>
                                    <th className="py-2 border-b">Price</th>
                                    <th className="py-2 border-b">Quantity</th>
                                    <th className="py-2 border-b"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => {
                                    const price = item.salePrice || item.price;
                                    const quantity = item.quantity || 1;
                                    const totalPrice = price * quantity;
                                    const discountAmount = item.previousPrice ? (item.previousPrice - price) : 0;
                                    return (
                                        <tr key={index} className="text-center p-4">
                                            <td className="p-4 border-b">
                                                <img src={item.photo} alt={item.name} className="w-16 h-16 object-contain mx-auto" />
                                            </td>
                                            <td className="py-2 border-b">{item.name}</td>
                                            <td className="py-2 border-b">
                                                <div className="flex flex-col items-center">
                                                    <span>{totalPrice.toFixed(2)} €</span>
                                                    {discountAmount > 0 && (
                                                        <span className="text-green-500 text-sm">
                                                            * Discount Savings: {(discountAmount * quantity).toFixed(2)} €
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="py-2 border-b">
                                                <div className="flex items-center justify-center">
                                                    <button
                                                        onClick={() => decrementQuantity(item.name)}
                                                        className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-l-sm transition duration-300 ease-in-out"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-4 py-1 border-t border-b">{quantity}</span>
                                                    <button
                                                        onClick={() => incrementQuantity(item.name)}
                                                        className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-r-sm transition duration-300 ease-in-out"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-2 border-b">
                                                <button
                                                    onClick={() => removeFromCart(item.name)}
                                                    className="text-gray-500 hover:text-gray-800 p-4 transition duration-300 ease-in-out"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Cart;