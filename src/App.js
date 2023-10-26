import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Foods from './components/Foods/Foods';
import Thanks from './components/Thanks/Thanks';
import Footer from './components/Footer/Footer';
import Bag from './components/Buttons/Bag';
import Cart from './components/Cart/Cart';

function App() {
  
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Foods/>
      <Thanks/>
      <Footer/>
      <Cart/>
    </div>
  );
}

export default App;
