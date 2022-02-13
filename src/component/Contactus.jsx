import React from "react";
import Logo from "../assets/ostelloLogo.png";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Footer from "./Footer";
// import "./index.css";

const Contactus = () => {
  return (
    <>
      <div className="container pl-28 pr-20 bg-gradient-to-b from-cyan-200 to-white h-96 absolute ">
        <div className="float-left pl-10 mt-7 pr-10">
          <img src={Logo} alt="Logo" width="130" height="200" />
        </div>
        <div className="flex gap-20 pl-4 mt-10 ">
          <div>Buy a Course</div>
          <div>Community</div>
          <div>Scholarship</div>
          <div className="ml-72 ">List your Institute</div>

          <button className="bg-purple-600 text-white pl-3 pr-3 pb-1 rounded-md ">
            Login
          </button>
        </div>
        <div className="bg-white relative ml-12 top-32 z-10 pl-20 pr-20 pt-10 rounded-3xl ">
          <div className="">
            <p className="font-semibold">say hi to the team:)</p>
            <h1 className="font-semibold text-7xl text-purple-600 mb-6 mt-4">
              Get In Touch
            </h1>
            <p className="ml-28 font-semibold">
              feel free to contact us and we will <br /> get back to you as soon
              as we can
            </p>
          </div>
          <form action="" className="flex flex-col mt-10">
            <label htmlFor="name" className="">
              Your Name
            </label>
            <input
              type="text"
              className="bg-purple-100 w-80 h-8 rounded-md  mt-2 mb-2"
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              className="bg-purple-100 w-80 h-8 rounded-md   mt-2 mb-2"
            />
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              placeholder="Type something if you want..."
              className="bg-purple-100 w-80 h-32 rounded-md p-4 mt-2"
            ></textarea>
          </form>
          <button className="bg-purple-600 text-white w-32 rounded-lg mt-6 h-8">
            Submit
          </button>
          <div className=" relative float-right bottom-96 -mt-28 -left-20  ">
            <div className="bg-gray-400 p-20 w-80 h-52 ">llama animation</div>
            <div className="flex mt-6">
              <HiLocationMarker className="text-purple-600 text-2xl mr-6" />
              <p>
                Block-A - 1/57 Jangpura Extention <br /> New Delhi - 110014
              </p>
            </div>
            <div className="flex mt-6">
              <HiPhone className="text-purple-600 text-2xl mr-6" />
              <p>8271469630</p>
            </div>
            <div className="flex mt-6">
              <HiOutlineMail className="text-purple-600 text-2xl mr-6" />
              <p>Support@ostello.co.in</p>
            </div>
            <div className="flex text-purple-600 text-2xl m-10 gap-4">
              <FaFacebookF />
              <FaInstagramSquare />
              <FaYoutube />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contactus;
