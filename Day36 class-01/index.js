// !!Text here.....
// gsap.from("h1",{
//     y:100,
//     color:"yellow",
//     opacity:0,
//     duration:2,
//     stagger:1,
// })






//!! Boxes Here
// gsap.to(".box__1", {
//     x:1200,
//     delay:3,
//     duration:2,
//     borderRadius:"50%",
//     backgroundColor:"green",
// });

// gsap.from(".box__2",{
//     x:1000,
//     delay:1,
//     duration:2,
//     backgroundColor:"blue",
//     borderRadius:"100%"
// });
// gsap.to(".box__1",{
//     x:1800,
//     yoyo:"true",
//     repeat:-1,
//     rotate:360,
//     duration:3,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//      repeat:2
// })

let time_line = gsap.timeline();

time_line.from("#logo",{
    y:-80,
    duration:2,
    opacity:0,
})

time_line.from(".menu_list_container li",{
    y:-20,
    duration:1,
    opacity:0,
    stagger:0.3,
    color:"red",
})
time_line.from(".quote",{
    opacity:0,
    scale:0.1,
    duration:0.7
})
time_line.to(".box__1",{
    x:1000,
    rotate:360,
    duration:2,
    backgroundColor:"yellow",
})

time_line.to(".box__2",{
    x:1000,
    duration:3,
    rotate:180,
    backgroundColor:"green",
})

time_line.to(".box__3",{
    x:1000,
    duration:5,
    rotate:360,
    backgroundColor:"blue",
    clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
})

