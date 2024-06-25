import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiOutlineCollection, HiOutlineUser, HiOutlineClipboardList, HiOutlineLogout } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from '../redux/slices/authSlice';
import { resetProfile } from "../redux/slices/profileSlice";
import { resetOrderState } from "../redux/slices/orderSlice";

const SidebarDashboard = () => {
    const menus = [
        { name: "Add Products", icon: HiOutlineCollection, path: "/admin/products" },
        { name: "Add Category", icon: HiOutlineCollection, path: "/admin/category" },
        { name: "Users", icon: HiOutlineUser, path: "/admin/users" },
        { name: "Orders", icon: HiOutlineClipboardList, path: "/admin/orders" },
        { name: "Profile", icon: HiOutlineUser, margin: true, path: "/admin/profile" },
        { name: "Logout", icon: HiOutlineLogout, path: "/login" },
    ];
    
    const dispatch = useDispatch();
    const location = useLocation();
    const [open, setOpen] = useState(true);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 720) {
                setOpen(false);
            } else {
                setOpen(true);
            }
        };
        
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(resetProfile());
        dispatch(resetOrderState());
    };

    return (
        <div className={`bg-[#FFE0B5] min-h-screen ${open ? "w-72" : "w-16"} duration-500 relative px-4`}>
            <div className="py-3 flex justify-between items-center">
                <div className="flex flex-1 items-center mb-4">
                    <h1 className={`origin-left font-bold text-2xl duration-200 flex items-center ${open ? "" : "scale-0"}`}>
                        Bakeryou
                    </h1>
                </div>
                <div className={`absolute end-4 top-4 flex`}>
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
                {menus.map((menu, i) => (
                    <Link to={menu.path} key={i} style={{ textDecoration: 'none' }}>
                        <div
                            className={` ${menu.margin && "mt-5"} group flex items-center text-sm cursor-pointer gap-3.5 font-medium p-2 hover:bg-[#D8AE7E] rounded-md ${
                                location.pathname === menu.path && "bg-[#D8AE7E]" // Menyertakan efek hover untuk menu yang aktif
                            }`}
                            onClick={() => {
                                if (menu.name === 'Logout') {
                                    handleLogout();
                                }
                            }} // Mengatur menu yang aktif saat diklik
                        >
                            <div>{React.createElement(menu.icon, { size: "20" })}</div>
                            <h2
                                className={`whitespace-pre ${
                                    !open && "overflow-hidden"
                                }`}
                            >
                                {menu.name}
                            </h2>
                            <h2
                                className={`${
                                    open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-primary rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                            >
                                {menu.name}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SidebarDashboard;