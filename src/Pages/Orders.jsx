import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrders } from '../redux/slices/orderSlice';

const Orders = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchAllOrders(token));
  }, [dispatch, token]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 7;

  const sortedOrderData = Array.isArray(orders) ? [...orders].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) : [];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedOrderData.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(sortedOrderData.length / productsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'process':
        return 'text-blue-500';
      case 'completed':
        return 'text-green-500';
      case 'canceled':
        return 'text-red-500';
      default:
        return 'text-black';
    }
  };

  return (
    <div className="p-4 pt-20 min-h-screen">
      <div className="px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Orders List</h2>
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-[#D8AE7E] text-center">
                  <tr>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      No Pesanan
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Order Options
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Total
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Waktu Pesan
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Status Pesanan
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedOrderData.length > 0 ? (
                    currentProducts.map((order) => (
                    <tr key={order.id}>
                      <td className="border-b border-l border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {order.order_number}
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
                      <td className={`border-b border-black px-2 py-3 text-center text-base font-bold ${getStatusColor(order.status)}`}>
                        {order.status}
                      </td>
                      <td className="border-b border-r border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                        <Link to={`/orderdetail/${order.id}`} className="inline-block rounded-md border border-secondary px-3 py-2 font-medium text-secondary hover:bg-secondary hover:text-white">
                          Detail
                        </Link>
                      </td>
                    </tr>
                  ))
                ):(
                  <tr>
                      <td colSpan="6" className="text-center py-4">
                        No orders found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
