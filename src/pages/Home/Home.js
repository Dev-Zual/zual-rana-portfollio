import React from 'react';
import About from './About';
import Banner from './Banner';

import ChoseMe from './ChoseMe';
import Counter from './Counter';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <ChoseMe />
      <Counter />
      <Services />
    </div>
  );
};

export default Home;
