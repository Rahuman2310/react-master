import React from 'react'
import './index.css'
import videoBg from "./images/video.mp4"
import { Icon } from 'react-icons-kit'
import { location2 } from 'react-icons-kit/icomoon/location2'
import { phone } from 'react-icons-kit/icomoon/phone'
import { mail } from 'react-icons-kit/icomoon/mail'
import { sphere } from 'react-icons-kit/icomoon/sphere'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from "sweetalert";
import styled from "styled-components";
import { keyframes } from "styled-components";
const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ajoxrbs', 'template_rel9skf', form.current, 'lHblZ0ys5Z4cgv1AQ')
      .then((result) => {
          console.log(result.text);
          swal({
            title: "Thank You",
            text: "Your message send successfully",
            icon: "success",
            button: "ok",
          });
          
      }, (error) => {
          console.log(error.text);
          swal({
            title: "Sorry..!",
            text: "check your details",
            icon: "error",
            button: "ok",
            
          });
      });
  };
  return (
    <div className='contacts'>

       <video className="video" src={videoBg} autoplay='true' loop muted />
      <div className='portfolio-head'>
      <span><AnimatedGradientText>Contact</AnimatedGradientText></span>
      </div>
      <div className='carrer-content'>
        <h1 style={{color:"orangered",fontSize:"32px",}} >Contact Us</h1>
        
        <span style={{color:"orangered",fontSize:"36px",}}>Get in Touch With Nimatooz Smile Mobility </span>
        </div>
       
        <div className='Scripttext' >
        <div className='centered-div'>
      <div className='left-t'>
        <div className="product-img">
            <img src="./images/contact1.jpg" alt="" style={{width:"38rem",borderRadius:"30px 30px"}}/>
        </div>
      </div>
      <div className='right-t'><br/><br/>
      <div className='form' >
        <form ref={form} onSubmit={sendEmail}>
      <input type="text" placeholder=' Your Name' className='contact-form' name='user_name' required/><br/>
      <input type="text" placeholder='Your Email Address' className='contact-form' name='user_email' required/><br/>
      <input type="text" placeholder='Your Phone Number' className='contact-form' name='user_phone_number' required /><br/>
      <textarea placeholder='write your messages' className='contact-form' name='message' style={{height:"100px"}} requiredrequired/>
      <button className='product-btn' value="Send" >submit</button>
      </form>
      </div><br/>
        
      </div>
      </div>
      </div>
       
      <div className='portfolio-list'>
      <div classname="contact-row" >
            <div style={{color:"red", paddingTop:"50px",width:"150px"}}>
            <Icon size={'50px'} icon={location2}/>
            </div><br/>
            
            <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Our Register Address</h3><br/>
               <span>No 213/3, Mookudi Road<br/>
                  Opp Vijaya Complex<br/>
                  Aranthangi (TK), Pudukkottai - 614 616<br/>
                  Tamil Nadu,India. </span>
            </div>
          </div>
          <div classname="contact-row" >
            <div style={{color:"red", paddingTop:"50px"}}>
            <Icon size={'50px'} icon={location2}/>
            </div><br/>
            
            <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Our Register Address</h3><br/>
              <span>No 103, Agraharam Street<br/>
                Anjaneyar Pillaiyar Temple Near<br/>
                Aranthangi (TK), Pudukkottai - 614 616<br/>
                Tamil Nadu,India.  </span>
            </div>
          </div>
          <div classname="contact-row" >
            <div style={{color:"red", paddingTop:"50px"}}>
            <Icon size={'50px'} icon={location2}/>
            </div><br/>
            
            <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Our Register Address</h3><br/>
                <span>715-A<br/>
                7th Floor, spencer plaza, Suit No.894<br/>
                Mound road, Anna Salai<br/>
                Chennai 600 002. </span> 
            </div>
          </div>
        </div>
        <div className='portfolio-list'>
        <div classname="contact-row" >
            <div style={{color:"red", paddingTop:"50px"}}>
            <Icon size={'50px'} icon={phone}/>
            </div><br/>
            
            <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Contact number</h3><br/>
               <span>Mobile: +91 77085 04776<br/><br/>Mobile: +91 95668 61515</span>
            </div>
          </div>
          <div classname="contact-row" >
            <div style={{color:"red", paddingTop:"50px"}}>
            <Icon size={'50px'} icon={mail}/>
            </div><br/>
            
            <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Email</h3><br/>
               <span>E-mail: hello@smilemobility.in <br/><br/>E-mail: sales@smilemobility.in</span>
            </div>
          </div>
          <div classname="contact-row" >
            <div style={{color:"red", paddingTop:"50px"}}>
              <Icon size={'50px'} icon={sphere}/>
            </div><br/>
            
            <div className='catogory-2'>
               <h3 style={{color:"yellow"}}>Social Media</h3><br/>
               <div className="social-media">
                <a href="https://www.facebook.com/SmileMobility/"  className="social-links">< img  src="./images/facebook.png" alt=""  /></a>
               <a href="https://www.instagram.com/smilemobility/"  className="social-links"><img src="./images/instagram.png" alt="" /></a>
               <a href="https://www.linkedin.com/company/smilemobility/about/"  className="social-links"><img src="./images/linkedin.png" alt="" /></a>
               <a href="https://twitter.com/SmileMobility"  className="social-links"><img src="./images/twitter.png" alt="" /></a>
            </div>
            </div>
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

export default Contact

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;