import React from 'react';
import './portfolio.css'
import videoBg from "./images/video.mp4"  
const Blog = () => {
  return (
    <>
      <div className='blogs'>
      <video className="video" src={videoBg} autoplay='true' loop muted />
        <div className='portfolio-head'>
          <span>Blog</span>
        </div>
        <div className='portfolio-list'>
          <div classname="row-1">
            <img src="./images/digital-img.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
            <div className='catogory-2'>
               <h3>Why Digital Marketing Is Important <br/>In The Current Situation</h3>
            </div>
          </div>
          <div classname="row-1">
            <img src="./images/blog-img2.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
            <div className='catogory-2'>
               <h3>8 Things Your Small Business Needs <br/>To Do To Improve Business</h3>
            </div>
          </div>
          <div classname="row-1">
           <img src="./images/android.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
           <div className='catogory-2'>
               <h3>What is new for Android developers <br/> at Google I/O</h3>
            </div>
          </div>
        </div>
        <div className='portfolio-list'>
          <div classname="row-1">
             <img src="./images/crm-img.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
             <div className='catogory-2'>
               <h3>Computer Software developer<br/> for CRM </h3>
            </div>
          </div>
          <div classname="row-1">
            <img src="./images/ios-img.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
            <div className='catogory-2'>
               <h3>iOS Mobile Application Development</h3>
            </div>
          </div>
          <div classname="row-1">
           <img src="./images/web-design-img.jpg" alt="" style={{width:"20rem",borderRadius:"30px 30px"}}/>
           <div className='catogory-2'>
               <h3>Website Design Company For <br/>Business Industry</h3>
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
  
export default Blog;