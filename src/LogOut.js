// import { IoIosLogOut } from "react-icons/io";
// import { useNavigate } from "react-router-dom";

// const Logout = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <div className="mt-8 space-y-6">
//       <button onClick={handleLogout}>
//         LogOut
//         <IoIosLogOut />
//       </button>
//     </div>
//   );
// };

// export default Logout;

import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="mt-8 space-y-6">
      <button onClick={handleLogout} className="flex items-center">
        LogOut
        <IoIosLogOut />
      </button>
    </div>
  );
};

export default Logout;
