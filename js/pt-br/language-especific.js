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