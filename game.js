//define global var
var canvas, ctx;
// window onload
window.onload = function main () {

	canvas = document.createElement('canvas');
	ctx = canvas.getContext('2d');

	document.body.appendChild(canvas);

	init();
	tick();

}

function init() {

}

function tick() {
	window.requestAnimationFrame(tick);

	update();
	render();
}

function update() {

}

function render() {

}

function Title(x,y) {
	var x=x. y=y;
}