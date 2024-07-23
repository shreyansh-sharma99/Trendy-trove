import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const convertToRupees = (priceInDollars) => {
    return (priceInDollars * 82).toFixed(2);
  };

  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleBuyNow = () => {
    navigate("/buy", { state: { totalAmount: calculateTotalAmount() } });
  };

  return (
    <div className="bg-slate-800 min-h-screen flex flex-col justify-between">
      <div className="container mx-auto p-6 bg-slate-700 shadow-lg rounded-lg text-white">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <button
            onClick={handleClearCart}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-4 flex items-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-gray-400">{item.category}</p>
                  <p className="text-lg text-gray-400">
                    ₹{convertToRupees(item.price)}
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleRemoveFromCart(item)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded mr-2"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold">{item.quantity}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded ml-2"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center bg-slate-800 p-6 rounded-lg">
            <p className="text-xl font-bold mb-4 sm:mb-0">
              Total: ₹{convertToRupees(calculateTotalAmount())}
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
              >
                Back
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
