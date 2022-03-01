import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";
import './Category.css'
const Category = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])


   const subCat = (id,name)=>{
      localStorage.setItem("subCategoryId", id);
      localStorage.setItem("subCategoryName", name);
    }
  
    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get('http://localhost/ajirny-full/php/categories.php');
          setData(response);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }
  
      fetchData();
    }, []);



  return (

  <div>
    <h2 className='category-head-h5'>Categories</h2>
    <div className="grid-wrapper">

    {loading && <div>Loading</div>}
    {!loading && (
    
      <>
        {data.map(category => (<>

        
        <div className="box zone">
            <Link to="/singleCat" className='cat-link'
            onClick={(id, name) =>
            subCat(category.id, category.name)
            }
            >
            <h5 className='cat-text'>{category.name}</h5>
            <img src={category.image} alt={category.name}/>
            </Link>
        </div>
        

        </>))}
      </>
    )}

    </div>
    <Outlet/>
  </div>


  )
}


export default Category;

