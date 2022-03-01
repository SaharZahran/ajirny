import React, {useEffect, useState} from 'react'
import './userprofile.css'
import userimage from './man-avata.jpg'
function UserProfile() {

    const [user, setUser] = useState("")

    useEffect (() => {
        
        if(JSON.parse(localStorage.getItem("current-user"))){
            setUser(()=>JSON.parse(localStorage.getItem("current-user")))
        } 

        
    }, [] ) 
  return (

    
       <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <div className="topic"><img src={userimage} alt="our_team" className='user-image'/></div>
        </div>
        
      </div>
      <div className="right-side"  >
      <div className="topic-text user-header"> <h2> User info </h2> </div>
            <div className='right-bar'>
            <ul>
                <li> Name: </li>
                <li> Email: </li>
            </ul>

            <ul className='second-ul '>
                <li> {user.name} </li>
                <li> {user.email} </li>
            </ul>
            </div>
            
        {/* <div className="input-box">
            <div className='text-span'>Name: aaaaaaaaaaaaa</div>
        </div>
        <hr/>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" name="email"  />
        </div>
        <hr/>
        <div className="input-box message-box">
          <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message" name="message"  ></textarea>
        </div> */}
        <hr/>
    </div>
    </div>
</div>
   
  )
}

export default UserProfile