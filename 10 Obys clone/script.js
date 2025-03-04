// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

//   //multiple line splitting
//   var allh1 = document.querySelectorAll("#page2 h1");

//   allh1.forEach(function(ele){
//     var clutter = '';
//     var h1text = ele.textContent;
//     var splited = h1text.split("");
//     splited.forEach(function(e){
//       clutter += `<span>${e}</span>`;
//     })
//     ele.innerHTML = clutter;
//   })

// //single line split kia
// // var h1 = document.querySelector("#firsth1").textContent;
// // var splited = h1.split("");
// // var clutter = "";
// // splited.forEach(function (ele) {
//   //  clutter += `<span>${ele}</span>`;
// // });
// // document.querySelector("#firsth1").innerHTML = clutter;

//   gsap.to("#page2 h1 span", {
//     color: "#E3E3C4",
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: "#page2 h1",
//       scroller: "body",
//       markers: true,
//       start: "top 45%",
//       end: "top -20%",
//       scrub: 5,
//     },
//   });

gsap.from(".line h1", {
  y: 150,
  opacity: 0,
  stagger: 0.5,
  duration:0.6,
  delay:0.5
});
var h5timer = document.querySelector("#line1-part1 h5");
var grow = 0;
setInterval(function () {
  if (grow < 100) {
    h5timer.innerHTML = grow++;
  } else {
    h5timer.innerHTML = grow;
  }
}, 27);