// // import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// // import "./App.css";
// // import Home from "./pages/Home/Home";
// // import CreateAccount from "./pages/CreateAccount/CreateAccount";
// // import Login from "./pages/Login/Login";
// // import Cart from "../src/Header/Cart";
// // import Shop from "./Shop";
// // import Product from "../src/components/Product";
// // import About from "./About";
// // import ContactPage from "./Contact";
// // import ProductCard from "./components/ProductCard";
// // import SingleAllProduct from "./SingleAllProduct";

// // function App() {
// //   return (
// //     <div className="App">
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path="login" element={<Login />} />

// //           <Route path="/" element={<Home />}>
// //             <Route index element={<Navigate replace to="products" />} />
// //             <Route path="/products" element={<Product />} />
// //             <Route path="/products/:category?" element={<ProductCard />} />
// //             <Route path="/products/:id?" element={<SingleAllProduct />} />
// //             <Route path="shop" element={<Shop />} />

// //             <Route path="create-account" element={<CreateAccount />} />
// //             <Route path="about" element={<About />} />
// //             <Route path="contact" element={<ContactPage />} />
// //             <Route path="cart" element={<Cart />} />
// //           </Route>
// //         </Routes>
// //       </BrowserRouter>
// //     </div>
// //   );
// // }

// // export default App;
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   createRoutesFromElements,
//   Navigate,
// } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/Home/Home";
// import CreateAccount from "./pages/CreateAccount/CreateAccount";
// import Login from "./pages/Login/Login";
// import Cart from "../src/Header/Cart";
// import Shop from "./Shop";
// import Product from "../src/components/Product";
// import About from "./About";
// import ContactPage from "./Contact";
// import ProductCard from "./components/ProductCard";
// import SingleAllProduct from "./SingleAllProduct";
// import AllProduct from "./components/AllProduct";
// import SingleCategoryProduct from "./SingleCategoryProduct";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="login" element={<Login />} />
//       <Route path="/" element={<Home />}>
//         <Route index element={<Navigate replace to="products" />} />
//         <Route path="products" element={<Product />} />
//         <Route path="products/:category?" element={<ProductCard />} />
//         <Route path="products/id/:id" element={<SingleAllProduct />} />
//         <Route path="shop" element={<Shop />} />
//         <Route path="shop/:category?" element={<Shop />} />
//         <Route
//           path="shop/category/:element"
//           element={<SingleCategoryProduct />}
//         />
//         <Route path="create-account" element={<CreateAccount />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<ContactPage />} />
//         <Route path="cart" element={<Cart />} />
//         <Route path="all-products" element={<AllProduct />} />{" "}
//       </Route>
//     </>
//   )
// );

// function App() {
//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import Login from "./pages/Login/Login";
import Cart from "../src/Header/Cart";
import Shop from "./Shop";
import Product from "../src/components/Product";
import About from "./About";
import ContactPage from "./Contact";
import ProductCard from "./components/ProductCard";
import SingleAllProduct from "./SingleAllProduct";
import AllProduct from "./components/AllProduct";
import SingleCategoryProduct from "./SingleCategoryProduct";
import { Toaster } from "react-hot-toast";
import Buy from "./Buy";
import OrderSummary from "./OrderSummery";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Home />}>
        <Route index element={<Navigate replace to="products" />} />
        <Route path="products" element={<Product />} />
        <Route path="products/:category?" element={<ProductCard />} />
        <Route path="products/id/:id" element={<SingleAllProduct />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:category?" element={<Shop />} />
        <Route
          path="shop/category/:element"
          element={<SingleCategoryProduct />}
        />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="all-products" element={<AllProduct />} />
        <Route path="buy" element={<Buy />} />

        <Route path="/order-summary" element={<OrderSummary />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "black",
            color: "whitesmoke",
          },
        }}
      />
    </div>
  );
}

export default App;
