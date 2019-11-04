let timeRemaining = 5;
let intervalId;
let question1Answer = 'answer'


function decrement() {
    timeRemaining--;
    $("#time-remaining").text(timeRemaining)
    if(timeRemaining === 0){
        stop()
    }
}

function stop(){
    clearInterval(intervalId);
    // take away the questions --> set questions to not display by targeting using $(".question-container").hide()
    // take away the timer --> set timer to not display by targeting "#time-remaining" similar to questions
    // Get the answers the user selected for each question i.e. ->  $('input[name=question1-option]:checked').val();
    
    // if the checked option matches the answer (repeat for all questions)
        // Add a correct
    // else 
        // Add an incorrect
    
    // Show the user the correct
    // Show the user the incorrect
}  

function startGame(){
    $("#time-remaining").text(timeRemaining)
    intervalId = setInterval(decrement, 1000);
}


startGame();
