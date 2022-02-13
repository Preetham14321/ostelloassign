import React from "react";
import Logo from "../assets/ostelloLogo2.png";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-0    relative  sm:bottom-10 -bottom-32 md:top-52 -ml-28 -mr-20 -pl-1 pr-0   bg-black text-white ">
      <div className="p-16 pl-32 mb-72 md:mb-0     ">
        <img
          src={Logo}
          alt="Logo"
          width="130"
          height="200"
          className="md:mb-6 mb-10  absolute md:relative   "
        />
        <div className="flex text-white text-2xl absolute top-28 md:top-0 md:relative mt-5  gap-4 ml-10">
          <FaFacebookF />
          <FaInstagramSquare />
          <FaYoutube />
          <FaLinkedinIn />
        </div>
      </div>
      <div className="md:pt-16  relative -top-40 md:top-0  block md:flex     md:-mt-48 md:ml-72  ">
        <div className=" pl-40">
          <h1 className=" mb-4 flex-initial w-52 ">About us</h1>
          <p className="text-gray-400">Who we are</p>
          <p className="text-gray-400">Press</p>
          <p className="text-gray-400">Careers</p>
          <p className="text-gray-400">Blogs</p>
        </div>
        <div className=" pl-80 -mt-36 md:-mt-0 md:pl-0 w-full">
          <h1 className="flex-initial mb-4  w-32 md:w-64">Events</h1>
          <p className="text-gray-400">About Our Events</p>
          <p className="text-gray-400">Ostello's Fest</p>
        </div>
        <div className=" pl-40 mt-28 md:mt-0 md:pl-0  w-full">
          <h1 className=" flex-initial mb-4 w-64 ">Contact Us</h1>
          <p className="text-gray-400">FAQs</p>
          <p className="text-gray-400">Support</p>
        </div>
        <div className=" pl-80 -mt-24 md:-mt-0 md:pl-0 mb-10 flex-initial   ">
          <h1 className="mb-4">Terms of Use</h1>
          <p className="flex-initial w-44  text-gray-400">Terms & Conditions</p>
          <p className="text-gray-400">Privacy Policy</p>
          <p className="text-gray-400">Refund Policy</p>
          <p className="text-gray-400">Trust & Safety</p>
        </div>
      </div>
      <h3 className="text-center ml-10 -mt-32  md:mt-10 md:ml-96   ">
        2022 ©️ Ostello India Private Limited.
      </h3>
    </footer>
  );
};

export default Footer;
