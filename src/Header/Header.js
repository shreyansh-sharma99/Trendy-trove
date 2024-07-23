// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import {
//   HiOutlineSearch,
//   HiOutlineShoppingCart,
//   HiOutlineUser,
// } from "react-icons/hi";
// import { IoIosLogOut } from "react-icons/io";
// import BasicModal from "../Modal";

// function Header() {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   const handleSearch = async () => {
//     if (!searchQuery.trim()) {
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `https://dummyjson.com/products/search?q=${searchQuery}`
//       );
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//       setSearchResults([]);
//     }
//   };

//   return (
//     <header className="bg-gray-900 w-full sm:overflow-scroll text-white  shadow-md">
//       <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div
//             className="flex-shrink-0 cursor-pointer"
//             onClick={() => navigate("/product")}
//           >
//             <img className="h-10" src="downloadlogo.png" alt="Logo" />
//           </div>

//           <nav className="hidden lg:flex flex-grow justify-center space-x-4">
//             <NavLink navigate={navigate} to="/product">
//               Home
//             </NavLink>
//             <NavLink navigate={navigate} to="/shop">
//               Shop
//             </NavLink>
//             <NavLink navigate={navigate} to="/about">
//               About
//             </NavLink>
//             <NavLink navigate={navigate} to="/contact">
//               Contact
//             </NavLink>
//           </nav>

//           <div className="flex  items-center space-x-4 ml-auto">
//             <div className="relative">
//               <input
//                 type="text"
//                 className="w-28 lg:w-64 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <button
//                 onClick={handleSearch}
//                 className="absolute right-0 top-0 mt-1 mr-2 flex items-center cursor-pointer"
//               >
//                 <HiOutlineSearch />
//               </button>
//             </div>
//             <NavLink
//               navigate={navigate}
//               to="/cart"
//               className="hidden lg:flex items-center ml-4"
//               style={{ textDecoration: "none" }}
//             >
//               <div className=" hidden lg:flex items-center">
//                 <HiOutlineShoppingCart className="text-gray-300 hover:text-white" />
//                 <span className="ml-1 hidden lg:inline text-gray-300 hover:text-white">
//                   Cart
//                 </span>
//               </div>
//             </NavLink>

//             <NavLink
//               navigate={navigate}
//               to="/create-account"
//               className="hidden lg:flex items-center ml-4"
//               style={{ textDecoration: "none" }}
//             >
//               <div className="hidden lg:flex  items-center">
//                 <HiOutlineUser className=" lg:flex items-center text-gray-300 hover:text-white" />

//                 <span className="hidden lg:inline  text-gray-300 hover:text-white">
//                   Account
//                 </span>
//               </div>
//             </NavLink>

//             <button
//               className="hidden lg:flex items-center text-gray-300 hover:text-white"
//               onClick={handleLogout}
//             >
//               <IoIosLogOut className="text-gray-300 hover:text-white" />
//               <span className="ml-1 hidden lg:inline  text-gray-300 hover:text-white">
//                 Logout
//               </span>
//             </button>
//           </div>
//           <div className="lg:hidden text-left mr-2 ">
//             <BasicModal />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// function NavLink({ navigate, to, children }) {
//   return (
//     <button
//       onClick={() => navigate(to)}
//       className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
//     >
//       {children}
//     </button>
//   );
// }

// export default Header;
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import {
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import BasicModal from "../Modal";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      return;
    }

    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchQuery}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-gray-900 w-full text-white shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => navigate("/products")}
          >
            <img className="h-10" src="downloadlogo.png" alt="Logo" />
          </div>

          <nav className="hidden lg:flex flex-grow justify-center space-x-4">
            <NavLink navigate={navigate} to="/products">
              Home
            </NavLink>
            <NavLink navigate={navigate} to="/shop">
              Shop
            </NavLink>
            <NavLink navigate={navigate} to="/about">
              About
            </NavLink>
            <NavLink navigate={navigate} to="/contact">
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                className="w-20 sm:w-40 lg:w-64 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="absolute right-0 top-0 mt-2 mr-2 flex items-center cursor-pointer"
              >
                <HiOutlineSearch />
              </button>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center">
                <HiOutlineShoppingCart
                  onClick={() => navigate("/cart")}
                  className="text-gray-300 hover:text-white cursor-pointer"
                />
                <span
                  className="ml-1 text-gray-300 hover:text-white cursor-pointer"
                  onClick={() => navigate("/cart")}
                >
                  Cart
                </span>
              </div>
              <div className="flex items-center">
                <HiOutlineUser
                  onClick={() => navigate("/create-account")}
                  className="text-gray-300 hover:text-white cursor-pointer"
                />
                <span
                  onClick={() => navigate("/create-account")}
                  className="ml-1 text-gray-300 hover:text-white cursor-pointer"
                >
                  Account
                </span>
              </div>
              <button
                className="flex items-center text-gray-300 hover:text-white"
                onClick={handleLogout}
              >
                <IoIosLogOut className="text-gray-300 hover:text-white" />
                <span className="ml-1 text-gray-300 hover:text-white">
                  Logout
                </span>
              </button>
            </div>
            <button
              className="lg:hidden flex items-center text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden bg-gray-800 text-white absolute top-16 right-0 w-2/5 shadow-lg z-50 rounded-lg">
          <NavLink navigate={navigate} to="/products">
            Home
          </NavLink>
          <NavLink navigate={navigate} to="/shop">
            Shop
          </NavLink>
          <NavLink navigate={navigate} to="/about">
            About
          </NavLink>
          <NavLink navigate={navigate} to="/contact">
            Contact
          </NavLink>
          <NavLink navigate={navigate} to="/cart">
            Cart
          </NavLink>
          <NavLink navigate={navigate} to="/create-account">
            Account
          </NavLink>
          <button
            className="w-full py-2 text-left px-4 hover:bg-gray-700"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      )}
    </header>
  );
}

function NavLink({ navigate, to, children }) {
  return (
    <button
      onClick={() => navigate(to)}
      className="block px-4 py-2 text-gray-300 hover:text-white"
    >
      {children}
    </button>
  );
}

export default Header;
