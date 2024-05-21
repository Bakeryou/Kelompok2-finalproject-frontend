import React from 'react';
import { Link } from 'react-router-dom';
import { useProduct } from '../contexts/ProductContext';

const SidebarMain = () => {
    const { categories, selectedCategory, setSelectedCategory } = useProduct();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <aside className="pt-20 w-52 lg:w-64 bg-[#FFE0B5] md:block hidden">
            <div className="h-16 px-5 flex items-center">
                <span className="flex-1 ms-3 text-xl font-medium text-black">Category</span>
            </div>
            <div className="px-3 pb-4">
                <ul className="space-y-2 font-normal ">
                {categories.map((category) => (
                    <li key={category}>
                    <Link
                        to="/products"
                        className={`flex items-center w-full p-2 text-black rounded-lg hover:bg-[#D8AE7E] group ${selectedCategory === category ? 'bg-[#D8AE7E]' : ''}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        <span className="flex-1 ms-3 whitespace-nowrap text-left">{category}</span>
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
        </aside>
    );
};

export default SidebarMain;
