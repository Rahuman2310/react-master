
import React from 'react'
//import {Header} from '../Header';
import {motion} from 'framer-motion'
import ParticleComponent from "./Particles.js";
import './Hero.css'

const Hero = () => {
    const transition = {type:"spring", duration :3}
  return (
    <>

    <div className="hero">
   
        <div className='left-h'>
            
            <div className="the-best-ad">
                <motion.div
                initial={{left:'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition , type:'tween'}}
                ></motion.div>
                <span>web developement company</span>
            </div>
            <div className='hero-text'>
                <span className='storke-text'>Nimatooz</span> 
                <span> smile mobility</span>
            </div>
            <div className='hero-title'>
                <span>Best Web and Mobile Application Development</span>
            </div>
            <div className="hero-description">
                <spam >Nimatooz Smile Mobility Pvt Ltd is an established global company focusing on business intelligence, mobile application and web design. Our client site includes companies of all sizes from start-ups to large companies.</spam>
            </div>
            <div className='figures'>
                <div>
                    <span>45</span>
                    <span>Completed <br/>projects</span>
                </div>
                <div>
                    <span>8200</span>
                    <span>Working hours<br/> were spent</span>
                </div>
                <div>
                    <span>15</span>
                    <span>Expert team <br/>members</span>
                </div>
            </div>
            <div className="hero-button">
                <button className="btn"> Get started</button>
                <button className="btn"> Learn more</button>
            </div>
        </div>
        <div className='right-h'> 
            

            <motion.div 
                initial={{right:'-1rem'}}
                whileInView={{right:'4rem'}}
                transition={{...transition, type:'tween'}}

            className="heart-rate">
                <img src="./images/heart.png" alt="" />
                <span className='aproches' >start your<br/> business</span>    
            </motion.div>
            <div className="hero">
                <img src="./images/hero.png" alt="" className='hero-image' />
                <motion.img
                    initial={{right:'11rem'}}
                    whileInView={{right:'20rem'}}
                    transition={{...transition, type:'tween'}}

                src="./images/hero_image_back.png" alt="" className='hero_image_back'></motion.img>
                <motion.div 
                     initial={{right:'39rem'}}
                     whileInView={{right:'32rem'}}
                     transition={{...transition, type:'tween'}}

                className="calories">
                    <img src="./images/calories.png" alt="" />
                    
                </motion.div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero