'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine, ISourceOptions } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

interface ParticlesBackgroundProps {
  type?: 'stars' | 'network';
}

const ParticlesBackground = ({ type = 'network' }: ParticlesBackgroundProps) => {
  
  const particlesInit = useCallback(async (engine: Engine) => {
    // Use loadSlim for better compatibility
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log('Particles container loaded', container);
  }, []);

  // Configuration mimicking the reference website's particle effect
  const starsConfig: ISourceOptions = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 80, // Fewer particles for a cleaner look, similar to the reference site
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#ffffff", "#0ea5e9"] // White and primary blue color
      },
      shape: {
        type: "circle", // Simple circles like the reference site
        stroke: {
          width: 0,
          color: "#000000"
        },
      },
      opacity: {
        value: 0.5, // Medium opacity
        random: false, // Consistent opacity
        anim: {
          enable: false
        }
      },
      size: {
        value: 2, // Small particles
        random: true,
        anim: {
          enable: false
        }
      },
      links: {
        enable: true, // Connect particles with lines
        distance: 150, // Medium connection distance
        color: "#0ea5e9", // Primary blue color
        opacity: 0.2, // Subtle connections
        width: 1
      },
      move: {
        enable: true,
        speed: 1, // Slow, graceful movement
        direction: "none",
        random: false,
        straight: false,
        outMode: "out",
        bounce: false,
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "grab" // Only grab mode on hover for a clean effect
        },
        onClick: {
          enable: true,
          mode: "push" // Add particles on click
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200, // Large grab distance
          links: {
            opacity: 0.7, // More visible connections on hover
            color: "#0ea5e9" // Primary blue color
          }
        },
        bubble: {
          distance: 250,
          size: 5,
          duration: 2,
          opacity: 0.8
        },
        repulse: {
          distance: 150,
          duration: 0.4
        },
        push: {
          particles_nb: 4 // Add a few particles on click
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true,
    fullScreen: {
      enable: false
    },
    background: {
      color: "transparent",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  };
  
  // Exact config that precisely matches the reference website
  const networkConfig: ISourceOptions = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 120, // Slightly higher count for better network effect
        density: {
          enable: true,
          value_area: 1000 // Increased area to spread particles more evenly
        }
      },
      color: {
        value: "#ffffff" // Pure white particles
      },
      shape: {
        type: "circle", // Simple circles for clean look
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
      },
      opacity: {
        value: 0.5, // Medium opacity
        random: false, // Consistent opacity
        anim: {
          enable: false
        }
      },
      size: {
        value: 3, // Medium-sized particles
        random: true, // Random sizes for variety
        anim: {
          enable: false
        }
      },
      // Using links property for compatibility with newer versions of tsparticles
      links: {
        enable: true,
        distance: 150, // Standard connection distance
        color: "#ffffff", // White links
        opacity: 0.4, // Standard opacity
        width: 1 // Standard width
      },
      move: {
        enable: true,
        speed: 2, // Medium speed
        direction: "none",
        random: false, // Predictable movement
        straight: false, // Natural curved movement
        outMode: "out", // Move out of the canvas
        bounce: false, // No bouncing
        attract: {
          enable: false, // No attraction
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: "window", // Detect on window for extended range interactions
      events: {
        onHover: {
          enable: true,
          mode: "grab" // Grab particles on hover - IDENTICAL to reference
        },
        onClick: {
          enable: true,
          mode: "push" // Add particles on click - IDENTICAL to reference
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 280, // Larger connection distance for more dramatic hover effect
          links: {
            opacity: 1, // Full opacity on hover
            color: "#ffffff" // Pure white connections for the hover effect too
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          quantity: 4 // Add 4 particles on click
        },
        remove: {
          quantity: 2
        }
      }
    },
    retina_detect: true,
    fullScreen: {
      enable: false
    },
    background: {
      color: "transparent",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  };

  // Choose config based on type
  const config = type === 'stars' ? starsConfig : networkConfig;

  return (
    <Particles
      id={`tsparticles-${type}`}
      init={particlesInit}
      loaded={particlesLoaded}
      options={config}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
