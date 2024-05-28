// DetailOrder.js
import React from 'react';
import { customerData, orderData } from '../data';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const OrderDetail = () => {
  const { orderId } = useParams();
  const order = orderData.find((order) => order.id === parseInt(orderId));
  
  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div className="flex flex-col justify-center min-h-screen px-4">
      <div className="container mx-auto max-w-lg bg-[#FFE0B5] mt-20 my-4 p-4">
        <h2 className="text-2xl font-bold mb-2 text-center">Detail Pesanan</h2>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            <p className="font-semibold">No Pesanan:</p>
            <p>{order.id}</p>
            <p className="font-semibold">Name:</p>
            <p>{customerData.name}</p>
            <p className="font-semibold">Email:</p>
            <p>{customerData.email}</p>
            <p className="font-semibold">Phone Number:</p>
            <p>{customerData.phoneNumber}</p>
            <p className="font-semibold">Alamat:</p>
            <p>{customerData.address}</p>
            <p className="font-semibold">Kode Pos:</p>
            <p>{customerData.postalCode}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Order Summary</h3>
            <div className="border-b border-black mb-2"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
              {order.orderSummary.items.map((item, index) => (
                <React.Fragment key={index}>
                  <p className="font-semibold">{item.name}</p>
                  <p>Rp. {item.price.toLocaleString()} - {item.quantity}x</p>
                </React.Fragment>
              ))}
              <p className="font-semibold">Sub Total:</p>
              <p className="font-semibold">Rp. {order.orderSummary.subtotal.toLocaleString()}</p>
              <div className="border-b border-black col-span-2"></div>
              <p className="font-semibold">Tax:</p>
              <p>Rp. {order.orderSummary.tax.toLocaleString()}</p>
              <p className="font-semibold">Shipping:</p>
              <p>Rp. {order.orderSummary.shipping}</p>
              <p className="font-bold">Total:</p>
              <p className="font-bold">Rp. {order.orderSummary.total.toLocaleString()}</p>
              <p className="font-semibold">Order Options:</p>
              <p>{order.orderSummary.orderOptions}</p>
              <p className="font-semibold">Note:</p>
              <p>-</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p className="font-semibold">Waktu Pemesanan:</p>
              <p>{order.orderTime.orderedAt}</p>
              <p className="font-semibold">Waktu Pesanan Selesai:</p>
              <p>{order.orderTime.completedAt}</p>
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
