import React from 'react'

const NavbarPage = () => {
    return (
        <nav className="p-4 bg-white ">
            <div className="container flex justify-between max-w-screen-xl mx-auto text-black ">
                <div>
                    <a href="#" className="text-xl font-bold ">Bakeryou</a>
                </div>
                <div>
                    <ul className="flex space-x-7">
                        <li>
                            <a href="#" className="p-2 text-lg font-semibold rounded hover:bg-orange-500">home</a>
                        </li>
                        <li>
                            <a href="#" className="p-2 text-lg font-semibold rounded hover:bg-orange-500">Product</a>
                        </li>
                        <li>
                            <a href="#" className="p-2 text-lg font-semibold rounded hover:bg-orange-500">Cart</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <a href="#" className="p-2 text-lg font-semibold rounded hover:bg-orange-500">login</a>
                </div>

            </div>
        </nav>
    )
}

export default NavbarPage