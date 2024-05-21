import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <div className="mb-4">
        <img src={product.image} alt={product.name} className="w-full h-50 object-cover rounded-md" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600">Rp. {product.price}</p>
    </div>
  );
};

export default ProductCard;