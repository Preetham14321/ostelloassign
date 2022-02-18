import React, { useState } from "react";
import BackgroundGradient from "../assets/background/landing_gradient.png";
import Footer from "../component/Footer";
import NavHeader from "../component/NavHeader";
import JobCard from "../component/JobCard";

const Career = () => {
  const [viewPort, setViewPort] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const jobs = [
    {
      id: "1",
      category: "Technology",
      jobtype: "Frontend Developer | UI/UX Designere"
    },
    {
      id: "2",
      category: "Technology",
      jobtype: "Frontend Developer | UI/UX Designere"
    },
    {
      id: "3",
      category: "Technology",
      jobtype: "Frontend Developer | UI/UX Designere"
    },
    {
      id: "4",
      category: "Technology",
      jobtype: "Frontend Developer | UI/UX Designere"
    },
    {
      id: "5",
      category: "Technology",
      jobtype: "Frontend Developer | UI/UX Designere"
    },
    {
      id: "6",
      category: "Technology",
      jobtype: "Frontend Developer | UI/UX Designere"
    }
  ];

  return (
    <>
      <div
        className="font-dm-sans w-screen min-h-screen"
        style={
          viewPort.width > 768
            ? {
                backgroundImage: `url(${BackgroundGradient})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100vw 80vh",
                backgroundPosition: "50% 0%"
              }
            : {}
        }
      >
        <NavHeader />

        {/* Section 1 */}
        <section
          className="px-4 lg:px-36 h-fit flex  items-center justify-center py-20"
          // style={{ height: `calc(100vh - 120px)` }}
        >
          <div className="text-center space-y-4">
            <h1 className="text-violet text-4xl lg:text-5xl font-semibold ">
              Explore Careers
            </h1>
            <p className=" w-screen">
              To work with Ostello, you don't need heavy degrees or
              experience... The only thing you <br /> should bring in is your
              fun self and a little dedication! Come,hop in on the team!
            </p>
          </div>
        </section>

        {/* Section 2 */}

        <section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3  xl:ml-10 mb-32 ">
            {jobs.map((item) => (
              <JobCard
                key={item.id}
                category={item.category}
                jobtype={item.jobtype}
              />
            ))}
          </div>
        </section>

        {/* Main Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Career;
