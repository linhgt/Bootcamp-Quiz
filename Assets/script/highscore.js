$(document).ready(function(){
    var playerList = $("#playerList");

    renderScore();

    //Retrieve player score from local storage and append it to the ul
    function renderScore(){
        playerList.empty();
        Object.keys(localStorage).forEach((key) => {
            playerList.append("<li>" + key + " - " + localStorage.getItem(key) + "</li>");
        });
    }

    $("#go-back").on("click", function(){
        window.location ="index.html";
    });

    $("#clear-highscore").on("click", function(){
        playerList.empty();
        localStorage.clear();
    });
});