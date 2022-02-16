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
      <div className="  xl:p-0   bg-gradient-to-b  from-cyan to-white h-3/4 w-screen absolute ">
        <div className="float-left pl-10 lg:pl-20 mt-7 pr-10">
          <img src={Logo} alt="Logo" width="130" height="200" />
        </div>

        {/* {showMenu ? (
          <HiX
            className="text-lg float-right mt-10 mr-10  lg:hidden"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        ) : (
          <HiMenu
            className=" text-lg float-right mt-10 mr-10  lg:hidden"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        )} */}
        <div
          className={
            // (showMenu ? "visible " : "invisible xl:visible") +
            " invisible xl:visible xl:flex  xl:gap-20 xl:pl-4 xl:mt-10 relative top-20   mr-4 xl:mr-0  bg-violet z-30  xl:top-0 xl:bg-opacity-0 rounded-lg   "
          }
        >
          <div className="mb-2 xl:mb-0">Buy a Course</div>
          <div className="mb-2 xl:mb-0">Community</div>
          <div className="mb-2 xl:mb-0 ">Scholarship</div>
          <div className="lg:float-right lg:gap-20 xl:ml-40  lg:flex lg:flex-wrap">
            <div className=" mb-2 xl:mb- ">List your Institute</div>

            <button className="bg-violet text-white pl-3 pr-3 pb-1 rounded-xl ml-24 xl:ml-0 mb-2 xl:mb-0 ">
              Login
            </button>
          </div>
        </div>

        <div className="bg-white w-80       xl:w-11/12  relative  block m-auto   pt-10 xl:top-32 z-10 xl:pl-20 xl:pr-20 xl:pt-10 rounded-3xl mb-52 ">
          <div className="">
            <p className="font-semibold pl-8 xl:pl-0 ">say hi to the team:)</p>
            <h1 className="font-semibold text-4xl xl:text-7xl text-violet mb-6 pl-8 xl:pl-0 mt-4">
              Get In Touch
            </h1>
            <p className="xl:ml-28 ml-10 mb-10 xl:mb-0 font-semibold">
              feel free to contact us and we will <br /> get back to you as soon
              as we can
            </p>
          </div>
          <form
            action=""
            className="xl:flex xl:flex-col pl-2 w-64 xl:-ml-0 xl:mt-10 "
          >
            <label htmlFor="name" className="">
              Your Name
            </label>
            <input
              type="text"
              onChange={(e) => {
                setNameValue(e.target.value);
              }}
              className="bg-violet bg-opacity-10 w-80 h-8 rounded-xl  mt-2 mb-2"
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
              className="bg-violet bg-opacity-10 w-80 h-8 rounded-xl   mt-2 mb-2"
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
              className="bg-violet bg-opacity-10 w-80 h-32 rounded-xl p-4 mt-2"
            ></textarea>
            {message && (
              <p className="text-red-900 font-semibold">
                Please Enter valid Message
              </p>
            )}
          </form>
          <button
            onClick={submitHandler}
            className="bg-violet text-white w-32 rounded-lg mt-6 xl:mb-0 h-8"
          >
            Submit
          </button>
          <div className=" block m-auto relative xl:float-right xl:bottom-96 xl:-mt-28 xl:-left-20 top-12 xl:top-full  ">
            <div className="bg-gray  xl:-ml-0 p-12 xl:p-20 w-80 h-52  ">
              llama animation
            </div>
            <div className="flex mt-10 ">
              <HiLocationMarker className="text-violet text-2xl mr-6" />
              <p>
                Block-A - 1/57 Jangpura Extention <br /> New Delhi - 110014
              </p>
            </div>
            <div className="flex mt-6">
              <HiPhone className="text-violet text-2xl mr-6" />
              <p>8271469630</p>
            </div>
            <div className="flex mt-6">
              <HiOutlineMail className="text-violet text-2xl mr-6" />
              <p>Support@ostello.co.in</p>
            </div>
            <div className="flex text-violet text-2xl m-10 gap-4">
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
