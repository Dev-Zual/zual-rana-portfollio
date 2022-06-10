import React from 'react';
import Skill from './Skill';
import './About.css';

const About = () => {
  return (
    <div className="w-11/12 mx-auto mt-16 mb-24">
      <h1 className="lg:text-5xl sm:text-3xl text-3xl font-bold mb-16 text-white">
        About Me
      </h1>
      <div class="divider w-60 mt-[-40px]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
        <div>
          <h1 className="text-3xl text-bold text-white ">
            I'm A Jr. Full Stack Web Developer
          </h1>
          <p className="mt-10">
            Hi! I'm Zual Rana. I'm a junior full stack web Developer. I always
            want to make a website good-looking. Always looking for new
            technology.
          </p>
        </div>
        <div>
          <Skill />
        </div>
      </div>
    </div>
  );
};

export default About;
