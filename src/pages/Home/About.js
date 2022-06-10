import React from 'react';
import Skill from './Skill';
import './About.css';

const About = () => {
  return (
    <div className="w-11/12 mx-auto mt-16 mb-24">
      <h1 className="lg:text-5xl sm:text-3xl text-3xl font-bold mb-16 text-white">
        About Me
      </h1>
      <div className="divider w-60 mt-[-40px]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-12 mt-14">
        <div>
          <h1 className="text-3xl text-bold text-white ">
            I'm A Jr. Full Stack Web Developer
          </h1>
          <div className="divider "></div>
          <p className="mt-10 p-10">
            Hi! I'm Zual Rana. I'm a junior full stack web Developer. I always
            want to make a website good-looking. Always looking for new
            technology.
            <br />
            <br />
            I'm a MERN Stack Developer. I started learning to react a few months
            ago and I love using react on website because React is to be fast,
            scalable, and simple. Over the last 1 years, i have been working as
            a junior web developer. My ultimate goal is to become a sr.
            full-stack web developer who can handle front-end and back-end
            smoothly.
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
