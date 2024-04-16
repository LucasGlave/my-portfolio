import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const Typewriter = () => {
  return (
    <TypewriterComponent
      options={{
        strings: ['FULL STACK.', 'UX/UI.', 'MOBILE.'],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
};

export default Typewriter;
