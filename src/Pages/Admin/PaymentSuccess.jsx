import React from "react";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3e2cf]">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-green-500 rounded-full p-3">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-black mb-2 p-3">
        Pembayaran Berhasil
      </h1>
      <p className="text-black mb-4 p-3">
        Terima Kasih Telah Melakukan Pembayaran
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="px-4 py-2 bg-black text-white rounded-md hover:bg-brown-800 transition"
      >
        Kembali Ke Halaman Utama
      </button>
    </div>
  );
};

export default PaymentSuccess;
