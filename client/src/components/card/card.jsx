import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

export default function Card({id, flagImage, name, continents, population, Activities}) {  
  return (
    <div className="card-container">
      <Link className="link" to={`detail/${id}`}>      
      <img src={flagImage} alt="" />    
      <h4>{name}</h4>
      <p>{continents}</p>          
      </Link>
    </div>
  );
}
