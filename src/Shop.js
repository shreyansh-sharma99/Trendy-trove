import { CONST } from "../src/middelware/Const";
import Spinner from "../src/Spinner";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ProductCard from "../src/components/ProductCard";
import I1 from "../src/components/images/beauty.jpeg";
import I2 from "../src/components/images/fragrance.jpeg";
import I3 from "../src/components/images/furniture.jpeg";
import I4 from "../src/components/images/groceries.jpeg";
import I5 from "../src/components/images/decoration.jpeg";
import I6 from "../src/components/images/kitchen.jpeg";
import I7 from "../src/components/images/laptop.jpeg";
import I8 from "../src/components/images/shirt.jpeg";
import I9 from "../src/components/images/shoe.jpeg";
import I10 from "../src/components/images/watches.jpeg";
import I11 from "../src/components/images/mobile-accessories.jpeg";
import I12 from "../src/components/images/motorCycle.jpeg";
import I13 from "../src/components/images/skincare.jpeg";
import I14 from "../src/components/images/smartphone.jpeg";
import I15 from "../src/components/images/sport.jpeg";
import I16 from "../src/components/images/sunglass.jpeg";
import I17 from "../src/components/images/tablets.jpeg";
import I18 from "../src/components/images/tops.jpeg";
import I19 from "../src/components/images/vehicle.jpeg";
import I20 from "../src/components/images/womanbag.jpeg";
import I21 from "../src/components/images/woman dress.jpeg";
import I22 from "../src/components/images/womanjewelery.jpeg";
import I23 from "../src/components/images/woman-shoe.jpeg";
import I24 from "../src/components/images/woman watch.jpeg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, setSelectedProduct } from "./redux/productSlice";

const Shop = () => {
  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector((state) => state.products);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
    <div className="container mx-auto">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((product, index) => (
              <div
                key={product.slug}
                className="bg-gray-700 rounded-lg shadow-md overflow-hidden cursor-pointer transition duration-300 transform hover:shadow-xl flex flex-col"
                onClick={() => navigate(`/products/${product.slug}`)}
              >
                <img
                  src={productImages[index % productImages.length]}
                  alt={product.name}
                  className="w-30 h-40 object-contain mt-1"
                />
                <div className="p-3 flex-1">
                  <h2 className="text-center font-semibold text-white mb-2">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {setSelectedProduct.products &&
                setSelectedProduct.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};
export default Shop;
