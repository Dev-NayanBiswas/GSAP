## GSAP Class-03
***Day37, 7th August 2024***
***
1. _what is ***SVG***?_
   * _s = scalable, v = vector, g = graphics._
  2. _Two types of Curves. . ._
      *  _Quadratic curves (simple)_ 
      *  _Cubic curves (complex)_
  3. _Quadratic Curves are simple, here in it's path "d" attribute is for direction, consists of 2elements M and Q, explaining ***M 20 100 Q 1000 100 1700 100***._
       * _**M** stands for ***Move to*** 20px in x-axis and 100px to y-axis._  
     * _**Q** stands for ***Quadratic Curves*** 1000px in x-axis and 100px in y-axis and 1700px in x-axis and 100px in y-axis._  
  4. _in JS declared 2static values of **d**, initial value and a value we need to change using **GSAP** so that we can move the Horizontal line.steps are like.._
     *  _in first step we target the container of SVG file so that we can move the Hline on mouse move._
     *  _as planned added a listener event on container based on mousemove._
     *  _then get the **(event.x)** value and set it on changed value._
     *  _then set the changed value in path attribute using `gsap.to("path",{attr:{d:changedValue}})`._
     *  _duration and **ease:"power2.out"** added cool animation effects here._
  5. _in this step added a event listener to container again which will response on mouseleave cause I need to place the string back to it's previous position (initialState)._
        * _so set the path value in ***gsap.to("path",{attr:{d:initialValue}})*** duration and ***ease:"elastic.out(1.2,0.2)"*** added an elastic look when mouse leave the body._
  ###### that's all
  ***


  [_Learn GSAP with Sheryians_](https://www.youtube.com/watch?v=9C03V1dXxOU&list=PLbtI3_MArDOnIIJxB6xFtpnhM0wTwz0x6)