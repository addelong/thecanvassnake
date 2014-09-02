exports.scale = function(dom){
	var scaleFactor = dom.getScaleFactor();
	if (scaleFactor > 1) {
		var oldWidth = dom.canvasElement.width;
		var oldHeight = dom.canvasElement.height;
	    dom.canvasElement.width = dom.canvasElement.width * scaleFactor;
	    dom.canvasElement.height = dom.canvasElement.height * scaleFactor;
	    dom.canvasElement.style.width = oldWidth + 'px';
	    dom.canvasElement.style.height = oldHeight + 'px';
	    dom.context.scale(scaleFactor, scaleFactor);
	}
};

exports.fill = function(dom){
	dom.context.fillStyle = "black";
	dom.context.fillRect(0, 0, dom.canvasElement.width, dom.canvasElement.height);
};