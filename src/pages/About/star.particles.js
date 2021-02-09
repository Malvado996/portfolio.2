const stars = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 500,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#E2C044"]
      },
      shape: {
        type: "star"
      },
      opacity: {
        value: 1
      },
      size: {
        value: 4,
        random: {
          enable: true,
          minimumValue: 1
        }
      },
      line_linked: {
        enable: false
        },
      move: {
        size: true,
        enable: true,
        speed: 0.25,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out"
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        },
        // trail: {
        //   enable: true,
        //   length: 10,
        //   fillColor: "#E2C044"
        // },
        warp: true
      }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onclick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          "enable": false,
          "mode": "attract",
          "parallax": {
            "enable": true,
            "force": 20,
            "smooth": 20
          }
        },
        resize: true,
        
      },
      modes: {
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true,
    absorbers: {
      orbits: true,
      destroy: true,
      opacity: 0,
      color: "#000",
      size: {
        value: 1,
        limit: 10,
        random: false,
        density: 50
      },
      position: {
        x: 50,
        y: 50
      }
    },
    // background: {
    //   color: "#222"
    // }
}

export default stars