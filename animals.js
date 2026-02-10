let animals=JSON.parse(localStorage.getItem("animals"))||[
  {type:"sheep",x:2,y:2,z:0},{type:"cow",x:10,y:8,z:0}
];
const animalColor={sheep:"#f8fafc",cow:"#7c2d12"};

function saveAnimals(){ localStorage.setItem("animals",JSON.stringify(animals)); }

function updateAnimals(){
  animals.forEach(a=>{
    if(Math.random()<0.03){
      let dx=[0,0,-1,1][Math.floor(Math.random()*4)];
      let dy=[-1,1,0,0][Math.floor(Math.random()*4)];
      let nx=a.x+dx, ny=a.y+dy;
      if(nx>=0&&ny>=0&&nx<SIZE&&ny<SIZE) a.x=nx,a.y=ny;
    }
  });
  saveAnimals();
}

function drawAnimals(ctx){
  animals.forEach(a=>{
    if(a.z===player.z){
      ctx.fillStyle=animalColor[a.type];
      ctx.fillRect(a.x*BS+6,a.y*BS+6,BS-12,BS-12);
    }
  });
}
