import React from 'react'
import "./headings.css"

const Headings = ({ heading, description }) => {
  return (
    <>
      <div className="headings">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </>
  )
}

export default Headings