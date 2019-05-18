import {animateScroll as scroll, scroller} from "react-scroll/modules/index";

export function scrollToAboutUs() {
    scroller.scrollTo('scroll-to-about-us', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
    })
}

export function scrollToContact() {
    scroller.scrollTo('scroll-to-contact', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
    })
}

export function scrollToTop() {
    scroll.scrollToTop();
}