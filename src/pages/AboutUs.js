import React, { Fragment, useState, useEffect } from "react";
import NavHeader from "../component/NavHeader";
import BackgroundGradient from "../assets/background/landing_gradient.png";
import Footer from "../component/Footer";
import AboutUsVector from "../assets/aboutus/aboutus_vector.png";
import AboutWeOffer from "../assets/aboutus/aboutusImage.png";
import SliderImage from "../component/SliderImage";
import MyPhoto from "../assets/aboutus/myphoto.png";
import Carousel from "react-elastic-carousel";

const AboutUs = () => {
  const [viewPort, setViewPort] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  useEffect(() => {
    setViewPort("");
  }, []);

  const [showMark, setShowMark] = useState(false);

  const profiles = [
    { id: 1, src: MyPhoto, name: "Rajbir Singh" },
    { id: 2, src: MyPhoto, name: "Rajbir Singh" },
    { id: 3, src: MyPhoto, name: "Rajbir Singh" },
    { id: 4, src: MyPhoto, name: "Rajbir Singh" },
    { id: 5, src: MyPhoto, name: "Rajbir Singh" },
    { id: 6, src: MyPhoto, name: "Rajbir Singh" },
    { id: 7, src: MyPhoto, name: "Rajbir Singh" },
    { id: 8, src: MyPhoto, name: "Rajbir Singh" }
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  return (
    <Fragment>
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

        <main>
          {/* Section 1 */}
          <section
            className="px-8 lg:px-36 h-fit flex flex-col-reverse lg:flex-row items-center justify-center lg:py-20"
            // style={{ height: `calc(100vh - 120px)` }}
          >
            <div className="first-letter:flex flex-col items-start w-full lg:w-3/5 space-y-6 z-10">
              <h1 className="text-violet font-bold text-4xl lg:text-5xl">
                Our
                <span className="text-slate"> Mission</span>
              </h1>
              <h3 className="text-ghost text-lg w-full lg:w-3/5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                nulla illum repudiandae autem quis, consectetur nam non velit
                dolores placeat vero tempora laborum alias qui consequuntur
                libero officiis maiores blanditiis.
              </h3>
            </div>
            <img
              src={AboutUsVector}
              alt=""
              className=" md:w-3/5 lg:w-2/5 lg:h-auto mb-6 lg:mb-0"
            />
          </section>
          {/* Section 2 */}
          <div className="bg-gradient-to-b from-white to-cyan">
            <section className="lg:items-center  px-6 lg:px-36  py-10">
              <h1 className="text-violet text-center font-bold text-4xl lg:text-5xl mb-10">
                Who are <span className="text-slate"> We ?</span>
              </h1>
              <div className="flex flex-col   lg:flex-row">
                <div className=" m-auto lg:m-0">
                  <img src={AboutWeOffer} alt="" className=" lg:w-3/4  " />
                  <h3 className="text-xl font-semibold -mt-5 pl-10">
                    Connect with mentors
                  </h3>
                  <p className="md:w-3/4 pl-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className=" lg:mt-10 m-auto lg:m-0">
                  <img src={AboutWeOffer} alt="" className=" lg:w-3/4  " />
                  <h3 className="text-xl font-semibold -mt-5 pl-10">
                    Connect with mentors
                  </h3>
                  <p className="md:w-3/4 pl-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className=" lg:mt-20 m-auto lg:m-0">
                  <img src={AboutWeOffer} alt="" className=" lg:w-3/4  " />
                  <h3 className="text-xl font-semibold -mt-5 pl-10">
                    Connect with mentors
                  </h3>
                  <p className="md:w-3/4 pl-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                {/* <div className="lg:mt-10  m-auto lg:m-0">
                <img src={AboutWeOffer} alt="" className=" md:w-3/4  " />
                <h3 className="text-xl font-semibold -mt-5 pl-10">
                  Connect with mentors
                </h3>
                <p className="md:w-3/4 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div> */}
                {/* <div className="mt-20  m-auto lg:m-0">
                <img src={AboutWeOffer} alt="" className=" md:w-3/4  " />
                <h3 className="text-xl font-semibold -mt-5 pl-10">
                  Connect with mentors
                </h3>
                <p className="md:w-3/4 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div> */}
              </div>
            </section>

            {/* Section 3 */}

            <section className="lg:items-center  px-6 lg:px-36  py-10">
              <h1 className="text-violet text-center font-bold text-4xl lg:text-5xl mb-20">
                Meet the <span className="text-slate"> team</span>
              </h1>
              <div className="">
                <div className="flex flex-row space-x-20 ">
                  <Carousel breakPoints={breakPoints}>
                    {profiles.map((item) => (
                      <SliderImage
                        key={item.id}
                        src={item.src}
                        name={item.name}
                      />
                    ))}
                  </Carousel>
                </div>
              </div>
            </section>

            {/* Section 4 */}

            <section className="py-12">
              <div className=" h-full flex  flex-wrap  py-12 w-4/5 xl:w-3/5  m-auto lg:rounded-2xl bg-violet ">
                <div className="flex flex-col  space-y-2 lg:w-3/5 text-center m-auto lg:m-0 ">
                  <h3 className="text-white text-lg font-semibold">
                    Subscribe for our newsletter
                  </h3>
                  <p className="text-white text-center  space-y-4  text-sm">
                    Lorem ipsum dolor sit, hed sit on it.
                  </p>
                </div>
                <div className="flex flex-col m-auto lg:m-0  ">
                  <input
                    type="email"
                    className="h-12 mt-4 p-4  rounded-lg md:w-72 xl:w-80"
                    placeholder="type your email here"
                  />
                  <button
                    onClick={() => {
                      setShowMark(true);
                    }}
                    className=" text-white lg:absolute lg:ml-48 xl:ml-56  rounded-md mt-6 p-1 bg-ghost lg:bg-violet "
                  >
                    {showMark ? "✔" : "Subscribe"}
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Main Footer */}
          <Footer />
        </main>
      </div>
    </Fragment>
  );
};

export default AboutUs;
