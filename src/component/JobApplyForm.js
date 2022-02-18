import React from "react";
import LogoWithTitle from "../assets/logo_title.svg";
import Footer from "./Footer";

const JobApplyForm = () => {
  return (
    <>
      <div className="">
        <img
          src={LogoWithTitle}
          alt="logo"
          className="w-auto block mt-8  m-auto h-10 "
        />
        <div className="py-5 w-4/5  lg:w-2/5  m-auto">
          <form
            action=""
            className="flex flex-col  space-y-3 bg-white border border-light-slate px-10 lg:px-20 py-10 rounded-3xl drop-shadow-xl"
          >
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="sm:w-3/4 w-4/4    bg-violet bg-opacity-10 p-1 rounded-lg"
              placeholder="John"
              required
            />
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="sm:w-3/4 w-4/4   bg-violet bg-opacity-10 p-1 rounded-lg"
              placeholder="Doe"
              required
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="sm:w-3/4 w-4/4   bg-violet bg-opacity-10 p-1 rounded-lg"
              placeholder="abc@gmail.com"
              required
            />
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              className="sm:w-3/4 w-4/4   bg-violet bg-opacity-10 p-1 rounded-lg"
              placeholder="8271469630"
              required
            />
            <label htmlFor="role">Role</label>
            <input
              type="text"
              className="sm:w-3/4 w-4/4   bg-violet bg-opacity-10 p-1 rounded-lg"
              placeholder="Frontend Developer"
              required
            />
            <label htmlFor="resume">Resume</label>
            <input
              type="text"
              className="sm:w-3/4 w-4/4   bg-violet bg-opacity-10 p-1 rounded-lg"
              placeholder="Resume Link"
            />
            <p>or</p>

            <input type="file" />
            <button className="bg-violet text-white w-2/5 block m-auto p-2 rounded-lg drop-shadow-xl mt-4 ">
              Apply
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default JobApplyForm;
