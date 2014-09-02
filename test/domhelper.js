exports.setup = function(){
	//not super happy about this...
	/* jshint ignore:start */
	document = {
		getElementById: function() {
			return {
				getContext: function() {
					return null;
				}
			};
		}
	};
	window = {
		requestAnimationFrame: function(callback){
			callback();
		}
	};
	/* jshint ignore:end */
};