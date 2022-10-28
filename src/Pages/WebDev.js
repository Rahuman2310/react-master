import videoBg from "./images/video.mp4"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
const WebDev = () => {
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
    <div className='web'>
    <video className="video" src={videoBg} autoplay='true' loop muted />
      <div className='portfolio-head'>
          <span>Web App Development</span>
      </div>
      <div className='carrer-content'>
        <h1 style={{color:"orangered",fontSize:"32px",}} >Nimatooz Smile Mobility pvt ltd.</h1>
        
        <span style={{color:"orangered",fontSize:"36px",}}>Web App Development Company</span>
        <p style={{color:"white",fontSize:"20px",}}>Nimatooz Smile mobility Pvt Ltd is the best web application<br/>
         development companies in Chennai. We develop all kinds of B2B,B2C enterprises web portals and also we offer<br/>
          custom web development services to our clients based on their business requirements with stunning results.<br/>
           You can customize your business by using unique web applications including e-learning portals, ERP, CRM, etc,.<br/>
            As one of the top-notch web development companies in Chennai, our developers are experts in many programming<br/>
             languages, tools, technologies and frameworks..</p>
            <button className="btn" style={{backgroundColor:"red",color:"white"}}> Get started</button> 
      </div>
      <div className='Scripttext'>
        <div className='left-p'>
            
            <h1 style={{color:"orangered",fontSize:"32px",}} >Web app Development</h1>
            <p style={{color:"white",fontSize:"18px",}}>we offering services in web design , web App development , Ecommerce
             Web app development , custom web application development , real time web application development We have 
             ventured into the web development service to offer superior and unique design and services.</p>
             <p style={{color:"white",fontSize:"18px",}}>Smile Mobility is one of the best web application development
             companies, Tamil Nadu, India. Being a top web app development, we have a professional team of web 
             designers, developers, creative writers, SEO, data analyst, and more who work together to make 
             every project successful. Our web developers are bold, user-friendly, and creative that will keep 
             you ahead of your competitors. You can leverage the benefits of our web development services in Chennai,
              Tamil Nadu, India.</p>
            
        </div>
        <div className='right-t'>
            <div className="product-img">
                <img src="./images/web_develop.jpg" alt="" style={{width:"38rem",borderRadius:"30px 30px"}}/>
            </div>
        </div>
      </div>
      <div className='Scripttext'>
        <div className='left-p'>
            <div className="product-img">
                <img src="./images/web_develop2.jpg" alt="" style={{width:"38rem",borderRadius:"30px 30px"}}/>
            </div>
        </div>
        <div className='right-t'>
            
            <h1 style={{color:"orangered",fontSize:"32px",}} >LET US ENHANCE YOUR USER EXPERIENCE AND PROFITABILITY</h1>
            <p style={{color:"white",fontSize:"18px",}}>Web page is the introduction of a brand which is essential 
            requirement for the business to run smoothly. Users can get an idea of who the company is, what it does,
            and its degree of professionalism.</p>
            
            
        </div>
      </div>
      <div className='portfolio-list'>
      <div classname="contact-row" >
           
            
            <div className='web-category'>
            <img src="./images/ui.jpg" alt="" style={{width:"300px",height:"8rem",borderRadius:"30px 30px"}}/>
               <h3 style={{color:"red",textAlign:"center"}}>UI/UX Design</h3><br/>
               <span>User experience design sits at the intersection of content,
                 prototyping, implementation and design. We live at that point as 
                 a UX design company to offer trend-setting and industry-leading UX design 
                 services to our clients.</span>
            </div>
          </div>
          <div classname="contact-row" >
          <div className='web-category'>
          <img src="./images/ui.jpg" alt="" style={{width:"300px",height:"8rem",borderRadius:"30px 30px"}}/>
               <h3 style={{color:"red",textAlign:"center"}}>Update And Maintanance</h3><br/>
               <span>We provide full services for the project from start to end and we even 
                offer our best services like support and maintenance after the product launch
                 and delivery.</span>
            </div>
          </div>
          <div classname="contact-row" >
          <div className='web-category'>
          <img src="./images/ui.jpg" alt="" style={{width:"300px",height:"8rem",borderRadius:"30px 30px"}}/>
               <h3 style={{color:"red",textAlign:"center"}}>Landing Page</h3><br/>
               <span>In digital marketing, a landing page is a standalone web page,
                 created specifically for a marketing or advertising campaign. It’s
                  where a visitor “lands” after they click on a link in an email, or
                   ads from Google web.</span>
            </div>
          </div>
        </div>
        
      <div className='Scripttext'>
        <div className='left-p'>
            <div className="product-img">
                <img src="./images/team2.jpg" alt="" style={{width:"38rem",borderRadius:"30px 30px"}}/>
            </div>
        </div>
        <div className='right-t'>
            
            <h1 style={{color:"orangered",fontSize:"32px",}} >Custom Development</h1>
            <p style={{color:"white",fontSize:"20px",}}>We are full-fledged in web 
            Development, able to create any type of custom apps, Whether it’s simple
             or large complex programs, our skilled developers integrate business intelligence
              with your ideas and make your operations smoother.</p>
            
            
        </div>
      </div>
      <div className='Scripttext'>
        <div className='left-p'>
            
            <h1 style={{color:"orangered",fontSize:"32px",}} >Goal Focused</h1>
            <p style={{color:"white",fontSize:"20px",}}>Every business built with
             a purpose and targeted audience differs. When people visiting your website, 
             they will to do some action to navigate. Those actions will be smooth
              and engaging if your website is perfectly structured and well organized for your niche. </p>
            
           
        </div>
        <div className='right-t'>
            <div className="product-img">
                <img src="./images/business2.jpg" alt="" style={{width:"38rem",borderRadius:"30px 30px"}}/>
            </div>
        </div>
      </div>
      <div className='Scripttext'>
        <div className='left-p'>
            <div className="product-img">
                <img src="./images/ui.jpg" alt="" style={{width:"38rem",borderRadius:"30px 30px"}}/>
            </div>
        </div>
        <div className='right-t'>
            
            <h1 style={{color:"orangered",fontSize:"32px",}} >User Dashboard</h1>
            <p style={{color:"white",fontSize:"20px",}}>Our experienced programming 
            team can handle all types of open source platforms to build, code, migrate
             and rebuild your applications. It will reduce your developing cost and gives
              more features and security than web development.</p>
            
            
        </div>
      </div>
      <div className='Scripttext'>
        <div className='left-p'>
            
            <h1 style={{color:"orangered",fontSize:"32px",}} >Admin Dashboard</h1>
            <p style={{color:"white",fontSize:"20px",}}>While this trend is rather 
            popular in all areas of web design; dashboards really take the cake.
             A dashboard is meant to be used by a smaller group of people with a
              set of specific tasks in mind. These tasks may include checking data, 
              editing content, or updating a profile. </p>
            
           
        </div>
        <div className='right-t'>
            <div className="product-img">
                <img src="./images/dashboard.jpg" alt="" style={{width:"38rem",borderRadius:"30px 30px"}}/>
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
    );
  };
  
  export default WebDev;