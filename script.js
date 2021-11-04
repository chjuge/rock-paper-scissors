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
                return 0;
            case "paper":
                console.log(LOSE + `${computerSelection} beats ${playerSelection}`);
                return -1;
            case "rock":
                console.log(WIN + `${playerSelection} beats ${computerSelection}`);
                return 1;
            default:
                return;
        }
        case "paper": switch (playerSelection) {
            case "paper":
                console.log(TIE + `Both players selection is ${playerSelection}`);
                return 0;
            case "rock":
                console.log(LOSE + `${computerSelection} beats ${playerSelection}`);
                return -1;
            case "scissors":
                console.log(WIN + `${playerSelection} beats ${computerSelection}`);
                return 1;
            default:
                return;
        }
        case "rock": switch (playerSelection) {
            case "rock":
                console.log(TIE + `Both players selection is ${playerSelection}`);
                return 0;
            case "scissors":
                console.log(LOSE + `${computerSelection} beats ${playerSelection}`);
                return -1;
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
    let score_human = 0;
    let score_bot = 0;
    for (i = 0; i < rounds;) {
        let bot = computerPlay();
        let human = prompt();
        let res = playRound(human, bot);
        if (res == 0)
            continue;
        res > 0 ? score_human++ : score_bot++;
        i++;
    }
    console.log(`${score_human > score_bot ? "You Win!" : "You loose!"} Your final ${rounds} rounds score is ${score_human}`);
}

game();