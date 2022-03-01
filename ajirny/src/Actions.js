import { useEffect, useState } from "react";

export const Actions = () => {
  let [places, setPlaces] = useState([]);

    //userLength is for showing the Data Loading message.
  let [palceLength, setPlaceLength] = useState(null);

  useEffect(() => {
    fetch("http://localhost/php/places.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setPlaces(data.places.reverse());
          setPlaceLength(true);
        } else {
         setPlaceLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
    });
}, []);
return {
    places,
  
  };
}