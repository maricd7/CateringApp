import { FoodContextProvider } from "./contexts";
import "./App.css";
import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
import Foods from "./components/Foods/Foods";
import Thanks from "./components/Thanks/Thanks";
import Footer from "./components/Footer/Footer";
import { Cart } from "./components/Cart";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Checkout } from "./pages/checkout";
import { About } from "./pages/about";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
