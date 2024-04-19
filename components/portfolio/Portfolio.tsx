"use client";
import React, { useEffect, useState } from "react";
import Reveal from "../Reveal";
import { proyectsContent } from "./proyectsContent";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import fondo from "../../public/assets/Diseño sin título.jpg";

const Portfolio = () => {
  const [hovered, setHovered] = useState(false);
  const handleHoverEnter = () => {
    setHovered(true);
  };
  const handleHoverLeave = () => {
    setHovered(false);
  };
  return (
    <div className="h-full bg-fondo w-full text-white flex flex-col items-center justify-center">
      <div className="my-20 gap-20 flex items-center flex-col">
        <Reveal>
          <div className="flex w-full relative items-center z-10">
            <h2 className="font-bold text-3xl">EXPERIENCIA</h2>
            <div className="w-full h-1 bg-white" />
            <motion.div
              className={`w-1/3 absolute bottom-0`}
              style={{ backgroundColor: "rgb(255 129 0)", height: 1 }}
              animate={{
                // top: ["100%", "0%", "0%", "100%", "100%"],
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
        {proyectsContent.map((data, i) => (
          <div
            className="gap-3 relative flex flex-col p-10 overflow-hidden items-center rounded-lg bg-[#16161649] backdrop-blur-sm z-10"
            key={i}
          >
            <motion.div
              className={`absolute w-[20rem] ${data.bg} h-[20rem] top-[75%] left-0 blur-[10rem] z-0 rounded-full`}
              animate={{
                top: ["100%", "0%", "0%", "100%", "100%"],
                left: ["100%", "100%", "0%", "0%", "100%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className={`absolute w-[20rem] ${data.bg} h-[20rem] top-[75%] left-0 blur-[10rem] z-0 rounded-full`}
              animate={{
                top: ["0%", "100%", "100%", "0%", "0%"],
                left: ["0%", "0%", "100%", "100%", "0%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <Reveal>
              <div
                style={{ width: 900, height: 600 }}
                className="rounded-lg flex flex-col items-center gap-3"
                onMouseLeave={handleHoverLeave}
              >
                <h3 className="font-bold text-3xl">
                  {data.content1}
                  <span className="mr-2">{""}</span>
                  <span className={`${data.color}`}>{data.content2}</span>
                </h3>
                <div className="w-full h-full py-12 px-4">
                  <motion.img
                    alt={`portfolio${i}`}
                    src={data.img}
                    style={{
                      opacity: hovered ? 0.5 : 1,
                      filter: hovered ? "blur(4px)" : "blur(0)",
                      zIndex: hovered ? "0" : 20,
                    }}
                    onMouseEnter={handleHoverEnter}
                    onMouseLeave={handleHoverLeave}
                    className={`w-full object-cover h-full rounded-lg transition-all duration-500 relative z-20 opacity-50`}
                  />
                </div>

                <p
                  onMouseEnter={handleHoverEnter}
                  className="absolute z-10 m-auto p-24"
                >
                  {data.description}
                </p>
                {/* top-36 left-6 */}
              </div>
            </Reveal>
            <div className="w-full justify-center flex flex-row gap-2">
              <button
                className={`font-bold w-24 h-12 hover:scale-105 duration-300 border ${data.border} ${data.bgH} rounded-lg ${data.shadowH}`}
              >
                VISITAR
              </button>
              <button
                className={`font-bold flex justify-center items-center w-12 h-12 border ${data.bgH} ${data.border} ${data.shadowH} rounded-lg hover:brightness-150 hover:scale-105 duration-300`}
              >
                <a href={""}>
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
