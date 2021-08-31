tinymce.init({
    selector: "#mytextarea",
    height: 400,
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table paste emoticons"
    ],
    toolbar: "styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons",
    skin: "small",
    icons: "",
    setup: function(editor) {
        editor.on("keyup", function(e) {
            updateHTML(editor.getContent());
        });
        editor.on("change", function(e) {
            updateHTML(editor.getContent());
        });
    }
});

function updateHTML(content) {
    cmeditor.getDoc().setValue(content);
}

function updateEditor() {
    if (!tinymce.activeEditor.hasFocus()) {
        tinymce.activeEditor.setContent(cmeditor.getDoc().getValue());
    }
}

var HTMLContainer = document.querySelector(".HTMLContainer");

var cmeditor = CodeMirror(HTMLContainer, {
    lineNumbers: true,
    mode: "htmlmixed"
});

cmeditor.on("change", (editor) => {
    updateEditor();
});




/* Scroll Reveal */

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME to make scrolling animation*/
sr.reveal('.the_main', {})




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