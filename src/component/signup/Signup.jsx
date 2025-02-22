

import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext);
      const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password, data.name, data.photoURL)
            .then(result => {
                const loggedUser = result.user;
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photoURL,
                        };
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User created successfully.",
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                    navigate("/");
                                }
                            });
                    })
                    .catch(error => console.log(error));
            });
    };

    return (
        <>
            <Helmet>
                <title>Task Management | Sign Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen flex justify-center items-center py-5">
                <div className="w-full max-w-lg shadow-2xl p-8  rounded-xl border border-gray-200">
                <h2 className="text-2xl font-bold text-center mb-6 ">Register Your Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Enter your name"
                                className=" w-full px-2 py-3 border border-teal-700 focus:outline-teal-700 rounded mr-2 mt-2"
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm mt-2">Name is required</span>
                            )}
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                {...register("photoURL", { required: true })}
                                placeholder="Enter your photo URL"
                                className=" w-full px-2 py-3 border border-teal-700 focus:outline-teal-700 rounded mr-2 mt-2"
                            />
                            {errors.photoURL && (
                                <span className="text-red-500 text-sm mt-2">Photo URL is required</span>
                            )}
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Enter your email"
                                className="w-full px-2 py-3 border border-teal-700 focus:outline-teal-700 rounded mr-2 mt-2"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm mt-2">Email is required</span>
                            )}
                        </div>

                        <div className="form-control mb-6 relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                })}
                                placeholder="Enter your password"
                                className="w-full px-2 py-3 border border-teal-700 focus:outline-teal-700 rounded mr-2 mt-2"
                            />
                             <button
                                            type="button"
                                            className="absolute right-3 top-12 text-gray-600"
                                            onClick={() => setShowPassword(!showPassword)}
                                          >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                          </button>
                            {errors.password && (
                                <span className="text-red-500 text-sm mt-2">Password is required</span>
                            )}
                            {errors.password?.type === "minLength" && (
                                <span className="text-red-500 text-sm mt-2">Password must be at least 6 characters long</span>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <span className="text-red-500 text-sm mt-2">Password cannot exceed 20 characters</span>
                            )}
                            {errors.password?.type === "pattern" && (
                                <span className="text-red-500 text-sm mt-2">
                                    Password must contain at least one uppercase letter, one number, and one special character.
                                </span>
                            )}
                        </div>

                        <div className="form-control mb-2">
                            <input
                                type="submit"
                                className="btn btn-accent w-full"
                                value="Sign Up"
                            />
                        </div>

                        <p className="text-center">
                            <small>
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-bold text-accent hover:underline"
                                >
                                    Login
                                </Link>
                            </small>
                        </p>
                    </form>

                    <div className="divider my-4">or</div>
                    <SocialLogin />
                </div>
            </div>
        </>
    );
};

export default Signup;
