//DEFINE GLOBAL VARS

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
