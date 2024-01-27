import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import logo from "../assets/Images/Vector.png";

const Login = () => {
  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(
        "https://shoe-backend-6w6r.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const res_data = await response.json();
      console.log(res_data);

      if (response.ok) {
        storetokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        alert("login success");
        navigate("/");
      } else {
        console.log("our error is :", res_data.extraDetails);
      }
      console.log("our response is :", response);
    } catch (error) {
      console.log("login error is :", error);
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-secondary p-8 rounded shadow-md w-96">
          <div className="mb-6">
            <img
              src={logo}
              alt="Login Logo"
              className="w-16 h-16 object-contain mb-2"
            />
            <h1 className="text-2xl font-semibold text-gray-800">Login</h1>
          </div>
          <div className="bg-white p-8 rounded shadow-2xl ">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.emal}
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                // onClick={handleLogin}
                className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login