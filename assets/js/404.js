// If JavaScript is disabled
document.ready = function() {
    $("#text").hide();
};
// Main animation
window.onload = function() {
    $("#tux").delay(1000).animate({height: "55px"}, 1000);
    $("#text").delay(2000).fadeIn("slow");
    $("#paw").delay(2050).fadeIn(800, "linear");
};
