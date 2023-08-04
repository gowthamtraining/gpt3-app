import React from 'react'
import "./whatisgpt3.css"
import Navbar from '../navbar/Navbar'
const Whatisgpt3 = (props) => {
  return (
    <div className='box'>
      <div className="insidebox">
        <div className="title">
            <hr />
            <div className="contents">
                <h3>{props.Data.title}</h3>
                <p>{props.Data.titleP}</p>
            </div>
        </div>
        <div className="content">
            <h2>{props.Data.heading}</h2>
            <p>{props.Data.headingP}</p>
        </div>
        <div className="table">
            {props.Data.table.map((item)=>{
                return(
                <div className='t1'>
                <hr />
                <div className='tabaleContent'>
                <h2>{item.title}</h2>
                <p>{item.paragraph}</p>
                </div>
                </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Whatisgpt3
