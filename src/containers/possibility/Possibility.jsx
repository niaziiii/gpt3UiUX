import React from 'react'
import possibilityImg from '../../assets/possibility.png'
import './possibility.css'

function Possibility() {
  return (
    <div className='gpt3__possibility section__margin' id='caseStudy'>
      <div className="gpt3__possibility__image">
        <img src={possibilityImg} alt="gpt3__possibility" />
      </div>
      <div className="gpt3__possibility__content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h3>Request Early Access to Get Started</h3>
      </div>
    </div>
  )
}

export default Possibility