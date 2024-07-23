import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, totalAmount } = location.state;

  // Format the total amount to 2 decimal places
  const formattedAmount = parseFloat(totalAmount).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-extrabold mb-8">
          Order Details
        </h2>
        <div className="space-y-4">
          <p className="flex justify-between">
            <span className="font-semibold">Name:</span>
            <span>{formData.name}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-semibold">Address Type:</span>
            <span>{formData.addressType}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-semibold">Address:</span>
            <span>{formData.address}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-semibold">Email:</span>
            <span>{formData.email}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-semibold">Mobile:</span>
            <span>{formData.mobile}</span>
          </p>
          <p className="flex justify-between text-lg font-bold">
            <span>Total Amount:</span>
            <span>₹{formattedAmount}</span>
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Continue Shipping😎
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
