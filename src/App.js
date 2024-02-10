import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Cart from './Cart/Cart';
// import Product from './Product/Product';
import About from './About/About';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Error from './Error/Error';
import BuyProduct from './BuyProduct/BuyProduct';
import Products from './Product/Products';
function App() {
  return (
   <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/buyproduct/:id' element={<BuyProduct/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
