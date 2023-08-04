import React, { useState } from 'react'
import "./navbar.css"
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
const Navbar = (props) => {
  const [clicked,setclicked] = useState(false)
  return (
    <nav>
        <h1 className={clicked? "nav1s":"nav1"}>
          <Link to ="/">{props.Data.headerTitle}</Link>
          </h1>
        <div className="navelements" id={clicked? "navelements":"navelement"}>
          {props.Data.menuList.map((item,index)=>{
            return(
              <li key={`menu-${index}`}>
              <Link to ={index===0?"/header":index===1?"/whatsisgpt3":index ===2?"/feature":index ===3?"/features":"/blog"}>{item}</Link></li>
            )
          })}
        </div>
        <div className="sign" id={clicked? "signs":"sign"}>
            <p>{props.Data.signin}</p>
            <button>{props.Data.signup}</button>
        </div>
        <button className={clicked?"humbergers":"humberger"} onClick={()=>setclicked(!clicked)}>
          <i className={clicked ? "fas fa-times":"fas fa-bars"}></i>
        </button>
    </nav>  
  )
}

export default Navbar
