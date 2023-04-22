import React from 'react'
import "./programTab.css"
import TopLeftIcon from '../TopLeftIcon/TopLeftIcon'

const ProgramTab = () => {
  return (
    <>
      <div className="program_main__right-side_tab flex-inline">
        <div className="program_tab">
          <div className="rotate">
            <span>SILOVÝ TRÉNING</span>
          </div>
          <TopLeftIcon />
        </div>

        <div className="program_tab">
          <div className="rotate">
            <span>KALISTENIKA</span>
          </div>
          <TopLeftIcon />
        </div>

        <div className="program_tab">
          <div className="rotate">
            <span>YOGA</span>
          </div>
          <TopLeftIcon />
        </div>
      </div>
    </>
  )
}

export default ProgramTab