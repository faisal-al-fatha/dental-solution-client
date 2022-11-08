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
            className="ml-3 normal-case text-3xl font-semibold"
            to="./"
          >
            Dental Solution
          </Link>
        </div>
        <div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
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
