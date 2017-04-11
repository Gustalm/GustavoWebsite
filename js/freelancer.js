var language = "pt-br";

(function($) {
    "use strict"; // Start of uase strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        var href = $($anchor.attr('href'));
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.contact_me').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });
})(jQuery); // End of use strict

function initializeTyped() {
    var englishDictionary = ["Web", "Back-End", "Front-End", "Mobile", "Software"];
    var portugueseDictionary = [" Web.", " Back-End.", " Front-End.", " Mobile.", "."];

    var typedOptions = {
        strings: [" Web.", " Back-End.", " Front-End.", " Mobile.", "."],
        typeSpeed: 60,
        backSpeed: 40,
        startDelay: 1000
    };
    //variavel global em <script> das paginas, posteriormente mudar isso
    if (pageLanguage === "en-us")
        typedOptions.strings = englishDictionary;

    Typed.new('#editable-text', typedOptions);
}

$(function() {
    $().timelinr({
        orientation: 'horizontal',
        arrowKeys: 'true'
    });

    initializeTyped();
});