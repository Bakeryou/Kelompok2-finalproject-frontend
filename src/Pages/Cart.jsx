import { useState, useEffect } from "react";
import { HiMinusSm, HiPlusSm, HiTrash } from "react-icons/hi";
import { cartItems } from '../data'; // Pastikan ini adalah data mock atau data dari backend
import { Link } from "react-router-dom";

const Cart = () => {
    useEffect(() => {
        document.title = "Bakeryou | Cart";
    }, []);

    const [items, setItems] = useState(cartItems);

    const increment = (id) => {
        setItems(items.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };
    const decrement = (id) => {
        setItems(items.map(item => 
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const getSubtotal = () => {
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
        <div className="p-4 pt-20 h-screen">
            {items.length === 0 ? (
                <p className="text-center text-lg">Keranjang belanja Anda kosong</p>
            ) : (
                <>
                    {items.map(item => (
                        <div key={item.id} className="flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className="flex items-center w-full md:w-auto">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                <div className="ml-4">
                                    <p className="text-lg font-semibold">{item.name}</p>
                                    <p className="text-lg">Rp. {item.price}</p>
                                    <div className="flex mt-2 space-x-4">
                                        <button onClick={() => decrement(item.id)} className="bg-[#FFE0B5] px-2 py-1 rounded-md"><HiMinusSm /></button>
                                        <p className="text-gray-700 px-2">{item.quantity}</p>
                                        <button onClick={() => increment(item.id)} className="bg-[#FFE0B5] px-2 py-1 rounded-md"><HiPlusSm /></button>
                                        <button onClick={() => removeItem(item.id)} className="text-[#201203] ml-4"><HiTrash size={24} /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <p className="text-lg font-semibold">Total: Rp. {item.price * item.quantity}</p>
                            </div>
                        </div>
                    ))}
                    <hr className="my-4 border-t border-gray-700" />
                    <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
                        <div>
                            <p className="text-lg font-semibold">Sub Total: Rp. {getSubtotal()}</p>
                            <p>Shipping and taxes calculated at checkout</p>
                        </div>
                        <Link to="/payment">
                            <button className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-hover mt-4 md:mt-0">Checkout</button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
