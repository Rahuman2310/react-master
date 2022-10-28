import React from "react";
import Particles from 'react-particles-js-div';

export default () => (
  <div
    style={{
      width: "105%",
      height: "100%",
      backgroundColor: ""
    }}
  >
    <Particles
      // Add window resize logic if required
      height={window.outerHeight}
      params={{
        particles: {
          number: {
            value: 150
          },
          size: {
            value: 3
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