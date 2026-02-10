function move(dx,dy){
  let nx=player.x+dx,ny=player.y+dy;
  if(nx>=0&&ny>=0&&nx<SIZE&&ny<SIZE){
    player.x=nx; player.y=ny; savePlayer();
  }
}

function up(){ if(player.z<LEVELS-1){player.z++;savePlayer();} }
function down(){ if(player.z>0){player.z--;savePlayer();} }

function switchMode(){
  player.mode=(player.mode+1)%2;
  savePlayer();
  alert(player.mode===0?"Top-down Mode":"FPS Mode");
}
