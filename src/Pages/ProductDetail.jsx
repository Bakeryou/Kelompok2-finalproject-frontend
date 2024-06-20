import { useEffect, useState } from 'react';
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productUserSlice';
import { toast } from 'react-toastify';
import { addToCart } from '../redux/slices/cartSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { token, user } = useSelector((state) => state.auth);
    const products = useSelector((state) => state.productUser.products);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts()); // Ambil produk jika belum ada di Redux store
        }
    }, [dispatch, products.length]);

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
        if (!token) {
            toast.error('Silakan login terlebih dahulu.');
            navigate('/login');
            return;
        }

        if (user.role === 'admin') {
            toast.error('Admin tidak dapat menambahkan produk ke keranjang.');
            return;
        }

        if (product.stock <= 0) {
            toast.error('Produk ini sudah habis.');
            return;
        }

        dispatch(addToCart({ product_id: product.id, qty: quantity }))
            .then(() => {
                toast.success('Produk berhasil ditambahkan ke keranjang!');
            })
            .catch(() => {
                toast.error('Terjadi kesalahan. Silakan coba lagi.');
            });
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-4 pt-20">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img src={product.image_url} alt={product.name} className="w-full h-96 md:h-full object-cover rounded-lg" />
                </div>
                <div className="md:w-1/2 md:pl-4 w-full">
                    <h2 className="text-2xl font-bold mb-2 md:mt-0 text-center md:text-left">{product.name}</h2>
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold mb-2">Rp. {product.price.toLocaleString()}</p>
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
