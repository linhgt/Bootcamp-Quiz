//This is the start of the quiz script
//Using JQuery
$(document).ready(function(){
    var startBtn = $("#start-button");
    var initialScreen = $("#initial-page");
    startBtn.on("click", function(event){
        event.preventDefault();
        initialScreen.css("display", "none");
        $("#main-quiz").css("display", "block");
        $(".container").css("text-align", "initial");
    });
});