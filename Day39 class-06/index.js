function textSplitter(){
    let heading = document.getElementById("txt");
let allText = heading.innerText.split("");
let halfLength = allText.length/2;

let joinLetters = "";

allText.forEach((txt,index)=>{
   if(index<halfLength){
    joinLetters+=`<span class="alpha">${txt}</span>`;
   } else{
    joinLetters+=`<span class="gama">${txt}</span>`;
   }
})
heading.innerHTML=joinLetters
console.log(joinLetters);
}

textSplitter();

gsap.from(".alpha",{
    y:100,
    opacity:0,
    duration:0.5,
    stagger:0.3,
    scrollTrigger:{
        trigger:"h1",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"bottom 50%",
        scrub:5,
        pin:true
    }
})
gsap.from(".gama",{
    y:100,
    opacity:0,
    duration:0.5,
    stagger:-0.3,
    scrollTrigger:{
        trigger:"h1",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"bottom 50%",
        scrub:5,
        pin:true
    }
})