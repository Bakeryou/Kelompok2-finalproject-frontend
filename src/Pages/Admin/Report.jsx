import React from "react";

const Report = () => {
  return (
    <div className="min-h-screen p-4 bg-[#FFF2D7] flex flex-col items-center justify-center">
      <h1 className="text-lg font-bold mb-4">Report</h1>
      <table className="min-w-full m-4 bg-[#FFF2D7] border-4 border-black">
        <thead>
          <tr className="bg-[#D8AE7E]">
            <th className="py-2 px-4 border border-black">No</th>
            <th className="py-2 px-4 border border-black">Name</th>
            <th className="py-2 px-4 border border-black">Email</th>
            <th className="py-2 px-4 border border-black">Phone Number</th>
            <th className="py-2 px-4 border border-black">Product Name</th>
            <th className="py-2 px-4 border border-black">Qty</th>
            <th className="py-2 px-4 border border-black">Price</th>
            <th className="py-2 px-4 border border-black">Tanggal Pesan</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="py-2 px-4 border border-black">1</td>
            <td className="py-2 px-4 border border-black">John Doe</td>
            <td className="py-2 px-4 border border-black">john@gmail.com</td>
            <td className="py-2 px-4 border border-black">123456789</td>
            <td className="py-2 px-4 border border-black">Croissant</td>
            <td className="py-2 px-4 border border-black">1</td>
            <td className="py-2 px-4 border border-black">Rp 15.000</td>
            <td className="py-2 px-4 border border-black">5/15/2024</td>
          </tr>
        </tbody>
      </table>
      <div className="grid grid-cols-2">
        <span className="mt-4 text-right font-bold ">Total Earning</span>
        <span className="mt-4 text-left font-bold">Rp 15.000</span>
      </div>
    </div>
  );
};

export default Report;
