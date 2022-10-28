import React from 'react'
import './index.css'
import videoBg from "./images/video.mp4"  
const career = () => {
  return (
    <div className='career'>
      <video className="video" src={videoBg} autoplay='true' loop muted />
      <div className='portfolio-head'>
          <span>Career</span>
      </div>
      <div className='carrer-content'>
        <h1 style={{color:"orangered",fontSize:"32px",}} >Career</h1>
        
        <span style={{color:"orangered",fontSize:"36px",}}>Our Current Openings </span>
        <p style={{color:"white",fontSize:"20px",}}>If you are interested in any of the below positions, apply directly using the <br/>form below or email your resume to <span>hello@smilemobility.in</span> quoting the Job<br/> Reference ID in the subject line.</p>
      </div>  
      <div className="plans" style={{padding:"8rem"}}>
      <div className='catogory-1' style={{height:"4rem"}}>
         <span>Web Designer</span>
         
          
      </div>
      <div className='catogory-1'>
          <span>MobileApp Developer</span>
          
             
      </div>
      
        
    </div>
    <div style={{padding:"60px"}}>
        <hr
            style={{
              background: 'lime',
              color: 'oranged',
              borderColor: 'lime',
              height: '3px',
              width:'95%',
              
            }}
          />
    </div>
    <div className="footer-container">
          <div className="footer">
            <div className="social-links">
            <a href="https://www.facebook.com/SmileMobility/"  className="social-links">< img  src="./images/facebook.png" alt=""  /></a>
               <a href="https://www.instagram.com/smilemobility/"  className="social-links"><img src="./images/instagram.png" alt="" /></a>
               <a href="https://www.linkedin.com/company/smilemobility/about/"  className="social-links"><img src="./images/linkedin.png" alt="" /></a>
               <a href="https://twitter.com/SmileMobility"  className="social-links"><img src="./images/twitter.png" alt="" /></a>
            </div>
            <div className="logo-f">
                 <img src="./images/nimatooz_smile_logo2.png" alt="" />
            </div>
          </div>

        </div> 
    </div>
  )
}

export default career