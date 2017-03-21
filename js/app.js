var partJson = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 520
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": false,
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "retina_detect": true
}
var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(partJson));

var uri = "https://vzaffalon.github.io/assets/particles.json";

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js',uri, function() {
  console.log('callback - particles.js config loaded');
});
