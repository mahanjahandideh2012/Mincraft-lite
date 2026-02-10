let player = JSON.parse(localStorage.getItem("player")) || {
  x:7,
  y:7,
  z:0,
  angle:0, // rotation
  mode:0   // 0: top-down, 1: FPS-like
};

function savePlayer(){ localStorage.setItem("player",JSON.stringify(player)); }
