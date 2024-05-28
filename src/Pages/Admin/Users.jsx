import React from "react";

const Users = () => {
  return (
    <div className="min-h-screen p-4 bg-[#FFF2D7] flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold">Users</h2>
      <table className="min-w-full m-4 bg-[#FFF2D7] border-4 border-black">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2 bg-[#D8AE7E]">No</th>
            <th className="border border-black px-4 py-2 bg-[#D8AE7E]">Name</th>
            <th className="border border-black px-4 py-2 bg-[#D8AE7E]">
              Email
            </th>
            <th className="border border-black px-4 py-2 bg-[#D8AE7E]">
              Username
            </th>
            <th className="border border-black px-4 py-2 bg-[#D8AE7E]">
              Address
            </th>
            <th className="border border-black px-4 py-2 bg-[#D8AE7E]">
              Phone Number
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2">1</td>
            <td className="border border-black px-4 py-2">John Doe</td>
            <td className="border border-black px-4 py-2">john@gmail.com</td>
            <td className="border border-black px-4 py-2">Johndoe</td>
            <td className="border border-black px-4 py-2">Surabaya</td>
            <td className="border border-black px-4 py-2">123456789</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
