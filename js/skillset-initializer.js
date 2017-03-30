jQuery(document).ready(function($) {
    var skillsetObjects = returnSkillSetObjects(); // this guy is in /en-us or /pt-br folder, language-especific javascript
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