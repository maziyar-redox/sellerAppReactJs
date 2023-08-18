import React from "react";
import anime from "animejs";

const InfinityAnimate = ({ classNameProp }) => {
    const mouseoverHandler = () => {
        const animation = document.getElementById("cont");
        animation.addEventListener("mouseenter", () => {
            anime({
                targets: '.st0',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 1500,
                delay: function(el, i) { return i * 250 },
                direction: 'alternate',
                loop: false
            });
        });
    };
    return (
        <>
            <svg onMouseEnter={() => mouseoverHandler()} className={classNameProp} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="68" width="68" xmlns="http://www.w3.org/2000/svg">
                <path id="st1" className="st0" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32m48-64s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32"></path>
            </svg>
        </>
    );
};

export default InfinityAnimate;