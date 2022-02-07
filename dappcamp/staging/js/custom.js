$(function() {
    var header = $(".bg.color");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            header.addClass("active");
        } else {
            header.removeClass("active");
        }
    });
});