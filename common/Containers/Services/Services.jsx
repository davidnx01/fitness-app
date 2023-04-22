import React from 'react'
import "./services.css"
import Headings from '../../Components/Headings/Headings'
import CTA from '../../Components/CTA/CTA'
import ServiceTab from '../../Components/ServiceTab/ServiceTab'

const Services = () => {
  return (
    <>
      <section id='services' className='container'>
        <div className="services_wrapper flex-inline">
          <div className="services_left-side">
            <Headings 
              heading="Tréningy Pre Každého"
              description="Naši tréneri sú kvalifikovaní a 
              ochotní pomôcť Vám dosiahnuť vaše ciele."
            />
            <CTA />
          </div>

          <div className="services_right-side">
            <ServiceTab 
              title="Skupinové Cvičenia"
              description="Ponúkame širokú škálu skupinových cvičení,
              vedené našim inštruktorom."
            />
            <ServiceTab 
              title="Osobný Tréner"
              description="Individuálne plánovanie a sledovanie 
              tréningu pod dohľadom nášho skúseného trénera."
            />
            <ServiceTab 
              title="Kardio zóna"
              description="V kardio zóne nájdete moderné kardiovaskulárne 
              stroje. Pomôžu zlepšiť a spaľovanie tuku."
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Services