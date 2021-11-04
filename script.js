const LOSE = "You Lose! ";
const WIN = "You Win! ";
const TIE = "Tie! "


function computerPlay() {
    const tmp = Math.random();
    return tmp < 0.33 ? "scissors" : tmp < 0.66 ? "paper" : "rock";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    switch (computerSelection) {
        case "scissors": switch (playerSelection) {
            case "scissors":
                console.log(TIE + `Both players selection is ${playerSelection}`);
                return 0.5;
            case "paper":
                console.log(LOSE + `${computerSelection} beats ${playerSelection}`);
                return 0;
            case "rock":
                console.log(WIN + `${playerSelection} beats ${computerSelection}`);
                return 1;
            default:
                return;
        }
        case "paper": switch (playerSelection) {
            case "paper":
                console.log(TIE + `Both players selection is ${playerSelection}`);
                return 0.5;
            case "rock":
                console.log(LOSE + `${computerSelection} beats ${playerSelection}`);
                return 0;
            case "scissors":
                console.log(WIN + `${playerSelection} beats ${computerSelection}`);
                return 1;
            default:
                return;
        }
        case "rock": switch (playerSelection) {
            case "rock":
                console.log(TIE + `Both players selection is ${playerSelection}`);
                return 0.5;
            case "scissors":
                console.log(LOSE + `${computerSelection} beats ${playerSelection}`);
                return 0;
            case "paper":
                console.log(WIN + `${playerSelection} beats ${computerSelection}`);
                return 1;
            default:
                return;
        }
        default: return;
    }
}

function game(rounds = 5) {
    let score = 0;
    for (i = 0; i < rounds; i++) {
        let bot = computerPlay();
        let human = prompt();
        score += playRound(human, bot);
    }
    console.log(`${score > rounds / 2 ? "You Win!" : score == rounds / 2 ? "Tie!" : "You loose!"} Your final ${rounds} rounds score is ${score}`);
}

game();