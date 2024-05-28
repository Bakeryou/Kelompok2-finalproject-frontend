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
    { id:9, name: 'Puff Pastry', price: 20000, image: 'https://via.placeholder.com/150', category: 'Pastry', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:10, name: 'Donat Stawberry', price: 12000, image: 'https://via.placeholder.com/150', category: 'Donuts', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:11, name: 'Donat Chocolate', price: 12000, image: 'https://via.placeholder.com/150', category: 'Donuts', stock: 8, description: 'A long, narrow loaf of French bread.' },
    { id:12, name: 'Cookie Vanilla', price: 10000, image: 'https://via.placeholder.com/150', category: 'Cookies', stock: 8, description: 'A long, narrow loaf of French bread.' },
];

export const cartItems = [
    { id: 1, name: 'Croissant', price: 15000, image: croissant, quantity: 1 },
    { id: 2, name: 'Donat Chocolate', price: 12000, image: 'https://via.placeholder.com/150', quantity: 1 },
];

export const customerData = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phoneNumber: '123456789',
    postalCode: '12345',
    address: 'Jln. Kenangan, Surabaya Jawa Timur',
  };
  
  export const orderData = [
    {
      id: 1,
      customerId: 1,
      orderSummary: {
        items: [
          { name: 'Donat', price: 15000, quantity: 1 },
          { name: 'Croissant', price: 12000, quantity: 1 },
        ],
        subtotal: 27000,
        tax: 3000,
        shipping: 0,
        total: 30000,
        orderOptions: 'Pickup',
      },
      orderTime: {
        orderedAt: '2024-05-22 19:00',
        completedAt: '2024-05-22 19:20',
      },
    },
    {
      id: 2,
      customerId: 1,
      orderSummary: {
        items: [
          { name: 'Croissant', price: 12000, quantity: 2 },
        ],
        subtotal: 24000,
        tax: 4000,
        shipping: 5000,
        total: 33000,
        orderOptions: 'Delivery',
      },
      orderTime: {
        orderedAt: '2024-05-23 10:00',
        completedAt: '2024-05-23 10:30',
      },
    },
    {
      id: 3,
      customerId: 1,
      orderSummary: {
        items: [
          { name: 'Muffin', price: 8000, quantity: 3 },
        ],
        subtotal: 24000,
        tax: 3000,
        shipping: 0,
        total: 27000,
        orderOptions: 'Pickup',
      },
      orderTime: {
        orderedAt: '2024-05-24 15:00',
        completedAt: '2024-05-24 15:30',
      },
    },
    {
      id: 4,
      customerId: 1,
      orderSummary: {
        items: [
          { name: 'Baguette', price: 15000, quantity: 1 },
        ],
        subtotal: 15000,
        tax: 2500,
        shipping: 2000,
        total: 19500,
        orderOptions: 'Delivery',
      },
      orderTime: {
        orderedAt: '2024-05-25 08:00',
        completedAt: '2024-05-25 08:30',
      },
    },
    {
      id: 5,
      customerId: 1,
      orderSummary: {
        items: [
          { name: 'Pretzel', price: 10000, quantity: 2 },
        ],
        subtotal: 20000,
        tax: 3500,
        shipping: 0,
        total: 23500,
        orderOptions: 'Pickup',
      },
      orderTime: {
        orderedAt: '2024-05-26 12:00',
        completedAt: '2024-05-26 12:30',
      },
    },
  ];
