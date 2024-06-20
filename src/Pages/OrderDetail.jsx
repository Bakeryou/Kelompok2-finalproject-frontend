import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderById } from '../redux/slices/orderSlice';

const OrderDetail = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { orders } = useSelector(state => state.orders);

  const order = orders.find((order) => order.id === parseInt(orderId));

  useEffect(() => {
    dispatch(fetchOrderById(orderId));
  }, [dispatch, orderId]);

  if (!order) {
    return <div>Order not found</div>;
  }

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
    <div className="flex flex-col justify-center min-h-screen px-4">
      <div className="container mx-auto max-w-lg bg-[#FFE0B5] mt-20 my-4 p-4">
        <h2 className="text-2xl font-bold mb-2 text-center">Detail Pesanan</h2>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            <p className="font-semibold">No Pesanan:</p>
            <p>{order.order_number}</p>
            <p className="font-semibold">Name:</p>
            <p>{order.customer_name}</p>
            <p className="font-semibold">Email:</p>
            <p>{order.customer_email}</p>
            <p className="font-semibold">Phone Number:</p>
            <p>{order.customer_phone}</p>
            <p className="font-semibold">Alamat:</p>
            <p>{order.customer_address}</p>
            <p className="font-semibold">Kode Pos:</p>
            <p>{order.customer_postal_code}</p>
            <p className="font-semibold">Kota:</p>
            <p>{order.customer_city}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Order Summary</h3>
            <div className="border-b border-black mb-2"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            {order.order_items?.map((item) => (
                <React.Fragment key={item.id}>
                  <p className="font-semibold">{item.product.name}</p>
                  <p>Rp. {item.price.toLocaleString()} - {item.quantity}x</p>
                </React.Fragment>
              ))}
              <p className="font-semibold">Sub Total:</p>
              <p className="font-semibold">Rp. {order.subtotal.toLocaleString()}</p>
              <div className="border-b border-black col-span-2"></div>
              <p className="font-semibold">Tax:</p>
              <p>Rp. {order.tax.toLocaleString()}</p>
              <p className="font-semibold">Shipping:</p>
              <p>Rp. {order.shipping.toLocaleString()}</p>
              <p className="font-bold">Total:</p>
              <p className="font-bold">Rp. {order.total.toLocaleString()}</p>
              <p className="font-semibold">Order Options:</p>
              <p>{order.order_type}</p>
              <p className="font-semibold">Note:</p>
              <p>{order.notes}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p className="font-semibold">Waktu Pemesanan:</p>
              <p>{new Date(order.created_at).toLocaleString()}</p>
              <p className="font-semibold">Status Pesanan:</p>
              <p className={`font-bold ${getStatusColor(order.status)}`}>{order.status}</p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
          <Link to="/orders" className="btn btn-primary py-2 px-4 mt-4">Kembali</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
