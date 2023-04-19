import React from 'react'
import "./hero.css";
import Logo from '../../Components/Logo/Logo';
import { navLinks } from "../../Constants/NavLinks" ;

const Hero = () => {
  return (
    <>
      <div className='container'>
        <nav>

          <Logo />

          <div className='nav_right-side'>
            <ul>
              {navLinks.map((link) => (
                <li key={link.index}>
                  <a href={link.id}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <a href='#' className='nav_right-side__button'>
              CHCEM SA PRIDAŤ
            </a>
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

      </div>
    </>
  )
}

export default Hero