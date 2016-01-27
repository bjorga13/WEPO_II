var Pen = Shape.extend({

	constructor: function() {
		this.base("Pen");
	},
	
	draw: function(canvas) {

		var radius = 2;
		canvas.lineWidth = radius * 2;
		canvas.lineTo(this.pos.x, this.pos.y);
		canvas.stroke();
		canvas.beginPath();
		canvas.arc(this.pos.x, this.pos.y, radius, Math.PI*2, false);
		canvas.fill();
		canvas.beginPath();
		canvas.moveTo(this.size.x, this.size.y);		
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