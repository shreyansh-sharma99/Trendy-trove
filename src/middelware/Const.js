import axios from "axios";

export const CONST = {
  PRODUCT_URL: "https://dummyjson.com/products",
};

export const AllProductData = async () => {
  try {
    const response = await axios.get(`${CONST.PRODUCT_URL}/categories`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to get products");
  }
};
