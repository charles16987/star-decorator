window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
  
    if (window.scrollY > 25) {
      if (header) {
        header.classList.add('fixed-top');
      }
    } else {
      if (header) {
        header.classList.remove('fixed-top');
      }
    }
  });



//   

document.addEventListener("DOMContentLoaded", function () {
    var mobileBtn = document.querySelector(".menu_icon");
    var sideMenu = document.querySelector(".side-menu");
    var sideMenuCloseBtn = document.querySelector(".side-menu-close-btn img");

    // Check if elements exist before adding event listeners
    if (mobileBtn && sideMenu) {
        mobileBtn.addEventListener("click", () => {
            sideMenu.classList.add("active");
            // document.body.style.position = "fixed";
            // document.body.style.width = "100%";
        });
    }

    if (sideMenuCloseBtn) {
        sideMenuCloseBtn.addEventListener("click", () => {
            sideMenu.classList.remove("active");
        });
    }

    document.addEventListener("click", (event) => {
        if (sideMenu && mobileBtn && !sideMenu.contains(event.target) && !mobileBtn.contains(event.target)) {
            sideMenu.classList.remove("active");
            // document.body.style.position = "relative";
        }
    });

    document.querySelectorAll(".mobile-menu > ul > li > a").forEach((item) => {
        item.addEventListener("click", function (event) {
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains("submenu")) {
                const isOpen = submenu.style.display === "block";

                if (!isOpen) {
                    event.preventDefault();
                    document.querySelectorAll(".mobile-menu .submenu").forEach((sub) => {
                        sub.style.display = "none";
                    });
                    submenu.style.display = "block";
                }
            }
        });
    });
});


function initTicker(wrapperSelector, direction = "left", speed = 150) {
    var $tickerWrapper = $(wrapperSelector);
    var $list = $tickerWrapper.find("ul.list");
    var $clonedList = $list.clone();
    var listWidth = 10;

    $list.find("li").each(function (i) {
        listWidth += $(this).outerWidth(true);
    });

    $list.add($clonedList).css({
        "width" : listWidth + "px"
    });

    $clonedList.addClass("cloned").appendTo($tickerWrapper);

    var infinite = gsap.timeline({ repeat: -1, paused: true });

    if(direction === "left") {
        infinite
          .fromTo($list, speed, {x:0}, {x: -listWidth, ease: "none"}, 0)
          .fromTo($clonedList, speed, {x:listWidth}, {x:0, ease: "none"}, 0);
    } else {
        infinite
          .fromTo($list, speed, {x:0}, {x: listWidth, ease: "none"}, 0)
          .fromTo($clonedList, speed, {x:-listWidth}, {x:0, ease: "none"}, 0);
    }

    infinite.play();

    $tickerWrapper.on("mouseenter", function(){
        infinite.pause();
    }).on("mouseleave", function(){
        infinite.play();
    });
}

// Init two tickers
initTicker(".ticker-left", "left", 150);
initTicker(".ticker-right", "right", 150);




  // gallery css


  // gsap banner animation

     const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

  // Left image (banner-1)
  tl.from(".banner-1-img img", { 
    x: -100, 
    opacity: 0, 
    duration: 1 
  });

  // Right side images
  tl.from(".banner-2-img img", { 
    x: 100, 
    opacity: 0, 
    duration: 1 
  }, "-=0.8");

  tl.from(".banner-3-img img", { 
    x: 120, 
    opacity: 0, 
    duration: 1 
  }, "-=0.6");

  // Title text animation (words slide up)
  tl.from(".title-first-word", { 
    y: 50, 
    opacity: 0, 
    duration: 0.8 
  }, "-=0.5");

  tl.from(".title-sec-word", { 
    y: 50, 
    opacity: 0, 
    duration: 0.8 
  }, "-=0.6");

  // Decorative patterns (rings + doves fade in with scale)
  tl.from(".banner-patter-1", { 
    scale: 0.5, 
    opacity: 0, 
    duration: 0.8 
  }, "-=0.5");

  tl.from(".banner-patter-2", { 
    scale: 0.5, 
    opacity: 0, 
    duration: 0.8 
  }, "-=0.7");
   // Wave loop effect after entrance
  gsap.to(".banner-patter-1", {
    y: 15,              // move up and down
    rotation: 5,        // slight rotation for wave effect
    repeat: -1,         // infinite loop
    yoyo: true,         // back and forth
    ease: "sine.inOut",
    duration: 2
  });

  gsap.to(".banner-patter-2", {
    y: -15,             // opposite direction for variation
    rotation: -5,       // opposite tilt
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    duration: 2.5
  });


  // banner bottom content gsap

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".banner-bottom .card-main", {
    y: 100,                // slide up
    opacity: 0,            // fade in
    duration: 1,           // each card animation time
    stagger: 0.3,          // delay between cards
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".banner-bottom",
      start: "top center",  
      // play on enter, reverse when scrolling back
    }
  });

  // contact animation

    gsap.registerPlugin(ScrollTrigger);

  // Animate heading
  gsap.from("#contact .title-sub, #contact h2", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#contact",
      start: "top center",
    }
  });

  // Animate form + contact details
  gsap.from("#contact .form-card, #contact .contact_details", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#contact",
      start: "top center+=100",
    }
  });

  // Animate each input field
  gsap.from("#contact input, #contact textarea, #contact button", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#contact .form-card",
      start: "top center+=100",
    }
  });

  // gallery animation

    gsap.from("#gallery .title-sub, #gallery h2", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#gallery",
      start: "top center",
    }
  });

  // about us animation

    gsap.from("#about .about-us-img", {
    x: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top center+=100",
    }
  });

  gsap.from("#about .about-us-text-content span, #about .about-us-text-content h2, #about .about-us-text-content p", {
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#about",
      start: "top center+=100",
    }
  });

  // our service gsap animation

    gsap.registerPlugin(ScrollTrigger);

  // Service Section Animation
  gsap.from(".service .title-sub, .service h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".service",
      start: "top 80%",
    }
  });

  // Service Cards Animation
  gsap.from(".service .s-card", {
    opacity: 0,
    y: 60,
    scale: 0.9,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".service .row.justify-content-center",
      start: "top 85%",
    }
  });