import React from "react";

const orders = [
  {
    noPesanan: 1,
    name: "John Doe",
    email: "john@gmail.com",
    phoneNumber: "123456789",
    productName: "Croissant",
    qty: 1,
    price: "Rp 15.000",
    tanggalPesan: "5/15/2024",
    statusPesanan: "Selesai",
  },
];

const Orders = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3e2cf]">
      <div className="overflow-x-auto">
        <div className="grid grid-cols-3 justify-items-stretch">
          <h1 className=" p-5 text-xl font-bold justify-self-start">
            Category List
          </h1>
          <input
            placeholder="Search Orders"
            className="p-2 block bg-[#f3e2cf] border-black rounded-md justify-self-end"
          />
          <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-black justify-self-end">
            Search
          </button>
        </div>
        <table className="min-w-full m-4 bg-[#FFF2D7] border-4 border-black">
          <thead>
            <tr className="bg-[#D8AE7E]">
              <th className="py-2 px-4 border border-black">No Pesanan</th>
              <th className="py-2 px-4 border border-black">Name</th>
              <th className="py-2 px-4 border border-black">Email</th>
              <th className="py-2 px-4 border border-black">Phone Number</th>
              <th className="py-2 px-4 border border-black">Product Name</th>
              <th className="py-2 px-4 border border-black">Qty</th>
              <th className="py-2 px-4 border border-black">Price</th>
              <th className="py-2 px-4 border border-black">Tanggal Pesan</th>
              <th className="py-2 px-4 border border-black">Status Pesanan</th>
              <th className="py-2 px-4 border border-black">Update</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-black bg-[#f3e2cf]">
                <td className="py-2 px-4 border border-black">
                  {order.noPesanan}
                </td>
                <td className="py-2 px-4 border border-black">{order.name}</td>
                <td className="py-2 px-4 border border-black">{order.email}</td>
                <td className="py-2 px-4 border border-black">
                  {order.phoneNumber}
                </td>
                <td className="py-2 px-4 border border-black">
                  {order.productName}
                </td>
                <td className="py-2 px-4 border border-black">{order.qty}</td>
                <td className="py-2 px-4 border border-black">{order.price}</td>
                <td className="py-2 px-4 border border-black">
                  {order.tanggalPesan}
                </td>
                <td className="py-2 px-4 border border-black">
                  {order.statusPesanan}
                </td>
                <td className="py-2 px-4 border border-black">
                  <button className="bg-black text-white py-1 px-3 rounded">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
