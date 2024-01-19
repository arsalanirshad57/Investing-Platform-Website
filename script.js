// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var tl = gsap.timeline()
// function Lodder() {
//     var a = 0;
//     setInterval(() => {
//         a = a + Math.floor(Math.random() * 20)
//         if (a < 100) {
//             document.querySelector("#lodderh1").innerHTML = a + "%"
//             console.log(a)
//         }
//         else {
//             a = 100
//             document.querySelector("#lodderh1").innerHTML = a + "%"
//         }
//     }, 100);
// }
// Lodder()
// tl.to("#lodder", {
//     y: -1000,
//     duration: 3,
//     delay: 1,
// })
// tl.to("#lodder h1", {
//     delay: 1,
//     onStart: Lodder(),
// })
tl.from(".logo, .nav-link, #btn-nav", {
    y: -100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    delay: -3.3,
})
tl.from(".hero-sec-img", {
    // y:150,
    scale: 0,
    opacity: 0,
    duration: 0.5,
})
tl.from(".hero-section-arrow", {
    x: 150,
    scale: 0,
    opacity: 0,
    duration: 0.5,
})
tl.from(".hero-sec-left", {
    x: -150,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})
tl.from(".hero-sec-right", {
    x: 150,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})
gsap.from(".sec-2 .sec2-img", {
    scale: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: ".sec-2 .sec2-img",
        scroller: "body",
        markers : true,
        start: "top 80%",
        end: "top 50%",
        scrub: 0.5
    }
})

