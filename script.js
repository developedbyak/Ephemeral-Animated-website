// loco
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

// loader
document.addEventListener("DOMContentLoaded", function () {
    const loadingElement = document.getElementById("loading");
    // const numberElement = document.getElementById("percentage");

    // Start the loader
    let currentNumber = 0;

    const intervalId = setInterval(() => {
        if (currentNumber < 100) {
            currentNumber++;
            // numberElement.textContent = currentNumber + "%";
        } else {
            clearInterval(intervalId);
            loadingElement.style.display = "none";
            showAnimations();
        }
    }, 10);
});

function showAnimations() {
    // gsap
    gsap.from(".nlink", {
        stagger: 0.2,
        y: 20,
        duration: 0.6,
        ease: Power3,
        opacity: 0,
    });

    Shery.mouseFollower({
        skew: false,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
    });

    Shery.textAnimate(".hero-headings h1", {
        style: 2,
        y: 10,
        duration: 2,
        delay: 0.3,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
    });

    gsap.from(".anim2", {
        y: 100,
        opacity: 0,
        ease: Expo,
        duration: 1,
        stagger: 0.2,
    });
}

Shery.imageEffect(".imgntext img", {
    style: 3,
    config: {
        noiseDetail: { value: 14.05, range: [0, 100] },
        distortionAmount: { value: 2.73, range: [0, 10] },
        scale: { value: 51.24, range: [0, 100] },
        speed: { value: 0.24, range: [0, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 0.6666666666666666 },
        gooey: { value: false },
        infiniteGooey: { value: false },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.1, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 0 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.002, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
    },
    debug: false,
});

Shery.imageEffect(".imgff img", {
    style: 6,
    config: {
        noiseDetail: { value: 14.05, range: [0, 100] },
        distortionAmount: { value: 2.73, range: [0, 10] },
        scale: { value: 51.24, range: [0, 100] },
        speed: { value: 0.24, range: [0, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 0.6666666666666666 },
        gooey: { value: false },
        infiniteGooey: { value: false },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.1, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 0 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.002, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
    },
    debug: false,
});
Shery.imageEffect(".imgff2 img", {
    style: 6,
    config: {
        noiseDetail: { value: 10.74, range: [0, 100] },
        distortionAmount: { value: 1.74, range: [0, 10] },
        scale: { value: 30.58, range: [0, 100] },
        speed: { value: 0.31, range: [0, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 0.6296229849678044 },
        gooey: { value: false },
        infiniteGooey: { value: false },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.1, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 0 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.002, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
    },
    debug: false,
});

Shery.imageEffect("#bimg", {
    style: 3,
    config: {
        uFrequencyX: { value: 12, range: [0, 100] },
        uFrequencyY: { value: 12, range: [0, 100] },
        uFrequencyZ: { value: 10, range: [0, 100] },
        geoVertex: { range: [1, 64], value: 43.17 },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 1.9754977191543701 },
        gooey: { value: true },
        infiniteGooey: { value: false },
        growSize: { value: 5.74, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.1, range: [1, 5] },
        scrollType: { value: 0 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.58, range: [0, 10] },
        metaball: { value: 0.78, range: [0, 2] },
        discard_threshold: { value: 0.72, range: [0, 1] },
        antialias_threshold: { value: 0.01, range: [0, 0.1] },
        noise_height: { value: 0.38, range: [0, 2] },
        noise_scale: { value: 15.7, range: [0, 100] },
    },
    debug: false,
    gooey: true,
});

gsap.from(".imgntext img", {
    y: 70,
    opacity: 0,
    duration: 2,
    ease: Expo,
});

document.querySelector("#future button").addEventListener("mouseover", () => {
    gsap.to("#future video", {
        opacity: 1,
        duration: 1,
        ease: Power4,
    });
    gsap.to("#ftext h1", {
        color: "#fff",
    });
});

document.querySelector("#future button").addEventListener("mouseleave", () => {
    gsap.to("#future video", {
        opacity: 0,
        duration: 0.6,
        ease: Power4,
    });
    gsap.to("#ftext h1", {
        color: "#1a1a1a",
    });
});
