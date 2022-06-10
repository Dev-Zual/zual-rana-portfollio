import React from 'react';
import ChoseCard from '../components/ChoseCard';

const ChoseMe = () => {
  return (
    <div className="w-11/12 mx-auto mt-16">
      <h1 className="lg:text-7xl text-3xl font-bold mb-16 text-white">
        WHY CHOOSE ME
      </h1>

      <div className=" mt-10 mb-16">
        <ChoseCard />
      </div>
    </div>
  );
};

export default ChoseMe;
