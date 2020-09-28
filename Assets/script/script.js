//This is the start of the quiz script
//Using JQuery
$(document).ready(function(){
    var startBtn = $("#start-button");

    //Add event listener to the startBtn
    //Once clicked, the initial page is removed
    //The questions are displayed on the screen
    startBtn.on("click", function(event){
        event.preventDefault();
        $("#initial-page").css("display", "none");
        $("#main-question").css("display", "block");
        $(".container").css("text-align", "initial");
    });
});