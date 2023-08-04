import React from 'react'
import "./feature.css"
const Feature = (props) => {
  return (
    <div className='featurebox'>
      <div className='featurecontent'>
        <h2>{props.data.featureheadiing}</h2>
        <p>{props.data.featurep}</p>
      </div>
      <div className='featuretable'>
        {props.data.table.map((item)=>{
          return(
          <div className='table1'>
          <div className="tablecontent">
          <hr/>
          <h3>{item.title}</h3>
          </div>
          <p>{item.para}</p>
          </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default Feature
