// Freelancer Theme JavaScript

(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function (event) {
        var $anchor = $(this);
        var href = $($anchor.attr('href'));
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.contact_me').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function () {
        $("body").on("input propertychange", ".floating-label-form-group", function (e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function () {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function () {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });
})(jQuery); // End of use strict


$(function () {
    $().timelinr({
        orientation: 'horizontal',
        arrowKeys: 'true'
    });

    jQuery(document).ready(function ($) {
        var jssor_1_options = {
            $AutoPlay: false,
            $SlideEasing: $Jease$.$OutQuint,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
            },
            $SlideHeight: 500

        };

        var slider = new $JssorSlider$("slider", jssor_1_options);

        /*responsive code begin*/
        /*you can remove responsive code if you don't want the slider scales while window resizing*/
        function ScaleSlider() {
            var refSize = slider.$Elmt.parentNode.clientWidth;
            if (refSize) {
                refSize = Math.min(refSize, 1920);
                slider.$ScaleWidth(refSize);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        /*responsive code end*/

        var skillsetObjects = returnSkillSetObjects();
        initializeSkillSets(skillsetObjects);

        $(".skill-clickable").on("click", function () {
            var clickDOM = $(this);
            $("#skillset-backend-description").fadeOut("fast",function(){
                $(".skill-description").empty();
                $(".skill-description").text(clickDOM.attr("data-text"));
                $("#skillset-backend-description").fadeIn("slow");
            });
        });
    });
});

function initializeSkillSets(skillsetObjects) {
    var defaultDuration = 400;

    $("#skillset-backend").skillset({
        object: skillsetObjects[0],
        duration: defaultDuration
    });

    $("#skillset-frontend").skillset({
        object: skillsetObjects[1],
        duration: defaultDuration
    });
}


function returnSkillSetObjects() {
    var skillObjectsArray = [];
    var defaultLength = 10;
    var backendObject = [
        {
            'headline': '<a class="skill-clickable" id="netSkill" data-text="Sistema interto de ERP desenvolvido em AngularJS nas camadas de Front-End, integrando com uma camada de Web Api (.NET) responsável pelo gerenciamento de todos osmódulos do ERP. Como repositório do banco de dados e ORM utilizou-se o ADO.NET EntityFramework 5. Na arquitetura, optou-se por desacoplar o front end do back-end, gerandocamadas específicas para cada módulo do ERP e camcadas de back-end centralizadas na WebApi, de modo que o desenvolvimento e deploy de front e back-end fossem independentes" href="#">.NET</a>',
            'value': 8,
            'length': defaultLength,
            'description': 'Details 1'
        },
        {
            'headline': '<a class="skill-clickable" id="pythonskill" data-text="Foi utilizado Python 3.4 como linguagem dedesenvolvimento integrando o Flask Web Framework para o gerenciamento de sessões dosusuarios e controle de permissão as views.Para comunicação com serviços Rest e Soap omodulo nativo Requests do Python agiu como base de comunicação. O Mysql serviu comobanco relacional interno integrado com o ORM Peewee, por ser dinâmico e atuar comointermediário do banco no back-end da aplicação. No front-end utilizou-se o frameworkAngularJS para uma melhor convenção de programação e rápido desenvolvimento dos CRUDSutilizados na aplicação. Na autenticação utilizou-se o modulo JWT para criação do token de autenticação do usuário logado e interceptors do AngularJS para interceptar todas as requisiçõesda aplicação para validação dos Tokens." href="#">Python</<a>',
            'value': 5,
            'length': defaultLength,
            'description': 'Details 2'
        },
        {
            'headline': '<a class="skill-clickable" href="#">NodeJs/Express</a>',
            'value': 0,
            'length': defaultLength,
            'description': 'Details 2'
        }
    ];

    var frontEndObject = [
        {
            'headline': '. HTML/HTML5',
            'value': 9,
            'length': defaultLength,
            'description': 'Details 1'
        },
        {
            'headline': 'CSS/CSS3',
            'value': 7,
            'length': defaultLength,
            'description': 'Details 2'
        },
        {
            'headline': 'Javascript / JQuery',
            'value': 8,
            'length': defaultLength,
            'description': 'Details 2'
        },
        {
            'headline': 'Angular2',
            'value': 0,
            'length': defaultLength,
            'description': 'Details 2'
        },
        {
            'headline': 'React',
            'value': 0,
            'length': defaultLength,
            'description': 'Details 2'
        }
    ];

    skillObjectsArray.push(backendObject, frontEndObject);

    return skillObjectsArray;
}

