"use client";
import React from "react";
import Reveal from "../Reveal";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="h-screen w-full bg-fondo text-white flex flex-col items-center justify-start p-20 relative">
      <Reveal>
        <div className="flex w-full relative items-center z-10">
          <h2 className="font-bold text-3xl">CONTACTO</h2>
          <div className="w-full h-1 bg-white" />
          <motion.div
            className={`w-1/3 absolute bottom-0`}
            style={{ backgroundColor: "rgb(255 129 0)", height: 1 }}
            animate={{
              left: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </Reveal>
      <div className="w-5/6 h-5/6 p-24 flex items-center justify-center">
        <form className="relative overflow-hidden flex items-center flex-col border border-naranja justify-around w-full h-full shadow-adentro shadow-naranja rounded-lg bg-[rgb(17 14 14)] p-3 px-6">
          <div className="flex flex-col items-center gap-8 justify-evenly h-full w-1/2">
            <div className="w-full h-1/2 flex flex-col gap-3 justify-start">
              <div>
                {/* <p>Email</p> */}
                <input
                  placeholder="hola@gmail.com"
                  className="relative bg-transparent ring-0 outline-none border border-naranja z-30 text-white placeholder-white text-sm rounded-lg  placeholder-opacity-60 block w-full p-2.5 checked:bg-naranja"
                  type="text"
                />
              </div>
              <div>
                {/* <p>Mensaje</p> */}
                <textarea
                  placeholder="Buen día, soy de Buenos Aires, te quiero consultar por..."
                  className="relative bg-transparent ring-0 min-h-24 max-h-48 outline-none border border-naranja z-30 text-white placeholder-white text-sm rounded-lg placeholder-opacity-60 block w-full p-2.5 checked:bg-naranja"
                />
              </div>
            </div>
            <button
              className={`font-bold text-white w-24 h-12 hover:scale-105 duration-300 border border-naranja hover:bg-naranja rounded-lg hover:shadow-xl hover:shadow-orange-950`}
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
      <motion.div className="w-full absolute bottom-0">
        {" "}
        {/* top-[65%] */}
        <motion.h4
          className="text-[#131313] bottom-0 font-bold right-[100%] text-[12rem] w-max absolute"
          animate={{ x: "240%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          LUCAS GLAVE
        </motion.h4>
      </motion.div>
    </div>
  );
};

export default Contact;
