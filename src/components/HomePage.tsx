import React from 'react';
import backgroundImage from '../assets/modelos-less-exposition.jpg'
import Carousel from './Carousel';

function HomePage() {
    return (
        <div className="container mx-auto mt-[93px]">
            {/* Imagen de fondo */}
            <div className='w-full h-[800px] bg-cover bg-center' style={{backgroundImage: `url(${backgroundImage})`}}></div>
            <Carousel/>
        </div>
    );
}

export default HomePage;