var Pen = Shape.extend({

	constructor: function() {
		this.base("Pen");
	},

	draw: function(canvas) {
		var c = document.getElementById("canvas");
		canvas.strokeStyle = this.color;
		var canvas = c.getContext("2d");
	},

	drawing:function(point) {
		this.size.x = point.x - this.pos.x;
		this.size.y = point.y - this.pos.y;
	},

	added: function(canvas) {
		if(this.size.x < 0) {
			this.pos.x += this.size.x;
			this.size.x = Math.abs(this.size.x);
		}

		if(this.size.y < 0) {
			this.pos.y += this.size.y;
			this.size.y = Math.abs(this.size.y);
		}
	},	

});