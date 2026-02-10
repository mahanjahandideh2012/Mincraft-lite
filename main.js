const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");

let time=0;

canvas.onclick=e=>{
  let x=Math.floor(e.offsetX/BS);
  let y=Math.floor(e.offsetY/BS);
  world[x][y][player.z]=currentBlock();
  saveWorld();
};
canvas.oncontextmenu=e=>{
  e.preventDefault();
  let x=Math.floor(e.offsetX/BS);
  let y=Math.floor(e.offsetY/BS);
  world[x][y][player.z]=0;
  saveWorld();
};

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  if(player.mode===0){ // top-down
    for(let x=0;x<SIZE;x++)
      for(let y=0;y<SIZE;y++){
        ctx.fillStyle=colors[world[x][y][player.z]];
        ctx.fillRect(x*BS,y*BS,BS-1,BS-1);
      }
  } else { // FPS-like (2.5D)
    let startX=player.x-5, startY=player.y-5;
    for(let dx=0;dx<10;dx++)
      for(let dy=0;dy<10;dy++){
        let x=startX+dx, y=startY+dy;
        if(x>=0&&y>=0&&x<SIZE&&y<SIZE){
          ctx.fillStyle=colors[world[x][y][player.z]];
          ctx.fillRect(dx*BS,dy*BS,BS-1,BS-1);
        }
      }
  }

  drawAnimals(ctx);

  ctx.fillStyle="cyan";
  let px=player.mode===0?player.x*BS+4:5*BS+4;
  let py=player.mode===0?player.y*BS+4:5*BS+4;
  ctx.fillRect(px,py,12,12);

  time+=0.01;
  let night=Math.abs(Math.sin(time));
  ctx.fillStyle=`rgba(0,0,0,${night*0.5})`;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  document.getElementById("time").innerText=night>0.5?"🌙 Night":"☀ Day";
  document.getElementById("z").innerText="Z:"+player.z;

  updateAnimals();
  requestAnimationFrame(draw);
}
draw();
