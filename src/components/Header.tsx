import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/web-negra.png";
import cartLogo from "../assets/carrito.png";

import ShoppingCart from "./ShoppingCart";
import { DataContext } from "../App";

interface HeaderProps {
  handleRemoveProduct: (index: number) => void;
}

function Header(props: HeaderProps) {
  const { handleRemoveProduct } = props;

  const { cartItems } = useContext(DataContext);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartIconClick = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="header-bar bg-[#004080] text-white p-2 flex justify-center transition-opacity duration-500">
        <p className="text-xs">ENVIOS GRATIS EN ROSARIO</p>
      </div>
      <nav className="mx-auto flex flex-row items-center justify-between p-2">
        <Link to="/" className="ml-auto">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
        <div
          className="relative ml-auto w-[24px] mr-[16px] cursor-pointer"
          onClick={handleCartIconClick}
        >
          <img src={cartLogo} alt="carrito" />
          {cartItems.length > 0 && (
            <div className="absolute top-3 right-3 text-white text-xs bg-red-600 rounded-full w-5 h-5 flex items-center justify-center !shadow-lg">
              {cartItems.length}
            </div>
          )}
        </div>
        {isCartOpen && (
          <ShoppingCart
            handleRemoveProduct={handleRemoveProduct}
            onClose={handleCloseCart}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;
