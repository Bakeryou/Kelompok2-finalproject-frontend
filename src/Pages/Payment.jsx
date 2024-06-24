import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InputField from "../components/InputField.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, resetCart } from "../redux/slices/cartSlice.js";
import { fetchUserData } from "../redux/slices/profileSlice.js";
import { checkoutOrder } from "../redux/slices/orderSlice.js";
import { toast } from "react-toastify";

const Payment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cart.items);
    const products = useSelector((state) => state.productUser.products);
    const profile = useSelector((state) => state.profile);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        address: '',
        postal_code: '',
        city: '',
        notes: '',
        order_type: 'pickup',
      });

    useEffect(() => {
        dispatch(fetchCart());
        dispatch(fetchUserData(token));
  }, [dispatch, token]);

    useEffect(() => {
        if (profile) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                name: profile.name,
                email: profile.email,
                phone_number: profile.phone_number,
                address: profile.address,
                postal_code: profile.postal_code,
                city: profile.city,
            }));
        }
    }, [profile]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleOrderTypeChange = (e) => {
        setFormData({
            ...formData,
            order_type: e.target.value
        });
    };

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = subtotal * 0.1; // 10% tax
    const shipping = formData.order_type === "pickup" ? 0 : (cart.total_weight > 1000 ? 25000 : 15000); // shipping cost based on weight
    const total = subtotal + tax + shipping;

    const handleCheckout = () => {
        // Proses pembuatan order
        const orderData = {
          order_type: formData.order_type,
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone_number,
          customer_address: formData.address,
          customer_postal_code: formData.postal_code,
          customer_city: formData.city,
          notes: formData.notes,
          subtotal: subtotal,
          tax: tax,
          shipping: shipping,
          total: total,
        };
    
        dispatch(checkoutOrder(orderData))
          .then(() => {
            dispatch(resetCart()); // Reset cart setelah berhasil checkout
            toast.success('Order berhasil dibuat!');
            navigate('/paymentsuccess'); // Redirect ke halaman success setelah berhasil checkout
          })
          .catch((error) => {
            toast.error(`Terjadi kesalahan: ${error.message}`);
          });
      };

    return (
        <div className="p-4 py-20 min-h-screen">
            <div className="flex flex-col md:flex-row justify-center items-start">
                <div className="w-full lg:w-1/2 mr-0 md:mr-4 md:mb-0 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Order Options</h2>
                    <div className="flex items-center mb-4">
                        <input 
                            type="radio" 
                            id="pickup" 
                            name="order_type" 
                            value="pickup" 
                            checked={formData.order_type === "pickup"} 
                            onChange={handleOrderTypeChange} 
                        />
                        <label htmlFor="pickup" className="ml-2">Pickup</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input 
                            type="radio" 
                            id="delivery" 
                            name="order_type" 
                            value="delivery" 
                            checked={formData.order_type === "delivery"} 
                            onChange={handleOrderTypeChange} 
                        />
                        <label htmlFor="delivery" className="ml-2">Delivery</label>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">User Information</h2>
                    <form>
                        <InputField
                            label="Name"
                            type="text"
                            placeholder="Input your name here"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input"
                        />
                        <InputField
                            label="Email"
                            type="email"
                            placeholder="Input your email here"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input"
                        />
                        <InputField
                            label="Phone Number"
                            type="text"
                            placeholder="Input your phone number here"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            className="input"
                        />
                        <div className="flex flex-col gap-2 mt-2">
                            <label className="font-medium text-primary">Address</label>
                            <textarea
                                name="address"
                                className="input"
                                placeholder="Input your address here"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                        <InputField
                            label="Postal Code"
                            type="text"
                            placeholder="Postal Code"
                            name="postal_code"
                            value={formData.postal_code}
                            onChange={handleChange}
                            className="input"
                        />
                        <InputField
                            label="City"
                            type="text"
                            placeholder="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="input"
                        />
                        <div className="flex flex-col gap-2 mt-2">
                            <label className="font-medium text-primary">Note</label>
                            <textarea
                                name="notes"
                                className="input"
                                placeholder="Notes (optional)"
                                value={formData.notes}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>
                <div className="w-full lg:w-1/2 ml-0 md:ml-4">
                    <h2 className="text-2xl text-center font-bold mb-4">Order Summary</h2>
                    <hr className="my-4 border-b border-black" />
                    {cart.map((cartItem) => (
                        <div key={cartItem.id} className="flex justify-between mb-2">
                            <p>{products.find(p => p.id === cartItem.product_id).name}</p>
                            <p>Rp. {(cartItem.total_price).toLocaleString()} - {cartItem.qty}x</p>
                        </div>
                    ))}
                    <hr className="my-4 border-b border-black" />
                    <div className="flex justify-between mb-2">
                        <p>Sub Total</p>
                        <p>Rp. {subtotal.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p>Tax</p>
                        <p>Rp. {tax.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p>Shipping</p>
                        <p>Rp. {shipping.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p>Total</p>
                        <p>Rp. {total.toLocaleString()}</p>
                    </div>
                    {/* <Link to="/paymentsuccess"> */}
                        <button onClick={handleCheckout} className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary mt-4">Pay Now</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;
