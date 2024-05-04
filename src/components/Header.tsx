import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/web-negra.png';

function Header() {
    const [showEnviosGratis, setShowEnviosGratis] = useState(true);

    useEffect(() => {
        // Función para alternar entre los textos "ENVIOS GRATIS EN ROSARIO" y "15% OFF TRANSFERENCIA"
        const interval = setInterval(() => {
            setShowEnviosGratis(prevShowEnviosGratis => !prevShowEnviosGratis);
        }, 3000);

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, []);

    return (
        <header className="bg-white border-b-2 border-black fixed top-0 left-0 right-0 z-50">
            <div className="header-bar bg-blue-500 text-white p-2 flex justify-center transition-opacity duration-500">
                {/* Aplica una transición de opacidad para suavizar el cambio de texto */}
                <p className={`text-sm ${showEnviosGratis ? 'opacity-100' : 'opacity-0'} ${showEnviosGratis ? 'block' : 'hidden'}`}>
                    ENVIOS GRATIS EN ROSARIO
                </p>
                <p className={`text-sm ${showEnviosGratis ? 'opacity-0' : 'opacity-100'} ${showEnviosGratis ? 'hidden' : 'block'}`}>
                    15% OFF TRANSFERENCIA
                </p>
            </div>
            <nav className="mx-auto flex items-center justify-between p-2">
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-10 mr-2" />
                </Link>
            </nav>
        </header>
    );
}

export default Header;