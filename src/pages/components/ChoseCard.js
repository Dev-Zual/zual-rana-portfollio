import React from 'react';
import icon3 from '../../assets/images/illustrators/illustrator-3.png';
import icon1 from '../../assets/images/illustrators/illustrator-1.png';
import icon2 from '../../assets/images/illustrators/illustrator-2.png';

const ChoseCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
      <div class="card bg-neutral shadow-xl">
        <figure>
          <img className="w-44 mt-8" src={icon3} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">PROFRESSIONAL AND DEDICATE TEAM</h2>
          <p>Building architectures with modern technology.</p>
        </div>
      </div>
      <div class="card bg-neutral shadow-xl">
        <figure>
          <img className="w-44 mt-8" src={icon1} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">UNIQUE DESIGN</h2>
          <p>Bring the beautifully for your house. Just enjoy!.</p>
        </div>
      </div>
      <div class="card bg-neutral shadow-xl">
        <figure>
          <img className="w-44 mt-8" src={icon1} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">AFFORDABLE AND FLEXIABLE</h2>
          <p>Bring nature in your house. Health is important</p>
        </div>
      </div>
      <div class="card bg-neutral shadow-xl">
        <figure>
          <img className="w-44 mt-8" src={icon2} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">24/7 SUPPORT</h2>
          <p>Consulting solutions and make plan to renovation</p>
        </div>
      </div>
    </div>
  );
};

export default ChoseCard;
