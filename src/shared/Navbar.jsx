import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState("light");

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error));
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const navOptions = (
    <>
      <li className=" hover:text-orange-600">
        <Link to="/">Home</Link>
      </li>
      <li className=" hover:text-orange-600">
        <Link to="/addTask">Add Task</Link>
      </li>
      <li className=" hover:text-orange-600">
        <Link to="/todo">Todo</Link>
      </li>
      <li className=" hover:text-orange-600">
        <Link to="/secret">Secret</Link>
      </li>
     
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user?.photoURL || "default-avatar.jpg"} 
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              {user ? (
                <>
                  <button
                    className=" hover:text-orange-600"
                    onClick={handleLogOut}
                  >
                    {" "}
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className=" hover:text-orange-600">
                    Log in
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
         {/* Theme Toggle Button */}
      <button onClick={toggleTheme} className="text-3xl mx-4">
          {theme === "dark" ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
