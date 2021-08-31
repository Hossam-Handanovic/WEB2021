/*var nav = document.getElementById('nav');

window.onscroll = function() {

    if (window.pageYOffset > 100) {

        nav.style.position = "fixed";
        nav.style.top = 0;

    } else {
        // nav.style.position = "absolute";
        nav.style.position = 'relative'; //fixed
        nav.style.top = 100;

    }
}*/

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME to make scrolling animation*/
sr.reveal('.the_nav', {})
sr.reveal('.h2', {});
sr.reveal('.h22', {});
sr.reveal('.the_pdf', {});
sr.reveal('.the_hr', {});
sr.reveal('#the_line1', {});
sr.reveal('#the_line2', {});
sr.reveal('#the_line11', {});
sr.reveal('#the_line22', {});
sr.reveal('#looogo1', {});
sr.reveal('#looogo', {});
sr.reveal('#scrolldown', {});
sr.reveal('.vid1', {});
sr.reveal('.video-container', {});
sr.reveal('.footer', {});
sr.reveal('#p555', {});
sr.reveal('#cry', {});
sr.reveal('#task', {});




var slideIndex2 = 1;
showDivs(slideIndex2);

function plusDivs1(n) {
    showDivs(slideIndex2 += n);
}

function showDivs(n) {
    var i,
        x = document.getElementsByClassName("video-slide"),
        y = document.getElementsByTagName("video");

    if (n > x.length) {
        slideIndex2 = 1
    }

    if (n < 1) {
        slideIndex2 = x.length
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].pause();
    }

    x[slideIndex2 - 1].style.display = "block";

}





/*===================================Button UP and Down===============*/

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) { // Show backToTopButton
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
    } else { // Hide backToTopButton
        if (backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function() {
                backToTopButton.style.display = "none";
            }, 250);
        }
    }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};