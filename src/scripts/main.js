// Adapted from SnapSVG's demo page: http://snapsvg.io/assets/demos/snap-mascot/crocodile-1.html
//var Snap = require('snapsvg-cjs');
//var crocodileUrl = require('../assets/crocodile.svg');

//require('../styles/main.css');

Snap.load('/src/assets/crocodile.svg', function (croc) {
  document.querySelector('#crocodile').appendChild(croc.node);

  var head = croc.select("#upper-head"),
    jaw = croc.select("#upper-jaw"),
    symbol = croc.select("#symbol"),
    isOpen = true,
    timer;

  var pivots = [
    [44, 147],
    [92, 126]
  ];

  function close() {
    isOpen = false;
    clearTimeout(timer);

    head.animate({
      transform: "r" + [8, pivots[0]]
    }, 500, mina.backin);

    jaw.animate({
      transform: "r" + [37, pivots[1]]
    }, 500, mina.backin);

    timer = setTimeout(function () {
      symbol.animate({
        transform: "t-70,40r40"
      }, 100);
    }, 400);
  }

  function open() {
    isOpen = true;
    clearTimeout(timer);

    head.animate({
      transform: "r" + [0, pivots[0]]
    }, 700, mina.elastic);

    jaw.animate({
      transform: "r" + [0, pivots[1]]
    }, 700, mina.elastic);

    symbol.animate({
      transform: "t0,0r0"
    }, 500, mina.elastic);
  }

  timer = setTimeout(close, 50);

  croc.select('*').click(function() {
    isOpen ? close() : open()
  });
})
