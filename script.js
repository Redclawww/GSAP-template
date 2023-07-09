const tl = gsap.timeline()

tl.from("#nav img,#nav-part-2,#nav-part-3",{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.2
})

tl.from("#main>h1",{
    y:100,
    duration:1,
    opacity:0,
    stagger:.2
})

tl.from("#main>img",{
    scale:0,
    stagger:.2,
})

tl.from("#main>h5",{
    scale:0,
    opacity:0,
})

tl.to("#main>h5",{
    y:-50,
    repeat:-1,
    duration:.7,
    yoyo:true

})