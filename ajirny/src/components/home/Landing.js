import React from 'react'
import { Partners } from '../partners/Partners';
import Testimonials from '../testimonials/Testimonials';
import "./Landing.css";
import Category from './Lcategory/Category';
import { Link } from 'react-router-dom';

const Landing = () => {

 
  return (
    <>
    <div class="main-background">
        <div class="main-text">
            <div className='landing__layout'>
            <h2>Perfection</h2>
            <h1>And you are <span>invited</span></h1>
            <div className='landing__buttons'>
              <button>
                {(JSON.parse(localStorage.getItem('current-user')) ? <Link to='/categories'>Book your place now!</Link> : <Link to='/login'>Book your place</Link>)}
                </button>
              <button>
                {(JSON.parse(localStorage.getItem('current-user')) ? <Link to='/contact'>Contact us for a place</Link> : <Link to='/login'>Contact us for a place</Link>)}
              </button>
            </div>
            </div>
        </div>
    </div>
    <Category/>
    <Testimonials/>
    <Partners/> 
    </>
  
  )
}


export default Landing;
