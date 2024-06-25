import logo from '../assets/img/logos.png';
import { format } from 'date-fns';

const OrdersPrintView = ({ orders, startDate, endDate }) => {
    // Mendapatkan tanggal hari ini
    const todayDate = format(new Date(), 'yyyy-MM-dd');

    // Filter orders berdasarkan tanggal startDate, endDate dan status completed
    const filteredOrders = orders.filter(order => {
    const orderDate = new Date(order.created_at);
    return (!startDate || orderDate >= new Date(startDate)) &&
           (!endDate || orderDate <= new Date(endDate)) &&
           order.status === 'Completed';
  });

  // Menghitung total earning dari filteredOrders
  const totalEarning = filteredOrders.reduce((total, order) => total + order.total, 0);

    return (
      <div className="py-4 px-2 mx-auto">
        <div className="flex justify-center">
        <img src={logo} alt="Logo" className="h-20" />
        </div>
        <h1 className="text-xl text-center font-bold mb-4 text-[#D8AE7E]">LAPORAN DATA ORDER BAKERYOU</h1>
        <h1 className="text-sm font-semibold mb-4">
        {startDate && endDate
          ? `Laporan tanggal ${startDate} sampai ${endDate}`
          : startDate
          ? `Laporan tanggal ${startDate} sampai ${todayDate}`
          : endDate
          ? `Laporan sampai tanggal ${endDate}`
          : 'Laporan Data Order'}
        </h1>
          <table className="w-full table-auto border">
            <thead className="bg-[#D8AE7E] text-center">
              <tr>
                <th className="min-w-[80px] border-l px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                  No
                </th>
                <th className="min-w-[150px] border-l px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                  Order Number
                </th>
                <th className="min-w-[150px] border-l px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                  Name
                </th>
                <th className="min-w-[150px] border-l px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                  Phone Number
                </th>
                <th className="min-w-[150px] border-l px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                  Order Option
                </th>
                <th className="min-w-[150px] border-l px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                  Total
                </th>
                <th className="min-w-[150px] border-l px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                  Tanggal Pesan
                </th>
                <th className="min-w-[150px] border-l px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                  Status Pembayaran
                </th>
                <th className="min-w-[150px] border-l px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                  Status Pesanan
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order.id}
                  className={`text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                >
                  <td className="w-[30px] border-l border-gray-300 px-3 py-4 lg:px-4 lg:py-3">
                    {index + 1}
                  </td>
                  <td className="min-w-[150px] border-l border-gray-300 px-3 py-4 lg:px-4 lg:py-3">
                    {order.order_number}
                  </td>
                  <td className="min-w-[150px] border-l border-gray-300 px-3 py-4 lg:px-4 lg:py-3">
                    {order.customer_name}
                  </td>
                  <td className="min-w-[150px] border-l border-gray-300 px-3 py-4 lg:px-4 lg:py-3">
                    {order.customer_phone}
                  </td>
                  <td className="min-w-[150px] border-l border-gray-300 px-3 py-4 lg:px-4 lg:py-3">
                    {order.order_type}
                  </td>
                  <td className="min-w-[150px] border-l border-gray-300 px-3 py-4 lg:px-4 lg:py-3">
                    Rp. {order.total.toLocaleString()}
                  </td>
                  <td className="min-w-[150px] border-l border-gray-300 px-3 py-4 lg:px-4 lg:py-3">
                    {new Date(order.created_at).toLocaleString()}
                  </td>
                  <td className="min-w-[150px] border-l border-gray-300 px-3 py-4 lg:px-4 lg:py-3">
                  <span
                      className={`px-2 py-1 rounded-md ${
                        order.status_payment === 'Paid'
                          ? 'bg-green-300 text-green-800'
                          : 'bg-red-300 text-red-800'
                      }`}
                    >
                      {order.status_payment}
                    </span>
                  </td>
                  <td className="min-w-[150px] border-l border-r border-gray-300 px-3 py-4 lg:px-4 lg:py-3">
                    <span
                      className={`px-2 py-1 rounded-md ${
                        order.status === 'Pending'
                          ? 'bg-yellow-300 text-yellow-800'
                          : order.status === 'Process'
                          ? 'bg-blue-300 text-blue-800'
                          : order.status === 'Completed'
                          ? 'bg-green-300 text-green-800'
                          : 'bg-red-300 text-red-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredOrders.length > 0 && (
        <div className="mt-4 w-full bg-[#D8AE7E] text-center border border-gray-300 px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
          Total Earnings : Rp. {totalEarning.toLocaleString()}
        </div>
      )}
    </div>
    );
  };
  
  export default OrdersPrintView;
  