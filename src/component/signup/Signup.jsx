// import React, { useContext } from 'react';
// import { useForm } from "react-hook-form";
// import { Helmet } from 'react-helmet-async';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../../providers/AuthProvider';
// import useAxiosPublic from '../../hooks/useAxiosPublic';
// import SocialLogin from '../SocialLogin/SocialLogin';

// const Signup = () => {
//     const axiosPublic = useAxiosPublic();
//     const { createUser , updateUserProfile} = useContext(AuthContext);
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//       } = useForm();
//       const navigate = useNavigate();

//       const onSubmit = data => {
//         console.log(data);
//         createUser(data.email, data.password,data.name, data.photoURL)
//         .then(result =>{
//             const loggedUser = result.user;
//             console.log(loggedUser);
//             updateUserProfile(data.name, data.photoURL)
//             .then(() =>{
//               // create user entry in the database
//               const userInfo = {
//                 name: data.name,
//                 email: data.email,
//                 photo: data.photoURL
//               }
//               axiosPublic.post('/users',userInfo)
//               .then(res =>{
//                 if(res.data.insertedId){
//                   console.log('user added to the database');
//                   reset();
//                   Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: "User created successfully.",
//                     showConfirmButton: false,
//                     timer: 1500,
//                   });
//                   navigate("/");
//                 }
//               })
            
//             })
//             .catch(error => console.log(error))
//         })
//       }



//     return (
//         <>
//       <Helmet>
//         <title>Task Management | Sign Up</title>
//       </Helmet>
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className=" w-full max-w-sm shrink-0 shadow-2xl ">
//             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   {...register("name", { required: true })}
//                   placeholder="name"
//                   className="input input-bordered"
//                 />
//                 {errors.name && (
//                   <span className="text-red-500">Name is required</span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Photo URL</span>
//                 </label>
//                 <input
//                   type="text"
//                   {...register("photoURL", { required: true })}
//                   placeholder="PhotoURL"
//                   className="input input-bordered"
//                 />
//                 {errors.PhotoURL && (
//                   <span className="text-red-500">Photo URL is required</span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   {...register("email", { required: true })}
//                   placeholder="email"
//                   className="input input-bordered"
//                 />
//                 {errors.email && (
//                   <span className="text-red-500">Email is required</span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   {...register("password", {
//                     required: true,
//                     minLength: 6,
//                     maxLength: 20,
//                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
//                   })}
//                   placeholder="password"
//                   className="input input-bordered"
//                 />
//                 {errors.password && (
//                   <span className="text-red-500">Password is required</span>
//                 )}
//                 {errors.password?.type === "minLength" && (
//                   <span className="text-red-500">
//                     Password must be 6 characters
//                   </span>
//                 )}
//                 {errors.password?.type === "maxLength" && (
//                   <span className="text-red-500">
//                     Password must be less then 20 characters
//                   </span>
//                 )}
//                 {errors.password?.type === "pattern" && (
//                   <span className="text-red-500">
//                     Password must have one uppercase , one lower case one number
//                     and one special character
//                   </span>
//                 )}
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <input
//                   type="submit"
//                   className="btn btn-neutral"
//                   value="Sign Up"
//                 />
//               </div>
//               <p className="text-center">
//                 <small>
//                   Already have an account{" "}
//                   <Link
//                     to="/login"
//                     className="font-bold text-red-600 hover:underline"
//                   >
//                     Login
//                   </Link>
//                 </small>
//               </p>
//             </form>
//             <div className="divider">or</div>
//               <SocialLogin />
//               {/* https://i.ibb.co.com/tp1W1JCL/Sign-in-pana.png */}
//           </div>
//         </div>
//       </div>
//     </>
//     );
// };

// export default Signup;

import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext);
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
            <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
                <div className="w-full max-w-xl shadow-2xl p-8 bg-white rounded-xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Enter your name"
                                className="py-6 input input-bordered focus:outline-none focus:ring-2 focus:ring-teal-500 w-full p-3"
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
                                className=" py-6 input input-bordered focus:outline-none focus:ring-2 focus:ring-teal-500 w-full p-3"
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
                                className=" py-6 input input-bordered focus:outline-none focus:ring-2 focus:ring-teal-500 w-full p-3"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm mt-2">Email is required</span>
                            )}
                        </div>

                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                })}
                                placeholder="Enter your password"
                                className=" py-6 input input-bordered focus:outline-none focus:ring-2 focus:ring-teal-500 w-full p-3"
                            />
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
                                className="btn btn-outline w-full"
                                value="Sign Up"
                            />
                        </div>

                        <p className="text-center">
                            <small>
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-bold text-teal-600 hover:underline"
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
