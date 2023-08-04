import React from 'react'
import {Dropbox,Google,Shopify,Slack} from "./index"
import "./campanylogo.css"
const Companylogo = (props) => {
  return (
    <div className='companylogo'>
      <img src={Google} alt="" srcset="" />
      <img src={Slack} alt="" />
      <img src={Dropbox} alt="" srcset="" />
      <img src={Shopify} alt="" />
    </div>
  )
}

export default Companylogo
