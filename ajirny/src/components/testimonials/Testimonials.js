import React from 'react'
import "./Testimonials.css";
import { faker } from'@faker-js/faker';


const Testimonials = () => {
  return (
<div class="testimonial-slider">
  <ul class="slider">
    <li>
      
      <div class="testimonial-slider-content">
        <q className='test-q'>This is the first quote in your slider!</q>
        <div>
        <img className='test-img' src={faker.image.avatar()} alt="" />
        </div>
        <p class="source">- Paul C, TX</p>
      </div>
    </li>
    <li>
      <div class="testimonial-slider-content">
        <q className='test-q'>Here is the second one, this is awesome!</q>
        <div>
        <img className='test-img' src={faker.image.avatar()} alt="" />
        </div>
        <p class="source">- Ella M, TX</p>
      </div>
    </li>
    <li>
      <div class="testimonial-slider-content">
        <q className='test-q'>Next, the third quote - AMAZING!</q>
        <div>
        <img className='test-img' src={faker.image.avatar()} alt="" />
        </div>
        <p class="source">- Blaine B, TX</p>
      </div>
    </li>
    <li>
      <div class="testimonial-slider-content">
        <q className='test-q'>This is the last quote, I can't believe how well this worked!</q>
        <div>
        <img className='test-img' src={faker.image.avatar()} alt="" />
        </div>
        <p class="source">- Guillermo O, TX</p>
      </div>
    </li>
  </ul>
</div>

  )
}


export default Testimonials;
