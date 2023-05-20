

var paper = 1;
var scissors = 2;
var rock = 3;
const win = 1;
const lost = 0;
let randomnumber = 0;

/*that part is for saving your score when you refresh the page*/
var score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = [0, 0]
};

var table = document.getElementsByClassName("output-table")[0];
var tableUserScore = table.getElementsByTagName("p")[0];
var tableComputerScore = table.getElementsByTagName("p")[1];
tableUserScore.innerHTML = score[0];
tableComputerScore.innerHTML = score[1];
const computer = document.getElementById("computer-text");
const player = document.getElementById("player-text");
computer.innerHTML = score[1];
player.innerHTML = [0];


function reset() {
    document.getElementById("text").innerHTML = "";
    usermoveDispay(3);
    computermoveDisplay(3);
}

/* grilled randomley the computer nove */
function random() {
    // Rock =1/3
    // Paper = 2/3
    // Scissors= else
    randomnumber = Math.random();
    console.log(randomnumber);
    if (randomnumber >= 0 && randomnumber < 1 / 3) { return (3) }
    else if (randomnumber > 1 / 3 && randomnumber <= 2 / 3) { return (1) }
    else { return (2) }
}


/*get the random move of the vomputer and the number move of the user
and updates the win and the table scor*/
function checkwin(num, randnum) {

    if (num === 1) { //Paper
        if (randnum === 1) {
            alertText('TIE');
        }
        else if (randnum === 2) {
            alertText('YOU LOST!');
            score[1] = win + score[1];
        }
        else {
            alertText('YOU WIN!');
            score[0] = win + score[0];
        };

    }
    else if (num === 2) { //Scissors
        if (randnum === 2) {
            alertText('TIE');

        }
        else if (randnum === 3) {
            alertText('YOU LOST!');
            score[1] = (win + score[1]);
        }
        else {
            alertText('YOU WIN!');
            score[0] = (win + score[0]);
        }
    } else if (num === 3) { //Rock
        if (randnum === 3) {
            alertText('TIE');

        }
        else if (randnum === 2) {
            alertText('YOU WIN!');
            score[0] = (win + score[0]);
        }
        else {
            alertText('YOU LOST!');
            score[1] = (win + score[1]);
        };

    }
    updateScore(score);

}

/*call the rand function and sending the numbers
 to the checkwin() function*/
function play(num) {
    const number = Number(num);
    const randnum = random();
    checkwin(number, randnum);
    usermoveDispay(number);
    computermoveDisplay(randnum);
}

/*function to update the array-screen*/
function updateScore(arr) {
    const table = document.getElementsByClassName("results")[0];
    const tbody = table.getElementsByTagName("tbody")[0];
    const rows = tbody.getElementsByTagName("tr");
    const row = rows[0];
    const outputComputer = row.getElementsByTagName("p")[1];
    const outputUser = row.getElementsByTagName("p")[0];
    outputComputer.innerHTML = arr[1];
    outputUser.innerHTML = arr[0];
    const computerText = document.getElementById("computer-text");
    const playerText = document.getElementById("player-text");
    computerText.innerHTML = arr[1];
    playerText.innerHTML = arr[0];
}


function tostringMove(move) {
    if (move === 1) {
        return 'paper'
    } else if (move === 2) {
        return 'scissors'
    } else {
        return 'rock'
    }
}

function computerHideMove() {
    const userhandDiv = document.getElementById("hands-pic");
    var image = userhandDiv.getElementsByTagName("img")[1];
    image.src = `picturs/questionEmoji.png`;
    image.width = "200";
    image.height = "200";
}

function usermoveDispay(move) {
    const doc = tostringMove(move);
    console.log(doc);
    const userhandDiv = document.getElementById("hands-pic");
    var image = userhandDiv.getElementsByTagName("img")[0];
    image.src = `picturs/${doc}Emoji.png`;
    if (doc !== "rock") {
        image.height = "200";
        image.width = "200";
    } else {
        image.height = "200";
        image.width = "200";
    }

}

function computermoveDisplay(move) {
    const doc = tostringMove(move);
    const userhandDiv = document.getElementById("hands-pic");
    var image = userhandDiv.getElementsByTagName("img")[1];
    image.src = `picturs/${doc}Emoji.png`;
    if (doc !== "rock") {
        image.height = "200";
        image.width = "200";
    } else {
        image.height = "200";
        image.width = "200";
    }

}

/*function to display the result of the play*/
function alertText(text) {
    const paragraph = document.getElementById("text");
    paragraph.innerHTML = text;
}

/*handlers for mouse over the stickers*/
function handleMouseover(num) {
    const button = document.getElementsByTagName("button")[Number(num)];
    button.style.backgroundColor = 'brown'
    usermoveDispay(Number(num));
    computerHideMove();
    alertText("");
}

function handleMouseout(num) {
    const button = document.getElementsByTagName("button")[Number(num)];
    button.style.backgroundColor = 'white'
    usermoveDispay(3);
    alertText("");
}

function handleResetButtonover() {
    const button = document.getElementsByTagName("button")[Number(0)];
    button.style.color = "darkcyan"
}

function handleResetButtonout() {
    const button = document.getElementsByTagName("button")[Number(0)];
    button.style.color = "black"
}

