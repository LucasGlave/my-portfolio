import React from 'react';
import Home from '@/components/home/Home';
import Portfolio from '@/components/portfolio/Portfolio';
import Contact from '@/components/contact/Contact';
import VideoBackground from '@/components/portfolio/VideoBackground';

const Page = () => {
  return (
    <>
      {/* <VideoBackground /> */}
      <Home />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Page;
