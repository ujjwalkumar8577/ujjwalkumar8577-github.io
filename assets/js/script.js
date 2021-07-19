// Sticky navbar
$(document).ready(function () {

    var projects = null;
    $.getJSON("project.json", function(json) {
        projects = json;
        console.log(projects);
    });

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

    var closeButton = document.getElementById("close-project");
    var project = document.getElementById("project");

    closeButton.onclick = function() {
        project.style.visibility = "hidden";
    }

    project1.onclick = function() {        
        var p = projects["projects"][0];
        loadProject(p);
    }
    
    project2.onclick = function() {        
        var p = projects["projects"][1];
        loadProject(p);
    }

    project3.onclick = function() {        
        var p = projects["projects"][2];
        loadProject(p);
    }

    function loadProject(p) {
        document.getElementById("project-title").innerHTML = p["title"];
        document.getElementById("project-img").src = p["img"];
        document.getElementById("project-desc1").innerHTML = p["desc1"];
        document.getElementById("project-desc2").innerHTML = p["desc2"];
        document.getElementById("project-github").href = p["github"];
        document.getElementById("project-demo").href = p["demo"];
        project.style.visibility = "visible";
    }
});