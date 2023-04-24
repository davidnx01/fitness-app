import React from 'react';
import "./avatar.css";

const Avatar = () => {
  return (
    <>
        <div className='avatar_icon'>
            <img 
                src="/avatar1.jpg" 
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
        <div className='avatar_icon'>
            <img 
                src="/avatar2.jpg" 
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
        <div className='avatar_icon'>
            <img 
                src="/avatar3.jpg"  
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
        <div className='avatar_icon'>
            <img 
                src="/avatar4.webp"  
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
        <div className='avatar_icon'>
            <img 
                src="/avatar5.jpg"  
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
    </>


    
  )
}

export default Avatar