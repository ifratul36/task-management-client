import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

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
      <div className="mt-8 flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center">
              <small>
                New Here?{" "}
                <Link
                  to="/signup"
                  className="font-bold text-red-600 hover:underline"
                >
                  Create an account
                </Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
