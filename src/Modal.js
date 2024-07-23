import React, { useState, useEffect } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    if (open) {
      const handleCloseOnScroll = () => {
        handleClose();
        window.removeEventListener("scroll", handleCloseOnScroll);
      };
      window.addEventListener("scroll", handleCloseOnScroll);
      return () => {
        window.removeEventListener("scroll", handleCloseOnScroll);
      };
    }
  }, [open]);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <CgDetailsMore />
      </button>
      {open && (
        <div
          onClick={handleOverlayClick}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-0 z-50"
        >
          <div className="bg-gray-900 text-white w-[20rem] h-[25rem] shadow-md max-w-[40rem] mx-auto px-4 py-8 sm:px-6 lg:px-8 rounded-md z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
              <IoClose
                className="text-gray-300 hover:text-white cursor-pointer"
                onClick={handleClose}
              />
            </div>
            <nav className="flex flex-col items-center justify-between gap-4">
              <NavLink
                to="/products"
                onClick={handleClose}
                className="text-white hover:text-blue-500"
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                onClick={handleClose}
                className="text-white hover:text-blue-500"
              >
                Shop
              </NavLink>

              <NavLink
                to="/about"
                onClick={handleClose}
                className="text-white hover:text-blue-500"
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={handleClose}
                className="text-white hover:text-blue-500"
              >
                Contact
              </NavLink>
            </nav>

            <div className="flex flex-col items-center justify-between pb-4">
              <div className="mt-8 space-y-4">
                <NavLink
                  to="/cart"
                  onClick={handleClose}
                  className="text-white hover:text-blue-500 flex items-center"
                >
                  <HiOutlineShoppingCart className="text-gray-300 hover:text-white mr-2" />
                  <span>Cart</span>
                </NavLink>
                <NavLink
                  to="/create-account"
                  onClick={handleClose}
                  className="text-white hover:text-blue-500 flex items-center"
                >
                  <HiOutlineUser className="text-gray-300 hover:text-white mr-2" />
                  <span>Account</span>
                </NavLink>
              </div>

              <button
                onClick={handleLogout}
                className="text-white hover:text-blue-500 flex items-center mt-4"
              >
                <IoIosLogOut className="text-gray-300 hover:text-white mr-2" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
