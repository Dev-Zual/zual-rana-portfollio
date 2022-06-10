import React from 'react';
import ChoseCard from '../components/ChoseCard';

const ChoseMe = () => {
  return (
    <div className="w-11/12 mx-auto mt-16">
      <h1 className="text-7xl font-bold mb-16">WHY CHOOSE ME</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        <ChoseCard />
        <ChoseCard />
        <ChoseCard />
        <ChoseCard />
      </div>
    </div>
  );
};

export default ChoseMe;
