window.onload = function () {
    function clock() {
        var date = new Date(),
            day = date.getDate(),
            month = date.getMonth(),
            monthArr = ["/01", "/02", "/03", "/04", "/05", "/06", "/07", "/08", "/09", "/10", "/11", "/12"],
            hour = date.getHours(),
            min = date.getMinutes(),
            seconds = date.getSeconds();


        if (day < 10) day = "0" + day;
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;
        if (seconds < 10) seconds = "0" + seconds;
        document.getElementById("date").innerHTML = day + " " + monthArr[month];
        document.getElementById("time").innerHTML = hour + ":" + min+ ":" + seconds;
    }

    var timer;

    function clockStart() {
        timer = setInterval(clock, 1000);
        clock();
    }

    clockStart();
}
$(document).ready(function () {
var btnUp = $('.up');
btnUp.hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        btnUp.fadeIn();
    }
    else {
        btnUp.fadeOut();
    }
})
btnUp.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500)
    return false;
});
    $(".slider").owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        navText: ["\t&#8592;","\t&#8594;"],
        loop: true
    });
    $('select').selectric();
    $('#calc').ionRangeSlider({
        grid: true,
        min: 50,
       max: 10000,
       from: 500,
        step: 100,
        grid_num: 16,
        grid_margin: false,
        onStart: function (data) {
            $
        }
    });
});

