import React from 'react'
import { testimonialContent } from '../../Constants/TestimonialText'
import "./testimonialContent.css";
import FiveStars from '../Rating/FiveStars';

const TestimonialContent = ( props ) => {

  const { name, position, testimonial, testimonial2 } = testimonialContent[props.toggleValue];

  return (
    <>
      <div className="testimonial-content_wrap">
        <div className="testimonial-content__user-info">
          <h5>{name}</h5>
          <p>{position}</p>
          <FiveStars />
        </div>

        <div className="testimonial-content__user-review">
          <p>{testimonial}</p>
          <p>{testimonial2}</p>
        </div>
      </div>
    </>
    
  )
}

export default TestimonialContent