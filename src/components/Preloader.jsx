import React, { useEffect, useState } from 'react';
import headphones from '../images/preloader.webp';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='preloader mx-auto my-auto'>
            <div className="spinner">
                <img src={headphones} alt="Loading" />
            </div>
        </div>
    );
}

export default Preloader;
