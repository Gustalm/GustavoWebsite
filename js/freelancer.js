var language = "pt-br";

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

    jQuery(document).ready(function($) {
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
            'headline': '<a class="skill-clickable" id="netSkill" data-text="Desenvolvimento de diversos sistemas utilizando a plataforma .NET entre eles, um sistema interto de ERP desenvolvido em AngularJS nas camadas de Front-End, integrado a uma camada middleware contendo uma Web Api (.NET) responsável pelo gerenciamento de todos os módulos do ERP.</br></br> Como repositório do banco de dados e ORM utilizou-se o ADO.NET EntityFramework 6.</br> Na arquitetura, optou-se por desacoplar o front end do back-end, gerando camadas específicas para cada módulo do ERP e camcadas de back-end centralizadas na WebApi, de modo que o desenvolvimento e deploy de front e back-end fossem independentes" href="#">.NET</a>',
            'value': 8,
            'length': defaultLength,
            'description': 'Details 1'
        },
        {
            'headline': '<a class="skill-clickable" id="pythonskill" data-text="Desenvolvimento de aplicações Python 3.4 utilizando Flask Web Framework para o gerenciamento de sessões dos usuários e controle de permissão as views e integrando o Mysql como banco relacional interno orienteado ao ORM Peewee.</br></br> Implementação do modulo JWT para criação do token de autenticação do usuário logado e interceptors do AngularJS para interceptar todas as requisições da aplicação para validação dos Tokens." href="#">' +
                'Python</<a>',
            'value': 5,
            'length': defaultLength,
            'description': 'Details 2'
        }
    ];

    var frontEndObject = [{
            'headline': '<a class="skill-clickable" data-text="Conhecimento avançado na linguagem de marcação de texto HTML5 e linguagem de estilo CSS3 para criação de Websites responsíveis, cross-browsing e multi-plataformas.<div></br>•Experiência em desenvolvimento de designs UI / UX. </br>•Otimização do HTML da página para máxima performance e escalabilidade. </br>•Validação de formuláios por atributos HTML5. </br>•Conhecimento de Padrões Web e boas práticas. </br>•Principíos SEO e aderimento destes na aplicação.</div>" href="#">HTML5/CSS3</a>',
            'value': 8,
            'length': defaultLength,
            'description': 'Details 1'
        },
        {
            'headline': '<a class="skill-clickable" data-text="Conhecimento avançado em Javascript para desenvolvimento de modulos extensíveis, e utilização de bibliotecas para otimização de funcionalidades da aplicação.</br>•Proeficiência em desenvolvimento de requisições asíncronas, dinâmismo de módulos parciais da página e AJAX.</br>•Conhecimento em Modulo Loaders to Javascript, tal como Require.js.</br>•Conhecimento de ferramentas front-end de build tais como Grunt e Gulp.js.</br>•Proeficiência de desenvolvimento em frameworks e libraries robustas tais como AngularJS 2, Knockout JS, React Js e JQuery " href="#">Javascript</a>',
            'value': 8,
            'length': defaultLength,
            'description': 'Details 2'
        }
    ];

    var databaseObject = [{
            'headline': '<a class="skill-clickable" data-text="" href="#">SQL</a>',
            'value': 9,
            'length': defaultLength,
            'description': 'Details 1'
        },
        {
            'headline': '<a class="skill-clickable" data-text="" href="#">NoSQL</a>',
            'value': 5,
            'length': defaultLength,
            'description': 'Details 2'
        }
    ];

    skillObjectsArray.push(backendObject, frontEndObject);

    return skillObjectsArray;
}

$(".caption").on("click", function() {
    var aox = $(".skill-1 .skill-clickable").click();
})