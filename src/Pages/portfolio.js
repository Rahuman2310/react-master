import React from 'react'
import "./portfolio.css"
import videoBg from "./images/video.mp4"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Portfolio = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ajoxrbs', 'template_rel9skf', form.current, 'lHblZ0ys5Z4cgv1AQ')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
          alert("oops ..Enter the valid details")
      });
  };
  return (
    <>
    
      <div className='port'>
      <video className="video" src={videoBg} autoplay='true' loop muted />
        <div className='portfolio-head'>
         <span>Portfolio</span>           
        </div>
        
        <div className='portfolio-list'>
          <div classname="row-1">
            <img src="./images/lonestar.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
            <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>LoneStar</h3>
            </div>
          </div>
          <div classname="row-1">
            <img src="./images/midstar.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
            <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Midstar</h3>
            </div>
          </div>
          <div classname="row-1">
           <img src="./images/thenorthtrans_portfolio.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
           <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>The North Transportation</h3>
            </div>
          </div>
        </div>
        <div className='portfolio-list'>
          <div classname="row-1">
             <img src="./images/joice-motorss.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
             <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Joyce Motor Group</h3>
            </div>
          </div>
          <div classname="row-1">
            <img src="./images/load-trustee3.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
            <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Load Trustee</h3>
            </div>
          </div>
          <div classname="row-1">
           <img src="./images/VWDS.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
           <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Village Women’s Development Society</h3>
            </div>
          </div>
        </div>
        <div className='portfolio-list'>
          <div classname="row-1">
             <img src="./images/EC.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
             <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Elitecuts - Meat Shop Online</h3>
            </div>
          </div>
          <div classname="row-1">
            <img src="./images/FMS.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
            <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>FOCUS Management Consultants</h3>
            </div>
          </div>
          <div classname="row-1">
           <img src="./images/mech-tech.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
           <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Mech-Tech Insurance Surveyors</h3>
            </div>
          </div>
        </div>
        <div className='portfolio-list'>
          <div classname="row-1">
             <img src="./images/cloud-0transport.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
             <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>The Cloud Transport</h3>
            </div>
          </div>
          <div classname="row-1">
            <img src="./images/gp-portfolio.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
            <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Popular Foundations </h3>
            </div>
          </div>
          <div classname="row-1">
           <img src="./images/poseidon.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
           <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Poseidon Aquatic Club</h3>
            </div>
          </div>
        </div>
        <div className='portfolio-list'>
          <div classname="row-1">
             <img src="./images/sk-electricals.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
             <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Sk Electrical services</h3>
            </div>
          </div>
          <div classname="row-1">
            <img src="./images/stepstones-screenshoots.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
            <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Stepstones Academy</h3>
            </div>
          </div>
          <div classname="row-1">
           <img src="./images/jp-export-import.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
           <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Jp Export and Imports </h3>
            </div>
          </div>
        </div>
        <div className='portfolio-list'>
          <div classname="row-1">
             <img src="./images/scs catering.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
             <div className='catogory-2'>
               <h3  style={{color:"yellow"}}>Shanmuga Catering Service</h3>
            </div>
          </div>
          <div classname="row-1">
            <img src="./images/sbp-photography.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
            <div className='catogory-2'>
               <h3  style={{color:"yellow"}}>SBP Photography Studio</h3>
            </div>
          </div>
          
        </div>
        <div className='Scripttext'>
      <div className='left-p'>
        <div className="product-img">
            <img src="./images/process-grp.jpg" alt="" style={{width:"38rem",borderRadius:"30px 30px"}}/>
        </div>
      </div>
      <div className='right-t'>
        <h1 style={{color:"orangered",fontSize:"32px",}} >Feedback</h1>
        
        <span style={{color:"orangered",fontSize:"36px",}}>What Our Clients Are Saying?</span>
        <p style={{color:"white",fontSize:"20px",}}>The POS is that the central component for your business; it’s the hub where everything
         like sales, inventory and customer managementmerges.</p>
         <form ref={form} onSubmit={sendEmail}>
         <div className='portfolio-form'>
         <textarea type="text"  placeholder='write your messages' className='contact-form' style={{height:"100px"}} name="message"/><br/>
        <br/><br/>
        <button className='product-btn' value="send">submit</button>
        </div>
        </form>
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
      

    
    </>
  )
}

export default Portfolio