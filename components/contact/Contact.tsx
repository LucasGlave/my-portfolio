'use client';
import React from 'react';
import Reveal from '../Reveal';

const Contact = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-fondo to-negro text-white flex flex-col items-center justify-start p-20 relative">
      <Reveal>
        <div className="flex w-full items-center">
          <h2 className="font-bold text-3xl">
            MI <span className="text-naranja">CONTACTO</span>
          </h2>
        </div>
      </Reveal>
      <div className="w-5/6 h-5/6 p-24 flex items-center justify-center">
        <form className="text-neutral-800 relative overflow-hidden flex flex-col justify-around w-full h-full shadow-adentro shadow-black rounded-lg bg-fondo p-3 px-6">
          <div>
            {/* className="before:absolute before:w-96 before:h-96  before:bg-orange-900 before:-z-10 before:rounded-full before:blur-2xl before:-top-24 before:right-96 z-10 after:absolute after:w-48 after:h-48 after:bg-naranja after:opacity-30 after:-z-10 after:rounded-full after:blur-xl after:-top-12 after:-right-6"> */}
            <span className="font-extrabold text-2xl text-naranja">Get more updates...</span>
            <p className="text-neutral-700">Sign up for our newsletter </p>
          </div>
          <div className="flex gap-1">
            <div className="relative rounded-lg w-64 overflow-hidden ">
              <input
                placeholder="Mail..."
                className="relative bg-transparent ring-0 outline-none border border-white z-30 text-white placeholder-white text-sm rounded-lg focus:ring-gray-400 placeholder-opacity-60 focus:border-white block w-full p-2.5 checked:bg-naranja"
                type="text"
              />
              <input
                placeholder="Mail..."
                className="relative bg-transparent ring-0 outline-none border border-white z-30 text-white placeholder-white text-sm rounded-lg focus:ring-gray-400 placeholder-opacity-60 focus:border-white block w-full p-2.5 checked:bg-naranja"
                type="text"
              />
              <input
                placeholder="Mail..."
                className="relative bg-transparent ring-0 outline-none border border-white z-30 text-white placeholder-white text-sm rounded-lg focus:ring-gray-400 placeholder-opacity-60 focus:border-white block w-full p-2.5 checked:bg-naranja"
                type="text"
              />
              <input
                placeholder="Mail..."
                className="relative bg-transparent ring-0 outline-none border border-white z-30 text-white placeholder-white text-sm rounded-lg focus:ring-gray-400 placeholder-opacity-60 focus:border-white block w-full p-2.5 checked:bg-naranja"
                type="text"
              />
              <input
                placeholder="Mail..."
                className="relative bg-transparent ring-0 outline-none border border-white z-30 text-white placeholder-white text-sm rounded-lg focus:ring-gray-400 placeholder-opacity-60 focus:border-white block w-full p-2.5 checked:bg-naranja"
                type="text"
              />
            </div>
            <button className="bg-naranja text-neutral-50 p-2 rounded-lg hover:bg-orange-500">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
