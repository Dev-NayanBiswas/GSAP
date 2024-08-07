
// !! scrollTrigger. . . . . 
// gsap.from("#hello h1",{
//     opacity:0,
//     x:200,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#hello h1",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// });
// gsap.from("#hello h2",{
//     opacity:0,
//     x:-500,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#hello h2",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// })

// gsap.from("#page__1 .box__1",{
//     opacity:0,
//     scale:0,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page__1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"bottom 90%",
//         scrub:4,
//     }
// })

// !! scrollTrigger & scrub & pin on Text. . . . .
gsap.to("#GSAP #GSAP__heading", {
    transform:"translateX(-195%)",
    scrollTrigger:{
        trigger:"#GSAP",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})