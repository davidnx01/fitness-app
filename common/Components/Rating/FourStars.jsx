import React from 'react'
import "./rating.css";
import { BsStar } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const FourStars = () => {
  return (
    <div className='rating_stars'>
      <AiFillStar color='#FFEE11' />
      <AiFillStar color='#FFEE11' />
      <AiFillStar color='#FFEE11' />
      <AiFillStar color='#FFEE11' />
      <BsStar color='#FFEE11' />
    </div>
  )
}

export default FourStars