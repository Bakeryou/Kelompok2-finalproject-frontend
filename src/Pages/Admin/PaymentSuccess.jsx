import { HiBadgeCheck } from "react-icons/hi";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex items-center justify-center mb-6">
        <div className="rounded-full">
          <HiBadgeCheck className="w-20 h-20 text-green-500" />
        </div>
      </div>
      <h1 className="text-3xl font-semibold text-black mb-4 text-center">
        Pembayaran Berhasil
      </h1>
      <p className="text-lg text-black mb-6 text-center">
        Terima Kasih Telah Melakukan Pembayaran
      </p>
      <Link to="/">
      <button className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-hover transition">Kembali Ke Halaman Utama</button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
