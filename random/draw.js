(function main() {
	canvas = setupCanvas();
	ctx = canvas.getContext("2d");



	document.body.appendChild(canvas);
}).call(this);


//EFFECTS: Performs the setup of the HTML5 canvas.
function setupCanvas() {
	var canvas = document.createElement("canvas");
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	
	return canvas;
}