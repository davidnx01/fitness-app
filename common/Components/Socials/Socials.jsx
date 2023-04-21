import React from 'react'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "./socials.css";

const Socials = () => {
  return (
    <>
        <a href="www.facebook.com" className='icon_circle'>
            <FaFacebook color='black' size={20} />
        </a>

        <a href="www.twitter.com" className='icon_circle'>
            <FaTwitter color='black' size={20} />
        </a>

        <a href="www.instagram.com" className='icon_circle'>
            <RiInstagramFill color='black' size={22} />
        </a>
    </>
  )
}

export default Socials