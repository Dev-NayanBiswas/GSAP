## *GSAP Class-04*
***Day 38th, 8th August***
***
_Self explanation._
_Project plan is to create a custom cursor and a Hover effect on an Image, which will include see more tooltip look._

* _First of all I styled an element with clip-path css, which looks like much similar as mouse cursor, and positioned it Fixed now in JS i will move it._
* _As I need to move the custom cursor based on mouse cursor's x,y position so I need to get **(x , y)** values, in this case I added an addEventListener so called **mousemove** event on container div *(make sure the cursor html element is declared at the top of all components)*._
* _In event object I'm getting x and y axis values so I set the value._
    ```javascript 
    container.addEventListener("mousemove",function(e){
    gsap.to("#mouse__cursor",{
        x:e.x,
        y:e.y,
        duration:0.2,
        ease:"back.out"
        })
    })
    ```
* _In this part I added an eventListener, called mouseenter event in backgroundImage container and in gsap.to() I changed the custom cursor into a rounded shape and added text content "See more"._
  ```javascript
    bgContainer.addEventListener("mouseenter",(e)=>{
    mouseCursor.textContent="See more";
    gsap.to(mouseCursor,{
        scale:4,
        clipPath: "circle(50% at 50% 50%)",
        backgroundColor: "#ffffff7a",
        rotate:0
    })
    })
  ```
* _To get back the previous shape of my custom mouse cursor, in this part I added an addEventListener on backgroundImage so called "mouseleave" event and set the cursor clipPath to previous state._
  ```javascript
    bgContainer.addEventListener("mouseleave",(e)=>{
    mouseCursor.textContent="";
    gsap.to(mouseCursor,{
        scale:1,
        clipPath: "polygon(100% 0%, 75% 50%, 100% 100%, 0% 50%)",
        rotate:45,
        background: "#af0505",
        })
    })
  ```
* _There is a problem whenever I'm hovering on image, getting a glitching effect on changing cursor's shape, to get rid of it here is a overlay element set on imageContainer, which is transparent and positioned absolute in ImageContainer and z-index more then customCursor to avoid the main cursor and customCursor conflict(glitching effect)._
  ***
  [_Learn GSAP with Sheryians_](https://www.youtube.com/watch?v=9C03V1dXxOU&list=PLbtI3_MArDOnIIJxB6xFtpnhM0wTwz0x6)