'use client';
import React, { useEffect, useState } from 'react';
import Reveal from '../Reveal';
import { proyectsContent } from './proyectsContent';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import fondo from '../../public/assets/Diseño sin título.jpg';

const Portfolio = () => {
  const [hovered, setHovered] = useState(false);
  const handleHoverEnter = () => {
    setHovered(true);
  };
  const handleHoverLeave = () => {
    setHovered(false);
  };
  return (
    <div className="h-full bg-gradient-to-l from-fondo to-negro w-full text-white flex flex-col items-center justify-center">
      <div className="my-20 gap-20 flex items-center flex-col">
        <div
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-100 opacity-20"
          style={{ backgroundImage: `url('/assets/imageBackground.jpg')` }}
        />
        <Reveal>
          <div className="flex w-full items-center">
            <h2 className="font-bold text-3xl">
              MI <span className="text-naranja">PORTFOLIO</span>
            </h2>
          </div>
        </Reveal>
        {proyectsContent.map((data, i) => (
          <div className="gap-10 flex flex-col items-center" key={i}>
            <Reveal>
              <div
                style={{ width: 900, height: 600 }}
                className="rounded-lg flex flex-col gap-3"
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                <h3 className="font-bold text-3xl">
                  {data.content1}
                  <span className="mr-2">{''}</span>
                  <span className={`${data.color}`}>{data.content2}</span>
                  <hr className={`w-full border-white`} />
                </h3>
                <div className="w-full h-full pb-12 px-4">
                  <motion.img
                    alt={`portfolio${i}`}
                    src={data.img}
                    style={{
                      opacity: hovered ? 0.5 : 1,
                      filter: hovered ? 'blur(4px)' : 'blur(0)',
                      zIndex: hovered ? '0' : 20,
                    }}
                    className={`w-full object-cover h-full rounded-lg transition-all duration-500 relative z-20 opacity-50 ${data.shadow}`}
                  />
                </div>

                <p className="absolute z-10 m-auto p-24">{data.description}</p>
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
                <a href={''}>
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
