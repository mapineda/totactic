var turnNum = 0;

// Create a global array to represent the state of the board.
var arr = ['', '', '', '', '', '', '', '', ''];



/***** St Names and Turns Function ******/

function setNames () {
    turnNum = 1;
// Let users pick name
    var name1 = alert("Player ONE is 'X' aka Green Thumb");
    var name2 = alert("Your TWO is 'O' aka Gold Finger");

    if (name1 == " " || name1 == null) {
        name1 = "Green Thumb";
    }

    if (name2 == " " || name2 == null) {
        name2 = "Gold Finger";
    }


    // assign names at top
    var player1Name = document.getElementById('X');
    player1Name.innerHTML = name1;

    var player2Name = document.getElementById('O');
    player2Name.innerHTML = name2;

}



/***** Initial Function ******/

function init() {

    setNames();

    // For each of the cells, create a <div> inside the table cell
    var cells = document.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {

        var cell = document.getElementById('c' + [i]);
        cell.innerHTML = '<div id="d' + [i] + '"></div>';
    }


    // For each of the cells, create an onclick
    var cells = document.querySelectorAll('td');
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function() {
            squareClicked(this.id)});
    }

    // set a class on the Player X div to indicate that it is the current player and clear any classes set on the Player Y div

   var playerX = document.getElementById("X");
    var playerO = document.getElementById("O");

    playerX.className = 'current-player';
    playerO.className = ' ';

}


/***** Turn Taken Function ******/


function squareClicked(x) {

    turnNum++;

    var playerX = document.getElementById("X");
    var playerO = document.getElementById("O");

    var playerXClass = playerX.className;
    var playerOClass = playerO.className;

    var clickedEl = document.getElementById(x);
    var numDiv = clickedEl.firstChild;

    // if empty
    if (numDiv.className == 0) {
        // if it's player X
        if (playerXClass == 'current-player') {
            numDiv.className = 'X-marker';
            // push X to array in proper spot
            switch(clickedEl) {
                case c0:
                    arr[0] = "X";
                    break;
                case c1:
                    arr[1] = "X";
                    break;
                case c2:
                    arr[2] = "X";
                    break;
                case c3:
                    arr[3] = "X";
                    break;
                case c4:
                    arr[4] = "X";
                    break;
                case c5:
                    arr[5] = "X";
                    break;
                case c6:
                    arr[6] = "X";
                    break;
                case c7:
                    arr[7] = "X";
                    break;
                case c8:
                    arr[8] = "X";
                    break;
            }
        }
        // if it's player O
        else {
            numDiv.className = 'O-marker';
            // push O to proper spot
            switch(clickedEl) {
                case c0:
                    arr[0] = "O";
                    break;
                case c1:
                    arr[1] = "O";
                    break;
                case c2:
                    arr[2] = "O";
                    break;
                case c3:
                    arr[3] = "O";
                    break;
                case c4:
                    arr[4] = "O";
                    break;
                case c5:
                    arr[5] = "O";
                    break;
                case c6:
                    arr[6] = "O";
                    break;
                case c7:
                    arr[7] = "O";
                    break;
                case c8:
                    arr[8] = "O";
                    break;
            }
        }
        // switch players
        if (playerXClass == 'current-player') {
            playerX.className = ' ';
            playerO.className = 'current-player';
        }
        else {
            playerO.className = ' ';
            playerX.className = 'current-player';
        }

        // check for win
        if (turnNum >= 5) {
            winArrays("X");
            winArrays("O");
        }

        // draw
        if (turnNum >= 10 && winArrays() == false) {
            alert("It's a draw!");
            newGame();
        }

    }

    else {
        alert("Already taken. Try another");
    }

    console.log(numDiv);
    console.log(arr);
}

/***** New Game Function ******/


function newGame() {

    // remove the content div from each of them by clearing the innerHTML property

    var cells = document.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++){

        var cell = document.getElementById('c'+[i]);
        cell.innerHTML = '<div id="d'+[i]+'"></div>';
    }

    setNames();

    var playerX = document.getElementById("X");
    var playerO = document.getElementById("O");

    //  Also set a class on the Player X div to indicate that it is the current player and clear any classes set on the Player Y div

    playerX.className = 'current-player';
    playerO.className = ' ';

    var currentPlayer = "X";

    arr = ['', '', '', '', '', '', '', '', ''];
}

// checks for wins
function winArrays(marker) {
    if (
        // across
    (arr[0] == marker && arr[1] == marker && arr[2]== marker ) ||
    (arr[3] == marker && arr[4] == marker && arr[5]== marker ) ||
    (arr[6] == marker && arr[7] == marker && arr[8]== marker ) ||

        // down
    (arr[0] == marker && arr[3]== marker  && arr[6]== marker ) ||
    (arr[1] == marker && arr[4]== marker  && arr[7]== marker ) ||
    (arr[2] == marker && arr[5]== marker  && arr[8]== marker ) ||

        // diagonal
    (arr[0] == marker && arr[4]== marker  && arr[8]== marker ) ||
    (arr[6] == marker && arr[4]== marker  && arr[2]== marker )
    )
    {
        // change winning spaces green/losing red
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == marker) {
                var cellDiv = document.getElementById('d' + [i]);
                cellDiv.className += ' win';
            }
           else {
                var cellDiv = document.getElementById('d' + [i]);
                cellDiv.className += ' lose';
            }
        }

        if (confirm(marker + ' has won!\nNew game?') == true) {
            newGame();
        }

    }
    else {
        return false;
    }
}

console.log(arr);