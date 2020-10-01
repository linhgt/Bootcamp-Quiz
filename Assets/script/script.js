$(document).ready(function(){
    var startBtn = $("#start-button");
    var questionTitle = $("#question");
    var answerChoices =$("#answers");
    var currentQuestionNumber=0;
    var correctSound = new Audio("../Bootcamp-Quiz/Assets/sound/ding-sound-effect_2.mp3");
    var incorrectsound = new Audio("../Bootcamp-Quiz/Assets/sound/roblox-death-sound_1.mp3")
    
    //Timer is initialized at 99, and count to 0
    var timer = $("#countdown");
    var secondElapsed = 9;
    var interval;
    var quizEnd = false;

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
                A:"1980",
                B:"1983",
                C:"1985",
                D:"1987",
            },
            correctAnswer:"B"
        },
        {
            question:"What is the name of the hottest pepper in the world?",
            answers:{
                A:"Ghost pepper",
                B:"Trinidad Moruga Scorpion",
                C:"7 Pot Douglah",
                D:"Carolina reaper"
            },
            correctAnswer:"D"
        },
    ];

    //Print the second to the screen
    function renderTime(){
        timer.text(secondElapsed);
    }

    function finishQuiz()
    {
        $("#main-question").addClass("hide");
        $("#final-screen").removeClass("hide");
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
    }

    //Start the quiz
    function quizStart()
    {
        buildQuiz();
    }

    //Bind event listener to the answer choices
    answerChoices.on("click", "button", function(event){
        event.preventDefault();
        if(event.target.value !== currentQuestion.correctAnswer)
        {
            //The choice made is incorrect
            //Penalize by subtracting 10 seconds from the timer
            var result = '<hr/><h3>Incorrect!</h3>';
            $("#ding").append(result);
            secondElapsed = secondElapsed - 10;
            timer.text(secondElapsed);
            incorrectsound.play();
        }
        else
        {
            //The choice made is correct
            var result = '<hr/><h3>Correct!</h3>';
            $("#ding").append(result);
            correctSound.play();
        }

        //Hide the alert after 1 seconds
        setTimeout(function(){
            $("#ding").empty()}, 1000);

        if(currentQuestionNumber < Questions.length-1)
        {
            //If there are some questions left
            //Print the next question
            currentQuestionNumber++;
            buildQuiz();
        }
        else
        {
            quizEnd = true;
            console.log("This is the end of the quiz");
            finishQuiz();
        }
    });

    function buildQuiz(){
        //empty the screen
        questionTitle.text("");
        answerChoices.empty();

        //Get the current question
        currentQuestion = Questions[currentQuestionNumber];
        questionTitle.text(currentQuestion.question);
        for(letter in currentQuestion.answers)
        {
            //For each answer choice, create a Bootstrap button that holds the letter as value for retrieving purpose later
            //The button is appended to the answers div
            var answerBtn = '<button class="btn btn-dark" style="margin-bottom:5px;" value='+letter+'>'+letter+'.'+currentQuestion.answers[letter]+'</button><br/>';
            answerChoices.append(answerBtn);
        }

    }

    //Add event listener to the startBtn
    //Once clicked, the initial page is removed
    //The questions are displayed on the screen
    startBtn.on("click", function(event){
        event.preventDefault();
        countDown();
        quizStart();

        $("#initial-page").addClass("hide");
        $("#main-question").removeClass("hide");
        $(".quiz-container").css("text-align", "initial");
    });
});