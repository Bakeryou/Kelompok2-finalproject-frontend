import { Link } from "react-router-dom";
import { useState } from "react";
import InputField from "../components/InputField.jsx";
import { cartItems } from '../data.js';

const Payment = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        postalCode: "",
        city: "",
        note: "",
        orderType: "pickup"
    });

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
            orderType: e.target.value
        });
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = 3000;
    const shipping = 10000;
    const total = subtotal + tax + shipping;

    return (
        <div className="p-4 py-20 min-h-screen">
            <div className="flex flex-col md:flex-row justify-center items-start">
                <div className="w-full lg:w-1/2 mr-0 md:mr-4 md:mb-0 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Order Options</h2>
                    <div className="flex items-center mb-4">
                        <input 
                            type="radio" 
                            id="pickup" 
                            name="orderType" 
                            value="pickup" 
                            checked={formData.orderType === "pickup"} 
                            onChange={handleOrderTypeChange} 
                        />
                        <label htmlFor="pickup" className="ml-2">Pickup</label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input 
                            type="radio" 
                            id="delivery" 
                            name="orderType" 
                            value="delivery" 
                            checked={formData.orderType === "delivery"} 
                            onChange={handleOrderTypeChange} 
                        />
                        <label htmlFor="delivery" className="ml-2">Delivery</label>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
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
                            type="tel"
                            placeholder="Input your phone number here"
                            name="phone"
                            value={formData.phone}
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
                            name="postalCode"
                            value={formData.postalCode}
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
                                name="note"
                                className="input"
                                placeholder="Notes (optional)"
                                value={formData.note}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>
                <div className="w-full lg:w-1/2 ml-0 md:ml-4">
                    <h2 className="text-2xl text-center font-bold mb-4">Order Summary</h2>
                    <hr className="my-4 border-b border-black" />
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between mb-2">
                            <p>{item.name}</p>
                            <p>Rp. {(item.price * item.quantity).toLocaleString()} - {item.quantity}x</p>
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
                    <Link to="/paymentsuccess">
                        <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary mt-4">Pay Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Payment;
