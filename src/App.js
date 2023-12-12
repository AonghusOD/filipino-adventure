import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Tours from './pages/Tours';
import Cart from './pages/Cart';
import MainNavigation from "./components/layout/MainNavigation";
import Footer from "./components/layout/Footer";
import classes from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MainNavigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tours" element={<Tours/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;