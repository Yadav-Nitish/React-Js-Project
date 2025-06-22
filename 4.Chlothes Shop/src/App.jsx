import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Shoppage from './Pages/Shoppage';
import Blogpage from './Pages/Blogpage';
import Contactpage from './Pages/Contactpage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import ProductDetail from './Components/ProductDetail/ProductDetail';
const App = () => {
  return (
    <>  
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/> } />
          <Route path="/about" element={<Aboutpage/>} />
          <Route path="/shop" element={ <Shoppage/> } />
          <Route path="/id" element={ <ProductDetail/> } />
          <Route path="/blog" element={ <Blogpage/> } />
          <Route path="/contact" element={ <Contactpage/> } />
          <Route path="/cart" element={ <Cart/> } />

        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App