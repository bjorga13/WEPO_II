var Circle = Shape.extend({

	constructor: function() {
		this.base("Circle");
	},

	draw: function(canvas) {
		var radius = this.size.x / 2;
		canvas.strokeStyle = this.color;
		canvas.beginPath();
		canvas.arc(this.pos.x, this.pos.y, this.radius, Math.PI*2, false);
		canvas.stroke();
		this.base(canvas);
	},

	drawing:function(point) {
		this.radius = Math.sqrt(Math.pow(point.x - this.pos.x, 2) + Math.pow(point.y - this.pos.y, 2));
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