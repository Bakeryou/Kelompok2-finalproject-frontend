import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../../redux/slices/categorySlice';
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import Pagination from '../../components/Pagination';

const Category = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { categories, loading, error } = useSelector((state) => state.category);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editCategory, setEditCategory] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState(''); // State tambahan untuk nama kategori yang akan diedit
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 10;

  useEffect(() => {
    dispatch(fetchCategories(token));
  }, [dispatch, token]);

  const toggleEditModal = () => setShowEditModal(!showEditModal);
  const toggleAddModal = () => setShowAddModal(!showAddModal);

  const handleEditCategory = (categoryId) => {
    const categoryToEdit = categories.find((category) => category.id === categoryId);
    setEditCategory(categoryToEdit);
    setEditCategoryName(categoryToEdit.name); // Set nama kategori yang akan diedit
    toggleEditModal();
  };

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategory(categoryId));
  };

  const handleAddCategory = (event) => {
    event.preventDefault();
    const categoryName = event.target.elements.addCategory.value;
    dispatch(createCategory({ name: categoryName }));
    event.target.reset();
    toggleAddModal();
  };

  const handleUpdateCategory = (event) => {
    event.preventDefault();
    dispatch(updateCategory({ id: editCategory.id, categoryData: { name: editCategoryName } }));
    toggleEditModal();
  };

  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Category List</h2>
        <button onClick={toggleAddModal} className="btn btn-secondary py-2 px-4">
          Add Category
        </button>
      </div>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-[#D8AE7E] text-center">
                <tr>
                  <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                    No
                  </th>
                  <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                    Category Name
                  </th>
                  <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentCategories.map((category, index) => (
                  <tr key={category.id}>
                    <td className="border-b border-l border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                      {indexOfFirstCategory + index + 1}
                    </td>
                    <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                      {category.name}
                    </td>
                    <td className="border-b border-r border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                      <button
                        onClick={() => handleEditCategory(category.id)}
                        className="mr-2 text-secondary hover:text-hover"
                      >
                        <HiOutlinePencilAlt size={24} />
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(category.id)}
                        className="text-red-700 hover:text-red-800"
                      >
                        <HiOutlineTrash size={24} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-full max-w-lg max-h-full overflow-y-auto bg-white p-8 rounded-lg mx-4">
            <button
              onClick={toggleEditModal}
              className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
              </button>
            <h3 className="text-lg font-semibold mb-4">Edit Category</h3>
            <form onSubmit={handleUpdateCategory}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label htmlFor="edit-category" className="block mb-2 text-sm font-medium">
                    Category
                  </label>
                  <input
                    type="text"
                    id="edit-category"
                    value={editCategoryName} // Gunakan value untuk mengontrol nilai input
                    onChange={(e) => setEditCategoryName(e.target.value)} // Update state saat input berubah
                    className="block w-full p-2.5 text-sm border rounded-lg"
                    placeholder="Enter category name"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-secondary py-2 px-4">
                Update Category
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-full max-w-lg max-h-full overflow-y-auto bg-white p-8 rounded-lg mx-4">
            <button
              onClick={toggleAddModal}
              className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <h3 className="text-lg font-semibold mb-4">Add Category</h3>
            <form onSubmit={handleAddCategory}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label htmlFor="add-category" className="block mb-2 text-sm font-medium">
                    Category
                  </label>
                  <input
                    type="text"
                    id="add-category"
                    name="addCategory"
                    className="block w-full p-2.5 text-sm border rounded-lg"
                    placeholder="Enter category name"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-secondary py-2 px-4">
                Add Category
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
