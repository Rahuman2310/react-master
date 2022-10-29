import React from 'react'
import "./Scripttext.css"

const Scripttext = () => {
  return (
    <div className="Scripttext" >
        <div className='centered-div'>
        <div className="left-t">
            <span className='right-headline'>WHAT WE DO</span>
            <div className='sub-text'>
                <span className='stroke-text'>Solving Problems</span><br/>
                <span> Building Brands</span>
            </div>
            <span className='script-description'>We believe brand interaction is key in communication. Real innovations <br/>and a positive customer experience are the guts of successful<br/> communication.</span>
            
            <div className="details-v">
            <div >
                <img src="./images/tick.png" alt="" ></img>
                <span >Hard working</span>
            </div>
            <div>
                <img src="./images/tick.png" alt="" />
                <span>Diligent</span>
            </div>
            <div>
                <img src="./images/tick.png" alt="" />
                <span>Dedicated Developers</span>
            </div>
            <div>
                <img src="./images/tick.png" alt="" />
                <span>Loyalty</span>
            </div>
            
            </div>

        </div>

        <div className="right-t">
            <img src="./images/itstaff1.png" alt="" />
            
        </div>
        </div>
        
    </div>
  )
}

export default Scripttext