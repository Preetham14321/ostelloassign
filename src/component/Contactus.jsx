import React, { useState } from "react";
import Logo from "../assets/ostelloLogo.png";

import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
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
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [message, setMessage] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const submitHandler = () => {
    nameValue.length < 1 ? setName(true) : setName(false);
    emailValue.length < 1 ? setEmail(true) : setEmail(false);
    messageValue.length < 1 ? setMessage(true) : setMessage(false);
  };

  return (
    <>
      <div className="container sm:p-10 md:p-0 md:pl-28 md:pr-20 bg-gradient-to-b from-cyan-200 to-white h-96 absolute ">
        <div className="float-left pl-10 mt-7 pr-10">
          <img src={Logo} alt="Logo" width="130" height="200" />
        </div>
        <div
          className={
            (showMenu ? "visible " : "invisible md:visible") +
            " md:flex md:gap-20 md:pl-4 md:mt-10 relative top-20  ml-32 mr-4 md:mr-0  bg-purple-400 z-30  md:top-0 md:bg-opacity-0 rounded-lg  "
          }
        >
          <div className="mb-2 md:mb-0">Buy a Course</div>
          <div className="mb-2 md:mb-0">Community</div>
          <div className="mb-2 md:mb-0">Scholarship</div>
          <div className="md:ml-72 ml-20 mb-2 md:mb-0 ">
            List your Institute
          </div>

          <button className="bg-purple-600 text-white pl-3 pr-3 pb-1 rounded-md ml-24 md:ml-0 mb-2 md:mb-0 ">
            Login
          </button>
        </div>

        {showMenu ? (
          <HiX
            className=" text-lg   absolute top-10 left-80  lg:hidden"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        ) : (
          <HiMenu
            className=" text-lg absolute top-10 left-80 lg:hidden"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        )}
        <div className="bg-white w-80 md:w-full ml-4     md:ml-12 relative  pl-10 pr-10 pt-10 md:top-32 z-10 md:pl-20 md:pr-20 md:pt-10 rounded-3xl ">
          <div className="">
            <p className="font-semibold">say hi to the team:)</p>
            <h1 className="font-semibold text-4xl md:text-7xl text-purple-600 mb-6 mt-4">
              Get In Touch
            </h1>
            <p className="md:ml-28 ml-10 mb-10 md:mb-0 font-semibold">
              feel free to contact us and we will <br /> get back to you as soon
              as we can
            </p>
          </div>
          <form
            action=""
            className="md:flex md:flex-col -ml-8 md:-ml-0 md:mt-10"
          >
            <label htmlFor="name" className="">
              Your Name
            </label>
            <input
              type="text"
              onChange={(e) => {
                setNameValue(e.target.value);
              }}
              className="bg-purple-100 w-80 h-8 rounded-md  mt-2 mb-2"
            />
            {name && (
              <p className="text-red-900 font-semibold">
                Please Enter valid Name
              </p>
            )}
            <label htmlFor="email">Your Email</label>
            <input
              onChange={(e) => {
                setEmailValue(e.target.value);
              }}
              type="email"
              className="bg-purple-100 w-80 h-8 rounded-md   mt-2 mb-2"
            />
            {email && (
              <p className="text-red-900 font-semibold">
                Please Enter valid Email
              </p>
            )}
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              onChange={(e) => {
                setMessageValue(e.target.value);
              }}
              placeholder="Type something if you want..."
              className="bg-purple-100 w-80 h-32 rounded-md p-4 mt-2"
            ></textarea>
            {message && (
              <p className="text-red-900 font-semibold">
                Please Enter valid Message
              </p>
            )}
          </form>
          <button
            onClick={submitHandler}
            className="bg-purple-600 text-white w-32 rounded-lg mt-6 mb-10 md:mb-0 h-8"
          >
            Submit
          </button>
          <div className=" relative md:float-right md:bottom-96 md:-mt-28 md:-left-20 top-12 md:top-full  ">
            <div className="bg-gray-400 -ml-9 md:-ml-0 p-12 md:p-20 w-80 h-52  ">
              llama animation
            </div>
            <div className="flex mt-10 ">
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
