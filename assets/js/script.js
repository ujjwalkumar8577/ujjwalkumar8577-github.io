// Sticky navbar
$(document).ready(function () {

    link1 = document.getElementById('link1');
    link2 = document.getElementById('link2');
    link3 = document.getElementById('link3');
    link4 = document.getElementById('link4');
    link5 = document.getElementById('link5');
    
    link1.onclick = function() {
        link1.classList.remove('active');
        link2.classList.remove('active');
        link3.classList.remove('active');
        link4.classList.remove('active');
        link5.classList.remove('active');
        link1.classList.add('active');
    }
    link2.onclick = function() {
        link1.classList.remove('active');
        link2.classList.remove('active');
        link3.classList.remove('active');
        link4.classList.remove('active');
        link5.classList.remove('active');
        link2.classList.add('active');
    }
    link3.onclick = function() {
        link1.classList.remove('active');
        link2.classList.remove('active');
        link3.classList.remove('active');
        link4.classList.remove('active');
        link5.classList.remove('active');
        link3.classList.add('active');
    }
    link4.onclick = function() {
        link1.classList.remove('active');
        link2.classList.remove('active');
        link3.classList.remove('active');
        link4.classList.remove('active');
        link5.classList.remove('active');
        link4.classList.add('active');
    }
    link5.onclick = function() {
        link1.classList.remove('active');
        link2.classList.remove('active');
        link3.classList.remove('active');
        link4.classList.remove('active');
        link5.classList.remove('active');
        link5.classList.add('active');
    }
    
    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});