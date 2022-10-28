
import videoBg from "./images/video.mp4"
import React from "react";
import { Chrono } from "react-chrono";
import './about.css';
  
const About = () => {
  const items =[
    {
      title : "2012 June 07 ",
      cardTitle: "Founder",
      cardSubtitle:"The foundation of Nimatooz Smile Mobility Pvt Ltd. was started by one person as a freelancer under the name Nimatooz Smile solution, Nimatooz Smile Mobility Pvt Ltd. founded based on only trust. our main intention is to create a complete digital enabling of the business or create a digital transformation of the business to help them scale to the next level",
      
    },
  {
    title: "2015 January 14 ",
    cardTitle: "Next Step",
    cardSubtitle:"Then we started our journey as a team of four people in 2015 and we created web applications, custom web applications, etc.,",
    
  },
  {
    title: "2018 March 25 ",
    cardTitle: "Growth",
    cardSubtitle:"Recorded under the name Nimatooz Smile Mobility. Projects like Pos, Food delivery were done.",
    
  }, 
  {
    title: "2020",
    cardTitle: "Achievements",
    cardSubtitle:"In 9 years of business, we served 500+ clients till date and created close to 700+ quality websites and applications, today we have a team of around 25 people wonderful team today we create a lot of wonderful websites and mobile and web applications for great companies from startups to large enterprises. We also provided our services to countries like Canada and Dubai Nimatooz Smile Mobility Pvt Ltd. started by a person today we are also a pioneer among the tech industry.",
    
  }]
  return (
    <>

    <div className="about" >
    <div className='portfolio-head'>
          <span>About Us</span>
      </div>
      <p>
      
 <video className="video" src={videoBg} autoplay='true' loop muted />
        <div className="aboutbody">
        
            
            <div class="row">
                <div class="left-t">
                  <img src="./images/process-grp.jpg" alt="" class="responsive"  />
                </div>

                <div class="right-t" style={{Color:"white"}}>
                  <h2 className="righthead">About US</h2>
                  <h1 style={{color:"orangered"}}>Who we are</h1>
                  <p style={{color:"white"}}><span className="righthead" >Nimatooz Smile Mobility Pvt Ltd.</span> is one of the best web design and development companies in Chennai, trichy & pudukottai. We design and develop web and mobile apps for startups, medium and large enterprises businesses. We create technologies, we will help to your brand identity is taken to the next level.</p>
      <p style={{color:"white"}}>As a top web development company, our main objective is to develop and build websites that are easy to navigate and designs to attract potential customers. We design websites that are responsive, practical mobile-friendly.</p>
       <p style={{color:"white"}}>We provide full services for the project from start to end and we even offer our best services like support and maintenance after the product launch and delivery We understand the value of client’s time and money, so we handle every project seriously and give the maximum output on the given deadline.</p>
       <p style={{color:"white"}}>if you’re looking for the professional best web design and development services and solutions, Nimatooz smile mobiltity is one the leading web design and development company in chennai, and we would love to help we are always happy to deal with challenging projects committed to leverage the power of the internet to grow their business with proven skills in digital marketing were done.
                  </p>
                </div>
                </div>
            
            <div className="tool">
              <h1 style={{ textAlign:"center",color:"red"}}>Tools and technologies we use</h1>
              <div class="grid-container">
                <div className="grid-container1" ><h6>Web app development</h6>
                  
                    <div className="imgdis">
                     <div >
                        <img src="./images/html.png" alt="" style={{width:"50px",height:"50px"}}/>
                     </div>
                      <div >
                        <img src="./images/css.png" alt="" style={{width:"70px",height:"75px"}}/>
                      </div>
                      <div >
                        <img src="./images/boots.png" alt="" style={{width:"55px",height:"60px", paddingTop:"15%",}} />
                      </div>
                      <div >
                        <img src="./images/js.png" alt="" style={{width:"70px",height:"70px"}}/>
                      </div>
                      </div>
                      <div>
                      <img src="./images/angular.png" alt="" style={{width:"55px",height:"55px"}}/>
                      </div>
                      
                  
                </div>
                <div className="grid-container2"><h6>Android app development</h6>
                <div className="imgdis1">
                     <div >
                        <img src="./images/kot.png" alt="" style={{width:"50px",height:"50px"}}/>
                     </div>
                      <div >
                        <img src="./images/react.png" alt="" style={{width:"70px",height:"75px"}}/>
                      </div>
                      <div >
                        <img src="./images/java.png" alt="" style={{width:"55px",height:"60px", paddingTop:"15%",}} />
                      </div>
                      <div >
                        <img src="./images/flutter.png" alt="" style={{width:"70px",height:"70px"}}/>
                      </div>
                      </div>
                </div>
                <div className="grid-container3"><h6>IOS development</h6>
                <div className="imgdis1">
                     <div >
                        <img src="./images/swift.png" alt="" style={{width:"50px",height:"50px"}}/>
                     </div>
                      <div >
                        <img src="./images/react.png" alt="" style={{width:"70px",height:"75px"}}/>
                      </div>
                      <div >
                        <img src="./images/flutter.png" alt="" style={{width:"55px",height:"60px", paddingTop:"15%",}} />
                      </div>
                      
                      </div>
                </div>  
                <div className="grid-container4"><h6>Design</h6>
                <div className="imgdis">
                     <div >
                        <img src="./images/ae.png" alt="" style={{width:"50px",height:"50px"}}/>
                     </div>
                      <div >
                        <img src="./images/ai.png" alt="" style={{width:"55px",height:"55px"}}/>
                      </div>
                      <div >
                        <img src="./images/pr.png" alt="" style={{width:"55px",height:"55px", }} />
                      </div>
                      <div >
                        <img src="./images/ps.png" alt="" style={{width:"55px",height:"55px"}}/>
                      </div>
                      </div>
                      <div>
                      <img src="./images/xd.png" alt="" style={{width:"55px",height:"55px"}}/>
                      </div>
                </div>
                <div className="grid-container5"><h6>Database</h6>
                <div className="imgdis2">
                     <div >
                        <img src="./images/db.png" alt="" style={{width:"50px",height:"50px"}}/>
                     </div>
                      <div >
                        <img src="./images/mysql.png" alt="" style={{width:"70px",height:"75px"}}/>
                      </div>
                     
                      
                      </div>
                </div>
                <div className="grid-container6"><h6>Server Technologies</h6>
                <div className="imgdis2">
                     <div >
                        <img src="./images/nodejs.png" alt="" style={{width:"50px",height:"50px"}}/>
                     </div>
                      <div >
                        <img src="./images/php.png" alt="" style={{width:"70px",height:"75px"}}/>
                      </div>
                     
                      
                      </div>
                </div>  
              </div>
            </div>
            <div className="history">
              <h1 style={{color:"red"}}>OUR HISTORY</h1>
              <h2 style={{color:"white"}}>History Begins In 2012</h2>
              <div style={{ width: '100%', height: '950px' }}>
                <Chrono items={items}  /> 
              </div>
            </div>
          <div className="client">
            <h1 style={{color:"red"}}>NIMATOOZ SMILE MOBILTY</h1>
            <h2 style={{color:"white"}}> Our clients</h2>
            <div className="clientpng">
                <span><img src="./images/cinehub1.png" alt="" /></span>
                <span><img src="./images/north-transportation1.png" alt="" /></span>
                <span><img src="./images/lonestar-1.png" alt="" /></span>
            </div>
          </div>
          

        </div>
      </p>
      <hr style={{background: 'lime',color: 'oranged',borderColor: 'lime',height: '3px',width:'100%',}}/>

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
  
export default About;