//This is the start of the quiz script
//Using JQuery
$(document).ready(function(){
    var startBtn = $("#start-button");
    var mainScreen = $(".starting-container");
    startBtn.on("click", function(event){
        event.preventDefault();
        mainScreen.css("display", "none");
    });
});