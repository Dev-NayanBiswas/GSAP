let initialPath = "M 20 100 Q 1000 100 1700 100";
let path = "M 20 100 Q 1000 100 1700 100";

let container = document.querySelector("#hLine");

container.addEventListener("mousemove",function(e){
    path = `M 20 100 Q ${e.x} ${e.y} 1700 100`;

    gsap.to("svg path", {
        attr:{d: path},
        duration:0.1,
        ease:"power3.out"
    });
})

container.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr:{d:initialPath},
        duration:1,
        ease:"elastic.out(1.2,0.2)",
    })
})

