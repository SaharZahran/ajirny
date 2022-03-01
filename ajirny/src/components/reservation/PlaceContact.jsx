import React, { useState } from 'react';
import './style.css';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import swal from 'sweetalert';


function Reservation() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [dateError, setDateError] = useState(false);
  const location = useLocation()
  const navigate = useNavigate();
  const place = location.state;
  const orders = JSON.parse(localStorage.getItem('PlaceContact'));
  const today = new Date()
  const currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  console.log(currentDate);

  
  const saveOrder = (e) => {
    e.preventDefault();
    const order = {
      email: email,
      phone: phone,
      date: date,
      time: time,
      place: place.place,

    }
    if (orders == null) {
      localStorage.setItem('PlaceContact', JSON.stringify([order]))
      swal({
        title: "Registered Successfully!",
        text: "Welcome!",
        icon: "success",
        button:"ok"
      });
    }
    else {
      const filterorder = orders.filter(order => order.place === place.place);
      console.log(filterorder);
      if (filterorder.length > 0) {
        filterorder.map(contact => ((contact.date === date && contact.time === time) ? showError() : localStorage.setItem('PlaceContact', JSON.stringify([...orders, order]))
      ))
      swal({
        title: "Registered Successfully!",
        text: "Welcome!",
        icon: "success",
        button:"ok"
      });
      }
    }
  }

  const showError = () =>{
    setDateError(() => true) 
  }
  return (

    <div className="form-popup placecontact__form" id="myForm">
      <form action="/action_page.php" className="form-container" onSubmit={saveOrder}>
        <h1>Contact Place</h1>

        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" value={((JSON.parse(localStorage.getItem('current-user'))).email) ? (JSON.parse(localStorage.getItem('current-user'))).email : ""} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="psw"><b>Phone</b></label>
        <input type="text" placeholder="Enter Phone" name="psw" onChange={(e) => setPhone(e.target.value)} required />


        <label htmlFor="psw"><b>Time</b></label>
        <input type="time" step="3600" placeholder="Enter Time" name="psw" onChange={(e) => setTime(e.target.value)} required />
        <label htmlFor="psw"><b>Date</b></label>
        <input type="date" placeholder="Enter Date" name="psw" onChange={(e) => setDate(e.target.value)} min={currentDate} required />

        {dateError && <p className='contact-error'>This time is not avilable, choose another one!</p>}
        <button type="submit" className="btn">Contact</button>
        {/* <Link to= '/single'>Send</Link> */}
      </form>
    </div>

  )
}

export default Reservation