const openMenu = document.querySelector("#open");
const closeMenu = document.querySelector(".mobile__menuBar ion-icon");
const menuBar = document.querySelector(".mobile__menuBar");

let animate = gsap.timeline();


animate.to(menuBar,{
    left:0,
    duration:0.5,
})

animate.from("h4",{
    x: -150,
    opacity:0,
    duration:0.5,
    stagger: 0.3,
})

animate.pause();

openMenu.addEventListener("click",()=>{
    animate.play();
})

closeMenu.addEventListener("click",function(){
   animate.reverse();
})
