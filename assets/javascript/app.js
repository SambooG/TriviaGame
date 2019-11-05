let timeRemaining = 40;
let intervalId;
let correct = 0
let incorrect = 0
let question1Answer = "West-Caldwell"
let question2Answer = "NYU"
let question3Answer = "Seattle"
let question4Answer = "Sil"
let question5Answer = "The-Bing"
let question6Answer = "Dr-Melfi"
let question7Answer = "Stugots"
let question8Answer = "ducks"



function decrement() {
    timeRemaining--;
    $("#time-remaining").text(timeRemaining)
    if(timeRemaining === 0){
        stop()
    }
}

function stop(){
    clearInterval(intervalId);
    console.log(clearInterval)
    // take away the questions --> set questions to not display by targeting using $(".question-container").hide()
    $(".question-container").hide()
    // take away the timer --> set timer to not display by targeting "#time-remaining" similar to questions
    $("#time-remaining").hide()
    // Get the answers the user selected for each question i.e. ->  $('input[name=question1-option]:checked').val();
    $("input[name= question1-option]:checked").val()
    $("input[name= question2-option]:checked").val()
    $("input[name= question3-option]:checked").val()
    $("input[name= question4-option]:checked").val()
    $("input[name= question5-option]:checked").val()
    $("input[name= question6-option]:checked").val()
    $("input[name= question7-option]:checked").val()
    $("input[name= question8-option]:checked").val()
    
    // if the checked option matches the answer (repeat for all questions)
    if("input[name= question1-option]:checked" = question1Answer){
        // Add a correct
        correct++;
        $("#correct-answers").text(correct);
        // Show the user the correct
    }
        else if("input[name= question2-option]:checked" = question2Answer){
            // Add a correct
            correct++;
            $("#correct-answers").text(correct);
            // Show the user the correct
        }
        else if("input[name= question3-option]:checked" = question3Answer){
            // Add a correct
            correct++;
            $("#correct-answers").text(correct);
            // Show the user the correct
        }
        else if("input[name= question4-option]:checked" = question4Answer){
            // Add a correct
            correct++;
            $("#correct-answers").text(correct);
            // Show the user the correct
        }
            // else 
            else{
            // Add an incorrect
                wrong++;
                $("#wrong-answers").text(wrong);
                // Show the user the incorrect
        }
     
}  


    
function startGame(){
    $("#time-remaining").show();
    $("#time-remaining").text(timeRemaining);
    intervalId = setInterval(decrement, 1000); 
}

startGame();
