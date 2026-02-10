const SIZE = 15;
const LEVELS = 15;
const BS = 25;

const colors = {
  0:"#020617",
  1:"#22c55e", // grass
  2:"#a16207", // dirt
  3:"#52525b", // stone
  4:"#facc15", // wood
  5:"#ef4444"  // brick
};

let world = JSON.parse(localStorage.getItem("world")) ||
Array(SIZE).fill().map(()=>Array(SIZE).fill().map(()=>Array(LEVELS).fill(0)));

function saveWorld(){ localStorage.setItem("world",JSON.stringify(world)); }
