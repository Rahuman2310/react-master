import videoBg from "./images/video.mp4"
import React from 'react'
import './index.css';
import  { useRef } from 'react'
import emailjs from '@emailjs/browser'
import TextField from '@mui/material/TextField'
import styled from "styled-components";
import { keyframes } from "styled-components";
const product = () => {
  const form= useRef();
  
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
    <>
    <div className='products'>
    <video className="video" src={videoBg} autoplay='true' loop muted />
      <div className='portfolio-head'>
      <span><AnimatedGradientText>Product</AnimatedGradientText></span>
      </div>
      <div className='Scripttext'>
      <div className='left-p'>
        <div className="product-img">
            <img src="./images/pos_img.jpg" alt="" style={{width:"38rem",borderRadius:"30px 30px"}}/>
        </div>
      </div>
      <div className='right-t'>
        <h1 style={{color:"orangered",fontSize:"32px",}} >POS App</h1>
        <p style={{color:"white",fontSize:"20px",}}>A point of sale system, or POS, is that the place where your customer makes a payment for products or  
        services at your store. Simply put, whenever a customermake a purchase at your store, they're completing some 
        extent of sale transaction</p>
        <span style={{color:"orangered",fontSize:"32px",}}>POS App drives the best return for your investment</span>
        <p style={{color:"white",fontSize:"20px",}}>The POS is that the central component for your business; it’s the hub where everything
         like sales, inventory and customer managementmerges.</p>
      </div>
      </div>
      <div className='Scripttext'>
      <div className='left-p'>
        <br/><br/>
        <h1 style={{color:"orangered",fontSize:"32px",}} >Food Delivery</h1>
        <p style={{color:"white",fontSize:"20px",}}>With the increasing popularity of food delivery, the normal telemarketing food has inconvenience to the purchasers and therefore the food delivery store. How to make the food-delivery more quickly and conveniently has become a priority of individuals</p>
        
        <p style={{color:"white",fontSize:"20px",}}>So this report explores and develops new takeaway apps that are easier and more object-oriented than existing apps. Food-delivery app has easy and straightforward features, but now the food-delivery app is not any more convenient for people, the general is comparatively old, not novel enough, cannot attract new users. Based on this feature, we decided to style a system for people.</p>
      </div>
      <div className='right-t'>
      <div className="product-img">
            <img src="./images/food.jpg" alt="" style={{width:"38rem",borderRadius:"30px 30px"}}/>
        </div>
      </div>
      </div>
      <div className='Scripttext'>
      <div className='left-p'>
        <div className="product-img">
            <img src="./images/get-quote.jpg" alt="" style={{width:"38rem",borderRadius:"30px 30px"}}/>
        </div>
      
      </div>
      <div className='right-t'>
        <h1 style={{color:"orangered",fontSize:"19px",}} >Get Quote</h1>
        <h1 style={{color:"red",fontSize:"32px",}} >Get Free Quote</h1>
        <p style={{color:"white",fontSize:"20px",}}>A point of sale system, or POS, is that the place where your customer makes a payment for products or  
        services at your store. Simply put, whenever a customermake a purchase at your store, they're completing some 
        extent of sale transaction</p>
        <form ref={form} onSubmit={sendEmail}>
        <div className='product-form'>
        
          <div className='left-p'>
            <input type="text" placeholder='Name' className='form-text' name="user_name" /><br/><br/><br/>
            <input type="text" placeholder='Email' className='form-text' name="user_email"/>
          </div>
          <div className='right-p'>
            <input type="text"placeholder='Phone Number' className='form-text' name="user_phone_number"/><br/><br/><br/>
            <input type="text" placeholder='Place' className='form-text' name="message"/>
          </div>
          
          
        </div><br/><br/>
        <button className='product-btn' value="send" >submit</button>
        
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

export default product

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