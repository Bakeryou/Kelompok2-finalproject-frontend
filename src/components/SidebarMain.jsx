import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, setSelectedCategory } from '../redux/slices/productUserSlice';

const SidebarMain = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => state.productUser);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <aside className="pt-20 w-52 lg:w-64 bg-[#FFE0B5] md:block hidden">
      <div className="h-16 px-5 flex items-center">
        <span className="flex-1 ms-3 text-xl font-medium text-black">Category</span>
      </div>
      <div className="px-3 pb-4">
        <ul className="space-y-2 font-normal">
          <li key="all">
            <Link
              to="/product"
              className={`flex items-center w-full p-2 text-black rounded-lg hover:bg-[#D8AE7E] group ${selectedCategory === 'All' ? 'bg-[#D8AE7E]' : ''}`}
              onClick={() => handleCategoryClick({ id: 'All', name: 'All' })}
            >
              <span className="flex-1 ms-3 whitespace-nowrap text-left">All</span>
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to="/product"
                className={`flex items-center w-full p-2 text-black rounded-lg hover:bg-[#D8AE7E] group ${selectedCategory === category.id ? 'bg-[#D8AE7E]' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                <span className="flex-1 ms-3 whitespace-nowrap text-left">{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarMain;
