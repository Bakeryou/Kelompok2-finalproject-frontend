import React, { useEffect, useState } from 'react';
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { useParams } from 'react-router-dom';
import { useProduct } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { products } = useProduct();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const selectedProduct = products.find(p => p.id === parseInt(id));
        setProduct(selectedProduct);
    }, [id, products]);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
            alert(`${product.name} berhasil ditambahkan ke keranjang!`);
        }
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-4 pt-20">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img src={product.image} alt={product.name} className="w-full h-96 md:h-full object-cover rounded-lg" />
                </div>
                <div className="md:w-1/2 md:pl-4 w-full">
                    <h2 className="text-2xl font-bold mb-2 md:mt-0 text-center md:text-left">{product.name}</h2>
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold mb-2">Rp. {product.price}</p>
                        <p className="text-lg font-semibold mb-2">Stock: {product.stock}</p>
                    </div>
                    <p className="mb-4 text-center md:text-left">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                        <button onClick={decreaseQuantity} className="bg-[#FFE0B5] px-3 py-2 rounded-md hover:bg-[#eab162]"><HiMinusSm size={20} /></button>
                        <p className="text-xl px-2">{quantity}</p>
                        <button onClick={increaseQuantity} className="bg-[#FFE0B5] px-3 py-2 rounded-md hover:bg-[#eab162]"><HiPlusSm size={20} /></button>
                    </div>
                    <button onClick={handleAddToCart} className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-hover mx-auto md:mx-0 block">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
