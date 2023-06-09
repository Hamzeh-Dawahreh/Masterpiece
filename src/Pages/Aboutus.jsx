import React from "react";

const AboutUs = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4      ">
        <div className="flex flex-col lg:flex-row justify-between gap-8  aboutHero  ">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Welcome to <span className="company-name"> IdeaCraft</span>, the
              leading platform for connecting expert companies with clients in
              need of high-quality feasibility studies. Our platform makes it
              easy for you to find the right feasibility study for your industry
              or category, whether you're in real estate, manufacturing or
              technology.
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="/src/Assets/Images/Welcome-section.png"
              alt="image"
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12 aboutUS ">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8 ">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md ">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden w-40 "
                  src="../src/assets/images/Dawahreh.png"
                  alt="Alexa featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Dawahreh
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="../src/assets/images/JohnDoe.png"
                  alt="Olivia featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  John Doe{" "}
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="../src/assets/images/Natalia.png"
                  alt="Liam featued Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Natalia
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="../src/assets/images/Rami.png"
                  alt="Elijah featured img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Rami
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default AboutUs;
