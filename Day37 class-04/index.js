let container = document.querySelector("#container");
let mouseCursor = document.querySelector("#mouse__cursor");
let bgContainer = document.querySelector("#background__container");

container.addEventListener("mousemove",function(e){
    gsap.to("#mouse__cursor",{
        x:e.x,
        y:e.y,
        duration:0.2,
        ease:"back.out"
    })
})

bgContainer.addEventListener("mouseenter",(e)=>{
    mouseCursor.textContent="See more";
    gsap.to(mouseCursor,{
        scale:4,
        clipPath: "circle(50% at 50% 50%)",
        backgroundColor: "#ffffff7a",
        rotate:0
    })
})

bgContainer.addEventListener("mouseleave",(e)=>{
    mouseCursor.textContent="";
    gsap.to(mouseCursor,{
        scale:1,
        clipPath: "polygon(100% 0%, 75% 50%, 100% 100%, 0% 50%)",
        rotate:45,
        background: "#af0505",
    })
})
