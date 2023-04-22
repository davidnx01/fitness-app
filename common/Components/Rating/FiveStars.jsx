import React from 'react'
import "./rating.css";
import { AiFillStar } from "react-icons/ai";

const FiveStars = () => {
  return (
    <div className='rating_stars'>
      <AiFillStar color='#FFEE11' />
      <AiFillStar color='#FFEE11' />
      <AiFillStar color='#FFEE11' />
      <AiFillStar color='#FFEE11' />
      <AiFillStar color='#FFEE11' />
    </div>
  )
}

export default FiveStars