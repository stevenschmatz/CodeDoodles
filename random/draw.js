(function() {
	var canvas = document.createElement("canvas");
	canvas.width = innerWidth;
	canvas.height = innerHeight;

	ctx = canvas.getContext("2d");

	document.body.appendChild(canvas);

}).call(this);