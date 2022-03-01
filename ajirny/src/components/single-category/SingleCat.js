import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../category/Category.css";


const SingleCat = () => {
  const [loading, setLoading] = useState(true);
  const [catid, setCatId] = useState(0);
  const [places, setPlaces] = useState([]);

  const storePlace = (id) => {
    localStorage.setItem("placeId", id);
  }
  useEffect(() => {
    setCatId(localStorage.getItem("subCategoryId"))
    const fetchData = async () => {
      setLoading(true);
      try {

        if (catid !== 0) {
          const { data: response } = await axios.get(`http://localhost/ajirny-full/php/singleCat.php?catid=${catid}`);
          setPlaces(response);
          console.log(response);
        }
      } catch (error) {
        console.error(error.message);

      }
      setLoading(false);
    }

    fetchData();
  }, [catid]);



  return (

    <div>
      <h2 className='category-head-h5'> Categoriors </h2>
      <div className="grid-wrapper">

        {loading && <div>Loading</div>}
        {!loading && (

          <>
            {places.map(place => (<>
              
              <div className="box zone">
              <Link to='/single' className='cat-link' onClick={() => storePlace(place.place_id)}>
                {/* <h2 className='cat-text'>{places[0].name}</h2> */}
        
                    <h5 className='cat-text'>{place.place_name}</h5>
                    <img src={place.place_image} alt={place.name} />
                
              </Link>
              </div>
            </>))}
            
          </>
        )}
        
      </div>
      
    </div>


  )
}


export default SingleCat;

