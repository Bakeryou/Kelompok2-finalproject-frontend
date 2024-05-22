import croissant from '../src/assets/img/croissant.png'

export const categories = ['All', 'Bread', 'Pastry', 'Donuts', 'Cookies'];

export const products = [
    { id:1, name: 'Croissant', price: 15000, image: croissant, category: 'Pastry', stock: 10, description: 'Made from layered dough and butter, come with a buttery and flaky taste.' },
    { id:2, name: 'Salt Bread Garlic', price: 18000, image: 'https://via.placeholder.com/150', category: 'Bread', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:3, name: 'Cromboloni', price: 25000, image: 'https://via.placeholder.com/150', category: 'Pastry', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:4, name: 'Salt Bread Cheese', price: 18000, image: 'https://via.placeholder.com/150', category: 'Bread', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:5, name: 'Puff Pastry', price: 20000, image: 'https://via.placeholder.com/150', category: 'Pastry', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:6, name: 'Donat Stawberry', price: 12000, image: 'https://via.placeholder.com/150', category: 'Donuts', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:7, name: 'Donat Chocolate', price: 12000, image: 'https://via.placeholder.com/150', category: 'Donuts', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:8, name: 'Cookie Vanilla', price: 10000, image: 'https://via.placeholder.com/150', category: 'Cookies', stock: 8, description: 'A long, narrow loaf of French bread.' },
];

export const cartItems = [
    { id: 1, name: 'Croissant', price: 15000, image: croissant, quantity: 1 },
    { id: 2, name: 'Donat Chocolate', price: 12000, image: 'https://via.placeholder.com/150', quantity: 1 },
];
