import React from 'react';

const Footer = () => {
    return (
        <footer className="max-w-screen-xl p-5 mx-auto text-white bg-orange-700">
            <div className="container mx-auto">
                <div className="grid grid-cols-5">
                    <div>
                        <h1 className="mb-2 font-bold ">Bakeryou</h1>
                        <p>Enjoy freshly baked bread, hot rolls, wholesome pastries, and delicious treats. Order delivery in a few steps and enjoy our in-house baked treats.</p>
                        <img src="URL_LOGO_HALAL" alt="Logo Halal" className="w-20 h-16 mt-4 " />
                    </div>
                    <div>

                    </div>
                    <div>
                        <h1 className="mb-2 font-bold ">Our Store</h1>
                        <ul className="space-y-1">
                            <li>Home</li>
                            <li>Product</li>
                            <li>Cart</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="mb-2 font-bold">Further Links</h1>
                        <ul className="space-y-1">
                            <li>Team & Condition</li>
                            <li>News</li>
                            <li>Learning</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="mb-2 font-bold">Get in Touch</h1>
                        <ul className="space-y-1">
                            <li>Surabaya</li>
                            <li>089xxxxxxx</li>
                            <li>Otakkanan@gmail.com</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="mt-5 text-center">
                <h1>Copyright @ 2024 Kelompok 2 | Bakeryou</h1>
            </div>
        </footer>
    );
}

export default Footer;