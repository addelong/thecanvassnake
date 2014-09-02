/*jslint browser: true*/

exports.canvasElement = document.getElementById("canvas");

exports.context = document.getElementById("canvas").getContext("2d");

//from http://diveintohtml5.info/storage.html
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

exports.getScaleFactor = function() {
	if ('devicePixelRatio' in window) {
        if (window.devicePixelRatio > 1) {
            return window.devicePixelRatio;
        }
    }
    return 1;
};

exports.requestAnimationFrame = function(callback){
	var animationFrame = window.requestAnimationFrame ||
					      window.webkitRequestAnimationFrame ||
					      window.mozRequestAnimationFrame;
	animationFrame.call(window, callback);
};

var updateHighScore = function(score){
	var newHighScore = score;
	if (supports_html5_storage()){
		var localStorageScore = parseInt(localStorage.getItem("highScore"));
		if (!isNaN(localStorageScore)){
			newHighScore = Math.max(score, localStorageScore);
		}		
		localStorage.setItem("highScore", newHighScore);
	}
	document.getElementById("highScore").innerHTML = newHighScore;
};

exports.updateScore = function(score){
	document.getElementById("score").innerHTML = score;
	updateHighScore(score);
};

exports.updateHighScore = updateHighScore;
