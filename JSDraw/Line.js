var Line = Shape.extend({

	constructor: function() {
		this.base("Line");
	},

	draw: function(canvas) {
		canvas.beginPath();
		canvas.strokeStyle = this.color;
		canvas.moveTo(this.size.x, this.size.y);
		canvas.lineTo(this.pos.x, this.pos.y);
		
		canvas.stroke();
	},

	drawing:function(point) {
		this.size.x = point.x;
		this.size.y = point.y;
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
