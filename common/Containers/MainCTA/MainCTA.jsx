import React from 'react'
import "./mainCTA.css"
import CTA from '../../Components/CTA/CTA'

const MainCTA = () => {
  return (
    <>
      <section id='mainCta'>
        <div className="container">
          <h2>
            Pridajte Sa<br></br>
            K Nám!
          </h2>
          <CTA />
        </div>
      </section>
    </>
  )
}

export default MainCTA