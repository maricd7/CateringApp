import { FoodContextProvider } from "../contexts";
import "../App.css";
import Hero from "../components/Hero/Hero";
import About from "../components/About/AboutContainer";
import Foods from "../components/Foods/Foods";
import Thanks from "../components/Thanks/Thanks";
import Footer from "../components/Footer/Footer";
import { Cart } from "../components/Cart";
import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Newsletter } from "../components/Newsletter";
import { TopProduct } from "../components/TopProduct";

export const Home = () => {
  return (
    <div className="App">
      <Hero />
      <FoodContextProvider>
      <TopProduct/>
        <Foods />
        {/* <About /> */}
        <Newsletter/>
        <Thanks />
        <Footer />
        <Cart />
      </FoodContextProvider>
 
    </div>
  );
};