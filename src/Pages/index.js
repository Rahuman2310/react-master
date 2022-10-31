import React, { useCallback } from 'react';
import './index.css';
import Footer from './components/Footer/Footer';

import Hero from './components/Hero/Hero'
import Line from './components/Line/Line'
import Process from './components/Process/Process'
import Ratings from './components/Ratings/Ratings'
import Reasons from './components/Reasons/Reasons'
import Scripttext from './components/Scripttext/Scripttext'
import Stroketext from './components/Stroketext/Stroketext'
import Particles from "react-tsparticles";
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon";


function Home  ()  {
	const particlesInit = useCallback(async (engine) => {
		await loadPolygonPath(engine);
	  }, []);
return (
	
	<div className='Apple'>
	<div>
	
	
	<h1>
	
		<Hero/>
    	<Process/>
    	<Reasons/>
    	<Stroketext/>
    	<Ratings/>
    	<Scripttext/>
    	<Line/>
    	<Footer />
	</h1>
	</div>
	<div className="polygon">
        <Particles
          options={{
            fpsLimit: 60,
			particles: {
          color: {
            value: "#fbdb04",
            animation: {
              enable: true,
              speed: 10
            }
          },
          move: {
            attract: {
              enable: true,
              rotate: {
                distance: 100,
                x: 2000,
                y: 2000
              }
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "destroy"
            },
            path: {
              clamp: false,
              enable: true,
              delay: {
                value: 0
              },
              generator: polygonPathName,
              options: {
                sides: 6,
                turnSteps: 30,
                angle: 30
              }
            },
            random: false,
            speed: 3,
            straight: true,
            trail: {
              fillColor: "#000",
              length: 20,
              enable: true
            }
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 0
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 2
          }
        },
        background: {
          color: "#3c5570"
        },
        fullScreen: {
          zIndex: -1
        },
        detectRetina: true,
        emitters: {
          direction: "none",
          rate: {
            quantity: 1,
            delay: 0.25
          },
          size: {
            width: 0,
            height: 0
          },
          position: {
            x: 50,
            y: 50
          }
        }
          }}
          init={particlesInit}
        />
      </div>
	</div>
);
};

export default Home;
