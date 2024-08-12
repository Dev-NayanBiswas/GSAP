const heading = document.querySelector("#heading");
const splitWords = heading.textContent.split(" ");

let wrappedHeadingText ="";
splitWords.forEach((word, index) =>{
    wrappedHeadingText+=`<span>${word}</span>`
})
heading.innerHTML=wrappedHeadingText

let scrollPosY="";
let imageOverlay1=document.querySelector('.overlay__one');
let imageOverlay2=document.querySelector('.overlay__two');
let imageOverlay3=document.querySelector('.overlay__three');
let imageOverlay4=document.querySelector('.overlay__four');
let slider = document.querySelector(".slider");
let extraOverlay = "imgOver";
let sliderMove = "slideMove";


function addClass(elements, classes){
    elements.classList.add(classes);
}

function removeClass(elements, classes){
    elements.classList.remove(classes);
}

window.addEventListener('scroll', function(){
    scrollPosY = window.scrollY;
    if(scrollPosY > 140){
        addClass(imageOverlay1,extraOverlay);
        addClass(imageOverlay2,extraOverlay);
        addClass(imageOverlay3,extraOverlay);
        addClass(imageOverlay4,extraOverlay);
    }else{
        removeClass(imageOverlay1,extraOverlay)
        removeClass(imageOverlay2,extraOverlay)
        removeClass(imageOverlay3,extraOverlay)
        removeClass(imageOverlay4,extraOverlay)
    }
})

window.addEventListener("scroll",function(){
    scrollPosY=window.scrollY;
    if(scrollPosY>180){
        addClass(slider,sliderMove);
    }
    else{
        removeClass(slider,sliderMove);
    }
})



