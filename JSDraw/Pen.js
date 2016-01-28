var Pen = Shape.extend({

	constructor: function() {
		this.base("Pen");
		this.path = new Array();
	},
	draw: function(canvas) {

		canvas.strokeStyle = this.color;
		canvas.beginPath();
		
		canvas.moveTo(this.path[0].x + this.pos.x, this.path[0].y + this.pos.y);

		for (var i = 1; i < this.path.length; i++) {
			canvas.lineTo(this.path[i].x + this.pos.x, this.path[i].y + this.pos.y);
		}
		this.base(canvas);
		canvas.stroke();	

	},

	drawing:function(point) {
		this.path.push(point.substract(this.pos));
	},

	added: function(canvas) {
		var p = new Point(this.pos.x, this.pos.y);
		this.path.push(this.pos);

	},	
	drawingStop:function(point) {
		this.path.push(point.substract(this.pos));
	},
	drawingStart:function(point) {
		this.path.push(point.substract(this.pos));
	}

});