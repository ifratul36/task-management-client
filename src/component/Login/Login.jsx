import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
     const location = useLocation();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
  
  const [showPassword, setShowPassword] = useState(false);

  
  const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            Swal.fire({
              title: "Logged in successfully!",
              text: "Welcome to the system.",
              icon: "success",
            });
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error("Error signing in: ", error.message);
            Swal.fire({
              title: "Error",
              text: error.message,
              icon: "error",
            });
          });
      };

  return (
    <>
      <Helmet>
         <title>Task Management | Login</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="card  w-full max-w-sm p-6 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-6 ">Welcome back !</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="form-control">
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className=" w-full px-2 py-3 border border-teal-700 focus:outline-teal-700 rounded mr-2"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className=" w-full px-2 py-3 border border-teal-700 focus:outline-teal-700 rounded mr-2"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-10 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <label className="label text-right">
                <a href="#" className="text-sm text-accent hover:underline">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-accent w-full">Login</button>
            </div>
            <p className="text-center text-sm ">
              New here? 
              <Link to="/signup" className="text-accent font-semibold hover:underline">
                Create an account
              </Link>
            </p>
          </form>
          <div className="divider">or</div>
          <SocialLogin />
          {/* https://i.ibb.co.com/LdHKSxdT/Sign-in-bro.png */}
        </div>
      </div>
    </>
  );
};

export default Login;
