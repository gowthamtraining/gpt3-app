import React from 'react'
import group from "./Group 81.png"
const PeopleList = (props) => {
  return (
    <div className="signup">
            <img src={group} alt="" />
            <p>{props.peopleText}</p>
    </div>
  )
}

export default PeopleList
