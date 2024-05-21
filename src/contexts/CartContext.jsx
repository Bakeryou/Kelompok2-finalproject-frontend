import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity) => {
        setCartItems((prevItems) => {
            const existingProduct = prevItems.find(item => item.id === product.id);
            if (existingProduct) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prevItems, { ...product, quantity }];
        });
    };

    const decreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
            )
        );
    };

    const increaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity, increaseQuantity, removeItem, subtotal }}>
            {children}
        </CartContext.Provider>
    );
};
