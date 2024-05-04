import React from 'react';
import backgroundImage from '../assets/modelos-less-exposition.jpg'
import Carrousel from './Carrousel';

function HomePage() {
    return (
        <div className="container mt-[93px]">
            {/* Imagen de fondo */}
            <div className='w-full h-screen bg-cover bg-center' style={{backgroundImage: `url(${backgroundImage})`}}></div>
            <Carrousel/>
        </div>
    );
}

export default HomePage;