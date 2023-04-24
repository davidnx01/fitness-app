import React from 'react'
import "./sponsors.css"

const Sponsors = () => {
  return (
    <>
      <section class="sponsors container">
        <div class="sponsors__logo">
          <img src="/public/rebook.png" alt="Sponsor 1"/>
        </div>
        <div class="sponsors__logo">
          <img src="/public/puma.png" alt="Sponsor 2"/>
        </div>
        <div class="sponsors__logo">
          <img src="/public/nike.png" alt="Sponsor 3"/>
        </div>
        <div class="sponsors__logo">
          <img src="/public/adidas.png" alt="Sponsor 4"/>
        </div>
        <div class="sponsors__logo">
          <img src="/public/jordan.png" alt="Sponsor 5"/>
        </div>
      </section>
    </>
  )
}

export default Sponsors