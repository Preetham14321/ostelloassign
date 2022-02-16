// import React from "react";
import Logo from "../assets/ostelloLogo2.png";

// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="footer p-0 lg:pl-20    relative  sm:bottom-10 -bottom-32 md:top-52 -ml-28 lg:-mr-20 -pl-1 pr-0  bg-black text-white ">
//       <div className="p-16 pl-32 mb-64 md:mb-0     ">
//         <img
//           src={Logo}
//           alt="Logo"
//           width="130"
//           height="200"
//           className="md:mb-6 mb-10  absolute md:relative   "
//         />
//         <div className="flex text-white text-2lg absolute top-28 md:top-0 md:relative mt-5  gap-4 ml-10">
//           <FaFacebookF />
//           <FaInstagramSquare />
//           <FaYoutube />
//           <FaLinkedinIn />
//         </div>
//       </div>
//       <div className="md:pt-16  relative -top-40 md:top-0  block md:flex     md:-mt-48 md:ml-52  ">
//         <div className=" pl-40">
//           <h1 className=" mb-4 flex-initial w-52 ">About us</h1>
//           <p className="text-gray-400">Who we are</p>
//           <p className="text-gray-400">Press</p>
//           <p className="text-gray-400">Careers</p>
//           <p className="text-gray-400">Blogs</p>
//         </div>
//         <div className=" float-right mr-10 pt-2 lg:pt-0 -mt-36 lg:mt-0 ">
//           <h1 className=" mb-4  w-32 md:w-64">Events</h1>
//           <p className="text-gray-400">About Our Events</p>
//           <p className="text-gray-400">Ostello's Fest</p>
//         </div>
//         <div className=" pl-40  mt-20  md:mt-0 md:pl-0  w-full">
//           <h1 className=" flex-initial mb-4 w-64 ">Contact Us</h1>
//           <p className="text-gray-400">FAQs</p>
//           <p className="text-gray-400">Support</p>
//         </div>
//         <div className=" float-right -mt-24 lg:mt-0   ">
//           <h1 className="mb-4">Terms of Use</h1>
//           <p className=" w-44  text-gray-400">Terms & Conditions</p>
//           <p className="text-gray-400">Privacy Policy</p>
//           <p className="text-gray-400">Refund Policy</p>
//           <p className="text-gray-400">Trust & Safety</p>
//         </div>
//       </div>
//       <h3 className="text-center pl-28  -mt-20  md:mt-10 md:ml-96   ">
//         2022 ©️ Ostello India Private Limited.
//       </h3>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
// import LogoLightWithTitle from "../assets/logo_title_light.svg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin
} from "react-icons/ai";
// import { Link } from "react-router-dom";
const Footer = ({ className }) => {
  return (
    <footer className="text-white   font-dm-sans w-screen bg-slate  px-20 py-6  lg:px-12 space-y-8">
      <div className="flex flex-col space-y-12 lg:space-y-0 lg:space-x-6  lg:flex-row">
        <div className="flex flex-col items-center space-y-4 w-full lg:w-1/6 lg:items-start">
          <img src={Logo} alt="" className="h-12" />
          <div className="flex space-x-2 items-center">
            <AiFillFacebook className="h-6 w-6" />
            <AiFillInstagram className="h-6 w-6" />
            <AiFillYoutube className="h-6 w-6" />
            <AiFillLinkedin className="h-6 w-6" />
          </div>
        </div>
        <div className="hidden lg:flex space-x-4 items-start  lg:w-2/6 w-full">
          <div className="flex flex-col space-y-2 w-full lg:w-1/2 items-start">
            <h3 className="font-medium mb-4">Programs</h3>
            <p className="">Free Courses</p>
            <p className="">Counselling</p>
            <p className="">All Programs</p>
            <p className="">Scholarships</p>
            <p className="">Books</p>
          </div>
          <div className="flex-col flex space-y-2 w-full lg:w-1/2 items-start">
            <h3 className="font-medium mb-4">About Us</h3>
            <p>Who we are</p>
            <p>Our Team</p>
            <p>Press</p>
            <p>Careers</p>
            <p>Blogs</p>
          </div>
        </div>
        <div className="hidden lg:flex space-x-4 items-start lg:w-2/6 w-full">
          <div className="flex flex-col space-y-2 w-full lg:w-1/2 items-start">
            <h3 className="font-medium mb-4">Events</h3>
            <p>About Our Events</p>
            <p>Ostello's Fest</p>
            <p>Local Seminars</p>
          </div>
          <div className="flex-col flex space-y-2 w-full lg:w-1/2 items-start">
            <h3 className="font-medium mb-4">Contact Us</h3>
            <p>FAQs</p>
            <p>Support</p>
            <p>Partnerships</p>
          </div>
        </div>
        <div className="hidden lg:flex space-x-4 items-start lg:w-1/6 w-full">
          <div className="flex flex-col space-y-2 w-full items-start">
            <h3 className="font-medium mb-4">Terms of Use</h3>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
            <p>Trust & Safety</p>
          </div>
        </div>
      </div>
      <div className="text-center lg:text-left">
        2022 ©️ Ostello India Private Limited
      </div>
    </footer>
  );
};

export default Footer;
