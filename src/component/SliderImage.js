import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SliderImage = ({ src, alt, name }) => {
  return (
    <div className="flex flex-col w-3/5">
      <img src={src} alt={`${name}` || ""} className="" width="250" />
      <h3 className="text-xl text-violet mt-2  font-semibold  text-center">
        {name}
      </h3>
      <div className="flex space-x-2 block m-auto">
        <Link to="/">
          <FaLinkedinIn />
        </Link>
        <Link to="/">
          <FaTwitter />
        </Link>
      </div>
    </div>
  );
};

export default SliderImage;
