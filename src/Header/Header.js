import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import {
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleSearch = async (reqData) => {
    if (!reqData.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${reqData}`
      );
      const data = response.data.products;
      console.log(data);
      // setSearchResults(response.data.products);
      setSearchResults(data);
      setIsSuggestionsOpen(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
      setIsSuggestionsOpen(false);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchQuery(suggestion.title);
    setIsSuggestionsOpen(false);
    navigate(`/products/${suggestion.id}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSuggestionsOpen(false);
  }, [location]);

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

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
    <header className="bg-gray-900 w-full text-white shadow-md">
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

          <div className="flex items-center space-x-4 relative">
            <div className="relative">
              <input
                type="text"
                className="w-20 sm:w-40 lg:w-64 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-0 top-0 mt-2 mr-2 flex items-center cursor-pointer">
                <HiOutlineSearch />
              </button>

              {isSuggestionsOpen && searchResults.length > 0 && (
                <ul className="absolute z-50 w-full bg-gray-700 text-white border border-gray-500 rounded-md mt-1 max-h-64 overflow-y-auto">
                  {searchResults.map((result) => (
                    <li
                      key={result.id}
                      onClick={() => handleSelectSuggestion(result)}
                      className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                    >
                      {result.title}
                    </li>
                  ))}
                </ul>
              )}
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
