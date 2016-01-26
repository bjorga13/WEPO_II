var Circle = Shape.extend({

	constructor: function() {
		this.base("Circle");
	},

	draw: function(canvas) {
		var radius = this.size.x / 2;
		var c = document.getElementById("canvas");
		var canvas=c.getContext("2d");
		canvas.beginPath();
		canvas.arc(this.pos.x, this.pos.y, radius, 0,2*Math.PI);
		canvas.stroke();
		this.base(canvas);
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