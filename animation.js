const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // number of dots on the screen
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: { value: "#2f307f" },
    opacity: {
      value: 0.9,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 2,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#7042ff",
      opacity: 0.3,
      width: 1.7,
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "repulse" },
    },
    modes: {
      repulse: { distance: 150, duration: 0.5 },
    },
  },
  retina_detect: true,
});

// make border of big box go wavy and stuff
// get by class: box_round_corners

async function rainbowColorTitleLoop() {
  // await sleep(200); // wait for page load
  var R = 255;
  var G = 0;
  var B = 0;

  var title = document.getElementsByClassName("box_main_title")[0];
  console.log(title);
}

// rainbowColorTitleLoop();
