import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-repeat -z-10">
      <div className="absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 bg-black" />
      <video
        autoPlay
        muted
        loop
        className="absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 opacity-20 bg-cover"
      >
        <source src="/assets/VideoBackground.mp4" type="video/mp4" />
        {/* Reemplaza 'tuVideo.mp4' con la ruta de tu video */}
        Tu navegador no admite el elemento de video.
      </video>
    </div>
  );
};

export default VideoBackground;
