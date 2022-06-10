import React from 'react';

const Skill = () => {
  return (
    <div>
      <h1 className="lg:text-3xl sm:text-3xl text-3xl mb-16 text-white">
        My Special Skill Field Here.
      </h1>
      <div className="divider mt-[-47px]"></div>
      <div className="expart-area-right half-width">
        <h3>
          Web Design <span id="web">90%</span>
        </h3>
        <progress id="file" value="90" max="100">
          {' '}
          90%{' '}
        </progress>

        <h3>
          HTML 5 <span id="web2">95%</span>
        </h3>
        <progress id="file" value="95" max="100">
          {' '}
          95%{' '}
        </progress>

        <h3>
          CSS 3<span id="web6">90%</span>
        </h3>
        <progress id="file" value="90" max="100">
          {' '}
          90%{' '}
        </progress>

        <h3>
          BOOTSTRAP 5<span id="web3">80%</span>
        </h3>
        <progress id="file" value="80" max="100">
          {' '}
          80%{' '}
        </progress>

        <h3>
          REACT<span id="web4">95%</span>
        </h3>
        <progress id="file" value="95" max="100">
          {' '}
          95%{' '}
        </progress>

        <h3>
          JAVASCRIPT<span id="web5">85%</span>
        </h3>
        <progress id="file" value="85" max="100">
          {' '}
          85%{' '}
        </progress>

        <h3>
          UI/UX<span id="web7">90%</span>
        </h3>
        <progress id="file" value="90" max="100">
          {' '}
          90%{' '}
        </progress>
      </div>
    </div>
  );
};

export default Skill;
