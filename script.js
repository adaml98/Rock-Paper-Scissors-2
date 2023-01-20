function getComputerChoice(){
    let result = Math.floor(Math.random() * 3 + 1);
    //console.log(result);
    if (result === 1){
        return "Rock"
    }else if (result === 2){
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock"){
        if(computerSelection === "Rock"){
            
            return "You draw!";

        } else if (computerSelection === "Paper"){
            computerScore++;
            return "You Lose! Paper beats rock.";

        } else {
            playerScore++;
            return "You Win! Rock beats Scissors.";
            
        }

    } else if (playerSelection === "paper"){

        if (computerSelection === "Rock") {
            playerScore++;
            return "You Win! Paper beats rock.";
            
        } else if (computerSelection === "Paper") {

            return "You draw!";

        } else {
            computerScore++;
            return "You Lose! Scissors beat paper.";

        }

    } else {

        if (computerSelection === "Rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors.";
            
        } else if (computerSelection === "Paper") {
            playerScore++;
            return "You Win! Scissors beat paper.";

        } else {

            return "You draw!";

        }

    }
}

function game(){

    for (i = 0; i < 5; i++){
        let playerSelection = prompt("Enter choice here:")
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection)+ i);

    }
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    playerScore > computerScore ? console.log("Player Wins!") : console.log("Computer Wins!");
}

let playerScore = 0;
let computerScore = 0;

console.log(game());