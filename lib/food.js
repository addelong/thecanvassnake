var food = {x: 0, y: 0};

var generateNewFood = function(canvasHeight, canvasWidth, snakePieces){
	var foodX, foodY;

	var minX = Math.min(snakePieces[0].x, snakePieces[snakePieces.length-1].x);
	var maxX = Math.max(snakePieces[0].x, snakePieces[snakePieces.length-1].x);
	var minY = Math.min(snakePieces[0].y, snakePieces[snakePieces.length-1].y);
	var maxY = Math.max(snakePieces[0].y, snakePieces[snakePieces.length-1].y);

	//naive implementation - just keep generating new food until we find one that's an acceptable distance away from the snake
	var foodInGoodSpot = false;

	while (!foodInGoodSpot){
		foodX = Math.ceil(Math.random() * (canvasWidth - 3)) + 1;
		foodY = Math.ceil(Math.random() * (canvasHeight - 3)) + 1;

		if ((foodX < (minX - 5) || foodX > (maxX + 5)) &&
			(foodY < (minY - 5) || foodY > (maxY + 5))){
			foodInGoodSpot = true;
		}
	}

	food.x = foodX;
	food.y = foodY;
	return;
};

exports.generateNewFood = generateNewFood;

exports.getFood = function(){
	return food;
};