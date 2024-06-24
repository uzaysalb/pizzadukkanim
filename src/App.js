import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { ProductData, ProductDataTwo } from './components/Products/data';
import Feature from "./components/Feature";
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Favorinizi Secin'
      data={ProductData}/>
      <Feature/>
      <Products heading='Mükemmel Ve Hizli Lezzetler' data={ProductDataTwo}></Products>
      <Footer/>
    </Router>
  );
}

export default App;
