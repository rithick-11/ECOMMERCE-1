import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Category_shop from './pages/Category_shop/Category_shop';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import LogInAndSignUp from './pages/LogInAndSingUp/LogInAndSignUp'
import News_letter from './components/News_letter/News_letter';
import Footer from './components/Footer/Footer';
import men_banner from  './components/Assets/banner_mens.png'
import women_banner from  './components/Assets/banner_women.png'
import kids_banner from  './components/Assets/banner_kids.png'




function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<Category_shop category="men" banner={men_banner}/>}/>
          <Route path='/womens' element={<Category_shop category="women" banner={women_banner}/>}/>
          <Route path='/kids' element={<Category_shop category="kid" banner={kids_banner}/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':id' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LogInAndSignUp/>}/>
        </Routes>
        <News_letter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
