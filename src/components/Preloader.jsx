import React, { useEffect, useState } from 'react';
import musicNote from '../images/preloader.webp';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`preloader ${loading ? '' : 'fade-out'}`}>
            <div className="spinner">
                <img src={musicNote} alt="Loading" />
            </div>
        </div>
    );
}

export default Preloader;
