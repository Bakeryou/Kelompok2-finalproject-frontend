import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiFilter } from 'react-icons/hi';
import { fetchProducts, fetchCategories, setSelectedCategory } from '../redux/slices/productUserSlice';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, selectedCategory } = useSelector((state) => state.productUser);
  const { categories } = useSelector((state) => state.productUser);

  const [productsList, setProductsList] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const filterButtonRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    dispatch(fetchProducts()); 
    dispatch(fetchCategories());
    dispatch(setSelectedCategory({ id: 'All', name: 'All' }));
  }, [dispatch]);

  useEffect(() => {
    // Filter produk berdasarkan kategori yang dipilih
    if (selectedCategory.id  === 'All') {
      setProductsList(products);
    } else {
      setProductsList(products.filter((product) => product.category_id === selectedCategory.id));
    }
    setCurrentPage(1); // Reset halaman ke 1 saat kategori berubah
  }, [products, selectedCategory]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category)); // Dispatch action untuk mengubah selectedCategory
    setIsMenuOpen(false);
  };

  const handleProductClick = (product) => {
    navigate(`/productdetail/${product.id}`);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsList.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(productsList.length / productsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4 pt-20 relative">
      <div className="pb-2 flex justify-between">
            <span className="font-semibold text-xl">{selectedCategory.name}</span>
            <button
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={toggleMenu}
                ref={filterButtonRef}>
                <HiFilter className="h-6 w-6 cursor-pointer" />
            </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentProducts.map((product, index) => (
            <div key={index} onClick={() => handleProductClick(product)}>
                <ProductCard product={product} />
            </div>
            ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        {/* mobile menu */}
        {isMenuOpen && (
            <div
            className="md:hidden bg-white shadow-lg absolute left-0 rounded-md w-full"
            style={{ top: filterButtonRef.current?.offsetTop + filterButtonRef.current?.offsetHeight + 'px' }}
            >
            <div className="flex flex-col items-center p-4">
                <button
                className={`text-lg font-semibold hover:bg-[#D8AE7E] transition duration-150 ease-in-out py-2 w-full text-center rounded-xl ${
                    selectedCategory === 'All' ? 'bg-[#D8AE7E]' : ''
                }`}
                onClick={() => {
                    handleCategoryClick({ id: 'All', name: 'All' });
                    setIsMenuOpen(false);
                }}
                >
                All
                </button>
                {categories.map((category) => (
                <button
                    key={category.id}
                    className={`text-lg font-semibold hover:bg-[#D8AE7E] transition duration-150 ease-in-out py-2 w-full text-center rounded-xl ${
                    selectedCategory === category.name ? 'bg-[#D8AE7E]' : ''
                    }`}
                    onClick={() => {
                    handleCategoryClick(category);
                    setIsMenuOpen(false);
                    }}
                >
                    {category.name}
                </button>
                ))}
            </div>
            </div>
        )}
    </div>
  );
};

export default Products;