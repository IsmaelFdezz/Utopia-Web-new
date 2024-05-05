import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProductPage, { ProductToAdd } from "./components/ProductPage";
import Footer from "./components/Footer";

export type Product = {
  id: string;
  name: string;
  price: number;
  sizes: string[];
  description: string[];
};

function App() {
  const [cartItems, setCartItems] =  useState<ProductToAdd[]>([]);

  const addToCart = (productToAdd: ProductToAdd) => {
    setCartItems([...cartItems, productToAdd]);
  };

  const handleRemoveProduct = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  console.log(cartItems);

  return (
    <main className="flex flex-col height-screen justify-between h-screen">
      <Router>
        <Header cartItems={cartItems} handleRemoveProduct={handleRemoveProduct}/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductPage addToCart={addToCart}/>}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
