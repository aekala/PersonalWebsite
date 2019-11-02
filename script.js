$(document).ready(function() {
    $(".carousel-control-prev").click(function() {
        $("#carousel").carousel("prev");
    });
    
    $(".carousel-control-next").click(function() {
        $("#carousel").carousel("next");
    });
});


$(function () {
    $('[data-toggle="popover"]').popover()
});

$(document).keydown(function(e) {       // move carousel on arrow key input
    switch(e.which) {
        case 37: // left arrow key
            $("#carousel").carousel("prev");
        break;

        case 39: // right
            $("#carousel").carousel("next");
        break;


        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});