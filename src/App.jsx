import { useState } from 'react'
import {  Routes, Route,  useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './componets/login';
import Signup from './componets/signup';
import Navbar from './componets/navbar';
import Home from './componets/home';
import KissanApp from './componets/kisaanDashBoard';
import AboutPage from './componets/about';
import ContactPage from './componets/contact';
import Footer from './componets/footer';
import KissanSignup from './componets/kissanSignUp';
import BuyerSignup from './componets/buyerSignup';

function App() {
  const [loggedIn, setLoggedIn]= useState(true);
  const [ isHome, setIsHome]= useState(true);

  return (
    <>
    {loggedIn?<Navbar isHome={isHome}/>:null}
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/' element={<Home setIsHome={setIsHome}/>}/>
      <Route path='/dashboard' element={<KissanApp setIsHome={setIsHome}/>}/>
      <Route path='/about' element={<AboutPage setIsHome={setIsHome}/>}/>
      <Route path='/contact' element={<ContactPage setIsHome={setIsHome}/>}/>
      <Route path='/Kissanlogin' element={<Login setIsHome={setIsHome}/>}/>
      <Route path='/kissansignup' element={<KissanSignup setIsHome={setIsHome}/>}/>
      <Route path='/buyersignup' element={<BuyerSignup setIsHome={setIsHome}/>}/>
    </Routes> 
    <Footer/>
     </>
    
  )
}

export default App
