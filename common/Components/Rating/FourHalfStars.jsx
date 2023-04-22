import React from 'react'
import "./rating.css";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const FourHalfStars = () => {
  return (
    <div className='rating_stars'>
        <AiFillStar color='#FFEE11' />
        <AiFillStar color='#FFEE11' />
        <AiFillStar color='#FFEE11' />
        <AiFillStar color='#FFEE11' />
        <BsStarHalf color='#FFEE11' />
    </div>
  )
}

export default FourHalfStars