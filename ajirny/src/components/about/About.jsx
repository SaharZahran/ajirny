import React from 'react'
import './about.css'
import img1 from './nermeen.png'
import img2 from './haneen.jpeg'
import img3 from './sahar.jpeg'
import img4 from './ahmad-removebg-preview.png'

function About() {
  return (
    <div class="wrapper">
    <h1 className='about-head'>Our Team</h1>
    <div class="our_team">
        <div class="team_member">
          <div class="member_img">
             <img src={img2} alt="our_team" className='imga'/>
            <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Haneen Al-ayasrah</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
        </div>
        <div class="team_member">
           <div class="member_img">
             <img src={img4} alt="our_team" className='imga'/>
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Ahmad Kilani</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maiores temporibus, architecto optio asperiores mollitia pariatur error, quaerat voluptatibus minima eos quo nostrum, maxime necessitatibus.</p>
      </div>
        <div class="team_member">
           <div class="member_img">
             <img src={img3} alt="our_team" className='imga'/>
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Sahar Zahran</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
      </div>
        <div class="team_member">
           <div class="member_img">
             <img src={img1} alt="our_team" className='imga'/>
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3> Nermeen Alahmad </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
      </div>  
    </div>
</div>	
  )
}

export default About