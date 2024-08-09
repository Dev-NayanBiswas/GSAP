## GSAP Class-01
**_Day36 6th August 2024_**
***
1. What is GSAP?
   * ***GSAP*** is Green Sock Animation Platform it's an animation library based on JS,
2. _**gsap.from/to()**.._
   * it's a built in function, which takes 2 arguments ***"tagName, .className, #IDname"***, as we use in CSS, and second one prefers an object, key value pairs as like as CSS properties but in camel case like JS and JSX. 
   * ***from*** executes the animation backward to forward state,
   * ***to*** executes to forward,
  

3. **x:** for x axis value,
4. **y** as following in y axis,
5. ***timeline`let animate = gsap.timeline()`***
   * this timeline function is to animate elements asynchronously... like
        _`animate.from("h1",{})` here h1 will execute at first place..._  
        _`animate.from("h2",{})` h2 will execute at the end..._  
6. ***stagger*** _animate same type elements one after another serial wise, it takes seconds as value._
7. ***repeat:-1***_it means animation will repeat infinitely and for 2 it will execute 3times, first execution will be by default and rest executions will following the value of repeat value._
8. ***yoyoy:true/false*** _it plays animation in loop._
   ****
   [_Learn GSAP with Sheryians_](https://www.youtube.com/watch?v=9C03V1dXxOU&list=PLbtI3_MArDOnIIJxB6xFtpnhM0wTwz0x6)

