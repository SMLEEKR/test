window.addEventListener('load', fn());
function fn() {
    gsap.registerPlugin(ScrollTrigger);
    const target = document.querySelector('[data-scroll="target"]');
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: target,
            start: 'top top',
            end: '+=100%',
            scrub: true,
            pin: true,
            markers: true,
            pinSpacing: true,
        },
    });
    tl.fromTo(
        target,
        {
            scale: 0.5,
        },
        {
            scale: 1,
            ease: 'none',
        }
    );
}