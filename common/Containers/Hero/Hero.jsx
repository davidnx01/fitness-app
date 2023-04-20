import React from 'react'
import "./hero.css";
import Logo from '../../Components/Logo/Logo';
import { navLinks } from "../../Constants/NavLinks" ;
import Socials from '../../Components/Socials/Socials';
import MainCTA from '../MainCTA/MainCTA';
import CTA from '../../Components/CTA/CTA';

const Hero = () => {

  const Navigation = () => {
    return (
      <>
        <ul>
          {navLinks.map((link) => (
            <li key={link.index}>
              <a href={link.id}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </>
    )
  }

  return (
    <>
      <div className='container'>
        <nav>

          <Logo />

          <div className='nav_right-side'>
            <Navigation />

            <button className='nav_right-side__button'>
              <a href="https://www.google.sk">CHCEM SA PRIDAŤ</a>
            </button>
          </div>
        </nav>

        <div className="hero_heading">
          <h1>
            Zdravie Na<br></br>
            Dosah Ruky
          </h1>

          <p>
            Naše fitko je miestom, kde môžete zlepšiť 
            svoje fyzické i duševné zdravie.
          </p>
        </div>
        
        <div className="hero__bottom-row">
          <div className="hero__bottom-row_left">
            <div className="socials_wrapper">
              <Socials />
            </div>
              <CTA />
          </div>

          <div className="hero__bottom-row_right">
            <div className="hero_users">
              <div className="client_avatars">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>550+</span>
              <p>Spokojných klientov</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero