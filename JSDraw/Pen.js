var Pen = Shape.extend({

	constructor: function() {
		this.base("Pen");
	},

	draw: function(canvas) {
		

		canvas.strokeStyle = this.color;
		
  		canvas.lineJoin = "round";
		for(var i=0; i < Pen.length; i++) 
		{		
	    	context.beginPath();
		    if(clickDrag[i] && i)
		    {
		      context.moveTo(this.x[i-1], this.y[i-1]);
		    }
		    else
		    {
		       context.moveTo(this.x[i]-1, this.y[i]);
		    }
		    context.lineTo(this.x[i], this.y[i]);
		    context.closePath();
		    context.stroke();
		}
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