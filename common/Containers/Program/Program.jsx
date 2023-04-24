import React from 'react'
import "./program.css"
import TopLeftIcon from '../../Components/TopLeftIcon/TopLeftIcon'
import ProgramTab from '../../Components/ProgramTab/ProgramTab'

const Program = () => {
  return (
    <section className='container' id='program'>
      <div className="heading-inline flex-inline">
        <h2>Navštívte Nás<br></br>
          a Spoznajme Sa
        </h2>
        <p>
          S moderným vybavením a odbornými trénermi 
          Vám naša posilňa poskytne všetko, čo potrebujete 
          na dosiahnutie Vašich cieľov.
        </p>
      </div>

      <div className="program_main-container flex-inline">
        <div className="program_main__left-side">
          <img 
            src="/program_photo-left.jpg" 
            alt="Photography" 
          />
          <TopLeftIcon />
          <div className="program_main__left-side_text flex-inline">
              <span>
                POSILOVŇA
              </span>

              <p>
                Naša miestna posilňa je ideálnym miestom pre 
                zlepšenie Vašej kondície a fyzickej formy.
              </p>
          </div>
        </div>

        <div className="program_main__right-side">
          <ProgramTab />
        </div>
      </div>
    </section>
  )
}

export default Program