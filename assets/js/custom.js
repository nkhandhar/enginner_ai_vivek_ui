$(document).ready(function () {

    // on click of down arrow move to second section
    $(".scroll-down").click(function () {
        $('html, body').animate({
            scrollTop: $("#secondSection").offset().top
        }, 1000);
    });
    // on click of down arrow move to second section
});

// section scroll
function scrollThere(targetElement, speed) {
    $('html, body').stop().animate({
        scrollTop: targetElement.offset().top
    },
        speed,
        'linear'
    );
}
$(window).on('mousewheel', function (e) {
    var div1y = $('#firstSection').offset().top,
        div2y = $('#secondSection').offset().top,
        div3y = $('#thirdSection').offset().top,
        lastScrollTop = $(this).scrollTop(),
        scrollDirection,
        targetUp,
        targetDown,
        targetElement;

    if (e.deltaY > 0) {
        scrollDirection = 'up';
    } else if (e.deltaY <= 0) {
        scrollDirection = 'down';
    }
    e.preventDefault();
    if (lastScrollTop === div1y) {
        targetUp = $('#firstSection');
        targetDown = $('#secondSection');
    } else if (lastScrollTop === div2y) {
        targetUp = $('#firstSection');
        targetDown = $('#thirdSection');
    } else if (lastScrollTop === div3y) {
        targetUp = $('#secondSection');
        targetDown = $('#thirdSection');
    } else if (lastScrollTop < div2y) {
        targetUp = $('#firstSection');
        targetDown = $('#secondSection');
    } else if (lastScrollTop < div3y) {
        targetUp = $('#secondSection');
        targetDown = $('#thirdSection');
    }
    if (scrollDirection === 'down') {
        targetElement = targetDown;
    } else if (scrollDirection === 'up') {
        targetElement = targetUp;
    }
    scrollThere(targetElement, 240);
});
// section scroll