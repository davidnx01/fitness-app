import React from 'react';
import "./avatar.css";

const Avatar = () => {
  return (
    <>
        <div className='avatar_icon'>
            <img 
                src="/public/avatar1.jpg" 
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
        <div className='avatar_icon'>
            <img 
                src="/public/avatar2.jpg" 
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
        <div className='avatar_icon'>
            <img 
                src="/public/avatar3.jpg"  
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
        <div className='avatar_icon'>
            <img 
                src="/public/avatar4.webp"  
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
        <div className='avatar_icon'>
            <img 
                src="/public/avatar5.jpg"  
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
    </>


    
  )
}

export default Avatar