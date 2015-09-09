//DEFINE GLOBAL VARS
var turnNum = 0;

//DEFINE GLOBAL ARRAY

var arr = ['', '', '', '', '', '', '', '', ''];


//ASSIGN NAMES AT TOP

var player1Name = document.getElementById('X');
	player1Name.innerHTML = name1;

var player2Name = document.getElementById('O');
	player2Name.innerHTML = name2;	

//DEFINE INITIAL FUNCTION

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

//TURN TAKEN FUNCTION

function squareClicked(x) {

	turnNum++;

	var playerX = document.getElementById('X');
	var playerO = document.getElementById('O');

	var playerXClass = playerX.className;
	var playerOClass = playerO.className;

	var clickedEl = document.getElementById(x);
	var numDiv = clickedEl.firstChild;

	//IF EMPTY 
    if (numDiv.className == 0) {
    	//if player X
    	if (playerXClass == 'current-player') {
    		numDiv.className = 'X-marker';
    		//push X to array in proper spot
    		switch(clickedEl) {
    			case c0:
    				arr[0] = 'X';
    				break;
    			case c1:
    				arr[1] = 'X';
    				break;
    			case c2:
    				arr[2] = 'X';
    				break;
    			case c3:
    				arr[3] = 'X';
    				break;	
    			case c4:
    				arr[4] = 'X';
    				break;
    			case c5:
    				arr[5] = 'X';
    				break;
    			case c6:
    				arr[6] = 'X';
    				break;
    			case c7:
    				arr[7] = 'X';
    				break;
    			case c8:
    				arr[8] = 'X';
    				break;							
    		}
    	}
    	// if player O
    	else {
    		numDiv.className = 'O-marker';
    		// push o to proper spot
    		switch(clickedEl) {
    			case c0:
    				arr[0] = 'O';
    				break;
    			case c1:
    				arr[1] = 'O';
    				break;
    			case c2:
    				arr[2] = 'O';
    				break;
    			case c3:
    				arr[3] = 'O';
    				break;	
    			case c4:
    				arr[4] = 'O';
    				break;
    			case c5:
    				arr[5] = 'O';
    				break;
    			case c6:
    				arr[6] = 'O';
    				break;
    			case c7:
    				arr[7] = 'O';
    				break;
    			case c8:
    				arr[8] = 'O';
    				break;							
    		}
    	}
    	// switch players
    	if (playerX == 'current-player') {
    		playerX.className = ' ';
    		playerO.className = 'current-player';
    	}
    	else {
    		playerO.className = ' ';
    		playerX.className = 'current-player';
    	}

    	//check for win
    	if (turnNum >= 5) {
    		winArrays('X');
    		winArrays('O');
    	}

    	//draw
    	if (turnNum >= 10 && winArrays() == false) {
    		alert('It is a DRAW!');
    		newGame();
    	}
    }

    else {
    	alert('Already Conquered. Try another');
    }

    console.log(numDiv);
    console.log(arr);

}