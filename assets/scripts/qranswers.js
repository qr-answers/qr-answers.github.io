document.addEventListener("DOMContentLoaded", () => {
    var gotop = document.querySelector(".sticky-gotop")
    if (gotop) {
        gotop.addEventListener("click", function () {
            window.scrollTo(0,0);
        })
    }
});
