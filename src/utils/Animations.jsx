// utils/animations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart pause resume pause',
      start: 'top 85%',
      ...scrollProps
    }
  });
};

export const animateWithGsapTimeline = (timeline, target, animationProps, scrollProps) => {
  timeline.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart pause resume pause',
      start: 'top 85%',
      ...scrollProps
    }
  });
};