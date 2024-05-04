import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"

import products from '../data/products.json';
import shirtImage from '../assets/white-shirt.jpg';
import hoodieImage from '../assets/modelo-hombre.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carrousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      return (
        <div className="container mx-auto mt-6 overflow-x-hidden">
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id} className="w-100%">
                        <Link to={`/products/${product.id}`}>
                            <img src={product.image === 'white-shirt.jpg' ? shirtImage : hoodieImage} alt={product.name} className="mx-auto" />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
      )
}

export default Carrousel