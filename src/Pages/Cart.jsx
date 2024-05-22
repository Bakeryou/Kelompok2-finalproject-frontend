import { HiMinusSm, HiPlusSm, HiTrash } from "react-icons/hi";
import { cartItems } from '../data';

const Cart = () => {
    return (
        <div className="p-4 pt-20 h-screen bg-[#FFF2D7]">
            {cartItems.length === 0 ? (
                <p className="text-center text-lg">Keranjang belanja Anda kosong</p>
            ) : (
                <>
                    {cartItems.map(item => (
                        <div key={item.id} className="flex flex-col md:flex-row items-center justify-between mb-4">
                            <div className="flex items-center w-full md:w-auto">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                <div className="ml-4">
                                    <p className="text-lg font-semibold">{item.name}</p>
                                    <p className="text-lg">Rp. {item.price}</p>
                                        <div className="flex mt-2 space-x-4">
                                            <button className="bg-[#FFE0B5] px-2 py-1 rounded-md"><HiMinusSm /></button>
                                            <p className="text-gray-700 px-2">1</p>
                                            <button className="bg-[#FFE0B5] px-2 py-1 rounded-md"><HiPlusSm /></button>
                                            <button className="text-[#201203] ml-4"><HiTrash size={24} /></button>
                                        </div>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <p className="text-lg font-semibold">Total : Rp. {item.price * item.quantity}</p>
                            </div>
                        </div>
                    ))}
                    <hr className="my-4 border-t border-gray-700" />
                    <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
                        <div>
                            <p className="text-lg font-semibold">Sub Total : Rp. 27000</p>
                            <p>Shipping and taxes calculated at checkout</p>
                        </div>
                        <button className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-hover mt-4 md:mt-0">Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
