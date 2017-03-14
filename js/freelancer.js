(function($) {
    "use strict"; // Start of use strict

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

    // Highlight the top nav as scrolling occurs
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
            top: 100
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


$(function() {

    $().timelinr({
        orientation: 'horizontal',
        arrowKeys: 'true'
    });

    jQuery(document).ready(function($) {
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
            } else {
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

        $(".skill-clickable").on("click", function() {
            var clickDOM = $(this);
            $("#skillset-backend-description").fadeOut("fast", function() {
                $(".skill-description").empty();
                $(".skill-description").html(clickDOM.attr("data-text"));
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
    var backendObject = [{
            'headline': '<a class="skill-clickable" id="netSkill" data-text="Desenvolvimento de diversos sistemas utilizand a plataforma .NET entre eles, um sistema interto de ERP desenvolvido em AngularJS nas camadas de Front-End,' +
                'que era integrado em uma camada middleware contendo uma Web Api (.NET) responsável pelo gerenciamento de todos os módulos do ERP.</br> Como repositório do banco de dados e' +
                'ORM utilizou-se o ADO.NET EntityFramework 5.</br> Na arquitetura, optou-se por desacoplar o front end do back-end, gerando camadas específicas para' +
                'cada módulo do ERP e camcadas de back-end centralizadas na WebApi, de modo que o desenvolvimento e deploy de front e back-end fossem' +
                'independentes" href="#">.NET</a><img class="technology-logo net-icon"/>',
            'value': 8,
            'length': defaultLength,
            'description': 'Details 1'
        },
        {
            'headline': '<a class="skill-clickable" id="pythonskill" data-text="Desenvolvimento de aplicação em Python 3.4 como linguagem dedesenvolvimento integrando o' +
                'Flask Web Framework para o gerenciamento de sessões dos usuários e controle de permissão as views.</br> O Mysql serviu como banco relacional interno integrado com o ORM Peewee, por' +
                'ser dinâmico e atuar como intermediário do banco no back-end da aplicação. Na autenticação utilizou-se o modulo JWT para criação do token de' +
                'autenticação do usuário logado e interceptors do AngularJS para interceptar todas as requisições da aplicação para validação dos Tokens." href="#">' +
                'Python</<a> <img class="technology-logo python-icon"/>',
            'value': 5,
            'length': defaultLength,
            'description': 'Details 2'
        }
        // {
        //     'headline': '<a class="skill-clickable" data-text="" href="#">Java</a><img class="technology-logo java-icon"/>',
        //     'value': 4,
        //     'length': defaultLength,
        //     'description': 'Details 2'
        // }
    ];

    var frontEndObject = [{
            'headline': '<a class="skill-clickable" data-text="Acredito que HTML5 e CSS3 são conhecimentos essenciais(e naturais) para qualquer' +
                'desenvolvedor web no mercado. Através do desenvolvimento de diversas aplicações web pelos anos utilizando funcionalidades nativas' +
                'dessas tecnologias e de  versões anteriores, tais como ' +
                'canvas, elementos de reprodução multimídia, LocalStorage e SessionStorage considero ter um conhecimento avançado nessas linguagens de marcação' +
                '"href="#">HTML5/CSS3</a><img class="technology-logo java-icon"/>',
            'value': 8,
            'length': defaultLength,
            'description': 'Details 1'
        },
        {
            'headline': '<a class="skill-clickable" data-text="Seguindo a mesma linha ds tecnologias HTML5/CSS3, javascript é outra linguagem de programação' +
                'que TODO desenvolvedor web deve saber, por ser algo essencial para o dinâmismo das páginas web. Posso afirmar ter um conhecimento avançado' +
                'em javascript e na biblioteca jquery pois em todos os projetos web que desenvolvi utilizei as normas de boas práticas na codificação deste,' +
                'tais como prototipação de funcões, e padrões de projeto web" href="#">Javascript/JQuery</a><img class="technology-logo java-icon"/>',
            'value': 9,
            'length': defaultLength,
            'description': 'Details 2'
        },
        {
            'headline': '<a class="skill-clickable" data-text="Utilizei AngularJS 2 integrado ao Ionic 2 em um projeto mobile que desenvolvi por conta para atender' +
                +'a uma necessidade de uma empresa terceira. Posso dizer que até agora gostei muito da nova arquitetura do Angular2 comaparado com seu' +
                'antecessor, e estou aprimorando meu conhecimento nesta nova tecnologia " href="#">Angular2</a><img class="technology-logo java-icon"/>',
            'value': 5,
            'length': defaultLength,
            'description': 'Details 2'
        }
    ];

    skillObjectsArray.push(backendObject, frontEndObject);

    return skillObjectsArray;
}


$(".caption").on("click", function() {
    var aox = $("#skillset-backend .skill-1 .skill-clickable").click();
})