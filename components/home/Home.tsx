'use client';
import React from 'react';
import Header from '@/components/header/Header';
import foto from '../../public/assets/IMG_6649.jpg';
import Image from 'next/image';
import Typewriter from '@/components/Typewriter';
import { Sidebar } from '@/components/sidebar/Sidebar';
import Reveal from '../Reveal';

const Home = () => {
  return (
    <div className="bg-fondo w-full h-full px-3 pt-3 text-white z-10">
      <Header />
      <div className="flex flex-row w-full h-screen z-10">
        <div className="w-1/2 h-[100%] bg-gradient-to-r from-fondo to-negro flex flex-row justify-center items-center z-10">
          <Reveal>
            <div className="flex flex-col ml-40 justify-center items-start text-start w-full text-3xl">
              <h1 className="font-semibold">SOY LUCAS GLAVE</h1>
              <div className="flex flex-row justify-center items-center gap-2 font-bold">
                <p>DESARROLLADOR</p>
                <div className="flex text-start" style={{ color: 'rgb(255 129 0)' }}>
                  <Typewriter />
                </div>
              </div>
              <p className="font-extralight text-base mt-6 pr-60">
                Soy desarrollador Full Stack, especializado en el Frontend. Cuento con 3 años de
                estudios en Sistemas Electrónicos Industriales Inteligentes, 4 cursos en CoderHouse
                enfocados en el Frontend, un Bootcamp Full Stack en Plataforma 5 y actualmente
                cursando Diplomatura UX/UI en la Universidad Tecnologica Nacional.
              </p>
            </div>
          </Reveal>
          <Sidebar />
        </div>
        <div className="w-1/2 h-[100%] bg-black flex flex-col justify-center items-center z-10">
          <Image src={foto} alt="foto" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;
