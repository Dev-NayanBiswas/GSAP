// {window.addEventListener("wheel",function(e){
//     if(e.deltaY>0){
//         gsapDirection(500)
//     }else{
//         gsapDirection(-100)
//     }
// })

// function gsapDirection(direction){
//     gsap.to(".marquee",{
//         transform:`translateX(${direction}%)`,
//         duration:5,
//         repeat:-1,
//         ease:"none"
//     })
// }

function addElements(){
    const container = document.querySelector("#marquee__container");
    for(let i = 0; i < 100; i++){
        let div = document.createElement("div");
        div.classList.add("marquee");
        div.innerHTML=`
        <h1>THRIVE BEYOND LIMITS</h1>
        <img src="./font/arrow-br.svg" alt="">
        `
        container.appendChild(div);
    }
    
}
addElements()

window.addEventListener("wheel",function(e){
    if(e.deltaY>0){        
gsap.to(".marquee",{
    transform:"translateX(-200%)",
    duration:2,
    repeat:-100,
    ease:"none"
})
gsap.to(".marquee img",{
    rotate:180
})
    }
    else{
        gsap.to(".marquee",{
    transform:"translateX(0%)",
    duration:2,
    repeat:-1,
    ease:"none"
})
gsap.to(".marquee img",{
    rotate:0
})
    }
})


// gsap.to(".marquee",{
//     transform:"translateX(-100%)",
//     delay:2,
//     duration:2,
//     repeat:-1,
//     ease:"none"
// })