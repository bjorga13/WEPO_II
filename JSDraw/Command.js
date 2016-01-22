var Command = Shape.extend({

	constructor: function() {
		this.base("Command");
	},

	undoCommand: function(){

	},

	redoCommand: function(){

	}
});

var AddShapeCommand = Command.extend({
	constructor: function(shape) {
		this.shape = shape;
	},

	undoCommand: function(){
		g_drawing.shapes.removeItem(this.shape);
		redraw();
	},

	redoCommand: function(){
		g_drawing.shapes.push(this.shape);
		redraw();	
	}
});

var DeleteSelectedCommand = Command.extend({
	constructor: function(arrSelected) {
		this.arrSelected = arrSelected;
	},

	undoCommand: function(){
		for(var i = 0; i < this.arrSelected.length; i++){
			g_drawing.shapes.push(this.arrSelected[i]);
		}
		redraw();
	},

	redoCommand: function(){
		for(var i = 0; i < this.arrSelected.length; i++){
			g_drawing.shapes.removeItem(this.arrSelected[i]);
		}
		redraw();	
	}
});

var MoveCommand = Command.extend({
	constructor: function(arrShapes, startPoint, endPoint) {
		this.startPoint = startPoint;
		this.endPoint = endPoint;
		this.shapes = arrShapes.copyArray();
	},

	undoCommand: function(){
		this.swapPositions(this.endPoint, this.startPoint);
	},

	redoCommand: function(){
		this.swapPositions(this.startPoint, this.endPoint);
	},

	swapPositions: function(ptStart, ptEnd){
		for(var i = 0; i < this.shapes.length; i++){
			this.shapes[i].beginMove(ptStart.x, ptStart.y);
			this.shapes[i].moveTo(ptEnd.x, ptEnd.y);
		}
		redraw();
	}
});

var ClearCommand = Command.extend({
	constructor: function(arrShapes, arrSelected) {
		this.shapes = arrShapes.copyArray();
		this.selectedShapes = arrSelected.copyArray();
	},

	undoCommand: function(){
		var i = 0
		for(; i < this.shapes.length; i++){
			g_drawing.shapes.push(this.shapes[i]);
		}
		for(; i < this.selectedShapes.length; i++){
			g_drawing.selectedShapes.push(this.selectedShapes[i]);
		}
		redraw();
	},

	redoCommand: function(){
		this.shapes = g_drawing.shapes.copyArray();

		g_drawing.shapes = [];
		g_drawing.selectedShapes = [];
		redraw();
	},
});