import React from 'react'
import "./contact.css"
import Headings from '../../Components/Headings/Headings'
import TopLeftIcon from '../../Components/TopLeftIcon/TopLeftIcon'
import TopRightIcon from '../../Components/TopRightIcon/TopRightIcon'

const Contact = () => {
  return (
    <>
      <section id="contact" className='container'>
        <div className='contact_wrapper'>
          <div className="contact_left-side">
            <Headings 
              heading="Zistite Kde a Ako Nás Kontaktovať"
              description="Prečítajte si recenzie od našich 
              cvičencov a ich skúsenosť s našou posilovňou"
            />

            <div className="contact_left-side__bottom">
              <img 
                src="/src/assets/contactLeft.jpg" 
                alt="Photo"
                title='Photo' 
              />
              <TopLeftIcon />
              <div className="contact_left-side__bottom-description">
                <div className="contact__left-description">
                  <span>TEL. Č.</span>
                  <p>
                  +421 919 000 000<br></br>
                  +421 918 000 000
                  </p>
                </div>

                <div className="contact__left-description">
                  <span>EMAIL</span>
                  <p>
                  info@fitgym.sk<br></br>
                  contact@fitgym.sk
                  </p>
                </div>
              </div>
            </div>

            <div className="contact_right-side">
              <div className="contact_right-side__photo">
                <img 
                  src="/src/assets/contactRight.jpg" 
                  alt="Contact Photo"
                  title='Contact Photo' 
                />
                <TopRightIcon />
                <div className="contact_right-side__description">
                  <span>LOKÁCIA</span>
                  <p>
                    HLAVNÁ 54/10
                    BRATISLAVA 1, 811 02
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    
    
    
    
    </>
  )
}

export default Contact