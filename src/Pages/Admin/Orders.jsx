import { useEffect, useRef, useState } from 'react';
import Pagination from '../../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { fetchAllOrdersAdmin, updateOrderStatusAdmin } from '../../redux/slices/orderSlice';
import OrdersPrintView from '../../components/OrderPrintView';

const Orders = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { orders, status, error } = useSelector((state) => state.orders);

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 8;
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sortedOrderData = Array.isArray(orders) ? [...orders].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) : [];

  const filteredOrders = sortedOrderData.filter(order =>
    order.order_number.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (startDate ? new Date(order.created_at) >= new Date(startDate) : true) &&
    (endDate ? new Date(order.created_at) <= new Date(endDate) : true) &&
    (statusFilter ? order.status === statusFilter : true)
  );

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    if (token) {
      dispatch(fetchAllOrdersAdmin());
    }
  }, [dispatch, token]);

  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const handleDateRangeChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    handleFilterChange();
  };

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
    handleFilterChange();
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (sortedOrderData.length === 0) {
    return <div>No orders found.</div>;
  }

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUpdateStatus = (orderId, status) => {
    dispatch(updateOrderStatusAdmin({ orderId, status }));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <div className="px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
            <div className="flex justify-between items-center mb-4 gap-2">
              <h2 className="text-2xl font-bold mb-2 lg:mb-0">Order List</h2>
              <div className="flex gap-2 items-center mt-2 lg:mt-0 overflow-x-auto">
                <p className="text-xl font-semibold hidden lg:block">Filter :</p>
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    className="p-2 bg-transparent border border-black rounded-md"
                    value={startDate}
                    onChange={(e) => handleDateRangeChange(e.target.value, endDate)}
                  />
                  <p className="text-xl font-semibold">-</p>
                  <input
                    type="date"
                    className="p-2 bg-transparent border border-black rounded-md"
                    value={endDate}
                    onChange={(e) => handleDateRangeChange(startDate, e.target.value)}
                  />
                  <select
                    className="p-2 bg-transparent border border-black rounded-md"
                    value={statusFilter}
                    onChange={handleStatusChange}
                  >
                    <option value="">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Process">Process</option>
                    <option value="Completed">Completed</option>
                    <option value="Canceled">Canceled</option>
                  </select>
                  <input
                    placeholder="Search Order Number"
                    className="p-2 bg-transparent border border-black rounded-md w-64"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <button
                    className="btn btn-secondary py-2 px-4"
                    onClick={openModal}
                  >
                    Print
                  </button>
                </div>
              </div>
            </div>
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-[#D8AE7E] text-center">
                  <tr>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      No Pesanan
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Name
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Email
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Phone Number
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Order Option
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Total
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Tanggal Pesan
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Status Pembayaran
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Status Pesanan
                    </th>
                  </tr>
                </thead>
                {sortedOrderData.length === 0 ? (
                  <div>No orders found.</div>
                ) : (
                <tbody>
                  {currentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="border-b border-l border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {order.order_number}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                        {order.customer_name}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {order.customer_email}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {order.customer_phone}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                        {order.order_type}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        Rp. {order.total.toLocaleString()}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {new Date(order.created_at).toLocaleString()}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                        {order.status_payment}
                      </td>
                      <td className="border-b border-r border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        <select
                          value={order.status}
                          onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                          className="rounded-md border border-gray-300 p-2"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Process">Process</option>
                          <option value="Completed">Completed</option>
                          <option value="Canceled">Canceled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
                )}
              </table>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          <div className="relative z-10 p-4 bg-white rounded-md shadow-lg w-full max-h-full overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Print Preview</h2>
            <div ref={componentRef}>
            <OrdersPrintView orders={filteredOrders} startDate={startDate} endDate={endDate} />
            </div>            
            <div className="mt-4 flex justify-start">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handlePrint}
              >
                Print
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
