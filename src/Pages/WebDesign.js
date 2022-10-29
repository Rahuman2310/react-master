import videoBg from "./images/video.mp4"
import './index.css'
import styled from "styled-components";
import { keyframes } from "styled-components";
const WebDesign = () => {
    return (
        <>
    <div className='web'>
    <video className="video" src={videoBg} autoplay='true' loop muted />
      <div className='portfolio-head'>
      <span><AnimatedGradientText>Web Design</AnimatedGradientText></span>
      </div>
      <div className="centered-div"></div>
      <div className='carrer-content'>
        <h1 style={{color:"orangered",fontSize:"32px",}} >Nimatooz Smile Mobility pvt ltd.</h1>
        
        <span style={{color:"yellow",fontSize:"36px",}}>Web Design Company </span>
        <p style={{color:"white",fontSize:"20px",}}>If you looking for a unique professional web design for your business, Nimatooz<br/>
         Smile Mobility Pvt Ltd is one of the best web design companies in Chennai. we<br/>
          craft a unique and eye-pleasing design for your website We ensure your digital<br/>
           presence looks good to provide your web users a great user experience across any <br/>
           device. We create websites that are attractive in both designs and user<br/>
            experiences.We provide high quality web designs for various sectors in the global <br/>
            market. Nimatooz Smile Mobility is the best web design company in Chennai. We<br/>
             develop a comprehensive web design strategy by conducting a thorough analysis of<br/>
              our clients' work process and company structure.</p>
            <button className="btn" style={{backgroundColor:"red",color:"white"}}> Get started</button> 
      </div>
      <div className='Scripttext'>
      <div className='centered-div'>
        <div className='left-p'>
            
            <h1 style={{color:"orangered",fontSize:"32px",}} >Website designing company</h1>
            <p style={{color:"white",fontSize:"20px",}}>Today the website is an integral part of the daily business process, so
             it is very important to show your business effectively on the web. 
            As a leading website development company, we offer the best web design and website to move your business forward in
            today's digital way. We design amazing web design and develop integrated solutions to help our customers to achieve
             and surpass their business goals. We offer you not only design solutions but also interactive solutions that explore
              the depth of the possibility.</p>
            
        </div>
        <div className='right-t'>
            <div className="product-img">
                <img src="./images/web.jpg" alt="" style={{width:"38rem",borderRadius:"30px 30px"}}/>
            </div>
        </div>
      </div>
      </div>
      <div className='portfolio-list'>
     
      <div classname="contact-row" >
           
            
            <div className='web-category'>
            
               <h3 className="product-head" style={{color:"red",textAlign:"center"}}>UI/UX Design</h3><br/>
               
            </div>
          </div>
          <div classname="contact-row" >
          <div className='web-category'>
          
               <h3 className="product-head" style={{color:"red",textAlign:"center"}}>Update And Maintanance</h3><br/>
               
            </div>
          </div>
          <div classname="contact-row" >
          <div className='web-category'>
          
               <h3 className="product-head" style={{color:"red",textAlign:"center"}}>Landing Page</h3><br/>
               
            </div>
          </div>
        </div>
        <div className='portfolio-list'>
      <div classname="contact-row" >
           
            
            <div className='web-category'>
            
               <h3 className="product-head" style={{color:"red",textAlign:"center"}}>Responsive Website Design</h3><br/>
               
            </div>
          </div>
          <div classname="contact-row" >
          <div className='web-category'>
          
               <h3 className="product-head" style={{color:"red",textAlign:"center"}}>Responsive Static Website</h3><br/>
               
            </div>
          </div>
          <div classname="contact-row" >
          <div className='web-category'>
         
               <h3  className="product-head" style={{color:"red",textAlign:"center"}}>Responsive Dynamic Website</h3><br/>
               
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
    </>
    );
  };
  
  export default WebDesign;
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