/*jslint browser: true*/

function backingScale() {
    if ('devicePixelRatio' in window) {
        if (window.devicePixelRatio > 1) {
            return window.devicePixelRatio;
        }
    }
    return 1;
}

exports.initialize = function() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var scaleFactor = backingScale();

	if (scaleFactor > 1) {
		var oldWidth = canvas.width;
		var oldHeight = canvas.height;
	    canvas.width = canvas.width * scaleFactor;
	    canvas.height = canvas.height * scaleFactor;
	    canvas.style.width = oldWidth + 'px';
	    canvas.style.height = oldHeight + 'px';
	    context.scale(scaleFactor, scaleFactor);
	}
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height);
};