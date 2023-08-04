import React from 'react'
import "./cta.css"
const Cta = (props) => {
  return (
    <div className='cta'>
      <div className='ctacontent'>
        {props.data.para.map((item,index)=><p className={index===0?"ctap1":"ctap2"}>{item}</p>)}
      </div>
      <button>{props.data.buttontext}</button>
    </div>
  )
}

export default Cta
