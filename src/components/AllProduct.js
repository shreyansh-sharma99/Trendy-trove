import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../redux/productSlice";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { addToCart, removeFromCart } from "../redux/cartSlice";

const AllProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  const handleClick = (productId) => {
    navigate(`/products/id/${productId}`);
  };

  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart`);
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    toast.success(`${product.title} removed from cart`);
  };

  const getQuantity = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    return product ? product.quantity : 0;
  };

  return (
    <div className="container mx-auto py-4">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products?.products?.map((product) => (
            <div
              key={product.id}
              className="flex flex-col p-4 border rounded-md shadow-md cursor-pointer user-select-none"
            >
              <h3
                className="text-lg sm:text-base font-bold mb-2 text-stone-300"
                onClick={() => handleClick(product.id)}
              >
                {product.title}
              </h3>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="mb-2"
                onClick={() => handleClick(product.id)}
              />
              <p
                className="text-slate-400 mb-2 text-xs sm:text-sm"
                onClick={() => handleClick(product.id)}
              >
                {product.description}
              </p>
              <p
                className="text-slate-100 text-sm"
                onClick={() => handleClick(product.id)}
              >
                Category: {product.category}
              </p>
              <p
                className="text-green-600 font-bold text-sm"
                onClick={() => handleClick(product.id)}
              >
                Price: ₹{product.price}
              </p>
              <p className="text-green-500 text-sm">
                Rating: {product.rating}/5
              </p>
              <p className="text-slate-200 text-sm">
                Availability: {product.availabilityStatus}
              </p>
              <p className="text-slate-200 text-sm">Brand: {product.brand}</p>
              <p className="text-slate-200 text-sm">SKU: {product.sku}</p>

              <div className="flex flex-col mt-auto">
                {getQuantity(product.id) > 0 ? (
                  <div className="flex items-center justify-center mt-4">
                    <button
                      onClick={() => handleRemoveFromCart(product)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      -
                    </button>
                    <span className="text-lg font-bold">
                      {getQuantity(product.id)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProduct;
