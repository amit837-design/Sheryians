Shery.imageEffect("#back", {
    style: 5,
    config: {
        a: { value: 2, range: [0, 30] },
        b: { value: 0.75, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 1.9989452120624012 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        onMouse: { value: 1 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.12, range: [0, 2], _gsap: { id: 3 } },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.03, range: [0, 0.1] },
        noise_height: { value: 0.37, range: [0, 2] },
        noise_scale: { value: 15, range: [0, 100] }
    }, gooey: true
});


//h1 effects
var h1s = document.querySelectorAll("h1");
var index = 0;

document.querySelector("#main").addEventListener("click", function(){
    gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function() {
            gsap.set(this.targets()[0], {
            top: "100%"});
        }
    });

    index = (index === h1s.length - 1) ? 0 : index + 1;

    gsap.to(h1s[index], {
        delay: 0.2,
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1
    });
});





//click anywhere effect
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    const text = textElement.textContent;
    textElement.textContent = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        if (char === ' ') {
            span.innerHTML = '&nbsp;';
        } else {
            span.textContent = char;
        }
        textElement.appendChild(span);
    });

    const spans = textElement.querySelectorAll('span');

    function startAnimation() {
        spans.forEach(span => {
            span.style.opacity = 0;
            span.style.transform = 'translateY(100px)';
            span.style.transition = 'none';
        });

        textElement.offsetHeight;

        spans.forEach((span, index) => {
            setTimeout(() => {
                span.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                span.style.opacity = 1;
                span.style.transform = 'translateY(0)';
            }, index * (1000 / spans.length));
        });
    }

    startAnimation();

    document.getElementById('main').addEventListener('click', startAnimation);
});
