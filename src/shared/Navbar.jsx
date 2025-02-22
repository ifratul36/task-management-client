import { FaMoon, FaSun } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  console.log("User Object:", user);
  console.log(user?.photoURL)

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
    <li>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "teal" : "inherit",
           fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/addTask"
        style={({ isActive }) => ({
          color: isActive ? "teal" : "inherit",
           fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Add Task
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/allTask"
        style={({ isActive }) => ({
          color: isActive ? "teal" : "inherit",
           fontWeight: isActive ? "bold" : "normal",
        })}
      >
        All Task
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/todo"
        style={({ isActive }) => ({
          color: isActive ? "teal" : "inherit",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Todo
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/drag"
        style={({ isActive }) => ({
          color: isActive ? "teal" : "inherit",
           fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Drag
      </NavLink>
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
        <p className="md:text-xl ">Task Management</p>
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
                alt="Jannat"
                src={user?.photoURL || "default-avatar.jpg"}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
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
          {theme === "dark" ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
