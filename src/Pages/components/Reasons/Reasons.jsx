import React from 'react'
import './Reasons.css'
import ParticleComponent from './Particles'

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
       
        <div className="left-r">
            <img src="./images/Reason-img-1.png" alt="" />
            <img src="./images/process-grp.jpg" alt="" />
            
        </div>
        <div className="right-r">
            <span className='right-headline'>SERVICES</span>
            <div className='sub-text'>
                <span className='stroke-text'>Check</span>
                <span>Our Services</span>
            </div>
            
            <div className="details-r">
            <div >
                <img src="./images/tick.png"  className='App-logo' alt="" ></img>
                <span className='services'>Web Design</span>
            </div>
            <div>
                <img src="./images/tick.png" alt="" />
                <span>Web App Development</span>
            </div>
            <div>
                <img src="./images/tick.png" alt="" />
                <span>Mobile App Development</span>
            </div>
            <div>
                <img src="./images/tick.png" alt="" />
                <span>Digital Marketing</span>
            </div>
            <div>
                <img src="./images/tick.png" alt="" />
                <span>Web Hosting</span>
            </div>
            <div>
                <img src="./images/tick.png" alt="" />
                <span>Domain Registration</span>
            </div>
            </div>
            <span className='partners'>our partners</span>
                <div className="our-partners">
                    <img src="./images/cinehub1.png" alt="" />
                    <img src="./images/north-transportation1.png" alt="" />
                    <img src="./images/lonestar-1.png" alt="" />
                    
                </div>
        
        </div>
    </div>
  )
}

export default Reasons