import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ setCategory }) => {
    return (
        <div className="container mx-auto pl-32 pr-32 text-align-center  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 mb-14">
            <h1 className="text-2xl font-bold col-span-4 select-none">Categories</h1>
            <Link to="/products/on-ear" className="bg-white p-4 rounded-lg border border-gray-300 cursor-pointer" onClick={() => setCategory("On-ear")}>
                On-ear headphones
            </Link>
            <Link to="/products/earbuds" className="bg-white p-4 rounded-lg border border-gray-300 cursor-pointer" onClick={() => setCategory("Earbuds")}>
                Earbuds
            </Link>
        </div>
    );
};

export default Categories;
