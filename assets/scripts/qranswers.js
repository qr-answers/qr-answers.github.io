document.addEventListener("DOMContentLoaded", () => {
    var details = document.querySelector("summary")
    console.log(details);

    details.addEventListener("click", function () {
        console.log('toggle');
    })
});
