import React from "react";
import { Link } from "react-router-dom";
import LogoWithTitle from "../assets/logo_title.svg";
import { BsFillGridFill } from "react-icons/bs";
const NavHeader = ({
  className = "",
  type = "client",
  isAuth = window.localStorage.getItem("ACCESS_TOKEN") !== null,
  isLanding = false
}) => {
  //   const navigate = useNavigate();
  //   const location = useLocation();
  return (
    <nav
      className={`${className} flex justify-center items-center space-x-8 py-4 px-4 lg:pr-8 font-dm-sans bg-transparent`}
    >
      {/* <div className="flex-1 lg:hidden"></div> */}
      <img src={LogoWithTitle} alt="logo" className="w-auto h-8 " />
      {type === "merchant" && (
        <div className="items-center space-x-4 hidden lg:flex">
          <Link to={"/"}>
            <p className="font-medium text-base">Home</p>
          </Link>
          <Link to={"/"}>
            <p className="font-medium text-base">About us</p>
          </Link>
          <Link to={"/"}>
            <p className="font-medium text-base">Benefits</p>
          </Link>
        </div>
      )}
      {type === "client" && (
        <div className="items-center space-x-4 hidden lg:flex">
          <Link to={"/"}>
            <p className="font-medium text-base">Buy a Course</p>
          </Link>
          <Link to={"/"}>
            <p className="font-medium text-base">Community</p>
          </Link>
          <Link to={"/"}>
            <p className="font-medium text-base">Scholarship</p>
          </Link>
        </div>
      )}
      <div className="flex-1 hidden lg:block"></div>
      <div className="hidden lg:flex items-center space-x-4">
        <Link to={"/"}>
          <p className="font-medium text-base">List your Institute</p>
        </Link>
        {!isAuth ? (
          <React.Fragment>
            {" "}
            <Link to={"/signup"}>
              <button className="px-6 py-1 border-2  shadow-md rounded-lg border-violet">
                <p className="font-medium text-base text-violet">Sign Up</p>
              </button>
            </Link>
            <Link to={"/login"}>
              <button className="px-6 py-1 border-2 border-violet rounded-lg bg-violet shadow-md">
                <p className="font-medium text-base text-white">Login</p>
              </button>
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button className="bg-violet shadow-md px-6 py-1 rounded-xl flex space-x-2 items-center">
              <div className="w-8 h-8 rounded-full  bg-lavender"></div>
              <p className="text-base text-white font-medium">My Profile</p>
            </button>
            <button
              className="px-6 py-1 border-2  shadow-md rounded-lg border-violet"
              onClick={() => {
                window.localStorage.removeItem("ACCESS_TOKEN");
                window.localStorage.removeItem("OWNER_ID");
                window.location.reload();
              }}
            >
              <p className="font-medium text-base text-violet">Logout</p>
            </button>
          </React.Fragment>
        )}
      </div>
      <div className="flex-1 lg:hidden"></div>
      <button className="bg-white rounded-xl lg:hidden">
        <BsFillGridFill className="text-violet" />
      </button>
      {/* <button className="flex-col space-y-1.5 lg:hidden">
        <div className="h-0.5 bg-black w-6"></div>
        <div className="h-0.5 bg-black w-6"></div>
        <div className="h-0.5 bg-black w-6"></div>
      </button> */}
    </nav>
  );
};

export default NavHeader;
