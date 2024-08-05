paceOptions = {
    ajax: true,
    document: true,
    eventLag: false,
  };
  
  Pace.on("done", function () {
    $(".p")
      .delay(500)
      .animate({ top: "30%", opacity: "0" }, 3000, $.bez([0.19, 1, 0.22, 1]));
    $("#preloader")
      .delay(1500)
      .animate({ top: "-100%" }, 2000, $.bez([0.19, 1, 0.22, 1]));
  
    TweenMax.from(".title", 2, {
      delay: 1.8,
      y: 10,
      opacity: 0,
      ease: Expo.easeInOut,
    });
  });
  
  
  function initAnimations() {
    gsap.killTweensOf("*");
  
    if (window.matchMedia("(min-width: 1440px)").matches) {
      var timeline = gsap.timeline();
  
      timeline
        .from(".head h1, .head .button .btn1, .head .button .btn2", {
          y: -30,
          duration: 0.2,
          delay: 1.5,
          opacity: 0,
          stagger: 0.2,
        })
        .from(
          ".main .wlcm, .main .project, .main .grp .start",
          {
            x: -100,
            duration: 0.2,
            delay: 0.2,
            opacity: 0,
            stagger: 0.2,
          },
          "-=0.1"
        )
        .from(
          ".main .grp .homepageimg",
          {
            x: 100,
            duration: 0.2,
            delay: 0.1,
            opacity: 0,
            stagger: 0.2,
          },
          "-=0.1"
        );
  
      gsap.registerPlugin(ScrollTrigger);
      
  function page2Animation() {
      var t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".feature",
          start: "top 75%",
          end: "bottom 90%",
          scrub: 2,
        },
      });
    
      t2.from(".explore", {
        x: -50,
        opacity: 50,
        duration: 1,
        stagger: 0.5,
      });
    }
    
    function taskAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".task",
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        })
        .from(".task img", {
          x: -100,
          opacity: 0,
          duration: 1,
        })
        .from(
          ".task .txt",
          {
            x: 100,
            opacity: 0,
            duration: 1,
          },
          "-=1"
        );
    }
    
    function teamAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".team",
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        })
        .from(".team img", {
          x: -100,
          opacity: 0,
          duration: 1,
        })
        .from(
          ".team .text",
          {
            x: 100,
            opacity: 0,
            duration: 1,
          },
          "-=1"
        );
    }
    
    function timeAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".time",
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        })
        .from(".time img", {
          x: -100,
          opacity: 0,
          duration: 1,
        })
        .from(
          ".time .txt",
          {
            x: 100,
            opacity: 0,
            duration: 1,
          },
          "-=1"
        );
    }
    
    function calendarAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".calendar",
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        })
        .from(".calendar img", {
          x: -100,
          opacity: 0,
          duration: 1,
        })
        .from(
          ".calendar .txt",
          {
            x: 100,
            opacity: 0,
            duration: 1,
          },
          "-=1"
        );
    }
    
    function reportAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".report",
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        })
        .from(".report img", {
          x: -100,
          opacity: 0,
          duration: 1,
        })
        .from(
          ".report .txt",
          {
            x: 100,
            opacity: 0,
            duration: 1,
          },
          "-=1"
        );
    }
    
    page2Animation();
    taskAnimation();
    teamAnimation();
    timeAnimation();
    calendarAnimation();
    reportAnimation();
    }
  
    if (
      window.matchMedia("(min-width: 1024px) and (max-width: 1439px)").matches
    ) {    var timeline = gsap.timeline();
  
      timeline
        .from(".head h1, .head .button .btn1, .head .button .btn2", {
          y: -30,
          duration: 0.2,
          delay: 1.5,
          opacity: 0,
          stagger: 0.2,
        })
        .from(
          ".main .wlcm, .main .project, .main .grp .start",
          {
            x: -100,
            duration: 0.2,
            delay: 0.2,
            opacity: 0,
            stagger: 0.2,
          },
          "-=0.1"
        )
        .from(
          ".main .grp .homepageimg",
          {
            x: 100,
            duration: 0.2,
            delay: 0.1,
            opacity: 0,
            stagger: 0.2,
          },
          "-=0.1"
        );
  
      gsap.registerPlugin(ScrollTrigger);
      
  function page2Animation() {
      var t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".feature",
          start: "top 75%",
          end: "bottom 90%",
          scrub: 2,
        },
      });
    
      t2.from(".explore", {
        x: -50,
        opacity: 50,
        duration: 1,
        stagger: 0.5,
      });
    }
    
    function taskAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".task",
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        })
        .from(".task img", {
          x: -100,
          opacity: 0,
          duration: 1,
        })
        .from(
          ".task .txt",
          {
            x: 100,
            opacity: 0,
            duration: 1,
          },
          "-=1"
        );
    }
    
    function teamAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".team",
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        })
        .from(".team img", {
          x: -100,
          opacity: 0,
          duration: 1,
        })
        .from(
          ".team .text",
          {
            x: 100,
            opacity: 0,
            duration: 1,
          },
          "-=1"
        );
    }
    
    function timeAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".time",
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        })
        .from(".time img", {
          x: -100,
          opacity: 0,
          duration: 1,
        })
        .from(
          ".time .txt",
          {
            x: 100,
            opacity: 0,
            duration: 1,
          },
          "-=1"
        );
    }
    
    function calendarAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".calendar",
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        })
        .from(".calendar img", {
          x: -100,
          opacity: 0,
          duration: 1,
        })
        .from(
          ".calendar .txt",
          {
            x: 100,
            opacity: 0,
            duration: 1,
          },
          "-=1"
        );
    }
    
    function reportAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".report",
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        })
        .from(".report img", {
          x: -100,
          opacity: 0,
          duration: 1,
        })
        .from(
          ".report .txt",
          {
            x: 100,
            opacity: 0,
            duration: 1,
          },
          "-=1"
        );
    }
    
    page2Animation();
    taskAnimation();
    teamAnimation();
    timeAnimation();
    calendarAnimation();
    reportAnimation();
    }
  
    if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
      {    var timeline = gsap.timeline();
  
          timeline
            .from(".head h1, .head .button .btn1, .head .button .btn2", {
              y: -30,
              duration: 0.2,
              delay: 1.5,
              opacity: 0,
              stagger: 0.2,
            })
            .from(
              ".main .wlcm, .main .project, .main .grp .start",
              {
                x: -100,
                duration: 0.2,
                delay: 0.2,
                opacity: 0,
                stagger: 0.2,
              },
              "-=0.1"
            )
            .from(
              ".main .grp .homepageimg",
              {
                x: 100,
                duration: 0.2,
                delay: 0.1,
                opacity: 0,
                stagger: 0.2,
              },
              "-=0.1"
            );
      
          gsap.registerPlugin(ScrollTrigger);
          
      function page2Animation() {
          var t2 = gsap.timeline({
            scrollTrigger: {
              trigger: ".feature",
              start: "top 75%",
              end: "bottom 90%",
              scrub: 2,
            },
          });
        
          t2.from(".explore", {
            x: -50,
            opacity: 50,
            duration: 1,
            stagger: 0.5,
          });
        }
        
        function taskAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".task",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".task img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".task .txt",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        function teamAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".team",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".team img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".team .text",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        function timeAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".time",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".time img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".time .txt",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        function calendarAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".calendar",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".calendar img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".calendar .txt",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        function reportAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".report",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".report img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".report .txt",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        page2Animation();
        taskAnimation();
        teamAnimation();
        timeAnimation();
        calendarAnimation();
        reportAnimation();
        }
    }
  
    if (window.matchMedia("(min-width: 426px) and (max-width: 767px)").matches) {
      {    var timeline = gsap.timeline();
  
          timeline
            .from(".head h1, .head .button .btn1, .head .button .btn2", {
              y: -30,
              duration: 0.2,
              delay: 1.5,
              opacity: 0,
              stagger: 0.2,
            })
            .from(
              ".main .wlcm, .main .project, .main .grp .start",
              {
                x: -100,
                duration: 0.2,
                delay: 0.2,
                opacity: 0,
                stagger: 0.2,
              },
              "-=0.1"
            )
            .from(
              ".main .grp .homepageimg",
              {
                x: 100,
                duration: 0.2,
                delay: 0.1,
                opacity: 0,
                stagger: 0.2,
              },
              "-=0.1"
            );
      
          gsap.registerPlugin(ScrollTrigger);
          
      function page2Animation() {
          var t2 = gsap.timeline({
            scrollTrigger: {
              trigger: ".feature",
              start: "top 75%",
              end: "bottom 90%",
              scrub: 2,
            },
          });
        
          t2.from(".explore", {
            x: -50,
            opacity: 50,
            duration: 1,
            stagger: 0.5,
          });
        }
        
        function taskAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".task",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".task img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".task .txt",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        function teamAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".team",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".team img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".team .text",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        function timeAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".time",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".time img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".time .txt",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        function calendarAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".calendar",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".calendar img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".calendar .txt",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        function reportAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".report",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".report img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".report .txt",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        page2Animation();
        taskAnimation();
        teamAnimation();
        timeAnimation();
        calendarAnimation();
        reportAnimation();
        }
    }
  
    if (window.matchMedia("(max-width: 425px)").matches) {
      {    var timeline = gsap.timeline();
  
          timeline
            .from(".head h1, .head .button .btn1, .head .button .btn2", {
              y: -30,
              duration: 0.2,
              delay: 1.5,
              opacity: 0,
              stagger: 0.2,
            })
            .from(
              ".main .wlcm, .main .project, .main .grp .start",
              {
                x: -100,
                duration: 0.2,
                delay: 0.2,
                opacity: 0,
                stagger: 0.2,
              },
              "-=0.1"
            )
            .from(
              ".main .grp .homepageimg",
              {
                x: 100,
                duration: 0.2,
                delay: 0.1,
                opacity: 0,
                stagger: 0.2,
              },
              "-=0.1"
            );
      
          gsap.registerPlugin(ScrollTrigger);
          
      function page2Animation() {
          var t2 = gsap.timeline({
            scrollTrigger: {
              trigger: ".feature",
              start: "top 75%",
              end: "bottom 90%",
              scrub: 2,
            },
          });
        
          t2.from(".explore", {
            x: -50,
            opacity: 50,
            duration: 1,
            stagger: 0.5,
          });
        }
        
        function taskAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".task",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".task img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".task .txt",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        function teamAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".team",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".team img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".team .text",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        function timeAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".time",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".time img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".time .txt",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        function calendarAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".calendar",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".calendar img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".calendar .txt",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        function reportAnimation() {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".report",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            })
            .from(".report img", {
              x: -100,
              opacity: 0,
              duration: 1,
            })
            .from(
              ".report .txt",
              {
                x: 100,
                opacity: 0,
                duration: 1,
              },
              "-=1"
            );
        }
        
        page2Animation();
        taskAnimation();
        teamAnimation();
        timeAnimation();
        calendarAnimation();
        reportAnimation();
        }
    }
  }
  
  window.addEventListener("load", initAnimations);
  
  window.addEventListener("resize", initAnimations);
  