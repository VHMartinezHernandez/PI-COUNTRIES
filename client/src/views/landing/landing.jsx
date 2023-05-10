import React from "react";
import "./landing.css";
import {useHistory } from "react-router-dom";

export default function Landing() {
  const history = useHistory();
  
  const showModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  };

  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    history.push('/home');
  };

  return (
    <div>
      <h2 className="landing-title">Welcome</h2>
      <button className="button-lan" onClick={showModal}>Login</button>    
      <img src="client\src\views\gettyimages-537287305-612x612.jpg" alt=""/>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2 className="h2-lan">Welcome to my SAP</h2>
          <h4 className="h4-lan">Here you can search for country information and add activities</h4>
          <p className="p-lan">This is my final  Henry's bookcamp project</p>          
          <p className="p-lan">By Victor Martinez</p>          
        </div>
      </div>
    </div>
  );
}
