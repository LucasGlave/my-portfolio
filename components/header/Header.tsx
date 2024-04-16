import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div className="top-0 fixed left-0 w-full flex flex-row bg-transparent justify-between items-center text-white z-50">
      <div className="bg-fondo w-24 flex items-center py-3 justify-center">
        <h2 className="font-bold">GLAVE</h2>
      </div>
      <div className="bg-fondo w-24 flex items-center py-3 justify-center">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
