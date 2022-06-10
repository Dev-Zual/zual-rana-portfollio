import React from 'react';

const Services = () => {
  return (
    <div className=" w-11/12 mx-auto mt-20 mb-20">
      <h1 className="lg:text-5xl sm:text-3xl text-3xl font-bold mb-16 text-white">
        Service Provide For My Clients.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div class="card bg-base-200 shadow-xl">
          <figure>
            <img className="w-44 mt-8" src="" alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-3xl uppercase">ui/ux design</h2>
            <ul className="mt-8 uppercase">
              <li>landing pages</li>
              <li>user flow</li>
              <li>prototyping</li>
              <li>mobile app design</li>
            </ul>
          </div>
        </div>
        <div class="card bg-base-200 shadow-xl">
          <figure>
            <img className="w-44 mt-8" src="" alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-3xl uppercase">ui/ux design</h2>
            <ul className="mt-8 uppercase">
              <li>html</li>
              <li>javascript</li>
              <li>react js</li>
              <li>next js</li>
            </ul>
          </div>
        </div>
        <div class="card bg-base-200 shadow-xl">
          <figure>
            <img className="w-44 mt-8" src="" alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-3xl uppercase">illustration</h2>
            <ul className="mt-8 uppercase">
              <li>Character desing</li>
              <li>icon set</li>
              <li>illustration gide</li>
              <li>motion graphic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
