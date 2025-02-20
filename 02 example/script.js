var t1 = gsap.timeline();
t1.from("#nav h3",{
    y:-50,
 opacity:0,
 delay:1,
 duration:1,
 stagger:0.2    
})

t1.from("#main h1",{
    x:-1000,
    opacity:0,
    delay:1,
    duration:0.8,
    stagger:0.5
})
t1.from("img",{
    X:100,
    opacity:0,
    delay:1,
    duration:0.8,
    rotate:50,
    stagger:0.5

})