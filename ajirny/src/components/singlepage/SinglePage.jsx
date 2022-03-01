//src/contact.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';
function SinglePage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [placeId, setPlaceId] = useState(localStorage.getItem("placeId"));


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (placeId !== 0) {
          const { data: response } = await axios.get(`http://localhost/ajirny-full/php/places.php?placeId=${placeId}`);
          setData(response[0]);
          console.log(response[0]);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

  return (<>{
    loading && <section className="restaurant1 top" id="restaurant">
      <div className="singlepage__container flex">
        <div className="left-single">
          <img src={data.place_image} alt="place for rent" className='place-img' />
        </div>
        <div className="right">
          <div className="singlename">
            <h3>Places Name : {data.place_name}</h3>
          </div>
          <div className="singledesc">
            <h3>Info about the place:</h3>
            <p>{data.description}
            </p>
          </div>
          <div className="singleprice">
            <h3>Place price : <span>{data.price} JOD / 1 Hours</span> </h3>
          </div>
          <div className="singlebutton">
            <button className="btn btn-primary" >
              {(JSON.parse(localStorage.getItem('current-user')) ? <Link className="singlepage__btn" to="/reservationday" state={{ place: data.name }}>Book For Days</Link> : <Link to='/login'>Book For Days</Link>)}
              </button>
            <button className="btn btn-primary"> 
              {(JSON.parse(localStorage.getItem('current-user')) ? <Link className="singlepage__btn" to="/reservation" state={{ place: data.name }}>Contact For Place</Link> : <Link to='/login'>Contact For Place</Link>)}
            </button>
          </div>
        </div>

      </div>
    </section>
  }

  </>
  )

}
export default SinglePage;
