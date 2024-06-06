import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.user);    
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    const handleNavigate = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    const handleLogout = () => {
        dispatch(logout());
        setIsUserDropdownOpen(false);
        navigate('/');
    };

    return (
        <nav className="fixed top-0 z-40 w-full bg-white shadow-md start-0">
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Hamburger icon */}
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        >
                            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-center flex-1 sm:justify-start">
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-lg font-bold">Bakeryou</Link>
                        </div>
                        <div className="hidden sm:flex sm:ml-auto sm:mr-auto">
                            <div className="flex justify-center space-x-8">
                                <Link
                                    to="/"
                                    className={`px-2 text-lg font-semibold rounded-xl ${location.pathname === '/' ? 'bg-[#D8AE7E]' : 'hover:bg-[#D8AE7E]'} transition duration-150 ease-in-out`}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/product"
                                    className={`px-2 text-lg font-semibold rounded-xl ${location.pathname === '/product' ? 'bg-[#D8AE7E]' : 'hover:bg-[#D8AE7E]'} transition duration-150 ease-in-out`}
                                >
                                    Products
                                </Link>
                                <Link
                                    to="/cart"
                                    className={`px-2 text-lg font-semibold rounded-xl ${location.pathname === '/cart' ? 'bg-[#D8AE7E]' : 'hover:bg-[#D8AE7E]'} transition duration-150 ease-in-out`}
                                >
                                    Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 items-center hidden pr-2 sm:flex sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {currentUser && currentUser.username ? (
                            <div className="relative">
                                <button
                                    onClick={toggleUserDropdown}
                                    className="px-2 text-lg font-semibold rounded-xl hover:bg-[#D8AE7E] transition duration-150 ease-in-out flex items-center"
                                >
                                    {currentUser.username}
                                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isUserDropdownOpen && (
                                    <div className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                My Profile
                                            </Link>
                                            <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Orders
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className={`px-2 text-lg font-semibold rounded-xl ${location.pathname === '/login' ? 'bg-[#D8AE7E]' : 'hover:bg-[#D8AE7E]'} transition duration-150 ease-in-out`}
                            >
                                Login/Register
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link
                        to="/"
                        className={`hover:bg-[#D8AE7E] block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/' ? 'bg-[#D8AE7E]' : ''}`}
                        onClick={() => handleNavigate('/')}
                    >
                        Home
                    </Link>
                    <Link
                        to="/product"
                        className={`hover:bg-[#D8AE7E] block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/products' ? 'bg-[#D8AE7E]' : ''}`}
                        onClick={() => handleNavigate('/product')}
                    >
                        Products
                    </Link>
                    <Link
                        to="/cart"
                        className={`hover:bg-[#D8AE7E] block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/cart' ? 'bg-[#D8AE7E]' : ''}`}
                        onClick={() => handleNavigate('/cart')}
                    >
                        Cart
                    </Link>
                    {currentUser ? (
                        <>
                            <div className="border-t border-gray-300"></div>
                            <Link
                                to="/profile"
                                className={`hover:bg-[#D8AE7E] block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/profile' ? 'bg-[#D8AE7E]' : ''}`}
                                onClick={() => handleNavigate('/profile')}
                            >
                                My Profile
                            </Link>
                            <Link
                                to="/orders"
                                className={`hover:bg-[#D8AE7E] block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/orders' ? 'bg-[#D8AE7E]' : ''}`}
                                onClick={() => handleNavigate('/orders')}
                            >
                                Orders
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="hover:bg-[#D8AE7E] block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className={`hover:bg-[#D8AE7E] block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/login' ? 'bg-[#D8AE7E]' : ''}`}
                            onClick={() => handleNavigate('/login')}
                        >
                            Login/Register
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
