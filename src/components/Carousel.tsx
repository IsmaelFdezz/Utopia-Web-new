import React from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";

import products from '../data/products.json';
import shirtImage from '../assets/white-shirt-floor-4-3.jpg';
import greyHoodie from '../assets/hoodie-grey.jpg';
import whiteHoodie from '../assets/hoodie-white.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
    const [emblaRef] = useEmblaCarousel({loop: true})

      return (
        <div className="embla m-6" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide ">
              <Link to={'/products/1'}>
                <img src={shirtImage} alt="Boxy t-shirt #1" />
              </Link>
            </div>
            <div className="embla__slide">
              <Link to={'/products/2'}>
                <img src={greyHoodie} alt="Boxy Hoodie" />
              </Link>
            </div>
            <div className="embla__slide">
              <Link to={'/products/3'}>
                <img src={whiteHoodie} alt="Boxy Hoodie" />
              </Link>
            </div>
          </div>
        </div>

      )
}

export default Carousel