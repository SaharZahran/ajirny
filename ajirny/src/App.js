import About from './components/about/About';
import Contact from './components/contact/Contact';
import SinglePage from './components/singlepage/SinglePage';
import Landing from './components/home/Landing';
import { Nav } from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import PlaceContact from './components/reservation/PlaceContact';
import Reservationday from './components/reservation/Resrvationday';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';
import Category from './components/category/Category';
import SingleCat from './components/single-category/SingleCat';
import UserProfile from './components/userprofile/UserProfile';


function App() {
  return (
    <div className="App">
    
    <Router>
    <Nav/>
      
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/categories" element={<Category/>}/>
        <Route path="/singleCat" element={<SingleCat/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/userprofile" element={<UserProfile/>}/>   
        <Route path="/single" element={<SinglePage/>}/>
        <Route path="/reservation" element={<PlaceContact/>}/>
        <Route path="/reservationday" element={<Reservationday/>}/>


      </Routes>
    
      <Footer/>
      
    
    </Router>
    </div>
  );
}

export default App;
