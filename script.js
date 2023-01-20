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

            return "You Lose! Paper beats rock.";

        } else {

            return "You Win! Rock beats Scissors.";
            
        }

    } else if (playerSelection === "paper"){

        if (computerSelection === "Rock") {
            
            return "You Win! Paper beats rock.";
            
        } else if (computerSelection === "Paper") {

            return "You draw!";

        } else {

            return "You Lose! Scissors beat paper.";

        }

    } else {

        if (computerSelection === "Rock") {

            return "You Lose! Rock beats Scissors.";
            
        } else if (computerSelection === "Paper") {

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
}



console.log(game());