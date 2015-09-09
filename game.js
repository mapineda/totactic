// define canvas var
var c, canvas;
// insert window onload function
window.onload = function() {
	canvas = document.getElementById('canvas');
	c = canvas.getContext('2d')//method of every document of canvas element

	draw();
}
//create image variables
var bg = new Image();
var l = new Image();
var o = new Image();
bg.src = './board.png';
l.src = './one.png';
o.src = './zero.png';

function draw () {
	c.clearRect(0,0,500,500);

	c.

};