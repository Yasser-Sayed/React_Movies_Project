import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="card m-3 " style={{width: "22rem"}} >
            <img src={props.img} className="card-img-top " />
            <div className="card-body">
                <h5 className="card-title"><Link className='text-decoration-none text-warning' to={props.to}>{props.name}</Link> </h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className="btn btn-primary">Add to favorites</a>
            </div>
        </div>
  )
}

export default Card;