import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./../Movies/ViewMovie.css"

function ViewMovie() {
    const [movie,setMovie]=useState({})
    const param = useParams()
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=a642b234a88b2fc4a5efdf425ca2b711`)
        .then((movie)=>setMovie(movie.data))
        .catch((err)=>console.log(err))

    },[])
  return (
    <>
    <div className="p-4 p-md-5 mb-4 mt-0 rounded bg-image text-light d-flex">
    <div className="col-md-6 px-0">
      <h1 className="display-4 fst-italic">{movie.title}</h1>
      <p className="lead my-3">{movie.overview}</p>
    </div>
    <div className='col-md-6' style={{width:"100vw",height:"500px",
     backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`, backgroundSize: 'contain',
     backgroundPosition:'top',backgroundRepeat  : 'no-repeat'}}>
        
    </div>
  </div>
    </>
    
  )
}

export default ViewMovie