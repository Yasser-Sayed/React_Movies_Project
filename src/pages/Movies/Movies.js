import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from '../../component/Card/Card';

function Movies() {

    const [movieData, setmovieData ] = useState([])
    useEffect (()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a642b234a88b2fc4a5efdf425ca2b711")
        .then((data)=>setmovieData(data.data.results))
        .catch((err)=>console.log(err))
    },[])
  return (
    <div className='d-flex flex-wrap justify-content-between'>
    {movieData.map((singleMovie)=>{
        return(
          <Card  key={singleMovie.id} to={`view/${singleMovie.id}`} name={singleMovie.title} desc={singleMovie.overview} 
          img={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}/>
          
        )
    })}
    </div>

    
  )
}

export default Movies