
import React, { useEffect, useState } from "react";
import axios from "axios";

function Receipt() {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/booking")
      .then(response => {
        setBookingData(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-6 w-1/2">
      <h1 className="font-bold text-3xl mb-6">Receipt</h1>
      {bookingData.map((booking, index) => (
        <div key={index} className="border p-4 rounded mb-6">
          <h2 className="font-bold text-xl mb-2">
            <span className="text-grey-100">Customer</span>
            <span className="text-grey-100">Information</span>
          </h2>
          <p><strong>Name:</strong> {booking.customerName}</p>
          <p><strong>Email:</strong> {booking.customerEmail}</p>
          <p><strong>Payment Option :</strong>{booking.paymentOption}</p>

          <h2 className="font-bold text-xl mb-2 mt-4 text-blue-400">Products</h2>
          <ul>
            {booking.products.map((product, index) => (
              <li key={index} className="mb-2">{product.name} - ${product.price}</li>
            ))}
          </ul>

          <h2 className="font-bold text-xl mb-2 mt-4 text-yellow-600">Total: ${booking.total}</h2>
        </div>
      ))}
    </div>
  );
}

export default Receipt;
