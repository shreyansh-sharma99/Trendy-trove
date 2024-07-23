// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { CONST } from "./middelware/Const";
// import Spinner from "./Spinner";
// import { CgLoadbarAlt } from "react-icons/cg";

// function SingleAllProduct() {
//   const { id } = useParams();
//   const [isLoading, setIsLoading] = useState(false);
//   const [product, setProduct] = useState(null);
//   const [exchangeRate, setExchangeRate] = useState(82);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       setIsLoading(true);
//       try {
//         const res = await axios.get(`${CONST.PRODUCT_URL}/${id}`);
//         setProduct(res.data);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const convertToRupees = (priceInDollars) => {
//     return (priceInDollars * exchangeRate).toFixed(2);
//   };

//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   return (
//     <>
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <div className="container mx-auto p-6 bg-slate-700 shadow-lg rounded-lg flex flex-col lg:flex-row text-white">
//           <img
//             src={product.thumbnail}
//             alt={product.title}
//             className="w-full h-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-6 rounded-lg"
//           />
//           <div className="lg:flex-1">
//             <h1 className="text-2xl font-bold mb-2 text-white">
//               {product.title}
//             </h1>
//             <p className="text-gray-400 mb-4">{product.category}</p>
//             <p className="text-lg text-gray-400 mb-4">{product.description}</p>
//             <p className="text-2xl font-bold mb-4">
//               <span className="text-red-500">
//                 ₹{convertToRupees(product.price)}
//               </span>
//             </p>
//             <p className="text-red-500 mb-4">
//               Discount: {product.discountPercentage}%
//             </p>
//             <p className="text-yellow-700 mb-4">Rating: {product.rating} / 5</p>
//             <p className="text-green-700 mb-4">
//               {product.stock > 0 ? "In Stock" : "Out of Stock"}
//             </p>
//             <div className="mb-4">
//               <h3 className="text-xl font-bold mb-2">Reviews:</h3>
//               {product.reviews?.map((review, index) => (
//                 <div key={index} className="mb-2">
//                   <p className="font-bold text-gray-800">
//                     {review.reviewerName}
//                   </p>
//                   <p className="text-gray-400">{review.reviewerEmail}</p>
//                   <p className="text-gray-400">{review.comment}</p>
//                   <p className="text-yellow-700">Rating: {review.rating} / 5</p>
//                 </div>
//               ))}
//             </div>
//             <p className="text-gray-700 mb-2">
//               Warranty: {product.warrantyInformation}
//             </p>
//             <p className="text-gray-700 mb-2">
//               Shipping: {product.shippingInformation}
//             </p>
//             <p className="text-gray-700 mb-2">
//               Return Policy: {product.returnPolicy}
//             </p>
//             <div className="flex items-center">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
//                 Buy Now
//               </button>
//               <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//                 Add to Cart
//               </button>
//             </div>
//             <img
//               src={product.meta?.qrCode}
//               alt="QR Code"
//               className="w-24 h-auto mt-4"
//             />
//           </div>
//         </div>
//       )}
//       <button
//         className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
//         onClick={() => navigate(-1)}
//       >
//         BACK
//       </button>
//     </>
//   );
// }

// export default SingleAllProduct;

import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "./redux/productSlice";
import Spinner from "./Spinner";
import { addToCart, removeFromCart } from "./redux/cartSlice";
import { toast } from "react-toastify";

function SingleAllProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedProduct: product, isLoading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

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

  const handleBack = () => {
    navigate(-1);
  };

  const convertToRupees = (priceInDollars) => {
    return (priceInDollars * 82).toFixed(2);
  };

  if (!product && !isLoading) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        product && (
          <div className="container mx-auto p-6 bg-slate-700 shadow-lg rounded-lg flex flex-col lg:flex-row text-white">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-6 rounded-lg cursor-pointer"
              onClick={() => navigate(`/category/${product.id}`)}
            />
            <div className="lg:flex-1">
              <h1 className="text-2xl font-bold mb-2 text-white">
                {product.title}
              </h1>
              <p className="text-gray-400 mb-4">{product.category}</p>
              <p className="text-lg text-gray-400 mb-4">
                {product.description}
              </p>
              <p className="text-2xl font-bold mb-4">
                <span className="text-red-500">
                  ₹{convertToRupees(product.price)}
                </span>
              </p>
              <p className="text-red-500 mb-4">
                Discount: {product.discountPercentage}%
              </p>
              <p className="text-yellow-700 mb-4">
                Rating: {product.rating} / 5
              </p>
              <p className="text-green-700 mb-4">
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Reviews:</h3>
                {product.reviews?.map((review, index) => (
                  <div key={index} className="mb-2">
                    <p className="font-bold text-gray-800">
                      {review.reviewerName}
                    </p>
                    <p className="text-gray-400">{review.reviewerEmail}</p>
                    <p className="text-gray-400">{review.comment}</p>
                    <p className="text-yellow-700">
                      Rating: {review.rating} / 5
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mb-2">
                Warranty: {product.warrantyInformation}
              </p>
              <p className="text-gray-700 mb-2">
                Shipping: {product.shippingInformation}
              </p>
              <p className="text-gray-700 mb-2">
                Return Policy: {product.returnPolicy}
              </p>
              <div className="flex items-center">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                  Buy Now
                </button> */}
                <div className="flex items-center">
                  {getQuantity(product.id) > 0 ? (
                    <div className="flex items-center">
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
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
              <img
                src={product.meta?.qrCode}
                alt="QR Code"
                className="w-24 h-auto mt-4"
              />
            </div>
          </div>
        )
      )}
      <button
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
        onClick={handleBack}
      >
        BACK
      </button>
    </>
  );
}

export default SingleAllProduct;
