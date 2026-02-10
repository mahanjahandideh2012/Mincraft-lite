const inventory=[1,1,2,2,3,3,4,5,5];
let selected=0;

function selectSlot(i){ selected=i; drawHotbar(); }
function currentBlock(){ return inventory[selected]; }

function drawHotbar(){
  const hotbar=document.getElementById("hotbar");
  hotbar.innerHTML="";
  inventory.forEach((b,i)=>{
    let d=document.createElement("div");
    d.className="slot"+(i===selected?" active":"");
    d.style.background=colors[b];
    d.onclick=()=>selectSlot(i);
    hotbar.appendChild(d);
  });
}
drawHotbar();
