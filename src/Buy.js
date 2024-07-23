import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { HiHome, HiOutlineOfficeBuilding } from "react-icons/hi";
import { clearCart } from "./redux/cartSlice";
import { useDispatch } from "react-redux";

function Buy() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { totalAmount, cartItems } = location.state;
  const formattedTotalAmount = totalAmount.toFixed(2);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const [formData, setFormData] = useState({
    name: "",
    addressType: "house",
    address: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted with data:", formData);

    if (
      formData.name &&
      formData.address &&
      formData.email &&
      formData.mobile
    ) {
      toast.success(
        `Your order with total amount ₹${totalAmount} is placed. Thank you for shopping!`
      );

      setFormData({
        name: "",
        addressType: "house",
        address: "",
        email: "",
        mobile: "",
      });

      navigate("/order-summary", { state: { formData, totalAmount } });
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-center text-3xl font-extrabold mb-8">
          Ready to order? Let's go!
        </h2>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Cart Items</h3>
          <ul>
            {cartItems?.cartItems?.map((item) => (
              <li key={item.id} className="mb-4 flex items-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-gray-400">{item.category}</p>
                  <p className="text-lg text-gray-400">
                    ₹{(item.price * 82).toFixed(2)}
                  </p>
                  <p className="text-lg">Quantity: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <fieldset>
              <legend className="block text-sm font-medium">
                Address Type
              </legend>
              <div className="mt-2 space-x-4 flex items-center flex-row gap-4">
                <div className="flex items-center flex-row">
                  <input
                    id="house"
                    name="addressType"
                    type="radio"
                    value="house"
                    checked={formData.addressType === "house"}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="house" className="ml-3">
                    <HiHome className="h-6 w-6" />
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="office"
                    name="addressType"
                    type="radio"
                    value="office"
                    checked={formData.addressType === "office"}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="office" className="ml-3">
                    <HiOutlineOfficeBuilding className="h-6 w-6" />
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={`Enter ${
                formData.addressType === "house" ? "House" : "Office"
              } Address`}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email Address"
              required
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium">
              Mobile Number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Mobile Number"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => handleClearCart}
            >
              Order Now - Total: ₹{formattedTotalAmount}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Buy;
