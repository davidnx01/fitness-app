import React from 'react'
import "./testimonialUser.css"

const TestimonialUser = ( props ) => {
  return (
    <>
    <div className={props.className}>
        <div className="testimonial_wrap">
          <div className="testimonial_user-avatar">
            <img src={props.photo} alt="User Photo" />
          </div>

          <div className="testimonial_user-info">
            <h5>{props.name}</h5>
            <p>{props.position}</p>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default TestimonialUser