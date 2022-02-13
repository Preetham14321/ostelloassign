import React from "react";
import Logo from "../assets/ostelloLogo2.png";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-0 relative top-52 -ml-28 -mr-20 -pl-1 pr-0   bg-black text-white ">
      <div className="p-16 pl-32    ">
        <img src={Logo} alt="Logo" width="130" height="200" className="mb-3" />
        <div className="flex text-white text-2xl  gap-4 ml-10">
          <FaFacebookF />
          <FaInstagramSquare />
          <FaYoutube />
          <FaLinkedinIn />
        </div>
      </div>
      <div className="pt-16   -mt-48 ml-72 flex ">
        <div className=" pl-40">
          <h1 className=" mb-4 flex-initial w-52 ">About us</h1>
          <p className="text-gray-400">Who we are</p>
          <p className="text-gray-400">Press</p>
          <p className="text-gray-400">Careers</p>
          <p className="text-gray-400">Blogs</p>
        </div>
        <div className="  w-full">
          <h1 className="flex-initial mb-4 w-64">Events</h1>
          <p className="text-gray-400">About Our Events</p>
          <p className="text-gray-400">Ostello's Fest</p>
        </div>
        <div className="   w-full">
          <h1 className=" flex-initial mb-4 w-64 ">Contact Us</h1>
          <p className="text-gray-400">FAQs</p>
          <p className="text-gray-400">Support</p>
        </div>
        <div className="  mb-10 flex-initial   ">
          <h1 className="mb-4">Terms of Use</h1>
          <p className="flex-initial w-44  text-gray-400">Terms & Conditions</p>
          <p className="text-gray-400">Privacy Policy</p>
          <p className="text-gray-400">Refund Policy</p>
          <p className="text-gray-400">Trust & Safety</p>
        </div>
      </div>
      <h3 className="text-center ml-96 mt-10 ">
        2022 ©️ Ostello India Private Limited.
      </h3>
    </footer>
  );
};

export default Footer;
