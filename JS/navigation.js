/* Open when someone clicks on the span element */
$('body').on('click', '.openBtn', function() {
    document.getElementById("myNav").style.width = "100%";
});

/* Close when someone clicks on the "x" symbol inside the overlay */
$('body').on('click', '.closeBtn', function() {
    document.getElementById("myNav").style.width = "0%";
});