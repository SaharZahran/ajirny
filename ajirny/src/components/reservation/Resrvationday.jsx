import React, {useState} from 'react';
import './style.css';
import {useLocation} from 'react-router-dom';
import swal from 'sweetalert';

function Reservationday() {
const currentUser = JSON.parse(localStorage.getItem('current-user'));
const [email ,setEmail] = useState(()=>{ 
  if(currentUser){
  return currentUser.email;
  }else{
    return '';
  } 
 })
const [phone ,setPhone]  = useState("")
const [fromDate ,setFromDate] = useState("")
const [toDate ,setToDate] =useState("")
const [dateError, setDateError] = useState(false);

const location = useLocation()
const place =location.state;
const today = new Date()
const currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-';    
const days = [];
  const saveOrder =(e)=>{
      e.preventDefault();
      const order = {
        email : email,
        phone : phone,
        fromDate: fromDate,
        toDate: toDate,
        place:place.place,
    
      }

      const orders=JSON.parse(localStorage.getItem('orders'));
      if (orders == null) {
        localStorage.setItem('orders', JSON.stringify([order]))
        swal({
          title: "Registered Successfully!",
          text: "Welcome!",
          icon: "success",
          button:"ok"
        });
      }
      else {
        const filterorder = orders.filter(order => order.place === place.place);
        if (filterorder.length > 0) {
          const num_of_days = (toDate.split('-')[(toDate.split('-')).length - 1]) - (fromDate.split('-')[(fromDate.split('-')).length - 1]) +1
          console.log('number of orders' + num_of_days);
          filterorder.forEach(element => {
            for(let i =0; i<num_of_days;i++){
              days.push(`${currentDate}${parseInt(element.fromDate.split('-')[(element.fromDate.split('-')).length - 1]) +i}`)
            }
            filterorder.map(() => ((!days.includes(fromDate) && !days.includes(toDate)) ? localStorage.setItem('orders', JSON.stringify([...orders, order])):showError() 
            ))
            swal({
              title: "Registered Successfully!",
              text: "Welcome!",
              icon: "success",
              button:"ok"
            });
          });
        }
      }
    setFromDate('');
    setToDate('');
    }
  const showError = () => {
    setDateError(() =>{
      return true;
    })
  }
  return (
    
    <div className="form-popup reservationDay__form" id="myForm">
      <form action="/action_page.php" className="form-container" onSubmit={saveOrder}>
        <h1>Book Place for days</h1>
    
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" value={email} required/>
    
        <label htmlFor="psw"><b>Phone</b></label>
        <input type="text" placeholder="Enter Phone" name="psw"  onChange={(e)=>setPhone(e.target.value)} required/>
        {/* from date */}
        <label htmlFor="psw"><b>From Date</b></label>
        <input type="date" placeholder="Enter Date" name="psw" onChange={(e) => setFromDate((e.target.value).replace(/-0+/g, '-'))} required/>
        {/* to date */} <br />
        <label htmlFor="psw"><b>To Date</b></label>
        <input type="date" placeholder="Enter Date" name="psw" onChange={(e) => setToDate((e.target.value).replace(/-0+/g, '-'))} required/>

        {dateError && <p className='contact-error'>This time is not avilable, choose another one!</p>}
        <button type="submit" className="btn reservationForm__btn">Book Now</button>
      </form>
    </div>
           
  )
}

export default Reservationday