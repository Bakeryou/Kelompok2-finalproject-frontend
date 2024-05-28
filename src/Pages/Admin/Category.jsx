import React, { useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Bread" },
    { id: 2, name: "Donat" },
    { id: 3, name: "Pastry" },
  ]);

  const addCategory = () => {
    const newCategory = { id: categories.length + 1, name: "New Category" };
    setCategories([...categories, newCategory]);
  };

  const editCategory = (id) => {
    const newCategories = categories.map((category) =>
      category.id === id
        ? { ...category, name: prompt("Enter new name:", category.name) }
        : category
    );
    setCategories(newCategories);
  };

  const deleteCategory = (id) => {
    const newCategories = categories.filter((category) => category.id !== id);
    setCategories(newCategories);
  };

  return (
    <div className="min-h-screen p-4 bg-[#FFF2D7] flex flex-col items-center justify-center">
      <div className="grid grid-cols-2">
        <h1 className="text-xl font-bold">Category List</h1>
        <button
          className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-black"
          onClick={addCategory}
        >
          Add Category
        </button>
      </div>
      <table className="min-w-full m-4 bg-[#FFF2D7] border-4 border-black">
        <thead>
          <tr className="bg-[#D8AE7E]">
            <th className="py-2 px-4 border border-black">No</th>
            <th className="py-2 px-4 border border-black">Category</th>
            <th className="py-2 px-4 border border-black">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id}>
              <td className="py-2 px-4 border border-black">{index + 1}</td>
              <td className="py-2 px-4 border border-black">{category.name}</td>
              <td className="py-2 px-4 border border-black">
                <button
                  onClick={() => editCategory(category.id)}
                  className="mr-2 text-blue-500 hover:text-blue-700"
                >
                  ✏️
                </button>
                <button
                  onClick={() => deleteCategory(category.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
