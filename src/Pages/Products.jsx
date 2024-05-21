// Product.jsx
import React, { useState, useRef } from 'react';
import { HiFilter } from "react-icons/hi";
import ProductCard from '../components/ProductCard';
import { useProduct } from '../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const { products, selectedCategory, categories, setSelectedCategory, setSelectedProduct } = useProduct();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const filterButtonRef = useRef(null);
    const navigate = useNavigate();

    const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        navigate(`/productdetail/${product.id}`);
    };

    return (
        <div className="p-4 pt-20 relative">
            <div className="pb-2 flex justify-between">
                <span className="font-semibold text-xl">{selectedCategory}</span>
                <button
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={toggleMenu}
                ref={filterButtonRef}>
                <HiFilter className="h-6 w-6 cursor-pointer" />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product, index) => (
                    <div key={index} onClick={() => handleProductClick(product)}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            {/* mobile menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-white shadow-lg absolute left-0 rounded-md w-full" style={{ top: filterButtonRef.current?.offsetTop + filterButtonRef.current?.offsetHeight + 'px' }}>
                <div className="flex flex-col items-center p-4">
                    {categories.map((category) => (
                    <button
                        key={category}
                        className="text-lg font-semibold hover:bg-[#D8AE7E] transition duration-150 ease-in-out py-2 w-full text-center rounded-xl"
                        onClick={() => {
                            setSelectedCategory(category);
                            setIsMenuOpen(false);
                        }}                        >
                        {category}
                    </button>
                    ))}
                </div>
              </div>
            )}
        </div>
    );
};

export default Products;