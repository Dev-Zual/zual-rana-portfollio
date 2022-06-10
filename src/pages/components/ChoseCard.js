import React from 'react';
import icon3 from '../../assets/images/illustrators/illustrator-3.png';
import icon1 from '../../assets/images/illustrators/illustrator-1.png';
import icon2 from '../../assets/images/illustrators/illustrator-2.png';

const ChoseCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:grid-cols-4 gap-4 mb-10">
      <div className="card bg-base-200 shadow-xl">
        <figure>
          <img className="w-44 mt-8" src={icon3} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">PROFRESSIONAL AND DEDICATE TEAM</h2>
          <p>Building architectures with modern technology.</p>
        </div>
      </div>
      <div className="card bg-base-200 shadow-xl">
        <figure>
          <img className="w-44 mt-8" src={icon1} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">UNIQUE DESIGN</h2>
          <p>Bring the beautifully for your house. Just enjoy!.</p>
        </div>
      </div>
      <div className="card bg-base-200 shadow-xl">
        <figure>
          <img className="w-44 mt-8" src={icon1} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">AFFORDABLE AND FLEXIABLE</h2>
          <p>Bring nature in your house. Health is important</p>
        </div>
      </div>
      <div className="card bg-base-200 shadow-xl">
        <figure>
          <img className="w-44 mt-8" src={icon2} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">24/7 SUPPORT</h2>
          <p>Consulting solutions and make plan to renovation</p>
        </div>
      </div>
    </div>
  );
};

export default ChoseCard;
