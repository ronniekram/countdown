import React from 'react';
import Countdown from './Countdown';

const App = () => {
  return (
    <div id="title" className="font-red-hat text-white text-center sm:w-1/3 w-11/12 mx-auto mt-32">
      <div>
        WE'RE LAUNCHING SOON
      </div>

        <Countdown />

    </div>
  );
};

export default App;