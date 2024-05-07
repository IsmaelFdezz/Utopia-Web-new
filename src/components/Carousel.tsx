import React from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";

import products from "../data/products.json";

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
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <h1 className="text-2xl mx-6 lg:hidden">Destacados</h1>
      <div className="embla m-6 lg:w-[500px] lg:hidden" ref={emblaRef}>
        
        <div className="embla__container">
          <div className="embla__slide ">
            <Link to={"/products/1"} className="relative">
              <img src={shirtImage} alt="absolute Boxy t-shirt #1" />
              <div className="absolute bg-white top-2 right-2 h-6 w-[54px] font-bold text-xs flex items-center justify-center">
                NEW IN
              </div>
            </Link>
          </div>
          <div className="embla__slide">
            <Link to={"/products/2"} className="relative">
              <img src={greyHoodie} alt="Boxy Hoodie" />
              <div className="absolute bg-white top-2 right-2 h-6 w-[54px] font-bold text-xs flex items-center justify-center">
                NEW IN
              </div>
            </Link>
          </div>
          <div className="embla__slide">
            <Link to={"/products/3"} className="relative">
              <img src={whiteHoodie} alt="Boxy Hoodie" />
              <div className="absolute bg-white top-2 right-2 h-6 w-[54px] font-bold text-xs flex items-center justify-center">
                NEW IN
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center flex-col gap-[16px] mt-4 mb-8">
        <h1 className="text-2xl mb-4">Destacados</h1>
        <div className="hm-6 flex gap-[32px] justify-center">
          <Link to={"/products/1"} className="group relative">
            <img
              className="w-[250px] group-hover:hidden"
              src={shirtImage}
              alt="Boxy t-shirt #1"
            />
            <img
              className="w-[250px] hidden group-hover:block"
              src={shirtImage2}
              alt="Boxy t-shirt #1"
            />
            <div className="absolute bg-white top-2 right-2 h-6 w-[54px] font-bold text-xs flex items-center justify-center">
              NEW IN
            </div>
          </Link>
          <Link to={"/products/2"} className="group relative">
            <img
              className="w-[250px] group-hover:hidden"
              src={greyHoodie}
              alt="Boxy Hoodie"
            />
            <img
              className="w-[250px] hidden group-hover:block"
              src={greyHoodieImage2}
              alt="Boxy Hoodie"
            />
            <div className="absolute bg-white top-2 right-2 h-6 w-[54px] font-bold text-xs flex items-center justify-center">
              NEW IN
            </div>
          </Link>
          <Link to={"/products/3"} className="group relative">
            <img
              className="w-[250px] group-hover:hidden"
              src={whiteHoodie}
              alt="Boxy Hoodie"
            />
            <img
              className="w-[250px] hidden group-hover:block"
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
