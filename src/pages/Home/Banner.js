import React from 'react';
import myimg from '../../assets/images/person/my-photo3.png';
import resume from '../../assets/Zual_Rana_Resume.pdf';
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full flex justify-end">
            <img className="lg:w-[70%] lg:mr-8 sm:w[30%] " src={myimg} alt="" />
          </div>
          <div className="w-full">
            <h1 className="text-5xl text-primary font-bold">Hello! I'm</h1>
            <h1 className="text-8xl text-white font-bold mt-4">Zual Rana</h1>
            <p className="py-6">Jr. Full Stack Web Developer</p>
            <a href={resume} className="btn btn-primary text-white">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
