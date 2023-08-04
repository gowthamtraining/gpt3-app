import React from 'react'
import "./blog.css"
import { img1,img2,img3,img4,img5 } from './index'
const Blog = (props) => {
  return (
    <div className='blogmain'>
      <h2 className='h2'>{props.data.blogmainh2}</h2>
    <div className='card01'>
      <div className='blogcard2'>
        <img src={img1} alt="" />
        <div className='blogcard2content'>
          <p>{props.data.blogcard2content.p1}</p>
          <h2>{props.data.blogcard2content.h2}</h2>
          <p className='blogp1'>{props.data.blogcard2content.p2}</p>
        </div>
      </div>
      <div className='blogcard1'>
        <div className='card11'>
        {props.data.blogcard1.map((item,index)=>{
          return(
          <div className='card11img'>
            <img src={index ===0?img2:img5} alt="" />
            <div className='card11content'>
              <p>{item.p1}</p>
              <h2>{item.h2}</h2>
              <p className='card11p1'>{item.p2}</p>
            </div>
          </div>
          )
        })}
        </div>
        <div className='card12'>
          {props.data.blogcard1.map((item,index)=>{
          return(
            <div className='card11img'>
            <img src = {index === 0 ?img3:img4} alt="" />
            <div className='card11content'>
              <p>{item.p1}</p>
              <h2>{item.h2}</h2>
              <p className='card11p1'>{item.p2}</p>
            </div>
          </div>
          )
        })}
        </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default Blog
