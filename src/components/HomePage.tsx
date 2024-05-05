import React from 'react';
import backgroundImage from '../assets/IMG_0220.png'
import Carousel from './Carousel';

function HomePage() {
    return (
        <div className="container mt-[93px]">
            {/* Imagen de fondo */}
            <div className='w-screen h-[1200px] bg-cover bg-center' style={{backgroundImage: `url(${backgroundImage})`}}></div>
            <Carousel/>
        </div>
    );
}

export default HomePage;