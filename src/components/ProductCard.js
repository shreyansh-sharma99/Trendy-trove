import { useEffect } from "react";
import Spinner from "../Spinner";
import { fetchproductCard } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import toast from "react-hot-toast";

const ProductCard = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const navigate = useNavigate();

  const { selectedProduct, isLoading } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchproductCard(category));
  }, [dispatch, category]);

  const handleClick = (id) => {
    navigate(`/category/${id}`);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product added to cart");
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    toast.success("Product removed from cart");
  };

  const getQuantity = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    return product ? product.quantity : 0;
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedProduct?.products?.map((element) => (
              <div
                key={element.id}
                className="flex flex-col max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-slate-400"
              >
                <img
                  className="w-full h-64 object-cover cursor-pointer"
                  src={element.images[0]}
                  alt={element.title}
                  // onClick={() => handleClick(element.id)}
                />

                <div className="p-6 flex-1">
                  <div className="flex items-center mb-4">
                    <h1 className="text-xl font-bold mr-auto">
                      {element.title}
                    </h1>
                    <span className="px-2 py-1 bg-green-200 text-green-800 text-sm rounded-full">
                      {element.availabilityStatus}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4">{element.description}</p>

                  <div className="mb-4">
                    <span className="text-gray-600">Price:</span>
                    <span className="text-lg font-semibold text-gray-800">
                      ₹{element.price}
                    </span>
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="text-gray-600 mr-2">Rating:</span>
                    <div className="flex">
                      {Array.from(
                        { length: Math.floor(element.rating) },
                        (_, index) => (
                          <span key={index} className="text-yellow-400">
                            &#9733;
                          </span>
                        )
                      )}
                      {Array.from(
                        { length: 5 - Math.floor(element.rating) },
                        (_, index) => (
                          <span key={index} className="text-yellow-400">
                            &#9734;
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">
                      Customer Reviews:
                    </h2>
                    <ul>
                      {element.reviews.map((review, index) => (
                        <li key={index} className="mb-2">
                          <strong>{review.reviewerName}:</strong> "
                          {review.comment}"
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <span className="text-gray-600">Category:</span>{" "}
                    {element.category}
                    <br />
                    <span className="text-gray-600">
                      Minimum Order Quantity:
                    </span>{" "}
                    {element.minimumOrderQuantity}
                    <br />
                    <span className="text-gray-600">
                      Shipping Information:
                    </span>{" "}
                    {element.shippingInformation}
                    <br />
                    <span className="text-gray-600">Return Policy:</span>{" "}
                    {element.returnPolicy}
                    <br />
                    <span className="text-gray-600">
                      Warranty Information:
                    </span>{" "}
                    {element.warrantyInformation}
                    <br />
                  </div>
                </div>

                <div className="flex justify-center px-6 pb-6">
                  {getQuantity(element.id) > 0 ? (
                    <div className="flex items-center">
                      <button
                        onClick={() => handleRemoveFromCart(element)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        -
                      </button>
                      <span className="text-lg font-bold">
                        {getQuantity(element.id)}
                      </span>
                      <button
                        onClick={() => handleAddToCart(element)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(element)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
