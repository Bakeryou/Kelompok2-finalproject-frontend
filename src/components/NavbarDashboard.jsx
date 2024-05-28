import { useState } from 'react';
import { HiOutlineSearch, HiChevronDown, HiOutlineUser, HiOutlineLogout, HiX, HiDotsVertical } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const NavbarDashboard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const navigate = useNavigate();
    const currentUser = 'Admin'; // Replace with the actual current user data

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const handleNavigate = (path) => {
        navigate(path);
        setIsMenuOpen(false);
        setIsUserMenuOpen(false);
    };

    return (
        <nav className="bg-contentbox flex w-full h-[71px] px-7 items-center justify-end sticky top-0 z-50">
            {/* Search bar */}
            <div className="hidden lg:flex flex-1">
                <div className="relative">
                    <input type="text" placeholder="Search" className="w-64 border-2 border-border p-2 rounded-xl bg-transparent focus:ring focus:ring-focus focus:outline-none focus:border-focus" />
                    <button className="text-primary justify-center items-center absolute right-3 top-1/2 transform -translate-y-1/2">
                        <HiOutlineSearch size={20} />
                    </button>
                </div>
            </div>

            {/* Hamburger icon */}
            <div className="md:hidden">
                {isMenuOpen ? (
                    <HiX className="text-primary text-2xl cursor-pointer" onClick={toggleMenu} />
                ) : (
                    <HiDotsVertical className="text-primary text-2xl cursor-pointer" onClick={toggleMenu} />
                )}
            </div>

            <div className="hidden md:flex items-center space-x-4">
                {/* User Menu */}
                <div className="relative inline-block text-left">
                    <button className="inline-flex items-center text-primary hover:text-gray-500 focus:outline-none" onClick={toggleUserMenu}>
                        <span className="font-medium ml-3">{currentUser}</span>
                        <HiChevronDown className="w-5 h-5" />
                    </button>
                    {isUserMenuOpen && (
                        <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <button className="group flex items-center w-full px-2 py-2 text-sm text-primary hover:text-gray-500 focus:outline-none" onClick={() => handleNavigate('/profile')}>
                                <HiOutlineUser className="w-5 h-5 mr-2" />
                                My Profile
                            </button>
                            <button className="group flex items-center w-full px-2 py-2 text-sm text-primary hover:text-gray-500 focus:outline-none" onClick={() => handleNavigate('/logout')}>
                                <HiOutlineLogout className="w-5 h-5 mr-2" />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* mobile menu */}
            {isMenuOpen && (
                <div className="block absolute top-14 left-0 bg-contentbox w-full">
                    <button className="flex items-center text-primary hover:text-gray-500 py-2 px-3" onClick={() => handleNavigate('/profile')}>
                        <HiOutlineUser className="w-6 h-6" />
                        <span className="px-2 font-bold">My Profile</span>
                    </button>
                    <button className="flex items-center text-primary hover:text-gray-500 py-2 px-3" onClick={() => handleNavigate('/logout')}>
                        <HiOutlineLogout className="w-6 h-6" />
                        <span className="px-2 font-bold">Logout</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default NavbarDashboard;