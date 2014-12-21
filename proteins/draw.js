(function main() {
	canvas = setupCanvas();
	ctx = canvas.getContext("2d");

	drawRandomWalk(ctx);

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
//EFFECTS:  Draws a random walk.
function drawRandomWalk(ctx) {

	var xPosition = innerWidth/2;
	var yPosition = innerHeight/2;
	ctx.moveTo(xPosition, yPosition);

	for (var i = 0; i < 50000; i++) {
		xPosition += 5*(Math.random() - 0.5);
		yPosition += 5*(Math.random() - 0.5);
		ctx.lineTo(xPosition, yPosition);
	}

	ctx.stroke();
}