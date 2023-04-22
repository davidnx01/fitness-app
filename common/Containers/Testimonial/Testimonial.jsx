import React, { useState } from 'react';
import "./testimonial.css";
import Headings from '../../Components/Headings/Headings';
import TestimonialUser from '../../Components/TestimonialUser/TestimonialUser';
import { User1, User2, User3, User4 } from '../../../src/assets';
import TestimonialContent from '../../Components/TestimonialContent/TestimonialContent';

const Testimonial = () => {

  const [testimonialToggle, setTestimonialToggle] = useState(1);

  return (
    <>
      <section id='testimonial' className='container'>
        <div className="testimonial_heading">
          <Headings 
            heading="Pocity a Skúsenosti Našich Klientov"
            description="Prečítajte si recenzie od našich
            cvičencov a ich skúsenosť s našou posilovňou"
          />
        </div>

        <div className="testimonial_main-wrapper inline-flex">
          <div className="testimonial_left-side">
            <TestimonialUser 
              photo={User1}
              name="Noemi Spodná"
              position="Predsedkyňa záhradných hmôt"
              className="testimonial_user-tab active"
            />
            <TestimonialUser 
              photo={User2}
              name="Štefánia Mírska"
              position="Poslankyňa"
              className="testimonial_user-tab"
            />
            <TestimonialUser 
              photo={User3}
              name="Jano Levočar"
              position="Vedúci výroby bielych čokolád"
              className="testimonial_user-tab"
            />
            <TestimonialUser 
              photo={User4}
              name="Lena Haluzová"
              position="Miestna podávačka trhačiek"
              className="testimonial_user-tab"
            />
          </div>

          <div className="testimonial_right-side">
            <TestimonialContent />
          </div>
        </div>

      </section>
    
    
    
    </>
  )
}

export default Testimonial