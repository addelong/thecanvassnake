var _ = require('underscore');

var food = {x: 0, y: 0};

var generateNewFood = function(canvasHeight, canvasWidth, snakePieces){
	var foodX, foodY;

	var minX = Math.min(_.first(snakePieces).x, _.last(snakePieces).x);
	var maxX = Math.max(_.first(snakePieces).x, _.last(snakePieces).x);
	var minY = Math.min(_.first(snakePieces).y, _.last(snakePieces).y);
	var maxY = Math.max(_.first(snakePieces).y, _.last(snakePieces).y);

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
exports.food = food;