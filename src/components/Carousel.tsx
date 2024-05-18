import React from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";

// Images
import shirtImage from "../assets/white-shirt-floor-4-3.jpg";
import shirtImage2 from "../assets/foto web remera.jpeg";

import greyHoodie from "../assets/hoodie-grey.jpg";
import greyHoodieImage2 from "../assets/foto buzo girs.jpeg";

import whiteHoodie from "../assets/hoodie-white.jpg";
import whiteHoodieImage2 from "../assets/fotos web buzo blanco.jpeg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  return (
    <div className="flex flex-col gap-[21px] items-center justify-center mt-6">
      <h1 className="text-2 xl mx-6">DESTACADOS</h1>

      <div className="flex items-center flex-col gap-[16px] mt-4 mb-8">
        <div className="hm-6 flex flex-col lg:flex-row gap-[32px] justify-center">
        <Link to="/products/1" className="group relative w-[300px] h-[300px]">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
              src={shirtImage}
              alt="Boxy Hoodie"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              src={shirtImage2}
              alt="Boxy Hoodie"
            />
            <div className="absolute bg-white top-2 right-2 h-6 w-[54px] font-bold text-xs flex items-center justify-center">
              NEW IN
            </div>
          </Link>
          <Link to="/products/2" className="group relative w-[300px] h-[300px]">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
              src={greyHoodie}
              alt="Boxy Hoodie"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              src={greyHoodieImage2}
              alt="Boxy Hoodie"
            />
            <div className="absolute bg-white top-2 right-2 h-6 w-[54px] font-bold text-xs flex items-center justify-center">
              NEW IN
            </div>
          </Link>
          <Link to="/products/3" className="group relative w-[300px] h-[300px]">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
              src={whiteHoodie}
              alt="Boxy Hoodie"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              src={whiteHoodieImage2}
              alt="Boxy Hoodie"
            />
            <div className="absolute bg-white top-2 right-2 h-6 w-[54px] font-bold text-xs flex items-center justify-center">
              NEW IN
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
