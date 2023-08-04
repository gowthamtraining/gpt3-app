import React from 'react'
import "./feature.css"
import featureimage from "./Feature Image.png"
const Features = (props) => {
  return (
    <div className='features'>
      <img src={featureimage} alt="" />
      <div className="featurescontent">
        {props.data.para.map((item,index)=>{
            if(index === 0){
                return(<>
                    <p>{item}</p>
                    <h2>{props.data.title}</h2>
                    </>
                )
            }
            else{
                return(
                    <p>{item}</p>
                )
            }
        })}
      </div>
    </div>
  )
}

export default Features
