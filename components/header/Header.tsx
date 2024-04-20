import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <div className="top-0 fixed left-0 w-full flex flex-row bg-transparent justify-between items-center text-white z-50">
      <div className="bg-fondo w-24 flex items-center py-3 justify-center">
        <h2 className="font-bold">GLAVE</h2>
      </div>
      <div className="relative w-1/4 flex items-center justify-end">
        <div className="bg-fondo w-24 py-3 z-10 flex justify-center items-center">
          <button onClick={toggleNavbar}>
            <MenuIcon />
          </button>
        </div>
        <AnimatePresence>
          {navbarOpen && (
            <motion.div
              className="absolute w-full flex flex-row justify-start gap-5 items-center rounded-bl-md bg-[#1010106b] backdrop-blur-lg h-full px-3 z-0"
              initial={{ x: 350 }}
              animate={{ x: 0 }}
              exit={{ x: 350 }}
              transition={{ duration: 1, easings: "linear" }}
            >
              <button>INICIO</button>
              <button>EXPERIENCIA</button>
              <button>CONTACTO</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
