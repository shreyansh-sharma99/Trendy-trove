// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../../redux/authSlice";
// import axios from "axios";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("https://dummyjson.com/auth/login", {
//         username: "emilys",
//         password: "emilyspass",
//         expiresInMins: 30,
//       });

//       const token = response.data.token;
//       localStorage.setItem("token", token);

//       dispatch(login({ username, token }));

//       navigate("/");
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Failed to login. Please check your credentials.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-6">
//         <div className="flex items-center justify-center">
//           <img src="download new crop.png" alt="logo" className="h-32" />
//         </div>
//         <div>
//           <h2 className="mt-4 text-center text-3xl font-extrabold">
//             Login To The Trendy World
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           {error && <div className="text-red-500 text-center">{error}</div>}
//           <div>
//             <label htmlFor="username" className="sr-only">
//               Username
//             </label>
//             <input
//               id="username"
//               name="username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="Username"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="sr-only">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
//               placeholder="Password"
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginAsync } from "../../redux/authSlice";
// import toast from "react-hot-toast";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const error = useSelector((state) => state.auth.error);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await dispatch(loginAsync({ username, password })).unwrap();
//       toast.success("Login successful");
//       navigate("/");
//     } catch (err) {
//       console.error("Error:", err);
//       toast.error("Failed to login. Please check your credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-6">
//         <div className="flex items-center justify-center">
//           <img src="download new crop.png" alt="logo" className="h-32" />
//         </div>
//         <div>
//           <h2 className="mt-4 text-center text-3xl font-extrabold">
//             Login To The Trendy World
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           {error && <div className="text-red-500 text-center">{error}</div>}
//           <div>
//             <label htmlFor="username" className="sr-only">
//               Username
//             </label>
//             <input
//               id="username"
//               name="username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="Username"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="sr-only">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
//               placeholder="Password"
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
//                 loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
//               } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
//               disabled={loading}
//             >
//               {loading ? (
//                 <svg
//                   className="animate-spin h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="bg-grey-500"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                   ></path>
//                 </svg>
//               ) : (
//                 "Sign in"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../redux/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("emilys"); // Default username
  const [password, setPassword] = useState("emilyspass"); // Default password
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // Track password visibility
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await dispatch(loginAsync({ username, password })).unwrap();
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      console.error("Error:", err);
      toast.error("Failed to login. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        <div className="flex items-center justify-center">
          <img src="download new crop.png" alt="logo" className="h-32" />
        </div>
        <div>
          <h2 className="mt-4 text-center text-3xl font-extrabold">
            Login To The Trendy World
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <svg
                  className="h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {passwordVisible ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5a7 7 0 00-7 7 7 7 0 0014 0 7 7 0 00-7-7zM12 12a2 2 0 11-2-2 2 2 0 012 2z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3a9 9 0 00-9 9 9 9 0 0018 0 9 9 0 00-9-9zm0 6a3 3 0 110 6 3 3 0 010-6z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="bg-grey-500"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
