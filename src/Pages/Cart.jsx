import { HiMinusSm, HiPlusSm, HiTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { decreaseCartItem, fetchCart, increaseCartItem, removeCartItem } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { fetchProducts } from "../redux/slices/productUserSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.items);
    const products = useSelector((state) => state.productUser.products);
    const subtotal = useSelector((state) => state.cart.subtotal);

    useEffect(() => {
        dispatch(fetchCart());
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleIncreaseQuantity = (cartItem) => {
        dispatch(increaseCartItem({ id: cartItem.id }));
        dispatch(fetchCart());
    };

    const handleDecreaseQuantity = (cartItem) => {
        dispatch(decreaseCartItem({ id: cartItem.id }));
        dispatch(fetchCart());
    };

    const handleRemoveItem = (cartItem) => {
        dispatch(removeCartItem(cartItem.id));
        dispatch(fetchCart());
    };

    const handleCheckout = () => {
        const outOfStockItems = cart.filter(cartItem => {
            const product = products.find(p => p.id === cartItem.product_id);
            return product && cartItem.qty > product.stock;
        });

        if (outOfStockItems.length > 0) {
            const productNames = outOfStockItems.map((item) => {
              const product = products.find((p) => p.id === item.product_id);
              return product ? product.name : 'Unknown Product';
            });
            const errorMessage = `Stok produk ${productNames.join(', ')} tidak cukup`;
            toast.error(errorMessage);
          } else {
            navigate("/payment");
          }
    };

    return (
        <div className="p-4 pt-20 min-h-screen">
            {cart.length === 0 ? (
                <p className="text-center text-lg">Keranjang belanja Anda kosong</p>
            ) : (
                <>
                    {cart.map(cartItem => {
                        const product = products.find(p => p.id === cartItem.product_id);
                        if (!product) return null;

                        return (
                            <div key={cartItem.id} className="flex flex-col md:flex-row items-center justify-between mb-4">
                                <div className="flex items-center w-full md:w-auto">
                                    <img src={product.image_url} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
                                    <div className="ml-4">
                                        <p className="text-lg font-semibold">{product.name}</p>
                                        <p className="text-lg">Rp. {cartItem.price.toLocaleString()}</p>
                                        <div className="flex mt-2 space-x-4">
                                            <button onClick={() => handleDecreaseQuantity(cartItem)} className="bg-[#FFE0B5] px-2 py-1 rounded-md"><HiMinusSm /></button>
                                            <p className="text-gray-700 px-2">{cartItem.qty}</p>
                                            <button onClick={() => handleIncreaseQuantity(cartItem)} className="bg-[#FFE0B5] px-2 py-1 rounded-md"><HiPlusSm /></button>
                                            <button onClick={() => handleRemoveItem(cartItem)} className="text-[#201203] ml-4"><HiTrash size={24} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <p className="text-lg font-semibold">Total : Rp. {cartItem.total_price.toLocaleString()}</p>
                                </div>
                            </div>
                        );
                    })}
            <hr className="my-4 border-t border-gray-700" />
            <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
                <div>
                    <p className="text-lg font-semibold">Sub Total : Rp. {subtotal.toLocaleString()}</p>
                    <p>Shipping and taxes calculated at checkout</p>
                </div>
                <button onClick={handleCheckout} className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-hover mt-4 md:mt-0">Checkout</button>
            </div>
            </>
            )}
        </div>
    );
};

export default Cart;
