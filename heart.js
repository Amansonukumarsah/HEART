const bodye1=document.querySelector('body');
bodye1.addEventListener('mousemove',(event)=>{
const opx=event.offsetX;
const opy =event.offsetY;
const span1=document.createElement('span');
span1.style.left=opx+'px';
span1.style.top=opy+'px';
const size=Math.random()*100;
span1.style.width=size+'px';
span1.style.height=size+'px';
bodye1.appendChild(span1);
setTimeout(()=>{
    span1.remove();
},3000)
})