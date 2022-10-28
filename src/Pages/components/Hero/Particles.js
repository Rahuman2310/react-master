import React from "react";
import Particles from 'react-particles-js-div';

export default () => (
  <div
    style={{
        paddingTop:"35%",
     position:"absolute",
    height:"200%"
    
    }}
  >
    <Particles
      // Add window resize logic if required
      height={window.innerHeight}
      params={{
        particles: {
          number: {
            value: 70
          },
          size: {
            value: 1
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            }
          }
        }
      }}
    />
  </div>
);