import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProductPage, { ProductToAdd } from "./components/ProductPage";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Finish from "./components/Payment";
import OrderRecieved from "./components/OrderRecieved";
import WhatsAppButton from "./components/WhatsAppButton";

export type Product = {
  id: string;
  name: string;
  price: number;
  sizes: string[];
  description: string[];
};

// Contextos
export const DataContext = React.createContext(null);

function App() {
  const [cartItems, setCartItems] = useState([]);

  const [userData, setUserData] = useState(null);

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
        <DataContext.Provider value={{cartItems, userData, setUserData}}>
          <Header handleRemoveProduct={handleRemoveProduct} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products/:productId"
              element={<ProductPage addToCart={addToCart} />}
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/payment" element={<Finish />} />
            <Route path="/checkout/order-recieved" element={<OrderRecieved />} />
          </Routes>
        <WhatsAppButton></WhatsAppButton>
        <Footer />
        </DataContext.Provider>
      </Router>
    </main>
  );
}

export default App;
