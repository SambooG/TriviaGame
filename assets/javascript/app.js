let timeRemaining = 20;
let intervalId;
let correct = 0;
let incorrect = 0;
let question1Answer = "West-Caldwell";
let question2Answer = "Columbia-University";
let question3Answer = "Seattle";
let question4Answer = "Sil";
let question5Answer = "The-Bing";
let question6Answer = "Dr-Melfi";
let question7Answer = "Stugots";
let question8Answer = "ducks";



function decrement() {
    timeRemaining--;
    $("#time-remaining").text(timeRemaining)
        if(timeRemaining === 0){
        stop()
    }
}
function stop(){
    clearInterval(intervalId);
    console.log(intervalId);
    //  take away the questions --> set questions to not display by targeting using $(".question-container").hide()
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
    //show correct anser once
    $("#correct-answers").text(correct);
    $("#wrong-answers").text(incorrect);
    // if the checked option matches the answer (repeat for all questions)
    if($("input[name= question1-option]:checked").val() === question1Answer){
        // Add a correct
        correct++;
        // Show the user the correct
    }
        else{
        // Add an incorrect
        incorrect++;
        // Show the user the incorrect
    }
    if($("input[name= question2-option]:checked").val() === question2Answer){
                    // Add a correct
        correct++;
                    // Show the user the correct
    }
        else{
        // Add an incorrect
        incorrect++;
        // Show the user the incorrect
        }
    if($("input[name= question3-option]:checked").val() === question3Answer){
                    // Add a correct
        correct++;
                    // Show the user the correct
    }
        else{
        // Add an incorrect
        incorrect++;
        // Show the user the incorrect
        }
    if($("input[name= question4-option]:checked").val() === question4Answer){
                    // Add a correct
        correct++;
                    // Show the user the correct
    }
    else{
        // Add an incorrect
        incorrect++;
        // Show the user the incorrect
        }
    if($("input[name= question5-option]:checked").val() === question5Answer){
                    // Add a correct
        correct++;
                    // Show the user the correct
    }
        else{
        // Add an incorrect
        incorrect++;
        // Show the user the incorrect
        }
    if($("input[name= question6-option]:checked").val() === question6Answer){
                    // Add a correct
        correct++;
                    // Show the user the correct
    }
        else{
        // Add an incorrect
        incorrect++;
        // Show the user the incorrect
        }
    if($("input[name= question7-option]:checked").val() === question7Answer){
                    // Add a correct
        correct++;
                    // Show the user the correct
    }
        else{
        // Add an incorrect
        incorrect++;
        // Show the user the incorrect
        }
    if($("input[name= question8-option]:checked").val() === question8Answer){
                    // Add a correct
        correct++;            
        // Show the user the correct
    }
    // else 
    else{
        // Add an incorrect
        incorrect++;
        // Show the user the incorrect
    }
    $("#correct-answers").text(correct);
    $("#wrong-answers").text(incorrect);
}  

    
function startGame(){
    $("#time-remaining").text(timeRemaining);
    intervalId = setInterval(decrement, 1000); 
}

startGame();
