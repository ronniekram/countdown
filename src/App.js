import React from 'react';
import Countdown from './Countdown';

const App = () => {
  return (
    <div id="title" className="font-red-hat text-white text-center sm:w-1/2 w-11/12 mx-auto my-auto">
      <div>
        WE'RE LAUNCHING SOON
      </div>

        <Countdown />

    </div>
  );
};

export default App;