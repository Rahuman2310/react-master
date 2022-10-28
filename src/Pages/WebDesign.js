import videoBg from "./images/video.mp4"
const WebDesign = () => {
    return (
        <>
    <div className='web'>
    <video className="video" src={videoBg} autoplay='true' loop muted />
      <div className='portfolio-head'>
          <span>Web Design</span>
      </div>
      <div className='carrer-content'>
        <h1 style={{color:"orangered",fontSize:"32px",}} >Nimatooz Smile Mobility pvt ltd.</h1>
        
        <span style={{color:"orangered",fontSize:"36px",}}>Web Design Company </span>
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
        <div className='left-p'>
            
            <h1 style={{color:"orangered",fontSize:"32px",}} >Website designing company</h1>
            <p style={{color:"white",fontSize:"16px",}}>Today the website is an integral part of the daily business process, so
             it is very important to show your business effectively on the web. 
            As a leading website development company, we offer the best web design and website to move your business forward in
            today's digital way. We design amazing web design and develop integrated solutions to help our customers to achieve
             and surpass their business goals. We offer you not only design solutions but also interactive solutions that explore
              the depth of the possibility.</p>
            <span style={{color:"orangered",fontSize:"32px",}}>Web design and development company in Chennai</span>
            <p style={{color:"white",fontSize:"16px",}}>We bring you the most innovative designs that consumers want to take their
             business in online, which helps to be in a leading position in current marketplace. We provide web development and
              web design, from complete digital marketing to mobile application development and graphic designing.We are proud 
              to be the best web design and development company in Chennai. </p>
        </div>
        <div className='right-t'>
            <div className="product-img">
                <img src="./images/web.jpg" alt="" style={{width:"38rem",borderRadius:"30px 30px"}}/>
            </div>
        </div>
      </div>
      <div className='portfolio-list'>
      <div classname="contact-row" >
           
            
            <div className='web-category'>
            <img src="./images/web.jpg" alt="" style={{width:"300px",height:"8rem",borderRadius:"30px 30px"}}/>
               <h3 style={{color:"red",textAlign:"center"}}>UI/UX Design</h3><br/>
               <span>User experience design sits at the intersection of content,
                 prototyping, implementation and design. We live at that point as 
                 a UX design company to offer trend-setting and industry-leading UX design 
                 services to our clients.</span>
            </div>
          </div>
          <div classname="contact-row" >
          <div className='web-category'>
          <img src="./images/web.jpg" alt="" style={{width:"300px",height:"8rem",borderRadius:"30px 30px"}}/>
               <h3 style={{color:"red",textAlign:"center"}}>Update And Maintanance</h3><br/>
               <span>We provide full services for the project from start to end and we even 
                offer our best services like support and maintenance after the product launch
                 and delivery.</span>
            </div>
          </div>
          <div classname="contact-row" >
          <div className='web-category'>
          <img src="./images/web.jpg" alt="" style={{width:"300px",height:"8rem",borderRadius:"30px 30px"}}/>
               <h3 style={{color:"red",textAlign:"center"}}>Landing Page</h3><br/>
               <span>In digital marketing, a landing page is a standalone web page,
                 created specifically for a marketing or advertising campaign. It’s
                  where a visitor “lands” after they click on a link in an email, or
                   ads from Google web.</span>
            </div>
          </div>
        </div>
        <div className='portfolio-list'>
      <div classname="contact-row" >
           
            
            <div className='web-category'>
            <img src="./images/web.jpg" alt="" style={{width:"300px",height:"8rem",borderRadius:"30px 30px"}}/>
               <h3 style={{color:"red",textAlign:"center"}}>Responsive Website Design</h3><br/>
               <span>Our responsive website designers are in-tuned with the 
                requirements of the tech-savy generation which surfs online 
                through various devices and thoroughly.  </span>
            </div>
          </div>
          <div classname="contact-row" >
          <div className='web-category'>
          <img src="./images/web.jpg" alt="" style={{width:"300px",height:"8rem",borderRadius:"30px 30px"}}/>
               <h3 style={{color:"red",textAlign:"center"}}>Responsive Static Website</h3><br/>
               <span>Our Static website packages provide absolute solution
                 to the businesses or individuals, to post their company
                  onto the static web pages. </span>
            </div>
          </div>
          <div classname="contact-row" >
          <div className='web-category'>
          <img src="./images/web.jpg" alt="" style={{width:"300px",height:"8rem",borderRadius:"30px 30px"}}/>
               <h3 style={{color:"red",textAlign:"center"}}>Responsive Dynamic Website</h3><br/>
               <span>Dynamic Website can be simple or complex depending on 
                the customer's design / development needs. It is really effortless
                 to install any Open Source product .</span>
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