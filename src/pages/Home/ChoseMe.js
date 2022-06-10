import React from 'react';
import ChoseCard from '../components/ChoseCard';

const ChoseMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <ChoseCard />
      <ChoseCard />
      <ChoseCard />
      <ChoseCard />
    </div>
  );
};

export default ChoseMe;
