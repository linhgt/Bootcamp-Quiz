$(document).ready(function(){
    var startBtn = $("#start-button");

    //Timer is initialized at 99, and count to 0
    var timer = $("#countdown");
    var secondElapsed = 99;
    var interval;

    //List of questions
    var Questions = [
        {
            question: "What is 1 + 1?",
            answers:{
                A:"0",
                B:"1",
                C:"3",
                D:"None of the above"
            },
            correctAnswer:"D"
        },
        {
            question:"If you drop a ball and a feather at the same time and at the same height in a controlled vacuum on Earth, what will happen?",
            answers:{
                A:"the ball hits the ground first",
                B:"the feather hits the ground first",
                C:"both the ball and the feather touch the ground at the same time",
                D:"none of the above"
            },
            correctAnswer:"C"
        },
        {
            question:"When was internet invented?",
            answers:{
                a:"1980",
                b:"1983",
                c:"1985",
                d:"1987",
            },
            correctAnswer:"b"
        },
        {
            question:"What is the name of the hottest pepper in the world?",
            answers:{
                a:"Ghost pepper",
                b:"Trinidad Moruga Scorpion",
                c:"7 Pot Douglah",
                d:"Carolina reaper"
            },
            correctAnswer:"d"
        },
    ];

    //Print the second to the screen
    function renderTime(){
        timer.text(secondElapsed);
    }

    //Timer count down from 99 to 0
    function countDown(){
        renderTime();
        //one second in timer is equal to one second in real time
        interval = setInterval(function(){
            if(secondElapsed > 0)
            {
                secondElapsed--;

                renderTime();   
            }
            else{
                clearInterval(interval);
            }
        }, 1000);
        /*{
            clearInterval(interval);
            return;
        }*/        
    }
    //Add event listener to the startBtn
    //Once clicked, the initial page is removed
    //The questions are displayed on the screen
    startBtn.on("click", function(event){
        event.preventDefault();
        countDown();

        $("#initial-page").css("display", "none");
        $("#main-question").css("display", "block");
        $(".quiz-container").css("text-align", "initial");
    });
});