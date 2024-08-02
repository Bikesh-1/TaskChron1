paceOptions = {
ajax: true,
document: true,
eventLag: false
};

Pace.on('done', function() {
$('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


$('#preloader').delay(1500).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));

TweenMax.from(".title", 2, {
     delay: 1.8,
          y: 10,
          opacity: 0,
          ease: Expo.easeInOut
    })
});

var t1 = gsap.timeline()
t1.from(".head img ,.head .button .btn1,.head .button .btn2",{    
    y:-30,
    duration:0.3,
    delay:2,
    opacity:0,
    stagger:0.4
})
