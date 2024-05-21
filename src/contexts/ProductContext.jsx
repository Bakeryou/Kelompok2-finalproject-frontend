import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const categories = ['All', 'Bread', 'Pastry', 'Donuts', 'Cookies'];
  const products = [
    { id:1, name: 'Croissant', price: 15000, image: 'https://via.placeholder.com/150', category: 'Pastry', stock: 10, description: 'Made from layered dough and butter, come with a buttery and flaky taste.' },
    { id:2, name: 'Baguette', price: 15000, image: 'https://via.placeholder.com/150', category: 'Bread', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:3, name: 'Roti Gandum', price: 15000, image: 'https://via.placeholder.com/150', category: 'Bread', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:4, name: 'Muffin', price: 15000, image: 'https://via.placeholder.com/150', category: 'Pastry', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:5, name: 'Crumpet', price: 15000, image: 'https://via.placeholder.com/150', category: 'Pastry', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:6, name: 'Pretzel', price: 15000, image: 'https://via.placeholder.com/150', category: 'Pastry', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:7, name: 'Donut Chocolate', price: 15000, image: 'https://via.placeholder.com/150', category: 'Donuts', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:8, name: 'Cookie Vanilla', price: 15000, image: 'https://via.placeholder.com/150', category: 'Cookies', stock: 8, description: 'A long, narrow loaf of French bread.' },
    // Add more products as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ categories, products, selectedCategory, setSelectedCategory, selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
