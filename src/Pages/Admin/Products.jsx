import { products } from '../../data';
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import { useState } from 'react';
import Pagination from '../../components/Pagination';

const Products = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const toggleEditModal = () => setShowEditModal(!showEditModal);
  const toggleAddModal = () => setShowAddModal(!showAddModal);

  const handleEditProduct = (productId) => {
    const productToEdit = products.find(product => product.id === productId);
    setEditProduct(productToEdit);
    toggleEditModal();
  };

  const handleDeleteProduct = (productId) => {
    alert("Deleting product with ID: " + productId);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Product List</h2>
        <button onClick={toggleAddModal} className="btn btn-secondary py-2 px-4">
          Add Product
        </button>
      </div>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
            <thead className="bg-[#D8AE7E] text-center">
                <tr>
                  <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">Image</th>
                  <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">Product Name</th>
                  <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">Category</th>
                  <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">Price</th>
                  <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">Stock</th>
                  <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">Description</th>
                  <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">Weight</th>
                  <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="border-b border-l border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                      <img src={product.image} alt={product.name} className="h-15 w-15" />
                    </td>
                    <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">{product.name}</td>
                    <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">{product.category}</td>
                    <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">Rp. {product.price.toLocaleString()}</td>
                    <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">{product.stock}</td>
                    <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">{product.description}</td>
                    <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">{product.weight} grams</td>
                    <td className="border-b border-r border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                      <button onClick={() => handleEditProduct(product.id)} className="mr-2 text-secondary hover:text-hover">
                        <HiOutlinePencilAlt size={24} />
                      </button>
                      <button onClick={() => handleDeleteProduct(product.id)} className="text-red-700 hover:text-red-800">
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
            <button onClick={toggleEditModal} className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
              <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <h3 className="text-lg font-semibold mb-4">Edit Product</h3>
            <form>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label htmlFor="edit-name" className="block mb-2 text-sm font-medium">Name</label>
                  <input type="text" id="edit-name" defaultValue={editProduct.name} className="block w-full p-2.5 text-sm border rounded-lg" placeholder="Product name" required />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="edit-price" className="block mb-2 text-sm font-medium">Price</label>
                  <input type="number" id="edit-price" defaultValue={editProduct.price} className="block w-full p-2.5 text-sm border rounded-lg" placeholder="Price" required />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="edit-category" className="block mb-2 text-sm font-medium">Category</label>
                  <select id="edit-category" defaultValue={editProduct.category} className="block w-full p-2.5 text-sm border rounded-lg" required>
                    <option value="">Select category</option>
                    <option value="Bread">Bread</option>
                    <option value="Pastry">Pastry</option>
                    <option value="Donut">Donut</option>
                    <option value="Cookies">Cookies</option>
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="edit-stock" className="block mb-2 text-sm font-medium">Stock</label>
                  <input type="number" id="edit-stock" defaultValue={editProduct.stock} className="block w-full p-2.5 text-sm border rounded-lg" placeholder="Stock" required />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="edit-weight" className="block mb-2 text-sm font-medium">Weight (grams)</label>
                  <input type="number" id="edit-weight" defaultValue={editProduct.weight} className="block w-full p-2.5 text-sm border rounded-lg" placeholder="Product weight in grams" required />
                </div>
                <div className="col-span-2">
                  <label htmlFor="edit-image" className="block mb-2 text-sm font-medium">Image</label>
                  <input type="file" id="edit-image" className="block w-full p-2.5 text-sm border rounded-lg" />
                </div>
                <div className="col-span-2">
                  <label htmlFor="edit-description" className="block mb-2 text-sm font-medium">Description</label>
                  <textarea id="edit-description" defaultValue={editProduct.description} rows="4" className="block w-full p-2.5 text-sm border rounded-lg" placeholder="Product description"></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-secondary py-2 px-4">Update Product</button>
            </form>
          </div>
        </div>
      )}
      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-full max-w-lg max-h-full overflow-y-auto bg-white p-8 rounded-lg mx-4">
            <button onClick={toggleAddModal} className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
              <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <h3 className="text-lg font-semibold mb-4">Create New Product</h3>
            <form>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label htmlFor="add-name" className="block mb-2 text-sm font-medium">Name</label>
                  <input type="text" id="add-name" className="block w-full p-2.5 text-sm border rounded-lg" placeholder="Product name" required />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="add-price" className="block mb-2 text-sm font-medium">Price</label>
                  <input type="number" id="add-price" className="block w-full p-2.5 text-sm border rounded-lg" placeholder="Price" required />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="add-category" className="block mb-2 text-sm font-medium">Category</label>
                  <select id="add-category" className="block w-full p-2.5 text-sm border rounded-lg" required>
                    <option value="">Select category</option>
                    <option value="Bread">Bread</option>
                    <option value="Pastry">Pastry</option>
                    <option value="Donut">Donut</option>
                    <option value="Cookies">Cookies</option>
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="add-stock" className="block mb-2 text-sm font-medium">Stock</label>
                  <input type="number" id="add-stock" className="block w-full p-2.5 text-sm border rounded-lg" placeholder="Stock" required />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="edit-weight" className="block mb-2 text-sm font-medium">Weight (grams)</label>
                  <input type="number" id="edit-weight" className="block w-full p-2.5 text-sm border rounded-lg" placeholder="Product weight" required />
                </div>
                <div className="col-span-2">
                  <label htmlFor="add-image" className="block mb-2 text-sm font-medium">Image</label>
                  <input type="file" id="add-image" className="block w-full p-2.5 text-sm border rounded-lg" />
                </div>
                <div className="col-span-2">
                  <label htmlFor="add-description" className="block mb-2 text-sm font-medium">Description</label>
                  <textarea id="add-description" rows="4" className="block w-full p-2.5 text-sm border rounded-lg" placeholder="Product description"></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-secondary py-2 px-4">Add Product</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
