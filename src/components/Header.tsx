import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/web-negra.png";

import ShoppingCart from "./ShoppingCart";
import { ProductToAdd } from "./ProductPage";

interface HeaderProps {
  cartItems: ProductToAdd[];
  handleRemoveProduct: (index: number) => void;
}

function Header(props: HeaderProps) {
  const { cartItems, handleRemoveProduct } = props; 

  const [showEnviosGratis, setShowEnviosGratis] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowEnviosGratis((prevShowEnviosGratis) => !prevShowEnviosGratis);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCartIconClick = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="header-bar bg-[#004080] text-white p-2 flex justify-center transition-opacity duration-500">
        <p
          className={`text-sm}`}
        >
          ENVIOS GRATIS EN ROSARIO
        </p>
      </div>
      <nav className="mx-auto flex flex-row items-center justify-between p-2">
        <Link to="/" className="ml-auto">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
        <div
          className="ml-auto mr-[16px] cursor-pointer"
          onClick={handleCartIconClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 1024 1024"
            className="icon"
          >
            <path
              fill="#000000"
              d="M432 928a48 48 0 110-96 48 48 0 010 96zm320 0a48 48 0 110-96 48 48 0 010 96zM96 128a32 32 0 010-64h160a32 32 0 0131.36 25.728L320.64 256H928a32 32 0 0131.296 38.72l-96 448A32 32 0 01832 768H384a32 32 0 01-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
            />
          </svg>
        </div>
        {isCartOpen && (
          <ShoppingCart
            handleRemoveProduct={handleRemoveProduct}
            cartItems={cartItems}
            onClose={handleCloseCart}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;
