(function main() {
	canvas = setupCanvas();
	ctx = canvas.getContext("2d");

	var interval = setInterval(function() {
		drawRandomRect(ctx);
	}, 1)

	document.body.appendChild(canvas);
}).call(this);


//EFFECTS: Performs the setup of the HTML5 canvas.
function setupCanvas() {
	var canvas = document.createElement("canvas");
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	
	return canvas;
}

//MODIFIES: ctx
//EFFECTS:  Draws a new square in a random location every millisecond
function drawRandomRect(ctx) {
	redValue = Math.random() * 255;
	greenValue = Math.random() * 255;
	blueValue = Math.random() * 255;

	ctx.fillStyle = "rgb(" + String(parseInt(redValue, 10))
		 + ", " + String(parseInt(greenValue, 10)) 
		 + ", " + String(parseInt(blueValue, 10)) 
		 + ")";

	var x = Math.random() * innerWidth;
	var y = Math.random() * innerHeight;

	ctx.fillRect(x, y, 50 * Math.random(), 50 * Math.random());
}