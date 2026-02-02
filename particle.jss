
particlesJS("particles-js", {
  particles: {
    number: {
      value: 70,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#00f7ff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.4,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00f7ff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 120 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

