import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null); // Ganti dengan data user yang sudah login
    const [activeMenu, setActiveMenu] = useState('home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };
    return (
        <nav className="fixed top-0 z-40 w-full bg-white shadow-md start-0">
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Hamburger icon */}
                        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 text-gray-700 transition duration-150 ease-in-out rounded-md sm:hidden hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-center flex-1 sm:justify-start">
                        <div className="flex-shrink-0">
                            <a href="#" className="text-lg font-bold">Bakeryou</a>
                        </div>
                        <div className="hidden sm:flex sm:ml-auto sm:mr-auto">
                            <div className="flex justify-center space-x-8">
                                <a href="#" className={`px-2 text-lg font-semibold rounded-xl ${activeMenu === 'home' ? 'bg-[#D8AE7E]' : 'hover:bg-[#D8AE7E]'} transition duration-150 ease-in-out`}
                                    onClick={() => handleMenuClick('home')}>Home</a>
                                <a href="#" className={`px-2 text-lg font-semibold rounded-xl ${activeMenu === 'products' ? 'bg-[#D8AE7E]' : 'hover:bg-[#D8AE7E]'} transition duration-150 ease-in-out`}
                                    onClick={() => handleMenuClick('products')}>Products</a>
                                <a href="#" className={`px-2 text-lg font-semibold rounded-xl ${activeMenu === 'cart' ? 'bg-[#D8AE7E]' : 'hover:bg-[#D8AE7E]'} transition duration-150 ease-in-out`}
                                    onClick={() => handleMenuClick('cart')}>Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 items-center hidden pr-2 sm:flex sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {currentUser ? (
                            <div className="relative">
                                <button
                                    onClick={toggleUserDropdown}
                                    className="px-2 text-lg font-semibold rounded-xl hover:bg-[#D8AE7E] transition duration-150 ease-in-out flex items-center"
                                >
                                    {currentUser}
                                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isUserDropdownOpen && (
                                    <div className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                My Profile
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Orders
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Logout
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <a href="#" className={`px-2 text-lg font-semibold rounded-xl ${activeMenu === 'login/register' ? 'bg-[#D8AE7E]' : 'hover:bg-[#D8AE7E]'} transition duration-150 ease-in-out`}
                                onClick={() => handleMenuClick('login/register')}>
                                Login/Register
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="hover:bg-[#D8AE7E] block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="#" className="hover:bg-[#D8AE7E] block px-3 py-2 rounded-md text-base font-medium">Products</a>
                    <a href="#" className="hover:bg-[#D8AE7E] block px-3 py-2 rounded-md text-base font-medium">Cart</a>
                    {currentUser ? (
                        <>
                            <div className="border-t border-gray-300"></div>
                            <a href="#" className="hover:bg-[#D8AE7E] block px-3 py-2 rounded-md text-base font-medium">
                                My Profile
                            </a>
                            <a href="#" className="hover:bg-[#D8AE7E] block px-3 py-2 rounded-md text-base font-medium">
                                Orders
                            </a>
                            <a href="#" className="hover:bg-[#D8AE7E] block px-3 py-2 rounded-md text-base font-medium">
                                Logout
                            </a>
                        </>
                    ) : (
                        <a href="#" className="hover:bg-[#D8AE7E] block px-3 py-2 rounded-md text-base font-medium">
                            Login/Register
                        </a>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Header