import React from 'react';
import "./footer.css";
import Logo from '../../Components/Logo/Logo';
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { categorieLinks, navLinks } from '../../Constants/NavLinks';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_wrapper">
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

          <div className="footer_right-side">
            <div className="footer_right-side__about">
              <h4>Moderná Posilovňa</h4>
              <p>
                Správne vybavenie posilovne je jedna z najdôležitejších 
                vecí pre pohodlie a bezpečnosť našich klientov, 
                ktorú splňame na tej najvyššej úrovni.
              </p>
            </div>

            <div className="footer_right-side__nav">
              <span>Navigácia</span>
              <ul>
                {navLinks.map((item) => (
                  <li>
                    <a href={item.id}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer_right-side__kategorie">
              <span>Kategórie</span>
              <ul>
                {categorieLinks.map((item) => (
                  <li>
                    <a href={item.id}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>   
          </div>
        </div>

        <div className="footer__bottom-part">
            <p className='copyright'>
              &copy; Copyright 2023, Dávid Roman
            </p>
        </div>       

      </div>
    </footer>
  )
}

export default Footer