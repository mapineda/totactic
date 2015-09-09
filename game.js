//define global var
var canvas, ctx;
//test tile
var data;
// window onload
window.onload = function main () {

	canvas = document.createElement('canvas');
	ctx = canvas.getContext('2d');

	document.body.appendChild(canvas);

	init();
	tick();

}

function init() {
	if (data == null) 
		data = [];

		for (var i=0, 0< 9; i++) {
			var x = (i % 3)*120 + 20;
			var y = Math.floor(i/3)*120+20;
			data.push(new Tile(x, y));
		}

	
}

function tick() {
	window.requestAnimationFrame(tick);

	update();
	render();
}

function update() {
	for (var i= data.length; i--;) {
		data[i].update();
	}

}

function render() {
	ctx.clearRect(0 , 0, canvas.width, canvas.height);

	for (var i = data.length; i--;) {
		data[i].draw(ctx);
	}

}
// added tile function
function Title(x, y) {

	var x = x, y = y;

	var tile = Tile.BLANK;
	var anim = 0;

	if (tile == null) {

		var _c = document.createElement('canvas');
		_ctx = _c.getContext('2d');

		_ctx.fillstyle = 'skyblue';
		_ctx.lineWidth = 4;
		_ctx.strokeStyle = "white";
		_ctx.lineCap = "round";

		// Blank
		_ctx.fillRect(0,0, 125, 125);
		Tile.BLANK = new Image();
		Tile.BLANK.src = ct.toData();

		tile.Tile.BLANK
	}

	this.update = function() {

	}

	this.draw = function(ctx) {
		ctx.drawImage(tile, x, y);
	}
}