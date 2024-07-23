// /* eslint-disable no-unused-vars */
// import { CONST } from "../middelware/Const";
import Spinner from "../Spinner";
// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import I1 from "./images/beauty.jpeg";
import I2 from "./images/fragrance.jpeg";
import I3 from "./images/furniture.jpeg";
import I4 from "./images/groceries.jpeg";
import I5 from "./images/decoration.jpeg";
import I6 from "./images/kitchen.jpeg";
import I7 from "./images/laptop.jpeg";
import I8 from "./images/shirt.jpeg";
import I9 from "./images/shoe.jpeg";
import I10 from "./images/watches.jpeg";
import I11 from "./images/mobile-accessories.jpeg";
import I12 from "./images/motorCycle.jpeg";
import I13 from "./images/skincare.jpeg";
import I14 from "./images/smartphone.jpeg";
import I15 from "./images/sport.jpeg";
import I16 from "./images/sunglass.jpeg";
import I17 from "./images/tablets.jpeg";
import I18 from "./images/tops.jpeg";
import I19 from "./images/vehicle.jpeg";
import I20 from "./images/womanbag.jpeg";
import I21 from "./images/woman dress.jpeg";
import I22 from "./images/womanjewelery.jpeg";
import I23 from "./images/woman-shoe.jpeg";
import I24 from "./images/woman watch.jpeg";
import AllProduct from "./AllProduct";
import ImageSlider from "../ImageSlider";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   setLoading,
//   setProducts,
//   setSelectedProduct,
// } from "../redux/productSlice"; // Update the path as per your file structure
// import { useNavigate } from "react-router-dom";

// const ProductDetails = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isLoading = useSelector((state) => state.products.isLoading);
//   const products = useSelector((state) => state.products.products);
//   const setSelectedProduct = useSelector(
//     (state) => state.products.selectedProduct
//   );

//   const containerRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch(setLoading(true));
//       try {
//         const response = await axios.get(`${CONST.PRODUCT_URL}/categories`);
//         dispatch(setProducts(response.data));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         dispatch(setLoading(false));
//       }
//     };

//     fetchData();
//   }, [dispatch]);

//   const convertCurrency = (products, fromCurrency, toCurrency) => {
//     const conversionRate = 85;
//     return products.map((product) => ({
//       ...product,
//       price: (product.price * conversionRate).toFixed(0),
//     }));
//   };

//   const handleScrollLeft = () => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       const scrollOffset = container.clientWidth;
//       container.scrollTo({
//         left: container.scrollLeft - scrollOffset,
//         behavior: "smooth",
//       });
//     }
//   };

//   const handleScrollRight = () => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       const scrollOffset = container.clientWidth;
//       container.scrollTo({
//         left: container.scrollLeft + scrollOffset,
//         behavior: "smooth",
//       });
//     }
//   };

//   const productImages = [
//     I1,
//     I2,
//     I3,
//     I4,
//     I5,
//     I6,
//     I7,
//     I8,
//     I9,
//     I10,
//     I11,
//     I12,
//     I13,
//     I14,
//     I15,
//     I16,
//     I17,
//     I18,
//     I19,
//     I20,
//     I21,
//     I22,
//     I23,
//     I24,
//   ];

//   return (
//     <>
//       <div className="container mx-auto">
//         {isLoading ? (
//           <Spinner />
//         ) : (
//           <div className="relative">
//             <div
//               ref={containerRef}
//               className="flex space-x-4 p-4 items-center overflow-x-auto"
//               style={{ scrollbarWidth: "none" }} // Hide scrollbar
//             >
//               {products.map((product, index) => (
//                 <div
//                   key={product.slug}
//                   className="product-card"
//                   onClick={() => navigate(`/products/${product.slug}`)}
//                 >
//                   <div className="relative bg-gray-700 rounded-lg shadow-md p-4 cursor-pointer transform transition duration-300 hover:scale-105">
//                     <div className="mb-4 overflow-hidden">
//                       <img
//                         src={productImages[index % productImages.length]}
//                         alt={product.name}
//                         className="w-20 h-20 object-contain rounded-lg mb-2"
//                       />
//                     </div>

//                     <div>
//                       <h2 className="text-sm text-center font-semibold mb-2">
//                         {product.name}
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button
//               className="scroll-button left-0 absolute top-1/2 transform -translate-y-1/2 w-12 h-12 z-10 hover:scale-105"
//               onClick={handleScrollLeft}
//             >
//               <FaChevronCircleLeft className="text-3xl text-yellow-300" />
//             </button>

//             <button
//               className="scroll-button right-0 absolute top-1/2 transform -translate-y-1/2 w-12 h-12 z-10 hover:scale-105 text-yellow-300"
//               onClick={handleScrollRight}
//             >
//               <FaChevronCircleRight className="text-3xl" />
//             </button>
//           </div>
//         )}
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
//           {selectedProduct &&
//             selectedProduct.products &&
//             selectedProduct.products.length > 0 &&
//             selectedProduct.products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//         </div> */}
//       </div>
//       <ImageSlider />
//       <AllProduct />
//     </>
//   );
// };

// export default ProductDetails;

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/productSlice";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector((state) => state.products);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollOffset = container.clientWidth;
      container.scrollTo({
        left: container.scrollLeft - scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollOffset = container.clientWidth;
      container.scrollTo({
        left: container.scrollLeft + scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const productImages = [
    I1,
    I2,
    I3,
    I4,
    I5,
    I6,
    I7,
    I8,
    I9,
    I10,
    I11,
    I12,
    I13,
    I14,
    I15,
    I16,
    I17,
    I18,
    I19,
    I20,
    I21,
    I22,
    I23,
    I24,
  ];

  return (
    <>
      <div className="container mx-auto">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="relative">
            <div
              ref={containerRef}
              className="flex space-x-4 p-4 items-center overflow-x-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {categories.map((category, index) => (
                <div
                  key={category.slug}
                  className="product-card"
                  onClick={() => navigate(`/products/${category.slug}`)}
                >
                  <div className="relative bg-gray-700 rounded-lg shadow-md p-4 cursor-pointer transform transition duration-300 hover:scale-105">
                    <div className="mb-4 overflow-hidden">
                      <img
                        src={productImages[index % productImages.length]}
                        alt={category}
                        className="w-20 h-20 object-contain rounded-lg mb-2"
                      />
                    </div>

                    <div>
                      <h2 className="text-sm text-center font-semibold mb-2">
                        {category.name}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="scroll-button left-0 absolute top-1/2 transform -translate-y-1/2 w-12 h-12 z-10 hover:scale-105"
              onClick={handleScrollLeft}
            >
              <FaChevronCircleLeft className="text-3xl text-yellow-300" />
            </button>

            <button
              className="scroll-button right-0 absolute top-1/2 transform -translate-y-1/2 w-12 h-12 z-10 hover:scale-105 text-yellow-300"
              onClick={handleScrollRight}
            >
              <FaChevronCircleRight className="text-3xl" />
            </button>
          </div>
        )}
        <ImageSlider />
        <AllProduct />
      </div>
    </>
  );
};
export default ProductDetails;
