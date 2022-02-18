import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ category, jobtype }) => {
  return (
    <>
      <Link to="/career/join-us" target="_blank">
        <div
          className="bg-white border border-light-slate drop-shadow-xl rounded-2xl block m-auto w-4/5 sm:m-12  p-6 space-y-4 mb-10 sm:mb-0  "
          onClick={() => {}}
        >
          <h2 className="text-2xl">{category}</h2>
          <hr />
          <p className="text-sm">{jobtype}</p>
          <button className="text-violet ">See Jobs</button>
        </div>
      </Link>
    </>
  );
};

export default JobCard;
