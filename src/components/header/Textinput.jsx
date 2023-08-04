import React, { useState } from 'react'
import "./header.css"
const Textinput = (props) => {
    function changevalue(e){
        props.setvalue(e.target.value)
    }
  return (
      <div className="form">
            <input type="text" name="" id="" placeholder='Your Email Address'  onChange={changevalue}/>
            <button onClick={props.removeitem}>{props.data}</button>
        </div>
  )
}

export default Textinput
