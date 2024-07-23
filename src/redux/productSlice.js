import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CONST } from "../middelware/Const";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  selectedProduct: null,
  categories: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchproductCard.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchproductCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchproductCard.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setProducts, setLoading, setSelectedProduct, setCategories } =
  productSlice.actions;

export const fetchCategories = createAsyncThunk(
  "product/fetchCategories",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const res = await axios(`${CONST.PRODUCT_URL}/categories`);
      dispatch(setCategories(res.data));
    } catch (error) {
      console.error("Failed to fetch Categories", error);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const fetchAllProduct = createAsyncThunk(
  "products/fetchAllProduct",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const res = await axios.get(`${CONST.PRODUCT_URL}`);
      dispatch(setProducts(res.data));
    } catch (error) {
      console.error("failed to load data", error);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    const res = await axios.get(`${CONST.PRODUCT_URL}/${id}`);
    return res.data;
  }
);

export const fetchproductCard = createAsyncThunk(
  "products/fetchproductCard",
  async (category) => {
    const res = await axios.get(`${CONST.PRODUCT_URL}/category/${category}`);
    return res.data;
  }
);

export const SingleCategoryProduct = createAsyncThunk(
  "products/SingleCategoryProduct",
  async (id) => {
    const res = await axios.get(`${CONST.PRODUCT_URL}/category/${id}`);
    return res.data;
  }
);
export default productSlice.reducer;
