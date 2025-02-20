gsap.from("#page1 #circle",{
    x:-500,
    scale:0,
    delay:1,
    duration:1,
    rotate:360
})
gsap.from("#page2 #circle",{
    x:500,
    scale:0,
    delay:1,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        srub:5
    }
})