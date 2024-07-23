import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "../../Header/Header";
import Shop from "../../Shop";
import Spinner from "../../Spinner";

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchUserDetails(token);
    }
  }, [navigate]);

  const fetchUserDetails = (token) => {
    fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch user details.");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data); // Update user state with fetched data
        setIsLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        navigate("/login"); // Navigate to login page on error
      });
  };

  return (
    <div className="bg-gray-800">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          {<Outlet /> || <Shop />}
        </>
      )}
    </div>
  );
}

export default Home;
