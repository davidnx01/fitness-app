import React from 'react';
import "./footer.css";
import Logo from '../../Components/Logo/Logo';
import { BsFillEnvelopeOpenFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer_wrapper container">
        <div className="footer_left-side">
          <Logo />

          <p className='newsletter_text'>
            Prihláste sa k nášmu newsletteru
            pre užitočné novinky
          </p>
          <form>
            <div>
              <input 
                type="email" 
                required
                placeholder='Email'
              />
              <BsFillEnvelopeOpenFill className="envelope_icon" />
            </div>
              <input 
                type="submit"
                value="PRIHLÁSIŤ SA"
                className='submit_button'
              />
          </form>

        </div>
          <p className='copyright'>
            &copy; Copyright 2023, Dávid Roman
          </p>
      </div>
          
    </footer>
  )
}

export default Footer