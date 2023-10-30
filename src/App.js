import { FoodContextProvider } from "./contexts";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Foods from "./components/Foods/Foods";
import Thanks from "./components/Thanks/Thanks";
import Footer from "./components/Footer/Footer";
import { Cart } from "./components/Cart";

export const App = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <FoodContextProvider>
        <Foods />
        <Thanks />
        <Footer />
        <Cart />
      </FoodContextProvider>
    </div>
  );
};
