import React from "react";

const Curriculum = () => {
  return (
    <div className="h-24 bg-fondo text-white text-base flex flex-row items-center justify-center gap-2">
      <button
        className={`font-bold text-naranja px-4 h-12 hover:scale-105 duration-300 border border-naranja hover:text-white hover:bg-naranja rounded-lg hover:shadow-lg hover:shadow-orange-700`}
      >
        CURRICULUM
      </button>
      <button
        className={`font-bold text-white px-4 h-12 hover:scale-105 duration-300 border border-white hover:bg-white hover:text-naranja rounded-lg hover:shadow-lg hover:shadow-[#b3b3b3]`}
      >
        GITHUB
      </button>
    </div>
  );
};

export default Curriculum;
