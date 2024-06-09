import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const addToLocalStorage = (key, item) => {
    const items = JSON.parse(localStorage.getItem(key)) || [];
    items.push(item);
    localStorage.setItem(key, JSON.stringify(items));
};

export const useAddToCart = () => {
    const navigate = useNavigate();
    return (product) => {
        addToLocalStorage('cart', product);
        toast.success("Added item to cart!", {
            onClick: () => navigate('/cart'),
            autoClose: 2000,
            style: { cursor: 'pointer' }
        });
    };
};

export const useAddToWishlist = () => {
    const navigate = useNavigate();
    return (product) => {
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        const itemExists = wishlistItems.find(item => item.id === product.id);

        if (!itemExists) {
            addToLocalStorage('wishlist', product);
            toast.success("Added item to wishlist!", {
                onClick: () => navigate('/wishlist'),
                autoClose: 2000,
                style: { cursor: 'pointer' }
            });
        } else {
            toast.error("Item already in wishlist!", {
                onClick: () => navigate('/wishlist'),
                autoClose: 2000,
                style: { cursor: 'pointer' }
            });
        }
    };
};
