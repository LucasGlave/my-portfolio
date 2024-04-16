import { Rotate90DegreesCcw } from '@mui/icons-material';
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className="left-8 w-5 h-52 fixed mt-[-100] z-10">
      <ul className="list-none p-0 m-0">
        <li className="mt-2">
          <a href={''}>
            <FaTwitter className="w-4 h-4 fill-white" />
          </a>
        </li>
        <li className="mt-2">
          <a href={''}>
            <FaGithub />
          </a>
        </li>
        <li className="mt-2">
          <a href={''}>
            <FaInstagram />
          </a>
        </li>
        <li className="mt-2">
          <a href={''}>
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p style={{ transform: 'rotate(90deg)' }} className="flex top-4 text-white relative">
        Seguime
      </p>
    </div>
  );
};
