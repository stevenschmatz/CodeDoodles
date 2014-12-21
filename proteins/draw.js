(function main() {
	canvas = setupCanvas();
	ctx = canvas.getContext("2d");

	var xPosition = innerWidth/2;
	var yPosition = innerHeight/2;
	ctx.moveTo(xPosition, yPosition);

	for (var i = 0; i < 1000; i++) {
		xPosition += 10*(Math.random() - 0.5);
		yPosition += 10*(Math.random() - 0.5);
		ctx.lineTo(xPosition, yPosition);
	}

	ctx.stroke();

	document.body.appendChild(canvas);
}).call(this);


//EFFECTS: Performs the setup of the HTML5 canvas.
function setupCanvas() {
	var canvas = document.createElement("canvas");
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	
	return canvas;
}