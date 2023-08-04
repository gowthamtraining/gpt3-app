import React from 'react'
import "./footer.css"
const Footer = (props) => {
  return (
    <div className='Footer'>
        <h1 className='h33'>{props.data.title}</h1>
        <button>{props.data.buttontext}</button>
        <div className="footertable">
            <div>
                <h2>{props.data.tabletittle}</h2>
                <p>{props.data.tablepara}</p>
            </div>
            <div className='footert2'>
            {props.data.tableitem.map((item)=>{
                return(
                    <div className='footert21'>
                    {item.map((items,indexs)=>{
                        return(
                            <li><a href="#" className={indexs===0?"footer21a":"footer21a2"}>{items}</a></li>
                        )
                        })}
                    </div>
                )    
            })}
            </div>
        </div>
        <p className='footerlast'>{props.data.footerlast}</p>
      
    </div>
  )
}

export default Footer
