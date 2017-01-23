// This is the varaible that stores the score.
// score[0] = wins, score[1] = ties, score[2] = losses
var score = [0, 0, 0];
var match = [0, 0]
    // The variables store the current player's and computer's choices
    // 0 = Rock, 1 = Paper, 2 = Scissors, 3 = Spock, 4 = Lizard
var playerChoice;
var computerChoice;

function playGame() {
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // We have a tie!
        console.log("tie");
        return 0;
    }
    else if (playerChoice == 0 && (computerChoice == 2 || computerChoice == 4)) {
        // Rock beats scissors and lizard - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 1 && (computerChoice == 0 || computerChoice == 3)) {
        // Paper beats scissors and spock - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 2 && (computerChoice == 1 || computerChoice == 4)) {
        // Scissors beats paper and lizard - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 3 && (computerChoice == 2 || computerChoice == 0)) {
        // Spock beats scissors and rock - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 4 && (computerChoice == 1 || computerChoice == 3)) {
        // Lizard beats paper and spock - a win!
        console.log("win");
        return 1;
    }
    else {
        // All other combinations are losses
        console.log("lose");
        return -1;
    }
}

function displayScoreBoard(winsId, lossesId, tiesId) {
    document.getElementById(winsId).innerHTML = score[0];
    document.getElementById(lossesId).innerHTML = score[2];
    document.getElementById(tiesId).innerHTML = score[1];
}

function displayMatchScore(matchWinsId, matchLossesId) {
    document.getElementById(matchWinsId).innerHTML = match[0];
    document.getElementById(matchLossesId).innerHTML = match[1];
}


function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
    updateMatchScore();
}

function updateMatchScore(val) {
    if (score[0] == 2) {
    ++match[0];
    score = [0, 0, 0];
    console.log("The match score is now  " + match);
    } else if (score[2] == 2) {
        ++match[1];
        score = [0, 0, 0];
        console.log("The match score is now " + match);
    }
}


function displayGameResult(resultId) {
    // Define an array of text labels for the choices 0, 1, 2, 3, 4;
    var choices = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];
    // Now play the game and store the result
    var result = playGame();
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + "<br/>";
    // Add to the base message if it was a win, loss, or tie
    if (result == 1) {
        // Display that it was a win
        updateScore(0);
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
    }
    else if (result == -1) {
        updateScore(2);
        // Display that it was a loss
        document.getElementById(resultId).innerHTML = message + "YOU LOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
    }
    else {
        // Display that it was a tie
        updateScore(1);
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
    }
}

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
    storeComputerChoice();
}

function storeComputerChoice() {
    // Generate computer's random choice
    computerChoice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computerChoice);
}
