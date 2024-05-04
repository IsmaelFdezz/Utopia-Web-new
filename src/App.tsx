import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Router>
      <div className="App flex flex-col">
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path="/products/:productId" element={<ProductPage/>}></Route>
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
