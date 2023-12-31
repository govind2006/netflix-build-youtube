import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import "./Nav.css";

function Nav() {
  const [show, handleShow]=useState(false);
  const navigate = useNavigate()

  const transitionNavBar=()=>{
    if(window.scrollY>100){
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  };
  
useEffect(()=>{
window.addEventListener("scroll",transitionNavBar);
return()=>window.removeEventListener("scroll",transitionNavBar);
},[]);

  return (
    <div className={`nav ${show  && "nav__black"}`}>
        <div className="nav__contents">
            <img 
            onClick={()=>navigate("/")}
            className="nav__logo" 
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                alt='' />
            <img 
            onClick={()=>navigate("/profile")}
            className="nav__avatar"
                src='data:image/png;base64,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'
                alt='' />
        </div>
    </div>
  );
}

export default Nav;
