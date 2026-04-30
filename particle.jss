particlesJS("particles-js", {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800
      }
    },

    color: {
      value: ["#00f7ff", "#7f5cff", "#00ff88"]
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },

    size: {
      value: 2,
      random: true,
      anim: {
        enable: false
      }
    },

    line_linked: {
      enable: true,
      distance: 140,
      color: "#00f7ff",
      opacity: 0.25,
      width: 1
    },

    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },

    modes: {
      grab: {
        distance: 160,
        line_linked: {
          opacity: 0.5
        }
      },

      repulse: {
        distance: 120
      },

      bubble: {
        distance: 200,
        size: 4,
        duration: 2,
        opacity: 0.8
      },

      push: {
        particles_nb: 4
      }
    }
  },

  retina_detect: true
});

