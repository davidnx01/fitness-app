import React from 'react';
import "./avatar.css";

const Avatar = () => {
  return (
    <>
        <div className='avatar_icon'>
            <img 
                src="/src/assets/avatar1.jpg" 
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
        <div className='avatar_icon'>
            <img 
                src="/src/assets/avatar2.jpg" 
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
        <div className='avatar_icon'>
            <img 
                src="/src/assets/avatar3.jpg" 
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
        <div className='avatar_icon'>
            <img 
                src="/src/assets/avatar6.jpg" 
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
        <div className='avatar_icon'>
            <img 
                src="/src/assets/avatar5.jpg" 
                alt="Client Profile Picture" 
                title="Client Profile Picture"
            />
        </div>
    </>


    
  )
}

export default Avatar