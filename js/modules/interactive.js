export default function initInteractive(){const e={id_1:{price:"Przedpokój",status:"available"},id_2:{price:"Kuchnia",status:"reserved"},id_3:{price:"Pokój",status:"available"},id_4:{price:"Pokój goscinny",status:"available"},id_5:{price:"Pokój",status:"reserved"},id_6:{price:"Łazienka",status:"service"},id_7:{price:"Aquarium",status:"service"},messages:{available:"Remont zakończony",reserved:"Remont zaplanowany",service:"Remont w toku"}},t=document.getElementById("my-map"),a=t.querySelectorAll(".building"),i=t.querySelector(".info"),r=[];a.forEach((t=>{const a=t.getAttribute("data-building-id"),o=e[`id_${a}`]?.status,n=e[`id_${a}`]?.price;t.classList.add(o);const s=new LeaderLine(LeaderLine.pointAnchor(t,{x:"50%",y:"50%"}),LeaderLine.pointAnchor(i,{x:"50%",y:0}),{startLabel:LeaderLine.captionLabel(`${n}`,{fontFamily:"Arial",fontWeight:400,offset:[-30,-50],outlineColor:"#555"}),color:"#fff",startPlug:"arrow2",dash:{animation:!0},endPlug:"behind",endSocket:"top",hide:!0,gradient:!0,startPlugColor:"#fff",endPlugColor:"#bdbdbd",startPlug:"square",endPlug:"arrow1"});r.push(s),t.addEventListener("mouseover",(()=>{s.show(),i.textContent=e.messages[o]})),t.addEventListener("mouseout",(()=>{s.hide()}))}))}