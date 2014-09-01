exports.scale = function(canvas, context, scaleFactor){
	if (scaleFactor > 1) {
		var oldWidth = canvas.width;
		var oldHeight = canvas.height;
	    canvas.width = canvas.width * scaleFactor;
	    canvas.height = canvas.height * scaleFactor;
	    canvas.style.width = oldWidth + 'px';
	    canvas.style.height = oldHeight + 'px';
	    context.scale(scaleFactor, scaleFactor);
	}
};

exports.fill = function(canvas, context){
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height);
};