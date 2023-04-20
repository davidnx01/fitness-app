import React from 'react'
import "./cta.css"

const CTA = () => {
  return (
    <div className='CTA_wrapper'>
      <div className="CTA_left-side">
        <a href="#">PRIDAŤ SA</a>
        <p>49€/mesiac</p>
      </div>

      <div className="CTA_right-side">
        <a href="#">VYSKÚŠAŤ ZADARMO</a>
      </div>
    </div>  
  )
}

export default CTA