import React from 'react';
import backgroundImage from '../assets/IMG_0220.png'
import backgroundImage2 from '../assets/banner-pc.png'
import Carousel from './Carousel';

function HomePage() {
    return (
        <div className="container mt-[93px]">
            {/* Imagen de fondo */}
            <div className='w-screen h-screen bg-cover bg-center flex lg:hidden' style={{backgroundImage: `url(${backgroundImage})`}}></div>
            <div className='w-screen h-screen bg-cover bg-center hidden lg:flex' style={{backgroundImage: `url(${backgroundImage2})`}}></div>
            <Carousel/>
        </div>
    );
}

export default HomePage;