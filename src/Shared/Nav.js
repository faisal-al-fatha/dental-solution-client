import { faTooth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import { logo3 } from "../Assets/Logo/logo3.svg";
const Nav = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className=" mx-auto flex flex-wrap p-5 ml-6 flex-col md:flex-row items-center md:justify-between">
        <div className="flex-1 flex ">
          <div className="text-4xl text-cyan-500 font-semibold">
           
            {<FontAwesomeIcon icon={faTooth}></FontAwesomeIcon>}
          </div>
          <Link
            className="ml-3 normal-case text-3xl  font-thin"
            to="./"
          >
            Dr. John's Dental Solution
          </Link>
        </div>
        <div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <ul className="menu menu-horizontal p-0">
            <li>
              <Link
                to="/home"
                aria-label="Home"
                title="Home"
                className="font-thin tracking-wide text-gray-900 transition-colors duration-200 hover:text-cyan-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                aria-label="Services"
                title="Services"
                className="font-thin tracking-wide text-gray-900 transition-colors duration-200 hover:text-cyan-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                aria-label="Login"
                title="Login"
                className="font-thin tracking-wide text-gray-900 transition-colors duration-200 hover:text-cyan-700"
              >
                LogIn
              </Link>
            </li>

            <li>
              <Link
                to="/blogs"
                aria-label="Blogs"
                title="Blogs"
                className="font-thin tracking-wide text-gray-900 transition-colors duration-200 hover:text-cyan-700"
              >
                Blogs
              </Link>
            </li>
            {/* <li>
              {user?.uid ? (
                <button
                  onClick={handleLogOut}
                  className="font-thin tracking-wide text-gray-900 transition-colors duration-200 hover:text-cyan-700"
                >
                  Log Out
                </button>
              ) : (
                <>
                  {" "}
                  <Link
                    to="/registration"
                    className="font-thin tracking-wide text-gray-900 transition-colors duration-200 hover:text-cyan-700"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="font-thin tracking-wide text-gray-900 transition-colors duration-200 hover:text-cyan-700"
                  >
                    Log In
                  </Link>
                </>
              )}
            </li>
            <li>
              <p>
                {user?.photoURL ? (
                  <div className="tooltip" data-tip={user.displayName}>
                    <img
                      className="rounded-full h-8 w-8"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                ) : (
                  <FaUser
                    title={user?.displayName ? user.displayName : "user"}
                  ></FaUser>
                )}
              </p>
            </li> */}
          </ul>
        </nav>
        </div>
       <div> <button className="inline-flex items-center btn btn-outline bg-cyan-400 text-black py-1 px-3  rounded hover:bg-cyan-500 mt-4 md:mt-0">
          Appointment
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button></div>
      </div>
    </header>
  );
};

export default Nav;
