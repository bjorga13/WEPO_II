var text = Shape.extend({

	constructor: function() {
		this.base("text");
	},

	draw: function(canvas) {
		canvas.strokeStyle = this.color;	
		var userInput = Input.value;
        rectangledText(this.pos.x, this.pos.y, 150, userInput, 12, 'verdana');
		if (Input.style.display === "none") {
        	Input.value = "";
        	Input.style.top = this.pos.x + 'px';
        	Input.style.left = this.pos.y + 'px';
        	Input.style.display = "block";
        }   
	},

	rectangledText: function (x, y, width, text, fontsize, fontface){
	 	self.TextWidth = ctx.measureText(Text).width;
        var height = wrapText(this.pos.x, this.pos.y, text, fontsize, fontface, width)
		canvas.strokeRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
	 },

	 wrapText: function(x, y, text, fontsize, fontface, maxwidth){
      	this.pos.x = x;
      	this.pos.y = y;
        var words = text.split(' ');
        var line = '';
        var space = '';
        var lineHeight = fontsize * 1.286;
        canvas.font = fontsize + "px " + fontface;
        canvas.textAlign = 'left';
        canvas.textBaseline = 'top'
        for (var n = 0; n < words.length; n++) {
            var testLine = line + space + words[n];
            space = ' ';
            if (canvas.measureText(testLine).width > maxwidth) {
                canvas.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
                space = '';
            } else {
                line = testLine;
            }
        }
        canvas.fillText(line, x, y);
        return (y + lineHeight - this.pos.y);
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