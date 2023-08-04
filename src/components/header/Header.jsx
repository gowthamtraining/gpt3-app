import React,{useEffect, useState} from 'react'
import "./header.css"
import header  from "./header.png"
import PeopleList from './PeopleList'
import Textinput from "./Textinput"
const Header = (props) => {
  const [value,setvalue] = useState("1234")

  useEffect(()=>{
    console.log("useeffect called")
    return ()=>{
      console.log("useeffect destroy")
    }
  },[value])
  console.log(value)
  return (
    <header> 
    <div className="headercontent">
        <h2>{props.Data.headercontent_H}</h2>
        <p className='p1'>{props.Data.headercontent_p}</p>
        <Textinput data = {props.Data.buttonText} value = {value} setvalue = {setvalue} removeitem = {props.removeitems}/>
        <PeopleList peopleText = {props.Data.peopleText} value = {value}/>
    </div>
    <img src={header}alt="Header-Illustration" border="0" className='headerimg'></img>
   </header>
  )
}
export default Header