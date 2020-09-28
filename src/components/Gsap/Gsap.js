import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gsap = {
  settings: {
    target: '.gsap',
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if ($(this.settings.target).length > 0) {
      this.catchDOM(this.settings);
      this.addGsap();
    }
  },
  catchDOM(settings) {
    const target = $(settings.target);
    this.$target = {
      root: target,
    };
  },
  addGsap() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".gsap__title", {
      yPercent: -70,
    });
    gsap.from(".gsap__svg.-first", {
      scrollTrigger: {
        trigger: '.gsap__item.-first',
        start: "bottom bottom",
        end: "+=100%",
        scrub: true,
      },
      duration: 2,
      xPercent: -40,
    });
    gsap.from(".gsap__text.-first", {
      scrollTrigger: {
        trigger: '.gsap__item.-first',
        start: "bottom bottom",
        end: "+=100%",
        scrub: true,
      },
      duration: 2,
      xPercent: 40,
    });
    gsap.from(".gsap__svg.-second", {
      scrollTrigger: {
        trigger: '.gsap__item.-second',
        start: "bottom bottom",
        end: "+=100%",
        scrub: true,
      },
      duration: 2,
      xPercent: -40,
    });
    gsap.from(".gsap__text.-second", {
      scrollTrigger: {
        trigger: '.gsap__item.-second',
        start: "bottom bottom",
        end: "+=100%",
        scrub: true,
      },
      duration: 2,
      xPercent: 40,
    });
    gsap.from(".gsap__svg.-third", {
      scrollTrigger: {
        trigger: '.gsap__item.-third',
        start: "bottom bottom",
        end: "+=100%",
        scrub: true,
      },
      duration: 2,
      xPercent: -40,
    });
    gsap.from(".gsap__text.-third", {
      scrollTrigger: {
        trigger: '.gsap__item.-third',
        start: "bottom bottom",
        end: "+=100%",
        scrub: true,
      },
      duration: 2,
      xPercent: 40,
    });
    gsap.from(".gsap__svg.-fourth", {
      scrollTrigger: {
        trigger: '.gsap__item.-fourth',
        start: "bottom bottom",
        end: "+=100%",
        scrub: true,
      },
      duration: 2,
      xPercent: -40,
    });
    gsap.from(".gsap__text.-fourth", {
      scrollTrigger: {
        trigger: '.gsap__item.-fourth',
        start: "bottom bottom",
        end: "+=100%",
        scrub: true,
      },
      duration: 2,
      xPercent: 40,
    });
    gsap.from(".gsap__svg.-fifth", {
      scrollTrigger: {
        trigger: '.gsap__item.-fifth',
        start: "bottom bottom",
        end: "+=100%",
        scrub: true,
      },
      duration: 2,
      xPercent: -40,
    });
    gsap.from(".gsap__text.-fifth", {
      scrollTrigger: {
        trigger: '.gsap__item.-fifth',
        start: "bottom bottom",
        end: "+=100%",
        scrub: true,
      },
      duration: 2,
      xPercent: 40,
    });
    gsap.from(".gsap__svg.-sixth", {
      scrollTrigger: {
        trigger: '.gsap__item.-sixth',
        start: "top bottom",
        end: "+=100%",
        scrub: true,
      },
      duration: 2,
      xPercent: -40,
    });
    gsap.from(".gsap__text.-sixth", {
      scrollTrigger: {
        trigger: '.gsap__item.-sixth',
        start: "top bottom",
        end: "+=100%",
        scrub: true,
      },
      duration: 2,
      xPercent: 40,
    });
    let colorArray = ['#B5EAD7', '#C7CEEA', '#FB5607', '#FFDAC1', ' #E0BBE4', '#FFDFD3', '#FFFFD8', '#E0FEFE', '#D3EEFF'];
    let currentColor = gsap.utils.random(colorArray);
    let color = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });
    color.to("#shape", {
      fill: gsap.utils.random(colorArray),
      delay: 3,
    });
    color.to("#shape", {
      fill: gsap.utils.random(colorArray),
      rotate: 180,
      y: 2000,
      x: 1600,
      delay: 3,
    });
    color.to("#shape", {
      fill: gsap.utils.random(colorArray),
      delay: 3,
    });

  }
  
};
export default Gsap;