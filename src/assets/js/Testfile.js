(function (cjs, an) {
var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CompoundPath_18 = function() {
	this.initialize(img.CompoundPath_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1013,23);


(lib.CompoundPath_27 = function() {
	this.initialize(img.CompoundPath_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1152,11);


(lib.outerCellBitmap = function() {
	this.initialize(img.outerCellBitmap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,495,388);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol108 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#5F5FA3","#4D4D95","#494992"],[0.114,0.871,1],0,0,0,0,0,25).beginStroke().moveTo(23.2,12.6).curveTo(22.6,9.5,19.6,8.5).curveTo(17.3,7.9,14.3,9.6).curveTo(10.7,11.6,7.5,11.6).curveTo(4,11.4,-4.4,5.2).curveTo(-14.5,-2.4,-18,-3.9).curveTo(-23.4,-6.3,-27.1,-3.8).curveTo(-28.9,-2.5,-29.7,-0.8).curveTo(-30.7,-7.7,-28.1,-13.9).lineTo(-25.3,-18.6).curveTo(-24.3,-13.3,-21.5,-11.6).curveTo(-19.2,-10.2,-13.3,-10.3).curveTo(-10.9,-10.3,0.2,-11.7).curveTo(8.1,-12.7,12.5,-11.7).curveTo(16,-11,18.4,-7.9).curveTo(21.1,-4.4,23,-3.7).curveTo(26.9,-2.2,30,-8.8).curveTo(29.5,-6.4,28.1,-2.5).lineTo(26.2,3.1).curveTo(25.7,5.1,24.8,11.4).curveTo(24.2,15.4,22.4,18.6).curveTo(23.6,15,23.2,12.6).closePath();
	this.shape.setTransform(32.476,27.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginRadialGradientFill(["#9494C1","#7D7DB3","#494992"],[0,0.294,1],0.1,0,0,0.1,0,59.4).beginStroke().moveTo(8.4,26.4).curveTo(-0.3,25.7,-9.5,20.2).curveTo(-18.3,14.9,-22.4,11.8).curveTo(-27.8,7.6,-30.2,3.5).curveTo(-32.8,-0.9,-30.1,-10.3).curveTo(-27.4,-19.7,-22.7,-22.8).curveTo(-16.4,-26.8,2.3,-26.5).curveTo(11,-26.4,18.2,-24.7).curveTo(26,-22.9,28.6,-20).curveTo(32.7,-15.5,31,-8).curveTo(30.5,-5.6,29.1,-1.7).lineTo(27.2,3.9).curveTo(26.7,6,25.8,12.2).curveTo(25.2,16.2,23.4,19.4).curveTo(19.4,26.5,10.3,26.5).lineTo(8.4,26.4).closePath();
	this.shape_1.setTransform(31.4825,26.5048);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,63,53);
p.frameBounds = [rect];


(lib.Symbol107 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#5F5FA3","#4D4D95","#494992"],[0.114,0.871,1],-1.7,-0.9,0,-1.7,-0.9,27).beginStroke().moveTo(-18.5,25.4).lineTo(-22.2,21.5).curveTo(-17.2,21.8,-15.1,18.7).curveTo(-13.4,16.2,-13.1,10.4).curveTo(-12.8,3.9,-9.4,-1.2).curveTo(-7.1,-4.8,-1.1,-10.5).curveTo(2.5,-13.9,3.5,-17).curveTo(4.5,-19.6,3.9,-23.1).curveTo(3.6,-25.3,2.6,-27.1).curveTo(1.4,-29.2,-0.5,-30.2).curveTo(1,-30.1,2.2,-29.7).curveTo(6.9,-28.4,11.7,-25.6).curveTo(17.8,-22,21.9,-17).lineTo(22.2,-16.6).curveTo(19.6,-18.3,16,-17.6).curveTo(12.3,-16.8,9.7,-13.9).curveTo(7.4,-11.2,6.6,-7).lineTo(4.8,1.3).curveTo(3.6,5.1,0.8,8.7).lineTo(-6.1,17.1).curveTo(-9.7,21.8,-8.7,26.5).curveTo(-8.2,28.8,-7,30.2).curveTo(-13.4,29.5,-18.5,25.4).closePath();
	this.shape.setTransform(26.575,30.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginRadialGradientFill(["#9494C1","#7D7DB3","#494992"],[0,0.294,1],133.2,351,0,133.2,351,58.3).beginStroke().moveTo(-14.9,27.7).curveTo(-22,23.8,-24.6,17.4).curveTo(-27.5,10.3,-22.7,-6.1).curveTo(-20.4,-14,-16.6,-20.3).curveTo(-12.9,-26.4,-9.4,-28.4).curveTo(-4.3,-31.1,0.4,-30.6).curveTo(1.9,-30.4,3.1,-30.1).curveTo(7.8,-28.8,12.6,-25.9).curveTo(18.7,-22.3,22.8,-17.3).lineTo(23.1,-16.9).curveTo(27.3,-11.3,24.6,-2.1).curveTo(22.5,5.1,16.4,13.8).curveTo(6,28.5,-2.7,30.4).curveTo(-4,30.7,-5.3,30.7).curveTo(-9.7,30.7,-14.9,27.7).closePath();
	this.shape_1.setTransform(25.6748,30.6932);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,51.4,61.4);
p.frameBounds = [rect];


(lib.Symbol105 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7070C1").beginStroke().moveTo(21.7,15.6).curveTo(21.9,14.7,21.6,13.8).curveTo(21.2,12.5,20,11.4).lineTo(17.2,9).lineTo(13.6,6.4).lineTo(11.6,5.1).lineTo(9.5,3.7).curveTo(7,2.2,4.9,1.1).lineTo(2.5,0).curveTo(1.1,-0.5,-0,-0.2).lineTo(-0.5,0).lineTo(-1.2,0.4).curveTo(-1.8,0.7,-2.6,0.7).curveTo(-4.1,0.7,-5.3,-0.3).curveTo(-5.9,-0.8,-6.2,-1.4).lineTo(-6.6,-2).lineTo(-6.8,-2.7).curveTo(-7.1,-3.5,-7,-4.1).curveTo(-6.9,-5.1,-7,-5.3).curveTo(-7.3,-5.9,-8.6,-7.1).lineTo(-10.5,-8.5).lineTo(-21.9,-15.8).lineTo(-19.7,-14.6).lineTo(-14,-11.2).lineTo(-10.2,-8.9).lineTo(-8.2,-7.4).curveTo(-7.1,-6.5,-6.5,-5.5).curveTo(-6.4,-5.1,-6.4,-4.7).lineTo(-6.4,-4).curveTo(-6.5,-3.5,-6.3,-2.9).lineTo(-5.7,-1.8).lineTo(-4.9,-0.8).curveTo(-3.8,0.1,-2.6,0).curveTo(-1.9,0.1,-1.4,-0.2).lineTo(-0.9,-0.5).lineTo(-0.2,-0.9).curveTo(1,-1.2,2.7,-0.6).lineTo(5.2,0.6).curveTo(7.5,1.8,9.8,3.3).curveTo(12,4.7,13.9,6.1).lineTo(17.4,8.8).lineTo(18.9,10).lineTo(19.6,10.6).lineTo(20.2,11.3).curveTo(21.4,12.6,21.7,13.7).curveTo(22,14.6,21.7,15.6).lineTo(21.6,15.9).lineTo(21.7,15.6).closePath();
	this.shape.setTransform(28.7568,29.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#7070C1","#6B6BBE","#5D5DB4","#5858B0"],[0.031,0.424,0.878,1],1.2,0.7,-1.1,-0.8).beginStroke().moveTo(-2.3,1.8).curveTo(-2.6,1.5,-2.3,1).lineTo(-1.6,0.2).curveTo(-1.3,-0.2,-0.6,-0.7).curveTo(0.3,-1.6,0.8,-1.8).lineTo(1.9,-2).lineTo(2.4,-2).lineTo(2.4,-1.6).lineTo(2.2,-0.9).curveTo(2.2,-0.8,2.1,-0.7).curveTo(2.1,-0.6,2,-0.6).curveTo(2,-0.6,1.9,-0.7).curveTo(1.9,-0.7,1.8,-0.8).curveTo(1.6,-1.1,1.1,-0.7).lineTo(0.5,-0.3).curveTo(0.5,-0.1,-0.6,0.7).curveTo(-1.2,1.2,-1.6,1.6).lineTo(-1.8,1.9).lineTo(-2,2).curveTo(-2,2,-2.1,2).curveTo(-2.1,2,-2.1,2).curveTo(-2.2,2,-2.2,1.9).curveTo(-2.3,1.9,-2.3,1.8).closePath();
	this.shape_1.setTransform(53.3183,30.0067);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#7070C1","#6B6BBE","#5D5DB4","#5858B0"],[0.031,0.424,0.878,1],3.2,-4.3,-2.3,4.4).beginStroke().moveTo(-1.7,3.8).curveTo(-2,3,-1.8,2).lineTo(-1.5,0.3).curveTo(-1.2,-0.8,-0.8,-1.4).lineTo(1.5,-5.4).curveTo(2.2,-4.8,1.5,-3.4).lineTo(0.2,-1.6).curveTo(-0.2,-0.8,-0.4,0.1).lineTo(-0.7,1.8).curveTo(-0.9,3.5,-0.6,5.5).curveTo(-1.4,5,-1.7,3.8).closePath();
	this.shape_2.setTransform(43.712,44.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginLinearGradientFill(["#46467F","#343464","#2B2B57"],[0,0.706,1],-0.7,1.7,4.8,-5.8).beginStroke().moveTo(20.6,17).lineTo(18.6,15).curveTo(14.4,11.9,10,9).curveTo(1.1,3.3,-0.6,4.5).curveTo(-2.7,6.1,-4.8,4.6).curveTo(-6.9,3.2,-6.7,1).curveTo(-6.5,-0.7,-9.1,-2.8).lineTo(-11.8,-4.6).curveTo(-18.5,-8.6,-20.9,-10.1).curveTo(-23,-11.4,-26,-10.3).lineTo(-28.7,-8.9).curveTo(-28.4,-11.7,-24.5,-17.1).curveTo(-22.6,-19.8,-20.8,-21.9).curveTo(-21.5,-20.6,-20.9,-19).curveTo(-20.7,-18.1,-20.2,-17.6).lineTo(-5.3,-8.3).curveTo(-2.1,-6.8,-1,-7.9).curveTo(0.4,-9.3,3,-7.7).curveTo(5.4,-6.1,5,-4.3).curveTo(4.7,-2.8,6.3,-1.3).curveTo(7.2,-0.5,8,-0.1).lineTo(22.1,8.8).curveTo(24.5,10.3,26.8,9.2).curveTo(28,8.6,28.7,7.7).curveTo(28.7,12.9,24.8,17.9).lineTo(21.1,22).curveTo(22.3,19.5,20.6,17).closePath();
	this.shape_3.setTransform(29.05,24.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginRadialGradientFill(["#5F5FA3","#5C5CA1","#54549A","#494992"],[0.114,0.545,0.82,1],0.6,-0.3,0,0.6,-0.3,20.3).beginStroke().moveTo(11.1,25).curveTo(7.6,24.4,3.7,22.3).curveTo(1.1,21,-3.1,18.2).curveTo(-11.5,12.6,-16.8,8.3).curveTo(-23.2,3.2,-23.8,2.7).curveTo(-27.6,-0.9,-28.6,-4.7).curveTo(-29.2,-7.2,-28.5,-9.5).curveTo(-28.2,-10.6,-27.1,-12.8).curveTo(-25.6,-15.6,-24.1,-17.9).lineTo(-20.6,-22.5).curveTo(-18.3,-25.5,-11.9,-25.2).curveTo(-6.8,-24.9,-3.8,-23.4).curveTo(8,-17.2,16.1,-10.7).curveTo(22.1,-5.9,24.2,-3.6).curveTo(28.3,0.9,28.8,5.8).curveTo(29.3,11.7,25.3,17.1).curveTo(21.8,21.9,16,24.8).curveTo(15.6,25,14.3,25.1).lineTo(12.9,25.2).curveTo(12,25.2,11.1,25).closePath();
	this.shape_4.setTransform(28.8518,25.2262);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,57.8,50.5);
p.frameBounds = [rect];


(lib.Symbol102 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#7A7AB2","#7878B1","#7171AC","#6666A4","#6161A1"],[0.114,0.639,0.831,0.965,1],-17.5,6.9,15.8,-7.7).beginStroke().moveTo(5.7,25.2).curveTo(4.2,24.8,3.7,23.1).curveTo(3.1,21.4,-14.6,-20.2).curveTo(-15,-21.3,-14.9,-22.5).curveTo(-14.5,-24.8,-11.8,-25.2).curveTo(-8.7,-25.7,-5.8,-24.9).curveTo(-2,-23.9,-0.6,-21.2).lineTo(7.3,-5.9).curveTo(13.8,8,14.9,16.6).curveTo(15.1,18.5,14.1,20.5).curveTo(12.3,24.5,7,25.4).lineTo(6.6,25.4).curveTo(6.2,25.4,5.7,25.2).closePath();
	this.shape.setTransform(27.7398,28.0299);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#7A7AB2","#7878B1","#7171AC","#6666A4","#6161A1"],[0.114,0.639,0.831,0.965,1],21.1,-8,-12,5.1).beginStroke().moveTo(4.9,25.5).lineTo(1.6,23.5).curveTo(-3.7,16.6,-9,2.3).curveTo(-9.9,-0.1,-14.3,-14.1).curveTo(-15.3,-17,-13.3,-20.3).curveTo(-11.9,-22.6,-9.3,-24.9).curveTo(-7.3,-26.7,-5.6,-25.5).curveTo(-4.8,-24.9,-4.3,-24).curveTo(13.4,18.3,14.2,19.9).curveTo(15,21.5,14.3,22.8).curveTo(14,23.5,13.5,23.8).curveTo(10.5,26,7.6,26).curveTo(6.3,26,4.9,25.5).closePath();
	this.shape_1.setTransform(16.6729,31.4135);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#46467F","#343464","#2B2B57"],[0,0.706,1],-2.6,1,2.3,-0.9).beginStroke().moveTo(9.4,26.1).lineTo(9.8,24.6).lineTo(-9.2,-20.9).curveTo(-10.5,-24,-12.8,-25.1).lineTo(-14.9,-25.6).lineTo(-13.7,-26.1).curveTo(-12.3,-26.6,-11.6,-26.6).curveTo(-10.6,-26.7,-10.1,-27.1).curveTo(-8.4,-28.4,-7.8,-28.4).curveTo(-9.4,-27.5,-9.3,-25.1).curveTo(-9.2,-23.8,-8.9,-22.8).lineTo(11,23.9).curveTo(11.6,25.1,13.3,25.5).curveTo(14.2,25.6,14.9,25.6).curveTo(14.1,26,12.4,26.1).lineTo(10.7,26.2).curveTo(9.9,27.5,7.6,28.4).curveTo(8.8,27.7,9.4,26.1).closePath();
	this.shape_2.setTransform(21.725,29.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginRadialGradientFill(["#5F5FA3","#5D5DA2","#56569C","#4B4B93","#494992"],[0.114,0.655,0.847,0.988,1],-0.6,-0.2,0,-0.6,-0.2,24).beginStroke().moveTo(-5.1,27).curveTo(-7.4,25.1,-9,22).curveTo(-13.5,13.1,-15,9.7).curveTo(-18.4,2.6,-20.2,-3.1).curveTo(-22.3,-9.5,-22.4,-13.2).curveTo(-22.6,-18.9,-19.2,-22.6).curveTo(-15.5,-26.7,-11.9,-26.9).curveTo(-11.2,-27,-10.2,-27.7).lineTo(-8.7,-28.6).curveTo(-1,-31.3,5.3,-25.1).curveTo(9.6,-20.8,13.4,-11.8).curveTo(14.5,-9.1,16.4,-4).curveTo(18.3,1.3,19.3,3.7).curveTo(21.8,9.9,22.3,12.7).curveTo(23.1,18.1,20.1,21.5).curveTo(19,22.7,17.3,23.7).lineTo(16.3,24.3).curveTo(14.5,25.5,12.1,25.9).lineTo(10,26).curveTo(7.5,28.6,3.4,29.3).lineTo(-0.2,29.4).curveTo(-2.7,29.2,-5.1,27).closePath();
	this.shape_3.setTransform(22.4384,29.4032);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,44.9,58.8);
p.frameBounds = [rect];


(lib.Symbol100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(-1.3,3.9).curveTo(-2,3.9,-2.7,3.4).curveTo(-3.3,3.1,-3.8,2.5).curveTo(-4.6,1.2,-4.1,-0.4).curveTo(-3.7,-2.1,-2.1,-3.2).curveTo(-0.6,-4.2,1.1,-4).curveTo(2.8,-3.8,3.7,-2.4).curveTo(4.2,-1.7,4.3,-0.9).curveTo(4.4,-0.1,4.1,0.6).curveTo(3.6,2.3,2,3.2).curveTo(0.8,4,-0.6,4).lineTo(-1.3,3.9).closePath();
	this.shape.setTransform(4.3217,27.202);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-8.4,6.4).curveTo(-8.5,6.4,-8.5,6.4).curveTo(-8.6,6.4,-8.7,6.4).curveTo(-8.7,6.3,-8.8,6.3).curveTo(-8.8,6.3,-8.9,6.2).curveTo(-9,6,-8.9,5.7).curveTo(-8.9,5.5,-8,4).curveTo(-6.5,2.1,-3.9,0.2).lineTo(5.9,-6.3).curveTo(6.4,-6.7,6.8,-6.1).curveTo(6.9,-5.9,6.9,-5.6).curveTo(6.8,-5.3,6.6,-5.2).lineTo(-3.2,1.2).curveTo(-6.1,3.2,-7.3,5.3).curveTo(-2.4,5.3,0.2,3.6).curveTo(1.1,3.1,4.5,0.5).lineTo(7.8,-1.9).curveTo(8,-2.1,8.3,-2.1).curveTo(8.6,-2,8.8,-1.8).curveTo(9.1,-1.2,8.6,-0.8).curveTo(2.2,3.9,0.9,4.6).curveTo(-0.3,5.4,-2.3,5.9).curveTo(-3.4,6.2,-4.9,6.3).curveTo(-6,6.5,-7.1,6.5).lineTo(-8.4,6.4).closePath();
	this.shape_1.setTransform(12.9521,20.2351);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.9).beginStroke().moveTo(-0.7,4.8).curveTo(-1.6,4.5,-2.4,3.9).curveTo(-3.1,3.4,-3.8,2.5).curveTo(-4.9,0.8,-4.7,-1.2).curveTo(-4.4,-3.2,-2.9,-4.3).curveTo(-1.4,-5.4,0.5,-4.8).curveTo(2.5,-4.2,3.7,-2.4).curveTo(4.4,-1.4,4.6,-0.5).curveTo(4.8,0.5,4.6,1.5).curveTo(4.3,3.5,2.7,4.5).curveTo(1.7,5,0.7,5).curveTo(-0,5,-0.7,4.8).closePath();
	this.shape_2.setTransform(38.4098,5.0376);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-6.9,6.3).curveTo(-7.2,5.7,-6.7,5.3).lineTo(-3.2,3.3).curveTo(0.9,0.9,3.3,-0.7).curveTo(6.3,-2.7,7.4,-5).curveTo(2.4,-5.7,-0.5,-3.8).lineTo(-8,2).curveTo(-8.5,2.4,-8.9,1.9).curveTo(-9.3,1.4,-8.8,0.9).lineTo(-1.4,-5).curveTo(2.3,-7.4,8.4,-6.2).curveTo(8.7,-6.2,8.9,-5.9).curveTo(9.1,-5.6,9.1,-5.3).curveTo(8.9,-4.5,8.2,-3.4).curveTo(6.8,-1.2,4.1,0.5).curveTo(1.6,2.1,-2.5,4.5).lineTo(-6,6.5).lineTo(-6.4,6.6).curveTo(-6.7,6.6,-6.9,6.3).closePath();
	this.shape_3.setTransform(29.8234,11.9922);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,43.1,31.2);
p.frameBounds = [rect];


(lib.Symbol99 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(-0.9,4.1).curveTo(-2.7,4,-3.6,2.7).curveTo(-4.5,1.6,-4.1,-0.2).curveTo(-3.9,-1.8,-2.4,-3).curveTo(-1,-4.2,0.8,-4.1).curveTo(2.6,-4,3.5,-2.7).curveTo(4.5,-1.4,4.1,0.3).curveTo(3.8,2,2.3,3.1).curveTo(0.9,4.1,-0.7,4.1).lineTo(-0.9,4.1).closePath();
	this.shape.setTransform(4.2331,29.6753);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-8.5,6.8).curveTo(-8.6,6.8,-8.6,6.7).curveTo(-8.6,6.6,-8.6,6.6).curveTo(-8.6,6.5,-8.6,6.5).curveTo(-8.6,6.4,-8.6,6.4).curveTo(-8.6,5.9,-7.8,4.6).curveTo(-6.5,2.4,-4,0.4).lineTo(5.2,-6.8).curveTo(5.7,-7.2,6.2,-6.7).lineTo(6.2,-6.7).curveTo(6.5,-6.1,6,-5.7).lineTo(2.8,-3.4).curveTo(-1.3,-0.3,-3.2,1.3).curveTo(-6,3.5,-7.1,5.8).curveTo(-2.2,5.5,0.3,3.5).lineTo(7.5,-2.5).curveTo(8,-3,8.4,-2.5).curveTo(8.8,-2,8.4,-1.5).lineTo(1.1,4.5).curveTo(-0,5.4,-2,6).curveTo(-4.7,7,-8.1,7).curveTo(-8.1,7,-8.2,7).curveTo(-8.3,7,-8.3,7).curveTo(-8.4,6.9,-8.4,6.9).curveTo(-8.5,6.9,-8.5,6.8).closePath();
	this.shape_1.setTransform(12.4525,22.0984);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(-0.4,4.8).curveTo(-2.3,4.4,-3.6,2.8).curveTo(-4.8,1.1,-4.7,-0.9).curveTo(-4.6,-2.8,-3.2,-4).curveTo(-1.7,-5.2,0.2,-4.8).curveTo(2,-4.5,3.5,-2.7).curveTo(4.8,-0.9,4.7,1.1).curveTo(4.6,3.1,3.1,4.2).curveTo(2,4.9,0.7,4.9).lineTo(-0.4,4.8).closePath();
	this.shape_2.setTransform(36.5247,4.9403);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-6.3,6.7).curveTo(-6.5,6.5,-6.4,6.2).curveTo(-6.4,5.9,-6.1,5.8).lineTo(-2.8,3.5).curveTo(0.3,1.3,3.4,-1).curveTo(6.3,-3.2,7.1,-5.6).curveTo(2.1,-5.9,-0.7,-3.8).lineTo(-7.6,2.5).curveTo(-7.7,2.6,-7.7,2.6).curveTo(-7.8,2.7,-7.8,2.7).curveTo(-7.9,2.7,-7.9,2.7).curveTo(-8,2.7,-8.1,2.7).curveTo(-8.4,2.7,-8.6,2.5).curveTo(-9,2,-8.5,1.5).lineTo(-1.6,-4.9).curveTo(2.1,-7.7,8,-6.9).curveTo(8.4,-6.8,8.6,-6.6).curveTo(8.8,-6.2,8.7,-6).curveTo(8.7,-5.4,8,-4).curveTo(6.9,-1.8,4.3,0.2).lineTo(-2,4.6).lineTo(-5.4,6.9).lineTo(-5.8,7.1).curveTo(-6,7.1,-6.3,6.7).closePath();
	this.shape_3.setTransform(28.3109,12.5627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,41.3,33.8);
p.frameBounds = [rect];


(lib.Symbol98 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(-3.3,3).curveTo(-4.4,1.9,-4.2,0.2).curveTo(-4,-1.6,-2.6,-2.8).curveTo(-1.3,-4.1,0.5,-4.1).curveTo(2.2,-4.2,3.4,-2.9).curveTo(4.4,-1.6,4.2,0.1).curveTo(3.9,1.8,2.5,3).curveTo(1.1,4.2,-0.6,4.2).curveTo(-2.3,4.2,-3.3,3).closePath();
	this.shape.setTransform(4.233,31.849);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-8.2,7.3).curveTo(-8.2,7.3,-8.2,7.2).curveTo(-8.3,7.2,-8.3,7.1).curveTo(-8.3,7,-8.3,7).curveTo(-8.3,6.9,-8.3,6.9).lineTo(-8.2,6.3).lineTo(-7.6,5).curveTo(-6.4,2.7,-4.2,0.6).lineTo(1.5,-4.6).lineTo(4.5,-7.3).curveTo(5,-7.7,5.5,-7.2).lineTo(5.5,-7.2).curveTo(5.9,-6.7,5.4,-6.2).lineTo(2.4,-3.6).lineTo(-3.3,1.5).curveTo(-5.9,4,-6.8,6.1).curveTo(-3.8,5.7,-1.9,4.8).curveTo(-0.8,4.4,0.4,3.4).lineTo(7.1,-3.2).curveTo(7.3,-3.4,7.6,-3.4).curveTo(7.7,-3.4,7.8,-3.4).curveTo(7.8,-3.4,7.9,-3.3).curveTo(7.9,-3.3,8,-3.3).curveTo(8,-3.2,8.1,-3.2).curveTo(8.3,-3,8.3,-2.7).curveTo(8.3,-2.6,8.3,-2.6).curveTo(8.3,-2.5,8.2,-2.4).curveTo(8.2,-2.4,8.2,-2.3).curveTo(8.1,-2.3,8.1,-2.2).curveTo(2.4,3.4,1.2,4.4).curveTo(-1.8,7,-7.7,7.5).lineTo(-7.7,7.5).lineTo(-8.2,7.3).closePath();
	this.shape_1.setTransform(12.0583,23.7859);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(-0,4.8).curveTo(-2,4.5,-3.3,2.9).curveTo(-4.7,1.4,-4.8,-0.5).curveTo(-4.8,-2.5,-3.5,-3.8).curveTo(-2.1,-5,-0.1,-4.8).curveTo(1.9,-4.6,3.4,-3).curveTo(4.8,-1.3,4.8,0.7).curveTo(4.8,2.7,3.4,3.9).curveTo(2.2,4.8,0.8,4.8).lineTo(-0,4.8).closePath();
	this.shape_2.setTransform(34.6241,4.8672);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-5.6,7.2).lineTo(-5.6,7.2).curveTo(-6,6.7,-5.5,6.2).lineTo(-2.4,3.7).lineTo(3.4,-1.2).curveTo(6.1,-3.6,6.8,-6).curveTo(1.9,-6,-0.8,-3.7).lineTo(-4.4,0.1).lineTo(-7.3,3.1).curveTo(-7.7,3.6,-8.2,3.1).curveTo(-8.7,2.7,-8.3,2.2).lineTo(-1.8,-4.7).curveTo(1.5,-7.7,7.7,-7.5).curveTo(8,-7.5,8.2,-7.2).curveTo(8.5,-6.9,8.4,-6.6).lineTo(8.3,-6).lineTo(7.9,-4.6).curveTo(6.8,-2.3,4.4,-0.1).lineTo(-1.5,4.8).lineTo(-4.7,7.3).lineTo(-5.1,7.5).curveTo(-5.4,7.5,-5.6,7.2).closePath();
	this.shape_3.setTransform(26.86,13.0202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,39.4,36);
p.frameBounds = [rect];


(lib.Symbol97 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(-3.2,3.2).curveTo(-4.3,2.1,-4.2,0.4).curveTo(-4.1,-1.3,-2.9,-2.7).curveTo(-1.6,-4,0.1,-4.2).curveTo(1.8,-4.3,3.1,-3.1).curveTo(4.3,-1.9,4.2,-0.2).curveTo(4,1.6,2.7,2.8).curveTo(1.4,4.1,-0.3,4.2).lineTo(-0.7,4.2).curveTo(-2.2,4.2,-3.2,3.2).closePath();
	this.shape.setTransform(4.2028,33.83);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-7.8,7.7).curveTo(-7.8,7.7,-7.9,7.7).curveTo(-7.9,7.6,-7.9,7.6).curveTo(-8,7.5,-8,7.4).curveTo(-8,7.4,-8,7.3).curveTo(-7.9,6.5,-7.4,5.4).curveTo(-6.4,3.1,-4.3,0.7).curveTo(-1.2,-2.6,1.1,-4.8).lineTo(3.9,-7.7).curveTo(4.4,-8.2,4.8,-7.7).lineTo(4.9,-7.7).curveTo(5.1,-7.5,5.1,-7.2).curveTo(5,-6.9,4.8,-6.7).lineTo(-3.4,1.6).curveTo(-5.6,4.1,-6.5,6.5).curveTo(-1.8,5.6,0.6,3.2).lineTo(6.8,-3.8).curveTo(7.2,-4.3,7.7,-3.9).curveTo(8.2,-3.5,7.8,-2.9).curveTo(2.5,3.1,1.4,4.1).curveTo(0.4,5.2,-1.3,6).curveTo(-3.9,7.3,-7.3,7.9).lineTo(-7.5,7.9).curveTo(-7.5,7.9,-7.6,7.9).curveTo(-7.6,7.9,-7.7,7.9).curveTo(-7.7,7.9,-7.7,7.8).curveTo(-7.7,7.8,-7.8,7.7).closePath();
	this.shape_1.setTransform(11.5766,25.3577);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(0.3,4.8).curveTo(-1.7,4.6,-3.2,3.2).curveTo(-4.6,1.8,-4.8,-0.2).curveTo(-4.9,-2.2,-3.7,-3.5).curveTo(-2.4,-4.9,-0.4,-4.8).curveTo(1.5,-4.7,3.1,-3.2).curveTo(4.7,-1.6,4.8,0.3).curveTo(4.9,2.4,3.6,3.6).curveTo(2.3,4.8,0.6,4.8).lineTo(0.3,4.8).closePath();
	this.shape_2.setTransform(32.6454,4.7793);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-4.9,7.6).curveTo(-5.4,7.2,-4.9,6.7).lineTo(-2,3.9).curveTo(0.7,1.5,3.5,-1.4).curveTo(6,-4,6.6,-6.4).curveTo(1.6,-6,-0.9,-3.5).lineTo(-6.9,3.7).curveTo(-7.3,4.2,-7.8,3.8).curveTo(-8.3,3.3,-7.9,2.8).lineTo(-1.9,-4.5).curveTo(1.2,-7.7,7.3,-7.9).curveTo(7.6,-7.9,7.9,-7.7).curveTo(8.1,-7.4,8.1,-7.1).curveTo(8.1,-6.3,7.7,-5.1).curveTo(6.9,-2.8,4.5,-0.4).curveTo(2.5,1.7,-1,4.9).lineTo(-4,7.7).curveTo(-4,7.7,-4.1,7.8).curveTo(-4.2,7.8,-4.2,7.8).curveTo(-4.3,7.8,-4.3,7.9).curveTo(-4.4,7.9,-4.4,7.9).curveTo(-4.7,7.9,-4.9,7.6).closePath();
	this.shape_3.setTransform(25.2861,13.3691);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,37.5,38);
p.frameBounds = [rect];


(lib.Symbol96 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(-2.9,3.4).curveTo(-4.1,2.3,-4.2,0.6).curveTo(-4.2,-1.1,-3.1,-2.5).curveTo(-1.9,-4,-0.1,-4.2).curveTo(1.6,-4.5,2.9,-3.4).curveTo(4.1,-2.3,4.2,-0.5).curveTo(4.2,1.3,2.9,2.6).curveTo(1.7,4,-0,4.2).lineTo(-0.6,4.3).curveTo(-2,4.3,-2.9,3.4).closePath();
	this.shape.setTransform(4.174,35.6179);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-7.4,8.1).curveTo(-7.4,8.1,-7.5,8.1).curveTo(-7.5,8,-7.5,8).curveTo(-7.6,7.9,-7.6,7.8).curveTo(-7.6,7.8,-7.6,7.7).curveTo(-7.6,6.9,-7.1,5.7).curveTo(-6.3,3.4,-4.4,0.9).lineTo(3.3,-8.1).curveTo(3.7,-8.5,4.2,-8.1).curveTo(4.4,-7.9,4.5,-7.6).curveTo(4.5,-7.5,4.5,-7.5).curveTo(4.4,-7.4,4.4,-7.4).curveTo(4.4,-7.3,4.4,-7.3).curveTo(4.3,-7.2,4.3,-7.2).lineTo(1.6,-4.2).lineTo(-3.4,1.7).curveTo(-5.5,4.4,-6.2,6.8).curveTo(-1.5,5.6,0.6,3.1).lineTo(6.4,-4.3).curveTo(6.7,-4.9,7.3,-4.4).curveTo(7.5,-4.3,7.6,-4).curveTo(7.6,-3.9,7.6,-3.8).curveTo(7.6,-3.8,7.6,-3.7).curveTo(7.5,-3.7,7.5,-3.6).curveTo(7.5,-3.6,7.4,-3.5).curveTo(2.6,2.8,1.6,3.9).curveTo(-1.1,7,-6.9,8.2).lineTo(-7.1,8.3).lineTo(-7.4,8.1).closePath();
	this.shape_1.setTransform(11.13,26.76);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(-3,3.4).curveTo(-4.5,2,-4.8,0.1).curveTo(-5.1,-1.8,-3.9,-3.2).curveTo(-2.7,-4.7,-0.7,-4.7).curveTo(1.3,-4.8,2.9,-3.3).curveTo(4.5,-1.9,4.8,0.1).curveTo(5,2,3.8,3.4).curveTo(2.5,4.8,0.6,4.8).curveTo(-1.4,4.8,-3,3.4).closePath();
	this.shape_2.setTransform(30.6648,4.7492);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-4.3,8.1).lineTo(-4.4,8).curveTo(-4.4,8,-4.4,7.9).curveTo(-4.5,7.9,-4.5,7.8).curveTo(-4.5,7.8,-4.5,7.7).curveTo(-4.6,7.6,-4.6,7.6).curveTo(-4.6,7.3,-4.4,7.1).lineTo(3.5,-1.5).curveTo(5.7,-4.2,6.2,-6.7).curveTo(1.3,-6,-1,-3.4).lineTo(-6.5,4.2).curveTo(-6.9,4.8,-7.4,4.3).curveTo(-8,4,-7.6,3.4).lineTo(-2.1,-4.3).curveTo(0.8,-7.7,6.9,-8.3).curveTo(7.2,-8.3,7.4,-8.1).curveTo(7.7,-7.8,7.7,-7.5).lineTo(7.7,-6.9).lineTo(7.4,-5.5).curveTo(6.8,-3.1,4.6,-0.6).curveTo(2.7,1.6,-0.6,5.1).lineTo(-3.4,8).curveTo(-3.6,8.3,-3.9,8.3).curveTo(-3.9,8.3,-4,8.3).curveTo(-4,8.2,-4.1,8.2).curveTo(-4.1,8.2,-4.2,8.2).curveTo(-4.3,8.1,-4.3,8.1).closePath();
	this.shape_3.setTransform(23.7569,13.7191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,35.5,39.9);
p.frameBounds = [rect];


(lib.Symbol95 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(-2.7,3.5).curveTo(-4,2.6,-4.1,0.9).curveTo(-4.3,-0.9,-3.2,-2.4).curveTo(-2.1,-3.9,-0.4,-4.2).curveTo(1.3,-4.6,2.7,-3.6).curveTo(4.1,-2.5,4.2,-0.8).curveTo(4.3,1,3.1,2.5).curveTo(2,3.9,0.3,4.2).lineTo(-0.5,4.3).curveTo(-1.7,4.3,-2.7,3.5).closePath();
	this.shape.setTransform(4.145,37.1142);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-7,8.5).curveTo(-7.2,8.3,-7.2,8).curveTo(-7.3,7.3,-6.9,6.1).curveTo(-6.2,3.7,-4.4,1.1).lineTo(2.7,-8.3).curveTo(3,-8.8,3.6,-8.4).lineTo(3.6,-8.4).curveTo(4.1,-8,3.7,-7.4).lineTo(1.2,-4.3).curveTo(-1.3,-1.1,-3.4,1.8).curveTo(-5.4,4.6,-5.9,7.1).curveTo(-1.2,5.5,0.7,3).lineTo(3.7,-1.3).lineTo(6,-4.8).curveTo(6.1,-5,6.4,-5.1).curveTo(6.7,-5.1,6.9,-5).curveTo(7.5,-4.5,7.1,-4).curveTo(2.6,2.6,1.7,3.8).curveTo(0.8,4.9,-0.8,6).curveTo(-3.2,7.7,-6.5,8.6).lineTo(-6.6,8.6).lineTo(-7,8.5).closePath();
	this.shape_1.setTransform(10.6811,27.9342);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(-2.7,3.5).curveTo(-4.3,2.3,-4.7,0.4).curveTo(-5.1,-1.5,-4,-3).curveTo(-3,-4.5,-1,-4.7).curveTo(1,-4.9,2.7,-3.6).curveTo(4.4,-2.3,4.8,-0.3).curveTo(5.1,1.6,4,3.1).curveTo(2.8,4.5,0.9,4.7).lineTo(0.6,4.7).curveTo(-1.2,4.7,-2.7,3.5).closePath();
	this.shape_2.setTransform(28.6875,4.7149);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-3.7,8.4).curveTo(-3.9,8.2,-4,7.9).curveTo(-4,7.6,-3.8,7.4).lineTo(3.5,-1.7).curveTo(5.7,-4.6,5.9,-7.1).curveTo(1.2,-6,-1.1,-3.2).lineTo(-6.1,4.7).curveTo(-6.5,5.2,-7.1,4.9).curveTo(-7.6,4.5,-7.3,4).lineTo(-2.2,-4.1).curveTo(0.4,-7.5,6.5,-8.6).lineTo(7.1,-8.5).curveTo(7.3,-8.3,7.4,-7.9).lineTo(7.4,-7.3).curveTo(7.4,-6.6,7.2,-5.8).curveTo(6.6,-3.3,4.7,-0.8).curveTo(2.9,1.6,-0.2,5.2).lineTo(-2.8,8.3).curveTo(-3,8.6,-3.3,8.6).curveTo(-3.3,8.6,-3.4,8.6).curveTo(-3.4,8.6,-3.5,8.6).curveTo(-3.5,8.5,-3.6,8.5).curveTo(-3.7,8.4,-3.7,8.4).closePath();
	this.shape_3.setTransform(22.2569,13.9513);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,33.6,41.4);
p.frameBounds = [rect];


(lib.Symbol94 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(-2.5,3.7).curveTo(-3.9,2.8,-4.1,1.1).curveTo(-4.4,-0.6,-3.4,-2.2).curveTo(-2.4,-3.8,-0.7,-4.2).curveTo(1,-4.6,2.4,-3.7).curveTo(3.9,-2.8,4.1,-1).curveTo(4.3,0.8,3.2,2.3).curveTo(2.2,3.8,0.5,4.2).lineTo(-0.5,4.3).curveTo(-1.6,4.3,-2.5,3.7).closePath();
	this.shape.setTransform(4.1643,38.4547);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-6.6,8.8).curveTo(-6.8,8.6,-6.8,8.3).curveTo(-6.9,7.6,-6.6,6.4).curveTo(-6.1,3.9,-4.4,1.2).lineTo(-0.2,-5.2).lineTo(2.1,-8.6).curveTo(2.2,-8.8,2.5,-8.8).curveTo(2.8,-8.9,3,-8.7).curveTo(3.6,-8.3,3.2,-7.8).lineTo(0.9,-4.5).lineTo(-3.4,1.9).curveTo(-5.3,4.9,-5.5,7.3).curveTo(-1.1,5.5,0.8,2.8).lineTo(5.6,-5.2).curveTo(6,-5.8,6.5,-5.5).curveTo(6.8,-5.4,6.9,-5.1).curveTo(6.9,-4.8,6.8,-4.6).curveTo(2.7,2.3,1.9,3.5).curveTo(-0.5,6.9,-6.1,8.8).lineTo(-6.3,8.9).lineTo(-6.6,8.8).closePath();
	this.shape_1.setTransform(10.1938,29.0388);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(-2.5,3.7).curveTo(-4.2,2.6,-4.7,0.7).curveTo(-5.2,-1.2,-4.2,-2.8).curveTo(-3.2,-4.3,-1.2,-4.6).curveTo(0.7,-4.9,2.5,-3.7).curveTo(4.3,-2.5,4.7,-0.6).curveTo(5.2,1.4,4.1,2.8).curveTo(3.1,4.4,1.1,4.6).lineTo(0.4,4.6).curveTo(-1.1,4.6,-2.5,3.7).closePath();
	this.shape_2.setTransform(26.7448,4.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-3.1,8.7).curveTo(-3.7,8.2,-3.3,7.7).lineTo(-0.9,4.5).curveTo(1.5,1.2,3.5,-1.8).curveTo(5.5,-4.8,5.6,-7.2).curveTo(0.9,-5.9,-1.2,-3).lineTo(-5.8,5.2).curveTo(-6.1,5.8,-6.7,5.4).curveTo(-7.3,5.1,-7,4.5).lineTo(-2.4,-3.8).curveTo(0,-7.4,6,-8.8).curveTo(6.3,-8.9,6.6,-8.7).curveTo(6.9,-8.6,7,-8.2).lineTo(7,-7.6).curveTo(7.1,-7,6.9,-6.2).curveTo(6.5,-3.7,4.7,-1).curveTo(3.1,1.5,0.2,5.3).lineTo(-2.2,8.5).curveTo(-2.4,8.8,-2.7,8.8).lineTo(-3.1,8.7).closePath();
	this.shape_3.setTransform(20.7563,14.1658);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,31.6,42.8);
p.frameBounds = [rect];


(lib.Symbol93 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-2.3,3.8).curveTo(-3.7,3,-4,1.3).curveTo(-4.4,-0.4,-3.5,-2).curveTo(-2.5,-3.7,-0.9,-4.2).curveTo(0.7,-4.7,2.3,-3.8).curveTo(3.7,-2.9,4.1,-1.2).curveTo(4.4,0.5,3.4,2.1).curveTo(2.5,3.7,0.8,4.2).curveTo(0.1,4.4,-0.4,4.4).curveTo(-1.4,4.4,-2.3,3.8).closePath();
	this.shape.setTransform(4.1361,39.6633);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-6.2,9).curveTo(-6.4,9,-6.5,8.6).curveTo(-6.6,7.9,-6.4,6.6).curveTo(-6,4.1,-4.4,1.4).curveTo(-3.3,-0.8,-0.6,-5.3).lineTo(1.5,-8.8).curveTo(1.9,-9.3,2.4,-9).curveTo(2.7,-8.8,2.8,-8.5).curveTo(2.8,-8.3,2.7,-8).lineTo(0.5,-4.6).curveTo(-1.9,-0.7,-3.3,2).curveTo(-5,5,-5.2,7.5).curveTo(-0.8,5.5,0.9,2.7).lineTo(3.3,-1.9).lineTo(5.2,-5.6).curveTo(5.3,-5.8,5.6,-5.9).curveTo(5.9,-6,6.1,-5.9).curveTo(6.7,-5.6,6.4,-5).curveTo(2.8,2.1,2,3.4).curveTo(1.2,4.6,-0.3,5.9).curveTo(-2.5,7.8,-5.7,9.1).lineTo(-5.9,9.1).lineTo(-6.2,9).closePath();
	this.shape_1.setTransform(9.7224,29.9769);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(-2.3,3.9).curveTo(-4.1,2.8,-4.6,1).curveTo(-5.3,-0.9,-4.4,-2.5).curveTo(-3.4,-4.1,-1.5,-4.5).curveTo(0.4,-4.9,2.2,-3.8).curveTo(4.1,-2.7,4.7,-0.8).curveTo(5.2,1.1,4.2,2.6).curveTo(3.2,4.2,1.3,4.5).lineTo(0.3,4.6).curveTo(-1.1,4.6,-2.3,3.9).closePath();
	this.shape_2.setTransform(24.8113,4.6268);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-2.6,9).lineTo(-2.6,9).curveTo(-2.8,8.8,-2.9,8.5).curveTo(-3,8.3,-2.8,8).lineTo(3.4,-1.8).curveTo(5.2,-4.9,5.2,-7.4).curveTo(0.6,-5.9,-1.3,-2.9).lineTo(-5.4,5.6).curveTo(-5.7,6.2,-6.3,5.9).curveTo(-6.9,5.6,-6.6,5).lineTo(-2.5,-3.6).curveTo(-0.2,-7.4,5.6,-9).curveTo(5.9,-9.1,6.2,-9).curveTo(6.4,-8.8,6.5,-8.5).curveTo(6.8,-8.2,6.6,-6.4).curveTo(6.4,-4,4.7,-1.1).lineTo(0.6,5.4).lineTo(-1.7,8.8).curveTo(-1.9,9.1,-2.2,9.1).lineTo(-2.6,9).closePath();
	this.shape_3.setTransform(19.3077,14.3981);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,29.7,44.1);
p.frameBounds = [rect];


(lib.Symbol92 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-2.1,4).curveTo(-3.5,3.2,-4,1.5).curveTo(-4.4,-0.2,-3.6,-1.8).curveTo(-2.8,-3.5,-1.2,-4.1).curveTo(0.5,-4.7,2,-3.9).curveTo(3.6,-3.1,4,-1.4).curveTo(4.4,0.3,3.5,1.9).curveTo(2.6,3.5,1,4.1).curveTo(0.3,4.4,-0.4,4.4).curveTo(-1.3,4.4,-2.1,4).closePath();
	this.shape.setTransform(4.119,40.6798);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-5.8,9.2).lineTo(-6.1,8.8).curveTo(-6.2,8.1,-6.1,6.8).curveTo(-5.9,4.4,-4.5,1.5).curveTo(-3.1,-1.5,-1,-5.4).lineTo(1,-8.9).curveTo(1,-9,1,-9).curveTo(1.1,-9.1,1.1,-9.1).curveTo(1.2,-9.2,1.2,-9.2).curveTo(1.3,-9.2,1.3,-9.2).curveTo(1.4,-9.2,1.5,-9.3).curveTo(1.6,-9.3,1.6,-9.3).curveTo(1.7,-9.3,1.7,-9.3).curveTo(1.8,-9.2,1.8,-9.2).lineTo(1.9,-9.2).curveTo(2.5,-8.9,2.1,-8.3).lineTo(-3.3,2).curveTo(-4.9,5.2,-4.9,7.6).curveTo(-0.6,5.5,0.9,2.5).lineTo(3.1,-2.2).lineTo(4.8,-6).curveTo(5.1,-6.6,5.7,-6.3).curveTo(6.3,-6,6,-5.5).lineTo(4.3,-1.5).lineTo(2.1,3.2).curveTo(0.1,6.8,-5.2,9.2).lineTo(-5.5,9.3).lineTo(-5.8,9.2).closePath();
	this.shape_1.setTransform(9.2625,30.8125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-2.1,4).curveTo(-3.8,3,-4.5,1.3).curveTo(-5.3,-0.5,-4.5,-2.2).curveTo(-3.6,-3.9,-1.7,-4.4).curveTo(0.2,-4.9,2.1,-3.9).curveTo(3.9,-2.9,4.6,-1.1).curveTo(5.3,0.8,4.4,2.4).curveTo(3.5,4,1.6,4.5).lineTo(0.4,4.6).curveTo(-0.9,4.6,-2.1,4).closePath();
	this.shape_2.setTransform(22.8717,4.589);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-2,9.2).lineTo(-2.1,9.2).curveTo(-2.6,8.8,-2.3,8.2).lineTo(-0.3,4.8).lineTo(3.4,-1.9).curveTo(5,-5.2,4.9,-7.6).curveTo(0.1,-5.8,-1.3,-2.7).curveTo(-1.7,-2,-3.4,2.1).lineTo(-5,5.9).curveTo(-5.3,6.5,-5.9,6.3).curveTo(-6,6.3,-6,6.2).curveTo(-6.1,6.2,-6.1,6.2).curveTo(-6.2,6.1,-6.2,6.1).curveTo(-6.2,6,-6.3,5.9).curveTo(-6.3,5.9,-6.3,5.8).curveTo(-6.3,5.7,-6.3,5.7).curveTo(-6.3,5.6,-6.3,5.6).curveTo(-6.3,5.5,-6.3,5.4).curveTo(-3.3,-2,-2.6,-3.3).curveTo(-1.8,-4.8,-0.5,-6).curveTo(1.8,-8.1,5.1,-9.3).curveTo(5.5,-9.4,5.7,-9.2).curveTo(6,-9.1,6.1,-8.7).curveTo(6.4,-8.4,6.3,-6.7).curveTo(6.2,-4.2,4.6,-1.3).curveTo(3.4,1.1,0.9,5.5).lineTo(-1.1,8.9).curveTo(-1.3,9.3,-1.6,9.3).lineTo(-2,9.2).closePath();
	this.shape_3.setTransform(17.875,14.5195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,27.8,45.1);
p.frameBounds = [rect];


(lib.Symbol91 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-1.8,4.1).curveTo(-3.4,3.4,-3.9,1.7).curveTo(-4.5,0.1,-3.8,-1.6).curveTo(-3,-3.4,-1.4,-4).curveTo(0.3,-4.8,1.9,-4).curveTo(3.4,-3.4,3.9,-1.6).curveTo(4.4,0.1,3.7,1.7).curveTo(2.9,3.4,1.2,4.1).curveTo(0.4,4.4,-0.4,4.4).curveTo(-1.1,4.4,-1.8,4.1).closePath();
	this.shape.setTransform(4.1502,41.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-5.3,9.4).curveTo(-5.4,9.4,-5.4,9.4).curveTo(-5.5,9.3,-5.5,9.3).curveTo(-5.6,9.2,-5.6,9.2).curveTo(-5.6,9.1,-5.7,9.1).curveTo(-5.9,8.3,-5.8,7.1).curveTo(-5.7,4.6,-4.4,1.6).lineTo(-1.3,-5.4).lineTo(0.4,-9).curveTo(0.8,-9.6,1.3,-9.4).lineTo(1.3,-9.3).curveTo(1.9,-9.1,1.7,-8.4).lineTo(-0.1,-4.8).curveTo(-2,-0.8,-3.3,2.1).curveTo(-4.6,5.4,-4.5,7.8).curveTo(-2.2,6.4,-0.5,4.7).curveTo(0.7,3.3,1,2.4).curveTo(1.8,0.6,3,-2.4).lineTo(4.5,-6.3).curveTo(4.8,-7,5.3,-6.7).curveTo(6,-6.4,5.7,-5.8).lineTo(2.2,3).curveTo(0.4,6.6,-4.8,9.4).lineTo(-5.1,9.5).lineTo(-5.3,9.4).closePath();
	this.shape_1.setTransform(8.8181,31.5332);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-1.9,4).curveTo(-3.7,3.2,-4.5,1.4).curveTo(-5.3,-0.3,-4.6,-2).curveTo(-3.8,-3.7,-2,-4.3).curveTo(-0.1,-4.9,1.8,-4.1).curveTo(3.7,-3.2,4.5,-1.4).curveTo(5.3,0.5,4.5,2.1).curveTo(3.7,3.8,1.8,4.3).curveTo(1.1,4.6,0.4,4.6).curveTo(-0.7,4.6,-1.9,4).closePath();
	this.shape_2.setTransform(21.0181,4.5589);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-1.5,9.4).lineTo(-1.5,9.3).curveTo(-2.1,9.1,-1.8,8.4).lineTo(0,4.9).lineTo(3.3,-2).curveTo(4.8,-5.2,4.5,-7.8).curveTo(0.1,-5.7,-1.4,-2.5).lineTo(-3.2,2.4).lineTo(-4.7,6.3).curveTo(-4.9,6.9,-5.5,6.7).curveTo(-6.2,6.4,-5.9,5.8).curveTo(-3.3,-1.7,-2.7,-3.1).curveTo(-1,-7,4.7,-9.4).curveTo(5,-9.6,5.3,-9.4).curveTo(5.7,-9.3,5.7,-9).curveTo(6,-8.7,6,-6.9).curveTo(5.9,-4.3,4.6,-1.4).curveTo(3.2,1.9,1.2,5.5).lineTo(-0.6,9.1).curveTo(-0.8,9.5,-1.2,9.5).lineTo(-1.5,9.4).closePath();
	this.shape_3.setTransform(16.4903,14.6125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,25.9,46);
p.frameBounds = [rect];


(lib.Symbol90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-1.7,4.2).curveTo(-3.2,3.6,-3.8,1.9).curveTo(-4.4,0.3,-3.8,-1.5).curveTo(-3.1,-3.2,-1.6,-4).curveTo(0,-4.8,1.7,-4.1).curveTo(3.3,-3.5,3.9,-1.8).curveTo(4.5,-0.1,3.8,1.6).curveTo(3,3.3,1.5,4).curveTo(0.6,4.4,-0.3,4.4).curveTo(-1,4.4,-1.7,4.2).closePath();
	this.shape.setTransform(4.1445,42.3253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-4.9,9.6).curveTo(-5.1,9.5,-5.2,9.2).curveTo(-5.4,8.5,-5.4,7.2).curveTo(-5.4,4.7,-4.4,1.7).lineTo(-1.6,-5.5).lineTo(-0,-9.2).curveTo(0.3,-9.8,0.8,-9.5).lineTo(0.9,-9.5).curveTo(1.5,-9.2,1.2,-8.7).lineTo(-0.3,-5).lineTo(-3.2,2.2).curveTo(-4.3,5.2,-4.2,7.9).curveTo(-0,5.2,1.2,2.2).lineTo(4.1,-6.7).curveTo(4.4,-7.3,5,-7.1).curveTo(5.6,-7,5.4,-6.3).curveTo(2.9,1.3,2.3,2.7).curveTo(1.8,4,0.5,5.5).curveTo(-1.4,7.7,-4.3,9.5).lineTo(-4.7,9.6).lineTo(-4.9,9.6).closePath();
	this.shape_1.setTransform(8.3485,32.2226);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-1.6,4.2).curveTo(-3.5,3.4,-4.4,1.7).curveTo(-5.3,-0.1,-4.6,-1.8).curveTo(-3.9,-3.5,-2.1,-4.2).curveTo(-0.3,-4.9,1.7,-4.1).curveTo(3.6,-3.4,4.5,-1.6).curveTo(5.3,0.2,4.6,1.9).curveTo(3.9,3.6,2.1,4.3).curveTo(1.2,4.5,0.4,4.5).curveTo(-0.6,4.5,-1.6,4.2).closePath();
	this.shape_2.setTransform(19.1395,4.5445);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-1,9.5).lineTo(-1,9.5).curveTo(-1.6,9.2,-1.3,8.6).lineTo(0.3,4.9).lineTo(3.3,-2.1).curveTo(4.5,-5.5,4.2,-7.9).curveTo(-0.2,-5.5,-1.5,-2.3).lineTo(-4.3,6.6).curveTo(-4.5,7.3,-5.1,7.1).curveTo(-5.8,6.9,-5.6,6.2).curveTo(-3.4,-1.4,-2.8,-2.8).curveTo(-1.3,-6.8,4.3,-9.5).curveTo(4.6,-9.7,4.9,-9.5).curveTo(5.2,-9.5,5.3,-9.1).lineTo(5.5,-8.6).lineTo(5.7,-7.1).curveTo(5.8,-4.6,4.6,-1.6).curveTo(3.5,1.1,1.6,5.5).lineTo(-0.1,9.2).curveTo(-0.3,9.6,-0.7,9.6).lineTo(-1,9.5).closePath();
	this.shape_3.setTransform(15.0816,14.7142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,24.1,46.8);
p.frameBounds = [rect];


(lib.Symbol89 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-1.5,4.2).curveTo(-3.1,3.7,-3.8,2.1).curveTo(-4.5,0.4,-3.9,-1.3).curveTo(-3.4,-3.1,-1.8,-3.9).curveTo(-0.2,-4.7,1.4,-4.2).curveTo(3,-3.6,3.8,-2).curveTo(4.5,-0.4,3.8,1.4).curveTo(3.2,3.1,1.6,3.9).curveTo(0.7,4.4,-0.3,4.4).curveTo(-0.9,4.4,-1.5,4.2).closePath();
	this.shape.setTransform(4.1605,43.046);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-4.4,9.7).curveTo(-4.6,9.7,-4.8,9.3).curveTo(-5.1,8.6,-5.1,7.4).curveTo(-5.2,4.8,-4.3,1.8).lineTo(-1.9,-5.5).lineTo(-0.5,-9.3).curveTo(-0.3,-9.9,0.3,-9.7).lineTo(0.4,-9.7).curveTo(1,-9.4,0.8,-8.8).lineTo(-0.6,-5).curveTo(-1.9,-1.5,-3.1,2.2).curveTo(-4.2,5.8,-3.8,8).curveTo(0.1,5.2,1.2,2.1).lineTo(3.8,-7).curveTo(4,-7.6,4.6,-7.4).curveTo(5.3,-7.3,5.1,-6.6).lineTo(2.4,2.5).curveTo(2,3.8,0.8,5.4).curveTo(-1,7.7,-3.9,9.6).lineTo(-4.2,9.7).lineTo(-4.4,9.7).closePath();
	this.shape_1.setTransform(7.8672,32.82);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-1.5,4.2).curveTo(-3.4,3.6,-4.3,1.9).curveTo(-5.3,0.2,-4.7,-1.6).curveTo(-4.2,-3.4,-2.4,-4.1).curveTo(-0.6,-4.9,1.4,-4.2).curveTo(3.4,-3.5,4.3,-1.8).curveTo(5.3,-0.1,4.6,1.6).curveTo(4,3.3,2.2,4.1).curveTo(1.3,4.5,0.3,4.5).curveTo(-0.6,4.5,-1.5,4.2).closePath();
	this.shape_2.setTransform(17.3062,4.5626);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-0.5,9.7).lineTo(-0.6,9.7).curveTo(-1.2,9.4,-0.9,8.8).lineTo(0.5,5).curveTo(1.9,1.6,3.1,-2.1).curveTo(4.2,-5.5,3.8,-8).curveTo(-0.5,-5.4,-1.6,-2.2).lineTo(-4,6.9).curveTo(-4.2,7.6,-4.8,7.4).curveTo(-5.5,7.3,-5.3,6.6).curveTo(-3.4,-1.2,-3,-2.6).curveTo(-1.4,-6.8,3.8,-9.6).curveTo(4,-9.8,4.4,-9.7).curveTo(4.7,-9.6,4.9,-9.3).lineTo(5.1,-8.7).curveTo(5.3,-8,5.3,-7.3).curveTo(5.5,-4.7,4.5,-1.7).curveTo(3.5,1.4,1.8,5.5).lineTo(0.3,9.3).curveTo(0.1,9.7,-0.3,9.7).lineTo(-0.5,9.7).closePath();
	this.shape_3.setTransform(13.7444,14.8211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,22.2,47.5);
p.frameBounds = [rect];


(lib.Symbol88 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.1).beginStroke().moveTo(0.1,3.7).curveTo(-1.7,3.7,-3.1,2.7).curveTo(-4.4,1.6,-4.5,0.2).curveTo(-4.5,-1.1,-3.3,-2.4).curveTo(-2,-3.5,-0.2,-3.6).curveTo(1.6,-3.8,3,-2.8).curveTo(4.3,-1.9,4.4,-0.2).curveTo(4.5,1.4,3.2,2.6).curveTo(2,3.7,0.3,3.7).lineTo(0.1,3.7).closePath();
	this.shape.setTransform(4.4526,7.0344);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-4.1,2.9).curveTo(-6.9,2.1,-9.7,0.3).lineTo(-9.9,-0.1).curveTo(-9.9,-0.4,-9.7,-0.5).curveTo(-9.6,-0.7,-8,-1.5).curveTo(-5.5,-2.4,-2.5,-2.7).curveTo(0.4,-3,5.2,-3.2).lineTo(9.2,-3.4).curveTo(9.9,-3.4,9.9,-2.8).lineTo(9.9,-2.7).curveTo(9.9,-2.1,9.2,-2.1).lineTo(5.3,-1.9).curveTo(1.5,-1.8,-2.4,-1.5).curveTo(-6,-1.2,-8,-0.1).curveTo(-4.2,2.2,-0.8,2.2).lineTo(8.6,1.4).curveTo(9.2,1.4,9.3,2).curveTo(9.3,2.6,8.8,2.7).curveTo(0.8,3.4,-0.7,3.4).lineTo(-0.9,3.4).curveTo(-2.2,3.4,-4.1,2.9).closePath();
	this.shape_1.setTransform(14.6,6.3771);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.9).beginStroke().moveTo(0.1,5.4).curveTo(-1.7,5.4,-3.1,3.9).curveTo(-4.4,2.4,-4.5,0.2).curveTo(-4.5,-1.9,-3.3,-3.5).curveTo(-2.2,-5.1,-0.3,-5.3).curveTo(1.5,-5.5,2.9,-4).curveTo(4.3,-2.6,4.4,-0.1).curveTo(4.5,2.2,3.3,3.8).curveTo(2,5.4,0.3,5.4).lineTo(0.1,5.4).closePath();
	this.shape_2.setTransform(45.1027,5.3439);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-5.2,3.8).lineTo(-9.2,3.8).curveTo(-9.9,3.7,-9.9,3.1).curveTo(-9.9,2.4,-9.2,2.4).lineTo(-5.2,2.4).lineTo(2.5,2.3).curveTo(5.9,2.2,8.1,0.7).curveTo(4.3,-2.5,0.8,-2.3).curveTo(-0.3,-2.3,-4.4,-1.7).lineTo(-8.6,-1.1).curveTo(-8.8,-1.1,-9.1,-1.3).curveTo(-9.3,-1.5,-9.3,-1.7).curveTo(-9.3,-2.4,-8.8,-2.5).lineTo(0.7,-3.8).curveTo(2.2,-4,4,-3.4).curveTo(6.9,-2.5,9.7,0.1).curveTo(9.9,0.4,9.9,0.7).curveTo(9.9,1.1,9.7,1.3).curveTo(9.2,2,8,2.6).curveTo(5.8,3.8,2.5,3.8).lineTo(-0.8,3.9).lineTo(-5.2,3.8).closePath();
	this.shape_3.setTransform(34.95,5.735);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,49.6,10.7);
p.frameBounds = [rect];


(lib.Symbol87 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.1).beginStroke().moveTo(-2.9,2.9).curveTo(-4.3,2,-4.4,0.6).curveTo(-4.7,-0.8,-3.6,-2).curveTo(-2.4,-3.3,-0.6,-3.6).curveTo(1.2,-4,2.7,-3.1).curveTo(4.1,-2.2,4.4,-0.6).curveTo(4.6,1,3.4,2.2).curveTo(2.2,3.5,0.4,3.7).lineTo(-0.1,3.7).curveTo(-1.7,3.7,-2.9,2.9).closePath();
	this.shape.setTransform(4.4661,10.8117);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-3.6,3.7).curveTo(-6.1,3.2,-9.4,1.6).curveTo(-9.6,1.5,-9.7,1.2).lineTo(-9.6,0.8).lineTo(-9.2,0.5).lineTo(-8,-0.3).curveTo(-5.5,-1.6,-2.7,-2.1).lineTo(8.9,-3.9).curveTo(9.6,-4,9.7,-3.3).lineTo(9.7,-3.3).curveTo(9.8,-2.6,9.1,-2.5).lineTo(-2.4,-0.9).curveTo(-5.9,-0.3,-7.9,1).curveTo(-5.2,2.2,-3.1,2.5).curveTo(-1.7,2.8,-0.4,2.7).lineTo(8.8,1).curveTo(9.4,0.8,9.6,1.5).curveTo(9.7,2.2,9.1,2.3).curveTo(1.2,3.7,-0.3,3.9).lineTo(-1.3,3.9).curveTo(-2.4,3.9,-3.6,3.7).closePath();
	this.shape_1.setTransform(14.3067,8.8408);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.9).beginStroke().moveTo(-2.7,4.1).curveTo(-4.2,2.7,-4.4,0.6).curveTo(-4.8,-1.5,-3.7,-3.2).curveTo(-2.7,-4.9,-0.9,-5.3).curveTo(0.9,-5.6,2.5,-4.2).curveTo(4.1,-2.9,4.4,-0.6).curveTo(4.7,1.7,3.5,3.4).curveTo(2.4,5.2,0.6,5.3).lineTo(0.2,5.3).curveTo(-1.4,5.3,-2.7,4.1).closePath();
	this.shape_2.setTransform(44.7536,5.3223);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-9.8,3.7).lineTo(-9.8,3.6).curveTo(-9.8,2.9,-9.1,2.9).lineTo(2.5,1.8).curveTo(6.2,1.2,8,-0.4).curveTo(3.8,-3.2,0.3,-2.7).lineTo(-4.8,-1.6).lineTo(-8.8,-0.6).curveTo(-9.5,-0.5,-9.7,-1.2).curveTo(-9.8,-1.8,-9.2,-2).lineTo(0.1,-4.2).curveTo(4.4,-4.9,9.5,-1.1).curveTo(9.8,-0.9,9.8,-0.6).curveTo(9.9,-0.2,9.6,0.1).curveTo(9.1,0.8,8,1.5).curveTo(5.9,2.8,2.6,3.3).curveTo(-0.9,3.7,-5,4).lineTo(-9.1,4.3).lineTo(-9.2,4.3).curveTo(-9.7,4.3,-9.8,3.7).closePath();
	this.shape_3.setTransform(34.8393,6.9762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,49.3,14.5);
p.frameBounds = [rect];


(lib.Symbol86 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.1).beginStroke().moveTo(-2.5,3.2).curveTo(-4.1,2.4,-4.4,1.1).curveTo(-4.7,-0.4,-3.7,-1.7).curveTo(-2.6,-3,-0.9,-3.5).curveTo(0.9,-4.1,2.4,-3.3).curveTo(4,-2.6,4.3,-1).curveTo(4.6,0.6,3.7,2).curveTo(2.6,3.3,0.8,3.6).lineTo(-0.3,3.7).curveTo(-1.4,3.7,-2.5,3.2).closePath();
	this.shape.setTransform(4.4014,14.5186);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-3.3,4.3).curveTo(-6.2,4,-9.3,2.8).curveTo(-9.4,2.8,-9.5,2.8).curveTo(-9.5,2.7,-9.5,2.7).curveTo(-9.6,2.6,-9.6,2.6).curveTo(-9.6,2.5,-9.6,2.5).curveTo(-9.7,2.2,-9.5,2).lineTo(-8,0.7).curveTo(-5.7,-0.7,-2.9,-1.5).curveTo(-0.1,-2.3,4.6,-3.5).lineTo(8.5,-4.4).curveTo(9.1,-4.5,9.3,-3.9).curveTo(9.4,-3.2,8.8,-3.1).lineTo(4.9,-2.2).curveTo(0.4,-1.2,-2.6,-0.4).curveTo(-5.8,0.5,-7.9,2.1).curveTo(-3.4,3.7,-0.2,3).lineTo(8.8,0.5).curveTo(9.4,0.2,9.7,0.9).curveTo(9.8,1.5,9.2,1.7).curveTo(1.6,3.9,0.1,4.2).curveTo(-0.8,4.4,-2,4.4).lineTo(-3.3,4.3).closePath();
	this.shape_1.setTransform(14.1483,11.3109);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.9).beginStroke().moveTo(-2.3,4.3).curveTo(-3.8,3.1,-4.4,1).curveTo(-4.8,-1.1,-4,-2.8).curveTo(-3,-4.7,-1.3,-5.1).curveTo(0.6,-5.7,2.1,-4.4).curveTo(3.8,-3.2,4.3,-1).curveTo(4.8,1.2,3.9,3.1).curveTo(3,4.9,1.1,5.3).lineTo(0.4,5.3).curveTo(-1,5.3,-2.3,4.3).closePath();
	this.shape_2.setTransform(44.0114,5.295);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-9.3,4.2).lineTo(-9.3,4.2).curveTo(-9.4,3.5,-8.8,3.4).lineTo(2.7,1.2).curveTo(6.1,0.3,7.9,-1.5).curveTo(3.5,-3.9,0.1,-3.1).lineTo(-4.9,-1.5).lineTo(-8.8,-0.2).curveTo(-8.9,-0.2,-9,-0.1).curveTo(-9,-0.1,-9.1,-0.1).curveTo(-9.1,-0.1,-9.2,-0.1).curveTo(-9.3,-0.2,-9.3,-0.2).curveTo(-9.6,-0.3,-9.7,-0.6).curveTo(-9.8,-1.2,-9.3,-1.5).lineTo(-0.3,-4.5).curveTo(4.1,-5.6,9.3,-2.3).curveTo(9.6,-2.1,9.7,-1.8).curveTo(9.8,-1.4,9.6,-1.2).curveTo(9.2,-0.4,8.2,0.4).curveTo(6.3,1.9,3,2.6).curveTo(0.9,3.1,-4.5,4.1).lineTo(-8.5,4.8).lineTo(-8.7,4.8).curveTo(-9.2,4.8,-9.3,4.2).closePath();
	this.shape_3.setTransform(34.2789,8.2285);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,48.6,18.3);
p.frameBounds = [rect];


(lib.Symbol85 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.1).beginStroke().moveTo(-2.2,3.4).curveTo(-3.8,2.8,-4.2,1.4).curveTo(-4.7,0,-3.9,-1.4).curveTo(-3,-2.8,-1.3,-3.5).curveTo(0.5,-4.1,2.1,-3.5).curveTo(3.7,-2.9,4.2,-1.4).curveTo(4.7,0.2,3.8,1.6).curveTo(2.8,3,1.1,3.6).curveTo(0.3,3.8,-0.4,3.8).curveTo(-1.3,3.8,-2.2,3.4).closePath();
	this.shape.setTransform(4.4186,18.0647);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-9.1,3.9).curveTo(-9.2,3.9,-9.3,3.8).curveTo(-9.3,3.8,-9.4,3.8).curveTo(-9.4,3.7,-9.5,3.7).curveTo(-9.5,3.7,-9.5,3.6).curveTo(-9.6,3.3,-9.5,3.1).lineTo(-9.1,2.7).lineTo(-8.1,1.7).curveTo(-6.3,0.2,-3.2,-1).lineTo(7.9,-4.8).curveTo(8.5,-5,8.7,-4.5).lineTo(8.7,-4.4).curveTo(8.9,-3.8,8.3,-3.6).lineTo(4.4,-2.3).lineTo(-2.8,0.1).curveTo(-6.1,1.4,-7.8,3.1).curveTo(-3.3,4.3,-0.1,3.3).lineTo(8.6,-0.1).curveTo(8.9,-0.2,9.1,-0.1).curveTo(9.4,0.1,9.5,0.3).curveTo(9.7,0.9,9.1,1.2).curveTo(1.7,4.1,0.2,4.4).curveTo(-1.1,4.9,-3.1,4.9).curveTo(-6,4.9,-9.1,3.9).closePath();
	this.shape_1.setTransform(13.9668,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.9).beginStroke().moveTo(-1.9,4.5).curveTo(-3.6,3.5,-4.2,1.4).curveTo(-4.9,-0.6,-4.2,-2.5).curveTo(-3.5,-4.3,-1.8,-5).curveTo(-0.1,-5.6,1.7,-4.6).curveTo(3.5,-3.6,4.2,-1.4).curveTo(4.9,0.8,4.1,2.7).curveTo(3.3,4.6,1.5,5.1).curveTo(1,5.2,0.4,5.2).curveTo(-0.8,5.2,-1.9,4.5).closePath();
	this.shape_2.setTransform(43.0133,5.2386);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-8.8,4.8).curveTo(-8.9,4.1,-8.3,3.9).lineTo(-4.4,2.8).curveTo(-0.2,1.7,2.9,0.6).curveTo(6.2,-0.5,7.9,-2.5).curveTo(5.4,-3.7,2.7,-3.8).curveTo(1.3,-3.8,-0.1,-3.4).lineTo(-8.7,0.4).curveTo(-9.3,0.6,-9.6,0).curveTo(-9.8,-0.6,-9.2,-0.9).lineTo(-0.6,-4.8).curveTo(0.9,-5.3,2.8,-5.2).curveTo(6,-5.1,9.2,-3.5).curveTo(9.6,-3.3,9.6,-3).curveTo(9.7,-2.7,9.6,-2.4).curveTo(9.2,-1.6,8.3,-0.7).curveTo(6.5,1.1,3.3,2.1).lineTo(-4.1,4.2).lineTo(-8,5.2).lineTo(-8.2,5.3).curveTo(-8.6,5.3,-8.8,4.8).closePath();
	this.shape_3.setTransform(33.4382,9.3463);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,47.6,21.9);
p.frameBounds = [rect];


(lib.Symbol83 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-0.5,4.4).curveTo(-2.1,4.3,-3.2,2.9).curveTo(-4.3,1.4,-4.1,-0.4).curveTo(-4,-2.3,-2.6,-3.4).curveTo(-1.3,-4.6,0.5,-4.4).curveTo(2.2,-4.3,3.3,-2.8).curveTo(4.3,-1.4,4.1,0.5).curveTo(3.9,2.3,2.5,3.4).curveTo(1.3,4.4,-0.1,4.4).lineTo(-0.5,4.4).closePath();
	this.shape.setTransform(4.115,44.9194);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-2.4,9.7).curveTo(-2.7,9.4,-3.2,7.9).curveTo(-3.9,5.5,-3.6,2.3).lineTo(-2.4,-9.4).curveTo(-2.3,-10,-1.6,-10).lineTo(-1.6,-10).curveTo(-0.9,-9.9,-1,-9.2).lineTo(-1.5,-5.2).curveTo(-2,-1.5,-2.3,2.4).curveTo(-2.6,5.9,-1.7,8.2).curveTo(1.6,4.5,1.9,1.3).lineTo(2.2,-3.9).lineTo(2.3,-8.1).curveTo(2.3,-8.2,2.3,-8.2).curveTo(2.4,-8.3,2.4,-8.4).curveTo(2.4,-8.4,2.4,-8.5).curveTo(2.5,-8.5,2.5,-8.6).curveTo(2.8,-8.8,3,-8.8).curveTo(3.7,-8.8,3.7,-8.1).lineTo(3.1,1.4).curveTo(3,2.8,2.2,4.6).curveTo(0.9,7.3,-1.5,9.8).curveTo(-1.6,10,-2,10).curveTo(-2,10,-2.1,10).curveTo(-2.1,9.9,-2.2,9.9).curveTo(-2.2,9.9,-2.3,9.8).curveTo(-2.3,9.8,-2.4,9.7).closePath();
	this.shape_1.setTransform(5.2671,34.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-0.5,4.4).curveTo(-2.4,4.2,-3.7,2.8).curveTo(-5,1.4,-4.9,-0.5).curveTo(-4.7,-2.3,-3.2,-3.5).curveTo(-1.6,-4.6,0.5,-4.4).curveTo(2.5,-4.3,3.8,-2.8).curveTo(5.1,-1.3,4.9,0.6).curveTo(4.7,2.4,3.1,3.5).curveTo(1.7,4.5,0.1,4.5).lineTo(-0.5,4.4).closePath();
	this.shape_2.setTransform(8.3374,4.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(1.5,10).lineTo(1.5,9.9).curveTo(0.8,9.8,0.9,9.2).lineTo(1.5,5.2).curveTo(2,1.7,2.4,-2.4).curveTo(2.7,-5.8,1.7,-8.2).curveTo(-1.7,-4.8,-2.2,-1.3).lineTo(-2.5,8.1).curveTo(-2.5,8.4,-2.7,8.6).curveTo(-2.9,8.8,-3.2,8.7).curveTo(-3.9,8.7,-3.9,8.1).lineTo(-3.6,-1.4).curveTo(-3.1,-5.8,1.4,-9.8).curveTo(1.6,-10,2,-10).curveTo(2.3,-10,2.5,-9.7).curveTo(2.9,-9.3,3.4,-7.9).curveTo(4.1,-5.5,3.8,-2.2).curveTo(3.5,1.1,2.8,5.4).lineTo(2.2,9.4).curveTo(2.1,10,1.6,10).lineTo(1.5,10).closePath();
	this.shape_3.setTransform(7.3429,14.8317);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,13.3,49.4);
p.frameBounds = [rect];


(lib.Symbol82 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-0.3,4.4).curveTo(-2,4.3,-3.1,2.9).curveTo(-4.2,1.6,-4.1,-0.2).curveTo(-4,-2.1,-2.8,-3.3).curveTo(-1.5,-4.6,0.3,-4.5).curveTo(2,-4.4,3.1,-3).curveTo(4.3,-1.6,4.1,0.2).curveTo(4,2.1,2.7,3.3).curveTo(1.5,4.5,-0.1,4.5).lineTo(-0.3,4.4).closePath();
	this.shape.setTransform(4.1295,45.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-1.9,9.7).curveTo(-2.2,9.4,-2.7,7.9).curveTo(-3.5,5.5,-3.4,2.4).lineTo(-3,-5.3).lineTo(-2.7,-9.4).curveTo(-2.6,-10,-2,-10).lineTo(-1.9,-10).curveTo(-1.2,-9.9,-1.3,-9.2).lineTo(-2.1,2.4).curveTo(-2.2,6,-1.3,8.2).curveTo(1.7,4.5,2,1.1).lineTo(2.1,-8.3).curveTo(2.1,-8.9,2.7,-8.9).curveTo(3.4,-9,3.4,-8.3).lineTo(3.3,1.2).curveTo(3,5.3,-1,9.8).curveTo(-1,9.8,-1.1,9.9).curveTo(-1.1,9.9,-1.2,9.9).curveTo(-1.2,10,-1.3,10).curveTo(-1.3,10,-1.4,10).curveTo(-1.7,10,-1.9,9.7).closePath();
	this.shape_1.setTransform(4.7194,34.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-0.3,4.5).curveTo(-2.3,4.3,-3.6,2.9).curveTo(-4.9,1.6,-4.9,-0.3).curveTo(-4.8,-2.1,-3.3,-3.4).curveTo(-1.8,-4.6,0.3,-4.5).curveTo(2.3,-4.4,3.7,-2.9).curveTo(5,-1.5,4.9,0.3).curveTo(4.7,2.1,3.2,3.4).curveTo(1.8,4.5,0,4.5).lineTo(-0.3,4.5).closePath();
	this.shape_2.setTransform(6.5818,4.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(1.9,9.9).lineTo(1.8,9.9).curveTo(1.1,9.8,1.2,9.2).lineTo(1.6,5.2).curveTo(2,1.4,2.3,-2.4).curveTo(2.5,-5.9,1.3,-8.2).curveTo(-2,-4.8,-2.3,-1.2).lineTo(-2.2,8.2).curveTo(-2.2,8.9,-2.9,8.9).curveTo(-3.5,8.9,-3.6,8.3).lineTo(-3.7,-1.2).curveTo(-3.4,-5.6,0.9,-9.8).curveTo(1.2,-10,1.5,-10).curveTo(1.8,-10,2,-9.7).curveTo(2.3,-9.7,3,-7.9).curveTo(3.9,-5.6,3.7,-2.4).lineTo(3,5.3).lineTo(2.6,9.3).curveTo(2.5,10,2,10).lineTo(1.9,9.9).closePath();
	this.shape_3.setTransform(6.0632,14.7521);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,11.5,49.5);
p.frameBounds = [rect];


(lib.Symbol81 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-0.1,4.5).curveTo(-1.8,4.4,-3,3.1).curveTo(-4.2,1.7,-4.2,-0.1).curveTo(-4.2,-1.9,-2.9,-3.2).curveTo(-1.7,-4.5,0.1,-4.4).curveTo(1.8,-4.4,3,-3.1).curveTo(4.2,-1.8,4.1,0.1).curveTo(4.1,1.9,2.8,3.2).curveTo(1.6,4.5,0,4.5).lineTo(-0.1,4.5).closePath();
	this.shape.setTransform(4.1538,45.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-1.5,9.7).curveTo(-1.9,9.4,-2.4,8).curveTo(-3.3,5.6,-3.3,2.4).curveTo(-3.3,-1.8,-3.2,-5.3).lineTo(-3.1,-9.3).curveTo(-3.1,-9.4,-3,-9.5).curveTo(-3,-9.5,-3,-9.6).curveTo(-3,-9.6,-2.9,-9.7).curveTo(-2.9,-9.7,-2.8,-9.8).curveTo(-2.8,-9.8,-2.7,-9.9).curveTo(-2.7,-9.9,-2.6,-9.9).curveTo(-2.6,-10,-2.5,-10).curveTo(-2.5,-10,-2.4,-9.9).lineTo(-2.4,-9.9).curveTo(-1.7,-9.9,-1.7,-9.2).lineTo(-1.9,-5.2).curveTo(-2.1,-1.8,-2.1,2.4).curveTo(-2.1,6,-0.9,8.2).curveTo(1.9,4.3,2,1).lineTo(1.7,-8.4).curveTo(1.7,-9,2.3,-9.1).curveTo(2.6,-9.1,2.9,-8.9).curveTo(2.9,-8.9,2.9,-8.8).curveTo(3,-8.8,3,-8.7).curveTo(3,-8.7,3,-8.6).curveTo(3,-8.6,3,-8.5).lineTo(3.3,1).curveTo(3.2,5.1,-0.6,9.7).curveTo(-0.8,10,-1,10).curveTo(-1.2,10,-1.5,9.7).closePath();
	this.shape_1.setTransform(4.35,34.895);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-0.1,4.5).curveTo(-2.1,4.4,-3.5,3.1).curveTo(-4.9,1.8,-4.9,-0.1).curveTo(-4.9,-1.9,-3.4,-3.2).curveTo(-2,-4.5,0.1,-4.5).curveTo(2.1,-4.4,3.5,-3.1).curveTo(5,-1.7,4.9,0.1).curveTo(4.8,2,3.3,3.2).curveTo(1.9,4.5,0.1,4.5).lineTo(-0.1,4.5).closePath();
	this.shape_2.setTransform(4.9282,4.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(1.7,9.2).lineTo(2,5.2).lineTo(2.3,-2.4).curveTo(2.3,-6,1.1,-8.1).curveTo(-2.2,-4.3,-2.2,-1).lineTo(-1.7,8.4).curveTo(-1.7,9,-2.4,9.1).curveTo(-3.1,9.1,-3.1,8.5).curveTo(-3.7,0.5,-3.6,-1).curveTo(-3.6,-5.3,0.6,-9.7).curveTo(0.8,-9.9,1.2,-9.9).curveTo(1.5,-10,1.7,-9.7).lineTo(2.1,-9.3).curveTo(2.5,-8.7,2.8,-7.9).curveTo(3.7,-5.7,3.7,-2.4).curveTo(3.7,0.7,3.4,5.3).lineTo(3.1,9.3).curveTo(3.1,10,2.4,10).curveTo(1.7,9.9,1.7,9.2).closePath();
	this.shape_3.setTransform(4.7493,14.7458);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,9.8,49.6);
p.frameBounds = [rect];


(lib.Symbol80 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-2.8,3.2).curveTo(-4,1.9,-4.1,0.1).curveTo(-4.2,-1.8,-3,-3.1).curveTo(-1.8,-4.4,-0.1,-4.4).curveTo(1.7,-4.5,2.9,-3.2).curveTo(4.2,-1.9,4.1,-0.1).curveTo(4.1,1.7,3,3.1).curveTo(1.8,4.4,0.1,4.5).lineTo(-0,4.5).curveTo(-1.6,4.5,-2.8,3.2).closePath();
	this.shape.setTransform(5.8249,45.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-1.1,9.7).curveTo(-1.6,9.1,-2,8).curveTo(-3,5.5,-3.2,2.4).lineTo(-3.4,-9.3).curveTo(-3.4,-9.9,-2.8,-9.9).lineTo(-2.7,-9.9).curveTo(-2.1,-9.9,-2.1,-9.3).lineTo(-2.1,-5.2).curveTo(-2.1,-1.3,-1.9,2.4).curveTo(-1.7,6.1,-0.6,8.1).curveTo(2.1,4.1,2.1,0.8).lineTo(1.4,-8.6).curveTo(1.4,-9.3,2,-9.3).curveTo(2.6,-9.4,2.7,-8.7).lineTo(3.4,0.8).curveTo(3.4,4.9,-0.1,9.6).curveTo(-0.3,9.9,-0.6,9.9).lineTo(-0.7,9.9).curveTo(-0.7,9.9,-0.8,9.9).curveTo(-0.8,9.9,-0.9,9.9).curveTo(-0.9,9.8,-1,9.8).curveTo(-1,9.7,-1.1,9.7).closePath();
	this.shape_1.setTransform(5.575,34.9542);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-3.3,3.2).curveTo(-4.8,2,-4.9,0.1).curveTo(-4.9,-1.7,-3.5,-3.1).curveTo(-2.1,-4.4,-0.1,-4.5).curveTo(2,-4.5,3.5,-3.2).curveTo(4.9,-1.9,4.9,-0.1).curveTo(4.9,1.8,3.5,3.1).curveTo(2.1,4.4,0.1,4.5).lineTo(-0,4.5).curveTo(-2,4.5,-3.3,3.2).closePath();
	this.shape_2.setTransform(4.8991,4.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(2.8,9.9).curveTo(2.2,9.8,2.2,9.2).lineTo(2.3,5.2).lineTo(2.2,-2.4).curveTo(2.1,-5.8,0.8,-8.1).curveTo(-2.2,-4.3,-2.2,-0.8).lineTo(-1.3,8.5).curveTo(-1.2,9.2,-1.9,9.3).curveTo(-2.6,9.3,-2.7,8.7).curveTo(-3.6,0.7,-3.6,-0.8).curveTo(-3.8,-5.1,0.3,-9.7).curveTo(0.5,-9.9,0.8,-9.9).curveTo(1.1,-10,1.4,-9.7).lineTo(1.8,-9.3).curveTo(2.2,-8.7,2.5,-8).curveTo(3.6,-5.7,3.6,-2.5).curveTo(3.7,0.2,3.6,5.2).lineTo(3.5,9.3).curveTo(3.5,9.9,2.9,9.9).closePath();
	this.shape_3.setTransform(5.0973,14.6708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,10,49.6);
p.frameBounds = [rect];


(lib.Symbol79 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-2.7,3.3).curveTo(-4,2.1,-4.1,0.2).curveTo(-4.3,-1.6,-3.2,-3).curveTo(-2,-4.4,-0.3,-4.5).curveTo(1.5,-4.6,2.8,-3.3).curveTo(4.1,-2.1,4.1,-0.2).curveTo(4.2,1.6,3.1,2.9).curveTo(2,4.3,0.3,4.4).lineTo(0,4.5).curveTo(-1.5,4.5,-2.7,3.3).closePath();
	this.shape.setTransform(7.52,45.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(-0.5,9.7).curveTo(-1,9.1,-1.5,8).curveTo(-2.6,5.7,-2.9,2.5).lineTo(-3.5,-5.2).lineTo(-3.6,-9.2).curveTo(-3.7,-9.8,-3,-9.9).lineTo(-3,-9.9).curveTo(-2.4,-9.9,-2.3,-9.2).lineTo(-2.1,-5.2).curveTo(-1.9,-0.4,-1.6,2.4).curveTo(-1.3,5.8,-0.1,8.1).curveTo(2.5,4.1,2.3,0.7).curveTo(2.2,-1,1.7,-4.5).lineTo(1.2,-8.6).curveTo(1.1,-8.9,1.3,-9.2).curveTo(1.5,-9.4,1.8,-9.4).curveTo(2.4,-9.4,2.5,-8.8).lineTo(3.6,0.6).curveTo(3.8,4.8,0.5,9.6).curveTo(0.4,9.8,0,9.9).curveTo(-0.3,9.9,-0.5,9.7).closePath();
	this.shape_1.setTransform(6.6765,34.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-3.2,3.4).curveTo(-4.7,2.1,-4.9,0.3).curveTo(-5,-1.6,-3.7,-2.9).curveTo(-2.2,-4.4,-0.3,-4.5).curveTo(1.8,-4.6,3.3,-3.4).curveTo(4.8,-2.1,4.9,-0.3).curveTo(5,1.6,3.6,2.9).curveTo(2.3,4.3,0.3,4.5).lineTo(-0,4.5).curveTo(-1.9,4.5,-3.2,3.4).closePath();
	this.shape_2.setTransform(4.8709,4.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(3.1,9.9).curveTo(2.4,9.9,2.4,9.2).lineTo(2.3,5.2).curveTo(2.2,0.6,2,-2.4).curveTo(1.7,-6,0.3,-8.1).curveTo(-2.5,-4.2,-2.4,-0.6).curveTo(-2.3,0.9,-1.7,4.5).lineTo(-1.1,8.7).curveTo(-1,9.3,-1.7,9.4).curveTo(-2.3,9.5,-2.4,8.8).curveTo(-3.7,0.9,-3.8,-0.6).curveTo(-4.1,-4.8,-0.3,-9.6).curveTo(-0.1,-9.8,0.3,-9.9).curveTo(0.6,-9.9,0.8,-9.7).lineTo(1.2,-9.2).lineTo(2,-8).curveTo(3.2,-5.9,3.4,-2.5).lineTo(3.7,5.2).lineTo(3.8,9.2).curveTo(3.8,9.9,3.2,9.9).closePath();
	this.shape_3.setTransform(5.6104,14.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,11.7,49.5);
p.frameBounds = [rect];


(lib.Symbol78 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-2.5,3.4).curveTo(-3.9,2.3,-4.1,0.5).curveTo(-4.4,-1.4,-3.3,-2.8).curveTo(-2.2,-4.3,-0.5,-4.4).curveTo(1.2,-4.6,2.6,-3.4).curveTo(3.9,-2.3,4.1,-0.4).curveTo(4.3,1.4,3.2,2.8).curveTo(2.1,4.3,0.5,4.4).lineTo(0.1,4.4).curveTo(-1.4,4.4,-2.5,3.4).closePath();
	this.shape.setTransform(9.2612,44.9194);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(0.1,9.6).curveTo(-0.4,9.1,-1,8).curveTo(-2.2,5.8,-2.6,2.6).lineTo(-3.5,-5).lineTo(-3.8,-9.1).curveTo(-3.9,-9.3,-3.7,-9.6).curveTo(-3.5,-9.8,-3.2,-9.8).curveTo(-2.6,-9.8,-2.5,-9.2).lineTo(-2.2,-5.2).lineTo(-1.3,2.4).curveTo(-0.8,5.9,0.5,8).curveTo(3,3.6,2.5,0.5).curveTo(2.4,-0.9,1.7,-4.6).lineTo(1,-8.8).curveTo(0.9,-9.4,1.6,-9.5).curveTo(2.2,-9.6,2.4,-9).lineTo(3.8,0.4).curveTo(4,1.8,3.6,3.8).curveTo(2.9,6.6,1.1,9.5).curveTo(0.9,9.8,0.6,9.8).lineTo(0.5,9.8).lineTo(0.1,9.6).closePath();
	this.shape_1.setTransform(7.7905,34.905);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-3,3.5).curveTo(-4.6,2.4,-4.8,0.6).curveTo(-5.1,-1.3,-3.8,-2.7).curveTo(-2.5,-4.2,-0.5,-4.4).curveTo(1.6,-4.6,3.2,-3.5).curveTo(4.7,-2.3,4.9,-0.5).curveTo(5,1.4,3.7,2.8).curveTo(2.5,4.2,0.5,4.4).lineTo(-0.1,4.5).curveTo(-1.7,4.5,-3,3.5).closePath();
	this.shape_2.setTransform(4.8876,4.4756);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(3.4,9.8).curveTo(2.7,9.8,2.7,9.2).lineTo(2.4,5.2).lineTo(1.7,-2.5).curveTo(1.3,-5.9,-0.2,-8).curveTo(-2.9,-4,-2.6,-0.5).lineTo(-0.9,8.7).curveTo(-0.8,9.4,-1.4,9.5).curveTo(-2.1,9.6,-2.2,9).curveTo(-3.8,1.2,-4,-0.3).curveTo(-4.5,-4.6,-0.8,-9.5).curveTo(-0.7,-9.7,-0.3,-9.8).curveTo(0,-9.8,0.3,-9.6).lineTo(0.7,-9.2).curveTo(1.1,-8.7,1.5,-8).curveTo(2.8,-5.7,3.1,-2.6).curveTo(3.4,-0,3.8,5.1).lineTo(4,9.1).curveTo(4,9.7,3.4,9.8).closePath();
	this.shape_3.setTransform(6.2199,14.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,13.4,49.4);
p.frameBounds = [rect];


(lib.Symbol77 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-2.4,3.5).curveTo(-3.8,2.4,-4.1,0.6).curveTo(-4.4,-1.2,-3.4,-2.7).curveTo(-2.4,-4.2,-0.7,-4.4).curveTo(1.1,-4.6,2.5,-3.5).curveTo(3.9,-2.4,4.1,-0.6).curveTo(4.3,1.3,3.3,2.7).curveTo(2.3,4.2,0.6,4.4).lineTo(0,4.4).curveTo(-1.3,4.4,-2.4,3.5).closePath();
	this.shape.setTransform(11.0037,44.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(0.7,9.6).curveTo(0.2,9.1,-0.5,8).curveTo(-1.7,5.9,-2.3,2.7).curveTo(-3,-1.1,-3.5,-4.9).lineTo(-4.1,-8.9).curveTo(-4.1,-9.6,-3.5,-9.7).curveTo(-2.8,-9.8,-2.7,-9.1).lineTo(-1.1,2.5).curveTo(-0.4,5.9,1,7.9).curveTo(3.2,3.6,2.7,0.4).lineTo(1.7,-4.7).lineTo(0.8,-8.8).curveTo(0.7,-9.4,1.3,-9.6).curveTo(2,-9.7,2.1,-9.1).lineTo(3,-4.9).lineTo(4,0.2).curveTo(4.2,1.6,3.9,3.6).curveTo(3.3,6.4,1.6,9.4).lineTo(1.2,9.7).lineTo(0.7,9.6).closePath();
	this.shape_1.setTransform(8.9271,34.7938);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-2.9,3.7).curveTo(-4.5,2.6,-4.8,0.8).curveTo(-5.1,-1,-3.9,-2.5).curveTo(-2.7,-4.1,-0.7,-4.4).curveTo(1.4,-4.7,3,-3.6).curveTo(4.7,-2.5,4.9,-0.6).curveTo(5.1,1.2,3.9,2.7).curveTo(2.6,4.2,0.7,4.4).lineTo(-0.1,4.5).curveTo(-1.7,4.5,-2.9,3.7).closePath();
	this.shape_2.setTransform(4.8908,4.4429);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(2.9,9.1).lineTo(2.4,5.1).curveTo(1.9,0.5,1.4,-2.5).curveTo(0.9,-5.9,-0.7,-7.9).curveTo(-3.3,-3.8,-2.8,-0.3).lineTo(-1.6,4.8).lineTo(-0.7,8.8).curveTo(-0.5,9.4,-1.2,9.6).curveTo(-1.8,9.8,-2,9.2).curveTo(-3.9,1.4,-4.2,-0.1).curveTo(-4.4,-1.6,-4.1,-3.5).curveTo(-3.4,-6.6,-1.4,-9.4).curveTo(-1.2,-9.7,-0.9,-9.7).curveTo(-0.6,-9.8,-0.3,-9.6).lineTo(0.1,-9.2).curveTo(0.6,-8.7,1,-8).curveTo(2.4,-5.8,2.8,-2.7).curveTo(3.3,0.3,3.8,4.9).lineTo(4.2,9).curveTo(4.3,9.6,3.6,9.7).curveTo(3,9.7,2.9,9.1).closePath();
	this.shape_3.setTransform(6.8042,14.32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,15.2,49.1);
p.frameBounds = [rect];


(lib.Symbol76 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-2.2,3.7).curveTo(-3.6,2.7,-4,0.9).curveTo(-4.4,-0.9,-3.5,-2.5).curveTo(-2.6,-4,-0.9,-4.4).curveTo(0.8,-4.7,2.3,-3.6).curveTo(3.7,-2.5,4.1,-0.7).curveTo(4.4,1.1,3.4,2.6).curveTo(2.5,4.1,0.8,4.4).lineTo(0,4.5).curveTo(-1.1,4.5,-2.2,3.7).closePath();
	this.shape.setTransform(12.7767,44.3866);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(1.3,9.5).curveTo(1,9.5,0,8).curveTo(-1.3,6,-2.1,2.8).curveTo(-2.8,-0.2,-3.6,-4.7).lineTo(-4.3,-8.7).curveTo(-4.4,-9.4,-3.8,-9.5).curveTo(-3.1,-9.7,-3,-8.9).lineTo(-2.3,-5).lineTo(-0.8,2.5).curveTo(-0.1,5.8,1.5,7.9).curveTo(3.5,3.4,2.9,0.2).lineTo(0.5,-8.9).curveTo(0.4,-9.5,1,-9.7).curveTo(1.3,-9.7,1.5,-9.6).curveTo(1.8,-9.4,1.8,-9.2).lineTo(4.1,0).curveTo(4.9,4,2.2,9.3).curveTo(2,9.6,1.8,9.6).lineTo(1.6,9.7).lineTo(1.3,9.5).closePath();
	this.shape_1.setTransform(10.1085,34.6104);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-2.7,3.8).curveTo(-4.4,2.8,-4.8,1).curveTo(-5.2,-0.8,-4,-2.3).curveTo(-2.9,-3.9,-0.9,-4.4).curveTo(1.2,-4.7,2.9,-3.7).curveTo(4.5,-2.7,4.8,-0.8).curveTo(5.2,1,4,2.5).curveTo(2.8,4,0.9,4.4).lineTo(-0.3,4.5).curveTo(-1.6,4.5,-2.7,3.8).closePath();
	this.shape_2.setTransform(4.8879,4.4889);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-1.8,9.2).curveTo(-4,1.6,-4.3,0.1).curveTo(-5.2,-4.2,-2,-9.4).curveTo(-1.9,-9.6,-1.5,-9.7).curveTo(-1.3,-9.8,-0.9,-9.6).lineTo(-0.5,-9.2).lineTo(0.5,-8.1).curveTo(2,-6,2.6,-2.8).lineTo(4.5,8.7).curveTo(4.6,9.4,3.9,9.5).lineTo(3.9,9.5).curveTo(3.2,9.6,3.1,8.9).lineTo(2.5,4.9).lineTo(1.2,-2.6).curveTo(0.5,-6,-1.2,-8).curveTo(-3.6,-3.7,-2.9,-0.2).lineTo(-1.6,4.8).lineTo(-0.5,8.8).curveTo(-0.3,9.5,-0.9,9.7).lineTo(-1.2,9.7).curveTo(-1.6,9.7,-1.8,9.2).closePath();
	this.shape_3.setTransform(7.4079,14.3173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,16.9,48.9);
p.frameBounds = [rect];


(lib.Symbol75 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-2,3.8).curveTo(-3.5,2.8,-4,1).curveTo(-4.5,-0.8,-3.6,-2.3).curveTo(-2.7,-3.9,-1,-4.3).curveTo(0.7,-4.8,2.2,-3.7).curveTo(3.6,-2.7,4,-0.9).curveTo(4.4,0.9,3.6,2.4).curveTo(2.7,3.9,1.1,4.3).lineTo(0.1,4.5).curveTo(-1,4.5,-2,3.8).closePath();
	this.shape.setTransform(14.5747,43.9668);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(1.9,9.5).curveTo(1.3,9.1,0.6,8.1).curveTo(-0.9,6,-1.8,2.9).curveTo(-2.8,-0.6,-3.6,-4.5).lineTo(-4.5,-8.5).curveTo(-4.6,-9.1,-4,-9.3).lineTo(-4,-9.3).curveTo(-3.3,-9.4,-3.2,-8.8).lineTo(-2.3,-4.8).curveTo(-1.3,-0.3,-0.5,2.6).curveTo(0.3,5.7,2,7.9).curveTo(3.8,3.3,3,0.1).lineTo(1.6,-4.9).lineTo(0.3,-8.9).curveTo(0.1,-9.5,0.8,-9.7).curveTo(1.4,-9.8,1.6,-9.2).lineTo(4.3,-0.1).curveTo(4.6,1.7,4.5,3.2).curveTo(4.2,5.9,2.8,9.3).curveTo(2.7,9.5,2.4,9.6).lineTo(2.2,9.7).lineTo(1.9,9.5).closePath();
	this.shape_1.setTransform(11.3179,34.2517);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-2.6,3.9).curveTo(-4.3,3,-4.7,1.2).curveTo(-5.3,-0.6,-4.2,-2.2).curveTo(-3.1,-3.8,-1,-4.3).curveTo(0.9,-4.8,2.7,-3.9).curveTo(4.4,-2.9,4.8,-1.1).curveTo(5.2,0.7,4.1,2.3).curveTo(3,3.8,1,4.3).curveTo(0.4,4.5,-0.3,4.5).curveTo(-1.5,4.5,-2.6,3.9).closePath();
	this.shape_2.setTransform(4.9002,4.4781);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-1.1,9.7).curveTo(-1.4,9.5,-1.5,9.3).curveTo(-4.1,1.7,-4.5,0.3).curveTo(-5.5,-3.9,-2.6,-9.3).curveTo(-2.4,-9.6,-2.1,-9.7).curveTo(-1.8,-9.8,-1.5,-9.6).curveTo(-0.9,-9.3,-0,-8.1).curveTo(1.5,-6.2,2.3,-3).curveTo(3,0,3.9,4.5).lineTo(4.7,8.5).curveTo(4.8,9.1,4.2,9.3).curveTo(3.5,9.4,3.4,8.7).lineTo(2.6,4.8).curveTo(1.7,0.5,0.9,-2.7).curveTo(0,-6.2,-1.7,-7.9).curveTo(-3.9,-3.5,-3.1,-0.1).lineTo(-1.5,4.9).lineTo(-0.2,8.8).curveTo(0,9.5,-0.6,9.7).lineTo(-0.9,9.7).lineTo(-1.1,9.7).closePath();
	this.shape_3.setTransform(8.0285,14.1679);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,18.8,48.4);
p.frameBounds = [rect];


(lib.Symbol74 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-1.8,3.9).curveTo(-3.4,2.9,-3.9,1.2).curveTo(-4.5,-0.6,-3.7,-2.1).curveTo(-2.9,-3.7,-1.2,-4.3).curveTo(0.4,-4.8,2,-3.8).curveTo(3.5,-2.9,3.9,-1.1).curveTo(4.4,0.7,3.6,2.2).curveTo(2.8,3.8,1.3,4.3).lineTo(0.2,4.5).curveTo(-0.8,4.5,-1.8,3.9).closePath();
	this.shape.setTransform(16.3591,43.5388);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(2.5,9.6).curveTo(1.8,9.1,1.1,8.2).curveTo(-0.5,6,-1.5,3.1).curveTo(-2.8,-0.9,-3.7,-4.2).lineTo(-4.8,-8.1).curveTo(-4.9,-8.7,-4.3,-8.9).lineTo(-4.3,-8.9).lineTo(-3.8,-8.9).curveTo(-3.5,-8.7,-3.5,-8.5).lineTo(-2.4,-4.6).curveTo(-1.3,-0.4,-0.3,2.8).curveTo(0.9,6.2,2.5,7.9).curveTo(4.1,3.3,3.2,0.1).curveTo(2.7,-1.4,1.5,-4.8).lineTo(0.1,-8.7).curveTo(-0.2,-9.3,0.5,-9.6).curveTo(1,-9.8,1.3,-9.2).lineTo(4.4,-0.2).curveTo(5.5,3.7,3.4,9.3).curveTo(3.2,9.6,3,9.6).lineTo(2.8,9.7).lineTo(2.5,9.6).closePath();
	this.shape_1.setTransform(12.5212,33.8853);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-2.4,4).curveTo(-4.2,3.2,-4.7,1.4).curveTo(-5.2,-0.3,-4.2,-2).curveTo(-3.2,-3.7,-1.2,-4.3).curveTo(0.7,-4.9,2.5,-4).curveTo(4.3,-3.1,4.8,-1.3).curveTo(5.2,0.4,4.2,2.1).curveTo(3.2,3.7,1.3,4.3).curveTo(0.5,4.5,-0.3,4.5).curveTo(-1.3,4.5,-2.4,4).closePath();
	this.shape_2.setTransform(4.8865,4.5007);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-1.2,9.2).curveTo(-4.1,1.8,-4.6,0.4).curveTo(-5.8,-3.8,-3.1,-9.3).lineTo(-2.7,-9.7).curveTo(-2.3,-9.8,-2.1,-9.6).lineTo(-1.6,-9.3).lineTo(-0.5,-8.2).curveTo(1.1,-6.4,2,-3.2).curveTo(3.1,0.6,4,4.2).lineTo(5,8.2).curveTo(5.1,8.8,4.5,9).curveTo(3.8,9.1,3.6,8.5).lineTo(2.7,4.6).curveTo(1.7,0.6,0.7,-2.8).curveTo(-0.4,-6.1,-2.2,-7.9).curveTo(-4.2,-3.3,-3.2,-0).lineTo(-1.4,4.8).lineTo(0.1,8.7).curveTo(0.3,9.4,-0.3,9.6).lineTo(-0.6,9.7).curveTo(-1,9.7,-1.2,9.2).closePath();
	this.shape_3.setTransform(8.5951,14.155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,20.5,48);
p.frameBounds = [rect];


(lib.Symbol73 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-1.2,4.1).curveTo(-2.8,3.4,-3.6,1.7).curveTo(-4.5,0.1,-3.9,-1.6).curveTo(-3.4,-3.4,-1.8,-4.1).curveTo(-0.2,-4.8,1.4,-4).curveTo(3,-3.3,3.7,-1.6).curveTo(4.5,0.1,3.9,1.7).curveTo(3.4,3.4,1.9,4).curveTo(1.1,4.4,0.3,4.4).curveTo(-0.5,4.4,-1.2,4.1).closePath();
	this.shape.setTransform(21.9333,41.5125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(4.2,9.3).curveTo(3.5,9,2.6,8.1).curveTo(0.8,6.4,-0.6,3.6).lineTo(-3.9,-3.4).lineTo(-5.5,-7.1).curveTo(-5.8,-7.7,-5.2,-8).curveTo(-4.5,-8.2,-4.3,-7.6).lineTo(-2.7,-3.9).curveTo(-1.2,-0.4,0.5,3).curveTo(1.9,5.9,4,7.7).curveTo(4.9,2.8,3.5,-0.1).lineTo(-0.8,-8.4).curveTo(-1.2,-8.9,-0.6,-9.3).curveTo(0.1,-9.5,0.4,-9).lineTo(4.7,-0.6).curveTo(6.4,3.2,5,8.9).lineTo(4.7,9.3).lineTo(4.5,9.4).lineTo(4.2,9.3).closePath();
	this.shape_1.setTransform(16.3814,32.2859);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-1.8,4.4).curveTo(-3.7,3.8,-4.5,2.1).curveTo(-5.3,0.5,-4.5,-1.3).curveTo(-3.8,-3.2,-1.9,-4.1).curveTo(0.1,-4.9,1.9,-4.3).curveTo(3.8,-3.7,4.5,-2).curveTo(5.3,-0.3,4.5,1.5).curveTo(3.7,3.2,1.9,4.1).curveTo(0.8,4.6,-0.4,4.6).curveTo(-1.1,4.6,-1.8,4.4).closePath();
	this.shape_2.setTransform(4.9125,4.5922);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(-0.2,9.1).curveTo(-4.2,2.2,-4.8,0.8).curveTo(-6.7,-3.1,-4.8,-9).curveTo(-4.7,-9.2,-4.4,-9.4).curveTo(-4.1,-9.5,-3.8,-9.4).lineTo(-3.2,-9.1).lineTo(-2,-8.3).curveTo(-0.1,-6.5,1.2,-3.7).lineTo(4.3,3.4).lineTo(5.8,7.2).curveTo(5.9,7.8,5.4,8).lineTo(5.4,8).curveTo(4.7,8.3,4.5,7.7).lineTo(3,3.9).lineTo(-0.1,-3.1).curveTo(-1.6,-6.3,-3.7,-7.7).curveTo(-4.5,-4.8,-4.2,-2.5).curveTo(-4.1,-1,-3.6,0.2).lineTo(1,8.4).curveTo(1.3,9,0.7,9.3).lineTo(0.3,9.5).curveTo(0,9.5,-0.2,9.1).closePath();
	this.shape_3.setTransform(10.3485,13.8195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,26.1,45.9);
p.frameBounds = [rect];


(lib.Symbol72 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-1,4.1).curveTo(-2.7,3.5,-3.6,1.9).curveTo(-4.5,0.3,-4,-1.4).curveTo(-3.6,-3.1,-2.1,-4).curveTo(-0.6,-4.8,1.1,-4.1).curveTo(2.8,-3.5,3.6,-1.8).curveTo(4.4,-0.2,4,1.5).curveTo(3.5,3.1,2.1,3.9).curveTo(1.3,4.4,0.4,4.4).curveTo(-0.3,4.4,-1,4.1).closePath();
	this.shape.setTransform(23.756,40.6079);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(4.7,9.2).curveTo(4.4,9.2,3.1,8.1).curveTo(1.3,6.6,-0.4,3.7).lineTo(-4,-3.1).lineTo(-5.8,-6.7).curveTo(-6.1,-7.2,-5.5,-7.6).curveTo(-4.9,-7.9,-4.6,-7.3).lineTo(-2.8,-3.7).curveTo(-0.2,1.5,0.7,3.1).curveTo(2.5,6.3,4.4,7.6).curveTo(5.1,2.7,3.6,-0.1).lineTo(-1.2,-8.2).curveTo(-1.6,-8.8,-1,-9.1).curveTo(-0.4,-9.5,-0.1,-8.9).lineTo(4.7,-0.7).curveTo(5.3,0.5,5.7,2.5).curveTo(6.1,5.4,5.5,8.8).curveTo(5.5,9.1,5.3,9.2).lineTo(5,9.3).lineTo(4.7,9.2).closePath();
	this.shape_1.setTransform(17.6574,31.5355);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.7).beginStroke().moveTo(-1.6,4.5).curveTo(-3.5,4,-4.4,2.4).curveTo(-5.3,0.8,-4.6,-1.1).curveTo(-3.9,-3,-2.1,-3.9).curveTo(-0.2,-4.9,1.7,-4.4).curveTo(3.6,-3.9,4.4,-2.2).curveTo(5.2,-0.6,4.5,1.2).curveTo(3.9,3,2.1,4).curveTo(0.9,4.6,-0.4,4.6).lineTo(-1.6,4.5).closePath();
	this.shape_2.setTransform(4.852,4.589);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(0.2,9).curveTo(-4.2,2.3,-4.9,1).curveTo(-7,-2.8,-5.4,-8.8).curveTo(-5.3,-9.1,-5,-9.3).curveTo(-4.8,-9.4,-4.4,-9.3).curveTo(-4,-9.3,-2.6,-8.3).curveTo(-0.6,-6.7,0.9,-3.8).curveTo(2.7,-0.4,4.3,3.1).lineTo(6,6.8).curveTo(6.3,7.3,5.7,7.6).lineTo(5.6,7.6).curveTo(5,7.9,4.7,7.3).lineTo(3,3.7).lineTo(-0.4,-3.2).curveTo(-2.1,-6.4,-4.2,-7.6).curveTo(-5.3,-2.7,-3.7,0.3).lineTo(1.3,8.3).curveTo(1.7,8.8,1.1,9.2).lineTo(0.7,9.3).curveTo(0.4,9.3,0.2,9).closePath();
	this.shape_3.setTransform(10.8743,13.6021);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,27.9,45);
p.frameBounds = [rect];


(lib.Symbol71 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.3).beginStroke().moveTo(-0.7,4.2).curveTo(-2.4,3.7,-3.4,2.1).curveTo(-4.4,0.5,-4,-1.2).curveTo(-3.7,-2.9,-2.2,-3.8).curveTo(-0.6,-4.7,0.9,-4.2).curveTo(2.6,-3.6,3.5,-2).curveTo(4.4,-0.4,4,1.3).curveTo(3.7,3,2.3,3.9).curveTo(1.5,4.4,0.5,4.4).curveTo(-0.1,4.4,-0.7,4.2).closePath();
	this.shape.setTransform(25.7394,39.5904);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(5.3,9).curveTo(4.9,9,3.6,8).curveTo(1.5,6.3,-0.1,3.8).lineTo(-6.1,-6.3).curveTo(-6.4,-6.8,-5.9,-7.2).lineTo(-5.8,-7.2).curveTo(-5.3,-7.5,-4.9,-6.9).lineTo(-3,-3.4).lineTo(1,3.1).curveTo(2.8,6.1,4.9,7.4).curveTo(5.3,2.5,3.6,-0.2).lineTo(0.8,-4.6).lineTo(-1.6,-8).curveTo(-2,-8.6,-1.4,-9).curveTo(-0.9,-9.3,-0.5,-8.8).lineTo(4.7,-0.9).curveTo(5.5,0.3,5.9,2.3).curveTo(6.5,5.2,6.1,8.6).curveTo(6.1,8.7,6,8.7).curveTo(6,8.8,6,8.8).curveTo(6,8.9,5.9,8.9).curveTo(5.9,9,5.8,9).lineTo(5.5,9.1).lineTo(5.3,9).closePath();
	this.shape_1.setTransform(19.1383,30.7601);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(-1.3,4.5).curveTo(-3.3,4.2,-4.3,2.6).curveTo(-5.3,1,-4.7,-0.8).curveTo(-4.1,-2.7,-2.2,-3.8).curveTo(-0.4,-4.9,1.5,-4.5).curveTo(3.5,-4.1,4.4,-2.5).curveTo(5.3,-0.9,4.6,1).curveTo(4.1,2.8,2.3,3.9).curveTo(1,4.6,-0.3,4.6).lineTo(-1.3,4.5).closePath();
	this.shape_2.setTransform(4.9238,4.617);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(0.6,8.9).curveTo(-4.1,2.4,-4.9,1.2).curveTo(-7.2,-2.6,-5.9,-8.5).curveTo(-5.8,-8.8,-5.5,-9).curveTo(-5.3,-9.2,-4.9,-9.1).curveTo(-4.4,-9.1,-3.1,-8.2).curveTo(-1,-6.8,0.6,-4).curveTo(2.2,-1.5,4.4,2.7).lineTo(6.3,6.3).curveTo(6.6,6.9,6,7.2).lineTo(6,7.2).curveTo(5.5,7.6,5.1,7).lineTo(3.2,3.4).lineTo(-0.6,-3.2).curveTo(-2.4,-6.2,-4.6,-7.5).curveTo(-5.5,-2.5,-3.7,0.4).lineTo(-0.7,4.7).lineTo(1.7,8.1).curveTo(2.1,8.7,1.5,9).curveTo(1.5,9,1.4,9.1).curveTo(1.4,9.1,1.3,9.1).curveTo(1.3,9.2,1.2,9.2).curveTo(1.1,9.2,1.1,9.2).curveTo(0.8,9.2,0.6,8.9).closePath();
	this.shape_3.setTransform(11.4899,13.4425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,29.9,44);
p.frameBounds = [rect];


(lib.Symbol69 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(-0.3,4.2).curveTo(-2,3.9,-3.1,2.5).curveTo(-4.3,1,-4.2,-0.7).curveTo(-4.1,-2.5,-2.7,-3.6).curveTo(-1.3,-4.6,0.4,-4.2).curveTo(2.1,-3.8,3.2,-2.3).curveTo(4.3,-0.8,4.1,0.9).curveTo(4,2.6,2.7,3.5).curveTo(1.7,4.3,0.5,4.3).lineTo(-0.3,4.2).closePath();
	this.shape.setTransform(29.5054,36.9642);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(6.3,8.6).curveTo(5.9,8.6,4.5,7.8).curveTo(2.4,6.6,0.4,4).curveTo(-1.3,2,-4.4,-2).lineTo(-6.8,-5.3).curveTo(-7.2,-5.8,-6.7,-6.2).lineTo(-6.6,-6.2).curveTo(-6.1,-6.6,-5.7,-6.1).lineTo(-3.3,-2.8).curveTo(-0.9,0.5,1.3,3.2).curveTo(3.6,6,5.7,7.1).curveTo(5.5,2.1,3.6,-0.4).lineTo(-2.5,-7.5).curveTo(-2.9,-8.1,-2.4,-8.5).curveTo(-1.9,-8.9,-1.5,-8.4).lineTo(4.6,-1.1).curveTo(5.5,0,6.1,1.9).curveTo(7,4.7,7,8).curveTo(7,8.3,6.8,8.5).lineTo(6.5,8.7).lineTo(6.3,8.6).closePath();
	this.shape_1.setTransform(21.9374,28.7225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(-0.9,4.7).curveTo(-2.8,4.5,-4,3.1).curveTo(-5.1,1.6,-4.8,-0.3).curveTo(-4.4,-2.3,-2.7,-3.6).curveTo(-1,-4.8,1,-4.7).curveTo(3,-4.5,4,-3).curveTo(5.1,-1.5,4.7,0.4).curveTo(4.3,2.3,2.7,3.5).curveTo(1.2,4.7,-0.6,4.7).lineTo(-0.9,4.7).closePath();
	this.shape_2.setTransform(4.8625,4.6707);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(1.5,8.5).curveTo(-3.9,2.7,-4.9,1.5).curveTo(-5.8,0.3,-6.4,-1.5).curveTo(-7.3,-4.4,-6.9,-8.1).curveTo(-6.8,-8.4,-6.6,-8.6).curveTo(-6.3,-8.9,-6,-8.8).curveTo(-5.4,-8.8,-4,-8).curveTo(-1.9,-6.8,0.1,-4.2).curveTo(2.2,-1.6,4.6,2).lineTo(6.9,5.4).curveTo(7.3,5.9,6.7,6.3).curveTo(6.1,6.6,5.8,6.1).lineTo(3.5,2.8).curveTo(1.3,-0.3,-1,-3.4).curveTo(-3.3,-6.3,-5.5,-7.1).curveTo(-5.9,-2.1,-3.7,0.6).curveTo(-2.9,1.6,-0.3,4.5).lineTo(2.5,7.6).curveTo(2.9,8,2.5,8.6).curveTo(2.4,8.6,2.3,8.7).curveTo(2.3,8.7,2.2,8.7).curveTo(2.2,8.8,2.1,8.8).curveTo(2.1,8.8,2,8.8).curveTo(1.7,8.8,1.5,8.5).closePath();
	this.shape_3.setTransform(12.4441,12.8548);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,33.7,41.3);
p.frameBounds = [rect];


(lib.Symbol68 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(0.1,4.2).curveTo(-1.6,4,-2.9,2.6).curveTo(-4.2,1.3,-4.2,-0.5).curveTo(-4.1,-2.3,-2.9,-3.4).curveTo(-1.6,-4.5,0.2,-4.2).curveTo(1.9,-4,3.1,-2.5).curveTo(4.2,-1.1,4.2,0.6).curveTo(4.1,2.3,3,3.4).curveTo(2,4.3,0.6,4.3).lineTo(0.1,4.2).closePath();
	this.shape.setTransform(31.376,35.4679);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(4.9,7.7).curveTo(2.7,6.6,0.5,4.2).curveTo(-1.4,2.2,-4.6,-1.6).lineTo(-7.2,-4.7).curveTo(-7.3,-4.7,-7.3,-4.8).curveTo(-7.3,-4.8,-7.3,-4.9).curveTo(-7.4,-5,-7.4,-5).curveTo(-7.4,-5.1,-7.4,-5.1).curveTo(-7.4,-5.2,-7.3,-5.3).curveTo(-7.3,-5.3,-7.3,-5.4).curveTo(-7.3,-5.5,-7.2,-5.5).curveTo(-7.2,-5.6,-7.1,-5.6).lineTo(-7.1,-5.6).curveTo(-6.6,-6,-6.1,-5.5).lineTo(-3.6,-2.4).curveTo(-1,0.7,1.4,3.3).curveTo(3.7,5.8,6,6.9).curveTo(5.5,2.1,3.4,-0.4).lineTo(-3.1,-7.2).curveTo(-3.6,-7.7,-3.1,-8.2).curveTo(-2.6,-8.6,-2.2,-8.1).lineTo(0.9,-5).lineTo(4.3,-1.2).curveTo(6.9,1.8,7.4,7.8).curveTo(7.4,8.1,7.2,8.3).curveTo(7.1,8.4,6.7,8.4).curveTo(6,8.3,4.9,7.7).closePath();
	this.shape_1.setTransform(23.45,27.5434);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(-3.8,3.4).curveTo(-5.1,2,-4.8,0).curveTo(-4.5,-1.9,-2.9,-3.4).curveTo(-1.3,-4.8,0.7,-4.7).curveTo(2.7,-4.7,3.9,-3.2).curveTo(5,-1.8,4.7,0.1).curveTo(4.4,2,2.9,3.4).curveTo(1.4,4.7,-0.6,4.7).curveTo(-2.6,4.7,-3.8,3.4).closePath();
	this.shape_2.setTransform(4.802,4.7218);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(2,8.3).curveTo(-3.7,2.8,-4.8,1.7).curveTo(-7.6,-1.5,-7.4,-7.7).curveTo(-7.4,-8.1,-7.1,-8.3).curveTo(-6.9,-8.5,-6.5,-8.5).lineTo(-6,-8.4).curveTo(-5.3,-8.3,-4.5,-7.9).curveTo(-2.2,-6.8,-0.1,-4.4).curveTo(2.1,-1.8,4.7,1.6).lineTo(7.2,4.8).curveTo(7.6,5.3,7.1,5.7).curveTo(6.5,6.1,6.1,5.6).lineTo(3.6,2.4).lineTo(-1.2,-3.4).curveTo(-3.6,-6.2,-6,-6.9).curveTo(-6,-1.9,-3.7,0.7).lineTo(3,7.3).curveTo(3.2,7.5,3.2,7.8).curveTo(3.2,7.9,3.2,7.9).curveTo(3.2,8,3.2,8.1).curveTo(3.2,8.1,3.1,8.2).curveTo(3.1,8.2,3,8.3).curveTo(2.8,8.5,2.5,8.5).curveTo(2.3,8.5,2,8.3).closePath();
	this.shape_3.setTransform(12.862,12.5816);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,35.6,39.8);
p.frameBounds = [rect];


(lib.Symbol67 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(0.3,4.2).curveTo(-1.4,4.1,-2.7,2.8).curveTo(-4.1,1.6,-4.2,-0.2).curveTo(-4.3,-1.9,-3.1,-3.1).curveTo(-1.9,-4.3,-0.1,-4.2).curveTo(1.6,-4,2.8,-2.7).curveTo(4.1,-1.3,4.2,0.4).curveTo(4.3,2.1,3.2,3.2).curveTo(2.2,4.2,0.7,4.2).lineTo(0.3,4.2).closePath();
	this.shape.setTransform(33.328,33.73);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(5.3,7.4).curveTo(3,6.4,0.7,4.2).curveTo(-2.5,1.3,-4.8,-1.2).lineTo(-7.6,-4.1).curveTo(-7.7,-4.1,-7.7,-4.2).curveTo(-7.7,-4.2,-7.8,-4.3).curveTo(-7.8,-4.4,-7.8,-4.4).curveTo(-7.8,-4.5,-7.8,-4.5).curveTo(-7.8,-4.8,-7.6,-5).lineTo(-7.5,-5).curveTo(-7.1,-5.5,-6.6,-5).lineTo(-3.9,-2.1).lineTo(1.5,3.3).curveTo(4.1,5.9,6.4,6.6).curveTo(5.5,1.7,3.3,-0.5).curveTo(2.5,-1.4,-0.5,-4.1).lineTo(-3.6,-6.8).curveTo(-3.8,-7,-3.9,-7.3).curveTo(-3.9,-7.6,-3.7,-7.8).curveTo(-3.2,-8.3,-2.7,-7.8).lineTo(4.2,-1.4).curveTo(5.2,-0.4,6.1,1.5).curveTo(7.3,4.1,7.8,7.4).curveTo(7.8,7.5,7.8,7.5).curveTo(7.8,7.6,7.8,7.7).curveTo(7.7,7.7,7.7,7.8).curveTo(7.7,7.8,7.7,7.9).curveTo(7.5,8.1,7.1,8.1).curveTo(6.4,8,5.3,7.4).closePath();
	this.shape_1.setTransform(24.95,26.2434);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(-3.6,3.7).curveTo(-4.9,2.4,-4.8,0.4).curveTo(-4.7,-1.6,-3.1,-3.1).curveTo(-1.5,-4.7,0.5,-4.8).curveTo(2.4,-4.9,3.7,-3.5).curveTo(4.9,-2.1,4.8,-0.2).curveTo(4.6,1.8,3.2,3.2).curveTo(1.7,4.6,-0.3,4.8).lineTo(-0.7,4.8).curveTo(-2.4,4.8,-3.6,3.7).closePath();
	this.shape_2.setTransform(4.7755,4.7796);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(2.6,8).curveTo(-3.5,2.9,-4.6,1.8).curveTo(-5.8,0.6,-6.5,-1).curveTo(-7.7,-3.7,-7.8,-7.4).curveTo(-7.8,-7.7,-7.5,-8).curveTo(-7.3,-8.2,-7,-8.2).lineTo(-6.4,-8.2).curveTo(-5.7,-8.1,-4.9,-7.8).curveTo(-2.5,-6.8,-0.3,-4.5).curveTo(1.8,-2.4,4.9,1.1).lineTo(7.6,4.2).curveTo(8,4.6,7.5,5.1).lineTo(7.5,5.1).curveTo(7,5.5,6.6,5.1).lineTo(3.9,2.1).curveTo(0.3,-1.9,-1.4,-3.5).curveTo(-3.9,-6,-6.3,-6.6).curveTo(-6,-1.6,-3.6,0.8).lineTo(0.3,4.2).lineTo(3.5,7).curveTo(3.7,7.1,3.8,7.4).curveTo(3.8,7.5,3.8,7.6).curveTo(3.7,7.6,3.7,7.7).curveTo(3.7,7.7,3.7,7.8).curveTo(3.6,7.8,3.6,7.9).curveTo(3.3,8.2,3.1,8.2).curveTo(3,8.2,3,8.2).curveTo(2.9,8.2,2.8,8.2).curveTo(2.8,8.1,2.7,8.1).curveTo(2.7,8,2.6,8).closePath();
	this.shape_3.setTransform(13.2816,12.2513);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,37.6,37.9);
p.frameBounds = [rect];


(lib.Symbol66 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(-2.5,3).curveTo(-3.9,1.8,-4.2,0.1).curveTo(-4.4,-1.7,-3.3,-2.9).curveTo(-2.2,-4.2,-0.4,-4.1).curveTo(1.3,-4.1,2.7,-2.8).curveTo(4,-1.5,4.2,0.2).curveTo(4.4,1.9,3.3,3).curveTo(2.4,4.2,0.7,4.2).curveTo(-1,4.2,-2.5,3).closePath();
	this.shape.setTransform(35.1679,31.849);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(5.7,7.2).curveTo(3.2,6.3,0.9,4.3).curveTo(-1.7,2.2,-5,-0.7).lineTo(-8,-3.4).curveTo(-8.4,-3.8,-8,-4.3).lineTo(-8,-4.3).curveTo(-7.5,-4.8,-7.1,-4.4).lineTo(-4.1,-1.6).lineTo(1.7,3.4).curveTo(4.4,5.7,6.7,6.3).curveTo(5.5,1.5,3.1,-0.6).lineTo(-4.2,-6.4).curveTo(-4.7,-6.9,-4.3,-7.4).curveTo(-3.9,-7.9,-3.4,-7.5).lineTo(4,-1.5).curveTo(5,-0.5,6,1.2).curveTo(7.5,3.7,8.1,7).curveTo(8.2,7.1,8.2,7.1).curveTo(8.2,7.2,8.2,7.3).curveTo(8.2,7.3,8.1,7.4).curveTo(8.1,7.4,8,7.5).curveTo(8,7.5,8,7.6).curveTo(7.9,7.6,7.9,7.6).curveTo(7.8,7.6,7.7,7.7).curveTo(7.7,7.7,7.6,7.7).curveTo(6.8,7.7,5.7,7.2).closePath();
	this.shape_1.setTransform(26.41,24.7861);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(-3.3,3.9).curveTo(-4.8,2.7,-4.8,0.7).curveTo(-4.8,-1.3,-3.3,-3).curveTo(-1.9,-4.6,0.2,-4.8).curveTo(2.2,-5.1,3.5,-3.8).curveTo(4.8,-2.5,4.8,-0.5).curveTo(4.7,1.4,3.3,2.9).curveTo(2,4.5,0,4.8).lineTo(-0.7,4.9).curveTo(-2.2,4.9,-3.3,3.9).closePath();
	this.shape_2.setTransform(4.7759,4.8609);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(3.3,7.7).curveTo(-3.2,3.1,-4.3,2.1).curveTo(-7.6,-0.7,-8.2,-7).curveTo(-8.2,-7.3,-7.9,-7.5).curveTo(-7.8,-7.8,-7.4,-7.8).lineTo(-6.8,-7.8).curveTo(-6.1,-7.7,-5.3,-7.5).curveTo(-2.8,-6.7,-0.5,-4.6).curveTo(1.2,-3.1,5.1,0.7).lineTo(8,3.6).curveTo(8.4,4,8,4.5).curveTo(7.5,5,7,4.5).lineTo(4.1,1.7).curveTo(0.7,-1.6,-1.5,-3.5).curveTo(-4.2,-5.9,-6.6,-6.3).curveTo(-6.3,-3.4,-5.1,-1.2).curveTo(-4.3,0.1,-3.4,1).lineTo(0.8,4.1).lineTo(4.1,6.6).curveTo(4.7,7,4.3,7.6).curveTo(4,7.8,3.7,7.8).lineTo(3.3,7.7).closePath();
	this.shape_3.setTransform(13.6375,11.8471);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,39.4,36);
p.frameBounds = [rect];


(lib.Symbol65 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(-2.3,3.1).curveTo(-3.8,2,-4.1,0.3).curveTo(-4.5,-1.4,-3.5,-2.7).curveTo(-2.5,-4,-0.7,-4.1).curveTo(1,-4.2,2.4,-3).curveTo(3.8,-1.9,4.2,-0.2).curveTo(4.4,1.7,3.6,2.7).curveTo(2.7,4,1,4.1).lineTo(0.7,4.1).curveTo(-0.9,4.1,-2.3,3.1).closePath();
	this.shape.setTransform(36.983,29.6753);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(6.1,6.9).curveTo(3.5,6.1,1.1,4.4).curveTo(-1.5,2.6,-5.1,-0.2).lineTo(-8.3,-2.7).curveTo(-8.8,-3.1,-8.4,-3.6).lineTo(-8.4,-3.6).curveTo(-8,-4.1,-7.5,-3.7).lineTo(1.8,3.4).curveTo(4.6,5.4,7,5.9).curveTo(5.5,1.3,2.9,-0.7).curveTo(2.3,-1.2,-1.3,-3.7).lineTo(-4.8,-6).curveTo(-5.3,-6.4,-5,-6.9).curveTo(-4.6,-7.5,-4.1,-7.1).lineTo(3.7,-1.6).curveTo(4.8,-0.8,5.9,0.9).curveTo(7.5,3.3,8.5,6.5).curveTo(8.6,6.8,8.5,7).curveTo(8.5,7.1,8.4,7.1).curveTo(8.4,7.2,8.3,7.2).curveTo(8.3,7.2,8.2,7.2).curveTo(8.1,7.2,8,7.2).lineTo(7.8,7.2).curveTo(7.1,7.2,6.1,6.9).closePath();
	this.shape_1.setTransform(27.8561,23.1101);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(-3.1,4.2).curveTo(-4.6,3.1,-4.7,1.1).curveTo(-4.9,-0.9,-3.5,-2.7).curveTo(-2.1,-4.5,-0.2,-4.8).curveTo(1.7,-5.2,3.2,-4).curveTo(4.6,-2.8,4.7,-0.9).curveTo(4.8,1.1,3.6,2.8).curveTo(2.3,4.4,0.4,4.8).lineTo(-0.7,4.9).curveTo(-2,4.9,-3.1,4.2).closePath();
	this.shape_2.setTransform(4.7185,4.9403);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(3.9,7.3).curveTo(-2.9,3.2,-4.1,2.3).curveTo(-7.6,-0.3,-8.5,-6.5).curveTo(-8.6,-6.8,-8.4,-7.1).curveTo(-8.2,-7.4,-7.9,-7.4).lineTo(-7.3,-7.4).curveTo(-6.6,-7.4,-5.8,-7.2).curveTo(-3.5,-6.8,-0.7,-4.7).curveTo(1.6,-2.9,5.2,0.2).lineTo(8.3,2.8).curveTo(8.7,3.3,8.3,3.8).curveTo(7.9,4.3,7.4,3.9).lineTo(4.3,1.3).lineTo(-1.6,-3.5).curveTo(-4.5,-5.7,-7,-5.9).curveTo(-6,-1,-3.2,1.1).lineTo(4.7,6.2).curveTo(4.9,6.3,5,6.6).curveTo(5,6.9,4.9,7.1).curveTo(4.7,7.4,4.4,7.4).lineTo(3.9,7.3).closePath();
	this.shape_3.setTransform(13.9641,11.3931);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,41.2,33.8);
p.frameBounds = [rect];


(lib.Symbol64 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(-2,3.2).curveTo(-3.6,2.3,-4.1,0.6).curveTo(-4.4,-0.1,-4.3,-0.9).curveTo(-4.1,-1.9,-3.7,-2.4).curveTo(-2.8,-3.8,-1.1,-4).curveTo(0.7,-4.2,2.2,-3.2).curveTo(3.7,-2.1,4.1,-0.4).curveTo(4.6,1.2,3.8,2.5).curveTo(3.3,3.2,2.7,3.4).curveTo(2.1,3.8,1.3,3.9).lineTo(0.6,4).curveTo(-0.8,4,-2,3.2).closePath();
	this.shape.setTransform(38.7801,27.202);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(6.4,6.6).curveTo(3.8,5.9,1.3,4.4).curveTo(-2.3,2.3,-5.2,0.3).lineTo(-8.6,-1.9).curveTo(-9.2,-2.2,-8.8,-2.8).lineTo(-8.8,-2.8).curveTo(-8.4,-3.4,-7.9,-3).lineTo(1.9,3.4).curveTo(4.9,5.2,7.3,5.5).curveTo(5.5,1.2,2.8,-0.7).lineTo(-5.3,-5.4).curveTo(-5.9,-5.8,-5.6,-6.3).curveTo(-5.3,-6.9,-4.7,-6.6).lineTo(-1,-4.4).curveTo(2.7,-2.3,3.4,-1.7).curveTo(4.6,-1,5.9,0.6).curveTo(7.7,2.9,8.9,6).curveTo(8.9,6.1,8.9,6.1).curveTo(8.9,6.2,8.9,6.3).curveTo(8.9,6.3,8.9,6.4).curveTo(8.9,6.4,8.8,6.5).curveTo(8.7,6.7,8.4,6.7).lineTo(7.9,6.7).curveTo(7.3,6.7,6.4,6.6).closePath();
	this.shape_1.setTransform(29.3019,21.2498);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.9).beginStroke().moveTo(-2.8,4.5).curveTo(-4.3,3.5,-4.7,1.5).curveTo(-4.8,0.7,-4.6,-0.5).curveTo(-4.3,-1.7,-3.7,-2.4).curveTo(-2.5,-4.2,-0.6,-4.8).curveTo(1.4,-5.4,2.9,-4.3).curveTo(4.4,-3.2,4.7,-1.2).curveTo(4.9,0.7,3.7,2.5).curveTo(3.1,3.4,2.3,3.9).curveTo(1.6,4.5,0.7,4.8).curveTo(0,5,-0.7,5).curveTo(-1.8,5,-2.8,4.5).closePath();
	this.shape_2.setTransform(4.7077,5.0376);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(4.6,6.9).curveTo(-2.5,3.3,-3.8,2.5).curveTo(-5.3,1.4,-6.3,0.1).curveTo(-7.1,-0.9,-7.8,-2.3).curveTo(-8.5,-3.9,-8.9,-5.9).curveTo(-9,-6.2,-8.8,-6.5).curveTo(-8.6,-6.9,-8.3,-6.9).curveTo(-8,-7.2,-6.2,-6.9).curveTo(-3.8,-6.6,-1,-4.7).curveTo(1.3,-3.3,5.3,-0.3).lineTo(8.6,2.1).curveTo(9.1,2.5,8.8,3).lineTo(8.7,3).curveTo(8.6,3.3,8.3,3.3).curveTo(8,3.4,7.8,3.2).lineTo(4.5,0.8).curveTo(1.3,-1.5,-1.8,-3.5).curveTo(-4.8,-5.5,-7.3,-5.5).curveTo(-6.1,-0.9,-3.1,1.2).lineTo(5.2,5.7).curveTo(5.8,5.9,5.5,6.6).curveTo(5.3,7,5,7).lineTo(4.6,6.9).closePath();
	this.shape_3.setTransform(14.305,10.8613);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,43.1,31.2);
p.frameBounds = [rect];


(lib.Symbol63 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.1).beginStroke().moveTo(-1.7,3.4).curveTo(-3.4,2.6,-4,0.9).curveTo(-4.6,-0.7,-3.9,-2.1).curveTo(-3.2,-3.5,-1.4,-3.9).curveTo(0.3,-4.2,1.9,-3.3).curveTo(3.5,-2.3,4,-0.7).curveTo(4.6,0.7,3.9,2.1).curveTo(3.3,3.4,1.6,3.8).lineTo(0.6,3.9).curveTo(-0.6,3.9,-1.7,3.4).closePath();
	this.shape.setTransform(40.4001,24.4158);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(6.9,6.1).curveTo(4.5,5.8,1.5,4.4).curveTo(-1,3.2,-5.3,0.9).lineTo(-8.9,-1.1).curveTo(-9.4,-1.4,-9.1,-2).curveTo(-8.8,-2.6,-8.2,-2.2).lineTo(-4.7,-0.3).lineTo(2.1,3.3).curveTo(5.2,4.9,7.6,5).curveTo(5.2,0.6,2.5,-0.8).curveTo(1.7,-1.3,-2.2,-3.1).lineTo(-6,-4.9).curveTo(-6.6,-5.2,-6.3,-5.8).curveTo(-5.9,-6.4,-5.4,-6.1).lineTo(3.2,-1.9).curveTo(4.6,-1,5.7,0.2).curveTo(7.5,2.2,9.2,5.4).curveTo(9.3,5.6,9.2,5.9).curveTo(9.2,5.9,9.1,6).curveTo(9.1,6,9.1,6).curveTo(9,6,8.9,6.1).curveTo(8.9,6.1,8.8,6.1).lineTo(8.1,6.2).lineTo(6.9,6.1).closePath();
	this.shape_1.setTransform(30.6346,19.1204);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.9).beginStroke().moveTo(-2.4,4.7).curveTo(-4.1,3.9,-4.5,1.9).curveTo(-4.9,-0.1,-3.9,-2.1).curveTo(-2.9,-4.1,-0.9,-4.8).curveTo(1,-5.5,2.6,-4.5).curveTo(4.2,-3.6,4.6,-1.7).curveTo(4.9,0.3,3.9,2.1).curveTo(3,4,1.1,4.8).curveTo(0.2,5.1,-0.6,5.1).curveTo(-1.5,5.1,-2.4,4.7).closePath();
	this.shape_2.setTransform(4.6435,5.0901);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(5.3,6.4).curveTo(-2.1,3.4,-3.4,2.7).curveTo(-7.3,0.6,-9.2,-5.3).curveTo(-9.3,-5.5,-9.1,-5.9).curveTo(-9,-6.2,-8.7,-6.3).lineTo(-8.1,-6.4).curveTo(-7.3,-6.5,-6.5,-6.5).curveTo(-4,-6.3,-1.2,-4.7).curveTo(1.6,-3.2,5.5,-0.8).lineTo(8.9,1.3).curveTo(9.5,1.7,9.1,2.2).curveTo(9,2.5,8.7,2.6).curveTo(8.4,2.6,8.2,2.5).lineTo(4.7,0.4).curveTo(1.4,-1.7,-1.9,-3.4).curveTo(-5.2,-5.2,-7.6,-5).curveTo(-5.8,-0.2,-2.7,1.4).curveTo(-2,1.8,2,3.5).lineTo(5.9,5.2).curveTo(6.5,5.5,6.2,6.1).curveTo(6,6.5,5.7,6.5).lineTo(5.3,6.4).closePath();
	this.shape_3.setTransform(14.5368,10.1784);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,44.7,28.4);
p.frameBounds = [rect];


(lib.Symbol62 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.1).beginStroke().moveTo(-1.4,3.5).curveTo(-3.1,2.8,-3.9,1.3).curveTo(-4.7,-0.2,-4,-1.7).curveTo(-3.4,-3.2,-1.7,-3.7).curveTo(-0.1,-4.2,1.6,-3.4).curveTo(3.2,-2.6,4,-1.1).curveTo(4.7,0.5,4.1,1.8).curveTo(3.6,3.1,1.9,3.6).curveTo(1.2,3.9,0.5,3.9).curveTo(-0.5,3.9,-1.4,3.5).closePath();
	this.shape.setTransform(41.895,21.4027);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(7.2,5.6).curveTo(4.8,5.5,1.7,4.3).lineTo(-5.4,1.4).lineTo(-9.1,-0.2).curveTo(-9.7,-0.5,-9.4,-1.1).lineTo(-9.4,-1.1).curveTo(-9.1,-1.7,-8.5,-1.4).lineTo(-4.9,0.2).curveTo(-0.9,2,2.2,3.2).curveTo(5.2,4.4,7.9,4.4).curveTo(5.4,0.5,2.3,-0.9).lineTo(-6.4,-4.3).curveTo(-6.7,-4.3,-6.8,-4.6).curveTo(-6.9,-4.7,-6.9,-4.8).curveTo(-6.9,-4.8,-6.9,-4.9).curveTo(-6.9,-4.9,-6.9,-5).curveTo(-6.9,-5.1,-6.8,-5.1).curveTo(-6.7,-5.7,-6,-5.5).lineTo(2.8,-2).curveTo(4.1,-1.5,5.6,-0.1).curveTo(7.8,1.8,9.5,4.7).curveTo(9.6,4.9,9.5,5.2).curveTo(9.5,5.2,9.5,5.3).curveTo(9.4,5.3,9.4,5.3).curveTo(9.3,5.4,9.3,5.4).curveTo(9.2,5.4,9.2,5.5).lineTo(7.7,5.6).lineTo(7.2,5.6).closePath();
	this.shape_1.setTransform(31.8476,16.8813);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.9).beginStroke().moveTo(-2,4.9).curveTo(-3.7,4.3,-4.4,2.3).curveTo(-5,0.5,-4.1,-1.7).curveTo(-3.2,-3.8,-1.3,-4.7).curveTo(0.5,-5.6,2.2,-4.8).curveTo(3.8,-3.9,4.4,-2).curveTo(4.9,-0.1,4.1,1.8).curveTo(3.3,3.7,1.4,4.7).curveTo(0.4,5.2,-0.6,5.2).curveTo(-1.3,5.2,-2,4.9).closePath();
	this.shape_2.setTransform(4.601,5.1924);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(5.9,5.9).curveTo(-1.7,3.5,-3.1,3).curveTo(-4.6,2.3,-5.9,1.1).curveTo(-8.1,-0.9,-9.5,-4.5).lineTo(-9.5,-5.1).curveTo(-9.3,-5.4,-9,-5.6).lineTo(-8.4,-5.7).lineTo(-6.9,-5.9).curveTo(-4.4,-6,-1.4,-4.7).curveTo(1.3,-3.5,5.5,-1.3).lineTo(9.1,0.5).curveTo(9.7,0.8,9.4,1.4).lineTo(9.4,1.4).curveTo(9.1,2.1,8.5,1.7).lineTo(4.9,-0.1).curveTo(0.5,-2.2,-2,-3.3).curveTo(-5.3,-4.7,-7.8,-4.3).curveTo(-5.9,0,-2.5,1.6).lineTo(6.4,4.6).curveTo(6.6,4.7,6.8,5).curveTo(6.8,5,6.8,5.1).curveTo(6.8,5.1,6.8,5.2).curveTo(6.8,5.3,6.8,5.3).curveTo(6.8,5.4,6.8,5.5).curveTo(6.6,6,6.2,6).lineTo(5.9,5.9).closePath();
	this.shape_3.setTransform(14.7766,9.4951);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,46.3,25.3);
p.frameBounds = [rect];


(lib.Symbol61 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.1).beginStroke().moveTo(-1.1,3.6).curveTo(-2.8,3.1,-3.8,1.6).curveTo(-4.7,0.2,-4.2,-1.4).curveTo(-3.7,-2.9,-2.1,-3.5).curveTo(-0.4,-4.2,1.3,-3.5).curveTo(3,-2.8,3.9,-1.4).curveTo(4.7,0,4.2,1.4).curveTo(3.8,2.8,2.3,3.4).curveTo(1.4,3.8,0.4,3.8).curveTo(-0.3,3.8,-1.1,3.6).closePath();
	this.shape.setTransform(43.1426,18.1022);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(1.9,4.2).curveTo(-2.9,2.8,-5.4,1.9).lineTo(-9.3,0.7).curveTo(-9.8,0.4,-9.7,-0.2).curveTo(-9.4,-0.8,-8.8,-0.6).lineTo(-5,0.7).curveTo(-0.9,2.1,2.3,3.1).curveTo(5.8,4.1,8,3.7).curveTo(6.2,1.6,4.4,0.2).curveTo(3.3,-0.5,2,-1.1).lineTo(-7,-3.6).curveTo(-7.7,-3.8,-7.5,-4.4).curveTo(-7.3,-5.1,-6.7,-4.9).lineTo(2.4,-2.2).curveTo(4,-1.6,5.4,-0.5).curveTo(7.4,1,9.6,3.9).curveTo(9.6,3.9,9.7,4).curveTo(9.7,4,9.7,4.1).curveTo(9.7,4.2,9.7,4.2).curveTo(9.7,4.3,9.7,4.3).curveTo(9.7,4.4,9.7,4.4).curveTo(9.6,4.5,9.6,4.5).curveTo(9.5,4.6,9.5,4.6).curveTo(9.5,4.6,9.4,4.7).curveTo(8.7,4.9,7.5,5).lineTo(6.9,5).curveTo(4.6,5,1.9,4.2).closePath();
	this.shape_1.setTransform(32.9402,14.4412);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.9).beginStroke().moveTo(-1.6,5.1).curveTo(-3.3,4.6,-4.1,2.7).curveTo(-4.9,0.8,-4.3,-1.4).curveTo(-3.5,-3.6,-1.7,-4.6).curveTo(0.1,-5.7,1.8,-5).curveTo(3.5,-4.3,4.2,-2.4).curveTo(4.9,-0.6,4.2,1.4).curveTo(3.6,3.5,1.9,4.5).curveTo(0.7,5.3,-0.4,5.3).curveTo(-1,5.3,-1.6,5.1).closePath();
	this.shape_2.setTransform(4.5793,5.2767);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(6.7,5.3).lineTo(-2.6,3.2).curveTo(-6.9,1.8,-9.7,-3.7).curveTo(-9.8,-4,-9.7,-4.3).curveTo(-9.5,-4.7,-9.3,-4.8).lineTo(-8.7,-5).curveTo(-8,-5.3,-7.2,-5.4).curveTo(-4.5,-5.6,-1.6,-4.6).curveTo(1,-3.7,5.6,-1.9).lineTo(9.3,-0.3).curveTo(9.4,-0.3,9.5,-0.2).curveTo(9.5,-0.2,9.6,-0.2).curveTo(9.6,-0.1,9.6,-0.1).curveTo(9.7,-0,9.7,0).curveTo(9.7,0.1,9.7,0.2).curveTo(9.7,0.2,9.7,0.3).curveTo(9.7,0.4,9.7,0.4).curveTo(9.7,0.5,9.7,0.5).curveTo(9.4,1.2,8.8,0.9).lineTo(5.1,-0.5).lineTo(-2.1,-3.2).curveTo(-5.5,-4.3,-8,-3.7).curveTo(-5.5,0.7,-2.2,1.8).curveTo(-1.1,2.2,2.9,3).lineTo(7,4).curveTo(7.6,4.2,7.5,4.8).curveTo(7.3,5.4,6.9,5.4).lineTo(6.7,5.3).closePath();
	this.shape_3.setTransform(14.855,8.6556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,47.6,21.9);
p.frameBounds = [rect];


(lib.Symbol53 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-17.4,28.3).curveTo(-28.7,21,-30,9).curveTo(-31,1.2,-31.4,-2.4).curveTo(-32,-8.6,-31.4,-12.6).curveTo(-29.9,-23.1,-18.1,-28.7).curveTo(-11.2,-32.1,-6.9,-33).curveTo(5.2,-35.6,24.2,-33.1).curveTo(29.9,-32.4,31.3,-22).curveTo(32.6,-12.5,29.9,0.5).curveTo(27.2,13.8,21.9,23).curveTo(15.9,33.3,8.9,34.1).curveTo(6.3,34.3,3.8,34.3).curveTo(-8,34.3,-17.4,28.3).closePath();
	this.shape.setTransform(-36.5577,5.8222);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#D5A690").beginStroke().moveTo(-0.9,21.8).lineTo(-3.3,17.9).curveTo(-5.3,12.5,-5.2,4.6).curveTo(-5.1,-10.9,5.3,-23).lineTo(2.4,-11.1).curveTo(-0.3,4,1,20.1).curveTo(1.2,23,0.5,23).curveTo(0,23,-0.9,21.8).closePath();
	this.shape_1.setTransform(-2.2006,40.9002);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-29.3,79.6).curveTo(-41.3,69.4,-60.5,47.6).lineTo(-42.6,-26.9).curveTo(-35.9,-35.6,-12,-62.6).curveTo(-0,-76.1,10.5,-87.9).lineTo(60.5,-89).lineTo(-1.5,24.8).curveTo(-8.5,38.3,-9.1,55.4).curveTo(-9.4,65,-8.2,80.9).curveTo(-8,89,-12.9,89).curveTo(-18.2,89,-29.3,79.6).closePath();
	this.shape_2.setTransform(7.8,-0.0123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-89,136.6,178.1);
p.frameBounds = [rect];


(lib.Symbol52 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#D5A690").beginStroke().moveTo(-0.9,8.4).curveTo(-2.8,5.4,-3.8,1.3).curveTo(-4.6,-2.4,-4.5,-6.2).curveTo(-4.4,-10.4,-3.4,-13.6).lineTo(-3,-6.2).curveTo(-2.4,-1.4,-1.8,0.9).curveTo(-1,4.4,0.4,7.6).curveTo(2.1,10.8,4.5,13.6).curveTo(1.3,11.8,-0.9,8.4).closePath();
	this.shape.setTransform(-48.8765,-23.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#D5A690").beginStroke().moveTo(-11.1,1.8).curveTo(-7.1,0.8,-0.1,-0.7).lineTo(10.9,-2.9).curveTo(17.6,-4.2,22,-4.7).curveTo(17.8,-3.2,11.2,-1.4).curveTo(6.8,-0.2,0.3,1.2).curveTo(-7.3,2.8,-10.8,3.3).curveTo(-17,4.3,-22,4.7).curveTo(-17.2,3.3,-11.1,1.8).closePath();
	this.shape_1.setTransform(58.925,41.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-8.3,18.5).curveTo(-16,15,-18.9,7.1).curveTo(-21.9,-0.7,-18.5,-8.3).curveTo(-15,-16,-7.2,-18.9).curveTo(0.7,-22,8.3,-18.5).curveTo(16,-15,19,-7.2).curveTo(22,0.6,18.5,8.3).curveTo(15,16,7.2,18.9).curveTo(3.5,20.3,-0.1,20.3).curveTo(-4.3,20.3,-8.3,18.5).closePath();
	this.shape_2.setTransform(65.0946,36.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FDE4C8").beginStroke().moveTo(16.6,20.8).curveTo(17.2,20.9,14.7,19.1).curveTo(9.6,15.8,-5.9,7.2).lineTo(-41.4,-12.4).lineTo(-64,-25).lineTo(-52.7,-43.4).lineTo(-23.5,-38).curveTo(7.5,-31.9,16.9,-28.5).curveTo(27.8,-24.6,43.1,-16.4).curveTo(60.9,-7,63.7,-2.2).curveTo(66,1.7,52.9,23).curveTo(46.4,33.6,39.4,43.4).closePath();
	this.shape_3.setTransform(17.9968,27.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#E2B19F").beginStroke().moveTo(2,3.6).curveTo(-0.7,-4.5,-2.7,-11.1).lineTo(-4.3,-13.3).lineTo(-4.3,-13.4).lineTo(-4.4,-13.4).lineTo(-4.8,-14.8).curveTo(-4.8,-15.1,-5,-15.4).lineTo(-7.4,-18.1).lineTo(-5.3,-16.1).lineTo(-4.8,-15.6).curveTo(-4.5,-15.4,-4.4,-14.9).lineTo(-3.8,-13.7).lineTo(-2.1,-11.5).lineTo(-2.1,-11.4).lineTo(-2.1,-11.4).curveTo(0.9,-3.2,2.9,3.3).lineTo(5.2,10.6).curveTo(6.4,14.2,7.4,18.1).closePath();
	this.shape_4.setTransform(-42.225,-34.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#E2B19F").beginStroke().moveTo(3.5,2.3).curveTo(2.7,1.9,1.7,2).lineTo(1.6,2).lineTo(1.5,1.9).lineTo(-1.8,-0.7).curveTo(-3.9,-2.5,-4.8,-3.5).lineTo(-1.5,-1).lineTo(1.7,1.6).curveTo(2.7,1.5,3.6,2).curveTo(4.3,2.4,4.8,3.5).curveTo(4.1,2.5,3.5,2.3).closePath();
	this.shape_5.setTransform(-51.8,-50.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#E2B19F").beginStroke().moveTo(-0.4,0.3).curveTo(-3.9,-3.3,-6.1,-6.1).curveTo(-3.4,-4.1,0.3,-0.3).curveTo(4.2,3.6,6.1,6.1).curveTo(3.1,3.8,-0.4,0.3).closePath();
	this.shape_6.setTransform(-55.05,-40.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#E2B19F").beginStroke().moveTo(17.2,9.4).lineTo(16.4,8.4).lineTo(15.5,7.4).lineTo(5.7,-2.3).lineTo(5.2,-2.7).lineTo(4.7,-3).lineTo(3.4,-3.6).lineTo(-1.7,-5.5).lineTo(-4.3,-6.3).lineTo(-6.9,-7.1).curveTo(-10.6,-8.4,-16.9,-11.2).curveTo(-17.5,-10.1,-17.6,-9.2).curveTo(-17.9,-8,-17.5,-6.8).curveTo(-16.8,-4.6,-14.7,-2.9).lineTo(-7.9,1.3).lineTo(-7.8,1.3).lineTo(-7.9,1.4).curveTo(-8.4,2.6,-8,4).curveTo(-7.7,5.3,-6.8,6.5).curveTo(-7.7,5.4,-8.1,4.1).curveTo(-8.6,2.5,-8.1,1.4).lineTo(-14.9,-2.4).lineTo(-14.9,-2.5).curveTo(-15.9,-3.2,-16.7,-4.3).curveTo(-17.5,-5.2,-18,-6.6).curveTo(-18.4,-8.1,-18.2,-9.3).curveTo(-18,-10.5,-17.3,-11.7).lineTo(-17.1,-11.9).lineTo(-16.9,-11.8).curveTo(-11.2,-9.3,-6.7,-7.7).curveTo(0.1,-5.6,3.7,-4.1).lineTo(5,-3.6).lineTo(5.6,-3.2).lineTo(6.2,-2.8).lineTo(16.7,8.1).lineTo(17.4,9.3).lineTo(18.3,11.9).curveTo(17.6,10.2,17.2,9.4).closePath();
	this.shape_7.setTransform(-64.2058,-59.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#E2B19F").beginStroke().moveTo(9,7.3).lineTo(9.1,7.3).lineTo(9,7.2).lineTo(9,7.3).lineTo(0.3,-2.3).lineTo(0.4,-2.3).lineTo(-6.4,-6.2).lineTo(-6.4,-6.2).curveTo(-7.7,-6.8,-8.6,-7.6).curveTo(-9.6,-8.4,-10.4,-9.6).curveTo(-11.1,-11,-11.1,-12.2).curveTo(-11.2,-13.5,-10.6,-14.9).lineTo(-10.4,-15.2).lineTo(4.3,-9.9).lineTo(4.3,-9.8).lineTo(11.2,-3.9).lineTo(4,-9.5).lineTo(4.1,-9.5).lineTo(-10.1,-14.3).curveTo(-10.5,-13.2,-10.5,-12.3).curveTo(-10.4,-11.1,-9.8,-10).curveTo(-8.5,-8,-6.1,-6.8).lineTo(-6.1,-6.8).lineTo(-6.1,-6.7).lineTo(0.7,-2.8).lineTo(0.7,-2.8).lineTo(0.7,-2.7).lineTo(9.3,7.1).lineTo(9.4,7.2).lineTo(9.4,7.2).curveTo(9.3,11.4,8.4,15.2).curveTo(9.1,11.6,9,7.3).closePath().moveTo(9,7.3).closePath();
	this.shape_8.setTransform(-61.4519,-44.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FDE4C8").beginStroke().moveTo(0.5,6.8).curveTo(0.1,3.4,0.5,0).lineTo(0.9,-2.6).lineTo(-7.7,-12.4).lineTo(-14.5,-16.3).curveTo(-18.5,-18.5,-18.9,-21.7).lineTo(-18.5,-24.5).lineTo(6.8,-13.5).lineTo(8.6,-11.4).lineTo(18.9,19.4).curveTo(17.7,21.2,13.2,23.1).lineTo(8.8,24.5).curveTo(1.5,17.6,0.5,6.8).closePath();
	this.shape_9.setTransform(-53.2,-34.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FDE4C8").beginStroke().moveTo(9.9,-1.8).curveTo(-7.6,-10.8,-15.6,-15.5).curveTo(-20.7,-18.4,-20.6,-22.2).curveTo(-20.6,-24.1,-19.5,-25.4).lineTo(-13.8,-23.1).curveTo(-7.6,-20.6,-5.4,-20.1).curveTo(-1.9,-19.4,2.7,-17.2).lineTo(8,-11.9).lineTo(14.6,-5).curveTo(16.5,-2.8,20.6,20.3).lineTo(19.1,25.4).closePath();
	this.shape_10.setTransform(-61.701,-45.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#080808").beginStroke().moveTo(5.1,-0.8).curveTo(2.3,-2.7,-1.5,-4.4).curveTo(-6.4,-6.6,-11.9,-7.2).curveTo(-6.4,-7.4,-1,-5.7).curveTo(2.9,-4.6,6,-1.9).curveTo(8.2,-0,9.7,2.2).curveTo(11.3,4.7,11.9,7.3).curveTo(10.1,2.4,5.1,-0.8).closePath();
	this.shape_11.setTransform(-73.525,-57.5562);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.4,-70.9,170.9,141.9);
p.frameBounds = [rect];


(lib.Symbol50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-35.3,75.6).curveTo(-35.3,55,-34.3,29.6).curveTo(-32.2,-21.2,-27.1,-45.2).curveTo(-27.2,-54.3,-20.8,-66.2).curveTo(-14.1,-78.5,-8.3,-77.8).curveTo(-1.7,-77,0.1,-78.3).curveTo(1.2,-79,0.8,-81.5).curveTo(0.4,-84.2,1.4,-85.2).curveTo(3.2,-86.9,9.6,-86.7).curveTo(36.4,-85.9,35.2,-43.3).curveTo(34.9,-33,32.7,-26.9).curveTo(30.5,-21.3,24.8,-14.7).lineTo(4.9,86.7).closePath();
	this.shape.setTransform(-3.8166,1.5153,1,1,3.9539);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-25.5,30).curveTo(-35.9,21.1,-36.3,-0.5).curveTo(-36.7,-16.7,-26.7,-26.8).curveTo(-17,-36.7,-1.4,-37).curveTo(13.9,-37.3,25,-26.7).curveTo(36,-16.1,36.3,-0.7).curveTo(36.6,14.6,26,25.6).curveTo(15.4,36.7,0.1,37).lineTo(-1.6,37).curveTo(-17.4,37,-25.5,30).closePath();
	this.shape_1.setTransform(7.8732,-51.3189);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.2,-88.3,88.5,176.6);
p.frameBounds = [rect];


(lib.Symbol47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#E0B5A0").beginStroke().moveTo(2.3,3.8).lineTo(-8.6,1.5).curveTo(-10.6,1,-12.1,-0.3).curveTo(-15.1,-2.7,-15.8,-7.1).curveTo(-16,-8.4,-15.3,-9.2).curveTo(-14.9,-9.7,-14.2,-9.8).lineTo(-13.6,-9.8).lineTo(-13.1,-9.7).lineTo(-11.2,-9.1).lineTo(-9.5,-8.4).curveTo(-1.4,-5.6,5.2,-7.1).curveTo(7.4,-7.6,9,-7.5).curveTo(11.1,-7.4,12.6,-6.1).curveTo(13.9,-5,14.8,-2.9).curveTo(15.3,-1.5,15.9,0.7).curveTo(15.1,-1.7,14.5,-2.8).curveTo(13.7,-4.8,12.4,-5.7).curveTo(10.9,-6.8,9,-6.9).curveTo(7.6,-7,5.3,-6.4).curveTo(3.4,-6,1.5,-5.8).curveTo(-0,-5.7,-2.3,-5.9).curveTo(-5.9,-6.2,-9.8,-7.5).lineTo(-11.6,-8.2).lineTo(-13.3,-8.8).curveTo(-14.3,-9,-14.6,-8.6).curveTo(-15,-8.2,-14.9,-7.2).curveTo(-14.2,-3.1,-11.6,-0.9).curveTo(-10.3,0.2,-8.4,0.7).lineTo(2.8,3.5).lineTo(-0.2,9.8).closePath();
	this.shape.setTransform(43.2778,45.8375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#E0B5A0").beginStroke().moveTo(14,8.1).curveTo(11.4,8,8.5,7.3).lineTo(6.4,6.8).lineTo(-2,3.5).lineTo(-12.3,-0.9).lineTo(-17.4,-3.3).curveTo(-18.8,-3.9,-19.3,-5.3).curveTo(-19.8,-6.4,-19.4,-8.1).curveTo(-19.6,-6.5,-19.1,-5.4).curveTo(-18.4,-4.1,-17.2,-3.7).curveTo(-14.9,-2.7,-12,-1.6).lineTo(7.3,6.2).lineTo(8.6,6.6).curveTo(11.3,7.4,14.1,7.7).curveTo(17.4,8,19.6,7.4).curveTo(17.8,8.1,15.2,8.1).lineTo(14,8.1).closePath();
	this.shape_1.setTransform(20.0309,71.2932);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#E0B5A0").beginStroke().moveTo(-17.5,2.1).curveTo(-18.9,1,-19.8,-0.7).curveTo(-20.8,-2.7,-20.7,-4.4).curveTo(-20.6,-5.5,-20,-6.2).curveTo(-19.3,-6.9,-18,-6.9).lineTo(-16.2,-6.6).lineTo(-7.3,-4.9).curveTo(-3.4,-4.1,-0.3,-3.3).lineTo(13.7,0.1).curveTo(15.3,0.6,17.2,1).curveTo(19.4,1.2,20.8,0.9).curveTo(19.5,1.3,17.2,1.1).curveTo(15.5,1,13.6,0.6).lineTo(6.6,-0.9).curveTo(-2.8,-3.1,-7.5,-4).lineTo(-16.4,-5.8).curveTo(-17.5,-6.1,-18,-6.1).curveTo(-18.9,-6.2,-19.4,-5.6).curveTo(-19.9,-5.2,-20,-4.3).curveTo(-20.2,-2.8,-19.3,-0.9).curveTo(-18.5,0.6,-17.2,1.8).curveTo(-14.5,4.3,-12.1,6.9).lineTo(-17.5,2.1).closePath();
	this.shape_2.setTransform(20.7488,68.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#E0B5A0").beginStroke().moveTo(7.3,11.1).curveTo(6.1,11,3.8,10.5).lineTo(3.7,10.5).lineTo(3.7,10.4).lineTo(-12.9,2.2).curveTo(-14.1,1.4,-16.4,-1).curveTo(-18.1,-2.8,-19.2,-4.7).curveTo(-19.9,-5.9,-20.2,-6.9).curveTo(-20.4,-7.8,-20.1,-8.4).curveTo(-19.8,-9,-19.2,-9.4).curveTo(-18.1,-10.3,-16.6,-9.9).lineTo(-15.5,-9.4).lineTo(0.1,-1.8).curveTo(0.9,-1.5,2.2,-1.3).curveTo(4.3,-1.1,6.8,-1.3).curveTo(9.4,-1.4,11.3,-1.8).lineTo(11.7,-2).lineTo(12.1,-2.3).lineTo(13.8,-5.3).lineTo(15.6,-9.5).lineTo(15.6,-9.6).lineTo(15.7,-9.6).lineTo(20.3,-11.2).lineTo(15.8,-9.4).lineTo(14.1,-5.1).lineTo(13.1,-3).lineTo(12.5,-2).lineTo(12,-1.6).curveTo(11.8,-1.4,11.4,-1.3).curveTo(9.6,-0.8,6.8,-0.6).curveTo(4.2,-0.4,2.1,-0.6).curveTo(0.5,-0.8,-0.3,-1.1).lineTo(-16.9,-9).curveTo(-18,-9.2,-18.7,-8.7).curveTo(-19,-8.5,-19.3,-8).curveTo(-19.4,-7.7,-19.3,-7.1).curveTo(-19.1,-6.5,-18.4,-5.2).curveTo(-17.5,-3.6,-15.7,-1.5).curveTo(-13.8,0.6,-12.4,1.5).lineTo(3.9,10.1).curveTo(6,10.7,7.3,10.9).curveTo(9.4,11.2,10.6,11).lineTo(9,11.2).lineTo(7.3,11.1).closePath();
	this.shape_3.setTransform(30.1306,58.9306);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#E0B5A0").beginStroke().moveTo(-10.5,13).curveTo(-14.1,11.7,-17.6,9.5).lineTo(-17.7,9.5).lineTo(-17.7,9.5).lineTo(-19.3,7.3).lineTo(-19.2,7.4).lineTo(-28.4,1).lineTo(-18.9,6.9).lineTo(-18.9,6.9).lineTo(-18.9,7).lineTo(-17.2,9.1).curveTo(-13.9,10.9,-10.2,12.2).curveTo(-6,13.7,-2.7,13.8).curveTo(-0.6,13.9,1.1,13.4).curveTo(3.3,12.9,4.8,12.3).curveTo(7.5,11.3,11.8,8.7).curveTo(13.4,7.7,15.3,6.8).curveTo(17.1,6.1,18.7,5).curveTo(22.3,2.9,24.5,0.1).curveTo(27,-3.1,27.7,-6.9).curveTo(28,-9,27.9,-10.8).lineTo(27.8,-14.7).lineTo(28.3,-10.8).curveTo(28.5,-8.9,28.2,-6.8).curveTo(27.7,-2.9,25.1,0.5).curveTo(22.9,3.5,19.2,5.8).curveTo(17.7,6.7,15.6,7.6).curveTo(14.3,8.2,12.2,9.5).curveTo(4.1,14.7,-2.7,14.7).curveTo(-6.3,14.5,-10.5,13).closePath();
	this.shape_4.setTransform(36.515,75.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-3.6,25.7).lineTo(-11.3,23.3).lineTo(-30.4,7.3).lineTo(-32.2,3.1).lineTo(-31.9,-0).lineTo(-30.5,-1).lineTo(1.4,6).lineTo(-6.5,2.2).curveTo(-14.5,-1.8,-15,-2.3).curveTo(-17.5,-4.5,-19.4,-6.6).curveTo(-23.1,-10.7,-22,-12.5).curveTo(-21,-14.4,-18.6,-13.6).curveTo(-17.3,-13.2,-16.3,-12.4).lineTo(-11.3,-10.1).curveTo(-5.8,-7.6,-3.6,-6.4).curveTo(-1.3,-5.1,3.3,-5).curveTo(7.2,-4.9,8.8,-5.6).curveTo(10.5,-6.3,13.3,-13.7).lineTo(2.9,-16.1).curveTo(-2.6,-17.3,-4.1,-22.9).curveTo(-4.7,-25.1,-4,-26.2).curveTo(-3.2,-27.3,-1.4,-26.3).curveTo(5.3,-22.4,18.4,-24.5).curveTo(22.9,-25.2,25.5,-19.5).lineTo(27.4,-14.2).curveTo(28.7,-10.9,29.8,-9.2).curveTo(32.2,-5.5,32.2,1.6).curveTo(32.1,5.2,31.6,8.3).curveTo(31.3,10.6,28.3,13.7).curveTo(26.7,15.3,25.3,16.4).curveTo(14.8,22.8,8.6,25.8).curveTo(6.8,26.8,3.9,26.8).curveTo(0.8,26.8,-3.6,25.7).closePath();
	this.shape_5.setTransform(32.5255,63.1564);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#D5A690").beginStroke().moveTo(13.4,2.5).lineTo(11.3,1.5).lineTo(7,-0.1).curveTo(2.7,-1.5,-1.9,-1.4).curveTo(-6.2,-1.4,-10.7,0).lineTo(-15.5,1.7).lineTo(-14.3,-0.1).lineTo(-11.3,-1.5).curveTo(-6.9,-3.4,-1.9,-3.5).lineTo(0.5,-3.4).lineTo(2.9,-3.1).curveTo(6.2,-2.3,7.5,-1.7).curveTo(8.6,-1.3,11.7,0.5).lineTo(13.6,2).lineTo(15.5,3.5).closePath();
	this.shape_6.setTransform(83.625,8.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-28.4,24.8).curveTo(-32.4,20.3,-30.3,10.5).curveTo(-28.1,0.7,-13.8,-19.8).curveTo(-7.5,-28.8,-4.7,-33.8).lineTo(-4.5,-33.4).lineTo(24.8,-31).lineTo(26.8,-28.2).curveTo(28.9,-24.7,30,-20.7).curveTo(33.4,-7.8,24.8,5.3).curveTo(16.2,18.3,-2.2,27.3).curveTo(-11.4,31.9,-18.9,33.8).curveTo(-24.4,29.2,-28.4,24.8).closePath();
	this.shape_7.setTransform(74.2022,41.9625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,5.4,105.2,85.2);
p.frameBounds = [rect];


(lib.Symbol45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#E0B5A0").beginStroke().moveTo(5.9,13).curveTo(4.9,12.9,3,12.4).curveTo(-1.2,11.2,-7.8,8.6).lineTo(-18.4,4.3).curveTo(-29,-0.3,-39.1,-5.2).lineTo(-17.9,3.2).lineTo(-7.3,7.1).curveTo(-0.7,9.6,3.4,10.7).curveTo(4.9,11.1,6,11.3).lineTo(6.6,11.3).lineTo(7.1,11.1).lineTo(8.5,10.8).curveTo(10.6,10.4,13.9,9.3).curveTo(17.5,8.1,19.2,7.4).curveTo(20.9,6.5,21.3,6.2).lineTo(33.7,-8).lineTo(24.2,-0.3).lineTo(31.2,-6.7).lineTo(38.2,-13).lineTo(38.3,-13).lineTo(39.1,-12.3).lineTo(22.6,7.2).curveTo(22.1,7.8,21.2,8.3).lineTo(19.9,9).curveTo(17.4,10,14.5,11).curveTo(11,12.1,8.9,12.5).lineTo(6.7,13.1).lineTo(5.9,13).closePath();
	this.shape.setTransform(158.4,205.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#E0B5A0").beginStroke().moveTo(-1.8,7.8).lineTo(-1.7,7.8).lineTo(-1.5,7.6).lineTo(15.7,-7.4).lineTo(15.8,-7.8).curveTo(15.8,-8.3,15.6,-8.8).curveTo(15.3,-9.8,14.7,-10.7).lineTo(10.2,-7.9).lineTo(5.2,-4.9).lineTo(15,-12.4).lineTo(15.3,-11.9).curveTo(16.4,-10.7,16.9,-9.4).curveTo(17.3,-8.4,17.3,-7.8).curveTo(17.3,-7.2,17.1,-6.7).lineTo(16.8,-6.2).lineTo(16.5,-6).lineTo(12.3,-2.1).curveTo(8.8,1,3.8,5.3).lineTo(-0.8,9.1).lineTo(-1.4,9.3).lineTo(-6.2,10.4).curveTo(-12.9,11.8,-17.3,12.4).closePath();
	this.shape_1.setTransform(181.875,198.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#E0B5A0").beginStroke().moveTo(13.1,16.4).lineTo(30.3,5.1).lineTo(31.5,3.1).curveTo(30.9,2.1,30.2,1.6).curveTo(29.8,1.2,29.3,1.1).lineTo(29.1,1.1).lineTo(28.3,1.3).curveTo(25.9,2,23.1,3).lineTo(11.5,7.4).curveTo(10.4,7.8,9.9,7.8).curveTo(8.5,7.9,6.9,7.2).curveTo(4.6,6.1,2.1,3.8).curveTo(-1.6,0.4,-5.2,-4.7).lineTo(-5.9,-5.7).lineTo(12.2,-10.9).curveTo(13.1,-11.1,13.5,-11.4).curveTo(14.7,-12.1,15.1,-13.3).curveTo(15.5,-14.4,15.3,-15.6).lineTo(-9.4,-16.8).lineTo(-12.6,-17).curveTo(-13.8,-17.1,-15.6,-16.7).curveTo(-18,-16.3,-21.6,-14.9).curveTo(-26.4,-13.1,-33.1,-9.7).lineTo(-33.2,-9.8).curveTo(-27.5,-13,-21.9,-15.5).curveTo(-18,-17,-15.8,-17.6).curveTo(-14,-18,-12.6,-17.9).lineTo(-9.4,-17.8).lineTo(16,-17.1).lineTo(16.6,-17).lineTo(16.7,-16.5).curveTo(17.1,-14.5,16.7,-12.9).curveTo(16.1,-10.9,14.3,-10).curveTo(13.7,-9.6,12.7,-9.3).lineTo(-3,-4.7).curveTo(0.3,-0.2,3.2,2.6).curveTo(5.6,4.7,7.5,5.6).curveTo(8.9,6.2,9.8,6.1).curveTo(10.4,6.1,10.9,5.8).lineTo(22.5,1.5).lineTo(27.9,-0.2).lineTo(29.1,-0.4).lineTo(29.6,-0.4).curveTo(30.3,-0.2,31.1,0.4).curveTo(32.3,1.5,33,2.8).lineTo(33.2,3.2).lineTo(31.3,6).lineTo(31.1,6.2).lineTo(13.5,17.2).lineTo(13.3,17.3).lineTo(-5.9,18).closePath();
	this.shape_2.setTransform(165.95,181.2472);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-14.7,17.8).lineTo(-38.4,7.9).lineTo(-44.6,-3.2).lineTo(-27.7,-15.7).lineTo(-19.8,-19.8).curveTo(-5.4,-26.9,-1.8,-26.9).curveTo(3.5,-27,27.7,-25.8).lineTo(27.9,-23.1).curveTo(27.5,-20.4,25.1,-19.7).lineTo(7.7,-14.7).lineTo(13.1,-8).curveTo(19.2,-1.5,23.1,-2.7).curveTo(25.9,-3.6,32.8,-6.6).curveTo(38.3,-9,40,-9.2).curveTo(41.9,-9.4,43.4,-7.9).curveTo(44.2,-7.1,44.6,-6.3).lineTo(42.6,-3.3).curveTo(44.4,-3,44.6,-1).curveTo(44.6,-0,44.4,0.9).lineTo(26.1,22).curveTo(15,25.9,11.5,26.9).lineTo(11.2,26.9).curveTo(7.9,26.9,-14.7,17.8).closePath();
	this.shape_3.setTransform(153.7792,190.6693);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#D5A690").beginStroke().moveTo(-14.4,-2.8).curveTo(-7.6,-6,-0.1,-5.8).curveTo(3.8,-5.7,7.2,-4.8).curveTo(11.4,-3.7,14,-2.4).curveTo(20.5,0.6,25.9,5.7).curveTo(19.1,1.4,13.4,-0.8).curveTo(6.5,-3.5,-0.2,-3.7).curveTo(-3.4,-3.8,-7.1,-3.2).curveTo(-10.3,-2.6,-13.8,-1.3).curveTo(-20.4,1.2,-25.9,5.9).curveTo(-21.5,0.5,-14.4,-2.8).closePath();
	this.shape_4.setTransform(30.9,116.9966);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-69,53.1).lineTo(20.1,-62.5).lineTo(22.9,-59.2).lineTo(33.3,-49.2).lineTo(69,-33.9).curveTo(66.4,-21.4,55.6,-10.7).curveTo(50.1,-5.4,45.2,-2.6).lineTo(-15.1,62.6).closePath();
	this.shape_5.setTransform(73.975,62.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FDE4C8").beginStroke().moveTo(6.6,28.1).curveTo(-42.3,11.9,-62.3,-14.5).lineTo(-52.4,-37.1).lineTo(-36.9,-22.3).lineTo(-37.4,-23.5).lineTo(-12.9,-39).lineTo(-7.7,-35.4).curveTo(-0.7,-30.2,8,-22.1).curveTo(21.2,-9.9,37.7,0.5).curveTo(53.2,10.4,62.3,13.1).lineTo(60.1,23).curveTo(57,34,51.5,39).curveTo(31,36.2,6.6,28.1).closePath();
	this.shape_6.setTransform(67.3,161.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-15.7,21.2).curveTo(-24.5,14.7,-26.1,3.9).curveTo(-27.7,-6.9,-21.2,-15.7).curveTo(-14.7,-24.5,-3.9,-26.1).curveTo(6.9,-27.7,15.7,-21.2).curveTo(24.5,-14.7,26.1,-3.9).curveTo(27.7,6.9,21.2,15.7).curveTo(14.7,24.5,3.9,26.1).curveTo(1.8,26.4,-0.3,26.4).curveTo(-8.6,26.4,-15.7,21.2).closePath();
	this.shape_7.setTransform(26.383,131.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,199.2,218.5);
p.frameBounds = [rect];


(lib.Symbol44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.5,0.4).curveTo(-1.3,-0.6,-1.4,-1.7).curveTo(-0.6,-1.2,0.3,-0.2).curveTo(1.1,0.8,1.4,1.7).curveTo(0.4,1.4,-0.5,0.4).closePath();
	this.shape.setTransform(102.875,103.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-2.8,1.3).curveTo(-1.9,0.6,-0.1,-0.2).curveTo(0.9,-0.7,2.8,-1.3).curveTo(2.6,-0.9,1.7,-0.1).curveTo(1.1,0.4,0.3,0.7).curveTo(-0.6,1.1,-1.2,1.2).lineTo(-2.5,1.3).lineTo(-2.8,1.3).closePath();
	this.shape_1.setTransform(79.55,102.13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#EFC7B0").beginStroke().moveTo(0.6,-1.4).curveTo(2.2,-3.1,3.6,-4.4).lineTo(3.1,-2.2).lineTo(-3.5,4.4).curveTo(-2.5,2,0.6,-1.4).closePath();
	this.shape_2.setTransform(82.15,127.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,0.3).curveTo(-5,0.3,-7.5,0.7).lineTo(-3.2,-0.9).curveTo(-1,-1.8,-0.4,-1.6).lineTo(2,-0.8).lineTo(3,-1.2).curveTo(4.1,-1.4,4.7,-1.1).curveTo(6,-0.2,7.2,1.4).lineTo(7.5,1.6).curveTo(3.9,0.2,-1.6,0.3).closePath();
	this.shape_3.setTransform(93.475,141.806);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#A51727").beginStroke().moveTo(-2.1,0.9).lineTo(-9.4,1).lineTo(-8.8,0.9).lineTo(-6.7,0.2).lineTo(-2.3,-1.4).curveTo(-0.1,-2.3,0.5,-2.1).lineTo(2.9,-1.3).lineTo(3.9,-1.7).curveTo(5,-1.9,5.6,-1.6).curveTo(6.9,-0.7,8.1,0.9).lineTo(9.4,2.1).curveTo(5.8,1,-2.1,0.9).closePath();
	this.shape_4.setTransform(92.575,142.306);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFAFAF").beginStroke().moveTo(4.6,5.7).curveTo(1.9,5.5,-1.9,5.6).curveTo(-4.3,5.7,-8.3,3.3).lineTo(-11.9,0.9).lineTo(-7.6,-2.3).curveTo(-2.6,-5.7,0.1,-5.9).curveTo(2.5,-6.1,3.2,-4.9).curveTo(3.6,-4.4,4,-4.8).curveTo(5.4,-5.9,6.9,-5.2).curveTo(8.7,-4.4,10.1,-2.6).curveTo(11.8,-0.4,11.9,2.2).curveTo(11.4,3.1,10.8,4).curveTo(9.5,5.8,8.1,5.9).lineTo(7.8,5.9).lineTo(4.6,5.7).closePath();
	this.shape_5.setTransform(91.95,142.3649);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#080808").beginStroke().moveTo(4.7,0.2).curveTo(2.4,-1,0.2,-1.2).curveTo(-2.3,-1.5,-4.5,-0.7).lineTo(-6.8,0.3).lineTo(-9,1.5).curveTo(-8.1,0.4,-7.2,-0.4).curveTo(-5.4,-1.7,-5,-1.8).curveTo(-4.2,-2.3,-2.4,-2.7).curveTo(-0.6,-2.9,0.3,-2.8).curveTo(3.1,-2.4,5.3,-0.9).curveTo(7.7,0.8,9,2.8).curveTo(6.9,1.2,4.7,0.2).closePath();
	this.shape_6.setTransform(112.025,99.6333);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#080808").beginStroke().moveTo(-1,2.4).curveTo(-2.6,2,-3.5,0.6).curveTo(-4.3,-0.8,-3.9,-2.3).lineTo(-3.9,-2.5).curveTo(-0.4,-2.7,4,-0.6).lineTo(4,-0.4).curveTo(3.6,0.9,2.6,1.7).curveTo(1.5,2.4,0.2,2.5).closePath();
	this.shape_7.setTransform(112.711,100.4617);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.3).moveTo(-9.2,0.7).curveTo(-5.3,-4.2,2,-1.6).curveTo(5.7,-0.3,8.6,1.9).curveTo(6.5,2.4,3.2,2.5).curveTo(-3.3,2.7,-9.2,0.7).closePath();
	this.shape_8.setTransform(112.2905,100.4796);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.9,0.7).curveTo(-5,-4.2,2.3,-1.6).curveTo(6,-0.3,8.9,1.9).curveTo(6.8,2.4,3.5,2.5).lineTo(2.6,2.5).curveTo(-3.4,2.5,-8.9,0.7).closePath();
	this.shape_9.setTransform(111.975,100.4796);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#080808").beginStroke().moveTo(5.6,-0.5).curveTo(3.2,-1.4,0.5,-1.1).curveTo(-1.7,-0.9,-4.7,0).curveTo(-7.3,0.8,-9.9,2).curveTo(-7.9,0.1,-5.2,-1.1).curveTo(-2.2,-2.4,0.4,-2.6).curveTo(3.7,-3,6.1,-1.6).curveTo(8.7,-0.2,9.9,2.7).curveTo(7.9,0.3,5.6,-0.5).closePath();
	this.shape_10.setTransform(72.025,97.414);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#080808").beginStroke().moveTo(-1.7,2.3).curveTo(-2.9,1.8,-3.6,0.6).curveTo(-4.2,-0.6,-4,-1.9).curveTo(0.7,-3,3.9,-1.9).curveTo(4.2,-1.1,3.9,-0.2).curveTo(3.4,1.8,1.5,2.5).curveTo(-0.2,2.5,-1.7,2.3).closePath();
	this.shape_11.setTransform(73.664,98.5436);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.3).moveTo(10.4,1.6).curveTo(7.4,-3.8,-1.2,-2).curveTo(-3.9,-1.5,-6.8,-0.3).lineTo(-9.2,0.8).lineTo(-2.1,2.1).curveTo(5.9,3.1,10.4,1.6).closePath();
	this.shape_12.setTransform(71.4985,98.5435);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.7,2.1).lineTo(-9.8,0.8).lineTo(-7.4,-0.3).curveTo(-4.5,-1.5,-1.8,-2).curveTo(6.8,-3.8,9.8,1.6).curveTo(7.1,2.5,3,2.5).curveTo(0.4,2.5,-2.7,2.1).closePath();
	this.shape_13.setTransform(72.075,98.5435);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#EFC7B0").beginStroke().moveTo(2.1,10.2).curveTo(-0.8,8.5,-2.5,4.2).curveTo(-3.2,2.2,-3.9,-2.6).curveTo(-4.8,-8.6,-4,-10.2).curveTo(-3.5,-11,-2.6,-10.7).curveTo(-2.1,-10.4,-1.5,-9.5).curveTo(0.2,-7,1,-5.6).curveTo(2.3,-3,2.4,-1.2).lineTo(1.9,2).curveTo(1.7,3.6,2.8,5.2).curveTo(4,6.7,4.4,9).curveTo(4.6,10.8,3.6,10.8).curveTo(3.1,10.8,2.1,10.2).closePath();
	this.shape_14.setTransform(24.9448,107.8044);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-1.2,2.8).lineTo(-4.1,1.5).curveTo(-6.2,1,-7.1,0.5).curveTo(-8.7,-0.2,-8.4,-1.8).curveTo(-8.1,-2.9,-7.4,-3.7).curveTo(-7.8,-3,-7.6,-2.1).curveTo(-7.3,-0.9,-5.7,-0.5).lineTo(-2.9,-0.1).curveTo(-2.2,0.1,-0.5,0.9).curveTo(1.1,1.6,1.9,1.7).curveTo(2.5,1.8,4,1.4).curveTo(5.4,1,6.4,0.4).curveTo(7.8,-0.4,7.6,-2.4).lineTo(8.2,-1.1).curveTo(8.7,0.4,7.8,1.4).curveTo(7.5,1.7,7,1.9).lineTo(6,2.3).lineTo(4.2,3.3).curveTo(3.4,3.7,1.8,3.7).curveTo(0.7,3.7,-1.2,2.8).closePath();
	this.shape_15.setTransform(93.3007,126.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#080808").beginStroke().moveTo(4.3,3.4).curveTo(1.7,3,-0.8,2.1).curveTo(-3,1.4,-5.5,-0.2).curveTo(-7.8,-1.6,-9.5,-3.6).lineTo(-4.8,-1.6).lineTo(-0.1,0.2).lineTo(9.5,3.5).curveTo(8.5,3.6,7.4,3.6).curveTo(6,3.6,4.3,3.4).closePath();
	this.shape_16.setTransform(113.325,89.4766);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#080808").beginStroke().moveTo(-12.6,3.2).curveTo(-9.6,2.4,-6.2,1.7).lineTo(6.4,-1.4).curveTo(9.7,-2.4,12.6,-3.4).curveTo(10.5,-1.5,6.9,0.1).curveTo(4.3,1.2,0.6,2.2).curveTo(-2.7,2.9,-5.9,3.2).curveTo(-7.8,3.4,-9.4,3.4).curveTo(-11.1,3.4,-12.6,3.2).closePath();
	this.shape_17.setTransform(71.575,87.6125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#080808").beginStroke().moveTo(0,2.7).lineTo(-0.5,-2.7).lineTo(-1,-10.2).lineTo(-0,-2.7).curveTo(0.3,-0.4,0.5,2.7).lineTo(1,10.2).closePath();
	this.shape_18.setTransform(126.125,68);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#080808").beginStroke().moveTo(-0,1.4).lineTo(0.3,-1.4).curveTo(0.5,-3.5,0.5,-5.3).curveTo(0.6,-3.3,0.5,-1.4).curveTo(0.5,-0.2,0.3,1.4).lineTo(-0.6,5.3).curveTo(-0.2,3.2,-0,1.4).closePath();
	this.shape_19.setTransform(122.425,56);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#080808").beginStroke().moveTo(-1,2.9).curveTo(1.3,0.8,2.9,-1.1).curveTo(5.5,-4.2,7.4,-7.6).curveTo(5.6,-3.8,3.3,-0.8).curveTo(1.6,1.4,-0.7,3.3).curveTo(-3.6,5.7,-7.4,7.6).curveTo(-3.8,5.5,-1,2.9).closePath();
	this.shape_20.setTransform(117.1,54.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#080808").beginStroke().moveTo(-2.2,3.4).curveTo(1.9,1.6,4.4,0.1).curveTo(9.3,-2.7,12,-6.5).curveTo(9.5,-2.5,4.7,0.8).curveTo(1.8,2.6,-2,3.9).curveTo(-5.6,5.2,-12,6.5).curveTo(-6.1,5,-2.2,3.4).closePath();
	this.shape_21.setTransform(96.525,57);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#080808").beginStroke().moveTo(-16,7.5).curveTo(-21.6,7.3,-26.5,6.7).curveTo(-21.9,6.7,-16.1,6.2).curveTo(-10.8,5.9,-5.7,5).lineTo(1.6,3.9).curveTo(5.8,3.1,8.6,2.4).curveTo(9.7,2.1,11,1.6).lineTo(13.5,0.7).curveTo(15.7,-0.2,18.1,-1.5).curveTo(20.4,-2.7,22.2,-4.6).curveTo(24,-6.3,26.4,-7.6).curveTo(24.2,-6,22.6,-4.1).curveTo(20.9,-2,18.8,-0.5).curveTo(16.8,0.9,14.3,2.3).lineTo(11.9,3.6).lineTo(9.4,4.7).curveTo(3.4,7.1,-5.4,7.5).lineTo(-10.1,7.6).lineTo(-16,7.5).closePath();
	this.shape_22.setTransform(76.5,54.6071);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#080808").beginStroke().moveTo(-0.8,2.4).curveTo(-1.4,0.3,-1.4,-2.1).curveTo(-1.4,-5.2,-0.8,-8.4).curveTo(-1,-5.5,-0.6,-2.1).lineTo(0,2.3).curveTo(0.4,5,1.4,8.4).curveTo(-0,5.3,-0.8,2.4).closePath();
	this.shape_23.setTransform(36.425,100.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#080808").beginStroke().moveTo(-1,11.5).curveTo(-0.1,7.9,0.3,4.9).curveTo(0.9,0.6,1.4,-4.5).curveTo(1.7,-8,1.6,-11.1).curveTo(1.6,-14.3,1.1,-17.8).curveTo(1.8,-15.1,2.5,-11.2).curveTo(3.1,-7.2,3.1,-4.4).curveTo(3.3,0.7,2,5.3).curveTo(1.1,8.4,-0.2,11.7).curveTo(-1.4,14.6,-3.1,17.8).curveTo(-1.9,14.6,-1,11.5).closePath();
	this.shape_24.setTransform(38.7828,77.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#080808").beginStroke().moveTo(0.4,2.8).lineTo(-0.1,-3).curveTo(-0.5,-7.2,-1.5,-11.1).curveTo(0.1,-7,0.9,-3.1).curveTo(1.6,-0.1,1.5,2.8).curveTo(1.3,7.3,0.5,11.1).curveTo(0.8,7.2,0.4,2.8).closePath();
	this.shape_25.setTransform(41.7132,69.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-9.2,2.3).lineTo(-7.1,-0.9).curveTo(-4.1,-4,0.4,-3.6).curveTo(4.8,-3.1,7.4,0.3).curveTo(8.7,2,9.2,3.6).closePath();
	this.shape_26.setTransform(112.025,98.8715);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-10,3).lineTo(-7.1,-0.4).curveTo(-3.3,-3.7,1.3,-3.6).curveTo(5.7,-3.5,8.3,0.1).curveTo(9.6,1.9,10,3.6).closePath();
	this.shape_27.setTransform(72,96.4985);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FDE4C8").beginStroke().moveTo(18.3,60.2).curveTo(11,59.9,4.2,56.5).curveTo(-6.4,51.2,-16.5,44.3).curveTo(-30,35.1,-33.1,28.9).curveTo(-36,22.9,-37.3,17.6).lineTo(-37.9,13.5).curveTo(-40.9,13.4,-44.3,11.7).curveTo(-51.1,8.1,-53.4,-0.4).curveTo(-55.9,-10.2,-54.9,-15.5).curveTo(-53.9,-20.3,-50.1,-20.6).curveTo(-46.8,-20.8,-44.8,-18.4).curveTo(-43.3,-16.7,-41.9,-12.8).curveTo(-39.8,-7.3,-39.6,-4.6).curveTo(-39.5,-4,-39.2,-3.6).lineTo(-38.5,-2.9).lineTo(-38.8,-4.9).lineTo(-38.2,-3.8).curveTo(-37.9,-3.2,-37.4,-2.7).lineTo(-37.7,-4.9).lineTo(-36.8,-3.5).curveTo(-36.3,-2.9,-34.4,-1.9).curveTo(-35,-3,-35,-4.7).curveTo(-35.3,-18,-33.5,-21.8).curveTo(-30.6,-28,-29.9,-38.4).curveTo(-29.4,-46.4,-30.2,-51.3).lineTo(-21.4,-50.7).curveTo(-11.2,-50.2,-3.7,-50.4).curveTo(4.4,-50.7,13.9,-52.5).curveTo(20.6,-53.8,20.4,-53.6).curveTo(18.4,-51.9,14.2,-49.8).curveTo(12.4,-48.9,10.2,-48.1).lineTo(8.3,-47.5).curveTo(15.8,-47.8,24.8,-51.1).curveTo(29.2,-52.7,32.2,-54.2).lineTo(24.9,-46.8).curveTo(27.8,-47.3,35,-51.7).curveTo(38.7,-53.8,41.7,-55.9).lineTo(34.5,-47.6).lineTo(37.4,-48.9).curveTo(41,-50.7,44.2,-53).curveTo(47.4,-55.4,49.8,-58).curveTo(51,-59.4,51.5,-60.2).curveTo(51.3,-50.9,51.6,-54.8).lineTo(51.2,-47.4).lineTo(53.5,-53.5).lineTo(54,-49.8).lineTo(54.6,-43.2).curveTo(55.2,-34.1,55.2,-30.9).curveTo(55.2,-25.6,54.3,-19.1).curveTo(53.8,-15.6,53.6,-6.1).curveTo(53.5,4.5,53.2,7.4).lineTo(52.8,15.1).curveTo(51.1,24.9,45.4,35.6).curveTo(40.4,44.9,36.2,50.3).curveTo(33.4,53.9,29.8,57.1).curveTo(26.2,60.2,19.5,60.2).lineTo(18.3,60.2).closePath();
	this.shape_28.setTransform(71.1219,110.5372);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#080808").beginStroke().moveTo(0.4,4.1).curveTo(1.1,0.9,1.6,-3.7).curveTo(2.3,-9.4,2,-14.8).curveTo(2.6,-9,2.3,-3.6).curveTo(2.1,0.4,1.1,4.3).curveTo(-0.1,9.7,-2.4,14.8).curveTo(-0.5,9.5,0.4,4.1).closePath();
	this.shape_29.setTransform(133.9224,63.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#080808").beginStroke().moveTo(-9.4,-2.3).curveTo(-6.4,-4.7,-3.4,-6.2).curveTo(-0.5,-7.7,3.2,-9).curveTo(13.3,-12.5,22.7,-12.5).curveTo(13.5,-12,3.6,-7.8).lineTo(-2.8,-4.8).curveTo(-5.3,-3.6,-8.7,-1.2).curveTo(-16.6,4.4,-22.7,12.5).curveTo(-17.1,3.9,-9.4,-2.3).closePath();
	this.shape_30.setTransform(28.55,17.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#080808").beginStroke().moveTo(-14.7,-0.4).curveTo(-10.2,-1.5,-6.3,-2.1).curveTo(-0.3,-2.9,6.1,-2.3).curveTo(9,-2,14.5,-1).curveTo(18.6,-0.2,22.9,1.1).curveTo(19,0.2,14.5,-0.5).curveTo(9.9,-1,6,-1.2).curveTo(-0.4,-1.3,-6.2,-1).curveTo(-10.3,-0.7,-14.6,0.2).curveTo(-18.7,1,-22.9,2.5).curveTo(-19.1,0.9,-14.7,-0.4).closePath();
	this.shape_31.setTransform(56.9,4.3214);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#080808").beginStroke().moveTo(16.3,1.7).curveTo(11.2,0.1,7.2,-0.9).curveTo(1.3,-2.3,-6.1,-3.6).curveTo(-9.9,-4.2,-15.6,-4.6).curveTo(-19.8,-4.9,-25.2,-4.7).curveTo(-19.8,-5.3,-15.6,-5.2).curveTo(-10.8,-5.2,-6,-4.8).curveTo(0.9,-4.2,7.5,-2.2).curveTo(12,-0.8,16.5,1.1).curveTo(20.7,2.8,25.2,5.3).curveTo(20.6,3.2,16.3,1.7).closePath();
	this.shape_32.setTransform(76.925,5.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#080808").beginStroke().moveTo(14.7,4).curveTo(11.7,1,7.9,-1.5).curveTo(3.1,-4.6,-2.9,-7.2).curveTo(-6.6,-8.8,-11.2,-9.8).curveTo(-15.5,-10.6,-20,-10.7).curveTo(-14.9,-11.2,-11.1,-10.9).curveTo(-6,-10.5,-2.2,-9.3).curveTo(4.3,-7.6,9.3,-3.3).curveTo(12.9,-0.3,15.6,3.3).curveTo(18.3,7,20,11).curveTo(17.8,7.3,14.7,4).closePath();
	this.shape_33.setTransform(102.675,14.3688);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#080808").beginStroke().moveTo(6.2,1.6).curveTo(4.8,0.5,3.2,-0.5).curveTo(1.2,-1.7,-1.5,-2.8).curveTo(-5.1,-4.2,-8.8,-4.3).curveTo(-5.1,-4.7,-1.3,-3.7).curveTo(1.5,-3,3.8,-1.3).curveTo(5.2,-0.3,6.6,1.3).curveTo(7.9,2.7,8.8,4.4).curveTo(7.5,2.7,6.2,1.6).closePath();
	this.shape_34.setTransform(127.95,31.9552);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#080808").beginStroke().moveTo(7.7,5.7).curveTo(6.8,3.3,5.1,1).curveTo(2.9,-1.9,0,-4.7).curveTo(-4.1,-8.7,-8.8,-11.1).curveTo(-3.5,-9.2,1,-5.8).curveTo(4.3,-3.3,6.3,0.3).curveTo(7.8,2.9,8.4,5.5).curveTo(9.1,8.5,8.6,11.1).curveTo(8.7,8.5,7.7,5.7).closePath();
	this.shape_35.setTransform(129.017,37.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#080808").beginStroke().moveTo(4.6,7.6).curveTo(3.9,4.5,3.2,2.6).curveTo(2.3,-0.2,0.5,-4.2).curveTo(-1.8,-9,-5.3,-12.9).curveTo(-1.1,-9.4,1.7,-4.9).curveTo(3.8,-1.5,4.6,2.2).curveTo(5,4.5,5.3,7.6).curveTo(5.4,10.4,5.1,12.9).curveTo(5,10.1,4.6,7.6).closePath();
	this.shape_36.setTransform(119.5625,23.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#080808").beginStroke().moveTo(-4.1,9.6).curveTo(-7.7,2.1,-8.4,-5.6).curveTo(-9.5,-16.8,-6.2,-27.3).curveTo(-8.4,-16.7,-6.3,-5.9).curveTo(-4.8,1.6,-2.1,8.8).curveTo(1.9,19.5,8.7,27.3).curveTo(1.1,20,-4.1,9.6).closePath();
	this.shape_37.setTransform(12.0218,85.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#080808").beginStroke().moveTo(-6.5,5.9).curveTo(-5.7,-1.7,-3.2,-8.6).curveTo(-1,-14.6,1.1,-18.2).curveTo(3.9,-23.3,7,-26.6).curveTo(4.1,-23.2,1.7,-17.9).curveTo(-0.2,-14.1,-1.9,-8.2).curveTo(-3.8,-1.3,-5.2,6.1).curveTo(-7.2,18.1,-5.6,26.6).curveTo(-7.8,18.1,-6.5,5.9).closePath();
	this.shape_38.setTransform(7.0952,50.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#080808").beginStroke().moveTo(-4.9,1.9).curveTo(-3.5,-2,-0.9,-5).curveTo(1.6,-8.1,7,-12.7).curveTo(2.2,-7.2,0.2,-4.2).curveTo(-2.1,-0.5,-3.6,2.4).curveTo(-6,7.1,-7,12.7).curveTo(-6.7,7,-4.9,1.9).closePath();
	this.shape_39.setTransform(6.95,37.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-1.3,0.9).lineTo(-2.3,-4.7).curveTo(-2.3,-4.8,3.6,-11.3).lineTo(3.8,-11.5).lineTo(0.7,-5.4).lineTo(0.6,0.1).curveTo(-0.2,6.5,-3.8,11.5).curveTo(-0.8,7.2,-1.3,0.9).closePath();
	this.shape_40.setTransform(82.475,186.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-17.5,14.7).curveTo(-24.3,4.1,-28.2,-5.7).curveTo(-30.2,-10.9,-31.9,-17.4).curveTo(-28.8,-25.5,-26.9,-33.5).lineTo(-3.9,-24.2).lineTo(18.5,-31.5).lineTo(31.9,1.4).lineTo(18.6,27.3).curveTo(14.9,32.4,8.5,33.3).curveTo(7.4,33.5,6.3,33.5).curveTo(-5.5,33.5,-17.5,14.7).closePath();
	this.shape_41.setTransform(64.5,153.6766);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-16.2,57.1).curveTo(-25.4,52.8,-32.1,44.5).curveTo(-38.8,36.3,-40.3,27.7).curveTo(-41.9,18.6,-36.8,12.6).curveTo(-22.6,-4.1,-16.8,-35.5).curveTo(12.8,-59.6,13.1,-60.6).curveTo(13.3,-61.2,27,-27.4).lineTo(40.7,6.4).lineTo(27.5,32.3).lineTo(27.6,36).curveTo(27.4,40.4,25.8,44.3).curveTo(20.6,57,3.6,60.1).curveTo(0.9,60.6,-1.8,60.6).curveTo(-8.9,60.6,-16.2,57.1).closePath();
	this.shape_42.setTransform(55.634,148.6902);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#080808").beginStroke().moveTo(1.7,3.9).curveTo(0.2,-0.3,-1,-4.2).curveTo(-2.6,-9.7,-5.1,-15.5).curveTo(-2,-10.2,0.5,-4.8).curveTo(2.3,-0.9,3.2,3.5).curveTo(4.6,9.6,5.1,15.5).curveTo(3.7,9.6,1.7,3.9).closePath();
	this.shape_43.setTransform(24.35,123.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#080808").beginStroke().moveTo(-22.8,76.7).curveTo(-30.6,68.5,-31.3,64.2).curveTo(-31.6,62,-35.9,53.8).lineTo(-45.6,35.7).curveTo(-60.4,7.8,-64.7,-7.3).curveTo(-69.3,-23.6,-65.5,-39.6).curveTo(-63.6,-47.6,-60.8,-52.3).lineTo(-67.8,-44.8).curveTo(-58.2,-67.3,-35,-76.6).curveTo(-23.4,-81.2,-13.7,-81.4).lineTo(-27.1,-81.4).lineTo(-24,-82.3).curveTo(-19.9,-83.3,-14.8,-83.7).curveTo(1.4,-85,21.4,-80.3).curveTo(41.4,-75.6,50.2,-66.1).curveTo(54.7,-61.4,55.1,-57.6).lineTo(56.5,-56.8).curveTo(58.2,-55.7,59.9,-54.1).curveTo(65.1,-49.1,67.2,-41.1).curveTo(69.3,-33,63.2,-11.3).curveTo(60.2,-0.4,56.7,8.9).lineTo(-15.2,83.9).curveTo(-18.9,80.7,-22.8,76.7).closePath();
	this.shape_44.setTransform(69.0052,85.6092);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,137.9,209.3);
p.frameBounds = [rect];


(lib.Symbol41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.5,0.5).curveTo(-1.3,-0.4,-1.5,-1.4).curveTo(-0.8,-1.2,0.3,-0.3).curveTo(1.1,0.5,1.5,1.4).curveTo(0.5,1.4,-0.5,0.5).closePath();
	this.shape.setTransform(104.85,94.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.1,-0.2).lineTo(2.5,-1.6).curveTo(2.3,-1.1,1.7,-0.3).lineTo(0.4,0.6).curveTo(-1.1,1.5,-2.5,1.6).curveTo(-1.8,0.9,-0.1,-0.2).closePath();
	this.shape_1.setTransform(82.35,96.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#EFC7B0").beginStroke().moveTo(0.4,-1.4).curveTo(1.7,-3.2,2.9,-4.6).lineTo(2.7,-2.4).lineTo(-2.9,4.6).curveTo(-2.2,2.2,0.4,-1.4).closePath();
	this.shape_2.setTransform(87.775,120.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,-0.4).curveTo(-1.3,-1.5,-0.7,-1.4).lineTo(1.7,-0.9).lineTo(2.6,-1.4).curveTo(3.7,-1.8,4.2,-1.5).curveTo(5.5,-0.8,7,0.6).lineTo(7.2,0.8).curveTo(3.6,-0.1,-1.7,0.6).curveTo(-4.8,0.9,-7.2,1.6).lineTo(-3.3,-0.4).closePath();
	this.shape_3.setTransform(100.4,132.7982);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#A51727").beginStroke().moveTo(-8.5,2).lineTo(-6.5,1.1).lineTo(-2.6,-1).curveTo(-0.5,-2,0,-1.9).lineTo(2.5,-1.5).lineTo(3.4,-1.9).curveTo(4.4,-2.3,4.9,-2).curveTo(6.3,-1.3,7.8,0).lineTo(9,1.1).curveTo(5.5,0.5,-2.1,1.3).lineTo(-9,2.2).closePath();
	this.shape_4.setTransform(99.65,133.3357);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFAFAF").beginStroke().moveTo(-7.7,4.3).lineTo(-11.4,2.4).lineTo(-7.6,-1.3).curveTo(-3.4,-5,-0.8,-5.5).curveTo(1.5,-6,2.4,-4.9).curveTo(2.8,-4.5,3.2,-4.9).curveTo(4.3,-6.1,5.9,-5.7).curveTo(7.7,-5.1,9.2,-3.6).curveTo(11,-1.7,11.4,0.8).curveTo(11.1,1.7,10.6,2.7).curveTo(9.6,4.6,8.3,4.8).curveTo(7.4,4.9,4.9,5).curveTo(2.3,5.1,-1.3,5.7).lineTo(-2.2,5.8).curveTo(-4.4,5.8,-7.7,4.3).closePath();
	this.shape_5.setTransform(99.05,133.4742);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#080808").beginStroke().moveTo(-7.2,0.6).curveTo(-5.6,-0.8,-5.2,-1.1).curveTo(-4.7,-1.5,-2.9,-2.2).curveTo(-1.2,-2.6,-0.3,-2.6).curveTo(2.3,-2.6,4.8,-1.4).curveTo(7.3,0,8.7,1.8).curveTo(6.5,0.5,4.3,-0.3).curveTo(1.9,-1.1,-0.3,-1.1).curveTo(-2.5,-1.1,-4.7,-0.1).curveTo(-5.2,0.1,-6.7,1.1).lineTo(-8.6,2.6).lineTo(-7.2,0.6).closePath();
	this.shape_6.setTransform(113.45,90.2222);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#080808").beginStroke().moveTo(-3.1,0.8).curveTo(-4.1,-0.4,-3.9,-1.9).lineTo(-3.9,-2).curveTo(-0.5,-2.7,3.9,-1.2).lineTo(3.9,-0.9).curveTo(3.7,0.3,2.8,1.2).curveTo(1.9,2,0.6,2.2).lineTo(-0.5,2.3).curveTo(-2.1,2.1,-3.1,0.8).closePath();
	this.shape_7.setTransform(113.8326,91.1911);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.2).moveTo(-9,1.6).curveTo(-5.8,-3.5,1.5,-1.9).curveTo(5.2,-1.1,8.3,0.7).curveTo(6.3,1.4,3.2,1.9).curveTo(-3.1,2.8,-9,1.6).closePath();
	this.shape_8.setTransform(113.7529,91.2018);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.6,1.6).curveTo(-5.5,-3.5,1.9,-1.9).curveTo(5.6,-1.1,8.6,0.7).curveTo(6.7,1.4,3.5,1.9).curveTo(0.8,2.3,-1.8,2.3).curveTo(-5.3,2.3,-8.6,1.6).closePath();
	this.shape_9.setTransform(113.425,91.2018);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#080808").beginStroke().moveTo(-5.3,-0.6).curveTo(-2.8,-2.1,-0.2,-2.7).curveTo(2.9,-3.4,5.4,-2.4).curveTo(8.2,-1.3,9.5,1.3).curveTo(7.3,-0.7,5.1,-1.3).curveTo(2.8,-1.8,0.1,-1.3).curveTo(-1.8,-0.9,-4.8,0.4).curveTo(-6.6,1.3,-9.5,2.9).curveTo(-7.9,1,-5.3,-0.6).closePath();
	this.shape_10.setTransform(74.875,92.9059);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#080808").beginStroke().moveTo(-3.2,1.1).curveTo(-4,-0,-3.9,-1.3).curveTo(0.4,-2.9,3.7,-2.3).curveTo(4,-1.4,3.9,-0.6).curveTo(3.6,1.3,1.8,2.2).lineTo(-1.2,2.5).curveTo(-2.5,2.1,-3.2,1.1).closePath();
	this.shape_11.setTransform(76.1709,93.6432);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.2).moveTo(10,0.5).curveTo(6.5,-4.2,-1.6,-1.5).curveTo(-4.1,-0.7,-6.8,0.8).lineTo(-8.9,2.1).lineTo(-1.9,2.5).curveTo(5.9,2.5,10,0.5).closePath();
	this.shape_12.setTransform(74.3552,93.6858);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.5,2.1).lineTo(-7.3,0.8).curveTo(-4.6,-0.7,-2.1,-1.5).curveTo(5.9,-4.2,9.5,0.5).curveTo(5.3,2.5,-2.5,2.5).closePath();
	this.shape_13.setTransform(74.925,93.6857);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#EFC7B0").beginStroke().moveTo(3.1,9.6).curveTo(0.1,8.3,-2,4.3).curveTo(-2.9,2.7,-4.2,-2).curveTo(-5.7,-7.6,-5.1,-9.3).curveTo(-4.8,-10.1,-3.9,-9.8).curveTo(-3.3,-9.7,-2.7,-8.9).curveTo(-0.6,-6.5,0.2,-5.4).curveTo(1.8,-3.1,2,-1.4).lineTo(2,1.7).curveTo(1.9,3.4,3.2,4.7).curveTo(4.5,6,5.1,8.2).curveTo(5.6,9.9,4.5,9.9).curveTo(4,9.9,3.1,9.6).closePath();
	this.shape_14.setTransform(30.776,108.1396);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.7,2.8).lineTo(-3.6,1.8).curveTo(-5.8,1.6,-6.7,1.2).curveTo(-8.2,0.7,-8.1,-0.9).curveTo(-8.1,-1.8,-7.4,-2.8).curveTo(-7.7,-2,-7.4,-1.2).curveTo(-6.9,-0.1,-5.4,0.1).lineTo(-2.7,0.2).curveTo(-2,0.2,-0.3,0.8).curveTo(1.3,1.3,2.2,1.3).curveTo(2.8,1.3,4.1,0.8).curveTo(5.5,0.2,6.3,-0.4).curveTo(7.5,-1.4,7.2,-3.3).lineTo(7.9,-2.1).curveTo(8.5,-0.7,7.7,0.3).curveTo(7.5,0.6,7.1,0.9).lineTo(6.2,1.4).lineTo(4.5,2.6).curveTo(3.8,3.1,2.3,3.3).lineTo(1.9,3.3).curveTo(0.9,3.3,-0.7,2.8).closePath();
	this.shape_15.setTransform(98.2883,118.4821);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#080808").beginStroke().moveTo(4.5,2.5).curveTo(2,2.4,-0.5,1.9).curveTo(-3,1.3,-5.3,0.3).curveTo(-7.5,-0.7,-9.6,-2.5).curveTo(-7.9,-2.1,-4.7,-1.2).lineTo(9.6,2.1).curveTo(7.7,2.5,5.4,2.5).lineTo(4.5,2.5).closePath();
	this.shape_16.setTransform(113.25,80.6327);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#080808").beginStroke().moveTo(-5.8,2.4).lineTo(5.9,-2).curveTo(9.1,-3.4,11.6,-4.6).curveTo(9.8,-2.5,6.7,-0.6).curveTo(4.4,0.7,0.8,2.1).curveTo(-2.2,3.2,-5.3,3.9).curveTo(-9.3,4.6,-11.7,4.6).lineTo(-5.8,2.4).closePath();
	this.shape_17.setTransform(73.05,83.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#080808").beginStroke().moveTo(0.3,2.6).curveTo(-0.3,0.4,-0.8,-2.5).lineTo(-2.1,-9.7).lineTo(-0.3,-2.6).lineTo(0.8,2.5).lineTo(2.1,9.7).closePath();
	this.shape_18.setTransform(123.05,58.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#080808").beginStroke().moveTo(-0,1.3).lineTo(-0.1,-1.4).lineTo(-0.3,-5.1).lineTo(0.2,-1.4).lineTo(0.2,1.3).curveTo(0.1,3.4,-0.1,5.1).curveTo(0,3,-0,1.3).closePath();
	this.shape_19.setTransform(118.3083,47.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#080808").beginStroke().moveTo(-0.7,3).curveTo(1.1,1,2.6,-1.3).curveTo(4.9,-4.5,6.2,-8.2).curveTo(5.1,-4.5,3.1,-1.1).curveTo(1.7,1.3,-0.3,3.3).curveTo(-2.9,6,-6.2,8.1).curveTo(-3.2,5.9,-0.7,3).closePath();
	this.shape_20.setTransform(112.9,46.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#080808").beginStroke().moveTo(-1.7,3.5).curveTo(1.4,1.7,4.2,-0.3).curveTo(8.5,-3.6,10.7,-7.7).curveTo(8.8,-3.4,4.6,0.1).curveTo(1.8,2.5,-1.5,4).curveTo(-5.3,5.8,-10.7,7.6).curveTo(-4.9,5.3,-1.7,3.5).closePath();
	this.shape_21.setTransform(93.475,51.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#080808").beginStroke().moveTo(-14.6,8.3).curveTo(-9.1,7.2,-4.8,6).lineTo(2,4).curveTo(5.9,2.9,8.6,1.8).lineTo(13,-0.4).curveTo(15,-1.5,17.2,-3.1).curveTo(19.2,-4.5,20.8,-6.5).curveTo(22.4,-8.4,24.5,-9.9).curveTo(22.6,-8.1,21.3,-6.1).curveTo(20,-4,18,-2.2).curveTo(16.3,-0.6,14,1).lineTo(11.9,2.5).curveTo(11,3.1,9.6,3.9).curveTo(4.2,6.8,-4.3,8.2).curveTo(-8.3,8.9,-14.4,9.4).curveTo(-20,9.9,-24.5,9.9).curveTo(-20.2,9.5,-14.6,8.3).closePath();
	this.shape_22.setTransform(73.925,50.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#080808").beginStroke().moveTo(-0.7,2.5).curveTo(-1.6,0.4,-1.8,-1.8).curveTo(-2.2,-5.1,-2,-7.9).curveTo(-1.8,-5.3,-1.1,-1.9).lineTo(0,2.2).curveTo(0.8,5.3,2,7.9).curveTo(0.3,5.1,-0.7,2.5).closePath();
	this.shape_23.setTransform(41.1667,100.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#080808").beginStroke().moveTo(-0.5,11).curveTo(-0.1,7.3,-0,4.6).curveTo(0.1,-0,-0,-4.6).curveTo(-0.1,-7.6,-0.6,-11).curveTo(-1.1,-14.3,-1.9,-17.4).curveTo(-0.6,-14,0.2,-11.2).curveTo(1.1,-8,1.6,-4.7).curveTo(2.3,-0,1.6,4.7).curveTo(1.2,7.7,0.3,11.2).curveTo(-0.6,14.2,-1.8,17.4).curveTo(-0.9,13.8,-0.5,11).closePath();
	this.shape_24.setTransform(41.3375,77.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#080808").beginStroke().moveTo(1.2,2.6).lineTo(0,-2.9).curveTo(-0.8,-6.5,-2.3,-10.5).curveTo(-0.4,-7,0.9,-3.2).curveTo(2,-0.1,2.2,2.5).curveTo(2.5,6.5,2.2,10.5).curveTo(2,6.6,1.2,2.6).closePath();
	this.shape_25.setTransform(41.9,69.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-7.2,0.1).curveTo(-4.7,-3.3,-0.3,-3.3).curveTo(3.9,-3.4,6.8,-0.4).curveTo(8.3,1.1,8.9,2.6).lineTo(-8.9,3.4).closePath();
	this.shape_26.setTransform(113.425,89.4496);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-7.2,0.3).curveTo(-3.9,-3.3,0.5,-3.8).curveTo(4.6,-4.2,7.6,-1.1).curveTo(9.1,0.5,9.6,2.1).lineTo(-9.6,3.8).closePath();
	this.shape_27.setTransform(74.85,92.0771);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FDE4C8").beginStroke().moveTo(11.5,57.6).curveTo(0.7,53.7,-9.6,48.3).curveTo(-23.6,41.1,-27.3,35.4).curveTo(-30.9,30.1,-32.6,25.1).lineTo(-33.7,21.3).curveTo(-36.6,21.6,-40,20.3).curveTo(-47,17.7,-50.1,9.7).curveTo(-53.7,0.6,-53.3,-4.5).curveTo(-52.9,-9.3,-49.3,-10).curveTo(-46.3,-10.6,-44,-8.5).curveTo(-42.4,-7.1,-40.5,-3.4).curveTo(-38,1.7,-37.4,4.1).curveTo(-37.2,4.7,-36.9,5).lineTo(-36.2,5.6).lineTo(-36.7,3.7).lineTo(-36,4.7).curveTo(-35.7,5.2,-35.1,5.7).lineTo(-35.6,3.6).lineTo(-34.6,4.9).curveTo(-34.1,5.4,-32.2,6.1).curveTo(-32.9,5.2,-33.1,3.6).curveTo(-33.8,-1.9,-34.1,-4.9).curveTo(-34.4,-10.5,-33.6,-13.1).curveTo(-31.5,-19.3,-32,-29.3).curveTo(-32.4,-37.1,-33.8,-41.7).lineTo(-25.3,-42.1).curveTo(-15.5,-42.8,-8.3,-43.9).curveTo(-0.5,-45.1,8.3,-47.9).curveTo(14.6,-50,14.4,-49.7).curveTo(12.7,-47.9,9,-45.4).curveTo(7.3,-44.2,5.2,-43.2).lineTo(3.5,-42.5).curveTo(10.7,-43.7,18.9,-47.8).curveTo(23,-49.9,25.6,-51.7).lineTo(19.5,-43.8).curveTo(22.2,-44.6,28.7,-49.6).curveTo(31.9,-52.1,34.6,-54.4).lineTo(28.7,-45.6).lineTo(31.3,-47.2).curveTo(34.5,-49.3,37.3,-51.9).curveTo(41.7,-56.1,43.5,-59.7).curveTo(44.3,-51.3,44.2,-54.1).lineTo(44.6,-47.3).lineTo(46.2,-53.5).lineTo(47,-50).lineTo(48.4,-43.7).curveTo(50,-34.8,50.3,-31.9).curveTo(50.9,-26.9,50.9,-20.6).curveTo(50.8,-17.1,51.7,-8.1).curveTo(52.8,2.1,52.9,5).lineTo(53.3,12.4).curveTo(52.9,21.9,48.6,32.9).curveTo(44.9,42.4,41.5,48.1).curveTo(39.3,51.8,36.2,55.3).curveTo(32.9,59,25.5,59.6).lineTo(23,59.7).curveTo(17.2,59.7,11.5,57.6).closePath();
	this.shape_28.setTransform(74.205,101.4746);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#080808").beginStroke().moveTo(0.3,3.9).curveTo(0.5,-0.4,0.5,-3.8).curveTo(0.4,-9.3,-0.4,-14.5).curveTo(0.8,-9.2,1.2,-3.8).curveTo(1.4,0.2,1,3.9).curveTo(0.3,9.2,-1.2,14.5).curveTo(-0,9.2,0.3,3.9).closePath();
	this.shape_29.setTransform(130.6946,53.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#080808").beginStroke().moveTo(-9.3,-1.1).curveTo(-6.7,-3.7,-4,-5.5).curveTo(-1.4,-7.1,2,-8.9).curveTo(11.2,-13.5,20.3,-14.6).curveTo(11.8,-13.1,2.6,-7.9).lineTo(-3.2,-4.3).curveTo(-5.8,-2.6,-8.5,-0.2).curveTo(-15.2,5.9,-20.3,14.6).curveTo(-15.8,5.7,-9.3,-1.1).closePath();
	this.shape_30.setTransform(23.775,21.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#080808").beginStroke().moveTo(-14.4,0.3).curveTo(-10.1,-1.4,-6.5,-2.3).curveTo(-0.9,-3.8,5.3,-3.9).curveTo(9,-4.1,13.6,-3.7).curveTo(17.5,-3.4,21.9,-2.7).curveTo(17.1,-3.2,13.6,-3.2).curveTo(8.6,-3.2,5.4,-2.9).curveTo(-1,-2.4,-6.3,-1.3).curveTo(-10.3,-0.5,-14.2,0.8).curveTo(-18.3,2.2,-21.9,4).curveTo(-18.2,1.8,-14.4,0.3).closePath();
	this.shape_31.setTransform(49.625,6.4275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#080808").beginStroke().moveTo(15.8,0.6).curveTo(10.4,-0.4,6.7,-0.9).curveTo(0.9,-1.5,-6.3,-1.9).curveTo(-10.6,-2,-15.6,-1.8).curveTo(-19.8,-1.5,-24.7,-0.8).curveTo(-19.8,-1.8,-15.6,-2.3).curveTo(-10.6,-2.9,-6.3,-3).curveTo(0.4,-3.2,6.9,-2).curveTo(11.2,-1.2,15.9,0.1).curveTo(19.9,1.2,24.7,3).curveTo(19.3,1.4,15.8,0.6).closePath();
	this.shape_32.setTransform(68.75,3.0167);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#080808").beginStroke().moveTo(14.5,2.6).curveTo(11.2,0,7.4,-1.9).curveTo(2.5,-4.3,-3.7,-6.1).curveTo(-7,-7.2,-11.9,-7.7).curveTo(-15.8,-8,-20.4,-7.5).curveTo(-15.9,-8.5,-11.8,-8.7).curveTo(-7.4,-8.9,-3.1,-8.2).curveTo(3.3,-7.1,8.5,-3.7).curveTo(12,-1.5,15.2,1.8).curveTo(18.1,4.8,20.4,8.7).curveTo(17.7,5.2,14.5,2.6).closePath();
	this.shape_33.setTransform(94.45,9.2109);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#080808").beginStroke().moveTo(6.2,1.1).curveTo(4.9,0.2,3,-0.7).curveTo(0.7,-1.7,-1.8,-2.3).curveTo(-5.4,-3.3,-9,-2.8).curveTo(-5.5,-3.7,-1.6,-3.2).curveTo(1.2,-2.8,3.4,-1.5).curveTo(5.1,-0.5,6.5,0.7).curveTo(7.9,2,9,3.4).curveTo(7.6,2,6.2,1.1).closePath();
	this.shape_34.setTransform(120.675,23.4207);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#080808").beginStroke().moveTo(8.2,4.6).curveTo(7,2.4,5.1,0.4).curveTo(2.7,-2.2,-0.4,-4.5).curveTo(-4.6,-7.8,-9.7,-9.7).curveTo(-4.5,-8.4,0.3,-5.6).curveTo(3.8,-3.6,6.1,-0.4).curveTo(7.8,1.8,8.8,4.3).curveTo(9.7,7,9.6,9.7).curveTo(9.4,7.3,8.2,4.6).closePath();
	this.shape_35.setTransform(122.2048,28.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#080808").beginStroke().moveTo(5.4,6.8).curveTo(4.6,4.2,3.6,2.1).curveTo(2,-1,0.1,-4.1).curveTo(-2.6,-8.5,-6.5,-11.7).curveTo(-2.1,-8.9,1.2,-4.8).curveTo(3.6,-1.9,4.8,1.6).curveTo(5.6,4.2,6,6.6).curveTo(6.5,9.3,6.5,11.7).curveTo(6.2,9.3,5.4,6.8).closePath();
	this.shape_36.setTransform(111.5,16.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#080808").beginStroke().moveTo(2.1,3.6).lineTo(-1.4,-3.9).curveTo(-3.9,-9.6,-6.7,-14.3).curveTo(-3.3,-9.9,-0.1,-4.6).curveTo(2.1,-0.9,3.5,3).curveTo(5.5,8.8,6.7,14.3).curveTo(4.5,8.3,2.1,3.6).closePath();
	this.shape_37.setTransform(31.875,122.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#080808").beginStroke().moveTo(-3.6,9.8).curveTo(-7.8,3.1,-9.4,-4.2).curveTo(-11.7,-14.8,-9.9,-25.4).curveTo(-10.7,-14.9,-7.5,-4.8).curveTo(-5.3,2.1,-1.9,8.8).curveTo(3.2,18.4,10.7,25.4).curveTo(2.6,19.2,-3.6,9.8).closePath();
	this.shape_38.setTransform(16.5,88.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#080808").beginStroke().moveTo(-4.6,6.5).curveTo(-4.7,-0.8,-3.1,-7.8).curveTo(-1.6,-14,-0.1,-17.5).curveTo(2,-22.8,4.6,-26.3).curveTo(2.2,-22.5,0.5,-17.3).curveTo(-0.7,-13.8,-1.9,-7.6).curveTo(-3,-0.6,-3.4,6.5).curveTo(-3.9,18.2,-1.4,26.3).curveTo(-4.4,18.3,-4.6,6.5).closePath();
	this.shape_39.setTransform(6.0742,55.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#080808").beginStroke().moveTo(-4.4,2.3).curveTo(-3.5,-1.4,-1.4,-4.7).curveTo(0.7,-7.9,5.3,-13).curveTo(1.6,-7.9,-0.2,-4.1).curveTo(-2.1,-0.2,-3.2,2.7).curveTo(-5,7.7,-5.2,12.9).curveTo(-5.6,7.4,-4.4,2.3).closePath();
	this.shape_40.setTransform(5.2734,42.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#EFC7B0").beginStroke().moveTo(14.1,24).curveTo(9,23.8,2.5,22.1).curveTo(-10.5,18.9,-17.4,12.7).curveTo(-26,4.7,-33.3,-11).curveTo(-38.6,-22.6,-39.7,-28.8).curveTo(-40,-30.7,-38.3,-32.2).curveTo(-37.4,-32.8,-36.4,-33.3).lineTo(-13.2,-21.7).lineTo(39.7,-34.6).lineTo(22.8,-6.2).curveTo(23.8,-6.5,24.6,2.2).curveTo(25.5,11.1,24.4,14.7).curveTo(22.8,20.4,21.6,28.1).curveTo(21,31.9,20.7,34.5).closePath();
	this.shape_41.setTransform(76.403,146.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-3.3,58.3).curveTo(-16.6,57.4,-23.8,46.3).lineTo(-38.8,21.9).curveTo(-27.1,18.3,-28.2,-18.5).curveTo(-28.5,-29.9,-30.1,-43.4).lineTo(-31.6,-54.5).lineTo(-22.4,-55.2).curveTo(-13,-56.2,-12.2,-57.8).curveTo(-11.5,-59.4,-8.8,-56.2).curveTo(-7.4,-54.7,-6.2,-52.8).lineTo(2.2,-55.2).curveTo(10.9,-57.5,12.6,-57.3).curveTo(15.2,-57,35.6,-51.6).lineTo(36.5,-52.9).curveTo(37.6,-54,38.1,-52.8).curveTo(40,-49.1,36.6,-24.1).curveTo(32.5,6,34.9,19.1).curveTo(36.1,25.7,38.1,26.2).lineTo(18.6,49.1).curveTo(10.7,58.3,-1.2,58.3).lineTo(-3.3,58.3).closePath();
	this.shape_42.setTransform(66.726,160.0388);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#080808").beginStroke().moveTo(-8.5,75.1).curveTo(-16.9,68.2,-18,64.2).curveTo(-18.6,62.1,-23.7,54.8).lineTo(-35.1,38.5).curveTo(-52.5,13.5,-58.4,-0.5).curveTo(-64.7,-15.6,-62.8,-31.3).curveTo(-61.9,-39.2,-59.8,-44.1).lineTo(-65.6,-36.1).curveTo(-59,-58.8,-37.8,-70.3).curveTo(-27.4,-76,-18.3,-77.3).lineTo(-30.8,-75.8).lineTo(-28,-77).curveTo(-24.2,-78.4,-19.4,-79.4).curveTo(-3.9,-82.5,15.8,-80.3).curveTo(35.5,-78.1,45,-70.1).curveTo(49.8,-66,50.6,-62.4).lineTo(55.6,-59.7).curveTo(61.2,-55.5,64.2,-48).curveTo(67.1,-40.6,63.8,-19).curveTo(62.1,-8.2,59.9,1.1).lineTo(-0.4,81.2).curveTo(-4.3,78.6,-8.5,75.1).closePath();
	this.shape_43.setTransform(65.8657,82.7727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,132,218.4);
p.frameBounds = [rect];


(lib.Symbol39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#E0B5A0").beginStroke().moveTo(2.3,3.8).lineTo(-8.6,1.4).curveTo(-10.5,1.1,-12.1,-0.3).curveTo(-15.1,-2.7,-15.8,-7).curveTo(-16,-8.4,-15.3,-9.3).curveTo(-14.9,-9.7,-14.2,-9.8).lineTo(-13.1,-9.7).lineTo(-11.3,-9).lineTo(-9.5,-8.4).curveTo(-1.5,-5.7,5.2,-7.1).curveTo(7.7,-7.6,9,-7.5).curveTo(11.2,-7.4,12.6,-6.1).curveTo(13.9,-5,14.7,-2.9).curveTo(15.4,-1.2,15.8,0.7).curveTo(15.2,-1.4,14.5,-2.8).curveTo(13.5,-4.9,12.3,-5.8).curveTo(10.9,-6.9,9,-6.9).curveTo(7.6,-7,5.3,-6.5).curveTo(3.8,-6,1.5,-5.9).curveTo(-0,-5.7,-2.3,-5.9).curveTo(-6.2,-6.3,-9.8,-7.6).lineTo(-13.3,-8.8).curveTo(-14.3,-9,-14.6,-8.6).curveTo(-15,-8.3,-14.9,-7.2).curveTo(-14.2,-3.2,-11.6,-0.9).curveTo(-10.2,0.3,-8.4,0.7).lineTo(2.6,3.4).lineTo(2.8,3.5).lineTo(-0.2,9.8).closePath();
	this.shape.setTransform(43.2528,56.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#E0B5A0").beginStroke().moveTo(11.6,7).curveTo(9.1,6.3,7.3,5.6).curveTo(4.7,4.6,-0.9,1.9).curveTo(-5.8,-0.7,-8.7,-2.4).lineTo(-12.5,-4.8).curveTo(-14.6,-6.2,-16,-7.5).lineTo(-12.2,-5.2).lineTo(-8.3,-3.1).curveTo(-3.6,-0.5,-0.4,1).curveTo(2.7,2.7,7.6,4.9).curveTo(10.3,6.1,11.7,6.5).curveTo(14.2,7.4,16,7.5).lineTo(15.3,7.5).curveTo(13.8,7.5,11.6,7).closePath();
	this.shape_1.setTransform(17.425,88.6722);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#E0B5A0").beginStroke().moveTo(14.1,8.1).curveTo(11.4,8,8.5,7.3).lineTo(7.1,7).lineTo(-2,3.4).lineTo(-12.3,-0.9).lineTo(-17.3,-3.3).curveTo(-18.7,-3.9,-19.3,-5.4).curveTo(-19.8,-6.6,-19.3,-8.1).curveTo(-19.6,-6.6,-19,-5.5).curveTo(-18.4,-4.2,-17.1,-3.7).lineTo(6.8,6).lineTo(8.7,6.6).curveTo(11.4,7.3,14.1,7.6).curveTo(17.2,8.1,19.6,7.4).curveTo(17.7,8.1,14.8,8.1).lineTo(14.1,8.1).closePath();
	this.shape_2.setTransform(19.9934,81.5303);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#E0B5A0").beginStroke().moveTo(-17.5,2.1).curveTo(-18.8,1.1,-19.8,-0.7).curveTo(-20.8,-2.7,-20.7,-4.3).curveTo(-20.7,-5.5,-20,-6.2).curveTo(-19.2,-7,-18,-6.9).lineTo(-16.2,-6.6).lineTo(-7.3,-4.9).lineTo(-0.3,-3.3).lineTo(6.7,-1.6).lineTo(13.7,0.2).curveTo(15.8,0.8,17.2,0.9).curveTo(19.4,1.2,20.8,0.9).curveTo(19.4,1.4,17.2,1.2).curveTo(15.4,1,13.6,0.6).lineTo(6.5,-0.9).curveTo(-2.8,-3.1,-7.5,-3.9).lineTo(-16.4,-5.8).curveTo(-17.5,-6.1,-18.1,-6.1).curveTo(-19,-6.1,-19.4,-5.7).curveTo(-19.9,-5.2,-20,-4.3).curveTo(-20.2,-2.8,-19.3,-1).curveTo(-18.5,0.7,-17.2,1.8).curveTo(-14.5,4.3,-12.1,6.9).lineTo(-17.5,2.1).closePath();
	this.shape_3.setTransform(20.7488,79.1691);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#E0B5A0").beginStroke().moveTo(7.3,11.1).curveTo(5.4,10.9,3.7,10.5).lineTo(-4.6,6.4).curveTo(-10.8,3.4,-12.9,2.2).curveTo(-14.5,1.2,-16.4,-0.9).curveTo(-18.1,-2.9,-19.2,-4.7).curveTo(-19.9,-5.9,-20.2,-6.9).curveTo(-20.4,-7.7,-20.1,-8.4).curveTo(-19.7,-9.1,-19.2,-9.4).curveTo(-18.2,-10.3,-16.6,-9.9).lineTo(0.1,-1.8).curveTo(0.7,-1.5,2.2,-1.3).curveTo(4.1,-1.1,6.8,-1.2).curveTo(9.5,-1.4,11.3,-1.8).lineTo(11.7,-2).lineTo(12.1,-2.3).lineTo(12.7,-3.3).lineTo(15.6,-9.5).lineTo(15.6,-9.6).lineTo(15.7,-9.6).lineTo(20.3,-11.2).lineTo(15.8,-9.4).lineTo(13.1,-3).lineTo(12.5,-2).lineTo(12,-1.5).lineTo(11.4,-1.3).curveTo(9.9,-0.9,6.8,-0.6).curveTo(4,-0.4,2.1,-0.6).curveTo(0.6,-0.7,-0.3,-1.1).lineTo(-16.4,-8.8).lineTo(-16.9,-8.9).curveTo(-17.9,-9.2,-18.7,-8.7).lineTo(-19.3,-8).curveTo(-19.4,-7.7,-19.3,-7.1).curveTo(-19,-6.1,-18.4,-5.1).curveTo(-17.5,-3.5,-15.7,-1.5).curveTo(-13.8,0.6,-12.4,1.5).lineTo(3.9,10.1).lineTo(3.8,10.1).lineTo(7.3,10.9).curveTo(9.7,11.2,10.8,11.1).curveTo(10.1,11.2,9.1,11.2).lineTo(7.3,11.1).closePath();
	this.shape_4.setTransform(30.1306,69.1444);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#E0B5A0").beginStroke().moveTo(-10.4,13).curveTo(-14.3,11.6,-17.6,9.6).lineTo(-17.7,9.5).lineTo(-19.2,7.3).lineTo(-28.4,0.9).lineTo(-18.9,7).lineTo(-18.8,7).lineTo(-17.2,9.1).curveTo(-13.5,11.1,-10.2,12.3).curveTo(-5.9,13.7,-2.6,13.8).curveTo(-0.4,13.9,1.2,13.4).curveTo(3.3,12.9,4.9,12.3).curveTo(7.3,11.4,11.8,8.8).curveTo(13.7,7.7,15.3,6.9).curveTo(17.3,5.9,18.7,5.1).curveTo(22.4,2.8,24.6,0).curveTo(27,-3,27.7,-6.9).curveTo(28,-8.7,27.9,-10.7).lineTo(27.9,-14.7).lineTo(28.3,-10.8).curveTo(28.5,-8.9,28.2,-6.8).curveTo(27.7,-2.9,25.2,0.5).curveTo(22.8,3.6,19.2,5.8).curveTo(18.1,6.5,15.7,7.7).curveTo(13.7,8.7,12.3,9.6).curveTo(4.2,14.7,-2.6,14.7).curveTo(-6.1,14.6,-10.4,13).closePath();
	this.shape_5.setTransform(36.49,86.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-3.6,25.7).lineTo(-11.3,23.3).lineTo(-30.4,7.3).lineTo(-32.2,3.1).lineTo(-31.9,0).lineTo(-30.6,-0.9).lineTo(1.4,6).lineTo(-6.5,2.2).curveTo(-14.5,-1.8,-15,-2.3).curveTo(-17.5,-4.5,-19.4,-6.6).curveTo(-23.1,-10.7,-22,-12.5).curveTo(-21,-14.3,-18.6,-13.5).curveTo(-17.3,-13.1,-16.3,-12.4).lineTo(-11.3,-10.1).curveTo(-5.8,-7.5,-3.6,-6.3).curveTo(-1.3,-5,3.2,-5).curveTo(7.2,-4.9,8.8,-5.6).curveTo(10.5,-6.2,13.3,-13.7).lineTo(2.8,-16.1).curveTo(-2.6,-17.3,-4.1,-22.9).curveTo(-4.7,-25.1,-4,-26.2).curveTo(-3.2,-27.3,-1.5,-26.3).curveTo(5.2,-22.3,18.4,-24.5).curveTo(22.9,-25.2,25.5,-19.5).lineTo(27.4,-14.2).curveTo(28.7,-10.9,29.8,-9.2).curveTo(32.2,-5.4,32.2,1.6).curveTo(32.1,5.2,31.6,8.3).curveTo(31.3,10.6,28.2,13.8).curveTo(26.7,15.3,25.3,16.4).curveTo(14.8,22.8,8.6,25.8).curveTo(6.8,26.8,3.9,26.8).curveTo(0.8,26.8,-3.6,25.7).closePath();
	this.shape_6.setTransform(32.5255,73.3564);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#D5A690").beginStroke().moveTo(-10.9,-0.8).curveTo(-6.7,-4.1,-1.9,-5.5).curveTo(0.8,-6.3,3.1,-6.5).curveTo(6,-6.6,8.2,-6.3).curveTo(13.3,-5.6,17.6,-3).curveTo(12.3,-4.6,8,-4.8).curveTo(3,-4.9,-1.4,-3.6).curveTo(-5.5,-2.4,-10,0.4).curveTo(-14,3.1,-17.6,6.5).curveTo(-15.2,2.5,-10.9,-0.8).closePath();
	this.shape_7.setTransform(111.125,7.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-8.7,18.6).curveTo(-16.3,15,-19.2,7.1).curveTo(-22.1,-0.9,-18.5,-8.6).curveTo(-14.9,-16.3,-7,-19.2).curveTo(1,-22.2,8.6,-18.6).curveTo(16.3,-15.1,19.2,-7.1).curveTo(22,0.9,18.5,8.6).curveTo(14.9,16.3,6.9,19.2).curveTo(3.4,20.5,-0.2,20.5).curveTo(-4.5,20.5,-8.7,18.6).closePath();
	this.shape_8.setTransform(116.3626,20.5575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-39.1,15.8).curveTo(-32.4,11.8,-27.6,6.8).curveTo(-19.2,-1.8,-13.9,-15.1).curveTo(-7.9,-30,3.3,-37.9).curveTo(8.9,-41.9,13.3,-42.8).lineTo(32.9,-39.7).lineTo(38,-28.5).lineTo(38.6,-25.4).curveTo(39.2,-21.7,39.1,-17.9).curveTo(38.8,-5.8,32.1,1.8).curveTo(22.6,12.5,-8.1,28.7).curveTo(-23.4,36.9,-36.8,42.8).closePath();
	this.shape_9.setTransform(98.2271,44.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,137.4,100.8);
p.frameBounds = [rect];


(lib.Symbol38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-34.4,-17).lineTo(-30.7,-61).lineTo(-55.4,-83.8).lineTo(-49.4,-81.5).curveTo(-42.1,-79.5,-35.2,-81).curveTo(-22.3,-83.7,-11.5,-79).curveTo(4.9,-71.9,10.8,-48.8).lineTo(55.4,62.7).lineTo(21.8,83.8).closePath();
	this.shape.setTransform(55.4,83.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,110.8,167.6);
p.frameBounds = [rect];


(lib.Symbol37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-39,54.8).curveTo(-10.9,-47.4,-5.9,-62).curveTo(-2.5,-69.8,4.3,-72.8).curveTo(10.7,-75.7,16,-72.5).lineTo(21,-70.8).curveTo(26.7,-68.6,30.8,-66.5).curveTo(44,-59.8,35.9,-56).lineTo(33.4,-25.3).lineTo(37.8,-19.2).lineTo(0.4,74.2).closePath();
	this.shape.setTransform(36.5151,98.0107);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-4.4,39.1).curveTo(-20.6,36.7,-31.1,24.4).curveTo(-41.8,11.7,-39.4,-3.5).curveTo(-36,-24.2,-21.1,-33.6).curveTo(-7.5,-42.1,9.8,-38.3).curveTo(25.3,-34.9,33.9,-20.1).curveTo(42.3,-5.6,38.8,10).curveTo(35.6,24.5,23,32.9).curveTo(13.1,39.5,1.6,39.5).curveTo(-1.3,39.5,-4.4,39.1).closePath();
	this.shape_1.setTransform(70.0136,39.4831);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,0,112.4,172.2);
p.frameBounds = [rect];


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#E0B5A0").beginStroke().moveTo(16.8,11.6).lineTo(12.1,11.2).lineTo(-6.8,9.2).lineTo(-6.8,9.2).lineTo(-19.5,4.9).lineTo(-6.6,8.4).lineTo(-6.7,8.4).lineTo(12.1,9.7).lineTo(16.8,10).curveTo(19.3,10.1,20.6,8.9).curveTo(21.3,8.2,21.5,7.2).lineTo(21.7,6.2).curveTo(21.7,5.8,21.5,5.5).curveTo(20.8,4.1,18.2,3.6).lineTo(18.1,3.6).lineTo(-3.3,-1.5).lineTo(-3.4,-1.5).lineTo(-3.4,-1.5).lineTo(-13.4,-6.5).lineTo(-23.3,-11.7).lineTo(-3,-2.6).lineTo(18.4,2).lineTo(18.4,2).curveTo(19.7,2.2,20.9,2.8).curveTo(22.3,3.5,23,4.7).curveTo(23.2,5.2,23.3,6.2).lineTo(23.1,7.6).curveTo(22.8,9.1,21.8,10).curveTo(20.1,11.7,17.2,11.7).lineTo(16.8,11.6).closePath();
	this.shape.setTransform(162.85,66.5028);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FDE4C8").beginStroke().moveTo(17.3,10.5).curveTo(14.7,10.5,3.2,9.4).lineTo(-7.8,8.4).lineTo(-18.9,5.1).lineTo(-21.3,-10.5).lineTo(-4.2,-2.5).lineTo(8.1,0.1).curveTo(20.5,2.9,21,3.9).curveTo(21.8,5.4,20.9,7.8).curveTo(20,10.5,17.4,10.5).lineTo(17.3,10.5).closePath();
	this.shape_1.setTransform(163.9439,66.9254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#E0B5A0").beginStroke().moveTo(-21.3,5.1).lineTo(-8,6.4).lineTo(10.8,4.6).lineTo(15.4,4.1).curveTo(18,3.7,19,2.3).curveTo(19.5,1.6,19.6,0.5).lineTo(19.6,-0.5).curveTo(19.5,-0.8,19.3,-1.2).curveTo(18.3,-2.4,15.7,-2.4).lineTo(-6.3,-3.9).lineTo(-6.4,-3.9).lineTo(-12.8,-5.5).lineTo(-19.1,-7.2).lineTo(-6.2,-5.1).lineTo(-6.3,-5.1).lineTo(15.8,-4.1).curveTo(17.1,-4.1,18.2,-3.8).curveTo(19.9,-3.2,20.6,-2.2).curveTo(21,-1.6,21.3,-0.7).lineTo(21.3,0.6).curveTo(21.2,2,20.4,3.3).curveTo(19,5.2,15.7,5.7).lineTo(-8.1,7.3).closePath();
	this.shape_2.setTransform(168.85,80.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-17.4,6.8).lineTo(-22.4,-8.2).lineTo(-4.3,-3.1).lineTo(8.3,-2.6).curveTo(21,-1.9,21.7,-1).curveTo(22.7,0.3,22.3,2.8).curveTo(21.8,5.7,19.1,6.1).curveTo(16.6,6.5,5.1,7.4).lineTo(-6,8.2).closePath();
	this.shape_3.setTransform(166.8175,79);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#E0B5A0").beginStroke().moveTo(-2.5,4.6).lineTo(12,2).curveTo(13.9,1.8,15,0.9).curveTo(16.3,-0.1,16.4,-1.6).lineTo(16.4,-2.4).lineTo(16.2,-3.1).curveTo(16,-3.6,15.4,-4).curveTo(14.3,-4.7,12.3,-4.7).lineTo(1.2,-4.9).lineTo(-4.3,-5).lineTo(-9.8,-5.3).lineTo(12.2,-6.1).curveTo(14.6,-6.2,16.2,-5.4).curveTo(17.3,-4.8,17.7,-3.7).lineTo(18,-2.6).lineTo(18,-1.5).curveTo(17.9,0.8,16,2.2).curveTo(14.6,3.3,12.3,3.7).lineTo(-2.3,5.8).lineTo(-10.2,6).lineTo(-18,6.2).closePath();
	this.shape_4.setTransform(166.725,89.9455);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-16.8,7).lineTo(-22.7,-7.7).lineTo(-4.2,-3.7).lineTo(8.3,-3.9).curveTo(21.1,-4.1,21.8,-3.3).curveTo(22.9,-2,22.6,0.6).curveTo(22.3,3.5,19.7,4.1).curveTo(17.2,4.6,5.7,6.2).lineTo(-5.3,7.7).closePath();
	this.shape_5.setTransform(161.1731,88.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#E0B5A0").beginStroke().moveTo(3.1,10.1).lineTo(-16.2,0.1).lineTo(-35.5,-10.2).lineTo(-25.6,-5.6).lineTo(-15.7,-0.9).lineTo(3.7,8.5).lineTo(14.7,7.6).lineTo(22,5.3).curveTo(26.3,3.9,29.3,2.6).curveTo(33.7,0.7,33.9,-2.3).curveTo(34.1,-3,33.9,-4).lineTo(33.8,-4.2).lineTo(33.4,-4).curveTo(32.5,-3.4,30.8,-1.5).lineTo(30.5,-1.3).lineTo(8.2,-2.7).lineTo(3,-4.3).lineTo(8.3,-3.1).lineTo(30,-2.5).curveTo(31.5,-4.4,32.7,-5.2).curveTo(33.7,-5.6,34.2,-5.6).curveTo(34.6,-5.5,35,-5).curveTo(35.3,-4.6,35.3,-4.3).curveTo(35.5,-3.2,35.4,-2.1).curveTo(35.3,0.1,33.5,1.8).curveTo(32,3.1,29.9,4).curveTo(28.2,4.8,22.5,6.9).curveTo(18.6,8.2,15,9.3).lineTo(14.9,9.3).lineTo(14.8,9.3).lineTo(3.6,10.2).lineTo(3.3,10.2).closePath();
	this.shape_6.setTransform(145.755,91.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-30,-10.2).lineTo(-14.5,-6.8).lineTo(3.8,-1.9).lineTo(16.2,-1.3).curveTo(28.8,-0.6,29.7,-0.2).curveTo(31.5,0.8,23.3,4.7).curveTo(15.4,8.4,11.8,8.9).curveTo(9.3,9.4,3.4,9.8).lineTo(-2,10.2).closePath();
	this.shape_7.setTransform(150.2862,90.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-18.7,18.4).lineTo(-36.3,8.7).lineTo(-37.6,-8).lineTo(-31.3,-20.1).lineTo(-22.9,-23.1).curveTo(-7.7,-28.1,-4,-27.6).curveTo(1.2,-26.8,24.9,-22.2).lineTo(24.8,-19.6).curveTo(24,-16.9,21.5,-16.5).lineTo(3.5,-14.1).lineTo(7.9,-6.7).curveTo(13,0.6,17.1,-0).curveTo(20.7,-0.6,20.9,0.2).curveTo(21,1.3,22.1,1.3).curveTo(24,1.4,25.5,2.3).curveTo(26.3,2.7,26.6,3.1).lineTo(27.5,3.8).curveTo(28.1,4.7,27.4,5.5).curveTo(30,6.4,37.6,6.6).lineTo(16.5,24.9).curveTo(4.9,27.1,1.4,27.6).lineTo(1.2,27.6).curveTo(-1.4,27.6,-18.7,18.4).closePath();
	this.shape_8.setTransform(147.9,73.6318);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#D5A690").beginStroke().moveTo(-12.6,-1.3).curveTo(-7.3,-4.3,-1.5,-5.5).curveTo(1.1,-6.1,4.5,-6.2).curveTo(7.2,-6.3,10.4,-5.9).curveTo(16.5,-4.9,21.6,-2.2).curveTo(15.5,-3.9,10.2,-4.3).curveTo(4.2,-4.7,-1.1,-3.5).curveTo(-6.2,-2.5,-11.8,0.1).curveTo(-17.1,2.7,-21.6,6.3).curveTo(-18.1,2,-12.6,-1.3).closePath();
	this.shape_9.setTransform(21.575,6.2472);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-5.4,25).curveTo(-14,22.2,-21,18.2).curveTo(-36.6,9.3,-50.2,-2.8).lineTo(-60.8,-13.1).lineTo(-54.2,-22.6).lineTo(-24.1,-40.3).lineTo(-16.3,-35.4).curveTo(-5.5,-28.2,9.7,-16.9).curveTo(26.1,-4.7,45.2,4.7).curveTo(54.6,9.4,60.8,11.6).lineTo(48.9,40.3).curveTo(8.2,29.6,-5.4,25).closePath();
	this.shape_10.setTransform(64.15,42.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,190.2,102.1);
p.frameBounds = [rect];


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#252525").beginStroke().moveTo(-365,350).lineTo(-365,-350).lineTo(365,-350).lineTo(365,350).closePath();
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(229));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-365,-349.9,730,700);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-5.6,76.2).curveTo(-12.5,71.4,-13.3,67.9).curveTo(-13.5,66.9,-12.3,54.5).curveTo(-10.6,36.3,-9.8,25.8).curveTo(-6.5,-19,-9.6,-42.8).curveTo(-11.6,-58.7,-16.6,-69).curveTo(-20.3,-76.8,-25.3,-80.9).lineTo(-19.2,-79.4).curveTo(8.6,-75.1,19.7,-52.7).curveTo(25.3,-41.4,25.3,-31.1).curveTo(25.7,-26.4,21.5,-14.5).curveTo(14.1,5.9,12.7,10.4).curveTo(1.4,48.1,11.4,80.7).curveTo(9.8,80.9,8.2,80.9).curveTo(1.3,80.9,-5.6,76.2).closePath();
	this.shape.setTransform(-0.0035,-0.006);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.3,-80.9,50.6,161.8);
p.frameBounds = [rect];


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#D5A690").beginStroke().moveTo(-4.7,-5.2).curveTo(-3.6,-5.7,-1.9,-9).curveTo(1.5,-15.7,4.7,-29.8).lineTo(-2.3,29.8).closePath();
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.7,-29.8,9.4,59.6);
p.frameBounds = [rect];


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-26.6,6.4).curveTo(-41.6,-20.6,-49.6,-51.8).curveTo(-51.6,-55.9,-51.8,-60.1).lineTo(-51.4,-59.2).lineTo(-51.8,-60.7).curveTo(-51.6,-69.8,-42.7,-79.2).curveTo(-28.8,-93.8,-1,-90).lineTo(28.8,-51.4).curveTo(36.8,-19.4,45.1,27.5).curveTo(49.2,50.9,51.8,68).lineTo(19.7,90.8).closePath();
	this.shape.setTransform(-9.625,1.6826);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.4,-89.1,103.6,181.6);
p.frameBounds = [rect];


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#E2B19F").beginStroke().moveTo(-0.1,-2.2).lineTo(0.4,-1).lineTo(-0.4,2.2).closePath();
	this.shape.setTransform(41.7962,52.0944,0.9994,0.9994,32.8868);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#E2B19F").beginStroke().moveTo(5.1,0.8).lineTo(2.9,-0.6).curveTo(1.3,-1.7,0.8,-2).curveTo(-1.3,-3,-4.2,-3.3).lineTo(-6.8,-3.4).lineTo(-9.4,-3.4).lineTo(-6.8,-3.8).curveTo(-5.4,-3.9,-4.2,-3.9).curveTo(-1.3,-3.8,1,-2.6).curveTo(1.9,-2.3,3.4,-1.2).lineTo(5.4,0.4).curveTo(7.9,2.3,9.4,3.9).lineTo(5.1,0.8).closePath();
	this.shape_1.setTransform(32.9853,27.9393,0.9989,0.9989,32.8861);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#E2B19F").setStrokeStyle(0.7).moveTo(-1.8,-1).lineTo(1.8,1);
	this.shape_2.setTransform(57.9624,43.9807,0.9994,0.9994,32.8868);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#E2B19F").setStrokeStyle(0.7).moveTo(-2.6,-1.5).lineTo(2.6,1.5);
	this.shape_3.setTransform(53.6079,48.2763,0.9994,0.9994,32.8868);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#E2B19F").beginStroke().moveTo(-0.4,-0.2).curveTo(1.6,-3.4,2.7,-4.8).curveTo(2.1,-2.9,0.3,0.2).curveTo(-1.3,2.9,-2.8,4.8).curveTo(-1.9,2.7,-0.4,-0.2).closePath();
	this.shape_4.setTransform(57.1304,41.8337,0.9989,0.9989,32.8861);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#E2B19F").beginStroke().moveTo(-3,4.7).lineTo(-0.9,4).lineTo(0.1,3.5).curveTo(0.6,3.3,1.1,2.9).lineTo(1.9,2.2).curveTo(3.5,1.1,4.8,-1.2).lineTo(5.7,-3.2).curveTo(6.1,-4.1,6.3,-5.4).curveTo(6.3,-3.2,5.3,-0.9).curveTo(4.3,1.3,2.4,2.8).curveTo(0.3,4.4,-1.7,4.9).lineTo(-4,5.3).lineTo(-6.3,5.4).closePath();
	this.shape_5.setTransform(46.0978,18.2843,0.9989,0.9989,32.8861);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#E2B19F").beginStroke().moveTo(0.1,0.1).lineTo(2.6,-3).curveTo(2.1,-1.2,0.7,0.6).curveTo(-0.8,2.4,-2.6,3).curveTo(-1.4,2,0.1,0.1).closePath();
	this.shape_6.setTransform(55.204,16.1131,0.9989,0.9989,32.8861);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#E2B19F").beginStroke().moveTo(-4.9,8.1).lineTo(-4.4,12.7).curveTo(-1.7,9.4,-0.4,7.7).curveTo(0.9,5.8,1,4.8).lineTo(5.4,-11.1).curveTo(4.6,-11.9,3.6,-12.3).curveTo(2.9,-12.6,2.5,-12.6).lineTo(1.3,-12.5).curveTo(-0.1,-12.5,-1.1,-11.9).curveTo(-2.1,-11.2,-2.8,-10.2).curveTo(-3.1,-9.4,-3.7,-7.8).lineTo(-6,-0.4).lineTo(-5.4,4.7).lineTo(-6.3,-0.4).lineTo(-6.3,-0.4).lineTo(-4.1,-7.9).curveTo(-3.7,-9.5,-3.3,-10.5).curveTo(-2.6,-11.7,-1.4,-12.4).curveTo(-0.3,-13.1,1.2,-13.2).lineTo(2.5,-13.3).curveTo(3.2,-13.3,3.9,-13).curveTo(5.1,-12.3,6.1,-11.4).lineTo(6.2,-11.3).lineTo(6.2,-11.1).lineTo(2.5,1.8).lineTo(1.6,5).curveTo(1.4,5.8,0.9,6.6).lineTo(-0.1,8).curveTo(-1.8,10.4,-4.4,13.1).lineTo(-4.6,13.3).closePath();
	this.shape_7.setTransform(79.1746,43.9834,0.9989,0.9989,32.8861);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#E2B19F").beginStroke().moveTo(1.4,13.4).lineTo(1.4,13.4).lineTo(2.1,8.6).lineTo(1.6,13.1).curveTo(4.4,10.3,5.3,9.1).lineTo(5.7,8.6).curveTo(5.8,8.4,5.7,8).lineTo(5.6,6.5).lineTo(5.3,3.6).lineTo(3.7,-7.9).curveTo(3.3,-10,3.1,-10.7).curveTo(2.5,-12.3,1.5,-12.8).curveTo(0.7,-13.3,-1,-12.8).curveTo(-2.5,-12.2,-3.2,-11.3).curveTo(-4.3,-10.1,-4.4,-8.8).curveTo(-4.6,-8.1,-4.5,-6).lineTo(-4,-0.2).lineTo(-4,-0.1).lineTo(-4,-0.1).curveTo(-5,1.1,-5.5,2.5).curveTo(-6.1,3.8,-6.2,5.5).curveTo(-6.1,3.7,-5.7,2.5).curveTo(-5.2,1,-4.3,-0.2).lineTo(-5,-5.9).curveTo(-5.2,-7.9,-5,-8.9).curveTo(-4.7,-10.7,-3.8,-11.7).curveTo(-2.8,-12.8,-1.2,-13.4).curveTo(-0.5,-13.7,0.3,-13.8).curveTo(1.2,-13.9,1.9,-13.4).curveTo(3.1,-12.7,3.8,-10.9).curveTo(4.1,-9.8,4.3,-8).lineTo(6.1,6.5).lineTo(6.2,7.9).lineTo(6.1,8.8).lineTo(5.7,9.4).curveTo(4.3,11.1,1.6,13.5).lineTo(1.5,13.5).lineTo(1.3,13.8).closePath();
	this.shape_8.setTransform(66.5566,44.8249,0.9989,0.9989,32.8861);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#E2B19F").beginStroke().moveTo(-3.3,12).lineTo(-5.1,7.7).lineTo(-3.1,11.8).lineTo(0.9,9.8).curveTo(1.8,9.2,1.9,8.9).lineTo(2.7,5.9).lineTo(3.2,2.9).lineTo(4.4,-7.8).lineTo(4.1,-9.3).curveTo(3.7,-11,2.6,-11.4).curveTo(2.1,-11.5,1.2,-11.4).lineTo(-0.2,-11).curveTo(-2.8,-9.9,-3.7,-6.4).curveTo(-4,-5.3,-4.1,-3.4).lineTo(-5,5.8).lineTo(-4.5,-3.4).curveTo(-4.5,-5.5,-4.2,-6.6).curveTo(-3.8,-8.3,-2.9,-9.5).curveTo(-2.1,-10.9,-0.5,-11.6).curveTo(0.1,-11.9,1,-12.1).curveTo(2.1,-12.3,2.8,-12).curveTo(3.7,-11.8,4.1,-11).curveTo(4.6,-10.4,4.8,-9.5).curveTo(5.1,-8.6,5.1,-7.9).lineTo(5.1,-7.1).lineTo(3.8,3).lineTo(3.2,6).lineTo(2.4,9.1).curveTo(2.1,9.6,1.1,10.1).lineTo(-0.2,10.9).lineTo(-3.2,12.1).lineTo(-3.3,12.1).closePath();
	this.shape_9.setTransform(59.6382,51.9373,0.9989,0.9989,32.8861);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#E2B19F").beginStroke().moveTo(-0,9.5).curveTo(-0.7,9.4,-1.8,9).curveTo(-3.2,8.4,-5,7.4).curveTo(-2.8,8.4,-1.7,8.7).curveTo(-0.9,9,0,9.2).lineTo(1.8,9.2).curveTo(3.9,9,5.1,8.3).curveTo(5.5,8.1,5.7,7.7).lineTo(6.1,7).lineTo(6.5,5.4).lineTo(1.3,-6.1).curveTo(0.1,-8.3,-1.6,-8.8).curveTo(-2.5,-9.1,-3.5,-8.7).curveTo(-4.3,-8.4,-5.2,-7.7).curveTo(-6.1,-7,-6.5,-6.1).curveTo(-6.8,-5.2,-6.7,-4.2).curveTo(-6.5,-2.9,-5.5,-0.1).lineTo(-3.8,3.8).lineTo(-5.7,-0).curveTo(-6.8,-2.5,-7.1,-4.1).curveTo(-7.4,-5.2,-6.9,-6.3).curveTo(-6.6,-7.2,-5.6,-8.1).curveTo(-4.6,-8.9,-3.7,-9.3).curveTo(-2.6,-9.7,-1.4,-9.4).curveTo(0.4,-8.9,1.9,-6.5).lineTo(7.1,5.2).lineTo(7.2,5.3).lineTo(7.2,5.4).curveTo(7,6.3,6.6,7.2).curveTo(6.5,7.7,6.2,8.1).curveTo(5.8,8.5,5.4,8.7).curveTo(4.1,9.5,1.8,9.6).curveTo(0.4,9.6,-0,9.5).closePath();
	this.shape_10.setTransform(47.6138,52.0546,0.9989,0.9989,32.8861);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FDE4C8").beginStroke().moveTo(6.4,28.8).curveTo(5.5,28.5,3.7,27.7).lineTo(2.1,26.9).lineTo(-30.8,15).curveTo(-33,13.9,-34.3,11.1).curveTo(-37,5.6,-33.1,-2.6).curveTo(-33.1,-4.8,-32.7,-7.4).curveTo(-31.9,-12.8,-29.9,-15).curveTo(-27.9,-18.7,-24.9,-22.3).curveTo(-18.8,-29.5,-13.6,-29.1).curveTo(-9.1,-28.8,-3.2,-27.9).curveTo(1.8,-27.1,2.8,-27.1).curveTo(5.1,-27.2,14.4,-28.8).lineTo(15,-28.6).curveTo(15.6,-28.2,15.9,-26.9).curveTo(16.4,-25.2,16,-23.6).curveTo(15.6,-21.7,14.1,-20.8).lineTo(10.3,-18.6).curveTo(7.8,-17.4,6.3,-17.6).curveTo(4.8,-17.7,0.7,-17.7).lineTo(-3.1,-17.7).lineTo(-5.8,-13.3).lineTo(14.8,-1.9).curveTo(14.4,-3.7,14.8,-5.6).curveTo(15.8,-9.4,20.2,-10.2).lineTo(21.7,-9.4).curveTo(23.3,-7.9,23.5,-4.6).lineTo(25,-10).curveTo(26.8,-15.4,27.7,-16).curveTo(29.5,-17.1,30.9,-17.3).curveTo(33.2,-17.5,35.5,-15.4).curveTo(31.1,1.1,30.5,2.1).curveTo(29.9,3,25.1,8.7).curveTo(26.1,11.2,25.4,12).lineTo(21,16.5).curveTo(20.5,21.1,19.7,22).curveTo(18.8,23,14.3,25).lineTo(14.2,26.5).curveTo(13.7,28.1,11.8,28.6).lineTo(9.2,29.1).lineTo(8.4,29.1).curveTo(7.3,29.1,6.4,28.8).closePath();
	this.shape_11.setTransform(52.0996,31.784,0.9994,0.9994,32.8868);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#D5A690").beginStroke().moveTo(-7.4,6.6).lineTo(-6.1,3.5).curveTo(-4.8,0.8,-2.6,-2.1).curveTo(-0.2,-4.9,2.3,-6.8).curveTo(5.6,-9.2,8.2,-9.9).curveTo(6,-8.3,3.3,-5.6).curveTo(1,-3.3,-1,-0.9).lineTo(-2.9,1.7).lineTo(-8.2,9.9).curveTo(-7.9,8.3,-7.4,6.6).closePath();
	this.shape_12.setTransform(-68.8306,-57.7012,0.9994,0.9994,32.8868);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-37.9,19.5).curveTo(-59.9,16.4,-64.3,13.9).curveTo(-68.2,11.6,-60.8,-1.4).lineTo(-52.5,-13.9).lineTo(-44.7,-21.6).lineTo(-32.5,-22.4).curveTo(-16.9,-22.6,0,-19.4).curveTo(18.6,-15.8,39.6,-13.4).curveTo(62,-10.8,65.6,-12.1).lineTo(64.8,12.8).curveTo(50,15.2,33.6,17.6).curveTo(0.8,22.4,-6.9,22.4).lineTo(-7.6,22.4).curveTo(-17.5,22.4,-37.9,19.5).closePath();
	this.shape_13.setTransform(-28.8965,-20.5553,1,1,32.8896);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.7,-62.9,181.3,125.4);
p.frameBounds = [rect];


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-1.6,20.2).curveTo(-10,19.5,-15.5,13.1).curveTo(-20.9,6.7,-20.2,-1.7).curveTo(-19.5,-10,-13.1,-15.5).curveTo(-6.7,-20.9,1.6,-20.2).curveTo(10,-19.5,15.4,-13.2).curveTo(20.9,-6.8,20.2,1.6).curveTo(19.6,10,13.1,15.4).curveTo(7.4,20.3,0.2,20.3).lineTo(-1.6,20.2).closePath();
	this.shape.setTransform(-0.0178,-0.0074,1,1,32.8896);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.3,-20.3,40.7,40.6);
p.frameBounds = [rect];


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#464646").beginStroke().moveTo(-2.6,0.4).lineTo(-2.6,-0.4).lineTo(2.6,-0.4).lineTo(2.6,0.4).closePath();
	this.shape.setTransform(9.625,-3.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#464646").beginStroke().moveTo(-0.8,5.4).curveTo(-1.1,4.9,-1.1,4).lineTo(-1.1,-5.8).lineTo(0.2,-5.8).lineTo(0.2,4.1).lineTo(0.3,4.6).lineTo(0.6,4.7).lineTo(0.9,4.7).lineTo(1.1,5.7).lineTo(0.8,5.7).lineTo(0.3,5.8).curveTo(-0.4,5.8,-0.8,5.4).closePath();
	this.shape_1.setTransform(4.825,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#464646").beginStroke().moveTo(-1.1,5.1).curveTo(-2.1,4.7,-2.6,4).curveTo(-3.3,3.2,-3.6,2.3).curveTo(-3.9,1.3,-3.9,-0).curveTo(-3.9,-1.3,-3.6,-2.3).curveTo(-3.3,-3.1,-2.6,-4).curveTo(-1.9,-4.8,-1.1,-5).curveTo(-0.2,-5.4,0.7,-5.5).curveTo(1.6,-5.4,2.5,-5).curveTo(3.1,-4.6,3.6,-4.1).lineTo(2.9,-3.2).curveTo(2.4,-3.7,1.9,-4).curveTo(1.5,-4.3,0.7,-4.2).curveTo(-0,-4.2,-0.6,-4).curveTo(-1.2,-3.6,-1.7,-3.1).curveTo(-2.1,-2.7,-2.3,-1.8).curveTo(-2.6,-0.9,-2.6,-0.1).curveTo(-2.6,0.9,-2.3,1.7).curveTo(-2.1,2.6,-1.7,3.1).curveTo(-1.3,3.6,-0.7,4).curveTo(-0.1,4.3,0.7,4.3).curveTo(1.4,4.3,2,4).curveTo(2.5,3.7,3.2,3.1).lineTo(3.9,4).curveTo(3.1,4.7,2.5,5).curveTo(1.6,5.4,0.7,5.5).curveTo(-0.2,5.5,-1.1,5.1).closePath();
	this.shape_2.setTransform(-1.95,0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginRadialGradientFill(["#D3EAD1","#D1E8CE","#C9E4C5","#BCDCB7","#AAD3A3","#94C88C","#78BC71","#6DB967"],[0,0.161,0.322,0.482,0.639,0.796,0.949,1],0,0.2,0,0,0.2,21).beginStroke().moveTo(-14.9,14.8).curveTo(-21,8.7,-21,-0).curveTo(-21,-8.6,-14.9,-14.9).curveTo(-8.6,-21,-0,-21).curveTo(8.7,-21,14.8,-14.9).curveTo(21,-8.6,21,-0).curveTo(21,8.7,14.8,14.8).curveTo(8.7,21,-0,21).curveTo(-8.6,21,-14.9,14.8).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, rect = new cjs.Rectangle(-21,-21,42,42), [rect]);


(lib.membraneInternal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#EFD6BD","#EDD2B7","#E9C7A7","#E1B48C","#DEAB7F"],[0,0.227,0.529,0.867,1],0.1,0,0,0.1,0,198).beginStroke().moveTo(-77.5,134.4).curveTo(-113.2,123.3,-140.7,103.1).curveTo(-168.4,82.9,-183.4,56.7).curveTo(-199.1,29.7,-199.1,-0).curveTo(-199.1,-29.7,-183.4,-56.8).curveTo(-168.4,-83,-140.7,-103.2).curveTo(-113.2,-123.4,-77.5,-134.4).curveTo(-40.4,-145.9,0,-145.9).curveTo(40.6,-145.9,77.5,-134.4).curveTo(113.2,-123.4,140.8,-103.2).curveTo(168.4,-83,183.4,-56.8).curveTo(199.1,-29.7,199.1,-0).curveTo(199.1,29.7,183.4,56.7).curveTo(168.4,82.9,140.8,103.1).curveTo(113.2,123.3,77.5,134.4).curveTo(40.6,145.9,0,145.9).curveTo(-40.4,145.9,-77.5,134.4).closePath();
	this.shape.setTransform(199.1,145.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.membraneInternal, rect = new cjs.Rectangle(0,0,398.2,291.8), [rect]);


(lib.graph_mc_basse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#D5D5D5").setStrokeStyle(1,0,0,4).moveTo(-162.4,0).lineTo(162.4,0);
	this.shape.setTransform(192.6,285);

	this.text = new cjs.Text("Outside Cell", "16px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.parent = this;
	this.text.setTransform(262.9,289.35);

	this.text_1 = new cjs.Text("Inside Cell", "16px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 21;
	this.text_1.parent = this;
	this.text_1.setTransform(140.65,289.35);

	this.text_2 = new cjs.Text("0", "16px 'Arial'", "#333333");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 21;
	this.text_2.parent = this;
	this.text_2.setTransform(36.9,266);

	this.text_3 = new cjs.Text("0.2", "16px 'Arial'", "#333333");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 21;
	this.text_3.parent = this;
	this.text_3.setTransform(48.85,233);

	this.text_4 = new cjs.Text("0.4", "16px 'Arial'", "#333333");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 21;
	this.text_4.parent = this;
	this.text_4.setTransform(48.85,200);

	this.text_5 = new cjs.Text("0.6", "16px 'Arial'", "#333333");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 21;
	this.text_5.parent = this;
	this.text_5.setTransform(48.85,167);

	this.text_6 = new cjs.Text("Salinity Level (% NaCl)", "16px 'Arial'", "#333333");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 21;
	this.text_6.parent = this;
	this.text_6.setTransform(2,145.4,1,1,-90);

	this.text_7 = new cjs.Text("0.8", "16px 'Arial'", "#333333");
	this.text_7.textAlign = "right";
	this.text_7.lineHeight = 21;
	this.text_7.parent = this;
	this.text_7.setTransform(48.85,133.95);

	this.text_8 = new cjs.Text("1.0", "16px 'Arial'", "#333333");
	this.text_8.textAlign = "right";
	this.text_8.lineHeight = 21;
	this.text_8.parent = this;
	this.text_8.setTransform(48.85,100.95);

	this.text_9 = new cjs.Text("1.2", "16px 'Arial'", "#333333");
	this.text_9.textAlign = "right";
	this.text_9.lineHeight = 21;
	this.text_9.parent = this;
	this.text_9.setTransform(48.85,67.95);

	this.text_10 = new cjs.Text("1.4", "16px 'Arial'", "#333333");
	this.text_10.textAlign = "right";
	this.text_10.lineHeight = 21;
	this.text_10.parent = this;
	this.text_10.setTransform(48.85,34.95);

	this.text_11 = new cjs.Text("1.6", "16px 'Arial'", "#333333");
	this.text_11.textAlign = "right";
	this.text_11.lineHeight = 21;
	this.text_11.parent = this;
	this.text_11.setTransform(48.85,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#D5D5D5").setStrokeStyle(1,0,0,4).moveTo(-162.4,0).lineTo(162.4,0);
	this.shape_1.setTransform(192.6,253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#D5D5D5").setStrokeStyle(1,0,0,4).moveTo(-162.4,0).lineTo(162.4,0);
	this.shape_2.setTransform(192.6,221);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#D5D5D5").setStrokeStyle(1,0,0,4).moveTo(-162.4,0).lineTo(162.4,0);
	this.shape_3.setTransform(192.6,189);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#D5D5D5").setStrokeStyle(1,0,0,4).moveTo(-162.4,0).lineTo(162.4,0);
	this.shape_4.setTransform(192.6,157);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("#D5D5D5").setStrokeStyle(1,0,0,4).moveTo(-162.4,0).lineTo(162.4,0);
	this.shape_5.setTransform(192.6,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#D5D5D5").setStrokeStyle(1,0,0,4).moveTo(-162.4,0).lineTo(162.4,0);
	this.shape_6.setTransform(192.6,93);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill().beginStroke("#D5D5D5").setStrokeStyle(1,0,0,4).moveTo(-162.4,0).lineTo(162.4,0);
	this.shape_7.setTransform(192.6,61);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#D5D5D5").setStrokeStyle(1,0,0,4).moveTo(-162.4,0).lineTo(162.4,0);
	this.shape_8.setTransform(192.6,29);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,0,0,4).moveTo(-25,-10.5).lineTo(25,-10.5).lineTo(25,10.5).lineTo(-25,10.5).closePath();
	this.shape_9.setTransform(134.05,263.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-25,10.5).lineTo(-25,-10.5).lineTo(25,-10.5).lineTo(25,10.5).closePath();
	this.shape_10.setTransform(134.05,263.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.graph_mc_basse, rect = new cjs.Rectangle(0,0,356,311.5), [rect]);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(3.5,28.4).lineTo(0.6,28).curveTo(-4.2,26.3,-6.7,19.2).curveTo(-9.4,11.5,-5.8,-5.5).curveTo(-2.3,-22.3,2.9,-27.1).curveTo(3.8,-27.9,4.8,-28.4).curveTo(-0.1,-22.7,-3.2,-7.5).curveTo(-6.3,8,-3.6,15.4).curveTo(-1.1,22.5,3.7,24.2).curveTo(7,24.8,7.8,24.5).curveTo(7.2,26.2,6.6,27).lineTo(5.7,27.9).curveTo(5.2,28.4,3.8,28.4).lineTo(3.5,28.4).closePath();
	this.shape.setTransform(7.7545,28.4023);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, rect = new cjs.Rectangle(-0.1,0,15.7,56.8), [rect]);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.1,0.6).curveTo(-3,-0.7,-1.5,-1.2).curveTo(0.9,-1.9,4.9,-1.7).curveTo(1.5,-1.1,-1,-0.2).curveTo(-3.6,0.7,-4.9,1.8).curveTo(-4.7,1.2,-4.1,0.6).closePath();
	this.shape.setTransform(4.925,1.7368);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, rect = new cjs.Rectangle(0,0,9.9,3.6), [rect]);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-4.9,27.1).curveTo(-7.5,26.1,-8.2,24.2).curveTo(-8.8,22.5,-5.4,11.1).curveTo(-1.1,-2.4,0.4,-7.5).curveTo(1.4,-10.8,3.1,-18.7).curveTo(4.3,-23.9,5.4,-25.6).curveTo(6.1,-26.6,7.4,-27).lineTo(7.7,-27.1).curveTo(6.8,-25.4,5.7,-20.3).curveTo(4.1,-13.3,3,-9.6).curveTo(-0.4,2.1,-1.9,7.8).curveTo(-4.5,17.9,-3.8,19.7).curveTo(-3.2,21.6,-0.6,22.6).curveTo(3.7,23.1,8.3,19.6).curveTo(7.2,21.4,5.8,22.7).curveTo(0.9,27.1,-3.7,27.1).lineTo(-4.9,27.1).closePath();
	this.shape.setTransform(8.28,27.1371);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, rect = new cjs.Rectangle(0,0,16.6,54.3), [rect]);


(lib.Path_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(80.7,75.9).curveTo(59.2,74.1,50.2,73.8).curveTo(50.8,52.9,49,36.4).curveTo(45.8,7.1,36,6.8).curveTo(35,6.8,33,6.5).lineTo(33,6.5).lineTo(32.5,6.4).curveTo(11,2.5,-9.2,0.1).curveTo(-46.5,-4.4,-51.6,0.7).curveTo(-59.1,8.2,-53.9,16.2).curveTo(-50.3,21.6,-39,28.9).curveTo(-26.5,36.9,-25.1,38.4).curveTo(-21.1,42.6,-30.1,44.4).curveTo(-43.5,47,-49.9,53.7).curveTo(-55.5,59.4,-56.2,68.7).lineTo(-97.8,66.5).curveTo(-101.7,10.1,-92.2,-36).curveTo(-86.9,-61.8,-79.4,-77.3).curveTo(-3.6,-35.5,-4.8,-34).curveTo(-5.6,-33,-2.3,-32).curveTo(-0.6,-31.5,1.2,-31.2).lineTo(16.5,-29.5).curveTo(14.4,-31.2,11.6,-32.2).curveTo(16.7,-31.8,15.1,-32.8).curveTo(11.1,-35.2,8.8,-37.9).curveTo(3.5,-44,2.1,-53.9).lineTo(74.6,-33.3).curveTo(73.6,-9.5,86.2,35.7).curveTo(92.5,58.4,99,77.2).lineTo(98.8,77.3).curveTo(97.3,77.3,80.7,75.9).closePath().moveTo(9.6,-32.4).lineTo(1.8,-33.3).lineTo(6.8,-33.3).curveTo(9.4,-33,11.6,-32.2).lineTo(9.6,-32.4).closePath();
	this.shape.setTransform(98.9325,77.2568);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18, rect = new cjs.Rectangle(0,0,198,154.5), [rect]);


(lib.Path_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(17.9,110.1).curveTo(0.1,109.2,-19.4,106.4).lineTo(-21.4,93.3).curveTo(-21.8,93.2,-24.2,97.6).curveTo(-26.7,102.1,-27.1,101.9).curveTo(-49.6,91.5,-61.6,87.8).curveTo(-79,82.4,-63.4,95.2).curveTo(-57.7,100,-43.6,101.2).curveTo(-35.8,101.9,-33.1,102.4).curveTo(-27.6,103.4,-24.3,105.7).curveTo(-60,100.2,-80.8,91.4).curveTo(-106.4,80.5,-102.8,66.7).lineTo(-102.5,65.6).curveTo(-93.1,31.5,-77.5,-18.6).curveTo(-67.6,-15.2,-56.7,-17.4).curveTo(-46.5,-19.4,-37.1,-26.1).curveTo(-27.9,-32.5,-21.5,-41.9).curveTo(-14.9,-51.6,-12.7,-62.1).curveTo(-8.5,-82.2,-13.4,-98.4).curveTo(-15.9,-106.4,-19.2,-110.5).curveTo(-16.2,-110.5,-12.3,-110).curveTo(-7.9,-95.2,-7.1,-77.4).curveTo(-5.4,-41.8,-22.9,-26.8).curveTo(-30.1,-15.2,-34.4,-1.7).curveTo(-42.9,25.1,-27.9,33.9).curveTo(-11.9,43.2,9.2,48.8).curveTo(25.7,53.2,34.9,53.2).curveTo(48.1,53.2,63.4,35.1).curveTo(75.8,20.2,86.5,-2.4).curveTo(98.7,-28.1,98.9,-55.9).curveTo(99.1,-69.7,96.8,-78.4).curveTo(100.3,-72.8,102.3,-58).curveTo(104.7,-40.3,100.7,-27.9).curveTo(96.5,-14.5,87.4,5.5).curveTo(76.3,30.1,65.1,48.2).curveTo(54.6,64.9,46.8,89).curveTo(42.9,101.1,41.1,109.9).curveTo(37.5,110.5,30.6,110.5).curveTo(25.3,110.5,17.9,110.1).closePath();
	this.shape.setTransform(103.2008,110.5226);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, rect = new cjs.Rectangle(0,0,206.4,221.1), [rect]);


(lib.Path_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(-54.2,45.2).curveTo(3,48.6,-2.4,47.7).curveTo(-7.8,46.9,-70,30.9).curveTo(-45.5,31.3,-18.4,31.2).curveTo(35.6,31,48.4,28.6).curveTo(55.1,27.4,46.5,21.2).lineTo(20.4,4.9).curveTo(-28.2,-25.1,-43.5,-52.4).lineTo(-35.3,-45.4).curveTo(-23.5,-35.5,-11.2,-27.6).curveTo(30,-1.2,67.7,-2.3).lineTo(70,36.7).curveTo(68,38.5,63.7,40.9).curveTo(54.9,45.6,42.8,48.5).curveTo(26.3,52.4,6.3,52.4).curveTo(-20.8,52.4,-54.2,45.2).closePath();
	this.shape.setTransform(69.975,52.4547);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, rect = new cjs.Rectangle(0,0.1,140,104.8), [rect]);


(lib.Path_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(80.7,75.9).curveTo(59.2,74.1,50.2,73.8).curveTo(51.1,44.5,51,36).curveTo(50.3,4.1,43.9,-3.7).lineTo(31.7,-6.9).curveTo(22.6,-8.2,10.9,-11.8).curveTo(3.6,-14,-1.9,-16.2).curveTo(-12,-19.1,-12,-19.4).curveTo(-22.9,-24.4,-33.5,-25.4).curveTo(-54.8,-27.5,-53.6,-7.8).curveTo(-52.9,2.6,-45.2,13).curveTo(-40.9,18.8,-30.8,28.1).curveTo(-22.7,35.7,-21.9,38.4).curveTo(-20.7,42.5,-30.1,44.4).curveTo(-43.5,47,-49.9,53.7).curveTo(-55.5,59.4,-56.2,68.7).lineTo(-97.8,66.5).curveTo(-101.7,10.1,-92.2,-36).curveTo(-86.9,-61.8,-79.4,-77.3).curveTo(-67.8,-70.9,-41.9,-60.9).curveTo(-24.3,-54.2,3.5,-44.5).lineTo(2.1,-53.9).lineTo(74.6,-33.3).curveTo(73.6,-9.5,86.2,35.7).curveTo(92.5,58.4,99,77.2).lineTo(98.8,77.3).curveTo(97.3,77.3,80.7,75.9).closePath();
	this.shape.setTransform(98.9325,77.2568);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, rect = new cjs.Rectangle(0,0,198,154.5), [rect]);


(lib.Path_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(45.7,107.9).curveTo(43.3,106.9,34.7,102.4).curveTo(16.6,93,4.4,90.8).curveTo(3.9,97.1,-2.7,99.2).curveTo(-9.4,101.3,-17.3,97.3).curveTo(-35.9,87.9,-50.5,82.1).curveTo(-57.9,79.1,-58.3,79.8).curveTo(-58.7,80.6,-49.4,86.2).curveTo(-42,90.7,-29.8,96.7).curveTo(-23.1,100,-10.9,105.7).curveTo(-47.2,105.4,-69,99.6).curveTo(-95.9,92.5,-94.2,78.4).lineTo(-94,77.3).curveTo(-89.6,42.1,-81.5,-9.7).curveTo(-71.2,-7.7,-60.7,-11.4).curveTo(-50.9,-14.9,-42.5,-22.9).curveTo(-34.4,-30.6,-29.3,-40.8).curveTo(-24.2,-51.2,-23.5,-62).curveTo(-22.2,-82.5,-29.1,-97.2).curveTo(-32.5,-104.6,-36.2,-107.9).lineTo(-33,-108.1).lineTo(-29.5,-108.2).lineTo(-29.9,-109.5).curveTo(-22.9,-99.5,-18.9,-83.1).curveTo(-10.8,-50.3,-25.7,-18).curveTo(-32.9,-2.3,-35.8,6.1).curveTo(-40.2,18.7,-40.5,28.1).curveTo(-41,50.8,-16.5,65.8).lineTo(-14.8,66.9).curveTo(-17.4,62.7,-20.3,59).lineTo(-22.8,56.1).lineTo(-13.3,62.6).curveTo(-1.7,70.1,8.8,74.9).curveTo(42.4,90.3,52.4,73.5).curveTo(57.7,64.6,56.9,54).curveTo(56.4,47.3,52.7,36.9).curveTo(49,26.7,48.9,23.6).curveTo(48.6,17.7,54.7,15.6).curveTo(66.8,11.4,71.4,5.1).curveTo(73.4,2.4,76.4,-3.7).lineTo(83.2,-17.2).curveTo(94.7,-38.7,89.9,-68.1).curveTo(87.5,-82.8,82.8,-93.2).curveTo(87.1,-88.1,91,-74.1).curveTo(95.8,-57.2,93.6,-44.4).curveTo(91.5,-31.7,85.9,-8.4).curveTo(79.5,18.1,73.1,38.7).curveTo(63.8,68.8,53,109.3).curveTo(52.4,109.5,51.6,109.5).curveTo(49.4,109.5,45.7,107.9).closePath();
	this.shape.setTransform(94.2844,109.4737);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, rect = new cjs.Rectangle(0,0,188.6,219), [rect]);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(-27.4,45.2).curveTo(-2.9,35.2,-6.3,34.6).curveTo(-11.7,33.8,-62.3,20.8).curveTo(-40.7,20.4,-16.6,19.6).curveTo(31.8,17.9,44.5,15.5).curveTo(48.2,14.8,48.1,13.4).curveTo(48,12.1,44.7,9.7).lineTo(23,-2.9).curveTo(-18.9,-27.5,-34.2,-55).lineTo(-27.1,-49.3).curveTo(-16.6,-40.9,-6.1,-34).curveTo(29.9,-10.4,62.3,-6.9).lineTo(59.1,22.2).curveTo(45.3,27.3,24.4,34).curveTo(-17.4,47.3,-52.6,55.1).curveTo(-39.6,50.2,-27.4,45.2).closePath();
	this.shape.setTransform(62.3,55.1481);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, rect = new cjs.Rectangle(0,0.1,124.6,110.1), [rect]);


(lib.Path_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#477A8E").beginStroke().moveTo(-8.9,101.1).curveTo(-39.1,97.2,-72.2,84.9).curveTo(-80.9,45.6,-84.6,7.9).curveTo(-86.5,-11,-86.7,-22).curveTo(-83.7,-16.1,-79.8,-15).curveTo(-76,-13.9,-72.2,-17.4).curveTo(-63.6,-25.5,-61.1,-48.6).curveTo(-59.4,-65.2,-60,-76.8).curveTo(-60.5,-87.1,-63,-95.9).curveTo(-63.7,-97.4,-64.4,-100.1).lineTo(-65.1,-102.9).curveTo(-59.6,-92.7,-55.1,-76.7).curveTo(-45.9,-44.7,-50.2,-15.6).curveTo(-53.7,7.6,-50.6,16.5).curveTo(-47.2,26.5,-32.6,30.1).curveTo(-18.8,33.5,-22.2,35.6).curveTo(-24.9,37.2,-38.3,37.7).curveTo(-49.3,38.2,-51.2,43.4).lineTo(-50,47.1).curveTo(-47.9,51.5,-43.6,55.3).curveTo(-29.8,67.8,1.1,70.3).curveTo(26,72.4,43.5,69.4).curveTo(52.3,67.9,56.1,66).curveTo(66.4,61.9,71.9,53.5).curveTo(74.8,49.2,77,43.6).curveTo(79.1,35,71.5,37.8).curveTo(68.2,39.1,67.9,38.9).curveTo(67.2,38.5,70.5,34.2).curveTo(72.6,31.5,73.8,28.5).lineTo(76.9,20.4).curveTo(79.1,14.7,80.2,3.5).curveTo(81.8,-14,79.1,-36.2).curveTo(76.1,-60.3,62,-84).curveTo(55.6,-94.8,49.7,-101.6).lineTo(56.5,-94).curveTo(65.4,-83.5,69.8,-74.9).curveTo(79,-55.6,82.6,-42.6).curveTo(88.6,-20.6,85.8,1.8).curveTo(82.2,31.7,75.1,92.5).curveTo(49.1,102.9,17.8,102.9).curveTo(4.9,102.9,-8.9,101.1).closePath();
	this.shape_1.setTransform(86.6821,102.8923);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_1, rect = new cjs.Rectangle(0,0,173.4,205.8), [rect]);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(-7.6,49).curveTo(-9.1,41.3,-10.9,20.1).curveTo(-12.6,0.6,-13.4,-10.9).curveTo(-10.5,-5,-6.5,-3.9).curveTo(-2.7,-2.8,1.1,-6.3).curveTo(9.7,-14.4,12.1,-37.5).curveTo(12.7,-43.4,12.8,-49).curveTo(14.1,-39.4,12.7,-26.9).curveTo(9.9,-1.8,-3.9,13.1).curveTo(-1.7,12,1.4,10).curveTo(7.5,5.9,11.6,1.2).lineTo(7.5,8.7).curveTo(2.9,16.9,0.4,20.7).curveTo(-1,22.9,-4.2,36.2).lineTo(-7,49).closePath();
	this.shape.setTransform(13.4314,49.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, rect = new cjs.Rectangle(0,0,26.9,98.1), [rect]);


(lib.Path_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(7.4,6).curveTo(-24.4,2.3,-36.8,-7.6).lineTo(-13.5,-2.1).curveTo(15.9,4.8,36.8,7.6).lineTo(34.1,7.6).curveTo(21.8,7.6,7.4,6).closePath();
	this.shape.setTransform(36.875,7.66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_0, rect = new cjs.Rectangle(0.1,0.1,73.7,15.2), [rect]);


(lib.CompoundPath = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(-92,50.3).lineTo(-70.3,-50.2).lineTo(66.1,-39.5).curveTo(66,-38.4,71.5,-39).curveTo(77,-39.6,77,-38.5).lineTo(77,-39.1).lineTo(92,46.9).lineTo(80.4,47.3).curveTo(77.6,28.4,69.9,-9.3).curveTo(60.1,-8.1,48.2,-7.9).curveTo(31.8,-7.4,21.9,-9.1).lineTo(21.6,-9.1).curveTo(19.5,-8.8,29.2,-6.2).curveTo(38.5,-3.8,32.7,-3.4).curveTo(18.8,-2.2,-7.1,-3.7).curveTo(-34.9,-5.4,-41.4,-8.6).curveTo(-45.9,-10.4,-47.4,-7.8).curveTo(-49.1,-5,-42.7,0.1).curveTo(-37.2,4.4,-39,8.6).curveTo(-39.7,10.4,-45,15.9).curveTo(-49.4,20.4,-49.1,23.8).curveTo(-48.8,28.9,-39.8,34.9).lineTo(-21.6,50.3).closePath();
	this.shape.setTransform(88,50.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, rect = new cjs.Rectangle(-4,0,184,100.5), [rect]);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(7.2,102.4).lineTo(9.8,54.3).curveTo(9.2,49,-6.8,63.9).curveTo(-12.5,69.2,-18,75.2).curveTo(-22.3,79.8,-23.3,81.3).lineTo(-8.5,57.1).curveTo(5.6,34,6.9,29.6).curveTo(9.5,20.7,10.5,-25.2).curveTo(10.7,-29,5.1,-13.5).curveTo(2.4,-5.8,-0.4,2.6).curveTo(1.5,-5.7,3.3,-16.8).curveTo(7,-38.9,6.7,-52.4).curveTo(6.2,-80.7,-4.4,-107.2).curveTo(-11.7,-125.3,-20.5,-136.3).lineTo(-13.4,-128.8).lineTo(-9.5,-123.8).lineTo(-9.5,-123.8).lineTo(-4,-115.6).lineTo(-4,-115.6).lineTo(1.2,-105.9).lineTo(1.2,-105.9).lineTo(2.6,-102.7).lineTo(3.4,-100.9).lineTo(5.8,-94.7).lineTo(5.8,-94.7).lineTo(9.5,-81.9).lineTo(9.5,-81.9).lineTo(11.1,-74.3).lineTo(13,-60.3).lineTo(13.5,-51.3).curveTo(12.4,-45.2,13.8,-35.9).curveTo(14.6,0.5,15.1,56.8).lineTo(23.3,121.4).lineTo(5.7,136.3).curveTo(5.6,134.2,7.2,102.4).closePath();
	this.shape.setTransform(23.5375,136.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, rect = new cjs.Rectangle(0.3,0,46.5,272.6), [rect]);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(4.4,-21.9).lineTo(4.5,-19.3).curveTo(4.7,-17.7,4.6,-16.8).curveTo(4.5,-15.8,4.7,-11.8).curveTo(5,-7.5,4.9,-6.5).curveTo(3.1,-2.6,-5,21.9).closePath();
	this.shape.setTransform(4.9542,21.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, rect = new cjs.Rectangle(0,0,9.9,43.7), [rect]);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#603913").beginStroke().moveTo(2.1,22).curveTo(-6.3,16.2,-6.1,13.9).curveTo(-6,13.4,-6.5,12.4).curveTo(-6.7,12,-7.3,11).lineTo(-8.5,9.5).lineTo(-19.8,-3.7).lineTo(-20,-4).lineTo(-23.7,-8.5).curveTo(-26,-11.7,-25.6,-12.6).lineTo(-25.4,-13).curveTo(-23.7,-16,-15.8,-27.1).lineTo(-15.7,-27.1).lineTo(-15.2,-26.9).lineTo(-14.5,-26.6).curveTo(-14.1,-21.9,-8.8,-20.5).lineTo(-1,-19.1).lineTo(9.8,-11.8).lineTo(11.6,-11.7).lineTo(25.6,8.2).curveTo(25.9,13.2,19.6,6.6).lineTo(13.3,-1).curveTo(11.2,7.4,10.7,18.1).curveTo(10.4,23.5,10.6,27.1).curveTo(6.3,24.8,2.1,22).closePath();
	this.shape.setTransform(25.6522,27.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, rect = new cjs.Rectangle(0,0,51.3,54.3), [rect]);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(4.5,10.1).curveTo(-21.3,5.8,-29.1,-0.2).curveTo(11.9,-6.5,29.1,-11.4).curveTo(4.5,-3.1,-9.5,0.1).curveTo(-18.2,2.1,-10.1,5.3).curveTo(-3.8,7.7,8.1,9.7).curveTo(18.1,11.3,15.7,11.4).lineTo(15.5,11.4).curveTo(12.9,11.4,4.5,10.1).closePath();
	this.shape.setTransform(29.775,11.4259);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, rect = new cjs.Rectangle(0.7,0,58.3,22.9), [rect]);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(-65.1,121).lineTo(-65.3,120.9).lineTo(-55.4,52.6).lineTo(-74.1,-45.8).curveTo(-71.6,-46.3,-67.9,-49.6).curveTo(-63.7,-53.5,-59.9,-59.2).curveTo(-49.9,-74.7,-48.2,-95.7).curveTo(-47.7,-101.3,-48.6,-108).curveTo(-49.8,-117,-53.5,-126.8).curveTo(-49.7,-119.2,-46.4,-107.9).curveTo(-39.8,-85.3,-42.5,-66.7).curveTo(-46.1,-41.8,-41,-28.9).curveTo(-35.1,-13.8,-17.7,-17.5).curveTo(0.7,-21.4,1.4,-16.4).curveTo(2,-11.5,-14.8,-4.3).curveTo(-26.9,0.8,-33.1,9.7).curveTo(-36,14,-35,16.9).curveTo(-33.8,20.2,-27.6,21).curveTo(-15.6,22.7,-23.6,28.8).curveTo(-25.6,30.3,-30.5,33).curveTo(-34.3,35.1,-34.3,35.5).curveTo(-34.6,38.6,-22.7,38.8).curveTo(-5.2,39,35.8,32.5).curveTo(29.6,35.7,20.1,39.6).curveTo(1.1,47.3,-15.4,49.9).curveTo(-23.2,51.2,-23.3,52.7).curveTo(-23.4,54.1,-17.2,56).curveTo(-15.1,56.7,21.8,65).curveTo(6.7,64.7,-6.2,65.8).curveTo(-32,68,-20.8,75.3).curveTo(-4.8,85.7,18.9,95.2).curveTo(46.9,106.4,65.7,107.4).curveTo(76.5,108.1,73.4,114.2).curveTo(70.7,119.4,59,126.8).closePath();
	this.shape.setTransform(74.0944,126.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, rect = new cjs.Rectangle(0,0,148.2,253.5), [rect]);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#477A8E").beginStroke().moveTo(9.7,8.3).curveTo(-2.5,-10.1,-6.7,-13.1).curveTo(-8.9,-14.7,-7.9,-11.7).curveTo(-7.4,-10.2,-6.4,-8.4).lineTo(-8.6,-11.5).curveTo(-10.8,-14.3,-15.3,-18.7).curveTo(-21.5,-24.5,-23.1,-26.2).curveTo(-20.4,-25.7,-16.6,-25.4).curveTo(-12.7,-25.1,-8.9,-24.4).curveTo(-4.4,-22.2,1.8,-16.9).curveTo(14.2,-6.4,23.1,8.7).curveTo(19.6,5.9,15.5,0.8).curveTo(6.7,-10,13,7).curveTo(16.2,15.6,21.1,26.2).curveTo(15.8,17.6,9.7,8.3).closePath();
	this.shape_1.setTransform(23.075,26.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, rect = new cjs.Rectangle(0,0,46.2,52.5), [rect]);


(lib.Path_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#477A8E").beginStroke().moveTo(5.3,6.6).curveTo(-18.4,-6.6,-27.2,-17.6).lineTo(-7,-3.7).curveTo(16.5,12.4,27.2,17.6).curveTo(17.2,13.2,5.3,6.6).closePath();
	this.shape_1.setTransform(27.3,17.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_1, rect = new cjs.Rectangle(0.1,0.1,54.5,35.2), [rect]);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#477A8E").beginStroke().moveTo(-11.6,20.5).curveTo(-13.3,10.7,-12.8,9.4).curveTo(-10.3,8.8,-6.8,5.6).curveTo(-2.7,1.8,0.9,-4).curveTo(10.5,-19.2,12.2,-40.3).curveTo(12.4,-43.2,12.3,-46.2).curveTo(13.5,-37.1,12,-25.1).curveTo(9,-2.2,-3.9,11.7).curveTo(3.2,4.5,7.7,1.3).lineTo(2.9,11.3).curveTo(-2.5,22.1,-5.6,25.6).curveTo(-7.3,27.6,-7.2,37.1).curveTo(-7.1,41.9,-6.7,46.2).curveTo(-10.3,28.3,-11.6,20.5).closePath();
	this.shape_1.setTransform(12.8537,46.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, rect = new cjs.Rectangle(0,0.2,25.7,92.4), [rect]);


(lib.Path_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#477A8E").beginStroke().moveTo(3.6,42).curveTo(3,35.8,-5.6,42.2).curveTo(-7.5,43.7,-12,47.5).curveTo(-15.4,50.4,-16.2,50.7).curveTo(-15,50.3,-8.3,36.4).lineTo(0,18.4).curveTo(2.9,12.2,3,-7.1).curveTo(2.7,-27.7,2.8,-33.1).curveTo(2.9,-36.9,-3.7,-25.9).curveTo(-7,-20.4,-10.4,-14.1).curveTo(-8.4,-21.4,-6,-31.3).curveTo(-1.1,-51.2,1.2,-64.6).curveTo(4.1,-81.7,-1.2,-103.4).curveTo(-3.3,-112.2,-5.8,-118.7).curveTo(-0.6,-106.2,1.9,-96.4).curveTo(6,-80.3,5.8,-62.7).curveTo(5.4,-30.4,7.4,45.2).lineTo(16.2,114.7).curveTo(15.9,114.7,11.6,116.7).lineTo(7.4,118.7).curveTo(5,55.6,3.6,42).closePath();
	this.shape_1.setTransform(16.175,121.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, rect = new cjs.Rectangle(0,2.9,32.4,237.5), [rect]);


(lib.Path_2_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#477A8E").beginStroke().moveTo(4,-19).lineTo(4.2,-16.4).lineTo(4.4,-13.2).curveTo(4.4,-11.2,4,-6.7).curveTo(2.2,-2.7,-4.4,19).closePath();
	this.shape_1.setTransform(4.425,19);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0_1, rect = new cjs.Rectangle(0,0,8.9,38), [rect]);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#603913").beginStroke().moveTo(-1.6,22.4).curveTo(-9,15.5,-8.4,13.2).curveTo(-8.3,12.7,-8.6,11.7).lineTo(-11.9,5.4).lineTo(-17.9,-4.2).lineTo(-19.2,-6.3).lineTo(-19.5,-6.6).lineTo(-20.6,-8.5).lineTo(-22.4,-11.7).curveTo(-24.2,-15.2,-23.7,-16).lineTo(-23.4,-16.3).lineTo(-23.3,-16.4).curveTo(-21.3,-19,-11.7,-28.8).lineTo(-11.6,-28.9).lineTo(-11.1,-28.6).curveTo(-10.8,-28.2,-10.5,-28.1).curveTo(-10.7,-26.3,-9.9,-24.6).curveTo(-8.7,-22.5,-5.8,-21.1).lineTo(1.6,-18.7).lineTo(11.2,-9.8).lineTo(13,-9.3).lineTo(23.8,12.5).curveTo(23.3,17.5,18.1,9.9).lineTo(13,1.5).curveTo(9.6,9.4,7.5,19.9).curveTo(6.4,25.2,6,28.8).curveTo(2.2,25.9,-1.6,22.4).closePath();
	this.shape_1.setTransform(23.7707,28.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, rect = new cjs.Rectangle(0,0,47.6,57.7), [rect]);


(lib.Path_1_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#477A8E").beginStroke().moveTo(10.2,9.9).curveTo(6.2,8.8,0.2,6.1).curveTo(-18.5,-2,-23.1,-10.3).curveTo(-15.7,-9.2,-6.5,-8.4).curveTo(11.8,-6.6,23.1,-7.3).curveTo(19.2,-6.4,13.7,-5.7).curveTo(2.7,-4.3,-5.6,-5).curveTo(-14.6,-5.8,-7.1,-0.2).curveTo(-0.6,4.7,9.7,9.1).curveTo(12.6,10.3,12,10.3).lineTo(10.2,9.9).closePath();
	this.shape_1.setTransform(23.075,10.3133);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1_1, rect = new cjs.Rectangle(0,0,46.2,20.7), [rect]);


(lib.Path_1_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#477A8E").beginStroke().moveTo(-65.1,121).lineTo(-65.3,120.9).lineTo(-53.9,42.3).curveTo(-58.6,18.9,-66.8,-15.8).lineTo(-74.1,-45.8).curveTo(-71.6,-46.3,-67.9,-49.6).curveTo(-63.7,-53.5,-59.9,-59.2).curveTo(-49.9,-74.7,-48.2,-95.7).curveTo(-47.7,-101.3,-48.6,-108).curveTo(-49.8,-117,-53.5,-126.8).curveTo(-49.2,-119.5,-45.3,-108.5).curveTo(-37.7,-86.5,-40.4,-68).curveTo(-43.6,-45.3,-38.4,-33.7).curveTo(-33.1,-21.8,-17.9,-19.7).curveTo(-3.8,-17.9,-6.9,-15.5).curveTo(-9.4,-13.6,-22.6,-11.6).curveTo(-28.1,-10.7,-32.4,-7).curveTo(-36.5,-3.5,-38,1.2).curveTo(-39.6,6.1,-37.7,10.2).curveTo(-35.6,14.8,-29.6,17).curveTo(-19.1,21,-26,25.4).curveTo(-28.3,26.9,-32.1,28.1).curveTo(-35.3,29.2,-36.1,29).curveTo(-37.3,28.8,-33.6,30.6).curveTo(-29.6,32.6,-23.7,34.3).curveTo(-5.5,39.7,18.6,39.7).curveTo(16.2,41.9,11,43.9).curveTo(0.6,48.1,-13.2,47.7).curveTo(-21.1,47.5,-21.9,49.5).curveTo(-22.6,51.4,-17.1,54.8).curveTo(-5.6,61.8,20.3,69.8).curveTo(5.5,68.3,-7,68.2).curveTo(-32,68,-20.8,75.3).curveTo(-4.8,85.7,18.9,95.2).curveTo(46.9,106.4,65.7,107.4).curveTo(76.5,108.1,73.4,114.2).curveTo(70.7,119.4,59,126.8).closePath();
	this.shape_1.setTransform(74.0944,126.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, rect = new cjs.Rectangle(0,0,148.2,253.5), [rect]);


(lib.Path_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#477A8E").beginStroke().moveTo(2.9,-1.6).curveTo(2.2,-0.8,3.3,1.6).curveTo(4.3,4,5.9,5.7).curveTo(9.1,9.1,6.1,6.8).curveTo(3,4.4,-3.5,-1.9).curveTo(-9.3,-7.5,-12.4,-7.4).curveTo(-14,-7.3,-14.5,-6.1).lineTo(-16.6,-9.1).curveTo(-9.2,-9.6,-3.9,-8.5).curveTo(-1.2,-8,-0.1,-7.4).curveTo(1.9,-6,4.9,-3.2).curveTo(11,2.4,16.6,9.3).curveTo(4.6,-3.7,2.9,-1.6).closePath();
	this.shape_2.setTransform(16.575,9.2333);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, rect = new cjs.Rectangle(0,0,33.2,18.6), [rect]);


(lib.Path_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#477A8E").beginStroke().moveTo(2.4,6.6).curveTo(-21.7,-7.5,-25.8,-18.4).lineTo(-6.8,-3.8).curveTo(15.2,13.3,25.8,18.4).curveTo(14.5,13.6,2.4,6.6).closePath();
	this.shape_2.setTransform(25.775,18.4499);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_2, rect = new cjs.Rectangle(0,0.1,51.6,36.8), [rect]);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#477A8E").beginStroke().moveTo(-10.5,19.8).curveTo(-12.9,10.3,-13.2,10).curveTo(-10.8,9.4,-7.1,6.2).curveTo(-2.9,2.3,0.9,-3.5).curveTo(10.9,-18.9,12.6,-39.9).curveTo(12.8,-42.9,12.7,-45.8).curveTo(13.9,-36.7,12.4,-24.8).curveTo(9.2,-1,-4.5,13).curveTo(6,8.9,10.8,5.5).curveTo(7.8,8.5,4.2,11.6).curveTo(-2.9,17.8,-5.5,18).curveTo(-8.1,18.2,-6.7,32).curveTo(-5.9,38.9,-4.7,45.8).curveTo(-7.5,31.8,-10.5,19.8).closePath();
	this.shape_2.setTransform(13.2868,45.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, rect = new cjs.Rectangle(0.1,0.2,26.5,91.6), [rect]);


(lib.Path_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#477A8E").beginStroke().moveTo(6.1,39.6).curveTo(5.4,33.2,-6.3,34.7).curveTo(-11.2,35.4,-20,38.1).curveTo(-18.3,37.5,-8.8,30.5).curveTo(1.2,23,3.9,19.9).curveTo(6.8,16.5,6.9,-5.6).curveTo(6.6,-29.7,6.7,-35.1).curveTo(6.8,-38.9,0.4,-31).curveTo(-2.8,-27,-6.1,-22.3).curveTo(-4.2,-27.2,-1.9,-34.7).curveTo(2.7,-49.7,5,-63.1).curveTo(8,-80.2,3.5,-101.9).curveTo(1.2,-112.8,-1.6,-120.2).curveTo(3.8,-107.5,6.5,-94.9).curveTo(9.8,-79.4,9.6,-61.3).curveTo(9.2,-29,11.2,46.7).lineTo(20,116.2).curveTo(19.8,116.2,15.5,118.2).lineTo(11.2,120.2).curveTo(7.5,53.2,6.1,39.6).closePath();
	this.shape_2.setTransform(20.0375,120.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_2, rect = new cjs.Rectangle(0.1,0,40,240.4), [rect]);


(lib.Path_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#477A8E").beginStroke().moveTo(4.1,-14.9).lineTo(3.8,-10.5).lineTo(3.4,-3.9).curveTo(1.5,0.1,-4.1,14.9).closePath();
	this.shape_2.setTransform(4.1,14.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_2, rect = new cjs.Rectangle(0,0,8.2,29.9), [rect]);


(lib.Path_1_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#477A8E").beginStroke().moveTo(10.2,9.9).curveTo(6.2,8.8,0.2,6.1).curveTo(-18.5,-2,-23.1,-10.3).curveTo(-15.7,-9.2,-6.5,-8.4).curveTo(11.8,-6.6,23.1,-7.3).curveTo(19.2,-6.4,13.7,-5.7).curveTo(2.7,-4.3,-5.6,-5).curveTo(-14.6,-5.8,-7.1,-0.2).curveTo(-0.6,4.7,9.7,9.1).curveTo(12.6,10.3,12,10.3).lineTo(10.2,9.9).closePath();
	this.shape_2.setTransform(23.075,10.3133);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0_2, rect = new cjs.Rectangle(0,0,46.2,20.7), [rect]);


(lib.Path_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#477A8E").beginStroke().moveTo(-65.1,121).lineTo(-65.3,120.9).lineTo(-53.9,42.3).curveTo(-58.6,18.9,-66.8,-15.8).lineTo(-74.1,-45.8).curveTo(-71.6,-46.3,-67.9,-49.6).curveTo(-63.7,-53.5,-59.9,-59.2).curveTo(-49.9,-74.7,-48.2,-95.7).curveTo(-47.7,-101.3,-48.6,-108).curveTo(-49.8,-117,-53.5,-126.8).curveTo(-49.2,-119.5,-45.3,-108.5).curveTo(-37.7,-86.5,-40.4,-68).curveTo(-43.6,-45.3,-38.4,-33.7).curveTo(-33.1,-21.8,-17.9,-19.7).curveTo(-3.8,-17.9,-6.9,-15.5).curveTo(-9.4,-13.6,-22.6,-11.6).curveTo(-28.1,-10.7,-32.4,-7).curveTo(-36.5,-3.5,-38,1.2).curveTo(-39.6,6.1,-37.7,10.2).curveTo(-35.6,14.8,-29.6,17).curveTo(-19.1,21,-26,25.4).curveTo(-28.3,26.9,-32.1,28.1).curveTo(-35.3,29.2,-36.1,29).curveTo(-37.3,28.8,-33.6,30.6).curveTo(-29.6,32.6,-23.7,34.3).curveTo(-5.5,39.7,18.6,39.7).curveTo(16.2,41.9,11,43.9).curveTo(0.6,48.1,-13.2,47.7).curveTo(-21.1,47.5,-21.9,49.5).curveTo(-22.6,51.4,-17.1,54.8).curveTo(-5.6,61.8,20.3,69.8).curveTo(5.5,68.3,-7,68.2).curveTo(-32,68,-20.8,75.3).curveTo(-4.8,85.7,18.9,95.2).curveTo(46.9,106.4,65.7,107.4).curveTo(76.5,108.1,73.4,114.2).curveTo(70.7,119.4,59,126.8).closePath();
	this.shape_3.setTransform(74.0944,126.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, rect = new cjs.Rectangle(0,0,148.2,253.5), [rect]);


(lib.Path_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#477A8E").beginStroke().moveTo(2.4,6.6).curveTo(-21.7,-7.5,-25.8,-18.4).lineTo(-6.8,-3.8).curveTo(15.2,13.3,25.8,18.4).curveTo(14.5,13.6,2.4,6.6).closePath();
	this.shape_3.setTransform(25.775,18.4499);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_3, rect = new cjs.Rectangle(0,0.1,51.6,36.8), [rect]);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#477A8E").beginStroke().moveTo(-10.5,19.8).curveTo(-12.9,10.3,-13.2,10).curveTo(-10.8,9.4,-7.1,6.2).curveTo(-2.9,2.3,0.9,-3.5).curveTo(10.9,-18.9,12.6,-39.9).curveTo(12.8,-42.9,12.7,-45.8).curveTo(13.9,-36.7,12.4,-24.8).curveTo(9.2,-1,-4.5,13).curveTo(6,8.9,10.8,5.5).curveTo(7.8,8.5,4.2,11.6).curveTo(-2.9,17.8,-5.5,18).curveTo(-8.1,18.2,-6.7,32).curveTo(-5.9,38.9,-4.7,45.8).curveTo(-7.5,31.8,-10.5,19.8).closePath();
	this.shape_3.setTransform(13.2868,45.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, rect = new cjs.Rectangle(0.1,0.2,26.5,91.6), [rect]);


(lib.Path_3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#477A8E").beginStroke().moveTo(6.1,39.6).curveTo(5.4,33.2,-6.3,34.7).curveTo(-11.2,35.4,-20,38.1).curveTo(-18.3,37.5,-8.8,30.5).curveTo(1.2,23,3.9,19.9).curveTo(6.8,16.5,6.9,-5.6).curveTo(6.6,-29.7,6.7,-35.1).curveTo(6.8,-38.9,0.4,-31).curveTo(-2.8,-27,-6.1,-22.3).curveTo(-4.2,-27.2,-1.9,-34.7).curveTo(2.7,-49.7,5,-63.1).curveTo(8,-80.2,3.5,-101.9).curveTo(1.2,-112.8,-1.6,-120.2).curveTo(3.8,-107.5,6.5,-94.9).curveTo(9.8,-79.4,9.6,-61.3).curveTo(9.2,-29,11.2,46.7).lineTo(20,116.2).curveTo(19.8,116.2,15.5,118.2).lineTo(11.2,120.2).curveTo(7.5,53.2,6.1,39.6).closePath();
	this.shape_3.setTransform(20.0375,120.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_3, rect = new cjs.Rectangle(0.1,0,40,240.4), [rect]);


(lib.Path_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#477A8E").beginStroke().moveTo(4.1,-14.9).lineTo(3.8,-10.5).lineTo(3.4,-3.9).curveTo(1.5,0.1,-4.1,14.9).closePath();
	this.shape_3.setTransform(4.1,14.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3, rect = new cjs.Rectangle(0,0,8.2,29.9), [rect]);


(lib.Path_1_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#477A8E").beginStroke().moveTo(10.2,9.9).curveTo(6.2,8.8,0.2,6.1).curveTo(-18.5,-2,-23.1,-10.3).curveTo(-15.7,-9.2,-6.5,-8.4).curveTo(11.8,-6.6,23.1,-7.3).curveTo(19.2,-6.4,13.7,-5.7).curveTo(2.7,-4.3,-5.6,-5).curveTo(-14.6,-5.8,-7.1,-0.2).curveTo(-0.6,4.7,9.7,9.1).curveTo(12.6,10.3,12,10.3).lineTo(10.2,9.9).closePath();
	this.shape_3.setTransform(23.075,10.3133);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0_3, rect = new cjs.Rectangle(0,0,46.2,20.7), [rect]);


(lib.Path_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#477A8E").beginStroke().moveTo(-65.1,121).lineTo(-65.3,120.9).lineTo(-53.9,42.3).curveTo(-58.6,18.9,-66.8,-15.8).lineTo(-74.1,-45.8).curveTo(-71.6,-46.3,-67.9,-49.6).curveTo(-63.7,-53.5,-59.9,-59.2).curveTo(-49.9,-74.7,-48.2,-95.7).curveTo(-47.7,-101.3,-48.6,-108).curveTo(-49.8,-117,-53.5,-126.8).curveTo(-49.2,-119.5,-45.3,-108.5).curveTo(-37.7,-86.5,-40.4,-68).curveTo(-43.6,-45.3,-38.4,-33.7).curveTo(-33.1,-21.8,-17.9,-19.7).curveTo(-3.8,-17.9,-6.9,-15.5).curveTo(-9.4,-13.6,-22.6,-11.6).curveTo(-28.1,-10.7,-32.4,-7).curveTo(-36.5,-3.5,-38,1.2).curveTo(-39.6,6.1,-37.7,10.2).curveTo(-35.6,14.8,-29.6,17).curveTo(-19.1,21,-26,25.4).curveTo(-28.3,26.9,-32.1,28.1).curveTo(-35.3,29.2,-36.1,29).curveTo(-37.3,28.8,-33.6,30.6).curveTo(-29.6,32.6,-23.7,34.3).curveTo(-5.5,39.7,18.6,39.7).curveTo(16.2,41.9,11,43.9).curveTo(0.6,48.1,-13.2,47.7).curveTo(-21.1,47.5,-21.9,49.5).curveTo(-22.6,51.4,-17.1,54.8).curveTo(-5.6,61.8,20.3,69.8).curveTo(5.5,68.3,-7,68.2).curveTo(-32,68,-20.8,75.3).curveTo(-4.8,85.7,18.9,95.2).curveTo(46.9,106.4,65.7,107.4).curveTo(76.5,108.1,73.4,114.2).curveTo(70.7,119.4,59,126.8).closePath();
	this.shape_4.setTransform(74.0944,126.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5, rect = new cjs.Rectangle(0,0,148.2,253.5), [rect]);


(lib.Path_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#477A8E").beginStroke().moveTo(2.4,6.6).curveTo(-21.7,-7.5,-25.8,-18.4).lineTo(-6.8,-3.8).curveTo(15.2,13.3,25.8,18.4).curveTo(14.5,13.6,2.4,6.6).closePath();
	this.shape_4.setTransform(25.775,18.4499);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_4, rect = new cjs.Rectangle(0,0.1,51.6,36.8), [rect]);


(lib.Path_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#477A8E").beginStroke().moveTo(-10.5,19.8).curveTo(-12.9,10.3,-13.2,10).curveTo(-10.8,9.4,-7.1,6.2).curveTo(-2.9,2.3,0.9,-3.5).curveTo(10.9,-18.9,12.6,-39.9).curveTo(12.8,-42.9,12.7,-45.8).curveTo(13.9,-36.7,12.4,-24.8).curveTo(9.2,-1,-4.5,13).curveTo(6,8.9,10.8,5.5).curveTo(7.8,8.5,4.2,11.6).curveTo(-2.9,17.8,-5.5,18).curveTo(-8.1,18.2,-6.7,32).curveTo(-5.9,38.9,-4.7,45.8).curveTo(-7.5,31.8,-10.5,19.8).closePath();
	this.shape_4.setTransform(13.2868,45.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, rect = new cjs.Rectangle(0.1,0.2,26.5,91.6), [rect]);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFAFAF").beginStroke().moveTo(-10.8,0.6).curveTo(-7.2,-0,-0,-0.5).curveTo(6.7,-0.8,10.8,-0.6).curveTo(6.8,0.1,0,0.5).curveTo(-3.6,0.7,-6.7,0.7).lineTo(-10.8,0.6).closePath();
	this.shape.setTransform(10.825,0.6703);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, rect = new cjs.Rectangle(0,0,21.7,1.4), [rect]);


(lib.Symbol70 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.2).beginStroke().moveTo(-0.5,4.2).curveTo(-2.2,3.8,-3.3,2.3).curveTo(-4.3,0.8,-4.1,-1).curveTo(-3.9,-2.8,-2.5,-3.7).curveTo(-1,-4.6,0.7,-4.2).curveTo(2.4,-3.7,3.4,-2.2).curveTo(4.4,-0.6,4.1,1.1).curveTo(3.9,2.8,2.5,3.7).curveTo(1.6,4.3,0.5,4.3).lineTo(-0.5,4.2).closePath();
	this.shape.setTransform(27.584,38.3667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#56331D").beginStroke().moveTo(5.8,8.8).curveTo(5.4,8.8,4,7.9).curveTo(1.9,6.3,0.1,3.9).lineTo(-4.3,-2.4).lineTo(-6.5,-5.8).curveTo(-6.8,-6.4,-6.3,-6.7).lineTo(-6.3,-6.8).curveTo(-5.6,-7.1,-5.3,-6.5).lineTo(1.1,3.2).curveTo(3.1,6,5.3,7.3).curveTo(5.4,2.5,3.6,-0.3).curveTo(3.2,-1,0.5,-4.5).lineTo(-2,-7.8).curveTo(-2.2,-8,-2.2,-8.3).curveTo(-2.1,-8.6,-1.9,-8.7).curveTo(-1.7,-8.9,-1.4,-8.9).curveTo(-1.1,-8.8,-1,-8.6).lineTo(4.7,-1).curveTo(5.5,0.2,6,2.1).curveTo(6.8,5,6.5,8.3).curveTo(6.5,8.6,6.3,8.8).lineTo(6,8.9).lineTo(5.8,8.8).closePath();
	this.shape_1.setTransform(20.4617,29.815);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#DB71A8","#D96FA6","#D0689F","#C25B94","#B24D87"],[0,0.42,0.659,0.855,1],0,0,0,0,0,4.8).beginStroke().moveTo(-1.1,4.6).curveTo(-3.1,4.4,-4.1,2.9).curveTo(-5.2,1.4,-4.7,-0.6).curveTo(-4.3,-2.5,-2.5,-3.7).curveTo(-0.7,-4.8,1.2,-4.6).curveTo(3.2,-4.3,4.2,-2.7).curveTo(5.2,-1.1,4.7,0.7).curveTo(4.2,2.6,2.5,3.7).curveTo(1.1,4.6,-0.4,4.6).lineTo(-1.1,4.6).closePath();
	this.shape_2.setTransform(4.8552,4.6258);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#56331D").beginStroke().moveTo(1,8.7).curveTo(-4,2.6,-4.9,1.3).curveTo(-7.4,-2.4,-6.4,-8.3).curveTo(-6.4,-8.6,-6.1,-8.8).curveTo(-5.9,-9,-5.5,-9).lineTo(-4.9,-8.8).curveTo(-4.2,-8.6,-3.6,-8.1).curveTo(-1.3,-6.7,0.4,-4.1).curveTo(2.2,-1.5,4.5,2.4).lineTo(6.6,5.9).curveTo(6.9,6.4,6.4,6.8).lineTo(6.3,6.8).curveTo(5.8,7.1,5.4,6.6).lineTo(3.3,3.1).curveTo(0.9,-0.8,-0.8,-3.3).curveTo(-2.8,-6.2,-5.1,-7.3).curveTo(-5.7,-2.3,-3.7,0.5).lineTo(-0.5,4.6).lineTo(2.1,7.9).curveTo(2.5,8.4,2,8.8).curveTo(1.9,8.8,1.8,8.9).curveTo(1.8,8.9,1.7,8.9).curveTo(1.7,8.9,1.6,9).curveTo(1.5,9,1.5,9).curveTo(1.2,9,1,8.7).closePath();
	this.shape_3.setTransform(11.9481,13.1691);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,31.8,42.7);
p.frameBounds = [rect];


(lib.Symbol6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#373535").beginStroke().moveTo(-0.3,2.5).lineTo(-0.3,0.3).lineTo(-2.4,0.3).lineTo(-2.4,-0.3).lineTo(-0.3,-0.3).lineTo(-0.3,-2.5).lineTo(0.3,-2.5).lineTo(0.3,-0.3).lineTo(2.4,-0.3).lineTo(2.4,0.3).lineTo(0.3,0.3).lineTo(0.3,2.5).closePath();
	this.shape_14.setTransform(7.5884,-2.8631,0.8097,0.8097);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#373535").beginStroke().moveTo(-2.1,3).curveTo(-2.7,2.6,-2.7,1.6).curveTo(-2.7,0.5,-1.7,-0.1).curveTo(-0.6,-0.7,1.5,-0.9).lineTo(1.4,-1.6).lineTo(1.2,-2.1).curveTo(1.1,-2.3,0.8,-2.5).curveTo(0.6,-2.6,0.1,-2.6).curveTo(-0.6,-2.6,-1,-2.4).lineTo(-1.9,-1.9).lineTo(-2.4,-2.7).lineTo(-1.2,-3.3).curveTo(-0.5,-3.6,0.3,-3.6).curveTo(1.6,-3.6,2.1,-2.8).curveTo(2.7,-2.1,2.7,-0.8).lineTo(2.7,3.4).lineTo(1.7,3.4).lineTo(1.6,2.6).lineTo(1.6,2.6).lineTo(0.5,3.3).curveTo(-0.1,3.6,-0.7,3.6).curveTo(-1.5,3.6,-2.1,3).closePath().moveTo(0.1,0.1).curveTo(-0.4,0.2,-0.9,0.5).lineTo(-1.4,0.9).lineTo(-1.6,1.5).curveTo(-1.6,2.1,-1.2,2.4).curveTo(-0.8,2.6,-0.4,2.6).curveTo(0.1,2.6,0.6,2.4).curveTo(1.1,2.1,1.5,1.7).lineTo(1.5,-0.2).closePath();
	this.shape_15.setTransform(2.4263,1.388,0.8097,0.8097);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#373535").beginStroke().moveTo(2.1,4.6).lineTo(-2.2,-3).lineTo(-2.3,-3).lineTo(-2.2,-1.7).lineTo(-2.2,4.6).lineTo(-3.3,4.6).lineTo(-3.3,-4.6).lineTo(-2.1,-4.6).lineTo(2.3,3.1).lineTo(2.3,3.1).lineTo(2.2,-4.6).lineTo(3.3,-4.6).lineTo(3.3,4.6).closePath();
	this.shape_16.setTransform(-4.0111,0.3961,0.8097,0.8097);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Labels
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginRadialGradientFill(["#ECE1FE","#E8DBFE","#DECBFE","#CDB0FE","#B68AFD","#985AFD","#8C47FD"],[0.027,0.157,0.322,0.506,0.71,0.925,1],0,0,0,0,0,14.6).beginStroke().moveTo(-10.2,10.2).curveTo(-14.4,6,-14.4,0).curveTo(-14.4,-5.9,-10.2,-10.2).curveTo(-5.9,-14.4,0,-14.4).curveTo(6,-14.4,10.2,-10.2).curveTo(14.4,-5.9,14.4,0).curveTo(14.4,6,10.2,10.2).curveTo(6,14.4,0,14.4).curveTo(-5.9,14.4,-10.2,10.2).closePath();
	this.shape_17.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6_1, rect = new cjs.Rectangle(-14.4,-14.4,28.9,28.9), [rect]);


(lib.Symbol2copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#D0926E").beginStroke().moveTo(-0.9,1.9).lineTo(-0.2,-0.1).lineTo(0.1,-1.1).curveTo(0.4,-1.6,0.8,-1.9).lineTo(0.8,-1.9).curveTo(1,-1.4,0.8,-0.8).lineTo(0.3,0.1).curveTo(-0.1,1,-0.8,1.9).closePath();
	this.shape.setTransform(-22.2551,58.2103,0.9994,0.9994,3.1948);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#D0926E").beginStroke().moveTo(-6.7,14.5).lineTo(-5.1,6.5).lineTo(-3.2,-0.4).lineTo(-2.7,-1.3).lineTo(1.8,-8).lineTo(6.6,-14.5).lineTo(6.7,-14.4).curveTo(6.1,-12.8,4.9,-10.8).lineTo(2.8,-7.3).curveTo(1.1,-4.7,-1.8,-0.7).lineTo(-2.3,0.1).lineTo(-4.5,6.7).lineTo(-6.6,14.5).closePath();
	this.shape_1.setTransform(-21.4893,75.744,0.9994,0.9994,3.1948);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-17,38.2).curveTo(-16.5,35.2,-14.7,30.2).curveTo(-13.2,26.1,-11.5,22.4).curveTo(-10.4,19.9,-6.8,14).lineTo(-3.5,8.5).lineTo(-8.5,13.6).curveTo(-13.7,19.2,-14.8,21.7).curveTo(-18.2,29.1,-20.6,32.7).curveTo(-25.6,40.4,-29.1,38.6).curveTo(-29.7,38,-29.9,36.9).curveTo(-30.4,34.6,-28.8,31.6).curveTo(-30.2,32.6,-31.6,32.8).curveTo(-34.5,33,-34.2,28.7).curveTo(-34,23.8,-32.9,18.3).curveTo(-31.8,13.4,-31,11.8).lineTo(-24.7,1.6).lineTo(-28.2,4.6).curveTo(-31.7,7.9,-32.4,9.3).curveTo(-33,10.4,-34.9,17.2).curveTo(-37.3,23,-40.5,21).curveTo(-40.4,17.3,-39.9,13.1).curveTo(-38.9,4.5,-36.8,1.6).curveTo(-34.8,-1.4,-29.4,-6.3).lineTo(-24.4,-10.5).curveTo(-15.2,-24.8,-7.5,-35.4).curveTo(-6.9,-36.1,-5.8,-36.9).curveTo(-3.6,-38.6,-1,-39.7).curveTo(7.6,-42.9,17.4,-38).curveTo(23.6,-34.9,28.5,-26.3).curveTo(31,-21.9,32.2,-18.2).lineTo(33.7,-14.9).curveTo(35.3,-10.7,35.7,-6.1).curveTo(36.2,-1.6,38.3,6.9).lineTo(40.5,15.8).curveTo(40.6,16.6,39.6,17.5).curveTo(38.6,18.4,37.1,18.5).curveTo(33.1,18.8,30.2,12.2).curveTo(28.6,8.3,27.1,2).curveTo(26.2,-1.9,22.9,-6.5).lineTo(4.6,16.6).lineTo(-2.2,26.5).curveTo(-8.6,35.9,-10.1,37.8).curveTo(-12.1,40.5,-14.8,40.9).lineTo(-15.4,41).curveTo(-17.5,41,-17,38.2).closePath();
	this.shape_2.setTransform(1.6783,60.0392,0.9997,0.9997,3.1955);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#D5A690").beginStroke().moveTo(12.7,2.6).curveTo(10.4,1.5,8.8,0.8).curveTo(4.8,-0.8,0.6,-1.7).curveTo(-3.4,-2.7,-7.9,-3).curveTo(-12.4,-3.3,-16.5,-3.1).curveTo(-12.8,-4.4,-7.9,-4.6).curveTo(-3.6,-4.7,1,-3.7).curveTo(1.9,-3.5,5.3,-2.4).lineTo(7.4,-1.6).lineTo(9.4,-0.6).curveTo(13.1,1.3,16.6,4.6).lineTo(12.7,2.6).closePath();
	this.shape_3.setTransform(-14.0079,-79.1275,0.9994,0.9994,3.1948);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-18.4,6.2).lineTo(-24.5,-7.4).curveTo(-30.8,-19.8,-30.8,-39).curveTo(-30.9,-45,-30.3,-50.9).lineTo(-29.7,-55.7).lineTo(-17,-58.8).lineTo(10.2,-50.4).lineTo(11.8,-47.6).curveTo(13.8,-43.9,15.6,-39.3).curveTo(21.2,-24.6,22.9,-6.4).curveTo(24.3,9.2,27.7,29.2).curveTo(29.4,39.1,30.8,46).lineTo(6,58.8).curveTo(-10.3,24.2,-18.4,6.2).closePath();
	this.shape_4.setTransform(-8.5106,-22.9236,0.9997,0.9997,3.1955);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-8.6,18.4).curveTo(-16.2,14.8,-19.1,6.9).curveTo(-22,-0.9,-18.4,-8.6).curveTo(-14.8,-16.2,-6.9,-19.1).curveTo(1,-21.9,8.6,-18.4).curveTo(16.2,-14.8,19,-6.9).curveTo(21.9,1,18.4,8.6).curveTo(14.8,16.2,6.9,19.1).curveTo(3.4,20.4,-0.1,20.4).curveTo(-4.4,20.4,-8.6,18.4).closePath();
	this.shape_5.setTransform(-15.5663,-79.5364,1,1,3.1962);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.9,-99.9,81.1,200);
p.frameBounds = [rect];


(lib.ResetBt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("Reset Interactive", "14px 'Arial'", "#205460");
	this.text.lineHeight = 18;
	this.text.parent = this;
	this.text.setTransform(44.2,7.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#1B4750").beginStroke().moveTo(-7,-0.1).lineTo(7,-11.9).lineTo(7,11.9).closePath();
	this.shape.setTransform(29.625,16.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#1B4750").beginStroke().moveTo(-3,11.9).lineTo(-3,-11.9).lineTo(3,-11.9).lineTo(3,11.9).closePath();
	this.shape_1.setTransform(18,16.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#1B4750").setStrokeStyle(1,0,0,4).moveTo(-74,-16.5).lineTo(74,-16.5).curveTo(75,-16.5,75.8,-15.8).curveTo(76.5,-15.1,76.5,-14).lineTo(76.5,14).curveTo(76.5,15,75.8,15.8).curveTo(75,16.5,74,16.5).lineTo(-74,16.5).curveTo(-75,16.5,-75.8,15.8).curveTo(-76.5,15,-76.5,14).lineTo(-76.5,-14).curveTo(-76.5,-15.1,-75.8,-15.8).curveTo(-75,-16.5,-74,-16.5).closePath();
	this.shape_2.setTransform(77,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#BCE1E1").beginStroke().moveTo(-74,16.5).curveTo(-75,16.5,-75.7,15.8).curveTo(-76.5,15,-76.5,14).lineTo(-76.5,-14).curveTo(-76.5,-15,-75.7,-15.7).curveTo(-75,-16.5,-74,-16.5).lineTo(74,-16.5).curveTo(75,-16.5,75.7,-15.7).curveTo(76.5,-15,76.5,-14).lineTo(76.5,14).curveTo(76.5,15,75.7,15.8).curveTo(75,16.5,74,16.5).closePath();
	this.shape_3.setTransform(77,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#C8CACC").beginStroke().moveTo(-7,-0.1).lineTo(7,-11.9).lineTo(7,11.9).closePath();
	this.shape_4.setTransform(29.625,16.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#C8CACC").beginStroke().moveTo(-3,11.9).lineTo(-3,-11.9).lineTo(3,-11.9).lineTo(3,11.9).closePath();
	this.shape_5.setTransform(18,16.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#C8CACC").setStrokeStyle(1,0,0,4).moveTo(-74,-16.5).lineTo(74,-16.5).curveTo(75,-16.5,75.8,-15.8).curveTo(76.5,-15.1,76.5,-14).lineTo(76.5,14).curveTo(76.5,15,75.8,15.8).curveTo(75,16.5,74,16.5).lineTo(-74,16.5).curveTo(-75,16.5,-75.8,15.8).curveTo(-76.5,15,-76.5,14).lineTo(-76.5,-14).curveTo(-76.5,-15.1,-75.8,-15.8).curveTo(-75,-16.5,-74,-16.5).closePath();
	this.shape_6.setTransform(77,16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#F1F2F2").beginStroke().moveTo(-74,16.5).curveTo(-75,16.5,-75.7,15.8).curveTo(-76.5,15,-76.5,14).lineTo(-76.5,-14).curveTo(-76.5,-15,-75.7,-15.7).curveTo(-75,-16.5,-74,-16.5).lineTo(74,-16.5).curveTo(75,-16.5,75.7,-15.7).curveTo(76.5,-15,76.5,-14).lineTo(76.5,14).curveTo(76.5,15,75.7,15.8).curveTo(75,16.5,74,16.5).closePath();
	this.shape_7.setTransform(77,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#205460"}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text,p:{color:"#BFBFBF"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.5,-0.6,155,35);
p.frameBounds = [rect, rect];


(lib.Path_8_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#477A8E").beginStroke().moveTo(6.1,58.9).curveTo(5.5,54.7,1.3,49.4).curveTo(-4.6,42.1,-12.9,41.4).lineTo(-0.9,39.4).curveTo(-3.6,39.4,-8,38.9).curveTo(-18.8,37.9,-25.3,36).curveTo(-30.8,34.3,-13,29.7).curveTo(6.7,24.5,6.8,24.1).curveTo(13.4,-53.5,13.2,-62.7).curveTo(11.7,-75.7,11.2,-81.9).curveTo(10.3,-93,14.4,-88.4).curveTo(18.8,-83.6,20.6,-68.1).curveTo(21.4,-60.8,21.3,-58.2).curveTo(22.2,-68.5,22.9,-78.9).curveTo(24.1,-99.2,22.8,-112.8).curveTo(26.1,-95.8,26.6,-86.1).lineTo(26.4,-83.7).curveTo(25.4,-70.7,14.9,36).lineTo(18.6,59).curveTo(22.8,86.5,25.2,108.9).lineTo(13.9,112.8).closePath();
	this.shape_2.setTransform(26.6668,112.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_2, rect = new cjs.Rectangle(0.1,0,53.2,225.6), [rect]);


(lib.Path_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#477A8E").beginStroke().moveTo(-41.6,113.1).curveTo(-42.5,112.3,-42.3,111.1).curveTo(-39.2,90.7,-34.7,67.1).lineTo(-30.9,47.5).curveTo(-33.8,33.1,-37.3,14.1).curveTo(-44.5,-23.9,-47.9,-46.5).lineTo(-47.9,-46.7).curveTo(-48.4,-50.5,-48.9,-56.4).curveTo(-49.9,-68.3,-50,-78.9).curveTo(-49.3,-93.9,-46.1,-113.8).lineTo(-46,-113.8).curveTo(-46.3,-97.7,-45.7,-79.4).curveTo(-44.5,-42.7,-39.6,-32.2).curveTo(-35.2,-22.7,-17.7,-22.2).lineTo(-8.1,-21.9).curveTo(-5,-21.5,-7.5,-18.9).lineTo(-13.5,-13.5).curveTo(-17.1,-10.4,-18.9,-7.8).curveTo(-24.3,-0.3,-22.9,12.5).curveTo(-22.5,16.2,-21.9,25).curveTo(-21.5,30.5,-20.9,32.7).curveTo(-20,35.7,-17.8,37.4).curveTo(-15.6,39.2,-10.8,40.8).curveTo(-3.4,43.4,16.3,47.1).curveTo(26.2,48.9,34.6,50.3).lineTo(-4.3,52.9).lineTo(50,56.2).curveTo(36.4,57.7,21.6,59.9).curveTo(-7.9,64.2,-13.8,67.6).curveTo(-24.8,74,-33.3,94.5).curveTo(-37.6,104.8,-39.6,113.8).lineTo(-40.1,113.8).curveTo(-40.9,113.8,-41.6,113.1).closePath();
	this.shape_1.setTransform(49.975,113.8191);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_1, rect = new cjs.Rectangle(0,0,100,227.7), [rect]);


(lib.Path_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(-11.3,3.5).lineTo(-11.3,3.3).curveTo(-11.8,-0.5,-12.3,-6.4).curveTo(-13.3,-18.2,-13.4,-28.9).curveTo(-12.9,-39.6,-11.2,-52.1).curveTo(-11.7,-42.9,-11.7,-31.2).curveTo(-11.7,-8.1,-9.4,5.1).curveTo(-7.3,17.9,-1.3,25.1).curveTo(3.3,30.8,8.7,31.5).curveTo(11.6,31.9,13.4,31.9).curveTo(11.4,32.1,6.8,32.7).curveTo(4.1,33,0.6,32.6).curveTo(-2.7,32,-3.3,32.1).curveTo(-6,32.5,-3.2,42.8).curveTo(-2.7,44.4,-2.9,47.3).lineTo(-3,52.1).curveTo(-8.4,22.7,-11.3,3.5).closePath();
	this.shape.setTransform(13.4,52.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, rect = new cjs.Rectangle(0,0,26.8,104.2), [rect]);


(lib.Path_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(3.8,4.2).curveTo(-17.4,3.3,-23.8,-4.2).lineTo(13.3,-4.3).curveTo(9.4,-3.5,4.3,-2.9).curveTo(-6,-1.5,-12.4,-2).curveTo(-12,-1.4,-7.3,-0.4).curveTo(2.1,1.5,23.8,3.5).curveTo(16.9,4.3,9.4,4.3).lineTo(3.8,4.2).closePath();
	this.shape.setTransform(23.775,4.2783);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_1, rect = new cjs.Rectangle(0,0,47.6,8.6), [rect]);


(lib.Path_1_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFAFAF").beginStroke().moveTo(0.3,1.8).curveTo(-6.2,1.6,-11,-0.1).curveTo(-13.4,-0.9,-14.5,-1.7).curveTo(-3.4,-0.3,0.3,-0.1).curveTo(3.9,-0,14.5,-1.8).curveTo(12.7,-0.8,10.1,0.1).curveTo(5.2,1.8,1,1.8).lineTo(0.3,1.8).closePath();
	this.shape_5.setTransform(14.5,1.7806);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_6, rect = new cjs.Rectangle(0,0,29,3.6), [rect]);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#477A8E").beginStroke().moveTo(-15,1).curveTo(-4.9,-1,6.1,-1).curveTo(11.6,-1,15,-0.6).curveTo(9.6,0.7,-3.3,0.9).lineTo(-10.6,1).lineTo(-15,1).closePath();
	this.shape_5.setTransform(15.025,1.02);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, rect = new cjs.Rectangle(0,0,30.1,2.1), [rect]);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C6AF81").beginStroke().moveTo(-0.4,-0).lineTo(0.4,-0).lineTo(-0.4,0).closePath();
	this.shape.setTransform(385.8,1.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#C6AF81").beginStroke().moveTo(31.2,1).lineTo(31.5,1).lineTo(29.4,1).lineTo(23.8,1).curveTo(26.2,0.9,22.5,0.9).lineTo(22.1,1).lineTo(22,0.9).lineTo(20.6,1).lineTo(20.4,0.8).lineTo(15.8,1).lineTo(-2.3,1).curveTo(-4.2,0.9,-5.7,1).lineTo(-5.7,0.9).lineTo(-11.4,0.9).curveTo(-11.8,0.9,-11.4,0.9).lineTo(-11.3,1).lineTo(-13.1,0.9).lineTo(-14.4,1).lineTo(-13.9,0.9).lineTo(-16.5,1).lineTo(-15.9,0.9).lineTo(-18.3,0.9).lineTo(-20.9,0.9).lineTo(-20,0.9).lineTo(-28.2,0.9).lineTo(-27.8,0.9).lineTo(-29.2,0.9).curveTo(-29.1,0.9,-29.1,0.9).curveTo(-29,0.9,-29.1,0.9).curveTo(-29.1,0.9,-29.1,0.9).curveTo(-29.2,0.9,-29.3,0.8).lineTo(-30.7,0.8).curveTo(-31,0.8,-30.6,0.9).lineTo(-31.4,1).curveTo(-30.6,0.9,-33.3,0.9).lineTo(-43.1,1).lineTo(-44,0.8).lineTo(-44.8,0.9).lineTo(-44.8,0.8).curveTo(-47.7,0.8,-46,0.9).lineTo(-44.5,0.9).curveTo(-47.1,1,-48,0.9).lineTo(-49,0.9).lineTo(-48.9,1).lineTo(-72.2,0.9).curveTo(-76.4,1,-76.2,0.9).lineTo(-77.6,0.9).lineTo(-77.5,0.9).lineTo(-79.2,0.9).lineTo(-79.3,1).lineTo(-84.5,1).lineTo(-84.4,0.9).lineTo(-86.1,1).lineTo(-86.3,0.9).lineTo(-93.7,1).lineTo(-101.4,1).curveTo(-102.8,0.9,-105.5,0.9).curveTo(-108,1,-109.4,0.8).lineTo(-110.5,0.9).lineTo(-110.1,0.9).lineTo(-138.6,0.9).lineTo(-158.7,0.7).lineTo(-158,0.8).lineTo(-158.9,0.8).lineTo(-158.8,0.7).lineTo(-161.4,0.8).lineTo(-160.8,0.8).curveTo(-171.1,0.8,-175.4,0.7).lineTo(-175.5,0.7).curveTo(-179.5,0.6,-182.8,0.6).curveTo(-182.6,0.6,-182.6,0.6).curveTo(-182.5,0.6,-182.5,0.6).curveTo(-182.5,0.6,-182.6,0.6).curveTo(-182.6,0.5,-182.8,0.5).curveTo(-185.7,0.6,-189.3,0.4).lineTo(-196.2,0.2).lineTo(-195.2,0.1).lineTo(-197.3,0.2).lineTo(-197.4,0.2).lineTo(-199.4,0.1).lineTo(-201.7,0.1).lineTo(-202.9,0.1).lineTo(-202.6,0.1).lineTo(-205.7,0.1).lineTo(-206.1,0).lineTo(-205.6,-0).curveTo(-208.1,0.1,-208.4,-0.1).lineTo(-210,-0).lineTo(-209.9,-0.1).lineTo(-211.2,-0.1).curveTo(-211.2,-0.1,-211.2,-0.1).curveTo(-211.3,-0.1,-211.3,-0.1).curveTo(-211.4,-0.1,-211.4,-0.1).curveTo(-211.5,-0.2,-211.7,-0.2).lineTo(-211,-0.2).lineTo(-212.2,-0.2).lineTo(-211.8,-0.2).lineTo(-212,-0.3).lineTo(-212.6,-0.3).lineTo(-212.7,-0.3).lineTo(-215.5,-0.2).lineTo(-217,-0.3).lineTo(-217.2,-0.2).lineTo(-217.6,-0.2).lineTo(-217.3,-0.2).lineTo(-217.6,-0.2).lineTo(-217.4,-0.4).lineTo(-216.5,-0.4).curveTo(-217.1,-0.5,-215.1,-0.6).curveTo(-199.5,-1.3,-135.5,-1).lineTo(-132.9,-0.9).lineTo(-130.8,-0.9).lineTo(-127.5,-0.9).lineTo(-124.3,-0.9).lineTo(-119.9,-0.9).curveTo(-110.7,-0.8,-105.2,-1).curveTo(-104.7,-0.9,-99.5,-0.9).lineTo(-99.4,-0.8).lineTo(-96.5,-0.8).lineTo(-96.3,-0.9).curveTo(-94.4,-0.9,-94.8,-0.8).lineTo(-88,-1).lineTo(-88.5,-0.9).curveTo(-87.3,-1,-86.5,-0.9).curveTo(-85.6,-0.8,-84.3,-0.9).lineTo(-72.9,-0.8).lineTo(-71.1,-0.9).lineTo(-71.7,-0.9).lineTo(-62,-0.9).lineTo(-44.3,-0.8).lineTo(-43.7,-0.9).lineTo(-42.7,-0.8).curveTo(-41.6,-0.8,-41.5,-0.9).lineTo(-40.4,-0.8).lineTo(-38.4,-0.9).curveTo(-36.6,-0.8,-36.2,-0.9).curveTo(-35.2,-0.7,-33.3,-0.9).lineTo(-32.3,-0.8).curveTo(-32.4,-0.9,-30.8,-0.9).lineTo(-28,-0.8).lineTo(-28.5,-0.8).lineTo(-25.5,-0.8).lineTo(-25.7,-0.9).curveTo(-26.1,-0.9,-25.7,-0.9).lineTo(-25,-0.8).lineTo(-25.4,-0.8).curveTo(-23.2,-0.8,-23.3,-0.9).lineTo(-19.4,-0.9).curveTo(-19.7,-0.8,-19.4,-0.8).lineTo(-18.8,-0.8).lineTo(-16.2,-0.9).lineTo(-15.5,-0.8).lineTo(-15.3,-0.9).lineTo(-15,-0.8).lineTo(-13.7,-0.9).curveTo(-12.3,-0.7,-11.2,-0.9).lineTo(-12,-0.9).lineTo(-9.7,-0.9).curveTo(-5.4,-0.8,-1.5,-0.9).lineTo(2.5,-0.9).lineTo(14,-0.9).lineTo(14.7,-1).lineTo(14.8,-0.9).curveTo(18.2,-0.9,24.9,-0.8).lineTo(24.9,-0.8).lineTo(26.7,-0.8).lineTo(32.9,-0.9).lineTo(34.9,-0.8).curveTo(36.2,-0.9,38.3,-0.8).lineTo(40.6,-0.9).lineTo(40.6,-0.8).curveTo(42.3,-0.8,43.8,-0.9).lineTo(45.3,-0.8).lineTo(47.3,-0.9).curveTo(48.4,-0.8,49.9,-0.9).lineTo(49.5,-0.8).lineTo(51.1,-0.8).lineTo(54.9,-0.8).lineTo(61.2,-0.8).lineTo(61.2,-0.8).lineTo(63.7,-0.9).lineTo(63.4,-0.8).lineTo(64.9,-0.8).lineTo(64.8,-0.8).curveTo(66.7,-0.9,70.9,-0.7).lineTo(70.6,-0.7).lineTo(73.2,-0.6).curveTo(73.3,-0.8,74.9,-0.8).lineTo(74.2,-0.7).lineTo(75.2,-0.7).lineTo(76.5,-0.6).curveTo(78.1,-0.6,77.1,-0.7).curveTo(79.6,-0.7,80.1,-0.6).lineTo(83.6,-0.7).lineTo(83.4,-0.6).lineTo(85.5,-0.7).lineTo(84.5,-0.7).lineTo(88.6,-0.7).lineTo(89.5,-0.7).lineTo(92.8,-0.7).lineTo(92.3,-0.6).curveTo(93.1,-0.7,94,-0.6).lineTo(103.8,-0.7).lineTo(103.1,-0.6).lineTo(105.6,-0.7).lineTo(105.3,-0.7).curveTo(105.2,-0.7,105.2,-0.7).curveTo(105.1,-0.7,105.1,-0.6).curveTo(105.1,-0.6,105.2,-0.6).curveTo(105.3,-0.6,105.4,-0.6).lineTo(107,-0.7).lineTo(106.9,-0.6).lineTo(113,-0.6).curveTo(116.7,-0.5,118.5,-0.6).lineTo(118.3,-0.7).lineTo(121.9,-0.6).lineTo(122.2,-0.6).lineTo(122.8,-0.5).lineTo(123.6,-0.6).lineTo(123.4,-0.6).lineTo(124.3,-0.6).curveTo(124.4,-0.6,124.4,-0.6).curveTo(124.4,-0.6,124.4,-0.6).curveTo(124.4,-0.5,124.4,-0.5).curveTo(124.4,-0.5,124.4,-0.5).curveTo(126.3,-0.6,127.7,-0.5).lineTo(132.1,-0.5).lineTo(131.8,-0.4).lineTo(134,-0.5).lineTo(133.6,-0.5).lineTo(134.8,-0.4).lineTo(135.6,-0.5).lineTo(135.6,-0.4).lineTo(138.6,-0.5).curveTo(138.2,-0.4,139.1,-0.4).lineTo(142.4,-0.4).curveTo(142.3,-0.4,142.2,-0.4).curveTo(142.2,-0.4,142.2,-0.4).curveTo(142.2,-0.4,142.3,-0.4).curveTo(142.4,-0.4,142.5,-0.4).lineTo(143.5,-0.4).lineTo(142.6,-0.5).curveTo(143.9,-0.5,144.9,-0.4).curveTo(144.8,-0.5,145.9,-0.5).lineTo(145.1,-0.4).curveTo(148,-0.5,146.5,-0.4).lineTo(148.8,-0.4).lineTo(148.1,-0.4).lineTo(151.8,-0.4).lineTo(151.6,-0.4).lineTo(152,-0.4).curveTo(153,-0.3,154.6,-0.3).lineTo(157.2,-0.3).lineTo(157.1,-0.4).lineTo(161.8,-0.3).lineTo(163.5,-0.4).lineTo(170.9,-0.3).lineTo(170.2,-0.3).curveTo(171.9,-0.2,175.6,-0.3).lineTo(175.5,-0.3).lineTo(176.2,-0.3).curveTo(176.2,-0.2,177.2,-0.2).lineTo(177,-0.3).lineTo(179.2,-0.3).curveTo(179.6,-0.3,179.8,-0.3).curveTo(180,-0.3,180.1,-0.2).curveTo(180.1,-0.2,180,-0.2).curveTo(179.9,-0.2,179.7,-0.2).lineTo(180.7,-0.2).lineTo(181.8,-0.3).lineTo(182.5,-0.2).lineTo(182.7,-0.3).curveTo(183.9,-0.3,184.1,-0.2).lineTo(185.1,-0.3).lineTo(185.1,-0.2).curveTo(184.1,-0.1,185.7,-0.1).lineTo(188.1,-0.2).curveTo(187.2,-0.1,188.1,-0.1).curveTo(188.4,-0.1,188.6,-0.1).curveTo(188.7,-0.1,188.8,-0.1).curveTo(188.8,-0,188.8,-0).curveTo(188.7,-0,188.6,-0).lineTo(193.6,-0.1).curveTo(193.4,-0,195,-0.1).lineTo(197.2,-0.1).lineTo(197.4,-0.1).lineTo(200.1,-0.1).lineTo(199.7,-0).lineTo(200.3,0).lineTo(201.9,-0.1).lineTo(201,0.1).lineTo(203.8,0.1).lineTo(203.2,0.1).curveTo(202.7,0.1,203.2,0.2).lineTo(204.6,0.1).lineTo(209.2,0).lineTo(207.6,0.2).curveTo(208.9,0.1,208.6,0.2).lineTo(208.9,0.1).curveTo(210.5,0.1,209.5,0.3).lineTo(211.1,0.2).curveTo(211.4,0.2,211.6,0.2).curveTo(211.7,0.2,211.8,0.3).curveTo(211.8,0.3,211.7,0.3).curveTo(211.6,0.3,211.4,0.3).curveTo(212.3,0.3,213.2,0.2).lineTo(217.6,0.3).curveTo(215.6,0.5,214.3,0.4).lineTo(214,0.4).lineTo(212.5,0.4).curveTo(213.2,0.6,210.1,0.6).lineTo(209.7,0.5).lineTo(211,0.5).curveTo(211.5,0.4,210.2,0.4).lineTo(206.1,0.5).curveTo(206,0.5,205.9,0.5).curveTo(205.9,0.5,205.9,0.5).curveTo(205.9,0.5,206,0.5).curveTo(206.2,0.5,206.4,0.5).curveTo(207.4,0.4,206.9,0.4).lineTo(206.1,0.4).curveTo(206.2,0.4,206.3,0.4).curveTo(206.4,0.4,206.4,0.4).curveTo(206.4,0.4,206.4,0.4).curveTo(206.4,0.4,206.3,0.3).lineTo(205.5,0.3).lineTo(204.4,0.4).curveTo(198.8,0.5,197.5,0.4).lineTo(196.7,0.4).lineTo(193,0.4).curveTo(193.4,0.3,192.3,0.3).lineTo(190.8,0.4).lineTo(190.3,0.3).lineTo(189.6,0.4).lineTo(189,0.3).lineTo(187.7,0.4).curveTo(186.5,0.4,187,0.4).lineTo(188.1,0.5).lineTo(187.1,0.5).curveTo(188.1,0.6,185.1,0.6).curveTo(185.8,0.6,186,0.4).lineTo(184.6,0.4).lineTo(184.3,0.4).lineTo(184.6,0.5).lineTo(183.4,0.5).lineTo(183.7,0.4).lineTo(181.8,0.4).curveTo(179.9,0.4,181.5,0.3).lineTo(180.9,0.2).lineTo(180.1,0.3).curveTo(180.6,0.3,179.2,0.4).curveTo(177.7,0.4,178.2,0.5).lineTo(176.3,0.5).lineTo(176.9,0.6).lineTo(176.7,0.6).lineTo(177.8,0.7).curveTo(175.9,0.6,176,0.5).lineTo(173.9,0.6).lineTo(174.3,0.6).lineTo(173.9,0.5).lineTo(176.1,0.5).curveTo(174.7,0.5,174.9,0.4).curveTo(175.1,0.3,175.8,0.3).lineTo(173.6,0.2).lineTo(172.9,0.3).lineTo(172.5,0.2).lineTo(171.6,0.2).lineTo(171.1,0.3).curveTo(172.7,0.3,170.5,0.5).lineTo(169.8,0.4).lineTo(170.1,0.4).lineTo(169.9,0.4).curveTo(167.8,0.3,167.8,0.4).lineTo(167.2,0.4).curveTo(167.8,0.5,166.6,0.5).lineTo(166.2,0.5).lineTo(165.1,0.6).lineTo(161.2,0.5).lineTo(160.7,0.5).lineTo(159.4,0.4).curveTo(156.9,0.4,156.6,0.5).lineTo(155.2,0.5).curveTo(154.3,0.5,154.5,0.4).curveTo(151.1,0.4,151,0.5).lineTo(151.1,0.4).lineTo(148.3,0.4).curveTo(147,0.4,147,0.3).lineTo(146.3,0.4).lineTo(146.6,0.5).lineTo(143.7,0.4).lineTo(141.6,0.5).lineTo(140.7,0.4).lineTo(136.3,0.4).curveTo(137.5,0.5,137.3,0.5).lineTo(134.2,0.4).curveTo(132.9,0.4,133.2,0.3).lineTo(131.2,0.4).lineTo(131.8,0.4).lineTo(129.2,0.5).lineTo(126.5,0.6).curveTo(127.8,0.7,127.2,0.7).lineTo(123.3,0.7).curveTo(123.9,0.6,123.2,0.6).curveTo(123,0.6,122.9,0.6).curveTo(122.8,0.6,122.7,0.5).curveTo(122.6,0.5,122.6,0.5).curveTo(122.7,0.5,122.7,0.5).lineTo(121.3,0.6).curveTo(121.4,0.6,121.4,0.6).curveTo(121.4,0.6,121.4,0.6).curveTo(121.4,0.5,121.4,0.5).curveTo(121.3,0.5,121.3,0.4).lineTo(119.1,0.4).curveTo(119.2,0.5,119.2,0.5).curveTo(119.2,0.5,119.2,0.5).curveTo(119.2,0.5,119.1,0.5).curveTo(119,0.5,118.8,0.5).lineTo(115.3,0.4).lineTo(113.7,0.5).lineTo(114.6,0.4).lineTo(113.3,0.4).curveTo(113.7,0.5,112,0.5).curveTo(111.4,0.6,110.3,0.5).curveTo(110.4,0.5,110.5,0.5).curveTo(110.6,0.5,110.7,0.5).curveTo(110.7,0.5,110.7,0.5).curveTo(110.7,0.5,110.6,0.5).lineTo(107.9,0.5).lineTo(107.4,0.5).lineTo(107.8,0.6).lineTo(105.7,0.6).curveTo(106,0.6,106.1,0.6).curveTo(106.2,0.6,106.2,0.6).curveTo(106.1,0.6,105.9,0.6).curveTo(105.6,0.6,105.2,0.6).curveTo(104.6,0.5,103.6,0.5).curveTo(104,0.4,104.4,0.5).lineTo(104.5,0.5).lineTo(104.1,0.4).curveTo(102,0.6,99,0.6).curveTo(96.5,0.6,96.2,0.7).lineTo(96.2,0.6).lineTo(95.6,0.7).lineTo(95.6,0.6).lineTo(93,0.6).lineTo(94.2,0.5).lineTo(89.8,0.6).curveTo(89.8,0.6,89.8,0.6).curveTo(89.8,0.6,89.8,0.6).curveTo(89.8,0.6,89.8,0.6).curveTo(89.9,0.6,89.9,0.6).lineTo(86.1,0.6).lineTo(85.5,0.7).lineTo(87,0.8).lineTo(85.6,0.8).lineTo(84.2,0.6).lineTo(80.7,0.7).curveTo(79.4,0.7,79.5,0.6).curveTo(79.6,0.5,78.3,0.6).lineTo(78.6,0.6).lineTo(75.4,0.6).lineTo(76.2,0.6).curveTo(75.9,0.5,72.9,0.5).lineTo(73.5,0.4).lineTo(72.3,0.4).lineTo(71,0.5).lineTo(70.9,0.5).curveTo(71.1,0.4,70.1,0.5).lineTo(69.7,0.5).lineTo(70,0.6).lineTo(68.8,0.6).lineTo(68.5,0.7).lineTo(67,0.7).lineTo(69,0.4).curveTo(70.1,0.5,70.2,0.4).lineTo(67.9,0.4).lineTo(66.1,0.5).lineTo(66.8,0.6).lineTo(61.3,0.6).lineTo(61.4,0.6).lineTo(58.7,0.6).lineTo(59.5,0.6).lineTo(57.3,0.6).lineTo(58,0.7).curveTo(56.9,0.8,56.1,0.7).lineTo(54.1,0.7).lineTo(54.9,0.6).lineTo(52.4,0.7).curveTo(52.5,0.6,51.5,0.6).lineTo(51.3,0.7).lineTo(50.6,0.7).lineTo(50.2,0.6).lineTo(47.4,0.7).lineTo(43.1,0.6).lineTo(40.9,0.7).lineTo(39.4,0.8).lineTo(35.6,0.9).lineTo(32.2,1.1).lineTo(31.2,1).closePath();
	this.shape_1.setTransform(217.6,1.0089);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, rect = new cjs.Rectangle(0,0,435.2,2.1), [rect]);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C6AF81").beginStroke().moveTo(-23.6,2).lineTo(-26,2).lineTo(-26.1,1.9).lineTo(-35.5,1.8).curveTo(-36.2,1.8,-35.6,1.9).lineTo(-38.4,1.9).curveTo(-37.2,2,-42.7,2).lineTo(-39.7,1.9).lineTo(-43.9,1.9).lineTo(-43,1.8).curveTo(-45.1,1.9,-47,1.8).curveTo(-49,1.7,-51.3,1.8).lineTo(-50.5,1.8).lineTo(-49.8,1.9).curveTo(-52.1,2,-56.3,1.9).lineTo(-63.3,1.9).lineTo(-62.7,1.8).lineTo(-65,1.8).curveTo(-64.7,1.8,-65,1.8).curveTo(-65.1,1.7,-65.1,1.7).curveTo(-65.2,1.7,-65.2,1.7).curveTo(-65.2,1.7,-65.2,1.7).curveTo(-65.2,1.7,-65.1,1.7).lineTo(-67.4,1.6).curveTo(-68.2,1.7,-67.2,1.9).curveTo(-66.5,2,-68.5,2).curveTo(-67.8,1.9,-69.9,1.9).lineTo(-71.7,1.8).lineTo(-79.9,1.9).lineTo(-87.9,2).curveTo(-89.3,1.8,-89.4,1.7).lineTo(-90.8,1.8).lineTo(-90.8,1.7).lineTo(-93,1.7).curveTo(-93.8,1.8,-92.9,1.9).lineTo(-93.2,1.9).curveTo(-95.3,1.9,-96,1.8).lineTo(-95.9,1.8).lineTo(-96,1.8).lineTo(-97.8,1.8).lineTo(-97.7,2).curveTo(-105.5,1.9,-117.8,2).lineTo(-125.7,1.8).curveTo(-129.2,1.7,-136.1,1.9).curveTo(-143,2,-142.7,1.7).lineTo(-144.9,1.9).lineTo(-144.9,1.8).lineTo(-147.7,1.8).lineTo(-147.8,1.9).lineTo(-156.3,2).lineTo(-156.3,1.9).lineTo(-159.2,2).lineTo(-159.3,1.8).curveTo(-163.9,2,-171.7,2).lineTo(-184.5,1.9).curveTo(-186.8,1.8,-191.2,1.9).curveTo(-195.2,1.9,-197.7,1.7).curveTo(-199,1.7,-199.5,1.8).curveTo(-199.8,1.8,-198.8,1.9).lineTo(-222,1.9).lineTo(-245.9,1.8).curveTo(-272.2,1.8,-279.2,1.5).lineTo(-278,1.6).curveTo(-279.5,1.7,-279.5,1.6).curveTo(-279.5,1.5,-279.4,1.5).curveTo(-279.4,1.5,-279.4,1.5).curveTo(-279.4,1.4,-279.4,1.4).curveTo(-279.4,1.4,-279.4,1.4).lineTo(-283.7,1.6).lineTo(-282.7,1.7).curveTo(-299.6,1.7,-306.8,1.4).lineTo(-306.9,1.5).lineTo(-313.4,1.3).curveTo(-316.6,1.1,-319.4,1.2).curveTo(-319.1,1.2,-318.9,1.1).curveTo(-318.7,1.1,-318.6,1.1).curveTo(-318.5,1.1,-318.6,1.1).curveTo(-318.7,1.1,-318.9,1.1).curveTo(-323.7,1.2,-329.9,0.9).lineTo(-341.3,0.5).lineTo(-339.5,0.3).lineTo(-343.1,0.4).curveTo(-343.4,0.3,-343.1,0.3).lineTo(-341.8,0.2).lineTo(-343.1,0.2).lineTo(-343.1,-1.9).curveTo(-302.5,-2.3,-240.8,-1.9).lineTo(-239,-1.8).curveTo(-237,-1.7,-236.6,-1.8).curveTo(-236.6,-1.7,-233,-1.6).lineTo(-227.6,-1.8).lineTo(-227.8,-1.7).curveTo(-226.5,-1.6,-222.3,-1.9).lineTo(-220.3,-1.7).lineTo(-215.1,-1.8).curveTo(-197.5,-1.7,-190.7,-1.9).curveTo(-189.4,-1.6,-181.3,-1.7).lineTo(-181.1,-1.6).lineTo(-179.2,-1.8).lineTo(-178.2,-1.7).lineTo(-176.2,-1.6).lineTo(-175.9,-1.7).lineTo(-174.6,-1.7).curveTo(-173.1,-1.7,-173.4,-1.5).lineTo(-162.3,-1.9).lineTo(-162.9,-1.8).curveTo(-161.1,-1.9,-159.7,-1.7).curveTo(-158.4,-1.6,-156.2,-1.7).curveTo(-150,-1.9,-137.2,-1.6).lineTo(-134.3,-1.7).lineTo(-137.8,-1.8).lineTo(-133,-1.8).lineTo(-133.5,-1.7).curveTo(-127.8,-1.7,-119.2,-1.9).lineTo(-104.3,-1.7).curveTo(-94.5,-1.7,-90,-1.5).lineTo(-89,-1.8).lineTo(-88.6,-1.6).lineTo(-87.4,-1.5).curveTo(-85.5,-1.5,-85.4,-1.8).lineTo(-83.4,-1.6).curveTo(-83.2,-1.7,-80.3,-1.7).curveTo(-77.3,-1.7,-76.6,-1.8).lineTo(-74.4,-1.7).lineTo(-71.7,-1.7).lineTo(-71.5,-1.6).curveTo(-71.4,-1.5,-70,-1.5).curveTo(-70.2,-1.7,-69.5,-1.7).lineTo(-67.5,-1.8).lineTo(-65.3,-1.7).lineTo(-63,-1.6).lineTo(-63.8,-1.5).curveTo(-62,-1.4,-58.9,-1.6).lineTo(-59.2,-1.7).curveTo(-59.8,-1.7,-59.3,-1.8).curveTo(-57,-1.6,-58.7,-1.5).lineTo(-56.4,-1.5).curveTo(-55.1,-1.6,-55.2,-1.7).lineTo(-56.5,-1.7).lineTo(-48.5,-1.7).lineTo(-48.8,-1.6).lineTo(-47.8,-1.5).curveTo(-46.7,-1.8,-43.5,-1.8).lineTo(-42.3,-1.6).lineTo(-41.9,-1.7).lineTo(-41.5,-1.6).lineTo(-39.4,-1.8).curveTo(-37.5,-1.5,-35.3,-1.7).lineTo(-36.5,-1.8).lineTo(-32.9,-1.8).curveTo(-32.8,-1.8,-32.8,-1.8).curveTo(-32.8,-1.7,-32.9,-1.7).curveTo(-32.9,-1.7,-32.9,-1.7).curveTo(-33,-1.7,-33,-1.7).curveTo(-26.9,-1.5,-19,-1.7).lineTo(-19.3,-1.7).curveTo(-16.7,-1.7,-12.7,-1.9).lineTo(6.4,-1.8).lineTo(7.5,-1.9).lineTo(7.7,-1.8).curveTo(13.4,-1.8,24.5,-1.5).lineTo(24.4,-1.6).lineTo(26.5,-1.6).curveTo(27.1,-1.7,27.4,-1.5).lineTo(37.6,-1.7).curveTo(37.5,-1.6,38.9,-1.6).lineTo(41.1,-1.6).curveTo(42.4,-1.8,43.9,-1.7).lineTo(47.1,-1.7).lineTo(46.6,-1.6).lineTo(50.5,-1.7).lineTo(50.5,-1.6).curveTo(53.2,-1.6,55.7,-1.7).curveTo(56.4,-1.7,56.5,-1.6).lineTo(58.1,-1.5).lineTo(61.2,-1.8).lineTo(61.3,-1.8).lineTo(63,-1.7).lineTo(65.8,-1.7).lineTo(65.2,-1.6).lineTo(67.8,-1.6).lineTo(74.2,-1.6).lineTo(73.7,-1.6).lineTo(84.5,-1.6).lineTo(84.5,-1.5).lineTo(88.8,-1.7).lineTo(88.2,-1.6).lineTo(90.7,-1.6).lineTo(90.3,-1.5).lineTo(90.4,-1.5).curveTo(92.2,-1.7,95.2,-1.5).lineTo(100.1,-1.4).curveTo(100.8,-1.2,104.4,-1.2).curveTo(104.5,-1.4,107.2,-1.5).lineTo(106,-1.3).lineTo(107.9,-1.4).lineTo(107.6,-1.3).curveTo(107.5,-1.2,109.8,-1.2).curveTo(111.3,-1.3,110.5,-1.3).curveTo(110.4,-1.4,110.3,-1.4).curveTo(110.2,-1.4,110.2,-1.4).curveTo(110.3,-1.4,110.4,-1.4).curveTo(110.5,-1.4,110.7,-1.4).curveTo(110.5,-1.3,112.8,-1.3).curveTo(115.3,-1.3,115.8,-1.2).lineTo(121.6,-1.4).lineTo(121.2,-1.3).lineTo(124.7,-1.4).lineTo(123.1,-1.3).lineTo(127,-1.3).curveTo(129.3,-1.4,129.8,-1.3).curveTo(131.6,-1.3,131.3,-1.4).curveTo(131.9,-1.3,136.8,-1.4).lineTo(136,-1.3).lineTo(138.3,-1.3).curveTo(137.5,-1.3,137.4,-1.2).lineTo(144.7,-1.2).lineTo(144.8,-1.2).curveTo(148.3,-1.2,153.2,-1.3).curveTo(152.4,-1.2,153.5,-1.1).lineTo(155.9,-1.3).lineTo(158,-1.4).curveTo(158.2,-1.4,157.5,-1.3).curveTo(156.8,-1.3,157.6,-1.2).lineTo(160.4,-1.4).lineTo(160.2,-1.2).curveTo(163.3,-1.4,170.2,-1.1).curveTo(176.4,-1,179.3,-1.2).lineTo(179,-1.4).lineTo(182.2,-1.3).curveTo(184.1,-1.3,184.9,-1.1).lineTo(185.5,-1.2).lineTo(186.4,-1).lineTo(187.6,-1.2).lineTo(187.5,-1.1).lineTo(189,-1.2).curveTo(189.1,-1.2,189.1,-1.2).curveTo(189.1,-1.1,189.1,-1.1).curveTo(189.1,-1.1,189.1,-1.1).curveTo(189.1,-1.1,189,-1).curveTo(190.8,-1.2,191.9,-1.1).lineTo(194.2,-1).curveTo(194.1,-1,194.2,-1).curveTo(196,-1.1,198,-1).lineTo(201.9,-1).lineTo(201.3,-0.9).lineTo(204.9,-0.9).lineTo(204.2,-1).lineTo(206.2,-0.8).lineTo(207.5,-0.9).lineTo(207.5,-0.8).lineTo(213.2,-0.9).curveTo(211.6,-0.8,213.4,-0.8).lineTo(218.7,-0.8).curveTo(218.6,-0.8,218.6,-0.8).curveTo(218.5,-0.8,218.5,-0.8).curveTo(218.5,-0.8,218.5,-0.8).curveTo(218.5,-0.8,218.5,-0.7).lineTo(219,-0.7).curveTo(221.6,-0.7,220.7,-0.9).lineTo(219.1,-0.9).curveTo(220.2,-1,221,-0.9).curveTo(221.8,-0.8,222.9,-0.8).lineTo(223.2,-0.9).lineTo(223.3,-0.9).curveTo(223.6,-0.8,225.6,-0.8).curveTo(227,-0.8,225.7,-0.7).curveTo(227.2,-0.6,229.4,-0.8).lineTo(228.2,-0.9).lineTo(234.3,-0.8).lineTo(234,-0.7).curveTo(233.8,-0.7,234,-0.7).lineTo(235.3,-0.7).lineTo(234.7,-0.7).curveTo(236.3,-0.5,239,-0.6).curveTo(241.7,-0.7,243.2,-0.6).lineTo(243.1,-0.7).lineTo(243.2,-0.7).curveTo(244.2,-0.8,245.8,-0.7).curveTo(245.9,-0.6,251,-0.6).curveTo(251.6,-0.8,253.7,-0.8).curveTo(256.1,-0.7,257.3,-0.4).lineTo(266,-0.6).curveTo(266.4,-0.5,264.8,-0.5).lineTo(269,-0.5).curveTo(271.9,-0.6,273.8,-0.5).lineTo(273.7,-0.6).curveTo(274.9,-0.6,274.8,-0.5).curveTo(274.7,-0.4,276.4,-0.4).lineTo(276,-0.5).lineTo(279.8,-0.5).curveTo(279.4,-0.5,280.5,-0.4).curveTo(281.3,-0.4,280.5,-0.4).lineTo(282.1,-0.4).lineTo(282.1,-0.4).curveTo(284.3,-0.4,284,-0.5).lineTo(285.2,-0.4).lineTo(285.6,-0.6).lineTo(286.7,-0.5).lineTo(287.7,-0.4).lineTo(289.4,-0.5).lineTo(289.3,-0.4).lineTo(290.5,-0.5).curveTo(288.5,-0.3,290.4,-0.2).lineTo(292.3,-0.3).lineTo(294.4,-0.3).curveTo(292.9,-0.4,294.4,-0.2).curveTo(296.4,-0.2,294.9,-0.1).lineTo(303.6,-0.2).curveTo(302.8,0.1,309.5,-0.2).lineTo(309.7,-0.1).lineTo(314.2,-0.1).curveTo(313,-0.1,313.7,-0).lineTo(314.5,0.1).lineTo(317.5,-0.1).lineTo(315.7,0.1).curveTo(316,0.2,317.5,0.1).lineTo(317.5,0.2).lineTo(320.4,0.2).lineTo(319.4,0.3).curveTo(318.4,0.3,319.4,0.4).lineTo(321.7,0.3).lineTo(321.4,0.3).lineTo(325,0.1).curveTo(327.1,-0,329.2,0.1).lineTo(327.3,0.2).lineTo(326.7,0.4).curveTo(327.9,0.3,327.9,0.4).curveTo(328,0.4,328,0.4).curveTo(328,0.5,328.1,0.5).curveTo(328.2,0.5,328.2,0.5).curveTo(328.3,0.5,328.4,0.5).lineTo(328.8,0.2).curveTo(330.3,0.3,330,0.4).curveTo(329.9,0.4,329.9,0.4).curveTo(329.8,0.5,329.8,0.5).curveTo(329.8,0.5,329.8,0.5).curveTo(329.8,0.6,329.9,0.6).curveTo(332.9,0.6,332.4,0.5).curveTo(335.3,0.5,332.9,0.6).curveTo(334.5,0.7,335.2,0.6).lineTo(335.9,0.4).curveTo(340.1,0.7,343.2,0.7).curveTo(339.7,1.1,337.7,0.7).curveTo(337.1,0.8,337.9,1).curveTo(338.6,1.1,339.8,1).curveTo(338.2,1.1,337.5,1).curveTo(337.5,1,337.5,1).curveTo(337.5,0.9,337.5,0.9).curveTo(337.4,0.9,337.4,0.9).curveTo(337.4,0.9,337.3,0.9).curveTo(336.8,0.8,334.9,0.8).curveTo(333.9,0.9,333.7,1.1).curveTo(333.6,1.2,330.7,1.2).lineTo(330.2,1.1).lineTo(332.3,1.1).curveTo(332.7,0.9,331.5,1).curveTo(330.5,1,330.9,0.9).lineTo(327.4,1).lineTo(324.2,1.1).curveTo(323.1,1,324.6,1).curveTo(326.2,0.9,325.6,0.8).lineTo(323.5,0.8).curveTo(325.3,0.8,324.5,0.7).lineTo(323.1,0.6).curveTo(322.7,0.7,321.6,0.7).curveTo(320.8,0.7,321.4,0.8).lineTo(314.8,0.9).curveTo(311.6,0.9,310.2,0.8).lineTo(308.7,0.9).lineTo(302.5,0.8).curveTo(303.4,0.6,301.4,0.7).curveTo(300.5,0.8,298.9,0.8).lineTo(298,0.7).lineTo(293.8,0.8).lineTo(293.8,0.8).curveTo(290.4,0.8,294.4,1).lineTo(292.8,1).curveTo(293.9,1.1,292.1,1.2).lineTo(289,1.2).lineTo(290.2,1.1).lineTo(290.9,0.9).lineTo(288.6,0.8).curveTo(287.5,0.9,288,0.9).lineTo(288.7,1).lineTo(286.7,0.9).lineTo(287.2,0.9).lineTo(284.2,0.7).lineTo(283.8,0.8).curveTo(282.5,0.7,283.6,0.6).lineTo(282.5,0.5).lineTo(281.3,0.6).curveTo(281.9,0.6,279.6,0.7).curveTo(277.1,0.8,278.2,1).lineTo(274.9,1.1).curveTo(275.1,1.2,275.9,1.2).lineTo(275.6,1.2).lineTo(277.3,1.4).curveTo(274.3,1.3,274.4,1.1).lineTo(270.9,1.2).lineTo(271.6,1.1).lineTo(271,1.1).lineTo(274.5,0.9).curveTo(272.2,0.9,272.5,0.8).curveTo(272.8,0.6,274.1,0.6).curveTo(272.1,0.4,270.5,0.4).lineTo(269.3,0.6).lineTo(268.7,0.4).lineTo(267.1,0.4).curveTo(266.2,0.5,266.3,0.6).curveTo(267.8,0.6,266.8,0.8).lineTo(265.3,1.1).lineTo(265,0.9).lineTo(264.2,0.9).curveTo(265,0.8,264.3,0.7).lineTo(261.8,0.8).curveTo(260.9,0.8,260.8,0.9).lineTo(259.8,0.9).curveTo(260.4,0.9,259.8,1).lineTo(258.9,1.1).lineTo(258.2,1).lineTo(256.3,1.2).lineTo(250,1).lineTo(249.1,1.1).lineTo(248.6,0.9).lineTo(247,0.8).curveTo(246.8,0.9,244.7,0.9).curveTo(242.6,0.9,242.4,1.1).curveTo(241.8,0.9,240,0.9).curveTo(238.5,0.9,238.7,0.8).curveTo(233.2,0.9,233.1,1.1).lineTo(233.2,0.9).lineTo(230.8,0.9).lineTo(228.6,0.9).curveTo(226.4,0.8,226.4,0.7).curveTo(223.5,0.7,226,0.9).curveTo(223.2,0.7,220.9,0.8).curveTo(217.7,0.9,217.4,1).lineTo(218.3,1.1).lineTo(215.9,0.8).curveTo(215.6,0.9,214.1,0.9).lineTo(210.9,0.8).lineTo(211.4,0.7).lineTo(208.8,0.8).curveTo(208.4,0.9,209.4,0.9).lineTo(210.3,1.1).curveTo(207.5,1.1,205.3,0.9).curveTo(203.2,0.8,203.7,0.6).lineTo(200.2,0.8).lineTo(201.2,0.9).lineTo(197,1).curveTo(194.4,1.2,191.8,1.2).lineTo(193.2,1.4).curveTo(194.3,1.4,193.7,1.5).curveTo(189.1,1.6,187.3,1.4).curveTo(188.2,1.3,187,1.2).curveTo(185.7,1.1,186.3,1).lineTo(184.8,1.1).lineTo(183.9,1.3).curveTo(184,1.2,184.1,1.2).curveTo(184.1,1.2,184.1,1.1).curveTo(184.1,1.1,184,1).curveTo(184,1,183.8,0.9).lineTo(180.2,0.9).curveTo(180.4,0.9,180.5,0.9).curveTo(180.5,1,180.5,1).curveTo(180.4,1,180.3,1).curveTo(180.1,1,179.8,1.1).curveTo(179.5,1,177,1).lineTo(174,0.9).curveTo(172,1.1,171.4,1).lineTo(172.7,0.9).lineTo(170.5,0.8).curveTo(171.4,0.9,169.3,1).curveTo(167.4,1,168.5,1.1).curveTo(167.5,1.2,165.3,1.1).lineTo(166.2,1.1).lineTo(166.2,1).lineTo(161.8,1).lineTo(160.9,1.1).lineTo(161.7,1.2).lineTo(158,1.2).curveTo(157.3,1.2,158.1,1.3).lineTo(157.4,1.3).curveTo(157.6,1.3,157.6,1.3).curveTo(157.7,1.3,157.7,1.2).curveTo(157.6,1.2,157.4,1.2).curveTo(157.3,1.2,157,1.2).curveTo(155.8,1,154.7,1.1).curveTo(155.2,1,156.1,1).curveTo(156.6,1,155.5,0.9).lineTo(152.1,1.2).curveTo(150,1.3,147.1,1.3).curveTo(142.9,1.1,142.4,1.4).lineTo(142.4,1.3).lineTo(139,1.4).lineTo(140.4,1.3).curveTo(141.5,1.3,141.4,1.2).lineTo(136.3,1.2).curveTo(139.3,1.2,139,1.1).lineTo(131.9,1.2).curveTo(131.8,1.2,131.8,1.2).curveTo(131.8,1.3,131.8,1.3).curveTo(131.8,1.3,131.9,1.3).curveTo(131.9,1.3,132.1,1.3).lineTo(125.6,1.4).lineTo(124.7,1.5).curveTo(126.4,1.6,127.8,1.6).lineTo(130.6,1.6).curveTo(130.1,1.7,128,1.6).lineTo(124.8,1.6).curveTo(124.7,1.5,122.5,1.3).lineTo(117.4,1.2).curveTo(116.6,1.3,117.5,1.3).lineTo(116.8,1.4).curveTo(114.7,1.4,114.8,1.1).curveTo(114.9,0.9,112.8,1.1).lineTo(113.2,1.3).curveTo(110,1.2,109.4,1.3).curveTo(109.4,1.2,108,1.3).curveTo(107.2,1.3,108.1,1.2).curveTo(108.5,1.3,109.2,1.1).lineTo(104.1,0.9).lineTo(104.8,0.9).curveTo(103.3,0.8,102.8,0.9).lineTo(100.8,1.1).lineTo(100.7,1.1).curveTo(100.9,0.9,99.3,0.9).curveTo(98.2,1,98.6,1.1).lineTo(99.1,1.2).lineTo(97,1.2).lineTo(96.6,1.4).lineTo(94.3,1.4).curveTo(95.2,1.3,97.5,0.9).curveTo(99.2,1,99.4,0.8).curveTo(97.6,0.8,95.5,0.9).curveTo(93.7,1,92.6,0.9).lineTo(92.7,1.1).lineTo(93.8,1.2).lineTo(91.5,1.3).lineTo(92,1.3).lineTo(88,1.2).curveTo(85.9,1.2,84.8,1.3).lineTo(84.9,1.2).lineTo(80.4,1.3).lineTo(81.8,1.2).curveTo(81.2,1.1,80.1,1.2).lineTo(78.1,1.2).curveTo(77.6,1.3,78.3,1.4).lineTo(79.3,1.4).curveTo(77.5,1.7,76.1,1.5).curveTo(77.9,1.6,78,1.5).lineTo(72.8,1.5).lineTo(74.2,1.3).lineTo(70,1.4).curveTo(70.1,1.3,68.5,1.3).lineTo(68.1,1.4).lineTo(67,1.4).curveTo(67,1.3,66.2,1.2).curveTo(64.9,1.2,61.6,1.5).lineTo(58.3,1.4).lineTo(54.6,1.3).lineTo(50.9,1.4).lineTo(49.9,1.5).curveTo(48.7,1.5,48.6,1.6).curveTo(49.6,1.7,50.6,1.6).curveTo(51.3,1.5,51.7,1.6).lineTo(48.7,1.7).lineTo(48.5,1.7).curveTo(45.7,1.7,42.1,1.9).curveTo(38.4,2.2,34.8,2.1).curveTo(35.9,2,35.4,2).curveTo(34.2,1.9,33.6,2).lineTo(32,2.1).lineTo(22.6,2.1).curveTo(25,2,23.2,2).lineTo(20.5,1.9).lineTo(19.6,2).curveTo(19.4,2,19.3,2).curveTo(19.2,2,19.1,2).curveTo(19.1,2,19.2,2).curveTo(19.2,2,19.4,2).curveTo(19.6,1.9,19.7,1.9).curveTo(19.9,1.9,19.9,1.9).curveTo(19.9,1.9,19.9,1.9).curveTo(19.9,1.9,19.7,1.9).lineTo(17.3,2).lineTo(17,1.7).curveTo(10.7,1.8,9.3,1.9).lineTo(-20.5,2.1).lineTo(-21.3,2.1).lineTo(-23.6,2).closePath();
	this.shape.setTransform(343.2625,2.0996);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, rect = new cjs.Rectangle(0,0,686.5,4.2), [rect]);


(lib.Group_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C6AF81").beginStroke().moveTo(169.2,2.1).lineTo(149.4,1.9).curveTo(147.3,1.7,146.8,1.8).curveTo(146.9,1.7,144.7,1.7).lineTo(141.3,1.8).lineTo(141.5,1.7).lineTo(139.8,1.7).lineTo(138.1,1.9).lineTo(136.9,1.7).curveTo(134.4,1.7,133.7,1.8).curveTo(122.9,1.7,118.8,1.9).curveTo(118.3,1.8,113.1,1.8).lineTo(113,1.6).lineTo(111.7,1.8).lineTo(109.9,1.6).lineTo(109.8,1.7).lineTo(109,1.7).curveTo(108.1,1.7,108.2,1.6).lineTo(101.5,1.9).lineTo(101.9,1.8).curveTo(100.8,1.9,99.9,1.7).curveTo(99,1.6,97.7,1.8).curveTo(92.3,1.9,86.1,1.6).lineTo(84.3,1.7).lineTo(86.4,1.8).lineTo(83.5,1.8).lineTo(83.8,1.7).lineTo(75.1,1.9).lineTo(65.9,1.7).curveTo(60,1.7,57.3,1.5).lineTo(56.6,1.8).lineTo(56.4,1.7).lineTo(55.7,1.5).curveTo(54.5,1.6,54.5,1.8).lineTo(53.2,1.6).curveTo(53.1,1.8,51.3,1.7).curveTo(49.5,1.6,49.1,1.8).curveTo(48.8,1.7,47.7,1.7).curveTo(46.6,1.6,46.1,1.7).curveTo(46.5,1.5,45,1.6).curveTo(45.1,1.6,45.1,1.6).curveTo(45.1,1.7,45,1.7).curveTo(45,1.7,44.9,1.7).curveTo(44.9,1.7,44.8,1.7).lineTo(43.5,1.8).lineTo(42.2,1.7).lineTo(40.8,1.6).lineTo(41.3,1.6).curveTo(40.5,1.5,38.3,1.6).lineTo(38.5,1.7).curveTo(38.5,1.8,38.6,1.8).curveTo(38.6,1.8,38.6,1.8).curveTo(38.6,1.8,38.6,1.8).curveTo(38.5,1.8,38.5,1.8).lineTo(37.8,1.7).curveTo(37.7,1.7,37.7,1.7).curveTo(37.6,1.7,37.7,1.6).curveTo(37.7,1.6,37.8,1.6).curveTo(37.9,1.6,38.1,1.5).lineTo(36.8,1.5).lineTo(36,1.7).lineTo(36.8,1.8).lineTo(31.9,1.7).curveTo(32.1,1.7,32.2,1.7).curveTo(32.3,1.7,32.3,1.7).curveTo(32.2,1.7,32,1.6).curveTo(31.8,1.6,31.5,1.6).lineTo(28.8,1.8).lineTo(28.1,1.6).lineTo(27.9,1.7).lineTo(27.7,1.7).lineTo(26.3,1.8).curveTo(25.2,1.5,23.9,1.7).lineTo(24.5,1.8).curveTo(23,1.7,22.4,1.8).lineTo(22.4,1.7).lineTo(14,1.7).lineTo(13.9,1.7).lineTo(10,1.9).lineTo(-1.7,1.8).lineTo(-2.4,1.9).lineTo(-2.5,1.8).curveTo(-4.4,1.8,-7.7,1.7).lineTo(-12.7,1.5).lineTo(-12.7,1.7).curveTo(-14.1,1.8,-14.5,1.6).lineTo(-20.8,1.7).curveTo(-20.7,1.6,-21.5,1.6).lineTo(-22.9,1.6).curveTo(-23.7,1.8,-24.5,1.7).lineTo(-26.5,1.7).lineTo(-26.2,1.7).lineTo(-28.7,1.7).lineTo(-28.6,1.7).lineTo(-30.4,1.7).lineTo(-31.7,1.7).curveTo(-31.6,1.5,-33.3,1.6).lineTo(-35.3,1.8).curveTo(-36.7,1.6,-37.9,1.7).lineTo(-37.6,1.7).lineTo(-39.2,1.7).lineTo(-39,1.6).curveTo(-40.7,1.5,-43.1,1.6).lineTo(-42.8,1.6).lineTo(-49.4,1.6).lineTo(-49.4,1.6).lineTo(-52,1.7).lineTo(-51.6,1.6).lineTo(-53,1.6).curveTo(-54.1,1.7,-55.9,1.5).curveTo(-58.1,1.4,-59.3,1.4).lineTo(-58.9,1.4).curveTo(-59.2,1.3,-60.1,1.3).lineTo(-61.5,1.2).curveTo(-61.6,1.4,-63.2,1.5).lineTo(-62.5,1.4).lineTo(-63.5,1.4).curveTo(-63.4,1.3,-64,1.3).lineTo(-64.9,1.3).curveTo(-64.1,1.4,-65.4,1.4).lineTo(-66.7,1.3).curveTo(-68.2,1.4,-68.5,1.3).lineTo(-72.1,1.4).lineTo(-71.9,1.3).lineTo(-73.9,1.4).lineTo(-73,1.3).lineTo(-75.4,1.4).curveTo(-76.8,1.4,-77.1,1.3).curveTo(-78.1,1.3,-78,1.4).lineTo(-81.4,1.4).lineTo(-80.9,1.3).curveTo(-81.6,1.4,-82.5,1.3).curveTo(-81.8,1.3,-81.8,1.2).curveTo(-84.9,1.1,-86.2,1.2).lineTo(-86.3,1.3).curveTo(-87.2,1.2,-91.9,1.3).lineTo(-91.3,1.3).curveTo(-91.2,1.3,-91.2,1.3).curveTo(-91.2,1.3,-91.2,1.2).curveTo(-91.2,1.2,-91.3,1.2).curveTo(-91.4,1.2,-91.6,1.2).lineTo(-94.4,1.4).curveTo(-94.4,1.4,-94.4,1.4).curveTo(-94.4,1.4,-94.3,1.4).curveTo(-94.3,1.4,-94.2,1.4).curveTo(-94.1,1.4,-94,1.3).curveTo(-93.6,1.3,-94.1,1.2).lineTo(-95.7,1.4).lineTo(-95.7,1.3).curveTo(-97.3,1.3,-101.8,1.2).curveTo(-105.5,1,-107.3,1.2).lineTo(-107.2,1.4).lineTo(-109.1,1.3).curveTo(-110.3,1.3,-110.8,1.1).lineTo(-111.1,1.2).lineTo(-111.7,1).lineTo(-112.5,1.3).lineTo(-112.4,1.1).lineTo(-113.2,1.2).lineTo(-113.3,1.1).curveTo(-114.3,1.2,-115,1.1).lineTo(-116.6,1.1).lineTo(-116.4,1).curveTo(-117.6,1.1,-118.8,1).lineTo(-121.2,1).lineTo(-120.7,0.9).lineTo(-123,0.9).lineTo(-123.7,0.8).lineTo(-124.6,0.9).lineTo(-124.5,0.8).lineTo(-127.9,0.9).lineTo(-127.8,0.9).lineTo(-128.1,0.8).lineTo(-131.5,0.8).curveTo(-130.5,0.7,-131.6,0.7).curveTo(-133.4,0.7,-132.6,0.9).lineTo(-131.7,0.9).curveTo(-132.4,1,-132.8,0.9).lineTo(-134,0.8).curveTo(-134,0.8,-134,0.8).curveTo(-134,0.9,-134,0.9).curveTo(-134,0.9,-134,0.9).curveTo(-134,0.9,-134.1,0.9).lineTo(-135,0.9).lineTo(-134.2,0.9).lineTo(-135.6,0.8).curveTo(-136.5,0.8,-135.7,0.7).lineTo(-137.9,0.8).lineTo(-137.2,0.9).lineTo(-141,0.8).curveTo(-140.9,0.8,-140.8,0.8).curveTo(-140.8,0.8,-140.7,0.8).curveTo(-140.7,0.8,-140.7,0.7).curveTo(-140.7,0.7,-140.7,0.7).lineTo(-141.4,0.7).curveTo(-142.3,0.6,-143.8,0.7).curveTo(-145.4,0.8,-146.4,0.6).lineTo(-146.3,0.8).lineTo(-146.4,0.7).lineTo(-147.4,0.7).lineTo(-148,0.8).curveTo(-148,0.7,-149.2,0.7).lineTo(-151.2,0.7).curveTo(-151.5,0.8,-152.8,0.8).curveTo(-154.3,0.7,-155,0.5).lineTo(-160.1,0.6).lineTo(-159.6,0.5).lineTo(-162.1,0.5).curveTo(-163.9,0.6,-165.1,0.5).lineTo(-165,0.6).curveTo(-165.7,0.6,-165.7,0.5).curveTo(-165.7,0.4,-166.7,0.4).lineTo(-166.4,0.5).lineTo(-168.7,0.6).curveTo(-168.7,0.6,-168.7,0.6).curveTo(-168.7,0.5,-168.7,0.5).curveTo(-168.8,0.5,-168.9,0.5).curveTo(-169,0.5,-169.2,0.5).curveTo(-169.7,0.5,-169.2,0.4).lineTo(-170.2,0.4).curveTo(-171.6,0.4,-171.3,0.5).lineTo(-172,0.4).lineTo(-172.3,0.6).lineTo(-172.9,0.5).lineTo(-173.6,0.4).lineTo(-174.6,0.5).lineTo(-174.6,0.4).lineTo(-175.3,0.5).curveTo(-173.9,0.3,-175.3,0.2).curveTo(-176.5,0.4,-177.7,0.4).curveTo(-176.7,0.3,-177.7,0.2).curveTo(-178.9,0.2,-177.9,0.1).curveTo(-181.2,0.1,-183.4,0.3).curveTo(-183,0,-184.6,0.1).lineTo(-187,0.2).lineTo(-187.1,0.1).lineTo(-189.8,0.2).curveTo(-189.6,0.2,-189.4,0.2).curveTo(-189.3,0.2,-189.3,0.1).curveTo(-189.3,0.1,-189.3,0.1).curveTo(-189.3,0.1,-189.4,0.1).lineTo(-190,-0.1).lineTo(-191.8,0.1).lineTo(-190.8,-0.1).curveTo(-191,-0.2,-191.8,-0.1).lineTo(-191.8,-0.2).lineTo(-193.6,-0.1).lineTo(-192.9,-0.2).curveTo(-192.4,-0.3,-193,-0.3).lineTo(-194.3,-0.3).lineTo(-194.1,-0.3).lineTo(-196.3,-0.1).curveTo(-197.7,0,-198.9,-0.1).curveTo(-197.9,-0.1,-197.8,-0.2).lineTo(-197.4,-0.4).curveTo(-198.1,-0.3,-198.2,-0.4).lineTo(-198.4,-0.5).lineTo(-198.8,-0.2).curveTo(-199.6,-0.3,-199.5,-0.4).curveTo(-199.4,-0.4,-199.4,-0.4).curveTo(-199.4,-0.4,-199.4,-0.4).curveTo(-199.3,-0.5,-199.4,-0.5).curveTo(-199.4,-0.5,-199.4,-0.5).lineTo(-200.5,-0.5).curveTo(-200.6,-0.5,-200.7,-0.5).curveTo(-200.8,-0.5,-200.9,-0.5).curveTo(-200.9,-0.5,-200.9,-0.4).curveTo(-200.9,-0.4,-200.9,-0.4).lineTo(-201.5,-0.5).curveTo(-201.6,-0.5,-201.6,-0.5).curveTo(-201.6,-0.5,-201.6,-0.5).curveTo(-201.6,-0.5,-201.5,-0.5).curveTo(-201.4,-0.5,-201.3,-0.6).lineTo(-202.6,-0.6).lineTo(-203.1,-0.4).curveTo(-204.8,-0.4,-207.5,-0.7).curveTo(-204.8,-0.9,-204.2,-0.7).curveTo(-203.7,-0.8,-204.3,-0.9).lineTo(-205.5,-1).lineTo(-204,-1).lineTo(-203.8,-0.8).curveTo(-203.6,-0.7,-202.4,-0.8).curveTo(-201.8,-0.8,-201.7,-1).curveTo(-201.6,-1.2,-199.8,-1.1).lineTo(-200.8,-1).curveTo(-201.1,-0.9,-200.4,-0.9).curveTo(-200.2,-0.9,-200.1,-0.9).curveTo(-200,-0.9,-199.9,-0.9).curveTo(-199.9,-0.9,-199.9,-0.9).curveTo(-199.9,-0.9,-200,-0.9).lineTo(-197.9,-0.9).lineTo(-196,-1.1).curveTo(-195.3,-1,-196.2,-0.9).curveTo(-197.2,-0.8,-196.8,-0.8).lineTo(-195.7,-0.8).curveTo(-195.9,-0.8,-196,-0.8).curveTo(-196.2,-0.8,-196.2,-0.7).curveTo(-196.2,-0.7,-196.2,-0.7).curveTo(-196.2,-0.7,-196.1,-0.7).lineTo(-195.2,-0.5).curveTo(-195,-0.6,-194.3,-0.6).curveTo(-193.9,-0.7,-194.2,-0.8).lineTo(-190.1,-0.9).curveTo(-187.7,-0.9,-187,-0.7).curveTo(-186.5,-0.8,-186.9,-0.8).curveTo(-187.2,-0.8,-186.4,-0.9).curveTo(-185.6,-0.8,-182.7,-0.8).curveTo(-183.4,-0.6,-181.9,-0.7).lineTo(-180.4,-0.8).curveTo(-180.5,-0.7,-179.9,-0.7).lineTo(-179.2,-0.7).lineTo(-178.6,-0.6).lineTo(-177.3,-0.8).lineTo(-177.3,-0.7).curveTo(-175.3,-0.8,-177.6,-1).lineTo(-176.7,-1).curveTo(-178.1,-1.2,-174.6,-1.2).lineTo(-175.2,-1.1).lineTo(-175.5,-0.9).lineTo(-174.1,-0.8).curveTo(-173,-0.8,-174.2,-1).lineTo(-172.9,-0.9).lineTo(-173.3,-0.9).lineTo(-171.5,-0.7).curveTo(-171.1,-0.7,-171.5,-0.8).lineTo(-170.8,-0.7).curveTo(-170.7,-0.6,-170.7,-0.6).curveTo(-170.7,-0.6,-170.7,-0.6).curveTo(-170.7,-0.6,-170.8,-0.6).curveTo(-170.9,-0.6,-171,-0.6).lineTo(-170.4,-0.5).lineTo(-169.6,-0.6).curveTo(-170.1,-0.6,-168.6,-0.7).curveTo(-167.1,-0.8,-167.8,-0.9).curveTo(-167.4,-0.9,-165.8,-1.1).curveTo(-165.9,-1.2,-166.4,-1.2).lineTo(-166.2,-1.2).lineTo(-167.2,-1.4).curveTo(-165.4,-1.3,-165.5,-1.1).lineTo(-163.8,-1.1).lineTo(-163.8,-1.1).lineTo(-163.3,-1.1).lineTo(-165.5,-0.9).curveTo(-164.2,-0.9,-164.3,-0.7).curveTo(-164.5,-0.6,-165.3,-0.5).lineTo(-164.2,-0.5).lineTo(-163.1,-0.4).lineTo(-162.3,-0.6).lineTo(-162,-0.4).curveTo(-160.3,-0.3,-160.5,-0.5).curveTo(-161.4,-0.6,-160.8,-0.8).lineTo(-159.9,-1).lineTo(-159.7,-0.9).lineTo(-159.3,-0.9).curveTo(-159.7,-0.8,-159.3,-0.7).lineTo(-157.8,-0.8).curveTo(-157.2,-0.8,-157.2,-0.9).lineTo(-156.6,-0.9).curveTo(-156.6,-0.9,-156.7,-0.9).curveTo(-156.7,-0.9,-156.7,-0.9).curveTo(-156.7,-0.9,-156.7,-0.9).curveTo(-156.6,-0.9,-156.6,-1).lineTo(-156,-1).lineTo(-155.6,-0.9).lineTo(-154.4,-1.2).lineTo(-152.2,-1.1).lineTo(-150.5,-0.9).lineTo(-150,-1).lineTo(-149.7,-0.9).curveTo(-149.4,-0.7,-148.7,-0.8).curveTo(-148.6,-0.9,-147.3,-0.9).curveTo(-146.1,-0.9,-145.9,-1.1).curveTo(-145.5,-0.9,-144.4,-0.9).curveTo(-143.5,-0.9,-143.7,-0.8).curveTo(-140.3,-0.9,-140.2,-1).lineTo(-140.3,-0.9).curveTo(-140.2,-1,-138.8,-0.9).curveTo(-138.8,-0.8,-137.5,-0.8).curveTo(-136.2,-0.8,-136.1,-0.6).curveTo(-135.3,-0.7,-135.4,-0.8).lineTo(-135.9,-0.9).curveTo(-134.1,-0.7,-132.7,-0.8).curveTo(-130.9,-0.8,-130.6,-1).lineTo(-129.7,-0.8).curveTo(-129.5,-0.9,-128.6,-0.9).lineTo(-126.7,-0.8).lineTo(-127,-0.7).lineTo(-125.3,-0.7).curveTo(-125.3,-0.7,-125.3,-0.8).curveTo(-125.3,-0.8,-125.3,-0.8).curveTo(-125.4,-0.8,-125.5,-0.9).curveTo(-125.6,-0.9,-125.8,-0.9).lineTo(-126.3,-1.1).curveTo(-124.5,-1.1,-123.2,-0.9).curveTo(-122,-0.8,-122.3,-0.6).lineTo(-120.2,-0.8).lineTo(-120.1,-0.8).lineTo(-118.2,-1).lineTo(-115,-1.2).curveTo(-114.9,-1.4,-116.2,-1.4).curveTo(-113.5,-1.5,-112.3,-1.4).curveTo(-112.8,-1.3,-112,-1.2).curveTo(-111.9,-1.1,-111.7,-1.1).curveTo(-111.6,-1.1,-111.6,-1.1).curveTo(-111.5,-1,-111.5,-1).curveTo(-111.6,-1,-111.7,-1).curveTo(-110.7,-1,-110.2,-1.2).lineTo(-110.2,-1.1).lineTo(-110.1,-0.9).lineTo(-107.9,-0.9).lineTo(-108,-1).curveTo(-108,-1,-108,-1).curveTo(-108,-1,-107.9,-1).curveTo(-107.9,-1,-107.8,-1).curveTo(-107.8,-1,-107.7,-1.1).curveTo(-107.2,-0.8,-106,-1).lineTo(-104.1,-0.9).lineTo(-103.3,-1).curveTo(-102.8,-1,-102.5,-0.9).lineTo(-103.3,-0.9).lineTo(-102,-0.8).curveTo(-102.4,-0.9,-101.1,-0.9).curveTo(-100.9,-0.9,-100.7,-0.9).curveTo(-100.5,-0.9,-100.5,-1).curveTo(-100.4,-1,-100.5,-1).curveTo(-100.5,-1,-100.7,-1).curveTo(-100.3,-1.1,-99.1,-1.1).lineTo(-99.3,-1).lineTo(-99.3,-0.9).lineTo(-96.6,-0.9).lineTo(-96.1,-1).lineTo(-96.5,-1.2).lineTo(-94.4,-1.2).curveTo(-93.9,-1.2,-94.4,-1.2).curveTo(-94.5,-1.2,-94.5,-1.2).curveTo(-94.5,-1.2,-94.5,-1.3).curveTo(-94.4,-1.3,-94.3,-1.3).curveTo(-94.2,-1.3,-93.9,-1.3).curveTo(-94.4,-1.2,-93.7,-1.1).lineTo(-92.3,-1).curveTo(-92.7,-0.9,-93.1,-1).curveTo(-93.2,-0.9,-93.2,-0.9).curveTo(-93.3,-0.9,-93.2,-0.9).curveTo(-93.2,-0.9,-93,-0.9).curveTo(-92.9,-0.8,-92.8,-0.8).lineTo(-90.7,-1.1).curveTo(-89.5,-1.3,-87.6,-1.3).lineTo(-85.8,-1.2).curveTo(-85,-1.2,-84.8,-1.3).lineTo(-82.8,-1.3).lineTo(-83.6,-1.3).lineTo(-84.2,-1.2).lineTo(-81.5,-1.2).curveTo(-82.9,-1.1,-82.7,-1).lineTo(-80.5,-1.1).lineTo(-78.4,-1.2).curveTo(-78.3,-1.2,-78.3,-1.2).curveTo(-78.3,-1.2,-78.3,-1.2).curveTo(-78.3,-1.2,-78.4,-1.3).curveTo(-78.4,-1.3,-78.5,-1.3).lineTo(-74.5,-1.3).lineTo(-73.9,-1.5).lineTo(-75.8,-1.5).lineTo(-77.5,-1.5).curveTo(-77,-1.7,-74,-1.6).curveTo(-74,-1.5,-72.7,-1.3).curveTo(-71,-1.4,-69.5,-1.2).curveTo(-69,-1.3,-69.5,-1.3).curveTo(-69.7,-1.3,-69.7,-1.3).curveTo(-69.7,-1.3,-69.7,-1.3).curveTo(-69.6,-1.3,-69.5,-1.3).curveTo(-69.4,-1.3,-69.2,-1.4).curveTo(-67.9,-1.4,-67.9,-1.1).curveTo(-68,-0.9,-66.7,-1.1).lineTo(-66.9,-1.3).curveTo(-65.1,-1.1,-64.6,-1.3).curveTo(-64.6,-1.2,-63.9,-1.2).lineTo(-64.5,-1.1).curveTo(-64.3,-1,-63.2,-0.9).lineTo(-61.3,-0.9).lineTo(-61.8,-0.9).curveTo(-60,-0.8,-59.4,-1).lineTo(-59.3,-1).curveTo(-59.2,-0.9,-58.5,-0.9).curveTo(-58.3,-0.9,-58.2,-0.9).curveTo(-58.1,-0.9,-58,-1).curveTo(-58,-1,-58,-1).curveTo(-58,-1,-58,-1).lineTo(-58.3,-1.2).lineTo(-57,-1.2).lineTo(-56.8,-1.4).curveTo(-56.8,-1.3,-55.5,-1.3).lineTo(-56.5,-1.2).lineTo(-57.4,-0.9).curveTo(-58.3,-1,-58.5,-0.8).curveTo(-57.4,-0.7,-56.1,-0.9).curveTo(-55,-1,-54.3,-0.9).curveTo(-54.3,-0.9,-54.3,-1).curveTo(-54.3,-1,-54.3,-1).curveTo(-54.3,-1,-54.4,-1).curveTo(-54.4,-1,-54.4,-1.1).lineTo(-55.1,-1.2).lineTo(-54,-1.3).curveTo(-50.4,-1.2,-49.5,-1.3).lineTo(-49.6,-1.2).lineTo(-48.1,-1.2).lineTo(-46.9,-1.3).lineTo(-47.8,-1.2).curveTo(-47.2,-1,-45.5,-1.2).curveTo(-45,-1.3,-46.2,-1.4).lineTo(-45.4,-1.5).curveTo(-44.7,-1.6,-44.2,-1.5).lineTo(-45.4,-1.4).lineTo(-42.3,-1.4).lineTo(-43.1,-1.3).curveTo(-41.6,-1.2,-40.6,-1.4).curveTo(-40.6,-1.3,-39.7,-1.3).lineTo(-39.4,-1.4).curveTo(-38,-1.4,-38.2,-1.2).curveTo(-36.8,-1.2,-35.4,-1.5).lineTo(-33.4,-1.4).lineTo(-31.1,-1.3).lineTo(-28.9,-1.3).lineTo(-28.2,-1.5).curveTo(-27.5,-1.5,-27.4,-1.6).curveTo(-28,-1.7,-28.7,-1.6).curveTo(-29.1,-1.5,-29.4,-1.6).lineTo(-27.4,-1.7).lineTo(-27.8,-1.7).curveTo(-25.9,-1.6,-23.5,-1.9).curveTo(-21.2,-2.2,-19,-2.1).lineTo(-19.2,-2).curveTo(-19.3,-2,-19.4,-2).curveTo(-19.4,-1.9,-19.4,-1.9).curveTo(-19.5,-1.9,-19.4,-1.9).curveTo(-19.4,-1.9,-19.4,-1.9).curveTo(-18.6,-1.9,-18.3,-2).lineTo(-17.2,-2.1).lineTo(-11.6,-2.1).curveTo(-13,-2,-11.9,-1.9).lineTo(-10.3,-1.8).lineTo(-9.8,-2).curveTo(-9.6,-1.9,-9.6,-1.9).curveTo(-9.5,-1.9,-9.5,-1.9).curveTo(-9.4,-1.9,-9.5,-1.9).curveTo(-9.5,-1.9,-9.6,-1.9).curveTo(-9.7,-1.9,-9.8,-1.9).curveTo(-9.9,-1.9,-9.9,-1.9).curveTo(-9.9,-1.8,-9.9,-1.8).curveTo(-9.9,-1.8,-9.8,-1.8).lineTo(-8.3,-1.9).lineTo(-8.2,-1.7).curveTo(-4.3,-1.8,-3.5,-1.9).curveTo(2.1,-1.9,14.8,-2.1).lineTo(16.7,-2).curveTo(17.4,-1.9,18.1,-2).lineTo(18.2,-1.9).lineTo(24,-1.8).curveTo(24.6,-1.8,23.9,-1.9).lineTo(25.8,-1.9).curveTo(24.7,-2,28.4,-2).curveTo(26.3,-2,26.5,-1.8).curveTo(27.6,-1.7,29.1,-1.9).lineTo(28.6,-1.8).lineTo(31,-1.8).curveTo(32.1,-1.7,33.6,-1.8).curveTo(33.8,-1.9,32.7,-1.9).lineTo(36.7,-1.9).curveTo(39.3,-1.8,40.9,-1.9).lineTo(40.6,-1.8).lineTo(42.1,-1.8).curveTo(42,-1.8,42,-1.8).curveTo(41.9,-1.8,41.9,-1.8).curveTo(41.9,-1.7,41.9,-1.7).curveTo(41.9,-1.7,42,-1.7).curveTo(42,-1.7,42.1,-1.7).curveTo(42.1,-1.6,42.1,-1.6).curveTo(42.1,-1.6,42.1,-1.6).curveTo(42.1,-1.6,42.1,-1.6).lineTo(43.4,-1.6).curveTo(43.9,-1.7,43.3,-1.8).curveTo(42.9,-1.9,44.1,-2).curveTo(43.7,-1.8,44.9,-1.8).lineTo(46.1,-1.8).curveTo(49.9,-1.7,55.9,-2).curveTo(56,-1.8,56.9,-1.7).lineTo(57.7,-1.7).lineTo(57.7,-1.7).curveTo(58.7,-1.6,59.1,-1.7).curveTo(59.6,-1.8,59,-1.9).lineTo(59.3,-1.9).curveTo(60.5,-1.9,61,-1.8).lineTo(60.9,-1.8).lineTo(60.9,-1.7).lineTo(62,-1.8).lineTo(62,-1.9).lineTo(74.3,-2).lineTo(79.1,-1.8).curveTo(81.2,-1.7,85.4,-1.9).lineTo(87.9,-1.8).curveTo(89.5,-1.9,89.5,-1.7).lineTo(90.8,-1.9).lineTo(90.8,-1.8).curveTo(92,-1.9,92.5,-1.8).lineTo(92.6,-1.9).curveTo(93.6,-1.8,97.8,-1.9).lineTo(99.6,-1.9).lineTo(99.7,-1.8).curveTo(102.4,-2,107.2,-1.9).lineTo(115,-1.9).curveTo(116.4,-1.8,119.1,-1.8).curveTo(121.6,-1.9,123.1,-1.7).curveTo(123.9,-1.6,124.1,-1.8).curveTo(124.2,-1.8,124.2,-1.8).curveTo(124.2,-1.8,124.1,-1.8).curveTo(124.1,-1.8,124,-1.8).curveTo(123.9,-1.9,123.7,-1.9).lineTo(137.9,-1.8).lineTo(152.6,-1.8).lineTo(163.8,-1.7).curveTo(170.4,-1.6,172.9,-1.5).curveTo(173.3,-1.6,172.2,-1.6).curveTo(173.1,-1.6,173.1,-1.5).lineTo(173,-1.4).lineTo(175.6,-1.6).lineTo(175.1,-1.7).lineTo(182.6,-1.6).curveTo(187.2,-1.6,189.8,-1.4).lineTo(189.9,-1.5).lineTo(193.8,-1.3).curveTo(196.2,-1.1,198.2,-1.2).lineTo(197.2,-1.1).curveTo(196.7,-1.1,197.2,-1).curveTo(199.6,-1.1,202.4,-1).lineTo(207.5,-0.6).lineTo(207.5,1.9).curveTo(195.2,2.1,178.1,2.1).lineTo(169.2,2.1).closePath().moveTo(109.8,1.7).lineTo(109.8,1.7).closePath().moveTo(-113.2,1.2).lineTo(-113.3,1.2).closePath().moveTo(-140.2,-1.1).lineTo(-140.2,-1).closePath();
	this.shape.setTransform(207.5,2.105);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0, rect = new cjs.Rectangle(0,0,415,4.2), [rect]);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.CompoundPath_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4A676").beginStroke().moveTo(-14,4.9).curveTo(-21.2,4.5,-32.1,4.2).lineTo(-50.3,3.7).curveTo(-72.6,2.9,-86.8,2.1).curveTo(-103.2,1.2,-122.6,-0.9).curveTo(-131.1,-1.8,-191.4,-3).lineTo(-302.1,-5).lineTo(-274.4,-5).lineTo(-292.7,-5.5).lineTo(-196.6,-4.8).curveTo(-138.8,-4.2,-134.3,-3.7).curveTo(-107.7,-0.9,-99,-0.3).curveTo(-86.4,0.5,-69,1.2).lineTo(-38.8,2.2).curveTo(-28.8,2.6,-8.8,3.6).curveTo(19.4,3.6,30.2,3.9).lineTo(30.4,3.8).lineTo(45.6,3.9).curveTo(54.5,3.9,60.8,3.6).lineTo(75.8,2.9).lineTo(90.8,2.2).lineTo(121,1.2).curveTo(138.4,0.5,151,-0.3).curveTo(159.7,-0.9,186.3,-3.7).curveTo(190.7,-4.2,248.6,-4.8).curveTo(267.7,-5,302,-5).lineTo(265.4,-4.2).lineTo(302.1,-4.3).curveTo(264.2,-3.3,243.4,-3).curveTo(183.1,-1.8,174.6,-0.9).curveTo(155.2,1.2,138.8,2.1).curveTo(124.6,2.9,102.3,3.7).curveTo(78.1,4.2,66,4.9).curveTo(59.3,5.3,50.5,5.3).lineTo(35.1,5.2).lineTo(29.9,5.2).lineTo(29.8,5.1).curveTo(24.3,4.9,20.8,5.1).curveTo(14.4,5.5,6.9,5.5).curveTo(-2.7,5.5,-14,4.9).closePath().moveTo(39,4.7).curveTo(53.6,4.8,60.8,4.4).lineTo(71.5,3.9).lineTo(65.9,4.1).curveTo(56.5,4.6,39.7,4.4).closePath();
	this.shape.setTransform(311.3375,5.8601);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_30, rect = new cjs.Rectangle(9.3,0.4,604.2,11.1), [rect]);


(lib.cellContainer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#6DCFF6").beginStroke().moveTo(-125,296).curveTo(-182.7,271.6,-227.1,227.1).curveTo(-271.6,182.7,-296,125).curveTo(-321.3,65.3,-321.2,0).curveTo(-321.3,-65.4,-296,-125).curveTo(-271.6,-182.7,-227.1,-227.1).curveTo(-182.7,-271.6,-125,-296).curveTo(-65.4,-321.3,0,-321.2).curveTo(65.3,-321.3,125,-296).curveTo(182.7,-271.6,227.1,-227.1).curveTo(271.6,-182.7,295.9,-125).curveTo(321.2,-65.4,321.2,0).curveTo(321.2,65.3,295.9,125).curveTo(271.6,182.7,227.1,227.1).curveTo(182.7,271.6,125,296).curveTo(65.3,321.3,0,321.2).curveTo(-65.4,321.3,-125,296).closePath();
	this.shape.setTransform(321.25,321.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cellContainer, rect = new cjs.Rectangle(0,0,642.5,642.5), [rect]);


(lib.Symbol111 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_100
	this.instance = new lib.Symbol100("synched",0);
	this.instance.setTransform(379.3,121.35,1,1,9.475,0,0,21.8,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:21.7,rotation:4.0076,y:121.3},47).to({regX:21.8,rotation:9.475,y:121.35},52).wait(1));

	// Symbol_99
	this.instance_1 = new lib.Symbol99("synched",0);
	this.instance_1.setTransform(374.8,112.05,1,1,9.475,0,0,20.8,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:20.7,regY:17,rotation:5.2505,y:112.25},47).to({regX:20.8,regY:16.9,rotation:9.475,y:112.05},52).wait(1));

	// Symbol_98
	this.instance_2 = new lib.Symbol98("synched",0);
	this.instance_2.setTransform(369.6,103.3,1,1,9.475,0,0,19.8,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:18.2,rotation:4.9969,x:369.55,y:103.4},47).to({regY:18.1,rotation:9.475,x:369.6,y:103.3},52).wait(1));

	// Symbol_97
	this.instance_3 = new lib.Symbol97("synched",0);
	this.instance_3.setTransform(364,94.95,1,1,9.475,0,0,18.9,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:5.2505,x:363.95,y:95},47).to({rotation:9.475,x:364,y:94.95},52).wait(1));

	// Symbol_96
	this.instance_4 = new lib.Symbol96("synched",0);
	this.instance_4.setTransform(357.7,86.9,1,1,9.475,0,0,17.9,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:18,rotation:5.9912},47).to({regX:17.9,rotation:9.475},52).wait(1));

	// Symbol_95
	this.instance_5 = new lib.Symbol95("synched",0);
	this.instance_5.setTransform(350.7,79.1,1,1,9.475,0,0,16.9,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:20.7,rotation:5.2278,x:350.8,y:79.05},47).to({regY:20.8,rotation:9.475,x:350.7,y:79.1},52).wait(1));

	// Symbol_94
	this.instance_6 = new lib.Symbol94("synched",0);
	this.instance_6.setTransform(343.45,71.9,1,1,9.475,0,0,15.9,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:16,rotation:5.2505,y:71.95},47).to({regX:15.9,rotation:9.475,y:71.9},52).wait(1));

	// Symbol_93
	this.instance_7 = new lib.Symbol93("synched",0);
	this.instance_7.setTransform(334.1,64,1,1,5.4839,0,0,14.8,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:22.1,rotation:2.0306,y:64.05},47).to({regY:22,rotation:5.4839,y:64},52).wait(1));

	// Symbol_88
	this.instance_8 = new lib.Symbol88("synched",0);
	this.instance_8.setTransform(388.1,160.45,1,1,0,0,0,24.8,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-6.2054,y:160.4},47).to({rotation:0,y:160.45},52).wait(1));

	// Symbol_87
	this.instance_9 = new lib.Symbol87("synched",0);
	this.instance_9.setTransform(387.2,150.1,1,1,0,0,0,24.6,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:24.7,regY:7.3,rotation:-4.4431,x:387.3,y:150.2},47).to({regX:24.6,regY:7.2,rotation:0,x:387.2,y:150.1},52).wait(1));

	// Symbol_86
	this.instance_10 = new lib.Symbol86("synched",0);
	this.instance_10.setTransform(385.3,140,1,1,0,0,0,24.2,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:24.3,regY:9.2,rotation:-4.7167,x:385.35,y:140.1},47).to({regX:24.2,regY:9.1,rotation:0,x:385.3,y:140},52).wait(1));

	// Symbol_85
	this.instance_11 = new lib.Symbol85("synched",0);
	this.instance_11.setTransform(382.6,130.15,1,1,0,0,0,23.8,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:23.9,rotation:-4.4878,x:382.7},47).to({regX:23.8,rotation:0,x:382.6},52).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(317.6,43,95.3,122.8);
p.frameBounds = [rect, new cjs.Rectangle(317.7,43,95.2,122.8), new cjs.Rectangle(317.7,43,95.2,122.9), new cjs.Rectangle(317.7,43.1,95.3,122.9), new cjs.Rectangle(317.8,43,95.1,123), rect=new cjs.Rectangle(317.8,43,95.1,123.1), rect, new cjs.Rectangle(317.8,43,95.2,123.2), new cjs.Rectangle(317.8,43,95.1,123.2), rect=new cjs.Rectangle(317.9,42.9,95,123.4), rect, rect, new cjs.Rectangle(317.9,42.9,95,123.5), new cjs.Rectangle(318,42.9,94.9,123.5), new cjs.Rectangle(318,42.9,94.9,123.6), new cjs.Rectangle(318,42.9,94.9,123.7), new cjs.Rectangle(318,42.8,94.9,123.7), rect=new cjs.Rectangle(318.1,42.9,94.8,123.8), rect, rect=new cjs.Rectangle(318.1,42.8,94.8,123.9), rect, new cjs.Rectangle(318.2,42.8,94.7,124), new cjs.Rectangle(318.2,42.8,94.8,124.1), new cjs.Rectangle(318.2,42.8,94.7,124.1), new cjs.Rectangle(318.2,42.8,94.8,124.1), new cjs.Rectangle(318.3,42.8,94.7,124.2), new cjs.Rectangle(318.3,42.8,94.6,124.2), new cjs.Rectangle(318.3,42.8,94.6,124.3), rect=new cjs.Rectangle(318.3,42.7,94.6,124.5), rect, rect=new cjs.Rectangle(318.4,42.7,94.5,124.5), rect, new cjs.Rectangle(318.4,42.7,94.5,124.6), new cjs.Rectangle(318.4,42.7,94.5,124.5), new cjs.Rectangle(318.5,42.7,94.4,124.8), new cjs.Rectangle(318.4,42.6,94.5,124.8), new cjs.Rectangle(318.5,42.7,94.4,124.9), new cjs.Rectangle(318.6,42.6,94.3,124.9), new cjs.Rectangle(318.6,42.6,94.3,125), new cjs.Rectangle(318.6,42.6,94.2,125), new cjs.Rectangle(318.5,42.6,94.4,125.1), new cjs.Rectangle(318.6,42.6,94.3,125.1), new cjs.Rectangle(318.6,42.6,94.3,125.2), new cjs.Rectangle(318.7,42.6,94.2,125.3), new cjs.Rectangle(318.7,42.6,94.2,125.2), new cjs.Rectangle(318.7,42.5,94.2,125.4), new cjs.Rectangle(318.7,42.5,94.2,125.5), new cjs.Rectangle(318.7,42.4,94.1,125.7), new cjs.Rectangle(318.7,42.4,94.1,125.6), new cjs.Rectangle(318.7,42.4,94.1,125.5), rect=new cjs.Rectangle(318.7,42.5,94.1,125.4), rect, new cjs.Rectangle(318.6,42.5,94.2,125.3), new cjs.Rectangle(318.7,42.5,94.2,125.2), new cjs.Rectangle(318.6,42.5,94.3,125.2), rect=new cjs.Rectangle(318.6,42.5,94.3,125.1), rect, rect=new cjs.Rectangle(318.6,42.6,94.3,125), rect, rect=new cjs.Rectangle(318.5,42.6,94.3,124.9), rect, rect=new cjs.Rectangle(318.5,42.6,94.3,124.8), rect, new cjs.Rectangle(318.5,42.6,94.4,124.7), new cjs.Rectangle(318.4,42.7,94.4,124.6), new cjs.Rectangle(318.4,42.7,94.5,124.5), new cjs.Rectangle(318.4,42.6,94.4,124.5), new cjs.Rectangle(318.4,42.7,94.5,124.4), rect=new cjs.Rectangle(318.3,42.7,94.5,124.4), rect, new cjs.Rectangle(318.3,42.7,94.5,124.2), rect=new cjs.Rectangle(318.3,42.7,94.6,124.2), rect, rect=new cjs.Rectangle(318.2,42.7,94.7,124.2), rect, new cjs.Rectangle(318.2,42.8,94.7,124), new cjs.Rectangle(318.2,42.7,94.7,124.1), new cjs.Rectangle(318.2,42.7,94.7,124), new cjs.Rectangle(318.1,42.8,94.7,123.9), new cjs.Rectangle(318.1,42.8,94.8,123.9), rect=new cjs.Rectangle(318.1,42.8,94.8,123.8), rect, new cjs.Rectangle(318,42.8,94.8,123.8), rect=new cjs.Rectangle(318,42.8,94.8,123.6), rect, new cjs.Rectangle(318,42.8,94.9,123.6), new cjs.Rectangle(317.9,42.8,94.9,123.6), rect=new cjs.Rectangle(317.9,42.9,94.9,123.4), rect, new cjs.Rectangle(317.9,42.8,94.9,123.4), new cjs.Rectangle(317.9,42.9,94.9,123.3), new cjs.Rectangle(317.8,42.9,95,123.2), new cjs.Rectangle(317.9,42.9,94.9,123.2), new cjs.Rectangle(317.8,42.9,95,123.2), new cjs.Rectangle(317.8,42.9,95.1,123.1), new cjs.Rectangle(317.8,42.9,95,123), new cjs.Rectangle(317.7,43,95.2,122.9), rect=new cjs.Rectangle(317.7,43,95.1,122.9), rect, new cjs.Rectangle(317.6,43,95.3,122.8)];


(lib.Symbol110 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_83
	this.instance = new lib.Symbol83("synched",0);
	this.instance.setTransform(269.55,34.5,1,1,12.1907,0,0,6.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.9784},47).to({rotation:12.1907},52).wait(1));

	// Symbol_82
	this.instance_1 = new lib.Symbol82("synched",0);
	this.instance_1.setTransform(259.5,31.55,1,1,12.1907,0,0,5.7,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:7.4631,x:259.6},47).to({rotation:12.1907,x:259.5},52).wait(1));

	// Symbol_81
	this.instance_2 = new lib.Symbol81("synched",0);
	this.instance_2.setTransform(249.6,28.95,1,1,12.1907,0,0,4.9,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.9999,scaleY:0.9999,rotation:6.2496},47).to({scaleX:1,scaleY:1,rotation:12.1907},52).wait(1));

	// Symbol_80
	this.instance_3 = new lib.Symbol80("synched",0);
	this.instance_3.setTransform(238.8,26.6,1,1,12.1907,0,0,5,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:7.9783},47).to({rotation:12.1907},52).wait(1));

	// Symbol_90
	this.instance_4 = new lib.Symbol90("synched",0);
	this.instance_4.setTransform(289.25,40.7,1,1,0,0,0,12,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:12.1,rotation:-3.7454,x:289.35},47).to({regX:12,rotation:0,x:289.25},52).wait(1));

	// Symbol_89
	this.instance_5 = new lib.Symbol89("synched",0);
	this.instance_5.setTransform(279.6,37.05,1,1,0,0,0,11.1,23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:11.2,rotation:-3.7323,x:279.7,y:37},47).to({regX:11.1,rotation:0,x:279.6,y:37.05},52).wait(1));

	// Symbol_83
	this.instance_6 = new lib.Symbol83("synched",0);
	this.instance_6.setTransform(229.3,26.1,1,1,0,0,0,6.6,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-5.2118},47).to({rotation:0},52).wait(1));

	// Symbol_82
	this.instance_7 = new lib.Symbol82("synched",0);
	this.instance_7.setTransform(219,25.3,1,1,0,0,0,5.7,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:5.8,rotation:-4.7274,x:219.15,y:25.25},47).to({regX:5.7,rotation:0,x:219,y:25.3},52).wait(1));

	// Symbol_81
	this.instance_8 = new lib.Symbol81("synched",0);
	this.instance_8.setTransform(208.7,24.8,1,1,0,0,0,4.9,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-5.9409},47).to({rotation:0},52).wait(1));

	// Symbol_80
	this.instance_9 = new lib.Symbol80("synched",0);
	this.instance_9.setTransform(197.65,24.8,1,1,0,0,0,5,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:24.9,rotation:-4.2116,x:197.7,y:24.95},47).to({regY:24.8,rotation:0,x:197.65,y:24.8},52).wait(1));

	// Symbol_79
	this.instance_10 = new lib.Symbol79("synched",0);
	this.instance_10.setTransform(187.3,25.3,1,1,0,0,0,5.8,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:5.9,rotation:-4.9659,x:187.45},47).to({regX:5.8,rotation:0,x:187.3},52).wait(1));

	// Symbol_78
	this.instance_11 = new lib.Symbol78("synched",0);
	this.instance_11.setTransform(177.05,26.1,1,1,0,0,0,6.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:-5.7256,x:177},47).to({rotation:0,x:177.05},52).wait(1));

	// Symbol_77
	this.instance_12 = new lib.Symbol77("synched",0);
	this.instance_12.setTransform(166.75,27.45,1,1,0,0,0,7.5,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:7.6,rotation:-5.4752,x:166.8,y:27.4},47).to({regX:7.5,rotation:0,x:166.75,y:27.45},52).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(159.3,0,142.1,64.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(159.2,0.1,142.1,64.1), rect, new cjs.Rectangle(159.2,0,142.1,64.1), new cjs.Rectangle(159.2,0,142,64.2), new cjs.Rectangle(159.1,0,142.1,64.2), rect=new cjs.Rectangle(159,0.1,142.2,64.1), rect, new cjs.Rectangle(158.9,0.1,142.2,64.2), rect=new cjs.Rectangle(158.9,0,142.2,64.2), rect, new cjs.Rectangle(158.8,0,142.3,64.2), new cjs.Rectangle(158.8,0,142.2,64.2), new cjs.Rectangle(158.7,0,142.4,64.2), new cjs.Rectangle(158.7,0,142.3,64.3), new cjs.Rectangle(158.7,0,142.2,64.3), new cjs.Rectangle(158.6,0,142.3,64.2), new cjs.Rectangle(158.6,0.1,142.3,64.2), new cjs.Rectangle(158.5,0.1,142.4,64.3), new cjs.Rectangle(158.5,0,142.3,64.3), new cjs.Rectangle(158.4,0,142.4,64.3), rect=new cjs.Rectangle(158.4,0.1,142.4,64.3), rect, new cjs.Rectangle(158.4,0.1,142.3,64.3), rect=new cjs.Rectangle(158.3,0.1,142.5,64.3), rect, new cjs.Rectangle(158.2,0.1,142.5,64.3), new cjs.Rectangle(158.2,0.1,142.5,64.4), new cjs.Rectangle(158.2,0.1,142.5,64.3), new cjs.Rectangle(158.1,0.1,142.6,64.3), new cjs.Rectangle(158.1,0.2,142.6,64.2), new cjs.Rectangle(158.1,0.1,142.5,64.3), new cjs.Rectangle(158,0.1,142.5,64.4), new cjs.Rectangle(157.9,0.1,142.6,64.4), new cjs.Rectangle(157.9,0.1,142.7,64.3), new cjs.Rectangle(157.9,0.1,142.6,64.4), new cjs.Rectangle(157.8,0.1,142.6,64.4), new cjs.Rectangle(157.8,0.1,142.6,64.5), new cjs.Rectangle(157.7,0.1,142.7,64.4), new cjs.Rectangle(157.7,0.1,142.6,64.4), new cjs.Rectangle(157.7,0.1,142.7,64.4), new cjs.Rectangle(157.6,0.2,142.8,64.4), new cjs.Rectangle(157.6,0.1,142.7,64.4), rect=new cjs.Rectangle(157.5,0.1,142.7,64.5), rect, new cjs.Rectangle(157.4,0.2,142.8,64.4), new cjs.Rectangle(157.4,0.2,142.7,64.4), new cjs.Rectangle(157.4,0.1,142.8,64.5), new cjs.Rectangle(157.3,0.1,142.8,64.4), new cjs.Rectangle(157.4,0,142.7,64.5), new cjs.Rectangle(157.5,0.1,142.7,64.5), new cjs.Rectangle(157.5,0.1,142.8,64.5), new cjs.Rectangle(157.5,0.1,142.6,64.5), new cjs.Rectangle(157.5,0.1,142.8,64.4), new cjs.Rectangle(157.5,0.1,142.7,64.5), new cjs.Rectangle(157.6,0.1,142.8,64.5), new cjs.Rectangle(157.7,0.1,142.7,64.5), new cjs.Rectangle(157.8,0.1,142.6,64.4), new cjs.Rectangle(157.7,0.1,142.6,64.5), new cjs.Rectangle(157.8,0.1,142.6,64.5), new cjs.Rectangle(157.8,0.1,142.6,64.4), rect=new cjs.Rectangle(157.9,0.1,142.5,64.4), rect, new cjs.Rectangle(157.9,0.1,142.5,64.3), rect=new cjs.Rectangle(158,0.1,142.6,64.4), rect, rect, rect, new cjs.Rectangle(158.1,0.1,142.5,64.3), new cjs.Rectangle(158.1,0.1,142.5,64.4), new cjs.Rectangle(158.2,0.1,142.4,64.3), new cjs.Rectangle(158.2,0.1,142.5,64.4), new cjs.Rectangle(158.2,0,142.5,64.4), new cjs.Rectangle(158.3,0.1,142.5,64.3), new cjs.Rectangle(158.3,0,142.4,64.3), new cjs.Rectangle(158.4,0.1,142.3,64.3), new cjs.Rectangle(158.4,0.1,142.4,64.3), new cjs.Rectangle(158.4,0,142.3,64.4), new cjs.Rectangle(158.5,0.1,142.3,64.3), new cjs.Rectangle(158.5,0,142.3,64.3), new cjs.Rectangle(158.5,0,142.4,64.3), rect=new cjs.Rectangle(158.6,0,142.3,64.3), rect, new cjs.Rectangle(158.7,0,142.2,64.3), new cjs.Rectangle(158.7,0,142.3,64.3), new cjs.Rectangle(158.7,0,142.4,64.2), new cjs.Rectangle(158.8,0,142.2,64.2), new cjs.Rectangle(158.8,0,142.1,64.3), new cjs.Rectangle(158.8,0.1,142.1,64.2), new cjs.Rectangle(158.8,0,142.2,64.2), new cjs.Rectangle(158.9,0,142.1,64.3), new cjs.Rectangle(158.9,0.1,142.2,64.1), new cjs.Rectangle(159,0,142.1,64.3), new cjs.Rectangle(159,0.1,142.1,64.2), new cjs.Rectangle(159.1,0,142,64.2), rect=new cjs.Rectangle(159.1,0,142.1,64.1), rect, new cjs.Rectangle(159.2,0,142.1,64.2), new cjs.Rectangle(159.2,0.1,142.1,64.1), new cjs.Rectangle(159.3,0,142.1,64.1)];


(lib.Symbol109 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_76
	this.instance = new lib.Symbol76("synched",0);
	this.instance.setTransform(146.6,33.8,1,1,0,0,0,8.4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.7379,x:145.95,y:32.6},47).to({rotation:0,x:146.6,y:33.8},52).wait(1));

	// Symbol_75
	this.instance_1 = new lib.Symbol75("synched",0);
	this.instance_1.setTransform(136.5,36.05,1,1,0,0,0,9.3,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:9.5,rotation:-4.7379,x:136.25,y:35.65},47).to({regX:9.3,rotation:0,x:136.5,y:36.05},52).wait(1));

	// Symbol_74
	this.instance_2 = new lib.Symbol74("synched",0);
	this.instance_2.setTransform(126.55,38.7,1,1,0,0,0,10.2,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:24.1,rotation:-4.7379,x:126.4,y:39.2},47).to({regY:24,rotation:0,x:126.55,y:38.7},52).wait(1));

	// Symbol_73
	this.instance_3 = new lib.Symbol73("synched",0);
	this.instance_3.setTransform(116.2,43.55,1,1,3.7182,0,0,13.1,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-0.7589,x:116.25,y:43.6},47).to({rotation:3.7182,x:116.2,y:43.55},52).wait(1));

	// Symbol_72
	this.instance_4 = new lib.Symbol72("synched",0);
	this.instance_4.setTransform(106.7,47.55,1,1,3.7182,0,0,14,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:22.6,rotation:-0.0271,y:47.65},47).to({regY:22.5,rotation:3.7182,y:47.55},52).wait(1));

	// Symbol_71
	this.instance_5 = new lib.Symbol71("synched",0);
	this.instance_5.setTransform(97.3,51.9,1,1,3.7182,0,0,15,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-0.2728,x:97.35},47).to({rotation:3.7182,x:97.3},52).wait(1));

	// Symbol_70
	this.instance_6 = new lib.Symbol70("synched",0);
	this.instance_6.setTransform(88.2,56.85,1,1,3.7182,0,0,15.8,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:15.9,rotation:-0.2474,x:88.35,y:56.9},47).to({regX:15.8,rotation:3.7182,x:88.2,y:56.85},52).wait(1));

	// Symbol_69
	this.instance_7 = new lib.Symbol69("synched",0);
	this.instance_7.setTransform(79.5,62.2,1,1,3.7182,0,0,16.8,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:16.9,regY:20.7,rotation:-0.2605,x:79.6,y:62.25},47).to({regX:16.8,regY:20.6,rotation:3.7182,x:79.5,y:62.2},52).wait(1));

	// Symbol_68
	this.instance_8 = new lib.Symbol68("synched",0);
	this.instance_8.setTransform(71.15,68.15,1,1,3.7182,0,0,17.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-2.2808,x:71.2,y:68.25},47).to({rotation:3.7182,x:71.15,y:68.15},52).wait(1));

	// Symbol_67
	this.instance_9 = new lib.Symbol67("synched",0);
	this.instance_9.setTransform(63.15,74.45,1,1,3.7182,0,0,18.8,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-0.7589,x:63.2,y:74.5},47).to({rotation:3.7182,x:63.15,y:74.45},52).wait(1));

	// Symbol_66
	this.instance_10 = new lib.Symbol66("synched",0);
	this.instance_10.setTransform(55.7,81.45,1,1,3.7182,0,0,19.8,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:18.1,rotation:-1.5223,x:55.75,y:81.5},47).to({regY:18,rotation:3.7182,x:55.7,y:81.45},52).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(36.8,9.4,118.4,91.1);
p.frameBounds = [rect, new cjs.Rectangle(36.7,9.5,118.5,91), new cjs.Rectangle(36.6,9.4,118.6,91), new cjs.Rectangle(36.7,9.4,118.5,90.9), rect=new cjs.Rectangle(36.6,9.4,118.7,91), rect, new cjs.Rectangle(36.6,9.3,118.7,91), new cjs.Rectangle(36.5,9.4,118.8,90.9), new cjs.Rectangle(36.6,9.4,118.8,90.9), new cjs.Rectangle(36.5,9.3,118.8,90.9), new cjs.Rectangle(36.5,9.3,118.9,90.9), new cjs.Rectangle(36.4,9.3,119,90.9), new cjs.Rectangle(36.4,9.3,119.1,90.8), rect=new cjs.Rectangle(36.4,9.2,119,90.9), rect, new cjs.Rectangle(36.4,9.2,119.1,90.8), new cjs.Rectangle(36.3,9.2,119.2,90.9), rect=new cjs.Rectangle(36.3,9.2,119.3,90.8), rect, new cjs.Rectangle(36.2,9.2,119.4,90.7), new cjs.Rectangle(36.2,9.1,119.4,90.8), new cjs.Rectangle(36.2,9.1,119.5,90.7), new cjs.Rectangle(36.2,9.1,119.5,90.8), new cjs.Rectangle(36.1,9.1,119.6,90.7), new cjs.Rectangle(36.2,9.1,119.5,90.7), new cjs.Rectangle(36.2,9,119.6,90.7), new cjs.Rectangle(36.1,9,119.6,90.6), new cjs.Rectangle(36.2,9,119.6,90.7), new cjs.Rectangle(36.1,8.9,119.7,90.7), new cjs.Rectangle(36,8.9,119.9,90.7), new cjs.Rectangle(36.1,8.9,119.8,90.6), new cjs.Rectangle(36,8.9,119.9,90.6), new cjs.Rectangle(36,8.9,120,90.6), new cjs.Rectangle(36,8.9,119.9,90.6), new cjs.Rectangle(35.9,8.8,120,90.7), new cjs.Rectangle(35.9,8.8,120,90.6), new cjs.Rectangle(35.9,8.8,120.1,90.6), new cjs.Rectangle(35.8,8.8,120.2,90.6), new cjs.Rectangle(35.8,8.7,120.3,90.6), rect=new cjs.Rectangle(35.8,8.8,120.3,90.5), rect, rect=new cjs.Rectangle(35.8,8.7,120.3,90.5), rect, new cjs.Rectangle(35.8,8.7,120.4,90.5), new cjs.Rectangle(35.8,8.7,120.4,90.4), new cjs.Rectangle(35.7,8.7,120.5,90.4), new cjs.Rectangle(35.6,8.6,120.6,90.5), new cjs.Rectangle(35.6,8.6,120.6,90.4), new cjs.Rectangle(35.6,8.6,120.6,90.5), rect=new cjs.Rectangle(35.7,8.6,120.5,90.5), rect, new cjs.Rectangle(35.7,8.7,120.5,90.4), new cjs.Rectangle(35.7,8.7,120.4,90.6), new cjs.Rectangle(35.7,8.7,120.4,90.5), rect=new cjs.Rectangle(35.8,8.7,120.3,90.5), rect, new cjs.Rectangle(35.8,8.7,120.2,90.6), new cjs.Rectangle(35.9,8.7,120.1,90.6), new cjs.Rectangle(35.9,8.8,120.2,90.6), new cjs.Rectangle(35.8,8.8,120.3,90.6), new cjs.Rectangle(35.9,8.8,120.1,90.6), new cjs.Rectangle(35.9,8.8,120,90.7), new cjs.Rectangle(36,8.8,119.9,90.7), new cjs.Rectangle(36,8.8,120,90.8), new cjs.Rectangle(36,8.9,120,90.6), new cjs.Rectangle(36,8.9,119.8,90.7), new cjs.Rectangle(36,8.9,119.9,90.7), new cjs.Rectangle(36.1,8.9,119.8,90.7), new cjs.Rectangle(36.1,8.9,119.7,90.8), new cjs.Rectangle(36.1,9,119.7,90.7), new cjs.Rectangle(36.1,9,119.6,90.7), new cjs.Rectangle(36.2,9,119.6,90.7), new cjs.Rectangle(36.2,9,119.5,90.7), new cjs.Rectangle(36.2,9,119.5,90.8), new cjs.Rectangle(36.2,9,119.4,90.8), new cjs.Rectangle(36.1,9,119.6,90.9), new cjs.Rectangle(36.1,9.1,119.6,90.9), new cjs.Rectangle(36.2,9.1,119.5,90.7), new cjs.Rectangle(36.2,9.1,119.3,90.8), new cjs.Rectangle(36.2,9.1,119.4,90.8), new cjs.Rectangle(36.2,9.2,119.4,90.8), new cjs.Rectangle(36.3,9.2,119.2,90.9), new cjs.Rectangle(36.3,9.1,119.2,90.9), new cjs.Rectangle(36.4,9.1,119.1,90.9), new cjs.Rectangle(36.4,9.2,119,90.9), new cjs.Rectangle(36.4,9.2,119,91), new cjs.Rectangle(36.4,9.2,119.1,90.9), new cjs.Rectangle(36.4,9.3,119,90.9), rect=new cjs.Rectangle(36.5,9.3,118.9,90.9), rect, new cjs.Rectangle(36.6,9.3,118.8,91), new cjs.Rectangle(36.6,9.3,118.7,90.9), new cjs.Rectangle(36.5,9.3,118.8,91), rect=new cjs.Rectangle(36.6,9.3,118.7,91), rect, new cjs.Rectangle(36.6,9.4,118.6,90.9), new cjs.Rectangle(36.7,9.4,118.5,91.1), new cjs.Rectangle(36.6,9.4,118.7,91), new cjs.Rectangle(36.7,9.4,118.5,91), new cjs.Rectangle(36.8,9.4,118.4,91.1)];


(lib.Symbol106 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_0();
	this.instance.setTransform(19.5,53.55,1,1,0,0,0,4.9,1.7);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#9494C1","#7D7DB3","#494992"],[0,0.294,1],10.1,37.6,-4.2,-30.8).beginStroke().moveTo(-2.2,24.7).curveTo(-6.6,18.8,-11,-1.2).curveTo(-15,-19.6,-14.3,-23.7).curveTo(-13.9,-26.7,-10.4,-26.4).curveTo(-4,-25.7,-3.6,-25.8).curveTo(-1.5,-26.1,2.6,-29.2).curveTo(6.2,-31,8.7,-25.8).curveTo(13,-16.9,14.1,1.8).curveTo(14.9,16.5,13.8,22.9).curveTo(13.3,25.9,11.1,27.6).curveTo(9.5,28.7,6.7,29.5).curveTo(6,29.7,5.2,29.7).curveTo(1.5,29.7,-2.2,24.7).closePath();
	this.shape.setTransform(14.4275,29.6972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,28.9,59.4);
p.frameBounds = [rect];


(lib.Symbol103 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path();
	this.instance.setTransform(36.85,36.05,1,1,0,0,0,8.2,27.1);
	this.instance.alpha = 0.1992;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(7.9,29.25,1,1,0,0,0,7.8,28.4);
	this.instance_1.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#9494C1","#7D7DB3","#494992"],[0,0.294,1],-4,35.5,3.3,-21.4).beginStroke().moveTo(-10.6,27.4).curveTo(-13.2,26.5,-13.9,24.5).curveTo(-14.5,22.8,-11.1,11.5).curveTo(-6.8,-2.1,-5.3,-7.2).curveTo(-4.3,-10.5,-2.6,-18.4).curveTo(-1.4,-23.6,-0.3,-25.2).curveTo(0.4,-26.3,1.7,-26.7).curveTo(5.1,-27.8,8.3,-27.3).curveTo(11.8,-26.2,13.1,-22.4).curveTo(15.5,-15.8,10.8,0.8).curveTo(6.1,17.5,0.1,23).curveTo(-4.9,27.5,-9.4,27.5).lineTo(-10.6,27.4).closePath();
	this.shape.setTransform(42.6106,35.7481);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#317300","#9AD051","#A8D354"],[0,0.969,1],6.1,-27.7,-4.5,28.6).beginStroke().moveTo(-10.6,27.4).curveTo(-13.2,26.5,-13.9,24.5).curveTo(-14.5,22.8,-11.1,11.5).curveTo(-6.8,-2.1,-5.3,-7.2).curveTo(-4.3,-10.5,-2.6,-18.4).curveTo(-1.4,-23.6,-0.3,-25.2).curveTo(0.4,-26.3,1.7,-26.7).curveTo(5.1,-27.8,8.3,-27.3).curveTo(11.8,-26.2,13.1,-22.4).curveTo(15.5,-15.8,10.8,0.8).curveTo(6.1,17.5,0.1,23).curveTo(-4.9,27.5,-9.4,27.5).lineTo(-10.6,27.4).closePath();
	this.shape_1.setTransform(42.6106,35.7481);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#9494C1","#7D7DB3","#494992"],[0,0.294,1],4,-21.9,-9.8,33.7).beginStroke().moveTo(-3.5,28.6).curveTo(-8.3,26.9,-10.8,19.8).curveTo(-13.5,12.1,-9.9,-4.9).curveTo(-6.4,-21.7,-1.2,-26.5).curveTo(1.8,-29.1,5.3,-28.6).curveTo(8.4,-27.5,10.9,-24.9).curveTo(11.8,-24,12,-22.7).curveTo(12.1,-20.8,10.7,-15.6).curveTo(8.6,-7.9,7.9,-4.5).lineTo(4.3,14.7).curveTo(2,26.4,0.7,27.6).curveTo(-0.5,28.7,-2.4,28.7).lineTo(-3.5,28.6).closePath();
	this.shape_2.setTransform(11.9868,28.6957);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginLinearGradientFill(["#9494C1","#7D7DB3","#494992"],[0,0.294,1],-6.6,-0.8,4.4,1.9).beginStroke().moveTo(-8.5,28.4).curveTo(-5.8,28.7,-4.4,27.4).curveTo(-3,26.1,-0.7,14.5).lineTo(2.9,-4.7).curveTo(3.6,-8.1,5.7,-15.9).curveTo(7.1,-21,6.9,-23).curveTo(6.8,-24.2,5.8,-25.2).curveTo(3.3,-27.8,0.3,-28.8).curveTo(4,-28.2,7.5,-24.8).curveTo(8.5,-23.8,8.5,-22.6).curveTo(8.7,-20.6,7.3,-15.5).curveTo(5.2,-7.6,4.5,-4.3).lineTo(0.9,14.9).curveTo(-1.4,26.5,-2.7,27.8).curveTo(-3.6,28.6,-5.1,28.8).lineTo(-6.1,28.8).curveTo(-7.3,28.8,-8.5,28.4).closePath();
	this.shape_3.setTransform(17.0325,28.9347);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginLinearGradientFill(["#8484AC","#7272A0","#3E3E7D"],[0,0.243,1],-8.2,-3.1,8.2,0.9).beginStroke().moveTo(-8.6,22).curveTo(-12.9,21.4,-14.6,22.5).curveTo(-14.3,21.3,-13.3,20.3).curveTo(-12.1,19.1,-10.4,18.8).lineTo(-7,19.9).curveTo(-3.4,21,-1.7,21).curveTo(-0.5,19.6,1.9,11.8).curveTo(3.1,7.6,5.9,-2.8).lineTo(9.2,-15.8).lineTo(10.6,-21.7).lineTo(14.6,-24.7).lineTo(8.8,-5).curveTo(2.5,16.4,-0.2,24.8).curveTo(-3.8,22.5,-8.6,22).closePath();
	this.shape_4.setTransform(28.875,34.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginLinearGradientFill(["#9494C1","#7D7DB3","#494992"],[0,0.294,1],1.2,-5.2,-0.9,3.2).beginStroke().moveTo(12.6,6.6).lineTo(9.7,5.8).curveTo(8.3,5.3,7.3,4.2).curveTo(5.8,2.4,2.7,1.7).curveTo(1.3,1.3,-1.9,1.1).curveTo(-3.8,1,-5,1.7).curveTo(-6.5,2.9,-7.8,3.7).curveTo(-9.9,4.9,-12.9,3.5).curveTo(-15.9,2.2,-16.9,-0.3).curveTo(-17.4,-1.6,-17,-3.2).curveTo(-16.6,-4.7,-15.6,-5.9).curveTo(-14.9,-6.8,-13.5,-6.8).lineTo(-10.9,-6.5).curveTo(-3.5,-5.7,2.7,-4.2).curveTo(8.3,-2.8,12.7,-0.9).lineTo(15.1,0).curveTo(16.8,0.8,17.1,1.4).curveTo(17.3,1.9,16.4,3.4).lineTo(15.1,5.4).curveTo(14.6,6.4,14.2,6.6).curveTo(14,6.8,13.6,6.8).lineTo(12.6,6.6).closePath();
	this.shape_5.setTransform(32.1009,8.2125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginLinearGradientFill(["#9494C1","#7D7DB3","#494992"],[0,0.294,1],-23.1,-5.1,17.4,4.9).beginStroke().moveTo(1.8,30.4).curveTo(-0.1,26.4,-8.7,24.1).curveTo(-17.4,21.7,-20.4,24.6).curveTo(-21.5,25.6,-21.7,17.1).curveTo(-21.9,9.1,-21.2,-2).curveTo(-19.3,-30.6,-15.4,-30.6).curveTo(-8.1,-30.4,0.8,-28.6).curveTo(13.9,-26,20.8,-21).curveTo(22,-20.1,21.6,-14.8).curveTo(21.4,-12.1,21,-9.7).lineTo(12,11.7).curveTo(3.7,30.6,2.1,30.6).curveTo(2,30.6,2,30.6).curveTo(1.9,30.6,1.9,30.5).curveTo(1.9,30.5,1.8,30.5).curveTo(1.8,30.4,1.8,30.4).closePath();
	this.shape_6.setTransform(30.4263,31.8843);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,56.6,63.2);
p.frameBounds = [rect];


(lib.Symbol84 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_65
	this.instance = new lib.Symbol65("synched",0);
	this.instance.setTransform(28.6,119.1,1,1,-13.6813,0,0,20.7,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:20.8,rotation:-18.6368,x:28.7},47).to({regX:20.7,rotation:-13.6813,x:28.6},52).wait(1));

	// Symbol_64
	this.instance_1 = new lib.Symbol64("synched",0);
	this.instance_1.setTransform(24.95,128.55,1,1,-13.6813,0,0,21.7,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:15.7,rotation:-18.3866,y:128.5},47).to({regY:15.8,rotation:-13.6813,y:128.55},52).wait(1));

	// Symbol_63
	this.instance_2 = new lib.Symbol63("synched",0);
	this.instance_2.setTransform(21.9,138.3,1,1,-13.6813,0,0,22.4,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:22.3,scaleX:0.9999,scaleY:0.9999,rotation:-18.9111,x:21.85,y:138.35},47).to({regX:22.4,scaleX:1,scaleY:1,rotation:-13.6813,x:21.9,y:138.3},52).wait(1));

	// Symbol_62
	this.instance_3 = new lib.Symbol62("synched",0);
	this.instance_3.setTransform(19.75,148.35,1,1,-13.6813,0,0,23.1,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-18.4192,x:19.7,y:148.3},47).to({rotation:-13.6813,x:19.75,y:148.35},52).wait(1));

	// Symbol_61
	this.instance_4 = new lib.Symbol61("synched",0);
	this.instance_4.setTransform(18.45,158.5,1,1,-13.6813,0,0,23.7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:11,scaleX:0.9999,scaleY:0.9999,rotation:-18.921,y:158.45},47).to({regY:11.1,scaleX:1,scaleY:1,rotation:-13.6813,y:158.5},52).wait(1));

	// Symbol_88
	this.instance_5 = new lib.Symbol88("synched",0);
	this.instance_5.setTransform(18.65,199.75,1,1,11.7434,0,0,24.7,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:24.6,scaleX:1.0015,scaleY:0.9984,rotation:0,skewX:4.5441,skewY:4.9402,x:22.25,y:199.95},47).to({regX:24.7,scaleX:1,scaleY:1,rotation:11.7434,skewX:0,skewY:0,x:18.65,y:199.75},52).wait(1));

	// Symbol_87
	this.instance_6 = new lib.Symbol87("synched",0);
	this.instance_6.setTransform(17.85,188.65,1,1,15.7439,0,0,24.6,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.0019,scaleY:0.998,rotation:0,skewX:8.5593,skewY:8.9275,x:20.15,y:189.1},47).to({scaleX:1,scaleY:1,rotation:15.7439,skewX:0,skewY:0,x:17.85,y:188.65},52).wait(1));

	// Symbol_86
	this.instance_7 = new lib.Symbol86("synched",0);
	this.instance_7.setTransform(17.5,178.05,1,1,20.9901,0,0,24.3,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:24.2,regY:9.3,scaleX:1.0025,scaleY:0.9974,rotation:0,skewX:13.8296,skewY:14.15,x:18.4,y:178.7},47).to({regX:24.3,regY:9.2,scaleX:1,scaleY:1,rotation:20.9901,skewX:0,skewY:0,x:17.5,y:178.05},52).wait(1));

	// Symbol_85
	this.instance_8 = new lib.Symbol85("synched",0);
	this.instance_8.setTransform(18.6,167.95,1,1,23.9296,0,0,23.9,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:23.8,regY:11.1,scaleX:1.0028,scaleY:0.9972,rotation:0,skewX:16.7853,skewY:17.0737,x:18.2,y:168.5},47).to({regX:23.9,regY:11,scaleX:1,scaleY:1,rotation:23.9296,skewX:0,skewY:0,x:18.6,y:167.95},52).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.4,106,59.3,103.2);
p.frameBounds = [rect, new cjs.Rectangle(-7.4,106.1,59.2,103), new cjs.Rectangle(-7.3,106.2,59.2,102.9), new cjs.Rectangle(-7.3,106.2,59.2,102.8), new cjs.Rectangle(-7.3,106.2,59.2,102.7), new cjs.Rectangle(-7.2,106.3,59.1,102.7), new cjs.Rectangle(-7.3,106.3,59.2,102.6), new cjs.Rectangle(-7.2,106.3,59.1,102.5), new cjs.Rectangle(-7.3,106.3,59.2,102.5), new cjs.Rectangle(-7.2,106.4,59.1,102.4), new cjs.Rectangle(-7.2,106.5,59.1,102.2), new cjs.Rectangle(-7.2,106.5,59.2,102.1), new cjs.Rectangle(-7.3,106.5,59.3,102.1), new cjs.Rectangle(-7.2,106.5,59.3,102.1), new cjs.Rectangle(-7.2,106.6,59.2,102), new cjs.Rectangle(-7.1,106.6,59.2,101.9), new cjs.Rectangle(-7.2,106.6,59.3,101.8), new cjs.Rectangle(-7.1,106.7,59.2,101.8), new cjs.Rectangle(-7.1,106.7,59.2,101.7), new cjs.Rectangle(-7.1,106.7,59.2,101.6), new cjs.Rectangle(-7.1,106.8,59.1,101.5), new cjs.Rectangle(-7,106.8,59.2,101.4), new cjs.Rectangle(-7,106.8,59.2,101.3), new cjs.Rectangle(-7,106.9,59.2,101.2), new cjs.Rectangle(-7,106.9,59.2,101.3), new cjs.Rectangle(-7,106.9,59.3,101.2), new cjs.Rectangle(-7,107,59.2,101), new cjs.Rectangle(-6.9,107,59.2,101), new cjs.Rectangle(-6.9,107,59.2,100.9), rect=new cjs.Rectangle(-6.9,107.1,59.2,100.7), rect, rect=new cjs.Rectangle(-6.9,107.1,59.2,100.6), rect, new cjs.Rectangle(-6.8,107.2,59.2,100.5), new cjs.Rectangle(-6.8,107.3,59.1,100.4), new cjs.Rectangle(-6.7,107.3,59.1,100.3), new cjs.Rectangle(-6.8,107.3,59.2,100.2), new cjs.Rectangle(-6.8,107.3,59.2,100.1), new cjs.Rectangle(-6.8,107.4,59.1,100.1), new cjs.Rectangle(-6.7,107.4,59.1,100), new cjs.Rectangle(-6.8,107.4,59.3,99.9), new cjs.Rectangle(-6.8,107.5,59.3,99.8), new cjs.Rectangle(-6.7,107.5,59.2,99.7), new cjs.Rectangle(-6.7,107.6,59.2,99.6), new cjs.Rectangle(-6.8,107.6,59.3,99.6), new cjs.Rectangle(-6.8,107.6,59.3,99.5), new cjs.Rectangle(-6.7,107.7,59.3,99.4), new cjs.Rectangle(-6.8,107.6,59.3,99.4), new cjs.Rectangle(-6.7,107.7,59.2,99.4), new cjs.Rectangle(-6.6,107.7,59.1,99.4), new cjs.Rectangle(-6.6,107.6,59.1,99.5), new cjs.Rectangle(-6.7,107.6,59.2,99.6), new cjs.Rectangle(-6.6,107.6,59.1,99.7), new cjs.Rectangle(-6.6,107.5,59,99.7), new cjs.Rectangle(-6.6,107.5,59.1,99.9), new cjs.Rectangle(-6.7,107.5,59.1,99.9), new cjs.Rectangle(-6.6,107.5,59,100), new cjs.Rectangle(-6.7,107.4,59.1,100), new cjs.Rectangle(-6.6,107.4,59,100.1), new cjs.Rectangle(-6.6,107.3,59,100.2), new cjs.Rectangle(-6.6,107.3,59,100.3), new cjs.Rectangle(-6.7,107.3,59,100.3), new cjs.Rectangle(-6.6,107.3,59,100.4), new cjs.Rectangle(-6.7,107.3,59.1,100.4), new cjs.Rectangle(-6.7,107.2,59,100.5), new cjs.Rectangle(-6.7,107.2,59.1,100.6), new cjs.Rectangle(-6.7,107.1,59,100.7), new cjs.Rectangle(-6.8,107.1,59.1,100.8), new cjs.Rectangle(-6.8,107.1,59,100.8), new cjs.Rectangle(-6.8,107.1,59,100.9), new cjs.Rectangle(-6.8,107,59.1,100.9), new cjs.Rectangle(-6.9,107,59.1,101.1), new cjs.Rectangle(-6.8,107,58.9,101.1), new cjs.Rectangle(-6.8,106.9,59,101.3), new cjs.Rectangle(-6.8,106.9,59,101.2), rect=new cjs.Rectangle(-6.9,106.8,59,101.4), rect, new cjs.Rectangle(-6.9,106.7,59,101.5), new cjs.Rectangle(-6.9,106.8,59,101.6), new cjs.Rectangle(-7,106.7,59.1,101.6), new cjs.Rectangle(-7,106.7,59,101.7), new cjs.Rectangle(-7,106.7,59.1,101.7), new cjs.Rectangle(-7,106.7,59,101.8), new cjs.Rectangle(-6.9,106.6,58.9,101.9), rect=new cjs.Rectangle(-7,106.6,59,102), rect, new cjs.Rectangle(-7,106.5,59,102.1), new cjs.Rectangle(-7.1,106.5,59.1,102.2), new cjs.Rectangle(-7.1,106.4,59.1,102.3), new cjs.Rectangle(-7,106.4,59,102.4), new cjs.Rectangle(-7.2,106.4,59.2,102.4), new cjs.Rectangle(-7.1,106.4,59.1,102.6), new cjs.Rectangle(-7.1,106.3,59,102.6), new cjs.Rectangle(-7.2,106.3,59.1,102.7), new cjs.Rectangle(-7.2,106.2,59.1,102.7), new cjs.Rectangle(-7.2,106.3,59.1,102.7), new cjs.Rectangle(-7.2,106.2,59.1,102.9), new cjs.Rectangle(-7.3,106.2,59.1,102.9), new cjs.Rectangle(-7.3,106.2,59.2,103), new cjs.Rectangle(-7.4,106,59.3,103.2)];


(lib.Symbol59 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_100
	this.instance = new lib.Symbol100("synched",0);
	this.instance.setTransform(369.25,102.6,1,1,0,0,0,21.6,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:21.5,regY:15.7,rotation:-5.4654,x:369.2,y:102.7},47).to({regX:21.6,regY:15.6,rotation:0,x:369.25,y:102.6},52).wait(1));

	// Symbol_99
	this.instance_1 = new lib.Symbol99("synched",0);
	this.instance_1.setTransform(363.3,94.3,1,1,0,0,0,20.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-4.223,y:94.35},47).to({rotation:0,y:94.3},52).wait(1));

	// Symbol_98
	this.instance_2 = new lib.Symbol98("synched",0);
	this.instance_2.setTransform(356.75,86.4,1,1,0,0,0,19.7,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:18.1,rotation:-4.4773,y:86.5},47).to({regY:18,rotation:0,y:86.4},52).wait(1));

	// Symbol_97
	this.instance_3 = new lib.Symbol97("synched",0);
	this.instance_3.setTransform(349.7,79,1,1,0,0,0,18.7,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:19.1,rotation:-4.223,y:79.1},47).to({regY:19,rotation:0,y:79},52).wait(1));

	// Symbol_96
	this.instance_4 = new lib.Symbol96("synched",0);
	this.instance_4.setTransform(342.2,72.05,1,1,0,0,0,17.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-3.4817},47).to({rotation:0},52).wait(1));

	// Symbol_95
	this.instance_5 = new lib.Symbol95("synched",0);
	this.instance_5.setTransform(334.15,65.65,1,1,0,0,0,16.8,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-4.2467,x:334.2},47).to({rotation:0,x:334.15},52).wait(1));

	// Symbol_94
	this.instance_6 = new lib.Symbol94("synched",0);
	this.instance_6.setTransform(325.75,59.7,1,1,0,0,0,15.8,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-4.223,y:59.75},47).to({rotation:0,y:59.7},52).wait(1));

	// Symbol_93
	this.instance_7 = new lib.Symbol93("synched",0);
	this.instance_7.setTransform(317,54.2,1,1,0,0,0,14.8,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:22.1,rotation:-3.4529,y:54.25},47).to({regY:22,rotation:0,y:54.2},52).wait(1));

	// Symbol_92
	this.instance_8 = new lib.Symbol92("synched",0);
	this.instance_8.setTransform(307.95,49.2,1,1,0,0,0,13.8,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:13.9,rotation:-4.4773,x:308},47).to({regX:13.8,rotation:0,x:307.95},52).wait(1));

	// Symbol_91
	this.instance_9 = new lib.Symbol91("synched",0);
	this.instance_9.setTransform(298.8,44.65,1,1,0,0,0,13,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-4.4431,x:298.75},47).to({rotation:0,x:298.8},52).wait(1));

	// Symbol_90
	this.instance_10 = new lib.Symbol90("synched",0);
	this.instance_10.setTransform(289.25,40.7,1,1,0,0,0,12,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:12.1,rotation:-3.7454,x:289.35},47).to({regX:12,rotation:0,x:289.25},52).wait(1));

	// Symbol_89
	this.instance_11 = new lib.Symbol89("synched",0);
	this.instance_11.setTransform(279.6,37.05,1,1,0,0,0,11.1,23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:11.2,rotation:-3.7323,x:279.7,y:37},47).to({regX:11.1,rotation:0,x:279.6,y:37.05},52).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(268.5,13.4,122.3,104.9);
p.frameBounds = [rect, new cjs.Rectangle(268.6,13.4,122.2,104.9), new cjs.Rectangle(268.6,13.4,122.1,104.9), new cjs.Rectangle(268.7,13.4,122.1,105), new cjs.Rectangle(268.7,13.3,122,105.2), new cjs.Rectangle(268.7,13.4,122,105.1), new cjs.Rectangle(268.7,13.4,122,105.2), new cjs.Rectangle(268.8,13.4,121.8,105.2), new cjs.Rectangle(268.8,13.4,121.9,105.2), new cjs.Rectangle(268.8,13.4,121.8,105.2), rect=new cjs.Rectangle(268.8,13.4,121.8,105.3), rect, rect=new cjs.Rectangle(268.9,13.3,121.7,105.4), rect, new cjs.Rectangle(268.9,13.3,121.6,105.4), new cjs.Rectangle(268.9,13.3,121.6,105.5), new cjs.Rectangle(269,13.3,121.5,105.6), new cjs.Rectangle(269,13.2,121.4,105.7), new cjs.Rectangle(269,13.3,121.5,105.6), rect=new cjs.Rectangle(269.1,13.3,121.3,105.7), rect, new cjs.Rectangle(269.1,13.3,121.3,105.8), rect=new cjs.Rectangle(269.2,13.2,121.1,105.8), rect, new cjs.Rectangle(269.2,13.2,121.1,105.9), new cjs.Rectangle(269.2,13.2,121.1,106), new cjs.Rectangle(269.3,13.1,121.1,106.1), new cjs.Rectangle(269.3,13.1,120.9,106.1), new cjs.Rectangle(269.3,13.1,120.9,106.2), new cjs.Rectangle(269.3,13.2,120.9,106.1), new cjs.Rectangle(269.4,13.2,120.8,106.2), rect=new cjs.Rectangle(269.4,13.1,120.8,106.3), rect, new cjs.Rectangle(269.5,13.2,120.7,106.3), new cjs.Rectangle(269.5,13.1,120.7,106.5), new cjs.Rectangle(269.5,13.1,120.5,106.5), new cjs.Rectangle(269.6,13,120.5,106.5), new cjs.Rectangle(269.6,13.1,120.4,106.5), new cjs.Rectangle(269.6,13.1,120.3,106.5), new cjs.Rectangle(269.6,13.1,120.3,106.6), new cjs.Rectangle(269.7,13.1,120.3,106.7), new cjs.Rectangle(269.7,13,120.3,106.7), new cjs.Rectangle(269.7,13.1,120.2,106.7), new cjs.Rectangle(269.7,13.1,120.2,106.8), new cjs.Rectangle(269.8,13.1,120.1,106.7), new cjs.Rectangle(269.8,13,120.1,106.9), new cjs.Rectangle(269.8,13,120,106.9), new cjs.Rectangle(269.8,13.1,120,106.8), new cjs.Rectangle(269.7,13.1,120.2,106.8), new cjs.Rectangle(269.8,13.1,120.2,106.7), rect=new cjs.Rectangle(269.7,13.1,120.3,106.6), rect, rect, new cjs.Rectangle(269.7,13.1,120.3,106.5), new cjs.Rectangle(269.7,13.1,120.4,106.6), new cjs.Rectangle(269.6,13.1,120.4,106.5), new cjs.Rectangle(269.6,13.2,120.5,106.4), new cjs.Rectangle(269.6,13.1,120.5,106.4), new cjs.Rectangle(269.5,13.1,120.6,106.4), new cjs.Rectangle(269.5,13.2,120.5,106.3), rect=new cjs.Rectangle(269.5,13.1,120.7,106.4), rect, new cjs.Rectangle(269.4,13.1,120.8,106.3), new cjs.Rectangle(269.4,13.2,120.8,106.2), rect=new cjs.Rectangle(269.4,13.2,120.8,106.1), rect, new cjs.Rectangle(269.3,13.2,121,106.1), new cjs.Rectangle(269.4,13.2,120.9,106), rect=new cjs.Rectangle(269.3,13.2,121.1,106), rect, new cjs.Rectangle(269.2,13.2,121.3,106), new cjs.Rectangle(269.2,13.2,121.2,105.9), new cjs.Rectangle(269.2,13.3,121.2,105.8), new cjs.Rectangle(269.1,13.3,121.3,105.8), new cjs.Rectangle(269.2,13.3,121.3,105.7), rect=new cjs.Rectangle(269.1,13.3,121.5,105.7), rect, rect=new cjs.Rectangle(269,13.3,121.5,105.6), rect, new cjs.Rectangle(269,13.3,121.6,105.6), new cjs.Rectangle(269,13.3,121.6,105.5), new cjs.Rectangle(268.9,13.3,121.7,105.5), new cjs.Rectangle(268.9,13.3,121.7,105.4), new cjs.Rectangle(268.9,13.3,121.8,105.4), new cjs.Rectangle(269,13.4,121.7,105.3), new cjs.Rectangle(268.9,13.4,121.7,105.2), new cjs.Rectangle(268.8,13.4,121.8,105.2), new cjs.Rectangle(268.9,13.4,121.8,105.2), new cjs.Rectangle(268.8,13.4,121.9,105.2), new cjs.Rectangle(268.7,13.4,122,105.1), new cjs.Rectangle(268.8,13.5,122,105), new cjs.Rectangle(268.7,13.4,122,105.1), new cjs.Rectangle(268.7,13.4,122.1,105.1), new cjs.Rectangle(268.6,13.4,122.2,105), new cjs.Rectangle(268.7,13.4,122.1,105), rect=new cjs.Rectangle(268.6,13.4,122.3,104.9), rect, rect, rect, new cjs.Rectangle(268.5,13.4,122.3,104.9)];


(lib.Symbol57 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_83
	this.instance = new lib.Symbol83("synched",0);
	this.instance.setTransform(229.3,26.1,1,1,0,0,0,6.6,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.2118},47).to({rotation:0},52).wait(1));

	// Symbol_82
	this.instance_1 = new lib.Symbol82("synched",0);
	this.instance_1.setTransform(219,25.3,1,1,0,0,0,5.7,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:5.8,rotation:-4.7274,x:219.15,y:25.25},47).to({regX:5.7,rotation:0,x:219,y:25.3},52).wait(1));

	// Symbol_81
	this.instance_2 = new lib.Symbol81("synched",0);
	this.instance_2.setTransform(208.7,24.8,1,1,0,0,0,4.9,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-5.9409},47).to({rotation:0},52).wait(1));

	// Symbol_80
	this.instance_3 = new lib.Symbol80("synched",0);
	this.instance_3.setTransform(197.65,24.8,1,1,0,0,0,5,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:24.9,rotation:-4.2116,x:197.7,y:24.95},47).to({regY:24.8,rotation:0,x:197.65,y:24.8},52).wait(1));

	// Symbol_79
	this.instance_4 = new lib.Symbol79("synched",0);
	this.instance_4.setTransform(187.3,25.3,1,1,0,0,0,5.8,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:5.9,rotation:-4.9659,x:187.45},47).to({regX:5.8,rotation:0,x:187.3},52).wait(1));

	// Symbol_78
	this.instance_5 = new lib.Symbol78("synched",0);
	this.instance_5.setTransform(177.05,26.1,1,1,0,0,0,6.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-5.7256,x:177},47).to({rotation:0,x:177.05},52).wait(1));

	// Symbol_77
	this.instance_6 = new lib.Symbol77("synched",0);
	this.instance_6.setTransform(166.75,27.45,1,1,0,0,0,7.5,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:7.6,rotation:-5.4752,x:166.8,y:27.4},47).to({regX:7.5,rotation:0,x:166.75,y:27.45},52).wait(1));

	// Symbol_76
	this.instance_7 = new lib.Symbol76("synched",0);
	this.instance_7.setTransform(156.6,29.1,1,1,0,0,0,8.4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-5.9409},47).to({rotation:0},52).wait(1));

	// Symbol_75
	this.instance_8 = new lib.Symbol75("synched",0);
	this.instance_8.setTransform(146.5,31.35,1,1,0,0,0,9.3,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-4.223},47).to({rotation:0},52).wait(1));

	// Symbol_74
	this.instance_9 = new lib.Symbol74("synched",0);
	this.instance_9.setTransform(136.55,34,1,1,0,0,0,10.2,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-5.4927},47).to({rotation:0},52).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(126.4,0,109.6,58);
p.frameBounds = [rect, new cjs.Rectangle(126.4,0.1,109.6,58), new cjs.Rectangle(126.3,0.1,109.7,58), new cjs.Rectangle(126.3,0,109.7,58), new cjs.Rectangle(126.2,0,109.7,58), new cjs.Rectangle(126.2,0,109.6,58), new cjs.Rectangle(126.1,0.1,109.7,57.9), rect=new cjs.Rectangle(126.1,0.1,109.6,57.9), rect, new cjs.Rectangle(126.1,0,109.6,57.9), new cjs.Rectangle(126,0,109.7,57.9), new cjs.Rectangle(125.9,0,109.7,57.9), new cjs.Rectangle(126,0,109.6,57.9), new cjs.Rectangle(125.9,0,109.6,57.8), new cjs.Rectangle(125.8,0,109.8,57.9), rect=new cjs.Rectangle(125.8,0,109.6,57.8), rect, new cjs.Rectangle(125.7,0.1,109.7,57.8), new cjs.Rectangle(125.6,0.1,109.7,57.8), new cjs.Rectangle(125.6,0,109.6,57.8), new cjs.Rectangle(125.7,0,109.5,57.7), rect=new cjs.Rectangle(125.5,0.1,109.7,57.7), rect, new cjs.Rectangle(125.5,0.1,109.5,57.7), new cjs.Rectangle(125.4,0.1,109.6,57.7), new cjs.Rectangle(125.4,0.1,109.7,57.7), new cjs.Rectangle(125.4,0.1,109.6,57.6), new cjs.Rectangle(125.3,0.1,109.7,57.6), new cjs.Rectangle(125.3,0.1,109.6,57.6), new cjs.Rectangle(125.2,0.1,109.6,57.5), new cjs.Rectangle(125.2,0.2,109.7,57.5), new cjs.Rectangle(125.2,0.1,109.6,57.5), new cjs.Rectangle(125.2,0.1,109.5,57.4), new cjs.Rectangle(125.1,0.1,109.7,57.5), new cjs.Rectangle(125.1,0.1,109.6,57.4), rect=new cjs.Rectangle(125,0.1,109.6,57.4), rect, new cjs.Rectangle(124.9,0.1,109.7,57.4), new cjs.Rectangle(124.9,0.1,109.6,57.3), new cjs.Rectangle(124.9,0.1,109.6,57.5), new cjs.Rectangle(124.8,0.1,109.6,57.3), new cjs.Rectangle(124.8,0.2,109.7,57.3), new cjs.Rectangle(124.7,0.1,109.7,57.4), new cjs.Rectangle(124.6,0.1,109.7,57.3), new cjs.Rectangle(124.7,0.1,109.6,57.3), new cjs.Rectangle(124.7,0.2,109.5,57.2), new cjs.Rectangle(124.6,0.2,109.5,57.2), rect=new cjs.Rectangle(124.6,0.1,109.6,57.2), rect, new cjs.Rectangle(124.7,0,109.5,57.4), new cjs.Rectangle(124.7,0.1,109.5,57.3), new cjs.Rectangle(124.7,0.1,109.6,57.3), new cjs.Rectangle(124.8,0.1,109.6,57.4), new cjs.Rectangle(124.8,0.1,109.5,57.3), new cjs.Rectangle(124.8,0.1,109.6,57.4), new cjs.Rectangle(124.8,0.1,109.6,57.3), rect=new cjs.Rectangle(124.9,0.1,109.6,57.4), rect, new cjs.Rectangle(125,0.1,109.6,57.4), new cjs.Rectangle(125,0.1,109.6,57.5), new cjs.Rectangle(125,0.1,109.6,57.4), rect=new cjs.Rectangle(125.1,0.1,109.6,57.5), rect, rect=new cjs.Rectangle(125.2,0.1,109.5,57.5), rect, rect=new cjs.Rectangle(125.2,0.1,109.6,57.6), rect, new cjs.Rectangle(125.3,0.1,109.5,57.5), new cjs.Rectangle(125.3,0.1,109.6,57.5), new cjs.Rectangle(125.3,0.1,109.7,57.6), new cjs.Rectangle(125.4,0.1,109.6,57.5), new cjs.Rectangle(125.4,0.1,109.6,57.6), new cjs.Rectangle(125.4,0,109.5,57.7), new cjs.Rectangle(125.5,0.1,109.6,57.6), new cjs.Rectangle(125.5,0,109.6,57.8), new cjs.Rectangle(125.6,0.1,109.5,57.7), new cjs.Rectangle(125.6,0.1,109.6,57.7), new cjs.Rectangle(125.6,0,109.6,57.8), new cjs.Rectangle(125.7,0.1,109.6,57.7), new cjs.Rectangle(125.7,0,109.6,57.8), new cjs.Rectangle(125.7,0,109.7,57.8), new cjs.Rectangle(125.8,0,109.6,57.8), new cjs.Rectangle(125.8,0,109.7,57.8), new cjs.Rectangle(125.8,0,109.7,57.9), new cjs.Rectangle(125.9,0,109.7,57.9), new cjs.Rectangle(125.9,0,109.6,57.9), new cjs.Rectangle(126,0,109.5,57.9), new cjs.Rectangle(125.9,0,109.7,57.9), new cjs.Rectangle(126,0.1,109.6,57.8), new cjs.Rectangle(126.1,0,109.6,57.9), new cjs.Rectangle(126,0,109.7,57.9), new cjs.Rectangle(126.1,0.1,109.6,57.9), new cjs.Rectangle(126.2,0,109.5,58), new cjs.Rectangle(126.2,0.1,109.6,57.9), new cjs.Rectangle(126.2,0,109.7,58), new cjs.Rectangle(126.3,0,109.6,58), rect=new cjs.Rectangle(126.3,0,109.7,58), rect, new cjs.Rectangle(126.4,0.1,109.5,58), new cjs.Rectangle(126.4,0,109.6,58)];


(lib.Symbol56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#D5A690").beginStroke().moveTo(-2.3,5.4).curveTo(-0.9,-3.6,0.2,-14.2).curveTo(0.9,-20.8,1,-20.1).curveTo(2.4,-10.6,3.8,5.1).lineTo(-3.8,20.2).closePath();
	this.shape.setTransform(-54.275,-81.1133);

	this.instance = new lib.Path_0_1();
	this.instance.setTransform(-8.65,62.45,1,1,0,0,0,27.3,17.6);
	this.instance.alpha = 0.5313;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(-10.5,36.35,1,1,0,0,0,29.8,11.4);
	this.instance_1.alpha = 0.5313;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Path_4();
	this.instance_2.setTransform(-46.4,-69.8,1,1,0,0,0,12.8,46.4);
	this.instance_2.alpha = 0.5313;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Path_1_0();
	this.instance_3.setTransform(14.1,-14.4,1,1,0,0,0,74.1,126.8);
	this.instance_3.alpha = 0.2109;
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Path_2_0();
	this.instance_4.setTransform(104,-63.25,1,1,0,0,0,5,21.9);
	this.instance_4.alpha = 0.5313;
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Path_3();
	this.instance_5.setTransform(95.2,-28.9,1,1,0,0,0,23.6,136.2);
	this.instance_5.alpha = 0.2109;
	this.instance_5.compositeOperation = "multiply";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#477A8E").beginStroke().moveTo(-7.4,8.7).lineTo(-5,-36.5).lineTo(0.6,-39.7).lineTo(8.8,24.9).lineTo(-8.8,39.7).curveTo(-8.9,37.7,-7.4,8.7).closePath();
	this.shape_1.setTransform(109.6182,67.725);

	this.instance_6 = new lib.Path_1_2();
	this.instance_6.setTransform(68.7,-152.05,1,1,0,0,0,23.1,26.2);
	this.instance_6.alpha = 0.2109;
	this.instance_6.compositeOperation = "multiply";

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#477A8E").beginStroke().moveTo(-3.9,4.3).curveTo(-6.2,1.4,-5.7,-1.4).lineTo(-4.7,-3.7).lineTo(0.6,-5.8).lineTo(5.8,0.9).curveTo(6,1.1,5,2.3).curveTo(4,3.5,2.6,4.5).curveTo(0.6,5.8,-0.9,5.8).curveTo(-2.6,5.8,-3.9,4.3).closePath();
	this.shape_2.setTransform(-37.3189,36.9759);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#477A8E").beginStroke().moveTo(-86.2,35.3).lineTo(-76.3,-33.1).lineTo(75.3,-43.3).lineTo(86.2,43.3).closePath();
	this.shape_3.setTransform(34.975,71.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#477A8E").beginStroke().moveTo(-62.4,108.6).lineTo(-67.2,98.7).lineTo(-79.1,36.8).lineTo(-85.1,5.2).curveTo(-82.7,4.7,-78.9,1.4).curveTo(-74.6,-2.4,-70.8,-8.3).curveTo(-60.7,-23.7,-59.3,-44.7).curveTo(-57.8,-66.7,-71.3,-81.6).curveTo(-75.5,-86.3,-80.7,-89.7).lineTo(-85.1,-92.2).curveTo(-81.9,-93.6,-74.9,-96.9).lineTo(-64,-102.2).curveTo(-64.1,-102.1,-62.5,-101.3).curveTo(-59.4,-99.8,-56.1,-97.3).curveTo(-44.5,-88.2,-32.9,-67.8).curveTo(-23.6,-51.3,-11.8,-43.7).curveTo(2,-34.8,21.4,-36.6).curveTo(45.4,-38.7,49.7,-55.1).curveTo(54.1,-72.2,34.9,-98).curveTo(32.8,-100.8,28.2,-105.3).curveTo(22.1,-111.1,20.5,-112.8).curveTo(23.1,-112.3,26.7,-112).curveTo(30.5,-111.7,34.7,-111).lineTo(42,-106.2).curveTo(50.8,-99.5,58.3,-90.1).curveTo(82.1,-60.2,83.5,-14.7).curveTo(84.4,18.1,85.1,93.4).lineTo(51.2,112.8).closePath();
	this.shape_4.setTransform(25.125,-65.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#D5A690").beginStroke().moveTo(-22.8,42.8).lineTo(-18.8,36.7).curveTo(-19.4,35.6,-19,33.8).curveTo(-18.2,30.5,-13.9,27.5).curveTo(-13.7,27.9,-13.2,27).lineTo(-13.9,27.5).curveTo(-14.1,26.9,-13.9,24.5).curveTo(7.3,-8.1,-4.7,-34.1).curveTo(-8.4,-42.3,-15.1,-48.8).lineTo(-20.9,-53.7).lineTo(-12.3,-57.4).curveTo(10.1,-29.9,11.8,-28.3).curveTo(12.8,-27.3,16.5,-18.5).lineTo(20.9,-7.8).curveTo(21.8,-5.6,22.4,7.1).curveTo(23,19.5,22.7,25.7).curveTo(22.4,30.8,15.7,42.1).curveTo(9.7,52.1,7.7,53.5).curveTo(6.1,54.7,-17.8,57.4).closePath();
	this.shape_5.setTransform(-37.225,-103.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-4.4,0.4).lineTo(-9.8,-3.1).curveTo(-5.3,-0.4,2.7,-0.7).curveTo(6.7,-0.9,9.8,-1.6).lineTo(9.4,-0.2).curveTo(8.3,1.5,5.3,2.7).curveTo(4.5,3.1,3.5,3.1).curveTo(0.5,3.1,-4.4,0.4).closePath();
	this.shape_6.setTransform(30.6838,-163.4468);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#D5A690").beginStroke().moveTo(5.4,9.4).curveTo(1.5,2.5,-6.2,-6.3).lineTo(-13.1,-13.7).curveTo(-10.9,-12.8,-8.1,-12.6).lineTo(5.1,-5.2).curveTo(6.7,-4.3,9.6,0).curveTo(11.2,2.2,12.9,5).curveTo(13.3,5.5,13,7.8).curveTo(12.7,10.2,11.9,11.8).curveTo(10.9,13.7,9.7,13.7).curveTo(7.8,13.7,5.4,9.4).closePath();
	this.shape_7.setTransform(57.4393,-164.964);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#D5A690").beginStroke().moveTo(-14.8,55.6).curveTo(-34.4,54.5,-45.6,39.5).curveTo(-49.1,34.8,-51.3,29.3).lineTo(-52.8,24.7).curveTo(-54.9,9.4,-56.2,-5.2).curveTo(-58.9,-34.3,-55,-30.6).curveTo(-50.5,-26.2,-43.7,-15.2).curveTo(-36.2,-3.4,-31.9,1.4).curveTo(-24.2,10,-14.4,13.2).curveTo(-2.4,17.1,14.5,13.9).curveTo(45.1,8.1,32.7,-24.5).curveTo(28.8,-34.7,21.1,-46.4).lineTo(14.2,-56).lineTo(34.5,-46.2).curveTo(42.3,-42.2,43.3,-40.1).lineTo(51.1,-25.5).curveTo(57.4,-13.1,57.3,-10.9).lineTo(56.1,12.3).curveTo(54.3,34,50.2,40.2).curveTo(45.2,47.9,27,52.4).curveTo(12.5,56,-4.5,56).curveTo(-9.5,56,-14.8,55.6).closePath();
	this.shape_8.setTransform(35.6115,-120.3468);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-93,-59.5).lineTo(-69.1,-70.1).curveTo(-43.9,-81.5,-28.2,-89.4).curveTo(-22,-92.6,-14.9,-94.6).curveTo(-8.5,-96.5,-2.6,-97.2).curveTo(6.6,-98.3,18.3,-96.5).lineTo(39.6,-92.5).lineTo(56.3,-89.4).lineTo(73.1,-86.3).curveTo(73.9,-86.1,80.2,-83.5).lineTo(86.4,-80.8).lineTo(85.2,-77.4).curveTo(83.9,-73,83.2,-67.9).curveTo(80.8,-51.8,84.8,-35.9).curveTo(89,-19.3,91.4,-16.8).lineTo(91.7,-16.5).lineTo(39.5,29.4).lineTo(-44.1,97.6).closePath().moveTo(91.7,-16.5).lineTo(93,-17.6).curveTo(92.8,-16.3,92.2,-16.3).curveTo(92,-16.3,91.7,-16.5).closePath().moveTo(91.7,-16.5).lineTo(91.7,-16.5).closePath();
	this.shape_9.setTransform(5.425,-85.8742);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#477A8E").beginStroke().moveTo(-2.2,-0.2).lineTo(2.3,0).curveTo(2,0.2,1.2,0.2).curveTo(0.1,0.2,-2.2,-0.2).closePath();
	this.shape_10.setTransform(-30.7,-50.2509);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#477A8E").beginStroke().moveTo(-46.4,9.9).curveTo(-65.7,5.8,-65.7,-0).curveTo(-65.7,-5.8,-46.4,-9.9).curveTo(-27.2,-14,0,-14).curveTo(27.2,-14,46.4,-9.9).curveTo(65.7,-5.8,65.7,-0).curveTo(65.7,5.8,46.4,9.9).curveTo(27.2,14,0,14).curveTo(-27.2,14,-46.4,9.9).closePath();
	this.shape_11.setTransform(29.775,19.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#477A8E").beginStroke().moveTo(0,89.6).curveTo(-29.4,90.7,-52.4,87.2).curveTo(-84.1,82.5,-87.6,70.4).curveTo(-92,54.8,-80,-9.9).curveTo(-76.2,-30.1,-71.3,-52.9).lineTo(-63.5,-87.5).lineTo(-16.7,-88.9).lineTo(-16.7,-89.9).lineTo(0,-89.4).lineTo(16.7,-89.9).lineTo(16.7,-88.9).lineTo(63.5,-87.5).lineTo(71.3,-52.9).curveTo(76.3,-30.2,80,-9.9).curveTo(92,54.8,87.6,70.4).curveTo(84.1,82.5,52.4,87.2).curveTo(34.8,89.9,13.4,89.9).curveTo(6.9,89.9,0,89.6).closePath();
	this.shape_12.setTransform(32.4268,93.6225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_6},{t:this.shape_1},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-183.5,208.8,367);
p.frameBounds = [rect];


(lib.Symbol55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol50("synched",0);
	this.instance.setTransform(0.35,-5.65);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-8.6,18.4).curveTo(-16.2,14.8,-19.1,6.9).curveTo(-22,-0.9,-18.4,-8.6).curveTo(-14.8,-16.2,-6.9,-19.1).curveTo(1,-21.9,8.6,-18.4).curveTo(16.2,-14.8,19,-6.9).curveTo(21.9,1,18.4,8.6).curveTo(14.8,16.2,6.9,19.1).curveTo(3.4,20.4,-0.1,20.4).curveTo(-4.4,20.4,-8.6,18.4).closePath();
	this.shape.setTransform(-24.2288,73.698,1,1,3.9539);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.5,-93.9,89.1,188);
p.frameBounds = [rect];


(lib.Symbol54 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-8.4,-0.3).curveTo(-7,-0,-4.1,0.2).curveTo(-2.3,0.3,0.1,0.2).curveTo(1.5,0.2,4.3,-0.2).curveTo(5.5,-0.4,8.5,-1.2).curveTo(6.3,0.1,4.4,0.6).curveTo(2.5,1.1,0.1,1.2).lineTo(-0.7,1.2).curveTo(-5,1.2,-8.4,-0.3).closePath();
	this.shape.setTransform(45.45,-27.9187);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-2.8,3.3).curveTo(-0.7,2.2,0.9,1.1).curveTo(2.5,0,4.2,-1.7).curveTo(5.3,-2.7,6.8,-5.1).curveTo(6.1,-2.7,4.8,-1.1).curveTo(3.5,0.5,1.5,1.9).curveTo(-0.4,3.2,-2.5,4).lineTo(-4.6,4.6).lineTo(-6.8,5.1).curveTo(-5.5,4.4,-2.8,3.3).closePath();
	this.shape_1.setTransform(8.175,-15.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#080808").beginStroke().moveTo(-8.1,0.2).curveTo(-7.1,-0.8,-5.5,-1.2).curveTo(-4.2,-1.4,-2.6,-1.3).lineTo(0,-1).curveTo(3.1,-0.5,5,-0.6).curveTo(6.6,-0.8,7.4,-1.1).curveTo(8.7,-1.6,9.5,-2.5).curveTo(9.3,-1.4,7.9,-0.2).curveTo(6.8,0.5,5.3,0.9).curveTo(3,1.4,-0.3,1).lineTo(-2.8,0.6).curveTo(-4.3,0.3,-5.3,0.4).curveTo(-6.4,0.4,-7.5,1).curveTo(-8.3,1.4,-9.5,2.5).curveTo(-9,1.1,-8.1,0.2).closePath();
	this.shape_2.setTransform(42.475,-36.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#080808").beginStroke().moveTo(-10.5,5.1).lineTo(-5,2.7).curveTo(-2.3,1.5,-0,-0).lineTo(2.2,-1.8).lineTo(4.5,-3.6).lineTo(5.8,-4.5).curveTo(6.6,-5,7.4,-5.1).curveTo(8.5,-5.1,10.4,-4.4).curveTo(8,-4.3,7.6,-4.1).curveTo(6.9,-3.9,5.5,-2.5).curveTo(4.4,-1.3,3.4,-0.4).lineTo(1.1,1.6).curveTo(-1.1,3.2,-4.5,4.2).curveTo(-7.5,5.1,-10.2,5.1).lineTo(-10.5,5.1).closePath();
	this.shape_3.setTransform(6.25,-22.5752);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.2,0.8).curveTo(-1.1,0.6,-1.9,0.2).curveTo(-2.7,-0.2,-3.3,-0.9).lineTo(1.6,0).lineTo(3.3,0.1).curveTo(2.5,0.7,1.6,0.8).lineTo(0.9,0.9).lineTo(-0.2,0.8).closePath();
	this.shape_4.setTransform(39.625,-21.8679);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#EFC7B0").beginStroke().moveTo(0.1,0.1).lineTo(2,-3.1).curveTo(2.1,-2.1,1.8,-1.1).curveTo(1.5,-0.3,0.9,0.6).curveTo(0.5,1.2,-0.4,2).curveTo(-1.3,2.8,-2,3.1).lineTo(0.1,0.1).closePath();
	this.shape_5.setTransform(17.0225,-13.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.4,-1.6).lineTo(0.9,-5.5).lineTo(1.5,-3.3).lineTo(-1.5,5.5).curveTo(-1.6,2.8,-0.4,-1.6).closePath();
	this.shape_6.setTransform(29.4212,9.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.8,3.1).lineTo(-3.6,-0.1).curveTo(-1.9,-1.7,-1.3,-1.7).lineTo(1.1,-1.9).lineTo(1.9,-2.6).curveTo(2.8,-3.2,3.4,-3.1).curveTo(4.7,-2.9,6.6,-1.8).lineTo(6.8,-1.6).curveTo(3.1,-1.6,-1.7,0.5).curveTo(-4.8,1.8,-6.8,3.1).closePath();
	this.shape_7.setTransform(44.575,18.3683);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#A51727").beginStroke().moveTo(-6.4,2.2).lineTo(-3.2,-0.9).curveTo(-1.5,-2.5,-0.9,-2.6).lineTo(1.5,-2.8).lineTo(2.3,-3.4).curveTo(3.2,-4.1,3.8,-4).curveTo(5.1,-3.7,7,-2.6).lineTo(8.5,-1.9).curveTo(5,-1.6,-2.1,1.2).lineTo(-8.5,4).curveTo(-7.9,3.7,-6.4,2.2).closePath();
	this.shape_8.setTransform(44.1875,19.2183);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFAFAF").beginStroke().moveTo(-6.7,6.6).lineTo(-10.7,5.7).curveTo(-9.6,3.5,-8.1,1).curveTo(-5,-3.9,-2.7,-5.1).curveTo(-0.7,-6.2,0.5,-5.3).curveTo(1,-5.1,1.2,-5.5).curveTo(1.9,-7,3.7,-7).curveTo(5.5,-6.9,7.4,-5.7).curveTo(9.7,-4.3,10.7,-1.8).lineTo(10.5,0.2).curveTo(10,2.4,8.8,3).curveTo(8,3.4,5.6,4.1).curveTo(3.1,4.9,-0.2,6.4).curveTo(-1.3,7,-3.3,7).curveTo(-4.8,7,-6.7,6.6).closePath();
	this.shape_9.setTransform(43.625,18.6146);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#080808").beginStroke().moveTo(-6,2.9).lineTo(-8.2,2.3).lineTo(-3.7,1.9).lineTo(-1.5,1.5).lineTo(0.6,1.1).curveTo(2.8,0.4,4.6,-0.5).curveTo(6.9,-1.8,8.2,-3.1).curveTo(7.5,-1.2,5.2,0.5).curveTo(3.7,1.7,1,2.5).curveTo(-1.1,3.1,-3.6,3.1).closePath();
	this.shape_10.setTransform(45.725,-26.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#080808").beginStroke().moveTo(-8.9,3).curveTo(-3.2,2.4,0.7,1.2).curveTo(2.7,0.6,5.1,-0.6).curveTo(6.5,-1.4,8.9,-3.6).curveTo(7.8,-1.3,5.7,0.3).curveTo(3.8,1.8,1.1,2.7).curveTo(-1.4,3.5,-3.9,3.5).lineTo(-4.7,3.6).curveTo(-7.1,3.6,-8.9,3).closePath();
	this.shape_11.setTransform(9.45,-13.4429);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#EFC7B0").beginStroke().moveTo(5.5,8.9).curveTo(2.2,8.4,-0.8,4.9).curveTo(-2.1,3.5,-4.6,-0.9).curveTo(-7.7,-6.2,-7.5,-8.1).curveTo(-7.4,-9,-6.5,-8.9).curveTo(-5.9,-8.9,-5.1,-8.3).curveTo(-2.6,-6.5,-1.4,-5.5).curveTo(0.8,-3.6,1.5,-1.9).lineTo(2.3,1.3).curveTo(2.7,2.9,4.3,3.9).curveTo(5.9,4.9,7.1,7).curveTo(8.3,8.9,6.4,8.9).lineTo(5.5,8.9).closePath();
	this.shape_12.setTransform(-29.1282,11.1348);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-5.8,4.1).curveTo(-7.4,4,-7.8,2.3).curveTo(-8,1.3,-7.6,0.1).curveTo(-7.7,1.1,-7.2,1.8).curveTo(-6.4,2.8,-4.9,2.6).lineTo(-2.3,1.9).curveTo(-1.7,1.8,0.2,2).curveTo(1.9,2,2.7,1.8).curveTo(3.3,1.7,4.4,0.8).curveTo(5.6,-0.1,6.2,-1).curveTo(7.1,-2.3,6.2,-4.1).lineTo(7.2,-3.1).curveTo(8.2,-1.9,7.7,-0.6).curveTo(7.6,-0.3,7.2,0.1).lineTo(6.5,0.8).lineTo(5.3,2.5).curveTo(4.8,3.2,3.3,3.8).curveTo(2.4,4.2,0.4,4).lineTo(-2.7,3.8).curveTo(-4.5,4.1,-5.5,4.1).lineTo(-5.8,4.1).closePath();
	this.shape_13.setTransform(38.089,2.8536);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#080808").beginStroke().moveTo(1,2.6).curveTo(-0.3,0.3,-1.4,-2.3).lineTo(-4.7,-9.2).lineTo(-1,-2.5).curveTo(0.1,-0.6,1.5,2.3).lineTo(4.7,9.2).closePath();
	this.shape_14.setTransform(45.575,-63.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#080808").beginStroke().moveTo(0.5,1.3).lineTo(-0.3,-1.4).curveTo(-0.8,-3.2,-1.5,-5.2).lineTo(-0,-1.5).curveTo(0.5,-0.2,0.8,1.3).curveTo(1.3,3.4,1.5,5.2).curveTo(1.1,3.1,0.5,1.3).closePath();
	this.shape_15.setTransform(37.825,-73.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#080808").beginStroke().moveTo(0.2,3).curveTo(1.2,0.9,2.2,-2.2).curveTo(3.4,-5.9,3.7,-9.8).curveTo(3.7,-5.8,2.7,-2.1).curveTo(2,0.9,0.7,3.3).curveTo(-1.1,6.7,-3.7,9.9).curveTo(-1.4,6.8,0.2,3).closePath();
	this.shape_16.setTransform(32.625,-72.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#080808").beginStroke().moveTo(-0.7,3.9).curveTo(2.1,1,4,-1.5).curveTo(7.2,-6,8.2,-10.6).curveTo(7.5,-5.8,4.5,-1.2).curveTo(2.6,1.8,-0.2,4.4).curveTo(-2.9,6.8,-8.2,10.6).curveTo(-3.2,6.5,-0.7,3.9).closePath();
	this.shape_17.setTransform(15.275,-62.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#080808").beginStroke().moveTo(-11.6,12.2).curveTo(-7,9.8,-2.8,7.2).curveTo(5.6,2,8.9,-0.6).curveTo(10.9,-2.3,12.5,-4).curveTo(14.3,-5.8,15.8,-7.8).lineTo(17.1,-9.8).lineTo(18.2,-12.1).curveTo(19.2,-14.4,20.8,-16.5).curveTo(19.5,-14.4,18.7,-11.9).lineTo(17.9,-9.4).lineTo(16.8,-7.1).curveTo(15.8,-5.4,13.9,-2.9).curveTo(12.2,-0.6,10.6,1.2).curveTo(6,5.8,-1.7,9.3).curveTo(-5.9,11.3,-11.1,13.3).curveTo(-16.5,15.3,-20.8,16.5).curveTo(-17,15,-11.6,12.2).closePath();
	this.shape_18.setTransform(-3.6,-58.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#080808").beginStroke().moveTo(-0.1,2.7).curveTo(-1.5,0.7,-2.3,-1.4).curveTo(-3.5,-4.3,-4.1,-7.4).curveTo(-3.1,-4.4,-1.5,-1.7).lineTo(0.6,2.2).curveTo(2.2,5,4.1,7.4).curveTo(1.7,5.2,-0.1,2.7).closePath();
	this.shape_19.setTransform(-21.375,0.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#080808").beginStroke().moveTo(4.1,10.8).curveTo(3.6,7.5,2.8,4.1).lineTo(0.3,-5.1).curveTo(-0.7,-8.2,-2,-11.4).curveTo(-3.2,-14.3,-5,-17.6).curveTo(-2.9,-14.8,-1.2,-11.8).curveTo(0.6,-8.7,1.9,-5.7).curveTo(3.9,-1.2,4.5,3.8).curveTo(4.9,7,5,10.7).curveTo(5,13.5,4.6,17.5).curveTo(4.6,14.3,4.1,10.8).closePath();
	this.shape_20.setTransform(-29.125,-22.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#080808").beginStroke().moveTo(1.9,2.3).lineTo(-0.8,-2.9).curveTo(-2.5,-6.5,-5,-10).curveTo(-2,-6.7,0.2,-3.5).curveTo(1.8,-0.9,2.9,1.9).curveTo(4.3,5.8,5,10).curveTo(3.7,5.9,1.9,2.3).closePath();
	this.shape_21.setTransform(-29.325,-31.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FDE4C8").beginStroke().moveTo(27.2,63.3).curveTo(14.7,62.1,3.3,59.6).curveTo(-13.1,56,-18.2,51.3).curveTo(-23,46.8,-26.1,42.3).lineTo(-28.2,38.7).curveTo(-30.9,39.7,-34.6,39.3).curveTo(-41.9,38.5,-47.1,31.3).curveTo(-53.1,23,-54.1,17.7).curveTo(-55,12.8,-51.7,11.1).curveTo(-49,9.7,-46.2,11.2).curveTo(-44.3,12.2,-41.5,15.4).curveTo(-37.6,20,-36.4,22.2).curveTo(-36.1,22.8,-35.7,23.1).lineTo(-34.9,23.5).lineTo(-35.8,21.7).lineTo(-35,22.5).lineTo(-33.8,23.3).lineTo(-34.9,21.3).lineTo(-33.5,22.3).curveTo(-32.9,22.7,-30.9,22.9).curveTo(-31.8,22.1,-32.4,20.6).curveTo(-34.1,16.5,-35.4,11.9).curveTo(-36.9,5.9,-36.5,3.1).curveTo(-35,-5.7,-39,-16.7).curveTo(-42.9,-27.2,-47.6,-29.6).lineTo(-45.6,-29.2).curveTo(-43.1,-28.8,-40.3,-28.9).curveTo(-31.1,-29.3,-21.7,-34).curveTo(-15,-37.4,-7,-42.6).curveTo(-1.4,-46.2,-1.5,-45.8).curveTo(-2.7,-43.5,-5.6,-40).curveTo(-6.9,-38.4,-8.6,-36.9).lineTo(-10,-35.6).curveTo(-3.5,-38.7,3.3,-45).curveTo(6.6,-48.2,8.7,-50.7).lineTo(5,-41.1).curveTo(7.4,-42.6,12.2,-49.4).curveTo(14.6,-52.8,16.5,-55.9).lineTo(13.2,-45.3).lineTo(15.3,-47.6).curveTo(17.8,-50.6,19.7,-54).curveTo(22.9,-59.4,23.6,-63.5).curveTo(26.7,-55.2,25.8,-58).lineTo(28.1,-51.3).lineTo(27.9,-57.9).lineTo(29.6,-54.6).lineTo(32.6,-48.6).curveTo(36.6,-40,37.8,-37.2).curveTo(39.7,-32.3,41.4,-25.9).curveTo(42.3,-22.4,45.6,-13.4).curveTo(49.4,-3.5,50.3,-0.5).lineTo(52.8,6.9).curveTo(55,16.7,53.9,28.8).curveTo(52.8,41.2,52,45.9).curveTo(51.2,51.1,49.7,54.4).curveTo(47.5,59.1,40.8,61.6).curveTo(35.9,63.5,30.5,63.5).curveTo(28.9,63.5,27.2,63.3).closePath();
	this.shape_22.setTransform(12.333,-15.2871);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#080808").beginStroke().moveTo(2.1,3.6).curveTo(1.2,-0.5,0.2,-4.2).curveTo(-1.3,-9.6,-3.6,-14.7).curveTo(-0.9,-9.8,0.9,-4.4).curveTo(2.2,-0.6,2.8,3.5).curveTo(3.7,9.1,3.6,14.7).curveTo(3.3,9.1,2.1,3.6).closePath();
	this.shape_23.setTransform(50.7553,-70.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#080808").beginStroke().moveTo(-9.4,1.7).curveTo(-7.6,-1.7,-5.6,-4.3).curveTo(-3.6,-6.5,-0.7,-9.3).curveTo(7.2,-16.7,15.4,-20.1).curveTo(7.4,-16.1,0.1,-8.5).lineTo(-4.4,-3.3).curveTo(-6.1,-1.2,-8.3,2.3).curveTo(-13.1,10.5,-15.5,20.1).curveTo(-13.8,10.2,-9.4,1.7).closePath();
	this.shape_24.setTransform(-59.75,-74.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#080808").beginStroke().moveTo(-14,3.4).curveTo(-10.6,0.9,-7.1,-1.3).curveTo(-2,-4.2,3.8,-6).curveTo(6.9,-7,11.8,-7.9).curveTo(16.1,-8.8,20,-9.1).curveTo(16,-8.4,11.9,-7.5).curveTo(7.7,-6.4,4.1,-5).curveTo(-1.4,-2.9,-6.6,-0.3).curveTo(-10.2,1.6,-13.7,3.9).curveTo(-16.9,6.1,-20,9.1).curveTo(-17.3,6.1,-14,3.4).closePath();
	this.shape_25.setTransform(-38.875,-96.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#080808").beginStroke().moveTo(-15.9,0.9).curveTo(-11.4,-0.9,-7.2,-2.2).curveTo(-0.7,-4.1,5.7,-4.6).curveTo(9.9,-5,15,-4.9).curveTo(19.4,-4.8,24.2,-4.2).curveTo(19.4,-4.5,15,-4.3).curveTo(9.9,-4,5.9,-3.4).curveTo(-0.5,-2.5,-6.9,-1).curveTo(-11.2,-0.1,-15.7,1.5).curveTo(-19.6,2.8,-24.2,4.9).curveTo(-20.3,2.8,-15.9,0.9).closePath();
	this.shape_26.setTransform(-21.35,-104.4361);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#080808").beginStroke().moveTo(14.6,1).curveTo(10.6,-0.9,6.6,-1.8).curveTo(1,-3,-5.2,-3.2).curveTo(-9,-3.4,-13.6,-2.6).curveTo(-17.5,-1.9,-21.8,-0.2).curveTo(-18.1,-2.3,-13.8,-3.7).curveTo(-9.3,-5.1,-5.2,-5.4).curveTo(1.1,-6,7.2,-3.9).curveTo(11.1,-2.5,15.1,-0).curveTo(18.6,2.3,21.8,5.6).curveTo(18.1,2.6,14.6,1).closePath();
	this.shape_27.setTransform(4.825,-107.7155);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#080808").beginStroke().moveTo(6.2,0.4).curveTo(4.6,-0.2,2.7,-0.5).curveTo(0.2,-0.9,-2.4,-1).curveTo(-4.3,-1,-6,-0.6).curveTo(-7.6,-0.3,-9.5,0.4).curveTo(-7.7,-0.6,-6.1,-1.1).curveTo(-3.9,-1.8,-2.4,-1.9).curveTo(0.3,-2.3,2.9,-1.4).curveTo(4.7,-0.9,6.4,-0.1).curveTo(8,0.8,9.5,2).curveTo(7.8,0.9,6.2,0.4).closePath();
	this.shape_28.setTransform(33.775,-99.089);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#080808").beginStroke().moveTo(7,5.5).curveTo(5.7,3.3,4.1,1.3).curveTo(1.5,-1.7,-1,-4.1).curveTo(-3.1,-6.1,-4.9,-7.5).curveTo(-6.9,-9,-9.4,-10.2).curveTo(-6.6,-9.2,-4.6,-8.1).curveTo(-1.9,-6.5,-0.1,-5.1).curveTo(3.1,-2.6,5.1,0.5).curveTo(6.3,2.2,7.7,5.2).curveTo(8.8,7.8,9.4,10.2).curveTo(8.4,7.8,7,5.5).closePath();
	this.shape_29.setTransform(22.95,-103);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#080808").beginStroke().moveTo(2.3,6).curveTo(-2.5,-1.7,-4.1,-5).curveTo(-6.7,-10.1,-7.9,-13.3).curveTo(-9.5,-17.7,-10.2,-22).curveTo(-8.8,-17.4,-6.8,-13.7).curveTo(-5.1,-10.5,-2.2,-6.2).curveTo(2.1,0.1,4.3,4.9).curveTo(8,13.4,10.3,22).curveTo(7,13.7,2.3,6).closePath();
	this.shape_30.setTransform(-16.65,14.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#080808").beginStroke().moveTo(-1.4,10.8).curveTo(-7.3,5.1,-10.8,-1.9).curveTo(-15.8,-11.9,-16.8,-23).curveTo(-14.8,-12.2,-9,-2.9).curveTo(-4.9,3.5,0.1,9.3).curveTo(7.6,17.9,16.8,23).curveTo(7.1,18.8,-1.4,10.8).closePath();
	this.shape_31.setTransform(-47.975,-5.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#080808").beginStroke().moveTo(-2.5,7.5).curveTo(-3.4,-0,-2.7,-7.5).curveTo(-1.9,-13.9,-0.9,-17.9).curveTo(0.7,-23.9,2.8,-27.7).curveTo(0.9,-23.7,-0.2,-17.7).curveTo(-1.1,-13.3,-1.3,-7.5).curveTo(-1.6,-0.3,-1.2,7.4).curveTo(-0.3,19.7,3,27.7).curveTo(-0.9,19.8,-2.5,7.5).closePath();
	this.shape_32.setTransform(-47.4955,-52.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#080808").beginStroke().moveTo(-3.8,3).curveTo(-3.4,-1.1,-1.7,-4.6).curveTo(0,-8.2,4,-14.1).curveTo(0.9,-8,-0.4,-4.1).curveTo(-1.4,-1,-2.4,3.3).curveTo(-3.6,8.6,-3.3,14.1).curveTo(-4.3,8.6,-3.8,3).closePath();
	this.shape_33.setTransform(-48.7556,-65.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#EFC7B0").beginStroke().moveTo(17.1,33.5).curveTo(6.5,33.3,-3.8,28.6).curveTo(-11,25.5,-16.7,22.7).curveTo(-27.6,17.5,-33.5,13.1).curveTo(-35.8,4.2,-39.8,-5.1).lineTo(-39.8,-5.1).lineTo(-40.1,-5.8).lineTo(-40.2,-5.9).lineTo(-40.1,-6.1).lineTo(-39.7,-8.4).lineTo(-39.7,-8.6).lineTo(-39.6,-9.1).lineTo(-39.6,-9.3).lineTo(-38.2,-16.8).curveTo(-29,-13.5,-29.6,-15.3).lineTo(-31.1,-19.9).curveTo(-23.5,-25.3,-20.7,-28.4).curveTo(-16.6,-27.2,-13.1,-26).lineTo(-13,-26.1).lineTo(-12.9,-26).lineTo(-12.7,-26.1).lineTo(-12.7,-26.2).lineTo(-11.6,-26.7).lineTo(-11.6,-26.7).lineTo(-11.5,-26.7).lineTo(-10.7,-27.1).lineTo(-10.7,-27.1).lineTo(-10.6,-27.1).lineTo(-10.2,-27.3).lineTo(-10.1,-27.4).lineTo(-9.7,-27.6).lineTo(-9.5,-27.6).lineTo(-9.1,-27.9).lineTo(-8.4,-28.1).lineTo(-8.4,-28.2).lineTo(-7,-28.8).lineTo(-1.4,-31.3).lineTo(-1.3,-31.3).lineTo(-0.7,-31.6).lineTo(-0.6,-31.6).lineTo(-0,-31.8).lineTo(0,-31.9).lineTo(0.6,-32.1).lineTo(0.7,-32.1).lineTo(1.3,-32.4).lineTo(1.3,-32.4).lineTo(1.9,-32.6).lineTo(1.9,-32.6).lineTo(3.7,-33.2).lineTo(3.7,-33.2).lineTo(4.9,-33.5).lineTo(5,-33.5).lineTo(5.5,-33.3).lineTo(5.6,-33.2).lineTo(5.7,-33.2).lineTo(6,-33).lineTo(6.2,-32.8).lineTo(7,-32.3).lineTo(7.2,-32.2).lineTo(24.7,-16.6).lineTo(24.9,-16.4).lineTo(36.3,-5.5).lineTo(36.3,-5.5).lineTo(36.2,-4.6).curveTo(36,-3.1,40.2,1.3).lineTo(39.3,3.4).lineTo(39.2,3.6).lineTo(38.8,4.4).curveTo(38.6,5,35.8,3.3).curveTo(32.8,1.4,31.4,2.7).lineTo(29.5,4.5).curveTo(29.5,4.9,30.4,7.9).curveTo(31,10.3,30.1,11.2).curveTo(29.2,12.2,29.3,13.4).curveTo(30,23.1,32.3,30.5).curveTo(26.9,33.5,18.2,33.5).lineTo(17.1,33.5).closePath();
	this.shape_34.setTransform(20.975,29.9809);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-15.5,49.9).lineTo(-39,29).curveTo(-27.8,18,-33.2,-7.4).curveTo(-34.9,-15.3,-38.1,-23.8).lineTo(-40.9,-30.6).lineTo(-38.6,-43.4).curveTo(-36.1,-56.5,-35.7,-58.2).curveTo(-35.2,-59.9,-24.4,-55.5).curveTo(-18.9,-53.3,-13.6,-50.7).lineTo(-5.7,-54.4).curveTo(2.6,-58.1,4.3,-58.2).curveTo(5.9,-58.2,23.5,-41.7).curveTo(32.2,-33.6,40.5,-25.4).curveTo(39.9,-24.4,38.1,-20.3).curveTo(37.9,-19.7,35.1,-21.4).curveTo(32.1,-23.3,30.7,-22).lineTo(28.8,-20.2).curveTo(28.8,-19.8,29.7,-16.8).curveTo(30.3,-14.4,29.4,-13.5).curveTo(28.5,-12.5,28.6,-11.3).curveTo(29.9,5.4,35.4,15.1).curveTo(38.1,20,40.5,21.5).lineTo(26.8,46).curveTo(19.8,57.3,6.6,58.5).lineTo(3.8,58.6).curveTo(-7.6,58.6,-15.5,49.9).closePath().moveTo(40.5,-25.4).lineTo(40.7,-25.7).curveTo(41,-26,40.8,-25.2).lineTo(40.5,-25.4).closePath().moveTo(40.5,-25.4).lineTo(40.5,-25.4).closePath();
	this.shape_35.setTransform(21.6694,54.6536);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#080808").beginStroke().moveTo(18.5,83.4).curveTo(6.9,81.6,4.7,77.8).curveTo(3.3,75.4,-17.1,53.3).curveTo(-39.4,29.1,-48.5,16.9).curveTo(-58.7,3.3,-61.3,-13.2).curveTo(-62.1,-18.3,-62,-23.1).lineTo(-61.8,-26.9).lineTo(-65.2,-17.2).curveTo(-65.1,-41.9,-48,-59.2).curveTo(-39.4,-67.8,-30.9,-71.5).lineTo(-42.8,-66.6).curveTo(-39.8,-69.6,-32.8,-73.2).curveTo(-18.9,-80.4,0.6,-83.4).curveTo(20.1,-86.3,31.5,-80.6).curveTo(37.2,-77.8,38.9,-74.4).lineTo(40.5,-74.2).curveTo(42.4,-73.8,44.5,-72.9).curveTo(51,-70.1,55.9,-63.3).curveTo(60.8,-56.5,63.5,-33.8).curveTo(64.8,-22.4,65.2,-12.4).lineTo(29.5,84.4).curveTo(24.2,84.3,18.5,83.4).closePath();
	this.shape_36.setTransform(-10.075,-25.803);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#080808").beginStroke().moveTo(0.8,1.1).lineTo(-0.1,-1.4).curveTo(-0.6,-3,-1.7,-4.7).curveTo(-0.6,-3.4,0.4,-1.5).curveTo(0.9,-0.3,1.3,1).curveTo(1.6,2.5,1.7,4.7).curveTo(1.4,2.8,0.8,1.1).closePath();
	this.shape_37.setTransform(2.25,20.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#E2B19F").beginStroke().moveTo(7,1.5).lineTo(1.7,-0.9).lineTo(1.8,-0.9).lineTo(-1.8,-1.5).lineTo(-5.4,-2.2).curveTo(-10.1,-3.1,-12.5,-3.7).lineTo(-5.3,-2.7).lineTo(1.9,-1.6).lineTo(1.9,-1.6).lineTo(7.2,1).lineTo(12.5,3.7).lineTo(7,1.5).closePath();
	this.shape_38.setTransform(36.25,-77.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#E2B19F").beginStroke().moveTo(13.9,5.7).lineTo(8,-0.7).lineTo(2,-7.2).lineTo(0.4,-8.7).lineTo(-1.6,-9.4).lineTo(-5.9,-10.4).lineTo(-14.6,-12.3).lineTo(-5.8,-10.9).lineTo(-0.3,-9.7).lineTo(0.7,-9.2).lineTo(2.4,-7.7).curveTo(6.7,-3.4,14.4,5.5).lineTo(14.6,5.7).lineTo(9.8,12.3).closePath();
	this.shape_39.setTransform(40.7,-74.775);

	this.instance = new lib.Path_2();
	this.instance.setTransform(44.4,-66.55,1,1,0,0,0,25.7,27.2);
	this.instance.alpha = 0.1992;
	this.instance.compositeOperation = "multiply";

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#FDE4C8").beginStroke().moveTo(2,30.9).curveTo(-1.4,29.2,-4.7,26.7).lineTo(-7.3,24.5).curveTo(-8,15.2,-7.7,11.4).curveTo(-7.5,9.5,-17.8,-2.1).curveTo(-27.9,-13.5,-27.2,-15).curveTo(-26.4,-16.9,-20.4,-25.3).lineTo(-14.7,-33.3).lineTo(-0.8,-29.5).lineTo(24,5.7).lineTo(27.2,18.5).lineTo(26.8,22.2).curveTo(25.4,26.7,20.8,30.2).curveTo(16.7,33.3,11.6,33.3).curveTo(7.2,33.3,2,30.9).closePath();
	this.shape_40.setTransform(45.9553,-64.107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.instance},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.3,-113.3,148.5,226.6);
p.frameBounds = [rect];


(lib.Symbol51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_73
	this.instance = new lib.Symbol73("synched",0);
	this.instance.setTransform(107.65,44.65,1,1,0,0,0,13.1,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.4773,y:44.7},47).to({rotation:0,y:44.65},52).wait(1));

	// Symbol_72
	this.instance_1 = new lib.Symbol72("synched",0);
	this.instance_1.setTransform(98.4,49.25,1,1,0,0,0,14,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:22.6,rotation:-3.7454,y:49.35},47).to({regY:22.5,rotation:0,y:49.25},52).wait(1));

	// Symbol_71
	this.instance_2 = new lib.Symbol71("synched",0);
	this.instance_2.setTransform(89.25,54.15,1,1,0,0,0,14.9,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:22,rotation:-3.9917,y:54.2},47).to({regY:21.9,rotation:0,y:54.15},52).wait(1));

	// Symbol_70
	this.instance_3 = new lib.Symbol70("synched",0);
	this.instance_3.setTransform(80.55,59.75,1,1,0,0,0,15.8,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:15.9,rotation:-3.9662,x:80.65},47).to({regX:15.8,rotation:0,x:80.55},52).wait(1));

	// Symbol_69
	this.instance_4 = new lib.Symbol69("synched",0);
	this.instance_4.setTransform(72.2,65.65,1,1,0,0,0,16.8,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:16.9,regY:20.7,rotation:-3.9794,x:72.3,y:65.75},47).to({regX:16.8,regY:20.6,rotation:0,x:72.2,y:65.65},52).wait(1));

	// Symbol_68
	this.instance_5 = new lib.Symbol68("synched",0);
	this.instance_5.setTransform(64.25,72.15,1,1,0,0,0,17.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-5.9998,x:64.3,y:72.2},47).to({rotation:0,x:64.25,y:72.15},52).wait(1));

	// Symbol_67
	this.instance_6 = new lib.Symbol67("synched",0);
	this.instance_6.setTransform(56.7,78.95,1,1,0,0,0,18.8,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-4.4773,x:56.75,y:79},47).to({rotation:0,x:56.7,y:78.95},52).wait(1));

	// Symbol_66
	this.instance_7 = new lib.Symbol66("synched",0);
	this.instance_7.setTransform(49.6,86.4,1,1,0,0,0,19.7,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:19.8,regY:18.1,rotation:-5.2407,x:49.7,y:86.45},47).to({regX:19.7,regY:18,rotation:0,x:49.6,y:86.4},52).wait(1));

	// Symbol_65
	this.instance_8 = new lib.Symbol65("synched",0);
	this.instance_8.setTransform(43.05,94.3,1,1,0,0,0,20.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-4.9554},47).to({rotation:0},52).wait(1));

	// Symbol_64
	this.instance_9 = new lib.Symbol64("synched",0);
	this.instance_9.setTransform(37.2,102.6,1,1,0,0,0,21.6,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-4.7062,x:37.25},47).to({rotation:0,x:37.2},52).wait(1));

	// Symbol_63
	this.instance_10 = new lib.Symbol63("synched",0);
	this.instance_10.setTransform(31.95,111.45,1,1,0,0,0,22.4,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-5.231},47).to({rotation:0},52).wait(1));

	// Symbol_62
	this.instance_11 = new lib.Symbol62("synched",0);
	this.instance_11.setTransform(27.4,120.55,1,1,0,0,0,23.1,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regY:12.7,rotation:-4.7379,y:120.65},47).to({regY:12.6,rotation:0,y:120.55},52).wait(1));

	// Symbol_61
	this.instance_12 = new lib.Symbol61("synched",0);
	this.instance_12.setTransform(23.8,130.2,1,1,0,0,0,23.8,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:-5.2407,x:23.85,y:130.25},47).to({rotation:0,x:23.8,y:130.2},52).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,21.8,120.7,119.4);
p.frameBounds = [rect, new cjs.Rectangle(0.1,21.8,120.6,119.2), new cjs.Rectangle(0.1,21.8,120.7,119.2), new cjs.Rectangle(0,21.8,120.8,119.1), new cjs.Rectangle(0,21.9,120.8,119), new cjs.Rectangle(0.1,21.9,120.8,119.1), rect=new cjs.Rectangle(0,21.9,120.9,119), rect, new cjs.Rectangle(0.1,21.9,120.9,118.9), new cjs.Rectangle(0,21.9,121,118.9), new cjs.Rectangle(0,22,120.9,118.7), new cjs.Rectangle(0,22,121,118.7), rect=new cjs.Rectangle(0,22,121.1,118.7), rect, rect, new cjs.Rectangle(-0.1,22,121.3,118.6), new cjs.Rectangle(0,22,121.3,118.6), new cjs.Rectangle(-0.1,22,121.3,118.5), rect=new cjs.Rectangle(0,22.1,121.3,118.4), rect, new cjs.Rectangle(0,22.1,121.4,118.3), new cjs.Rectangle(-0.1,22.1,121.5,118.3), new cjs.Rectangle(0,22.1,121.4,118.2), new cjs.Rectangle(-0.1,22.1,121.5,118.1), new cjs.Rectangle(0,22.2,121.5,118.1), new cjs.Rectangle(-0.1,22.3,121.7,118), new cjs.Rectangle(-0.1,22.2,121.7,118), new cjs.Rectangle(-0.1,22.2,121.7,117.9), new cjs.Rectangle(-0.1,22.3,121.8,117.8), new cjs.Rectangle(-0.1,22.2,121.8,117.8), new cjs.Rectangle(-0.1,22.3,121.8,117.7), new cjs.Rectangle(-0.2,22.3,121.9,117.7), new cjs.Rectangle(-0.1,22.3,121.9,117.6), new cjs.Rectangle(-0.2,22.3,121.9,117.6), new cjs.Rectangle(-0.2,22.3,122,117.5), new cjs.Rectangle(-0.1,22.3,122,117.5), new cjs.Rectangle(-0.2,22.4,122.1,117.4), new cjs.Rectangle(-0.2,22.3,122.1,117.4), new cjs.Rectangle(-0.2,22.4,122.1,117.4), new cjs.Rectangle(-0.2,22.5,122.1,117.2), new cjs.Rectangle(-0.1,22.4,122.1,117.2), new cjs.Rectangle(-0.2,22.5,122.3,117.1), new cjs.Rectangle(-0.2,22.5,122.2,117.1), new cjs.Rectangle(-0.2,22.5,122.2,117), new cjs.Rectangle(-0.3,22.5,122.4,117), rect=new cjs.Rectangle(-0.2,22.5,122.4,116.9), rect, new cjs.Rectangle(-0.3,22.5,122.4,116.8), new cjs.Rectangle(-0.2,22.5,122.5,116.9), rect=new cjs.Rectangle(-0.2,22.5,122.4,116.9), rect, new cjs.Rectangle(-0.2,22.5,122.4,117), new cjs.Rectangle(-0.2,22.5,122.3,117), rect=new cjs.Rectangle(-0.2,22.5,122.2,117.1), rect, rect=new cjs.Rectangle(-0.2,22.5,122.2,117.2), rect, new cjs.Rectangle(-0.1,22.4,122,117.4), new cjs.Rectangle(-0.1,22.4,122.1,117.4), new cjs.Rectangle(-0.1,22.4,122,117.5), new cjs.Rectangle(-0.1,22.4,121.9,117.4), new cjs.Rectangle(-0.1,22.4,122,117.5), new cjs.Rectangle(-0.1,22.3,122,117.6), new cjs.Rectangle(-0.2,22.3,122,117.6), new cjs.Rectangle(-0.1,22.3,121.9,117.7), new cjs.Rectangle(-0.1,22.3,121.8,117.7), new cjs.Rectangle(-0.1,22.3,121.9,117.8), new cjs.Rectangle(-0.1,22.2,121.8,117.8), new cjs.Rectangle(-0.1,22.2,121.8,117.9), new cjs.Rectangle(-0.1,22.2,121.7,118), new cjs.Rectangle(-0.1,22.2,121.7,117.9), new cjs.Rectangle(-0.1,22.2,121.7,118), new cjs.Rectangle(0,22.2,121.6,118), new cjs.Rectangle(0,22.2,121.5,118.1), new cjs.Rectangle(0,22.1,121.4,118.1), new cjs.Rectangle(-0.1,22.1,121.6,118.2), new cjs.Rectangle(0,22.1,121.4,118.2), new cjs.Rectangle(0,22.2,121.4,118.2), new cjs.Rectangle(-0.1,22.1,121.4,118.4), new cjs.Rectangle(0,22.1,121.3,118.4), new cjs.Rectangle(0,22,121.2,118.4), new cjs.Rectangle(-0.1,22,121.4,118.5), new cjs.Rectangle(0,22,121.3,118.6), new cjs.Rectangle(0,22,121.2,118.6), new cjs.Rectangle(0,22,121.1,118.6), new cjs.Rectangle(0,22,121.1,118.7), new cjs.Rectangle(0,21.9,121.1,118.8), new cjs.Rectangle(0.1,22,121,118.7), rect=new cjs.Rectangle(0,22,121,118.8), rect, new cjs.Rectangle(0.1,22,120.9,118.9), rect=new cjs.Rectangle(0,21.9,120.9,119), rect, new cjs.Rectangle(0.1,21.9,120.8,119), new cjs.Rectangle(0.1,21.9,120.9,119.1), new cjs.Rectangle(0.1,21.9,120.8,119), new cjs.Rectangle(0.1,21.9,120.8,119.2), new cjs.Rectangle(0.1,21.9,120.7,119.2), new cjs.Rectangle(0.1,21.8,120.7,119.3), new cjs.Rectangle(0,21.8,120.7,119.4)];


(lib.Symbol49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_56
	this.instance = new lib.Symbol56("synched",0);
	this.instance.setTransform(10.05,249,1,1,0,0,0,25,184);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:24.9,regY:184.2,scaleY:0.9919,skewX:0.3332,x:10.1,y:249.25},13).wait(4).to({startPosition:0},0).to({regX:25,regY:184,scaleY:1,skewX:0,x:10.05,y:249},14).wait(1));

	// Symbol_55
	this.instance_1 = new lib.Symbol55("synched",0);
	this.instance_1.setTransform(-96.4,-51.75,1,1,0,0,0,0,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,regY:-62.8,scaleY:1.0324,skewX:1.9329,skewY:3.741,x:-96.5,y:-48.25},13).wait(4).to({startPosition:0},0).to({regX:0,regY:-63,scaleY:1,skewX:0,skewY:0,x:-96.4,y:-51.75},14).wait(1));

	// Symbol_54
	this.instance_2 = new lib.Symbol54("synched",0);
	this.instance_2.setTransform(-50.55,-99.6,1,1,0,0,0,-19.1,89);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0.8079,x:-48.55,y:-94.6},13).wait(4).to({startPosition:0},0).to({rotation:0,x:-50.55,y:-99.6},14).wait(1));

	// Symbol_52
	this.instance_3 = new lib.Symbol52("synched",0);
	this.instance_3.setTransform(155.7,-186.45,1.0108,1,0,0,0,77,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:77.2,regY:37.9,scaleX:1,skewX:3.0308,skewY:3.2435,x:156.4,y:-171},13).wait(4).to({startPosition:0},0).to({regX:77,regY:38,scaleX:1.0108,skewX:0,skewY:0,x:155.7,y:-186.45},14).wait(1));

	// Symbol_53
	this.instance_4 = new lib.Symbol53("synched",0);
	this.instance_4.setTransform(61.6,-79.45,1,1,0,0,0,-32,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-31.7,regY:9.7,scaleY:1.0648,skewX:0.9418,skewY:6.4588,x:61.8,y:-70.5},13).wait(4).to({startPosition:0},0).to({regX:-32,regY:10,scaleY:1,skewX:0,skewY:0,x:61.6,y:-79.45},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.9,-301.9,305.2,550.4);
p.frameBounds = [rect, new cjs.Rectangle(-141.3,-301.4,305.6,550.1), new cjs.Rectangle(-141.6,-301.1,306,549.8), new cjs.Rectangle(-142,-300.6,306.4,549.2), new cjs.Rectangle(-142.4,-300.2,306.9,548.9), new cjs.Rectangle(-142.8,-299.8,307.3,548.5), new cjs.Rectangle(-143.1,-299.4,307.8,548.2), new cjs.Rectangle(-143.5,-299,308.1,547.8), new cjs.Rectangle(-143.9,-298.6,308.5,547.4), new cjs.Rectangle(-144.2,-298.2,308.9,547), new cjs.Rectangle(-144.5,-297.8,309.3,546.7), new cjs.Rectangle(-145,-297.4,309.8,546.3), new cjs.Rectangle(-145.3,-297,310.2,545.9), rect=new cjs.Rectangle(-145.6,-296.6,310.4,545.2), rect, rect, rect, rect, new cjs.Rectangle(-145.2,-296.9,309.9,545.5), new cjs.Rectangle(-144.9,-297.3,309.5,545.9), new cjs.Rectangle(-144.5,-297.7,309.1,546.3), new cjs.Rectangle(-144.2,-298.1,308.7,546.7), new cjs.Rectangle(-143.8,-298.5,308.3,547), new cjs.Rectangle(-143.5,-298.8,308,547.3), new cjs.Rectangle(-143.1,-299.2,307.5,547.8), new cjs.Rectangle(-142.8,-299.6,307.2,548.1), new cjs.Rectangle(-142.5,-300,306.8,548.5), new cjs.Rectangle(-142.1,-300.4,306.5,548.8), new cjs.Rectangle(-141.8,-300.8,306.1,549.2), new cjs.Rectangle(-141.4,-301.1,305.6,549.5), new cjs.Rectangle(-141,-301.5,305.2,549.9), new cjs.Rectangle(-140.9,-301.9,305.2,550.4)];


(lib.Symbol48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol45("synched",0);
	this.instance.setTransform(99.6,130.75,1,1,0,0,0,99.6,109.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-22.6,27).curveTo(-35.2,20.9,-35.2,8.8).curveTo(-35.2,-4.6,-22.6,-18.2).curveTo(-9.8,-32,3.3,-32).curveTo(16.5,-32,25.9,-22.6).curveTo(35.2,-13.2,35.2,-0).curveTo(35.2,13.3,25.9,22.6).curveTo(16.5,31.9,3.3,31.9).curveTo(-12.3,31.9,-22.6,27).closePath();
	this.shape.setTransform(121.025,31.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,199.2,240.1);
p.frameBounds = [rect];


(lib.Symbol46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_10();
	this.instance.setTransform(96.1,199.9,1,1,0,0,0,70,52.5);
	this.instance.alpha = 0.2109;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Path_11();
	this.instance_1.setTransform(122.8,110.8,1,1,0,0,0,103.2,110.5);
	this.instance_1.alpha = 0.2109;
	this.instance_1.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(8.5,109.5).curveTo(-17.9,107.4,-42.1,102.5).curveTo(-71.3,96.6,-87.1,88.4).curveTo(-105.9,78.6,-102.7,66.7).lineTo(-102.4,65.6).curveTo(-96.5,44.3,-86.4,10.7).lineTo(-77.5,-18.6).curveTo(-67.6,-15.2,-56.7,-17.4).curveTo(-46.5,-19.4,-37.1,-26.1).curveTo(-27.9,-32.5,-21.4,-41.9).curveTo(-14.8,-51.6,-12.6,-62.1).curveTo(-8.4,-82.2,-13.4,-98.4).curveTo(-14.9,-103.4,-17.2,-107.5).lineTo(-19.1,-110.5).curveTo(-9.7,-110.2,5.5,-107.3).curveTo(7.8,-104.1,10.4,-94.6).curveTo(14.4,-79.8,13.7,-62.6).curveTo(12.8,-39.4,21.9,-30.2).curveTo(25.7,-26.3,32.5,-23.4).curveTo(35.7,-22,46.3,-18.6).curveTo(62.9,-13.2,70.9,-16).curveTo(80.3,-19.3,83.7,-35.2).curveTo(87.3,-52.2,85,-70).curveTo(84.3,-75.6,83,-80.6).lineTo(81.9,-84.5).lineTo(96.8,-78.4).curveTo(100.4,-72.8,102.3,-58).curveTo(104.7,-40.3,100.8,-27.9).curveTo(96.5,-14.5,87.5,5.5).curveTo(76.4,30.1,65.1,48.2).curveTo(54.7,64.9,46.9,89).curveTo(43,101.1,41.1,109.9).curveTo(37.2,110.5,30.2,110.5).curveTo(21.7,110.5,8.5,109.5).closePath();
	this.shape.setTransform(122.7963,110.8482);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#D5A690").beginStroke().moveTo(1.4,-6.8).curveTo(2.5,-6.6,4.4,-8).curveTo(8.1,-10.7,11.8,-18.5).curveTo(13.5,-22,10.6,-13.2).lineTo(7.3,-3.6).lineTo(-12.5,19.5).closePath();
	this.shape_1.setTransform(214.1141,103.4668);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#D5A690").beginStroke().moveTo(-26.8,48.2).curveTo(-34.7,46.5,-41.5,37).curveTo(-47.3,28.8,-47.3,24.1).curveTo(-47.3,19.4,-39.7,-5.1).curveTo(-32.2,-29.5,-32.2,-19.8).curveTo(-32.3,-14.4,-27.3,-8.5).curveTo(-22.5,-2.8,-14.5,1.9).curveTo(3.9,12.5,21.8,10.2).curveTo(37.2,8.2,39.7,-20.5).curveTo(40.5,-29.6,39.8,-40.3).curveTo(39.4,-48,39,-49.6).lineTo(47.3,-44.3).lineTo(47.3,-25.7).curveTo(47.2,-6.2,46.5,-2).curveTo(45.6,3.5,35.5,18.4).curveTo(24.9,34.2,16.6,40.9).curveTo(8.6,47.5,-5.1,49.1).curveTo(-9.3,49.6,-13.3,49.6).curveTo(-20.2,49.6,-26.8,48.2).closePath();
	this.shape_2.setTransform(167.575,82.0164);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-27.8,51.2).lineTo(-24,-58.7).lineTo(24.1,-60.4).lineTo(25.4,-57).curveTo(26.8,-52.5,27.4,-47.2).curveTo(29.2,-30.4,21.9,-11.6).lineTo(12,60.4).closePath();
	this.shape_3.setTransform(208.503,108.625);

	this.instance_2 = new lib.Path_18();
	this.instance_2.setTransform(98.95,255.7,1,1,0,0,0,98.9,77.2);
	this.instance_2.alpha = 0.2109;
	this.instance_2.compositeOperation = "multiply";

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#477A8E").beginStroke().moveTo(0.6,72.9).curveTo(-48.6,71.2,-97.8,69.3).curveTo(-102,8.9,-90.9,-39.3).curveTo(-87.4,-54.4,-82.8,-66.4).lineTo(-78.9,-75.4).lineTo(74.6,-30.5).curveTo(73.6,-6.7,86.2,36.1).curveTo(92.5,57.6,99,75.2).curveTo(99,75.4,93.8,75.4).curveTo(76.4,75.4,0.6,72.9).closePath();
	this.shape_4.setTransform(98.9754,252.9899);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-22.6,22.6).curveTo(-31.9,13.3,-31.9,0).curveTo(-31.9,-13.2,-22.6,-22.6).curveTo(-13.2,-31.9,0,-31.9).curveTo(13.3,-31.9,22.6,-22.6).curveTo(32,-13.2,32,0).curveTo(32,13.3,22.6,22.6).curveTo(13.3,32,0,32).curveTo(-13.2,32,-22.6,22.6).closePath();
	this.shape_5.setTransform(203.05,60.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#D5A690").beginStroke().moveTo(-9.6,81.8).curveTo(-15.3,80.9,-24.7,59.1).lineTo(-33,37.4).lineTo(-35.3,14.9).lineTo(-19.6,-2.3).lineTo(-16.7,-2.8).curveTo(-13.1,-3.6,-9.8,-5).curveTo(0.9,-9.6,5.7,-19).lineTo(4.4,-16.2).curveTo(2.7,-12.8,0.7,-9.9).curveTo(-5.7,-0.3,-13.1,1.6).curveTo(-11.9,2.1,-6.7,-0.4).curveTo(4.3,-5.8,11.3,-17.8).curveTo(19.3,-31.5,19.4,-48.9).curveTo(19.6,-65.6,12.5,-81.9).lineTo(23.4,-76.8).curveTo(34.2,-71.6,34.4,-70.6).curveTo(35.3,-64.8,35.3,-8.4).curveTo(35.3,53.1,31.7,55.8).curveTo(28.8,57.9,12.3,70.8).curveTo(-2.7,81.9,-8.8,81.9).lineTo(-9.6,81.8).closePath();
	this.shape_6.setTransform(91.1253,81.8536);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-87,62).curveTo(-92,58.4,-92.6,50.1).curveTo(-93.4,38.4,-85,18.8).curveTo(-84.3,17.2,-70.2,-35.9).lineTo(-65,-61.6).lineTo(-59.6,-62).curveTo(-52.7,-62.4,-45.4,-62.2).curveTo(-21.9,-61.5,-2.8,-55.6).lineTo(61.6,-35.9).lineTo(65.6,-33.9).curveTo(70.4,-31.2,74.7,-28).curveTo(88.5,-17.8,91.9,-5.7).curveTo(95.6,7.5,82.3,19.7).curveTo(78,23.7,72.4,27).curveTo(68.5,29.3,66.7,30).curveTo(66,30.2,64,33.6).lineTo(59.7,40.7).curveTo(52.9,50.8,46.9,50.8).curveTo(37.9,50.8,18.4,48.3).curveTo(-3.3,45.5,-12.1,42.5).curveTo(-19.1,40,-52.5,51.9).lineTo(-75,59.8).curveTo(-82.7,62.3,-85.6,62.3).curveTo(-86.6,62.3,-87,62).closePath();
	this.shape_7.setTransform(143.1439,62.2372);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_2},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,236.3,333);
p.frameBounds = [rect];


(lib.Symbol43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol44("synched",0);
	this.instance.setTransform(233.45,104.7,1,1,0,0,0,68.9,104.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:184.7,y:184.7},0).to({regX:69,rotation:3.9917,x:230.35,y:191.95},13).wait(4).to({startPosition:0},0).to({regX:68.9,rotation:0,x:233.45,y:184.7},14).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol48("synched",0);
	this.instance_1.setTransform(133.2,181.5,1,1,0,0,0,133.2,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).to({rotation:4.9659,x:132.4,y:186.35},13).wait(4).to({startPosition:0},0).to({rotation:0,x:133.2,y:181.5},14).wait(1));

	// Layer_4
	this.instance_2 = new lib.Symbol47("synched",0);
	this.instance_2.setTransform(213.2,351.4,1,1,0,0,0,52.6,45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:94.2,regY:29.2,x:254.8,y:335.4},0).to({rotation:-6.4746,x:257.2,y:333.8},13).wait(4).to({startPosition:0},0).to({rotation:0,x:254.8,y:335.4},14).wait(1));

	// Layer_3
	this.instance_3 = new lib.Symbol46("synched",0);
	this.instance_3.setTransform(161.1,321.15,1,1,0,0,0,118.1,166.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:333,y:487.65},0).to({regY:333.1,scaleY:0.9928,y:488.95},13).wait(4).to({startPosition:0},0).to({regY:333,scaleY:1,y:487.65},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,302.4,487.7);
p.frameBounds = [rect, rect, new cjs.Rectangle(-0.9,0.6,303.8,487.2), new cjs.Rectangle(-1.7,1.1,305.1,486.8), new cjs.Rectangle(-2.7,1.6,306.5,486.4), new cjs.Rectangle(-3.5,2.2,308,485.9), new cjs.Rectangle(-4.5,2.7,309.4,485.5), new cjs.Rectangle(-5.3,3.2,310.7,485.1), new cjs.Rectangle(-6.2,3.7,312,484.6), new cjs.Rectangle(-7,4.3,313.3,484.2), new cjs.Rectangle(-7.9,4.8,314.7,483.7), new cjs.Rectangle(-8.8,5.4,316.1,483.3), new cjs.Rectangle(-9.7,5.9,317.5,482.8), new cjs.Rectangle(-10.4,6.5,318.7,482.3), rect=new cjs.Rectangle(-11.4,7,320,481.9), rect, rect, rect, rect, new cjs.Rectangle(-10.6,6.6,318.8,482.2), new cjs.Rectangle(-9.8,6,317.6,482.6), new cjs.Rectangle(-9,5.4,316.4,483.1), new cjs.Rectangle(-8.2,5,315.1,483.5), new cjs.Rectangle(-7.4,4.4,313.9,484), new cjs.Rectangle(-6.6,4,312.6,484.3), new cjs.Rectangle(-5.8,3.5,311.4,484.8), new cjs.Rectangle(-4.9,3,310,485.2), new cjs.Rectangle(-4.1,2.5,308.8,485.5), new cjs.Rectangle(-3.3,2,307.5,486), new cjs.Rectangle(-2.5,1.5,306.2,486.4), new cjs.Rectangle(-1.7,1,305,486.8), new cjs.Rectangle(-0.9,0.5,303.8,487.3), new cjs.Rectangle(0,0,302.4,487.7)];


(lib.Symbol42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_4_0();
	this.instance.setTransform(92.25,253.4,1,1,0,0,0,36.9,7.7);
	this.instance.alpha = 0.5313;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.CompoundPath();
	this.instance_1.setTransform(90,313.1,1,1,0,0,0,90,48.8);
	this.instance_1.alpha = 0.2109;
	this.instance_1.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#477A8E").beginStroke().moveTo(-90.4,41.7).lineTo(-71.9,-55.8).lineTo(64.4,-46).curveTo(64.1,-42.4,64.1,-39).lineTo(75.3,-44.9).lineTo(75.3,-45.5).lineTo(90.3,42.7).curveTo(45,55.8,0.6,55.8).curveTo(-45.4,55.8,-90.4,41.7).closePath();
	this.shape.setTransform(89.65,320.055);

	this.instance_2 = new lib.Path_7();
	this.instance_2.setTransform(17.75,164.5,1,1,0,0,0,13.4,49);
	this.instance_2.alpha = 0.5313;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Path_8_1();
	this.instance_3.setTransform(91.05,175.65,1,1,0,0,0,86.7,102.9);
	this.instance_3.alpha = 0.2109;
	this.instance_3.compositeOperation = "multiply";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#477A8E").beginStroke().moveTo(-70.6,83.2).lineTo(-72.4,80.1).curveTo(-80.5,41.3,-84.3,3.2).lineTo(-86.6,-27.2).curveTo(-83.6,-21.3,-79.7,-20.2).curveTo(-75.9,-19.1,-72.1,-22.6).curveTo(-63.5,-30.7,-61,-53.9).curveTo(-58.3,-80.5,-63,-100.4).curveTo(-64.4,-106.6,-66.5,-111.4).lineTo(-68.2,-114.9).curveTo(-61.1,-114.2,-59.2,-114.2).curveTo(-57.3,-114.2,-52.8,-114.9).lineTo(-50.9,-114.3).curveTo(-49,-113.3,-46.6,-110.8).curveTo(-39.2,-102.7,-28.9,-79.9).curveTo(-24.4,-70,-21.9,-65.9).curveTo(-18,-59.6,-13.1,-55.9).curveTo(-2.2,-47.9,24.4,-47.1).curveTo(38.4,-46.8,46.4,-52.7).curveTo(53.8,-58.3,54.9,-68.5).curveTo(55.9,-78.3,50.6,-90.2).curveTo(45.2,-102.3,34.5,-113.8).lineTo(45.4,-110.9).lineTo(52.7,-103.8).curveTo(61.3,-94.5,68.2,-83).curveTo(90.1,-46.5,85.9,-3.4).curveTo(82.8,29.3,73.8,99.5).lineTo(37.9,114.9).closePath();
	this.shape_1.setTransform(90.9306,180.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#D5A690").beginStroke().moveTo(-24,24.4).curveTo(-19.8,14.1,-9.5,-9.6).lineTo(-10.5,-3.4).curveTo(-11.7,4.3,-13.3,11.7).curveTo(-15.2,20.9,-14.9,23.8).curveTo(-14.5,27.6,-10.7,25.3).curveTo(-7.1,23.4,-4.5,16.8).lineTo(-2.6,10.6).curveTo(2.7,-14.7,-0.3,-38.3).curveTo(-1.3,-45.7,-3,-52).lineTo(-4.5,-56.8).lineTo(12.5,-46.3).lineTo(14.2,-41.6).curveTo(16.1,-36.7,17,-35.7).curveTo(18.3,-34.2,23.8,-14.2).curveTo(24.4,-12,23.6,0.7).curveTo(22.8,13.1,21.8,19.2).curveTo(21,24.3,13,34.7).curveTo(6,44,3.9,45.2).curveTo(2.1,46.1,-20,56.8).closePath();
	this.shape_2.setTransform(28.5491,125.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#D5A690").beginStroke().moveTo(-2,25.7).curveTo(-2.1,16.1,-1.6,4.3).curveTo(-0.7,-19.4,1.8,-31).lineTo(2.1,31).closePath();
	this.shape_3.setTransform(174.2475,139.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-4.7,-0).lineTo(-9.7,-4.3).curveTo(-5.5,-1.1,2.5,-0.6).curveTo(6.5,-0.3,9.7,-0.7).lineTo(9.1,1.5).curveTo(7.8,3.8,4.7,4.3).lineTo(4.2,4.3).curveTo(1,4.3,-4.7,-0).closePath();
	this.shape_4.setTransform(101.2111,80.8565);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#D5A690").beginStroke().moveTo(-18.8,54.4).curveTo(-38.2,51,-47.6,34.8).curveTo(-50.6,29.8,-52.2,24).lineTo(-53.2,19.3).curveTo(-56.2,0.6,-58.3,-17.3).curveTo(-62.5,-53.1,-57.8,-48.9).curveTo(-51.9,-43.8,-46.5,-32.2).curveTo(-38.8,-15.8,-36.8,-12.5).curveTo(-30.1,-1.8,-20,3.2).curveTo(-7.4,9.4,12.8,8.4).curveTo(46,6.6,36.4,-25.3).curveTo(33.4,-35.2,26.6,-47).lineTo(20.3,-56.8).lineTo(38.3,-48.7).lineTo(43.5,-42.8).curveTo(48.8,-36.5,49.6,-34.2).lineTo(55.7,-18.9).curveTo(60.6,-5.9,60.2,-3.6).lineTo(56.4,19.3).curveTo(52.2,40.7,47.5,46.4).curveTo(41.6,53.4,23.1,55.8).curveTo(15.6,56.8,7.6,56.8).curveTo(-5,56.8,-18.8,54.4).closePath();
	this.shape_5.setTransform(105.1045,123.8133);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-4.1,34.7).curveTo(-18.2,33.1,-27,22).curveTo(-35.8,11,-34.2,-3.1).curveTo(-32.5,-18.2,-24.4,-27.2).curveTo(-15.5,-37.1,-2.4,-34.3).curveTo(12.2,-31.2,22.5,-20.5).curveTo(33.3,-9.4,34.4,5.2).curveTo(35.4,18.8,22.7,27.8).curveTo(12.6,34.9,0.7,34.9).curveTo(-1.7,34.9,-4.1,34.7).closePath();
	this.shape_6.setTransform(157.9704,109.0914);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-36.5,3.8).curveTo(-32.1,-19.3,-16.5,-16.6).curveTo(-1,-13.9,10.2,-19.9).curveTo(15.8,-23,18.3,-26.6).lineTo(18.6,-27.4).lineTo(28.7,-7.6).curveTo(38.7,12.5,38,14).curveTo(37.3,15.7,-0.3,21.7).curveTo(-19.1,24.6,-37.7,27.3).curveTo(-38.6,15.3,-36.5,3.8).closePath();
	this.shape_7.setTransform(38.3434,82.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-94.5,31.1).lineTo(-94.5,-52.9).curveTo(-75,-56.4,-65.7,-57.9).curveTo(-37.6,-62.5,-18.9,-64).curveTo(-2.8,-65.3,16.3,-60.4).curveTo(22,-58.9,34.7,-55.3).curveTo(47.2,-51.9,57.9,-49.6).curveTo(61.3,-48.9,66.8,-43.9).curveTo(69.5,-41.3,71.6,-38.9).lineTo(75.2,-37.2).curveTo(79.5,-34.8,83.1,-31.5).curveTo(94.6,-20.8,94.4,-5).curveTo(94.2,12.1,81.4,19.6).curveTo(75.1,23.4,68.7,23.7).lineTo(10.3,64.3).closePath();
	this.shape_8.setTransform(98.9517,124.6887);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#477A8E").beginStroke().moveTo(-2.2,-0.5).lineTo(2.2,0.3).curveTo(2,0.5,1.6,0.5).curveTo(0.5,0.5,-2.2,-0.5).closePath();
	this.shape_9.setTransform(33.45,186.7194);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#477A8E").beginStroke().moveTo(-0.5,14).curveTo(-27.6,13,-46.7,8.3).curveTo(-65.8,3.5,-65.6,-2.3).curveTo(-65.4,-8,-46.1,-11.5).curveTo(-26.7,-14.9,0.5,-14).curveTo(27.7,-13,46.8,-8.3).curveTo(65.8,-3.5,65.7,2.3).curveTo(65.4,8.1,46.1,11.5).curveTo(30.9,14.2,10.9,14.2).curveTo(5.4,14.2,-0.5,14).closePath();
	this.shape_10.setTransform(84.85,264.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.instance_2},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4,55.5,197.4,320.4);
p.frameBounds = [rect];


(lib.Symbol40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol30("synched",0);
	this.instance.setTransform(99.15,57.5,1,1,0,0,0,95,51.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-7.1,19).curveTo(-14.9,16.1,-18.4,8.4).curveTo(-21.9,0.8,-19,-7.1).curveTo(-16.1,-14.9,-8.4,-18.4).curveTo(-0.8,-21.9,7.1,-19).curveTo(15,-16.1,18.5,-8.5).curveTo(22,-0.8,19,7).curveTo(16.1,14.9,8.5,18.4).curveTo(4.3,20.3,0.1,20.3).curveTo(-3.5,20.3,-7.1,19).closePath();
	this.shape.setTransform(20.3426,20.3176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,194.3,108.5);
p.frameBounds = [rect];


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(25.65,85.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10.9656,x:48.85,y:60.25},1).to({scaleX:0.9999,scaleY:0.9999,rotation:-21.9332,x:75.55,y:33.25},1).to({scaleX:1,scaleY:1,rotation:-32.902,x:94.95,y:0.75},1).to({scaleX:0.9999,scaleY:0.9999,rotation:-43.8698,x:107.2,y:-28.4},1).to({scaleX:1,scaleY:1,rotation:-65.8047,x:116,y:-97.15},2).to({scaleX:0.9999,scaleY:0.9999,rotation:-78.4275,x:121.3,y:-155.45},2).to({regX:0.1,regY:0.1,rotation:-108.4264,x:72.2,y:-229},3).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.setTransform(-45.45,33.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,regY:0.1,rotation:-8.4667,x:-37.65,y:15.15},1).to({regX:0,regY:0,rotation:-25.4026,x:-10.95,y:-23.85},2).to({scaleX:0.9999,scaleY:0.9999,rotation:-33.8688,x:17.4,y:-18.05},1).to({scaleX:1,scaleY:1,rotation:-50.8056,x:32.25,y:-53},2).to({rotation:-69.857,x:51.85,y:-95.5},2).to({x:42.65,y:-143.7},3).wait(1));

	// Layer_6
	this.instance_2 = new lib.Symbol8("synched",0);
	this.instance_2.setTransform(-59.7,-60.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-0.967,x:-60.35,y:-64.65},1).to({rotation:-2.9021,x:-61.6,y:-74.8},2).to({regX:-0.1,regY:-0.1,rotation:0.4686,x:-62.45,y:-56.75},1).to({regX:0,regY:0,rotation:7.2173,x:-69.75,y:-30.75},2).to({_off:true},1).wait(5));

	// Layer_5
	this.instance_3 = new lib.Symbol7("synched",0);
	this.instance_3.setTransform(-74.1,-49.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-0.1,regY:-0.1,rotation:-5.2495,x:-65.95,y:-55.35},1).to({regY:-0.2,rotation:-14.1459,x:-57.75,y:-60.85},1).to({regY:-0.1,rotation:-23.044,x:-49.55,y:-67.65},1).to({rotation:-30.7246,x:-44.65,y:-71.5},1).to({regX:0.1,rotation:-46.0887,x:-40.85,y:-89.6},2).to({rotation:-67.1622,x:-31.9,y:-101.7},2).to({regY:-0.2,rotation:-88.3981,x:-34.5,y:-121.3},3).wait(1));

	// Layer_1
	this.instance_4 = new lib.Symbol9("synched",0);
	this.instance_4.setTransform(-76.25,-67.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-8.4667,x:-69.4,y:-71.05},1).to({rotation:-25.4026,x:-55.7,y:-79.55},2).to({scaleX:0.9999,scaleY:0.9999,rotation:-36.9383,x:-53.1,y:-87.65},1).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:-60.0101,x:-53.55,y:-103.35},2).to({rotation:-69.857,x:-46.6,y:-110.7},2).to({rotation:-91.0921,x:-50.65,y:-124.1},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.5,-148.4,251.7,296.5);
p.frameBounds = [rect, new cjs.Rectangle(-132.4,-147.3,277.4,259.8), new cjs.Rectangle(-132.1,-146.3,305.8,220), new cjs.Rectangle(-130.5,-145.7,322.1,174.1), new cjs.Rectangle(-130.2,-146.7,329,150.5), new cjs.Rectangle(-132,-147,328.8,133.1), new cjs.Rectangle(-136.1,-164.3,331,162.9), new cjs.Rectangle(-134,-200.9,328.2,147.8), new cjs.Rectangle(-131.1,-236.5,323.5,172.9), new cjs.Rectangle(-132.4,-269.3,301.1,205), new cjs.Rectangle(-132.4,-299.4,275.8,236.8), new cjs.Rectangle(-130.9,-326.7,247.4,265.3)];


(lib.ionCl7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:10},74).to({y:0},75).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect, new cjs.Rectangle(-21,-20.8,42,42), new cjs.Rectangle(-21,-20.7,42,42), new cjs.Rectangle(-21,-20.6,42,42), new cjs.Rectangle(-21,-20.4,42,42), new cjs.Rectangle(-21,-20.3,42,42), new cjs.Rectangle(-21,-20.2,42,42), new cjs.Rectangle(-21,-20,42,42), new cjs.Rectangle(-21,-19.9,42,42), new cjs.Rectangle(-21,-19.8,42,42), new cjs.Rectangle(-21,-19.6,42,42), new cjs.Rectangle(-21,-19.5,42,42), new cjs.Rectangle(-21,-19.4,42,42), new cjs.Rectangle(-21,-19.2,42,42), new cjs.Rectangle(-21,-19.1,42,42), new cjs.Rectangle(-21,-18.9,42,42), new cjs.Rectangle(-21,-18.8,42,42), new cjs.Rectangle(-21,-18.7,42,42), new cjs.Rectangle(-21,-18.5,42,42), new cjs.Rectangle(-21,-18.4,42,42), new cjs.Rectangle(-21,-18.3,42,42), new cjs.Rectangle(-21,-18.1,42,42), new cjs.Rectangle(-21,-18,42,42), new cjs.Rectangle(-21,-17.9,42,42), new cjs.Rectangle(-21,-17.7,42,42), new cjs.Rectangle(-21,-17.6,42,42), new cjs.Rectangle(-21,-17.5,42,42), new cjs.Rectangle(-21,-17.3,42,42), new cjs.Rectangle(-21,-17.2,42,42), new cjs.Rectangle(-21,-17.1,42,42), new cjs.Rectangle(-21,-16.9,42,42), new cjs.Rectangle(-21,-16.8,42,42), new cjs.Rectangle(-21,-16.7,42,42), new cjs.Rectangle(-21,-16.5,42,42), new cjs.Rectangle(-21,-16.4,42,42), new cjs.Rectangle(-21,-16.2,42,42), new cjs.Rectangle(-21,-16.1,42,42), new cjs.Rectangle(-21,-16,42,42), new cjs.Rectangle(-21,-15.8,42,42), new cjs.Rectangle(-21,-15.7,42,42), new cjs.Rectangle(-21,-15.6,42,42), new cjs.Rectangle(-21,-15.4,42,42), new cjs.Rectangle(-21,-15.3,42,42), new cjs.Rectangle(-21,-15.2,42,42), new cjs.Rectangle(-21,-15,42,42), new cjs.Rectangle(-21,-14.9,42,42), new cjs.Rectangle(-21,-14.8,42,42), new cjs.Rectangle(-21,-14.6,42,42), new cjs.Rectangle(-21,-14.5,42,42), new cjs.Rectangle(-21,-14.4,42,42), new cjs.Rectangle(-21,-14.2,42,42), new cjs.Rectangle(-21,-14.1,42,42), new cjs.Rectangle(-21,-13.9,42,42), new cjs.Rectangle(-21,-13.8,42,42), new cjs.Rectangle(-21,-13.7,42,42), new cjs.Rectangle(-21,-13.5,42,42), new cjs.Rectangle(-21,-13.4,42,42), new cjs.Rectangle(-21,-13.3,42,42), new cjs.Rectangle(-21,-13.1,42,42), new cjs.Rectangle(-21,-13,42,42), new cjs.Rectangle(-21,-12.9,42,42), new cjs.Rectangle(-21,-12.7,42,42), new cjs.Rectangle(-21,-12.6,42,42), new cjs.Rectangle(-21,-12.5,42,42), new cjs.Rectangle(-21,-12.3,42,42), new cjs.Rectangle(-21,-12.2,42,42), new cjs.Rectangle(-21,-12.1,42,42), new cjs.Rectangle(-21,-11.9,42,42), new cjs.Rectangle(-21,-11.8,42,42), new cjs.Rectangle(-21,-11.7,42,42), new cjs.Rectangle(-21,-11.5,42,42), new cjs.Rectangle(-21,-11.4,42,42), new cjs.Rectangle(-21,-11.2,42,42), new cjs.Rectangle(-21,-11.1,42,42), new cjs.Rectangle(-21,-11,42,42), new cjs.Rectangle(-21,-11.1,42,42), new cjs.Rectangle(-21,-11.2,42,42), new cjs.Rectangle(-21,-11.4,42,42), new cjs.Rectangle(-21,-11.5,42,42), new cjs.Rectangle(-21,-11.6,42,42), new cjs.Rectangle(-21,-11.8,42,42), new cjs.Rectangle(-21,-11.9,42,42), new cjs.Rectangle(-21,-12,42,42), new cjs.Rectangle(-21,-12.2,42,42), new cjs.Rectangle(-21,-12.3,42,42), new cjs.Rectangle(-21,-12.4,42,42), new cjs.Rectangle(-21,-12.6,42,42), new cjs.Rectangle(-21,-12.7,42,42), new cjs.Rectangle(-21,-12.8,42,42), new cjs.Rectangle(-21,-13,42,42), new cjs.Rectangle(-21,-13.1,42,42), new cjs.Rectangle(-21,-13.2,42,42), new cjs.Rectangle(-21,-13.4,42,42), new cjs.Rectangle(-21,-13.5,42,42), new cjs.Rectangle(-21,-13.6,42,42), new cjs.Rectangle(-21,-13.8,42,42), new cjs.Rectangle(-21,-13.9,42,42), new cjs.Rectangle(-21,-14,42,42), new cjs.Rectangle(-21,-14.2,42,42), new cjs.Rectangle(-21,-14.3,42,42), new cjs.Rectangle(-21,-14.4,42,42), new cjs.Rectangle(-21,-14.6,42,42), new cjs.Rectangle(-21,-14.7,42,42), new cjs.Rectangle(-21,-14.8,42,42), new cjs.Rectangle(-21,-15,42,42), new cjs.Rectangle(-21,-15.1,42,42), new cjs.Rectangle(-21,-15.2,42,42), new cjs.Rectangle(-21,-15.4,42,42), new cjs.Rectangle(-21,-15.5,42,42), new cjs.Rectangle(-21,-15.6,42,42), new cjs.Rectangle(-21,-15.8,42,42), new cjs.Rectangle(-21,-15.9,42,42), new cjs.Rectangle(-21,-16,42,42), new cjs.Rectangle(-21,-16.2,42,42), new cjs.Rectangle(-21,-16.3,42,42), new cjs.Rectangle(-21,-16.4,42,42), new cjs.Rectangle(-21,-16.6,42,42), new cjs.Rectangle(-21,-16.7,42,42), new cjs.Rectangle(-21,-16.8,42,42), new cjs.Rectangle(-21,-17,42,42), new cjs.Rectangle(-21,-17.1,42,42), new cjs.Rectangle(-21,-17.2,42,42), new cjs.Rectangle(-21,-17.4,42,42), new cjs.Rectangle(-21,-17.5,42,42), new cjs.Rectangle(-21,-17.6,42,42), new cjs.Rectangle(-21,-17.8,42,42), new cjs.Rectangle(-21,-17.9,42,42), new cjs.Rectangle(-21,-18,42,42), new cjs.Rectangle(-21,-18.2,42,42), new cjs.Rectangle(-21,-18.3,42,42), new cjs.Rectangle(-21,-18.4,42,42), new cjs.Rectangle(-21,-18.6,42,42), new cjs.Rectangle(-21,-18.7,42,42), new cjs.Rectangle(-21,-18.8,42,42), new cjs.Rectangle(-21,-19,42,42), new cjs.Rectangle(-21,-19.1,42,42), new cjs.Rectangle(-21,-19.2,42,42), new cjs.Rectangle(-21,-19.4,42,42), new cjs.Rectangle(-21,-19.5,42,42), new cjs.Rectangle(-21,-19.6,42,42), new cjs.Rectangle(-21,-19.8,42,42), new cjs.Rectangle(-21,-19.9,42,42), new cjs.Rectangle(-21,-20,42,42), new cjs.Rectangle(-21,-20.2,42,42), new cjs.Rectangle(-21,-20.3,42,42), new cjs.Rectangle(-21,-20.4,42,42), new cjs.Rectangle(-21,-20.6,42,42), new cjs.Rectangle(-21,-20.7,42,42), new cjs.Rectangle(-21,-20.8,42,42), new cjs.Rectangle(-21,-21,42,42)];


(lib.graphMc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.graph_mc_basse();
	this.instance.setTransform(177.8,155.7,1,1,0,0,0,177.8,155.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.graphMc, rect = new cjs.Rectangle(0,0,355.5,311.5), [rect]);


(lib.Path_2_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Group();
	this.instance.setTransform(10.8,0.7,1,1,0,0,0,10.8,0.7);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0_2, rect = new cjs.Rectangle(0,0,21.7,1.4), [rect]);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_40
	this.instance = new lib.Symbol40("synched",0);
	this.instance.setTransform(3.4,325,1,1,23.0393,0,0,0.9,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({regY:14.7,rotation:2.9695,x:13.65,y:323.15},8).wait(1));

	// Symbol_39
	this.instance_1 = new lib.Symbol39("synched",0);
	this.instance_1.setTransform(298.75,328.25,1,1,-29.9992,0,0,135.6,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},1).to({regX:135.7,rotation:2.9695,x:312.35,y:344.7},8).wait(1));

	// Symbol_42
	this.instance_2 = new lib.Symbol42("synched",0);
	this.instance_2.setTransform(163.2,298.95,1,1,0,0,0,96.7,181.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},1).to({regX:96.8,regY:181.5,scaleY:1.0006,skewX:4.9114,skewY:2.9695,x:172.7,y:305.35},8).wait(1));

	// Symbol_41
	this.instance_3 = new lib.Symbol41("synched",0);
	this.instance_3.setTransform(154,109.2,1,1,0,0,0,66,109.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},1).to({rotation:2.9695,x:177.25,y:121.2},8).wait(1));

	// Symbol_37
	this.instance_4 = new lib.Symbol37("synched",0);
	this.instance_4.setTransform(55.75,252.95,1,1,0,0,0,54.9,72.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},1).to({regX:55,regY:72.5,scaleY:0.97,skewX:2.2521,skewY:2.9695,x:72.85,y:253.25},8).wait(1));

	// Symbol_38
	this.instance_5 = new lib.Symbol38("synched",0);
	this.instance_5.setTransform(247.3,257.9,1,1,0,0,0,55.4,73.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},1).to({regY:73.3,rotation:2.9695,x:260.75,y:268.6},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.6,0,312.5,493.5);
p.frameBounds = [rect, rect, new cjs.Rectangle(0.1,1.5,310.7,492.8), new cjs.Rectangle(1.8,3,309,492.1), new cjs.Rectangle(3.6,4.4,307.3,491.4), new cjs.Rectangle(5.4,6,305.7,490.5), new cjs.Rectangle(7.1,7.5,304.3,489.7), new cjs.Rectangle(8.9,9,303,488.9), new cjs.Rectangle(10.7,10.5,301.9,488.1), new cjs.Rectangle(12.3,11.9,301.2,487.2)];


(lib.Symbol5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol6_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10},74).to({y:0},75).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.4,-14.4,28.9,28.9);
p.frameBounds = [rect, new cjs.Rectangle(-14.4,-14.5,28.9,28.9), new cjs.Rectangle(-14.4,-14.6,28.9,28.9), new cjs.Rectangle(-14.4,-14.8,28.9,28.9), new cjs.Rectangle(-14.4,-14.9,28.9,28.9), new cjs.Rectangle(-14.4,-15.1,28.9,28.9), new cjs.Rectangle(-14.4,-15.2,28.9,28.9), new cjs.Rectangle(-14.4,-15.3,28.9,28.9), new cjs.Rectangle(-14.4,-15.5,28.9,28.9), new cjs.Rectangle(-14.4,-15.6,28.9,28.9), new cjs.Rectangle(-14.4,-15.7,28.9,28.9), new cjs.Rectangle(-14.4,-15.9,28.9,28.9), new cjs.Rectangle(-14.4,-16,28.9,28.9), new cjs.Rectangle(-14.4,-16.1,28.9,28.9), new cjs.Rectangle(-14.4,-16.3,28.9,28.9), new cjs.Rectangle(-14.4,-16.4,28.9,28.9), new cjs.Rectangle(-14.4,-16.5,28.9,28.9), new cjs.Rectangle(-14.4,-16.7,28.9,28.9), new cjs.Rectangle(-14.4,-16.8,28.9,28.9), new cjs.Rectangle(-14.4,-16.9,28.9,28.9), new cjs.Rectangle(-14.4,-17.1,28.9,28.9), new cjs.Rectangle(-14.4,-17.2,28.9,28.9), new cjs.Rectangle(-14.4,-17.3,28.9,28.9), new cjs.Rectangle(-14.4,-17.5,28.9,28.9), new cjs.Rectangle(-14.4,-17.6,28.9,28.9), new cjs.Rectangle(-14.4,-17.8,28.9,28.9), new cjs.Rectangle(-14.4,-17.9,28.9,28.9), new cjs.Rectangle(-14.4,-18,28.9,28.9), new cjs.Rectangle(-14.4,-18.2,28.9,28.9), new cjs.Rectangle(-14.4,-18.3,28.9,28.9), new cjs.Rectangle(-14.4,-18.4,28.9,28.9), new cjs.Rectangle(-14.4,-18.6,28.9,28.9), new cjs.Rectangle(-14.4,-18.7,28.9,28.9), new cjs.Rectangle(-14.4,-18.8,28.9,28.9), new cjs.Rectangle(-14.4,-19,28.9,28.9), new cjs.Rectangle(-14.4,-19.1,28.9,28.9), new cjs.Rectangle(-14.4,-19.2,28.9,28.9), new cjs.Rectangle(-14.4,-19.4,28.9,28.9), new cjs.Rectangle(-14.4,-19.5,28.9,28.9), new cjs.Rectangle(-14.4,-19.6,28.9,28.9), new cjs.Rectangle(-14.4,-19.8,28.9,28.9), new cjs.Rectangle(-14.4,-19.9,28.9,28.9), new cjs.Rectangle(-14.4,-20.1,28.9,28.9), new cjs.Rectangle(-14.4,-20.2,28.9,28.9), new cjs.Rectangle(-14.4,-20.3,28.9,28.9), new cjs.Rectangle(-14.4,-20.5,28.9,28.9), new cjs.Rectangle(-14.4,-20.6,28.9,28.9), new cjs.Rectangle(-14.4,-20.7,28.9,28.9), new cjs.Rectangle(-14.4,-20.9,28.9,28.9), new cjs.Rectangle(-14.4,-21,28.9,28.9), new cjs.Rectangle(-14.4,-21.1,28.9,28.9), new cjs.Rectangle(-14.4,-21.3,28.9,28.9), new cjs.Rectangle(-14.4,-21.4,28.9,28.9), new cjs.Rectangle(-14.4,-21.5,28.9,28.9), new cjs.Rectangle(-14.4,-21.7,28.9,28.9), new cjs.Rectangle(-14.4,-21.8,28.9,28.9), new cjs.Rectangle(-14.4,-21.9,28.9,28.9), new cjs.Rectangle(-14.4,-22.1,28.9,28.9), new cjs.Rectangle(-14.4,-22.2,28.9,28.9), new cjs.Rectangle(-14.4,-22.3,28.9,28.9), new cjs.Rectangle(-14.4,-22.5,28.9,28.9), new cjs.Rectangle(-14.4,-22.6,28.9,28.9), new cjs.Rectangle(-14.4,-22.8,28.9,28.9), new cjs.Rectangle(-14.4,-22.9,28.9,28.9), new cjs.Rectangle(-14.4,-23,28.9,28.9), new cjs.Rectangle(-14.4,-23.2,28.9,28.9), new cjs.Rectangle(-14.4,-23.3,28.9,28.9), new cjs.Rectangle(-14.4,-23.4,28.9,28.9), new cjs.Rectangle(-14.4,-23.6,28.9,28.9), new cjs.Rectangle(-14.4,-23.7,28.9,28.9), new cjs.Rectangle(-14.4,-23.8,28.9,28.9), new cjs.Rectangle(-14.4,-24,28.9,28.9), new cjs.Rectangle(-14.4,-24.1,28.9,28.9), new cjs.Rectangle(-14.4,-24.2,28.9,28.9), new cjs.Rectangle(-14.4,-24.4,28.9,28.9), new cjs.Rectangle(-14.4,-24.2,28.9,28.9), new cjs.Rectangle(-14.4,-24.1,28.9,28.9), new cjs.Rectangle(-14.4,-24,28.9,28.9), new cjs.Rectangle(-14.4,-23.8,28.9,28.9), new cjs.Rectangle(-14.4,-23.7,28.9,28.9), new cjs.Rectangle(-14.4,-23.6,28.9,28.9), new cjs.Rectangle(-14.4,-23.4,28.9,28.9), new cjs.Rectangle(-14.4,-23.3,28.9,28.9), new cjs.Rectangle(-14.4,-23.2,28.9,28.9), new cjs.Rectangle(-14.4,-23,28.9,28.9), new cjs.Rectangle(-14.4,-22.9,28.9,28.9), new cjs.Rectangle(-14.4,-22.8,28.9,28.9), new cjs.Rectangle(-14.4,-22.6,28.9,28.9), new cjs.Rectangle(-14.4,-22.5,28.9,28.9), new cjs.Rectangle(-14.4,-22.4,28.9,28.9), new cjs.Rectangle(-14.4,-22.2,28.9,28.9), new cjs.Rectangle(-14.4,-22.1,28.9,28.9), new cjs.Rectangle(-14.4,-22,28.9,28.9), new cjs.Rectangle(-14.4,-21.8,28.9,28.9), new cjs.Rectangle(-14.4,-21.7,28.9,28.9), new cjs.Rectangle(-14.4,-21.6,28.9,28.9), new cjs.Rectangle(-14.4,-21.4,28.9,28.9), new cjs.Rectangle(-14.4,-21.3,28.9,28.9), new cjs.Rectangle(-14.4,-21.2,28.9,28.9), new cjs.Rectangle(-14.4,-21,28.9,28.9), new cjs.Rectangle(-14.4,-20.9,28.9,28.9), new cjs.Rectangle(-14.4,-20.8,28.9,28.9), new cjs.Rectangle(-14.4,-20.6,28.9,28.9), new cjs.Rectangle(-14.4,-20.5,28.9,28.9), new cjs.Rectangle(-14.4,-20.4,28.9,28.9), new cjs.Rectangle(-14.4,-20.2,28.9,28.9), new cjs.Rectangle(-14.4,-20.1,28.9,28.9), new cjs.Rectangle(-14.4,-20,28.9,28.9), new cjs.Rectangle(-14.4,-19.8,28.9,28.9), new cjs.Rectangle(-14.4,-19.7,28.9,28.9), new cjs.Rectangle(-14.4,-19.6,28.9,28.9), new cjs.Rectangle(-14.4,-19.4,28.9,28.9), new cjs.Rectangle(-14.4,-19.3,28.9,28.9), new cjs.Rectangle(-14.4,-19.2,28.9,28.9), new cjs.Rectangle(-14.4,-19,28.9,28.9), new cjs.Rectangle(-14.4,-18.9,28.9,28.9), new cjs.Rectangle(-14.4,-18.8,28.9,28.9), new cjs.Rectangle(-14.4,-18.6,28.9,28.9), new cjs.Rectangle(-14.4,-18.5,28.9,28.9), new cjs.Rectangle(-14.4,-18.4,28.9,28.9), new cjs.Rectangle(-14.4,-18.2,28.9,28.9), new cjs.Rectangle(-14.4,-18.1,28.9,28.9), new cjs.Rectangle(-14.4,-18,28.9,28.9), new cjs.Rectangle(-14.4,-17.8,28.9,28.9), new cjs.Rectangle(-14.4,-17.7,28.9,28.9), new cjs.Rectangle(-14.4,-17.6,28.9,28.9), new cjs.Rectangle(-14.4,-17.4,28.9,28.9), new cjs.Rectangle(-14.4,-17.3,28.9,28.9), new cjs.Rectangle(-14.4,-17.2,28.9,28.9), new cjs.Rectangle(-14.4,-17,28.9,28.9), new cjs.Rectangle(-14.4,-16.9,28.9,28.9), new cjs.Rectangle(-14.4,-16.8,28.9,28.9), new cjs.Rectangle(-14.4,-16.6,28.9,28.9), new cjs.Rectangle(-14.4,-16.5,28.9,28.9), new cjs.Rectangle(-14.4,-16.4,28.9,28.9), new cjs.Rectangle(-14.4,-16.2,28.9,28.9), new cjs.Rectangle(-14.4,-16.1,28.9,28.9), new cjs.Rectangle(-14.4,-16,28.9,28.9), new cjs.Rectangle(-14.4,-15.8,28.9,28.9), new cjs.Rectangle(-14.4,-15.7,28.9,28.9), new cjs.Rectangle(-14.4,-15.6,28.9,28.9), new cjs.Rectangle(-14.4,-15.4,28.9,28.9), new cjs.Rectangle(-14.4,-15.3,28.9,28.9), new cjs.Rectangle(-14.4,-15.2,28.9,28.9), new cjs.Rectangle(-14.4,-15,28.9,28.9), new cjs.Rectangle(-14.4,-14.9,28.9,28.9), new cjs.Rectangle(-14.4,-14.8,28.9,28.9), new cjs.Rectangle(-14.4,-14.6,28.9,28.9), new cjs.Rectangle(-14.4,-14.5,28.9,28.9), new cjs.Rectangle(-14.4,-14.4,28.9,28.9)];


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#BEA36F").beginStroke().moveTo(0,1.3).lineTo(-0.8,1.4).lineTo(-0.8,1.2).lineTo(-2.7,0.9).curveTo(-4.1,0.6,-6.2,0.6).lineTo(-9.8,0.5).lineTo(-18.4,0.4).curveTo(-30.2,0.2,-46.3,-1.4).lineTo(-24.4,-1.4).lineTo(-11.3,-1).curveTo(-4.4,-0.6,-2,-0.2).lineTo(0,0.1).lineTo(2,-0.2).curveTo(4.3,-0.6,11.3,-1).curveTo(17.9,-1.1,24.4,-1.4).lineTo(46.3,-1.4).curveTo(30.2,0.2,18.4,0.4).lineTo(9.8,0.5).lineTo(6.2,0.6).curveTo(4.1,0.6,2.7,0.9).lineTo(0.8,1.2).lineTo(0.8,1.4).lineTo(0,1.3).closePath().moveTo(-2,0.4).lineTo(-0.8,0.6).lineTo(-0.8,0.5).lineTo(-2.7,0.2).curveTo(-4.7,-0.1,-6.5,-0.1).curveTo(-4,0.1,-2,0.4).closePath();
	this.shape.setTransform(573.875,1.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#BEA36F").beginStroke().moveTo(31.3,3.5).curveTo(20.9,2.5,15.5,2.3).curveTo(6.3,2,-7.9,0.9).curveTo(-12,0.6,-19.9,0.3).curveTo(-28.3,0,-32,-0.2).curveTo(-39.4,-0.9,-43.2,-1).lineTo(-54.7,-1.5).curveTo(-66,-2,-73.5,-3.2).lineTo(-73.2,-3.5).curveTo(-69.3,-3,-63.2,-2.7).curveTo(-68.7,-3.1,-73,-3.8).lineTo(-72.8,-4.2).curveTo(-67,-3.5,-58.9,-3.3).lineTo(-44.5,-3).lineTo(-36.3,-2.7).lineTo(-28.2,-2.3).lineTo(-19.8,-2).curveTo(-14.6,-1.8,-11.5,-1.6).lineTo(5.1,-0.5).curveTo(15.4,0.1,21.6,0.7).lineTo(37.5,2).curveTo(46.6,2.7,53.9,2.7).lineTo(73.5,2.7).curveTo(64.7,3.2,56.8,3.4).lineTo(73.2,3.4).curveTo(59.3,4.2,47.3,4.2).curveTo(40.5,4.2,31.3,3.5).closePath();
	this.shape_1.setTransform(98.825,26.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#BEA36F").beginStroke().moveTo(-11.5,0.5).curveTo(-116.7,-0.9,-121.5,-1.7).lineTo(-124.1,-2.1).lineTo(-113.4,-1.9).curveTo(-119.9,-2.1,-121.2,-2.3).lineTo(-123.8,-2.7).curveTo(-105.9,-2.1,11.2,-0.6).curveTo(116.2,0.8,121.4,1.6).lineTo(124.1,2.1).lineTo(114.3,1.8).curveTo(119.9,2.1,121.2,2.3).lineTo(124,2.7).curveTo(104.1,2,-11.5,0.5).closePath();
	this.shape_2.setTransform(310.075,2.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#BEA36F").beginStroke().moveTo(-112.7,10).curveTo(-131,9.7,-145.8,8.7).curveTo(-161.1,7.6,-174.2,4.3).curveTo(-179.6,2.9,-186.4,0.6).lineTo(-198.3,-3.3).curveTo(-205.8,-6.3,-209.8,-7.5).lineTo(-212.9,-8.5).lineTo(-211.7,-10.2).curveTo(-204.2,-7.8,-201.1,-6.5).curveTo(-197.4,-5,-189.4,-2.4).curveTo(-183.4,-0.3,-176.9,1.5).curveTo(-163,5.4,-148.6,6.5).curveTo(-133.9,7.6,-115.7,8).curveTo(-96.5,8.4,-82,8).lineTo(48.8,6.9).curveTo(172.6,5.7,179.6,4.8).lineTo(195.9,2.5).curveTo(200.9,1.9,208.2,1.4).curveTo(210.4,1.4,211.3,0.8).curveTo(210.9,0.5,209.3,0.1).curveTo(206.9,-0.7,201.7,-1.8).curveTo(195.9,-3.1,180.6,-5.4).lineTo(186.8,-5.1).lineTo(180.7,-6.1).curveTo(187.4,-5.8,188.8,-5.6).curveTo(201.3,-3.5,206.7,-2.1).curveTo(210.7,-1,212.3,0.1).curveTo(213.2,0.7,212.6,1.2).curveTo(213,1.8,212,2.2).curveTo(211.3,2.6,210,2.7).curveTo(208.4,2.9,206.3,2.9).curveTo(204.6,2.9,202.2,3.2).lineTo(198.1,3.8).lineTo(182,6.3).curveTo(175.4,7.3,51.6,8.5).lineTo(-78.9,9.9).curveTo(-86,10.2,-96.2,10.2).curveTo(-103.6,10.2,-112.7,10).closePath();
	this.shape_3.setTransform(253.4543,10.8842);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#BEA36F").beginStroke().moveTo(-132.2,7.8).curveTo(-145.2,6.4,-160.8,3.3).curveTo(-167.7,2,-172.9,-0).curveTo(-174.7,-0.7,-177.9,-2.3).curveTo(-181.2,-3.9,-182.9,-4.6).curveTo(-185.9,-5.4,-187.2,-6).curveTo(-189.2,-7,-188.6,-8).lineTo(-188.3,-8.2).lineTo(-188.1,-8.6).curveTo(-187.8,-9,-187.3,-9.2).lineTo(-170.6,-9.2).curveTo(-179,-8.1,-183,-7.9).curveTo(-185.6,-7.7,-186.1,-7.6).curveTo(-185,-7.1,-182.1,-6.3).curveTo(-180.2,-5.6,-177.1,-4.1).curveTo(-173.7,-2.4,-172.1,-1.8).curveTo(-167.3,0.1,-159.5,1.6).curveTo(-143.8,4.7,-130.4,6).curveTo(-114.1,7.7,-98.7,7.1).curveTo(-84.7,6.6,-64.4,4.5).curveTo(-61.4,4.2,56.9,3.7).curveTo(175.5,3.3,178.1,3).curveTo(183.1,2.6,185.4,2.2).curveTo(186.3,2.1,187,1.7).lineTo(186.6,1.6).lineTo(182.6,0.6).curveTo(180.5,0.2,160.7,-0.5).curveTo(176.7,-0.4,180.8,-0.2).curveTo(174.9,-0.7,155.7,-1.3).curveTo(180.8,-1.1,182.3,-0.8).lineTo(186.4,0.1).curveTo(189.4,1,188.6,2.1).curveTo(188.8,2.5,188.3,2.9).curveTo(187.8,3.4,186.2,3.8).lineTo(183.7,4.1).lineTo(175.3,5.1).curveTo(172.6,5.4,53.9,6).curveTo(-64.9,6.5,-67.7,6.8).curveTo(-87.1,8.7,-101,9.1).lineTo(-107.2,9.2).curveTo(-119.4,9.2,-132.2,7.8).closePath().moveTo(-65.9,-4.6).curveTo(-70.9,-5.5,-78.6,-6.2).lineTo(-91.6,-7.4).curveTo(-95.6,-7.9,-103.3,-9).lineTo(-104.8,-9.2).lineTo(-91.3,-9.2).lineTo(-84.2,-8.5).curveTo(-76.1,-7.8,-69.8,-6.8).curveTo(-65.9,-6.2,-60.1,-4.9).lineTo(-64.7,-5.2).lineTo(-60.4,-4.3).curveTo(-64.6,-4.4,-65.9,-4.6).closePath();
	this.shape_4.setTransform(247.2821,9.221);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#BEA36F").beginStroke().moveTo(7.2,1.2).curveTo(-52.4,0.6,-54.3,0.2).lineTo(-58.6,-0.8).lineTo(-54.7,-0.6).lineTo(-58.3,-1.4).curveTo(-44.4,-0.9,15.2,0).curveTo(39.8,0.4,58.6,0.8).lineTo(26.2,0.7).lineTo(52.1,1.4).curveTo(24.3,1.4,7.2,1.2).closePath();
	this.shape_5.setTransform(245.5375,5.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#BEA36F").beginStroke().moveTo(10.6,2.7).lineTo(-3.2,2.3).curveTo(-10.6,2.3,-14.9,1.9).curveTo(-21.1,1.3,-25.1,-0.3).curveTo(-25.1,-0.3,-25.2,-0.4).curveTo(-25.2,-0.4,-25.3,-0.4).curveTo(-25.3,-0.5,-25.4,-0.5).curveTo(-25.4,-0.5,-25.4,-0.6).curveTo(-25.5,-0.7,-25.5,-0.7).curveTo(-25.5,-0.8,-25.5,-0.8).curveTo(-25.4,-0.9,-25.4,-0.9).curveTo(-25.3,-0.9,-25.3,-0.9).lineTo(-24.8,-1.1).curveTo(-25.4,-1.4,-24.9,-1.6).curveTo(-23.2,-2.3,-20.7,-2.4).lineTo(-16.7,-2.5).lineTo(-11.5,-2.7).lineTo(-5.4,-2.6).lineTo(-5.3,-2.5).lineTo(-2.1,-2.5).curveTo(-0.4,-2.4,8.1,-1.6).curveTo(13.5,-1.2,17,-0.7).lineTo(21,-0).curveTo(23.3,0.4,24.7,0.9).curveTo(25.1,1,25.4,1.4).curveTo(25.7,2,25,2).lineTo(24.9,2).curveTo(25.5,2.6,24.6,2.7).lineTo(18.2,2.8).lineTo(10.6,2.7).closePath().moveTo(15.6,0.9).curveTo(12.9,0.4,7.7,-0.2).lineTo(-2.1,-1.2).lineTo(-11.2,-1.4).curveTo(-14,-1.4,-15.9,-1.2).lineTo(-19,-1.1).curveTo(-20.9,-1,-22.2,-0.8).curveTo(-18.6,0.1,-12.9,0.3).lineTo(-2.8,0.5).curveTo(3.4,0.5,15.6,0.9).lineTo(15.6,0.9).closePath();
	this.shape_6.setTransform(138.12,7.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#BEA36F").beginStroke().moveTo(-119.6,1).lineTo(-114.9,0.9).lineTo(-127.5,0.9).lineTo(-119.2,0.3).curveTo(-113.4,-0,-13.5,-0.7).lineTo(127.9,-1.6).lineTo(119,-0.8).lineTo(127.8,-0.9).lineTo(117.9,-0).curveTo(106.8,1,-127.9,1.6).closePath();
	this.shape_7.setTransform(299.925,28.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#BEA36F").beginStroke().moveTo(-3,-0.1).lineTo(-4.9,-0.3).lineTo(0.5,-0.3).lineTo(4.9,0.4).curveTo(-1.7,0.1,-3,-0.1).closePath();
	this.shape_8.setTransform(181.075,0.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#BEA36F").beginStroke().moveTo(6.3,6.5).curveTo(-13.5,6.4,-27.9,3.4).lineTo(-48.9,-1.1).curveTo(-51.8,-1.8,-52.7,-2.9).curveTo(-53,-3.4,-52.5,-3.6).lineTo(-52.3,-3.6).curveTo(-52.6,-4.1,-52,-4.3).curveTo(-51.4,-4.5,-48.6,-4.7).curveTo(-45.6,-4.8,-43,-5.1).curveTo(-40.1,-5.3,-31.8,-5.7).curveTo(-28.1,-5.8,-20.4,-6.5).curveTo(-18,-6.7,-14.7,-6.5).lineTo(-9.2,-6.2).curveTo(-5,-6.1,12.4,-4.7).curveTo(18.1,-4.3,22.9,-3.6).curveTo(27.1,-3.1,29,-2.6).lineTo(39.7,-1).curveTo(43.6,-0.4,46.1,0.1).curveTo(48.6,0.6,50.5,1.3).curveTo(53.7,2.5,52.4,3.6).curveTo(52.4,4,52,4.3).curveTo(50.9,5.2,47.8,5.4).lineTo(39.5,6).curveTo(30.2,6.6,15.3,6.6).lineTo(6.3,6.5).closePath().moveTo(-19.5,-4.5).lineTo(-25,-4.2).lineTo(-30.4,-3.9).lineTo(-36.1,-3.7).curveTo(-39.4,-3.6,-41.8,-3.4).lineTo(-47.2,-2.9).lineTo(-49,-2.9).lineTo(-40.5,-1).lineTo(-27.1,2).curveTo(-14.1,4.8,3.7,5.1).curveTo(21.9,5.3,36.6,4.5).lineTo(48.3,3.5).lineTo(50,3.1).curveTo(45.9,1.6,37.7,0.4).lineTo(25.9,-1.4).curveTo(18.9,-2.4,13.9,-2.9).lineTo(8.6,-3.4).lineTo(0.9,-3.8).curveTo(-2.2,-4.1,-8.9,-4.1).lineTo(-14.2,-4.4).curveTo(-16.5,-4.6,-18.2,-4.6).lineTo(-19.5,-4.5).closePath();
	this.shape_9.setTransform(132.5693,6.5722);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#BEA36F").beginStroke().moveTo(54.2,6.6).lineTo(46,6.3).lineTo(37.8,5.9).curveTo(32.2,5.7,21,5.6).lineTo(12.6,5.8).curveTo(7,5.9,4.2,5.9).lineTo(-4.3,5.9).curveTo(-7.1,5.9,-12.7,5.8).lineTo(-21.1,5.6).curveTo(-32.3,5.7,-37.9,5.9).lineTo(-46.1,6.3).lineTo(-54.3,6.6).curveTo(-61.7,6.6,-70.7,5.9).curveTo(-75.9,5.5,-86.9,4.3).curveTo(-94.2,3.6,-102.5,2).curveTo(-105.5,1.5,-110.5,0.4).lineTo(-118.3,-1.3).curveTo(-130.2,-3.8,-145.7,-6.5).lineTo(-139.9,-6.2).lineTo(-142.4,-6.6).lineTo(-138.7,-6.6).lineTo(-123.8,-4).curveTo(-113.6,-2,-108.3,-1.2).lineTo(-100.6,0.1).lineTo(-92.8,1.3).curveTo(-86.5,2.2,-76.5,3.1).curveTo(-65.3,4.1,-55.2,4.3).curveTo(-51.3,4.4,-44.4,4.2).lineTo(-33.6,4.1).lineTo(-11.8,4.3).curveTo(-6.2,4.6,-1.6,4.6).lineTo(1.5,4.6).curveTo(6,4.6,11.7,4.3).lineTo(33.5,4.1).lineTo(44.3,4.2).curveTo(51.1,4.4,55.1,4.3).curveTo(65.1,4.1,76.4,3.1).curveTo(86.3,2.2,92.7,1.3).curveTo(97.9,0.6,108.3,-1.2).curveTo(113.3,-2,123.8,-4).lineTo(138.6,-6.6).lineTo(142.4,-6.6).lineTo(139.9,-6.2).lineTo(145.6,-6.5).curveTo(130.3,-3.8,118.3,-1.3).curveTo(107.8,1.1,102.4,2).curveTo(94.2,3.6,86.9,4.3).curveTo(75.8,5.5,70.7,5.9).curveTo(62.2,6.6,55.2,6.6).lineTo(54.2,6.6).closePath();
	this.shape_10.setTransform(573.9,6.6017);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#BEA36F").beginStroke().moveTo(-118,-0).lineTo(-127.8,-0.9).lineTo(-119,-0.8).lineTo(-127.9,-1.6).lineTo(13.5,-0.7).curveTo(113.4,-0,119.2,0.3).lineTo(127.5,0.9).lineTo(114.9,0.9).lineTo(119.5,1).lineTo(127.9,1.6).curveTo(-106.8,1,-118,-0).closePath();
	this.shape_11.setTransform(847.7,28.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#BEA36F").beginStroke().moveTo(-55.8,1.1).lineTo(-77,1.1).curveTo(-51.3,0.6,5.5,-0.3).curveTo(65,-1.2,79,-1.7).lineTo(75.4,-0.9).lineTo(79.3,-1.1).lineTo(74.9,-0.1).curveTo(73,0.3,13.4,0.9).lineTo(-79.3,1.7).lineTo(-55.8,1.1).closePath();
	this.shape_12.setTransform(881.575,6.0125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#BEA36F").beginStroke().moveTo(-39.6,6).lineTo(-47.9,5.4).curveTo(-51,5.2,-52.1,4.3).curveTo(-52.6,4,-52.5,3.6).curveTo(-53.7,2.5,-50.5,1.3).curveTo(-48.6,0.6,-46.1,0.1).curveTo(-43.7,-0.4,-39.7,-1).lineTo(-29.1,-2.6).curveTo(-27.3,-3.1,-23,-3.6).curveTo(-18,-4.3,-12.4,-4.7).curveTo(5.1,-6.1,9.1,-6.2).lineTo(14.7,-6.5).curveTo(18,-6.7,20.4,-6.5).lineTo(31.8,-5.7).curveTo(40,-5.3,43,-5.1).curveTo(45.5,-4.8,48.6,-4.7).curveTo(51.3,-4.5,52,-4.3).curveTo(52.5,-4.1,52.3,-3.6).lineTo(52.4,-3.6).curveTo(53.1,-3.4,52.6,-2.9).curveTo(51.8,-1.8,48.9,-1.1).lineTo(27.8,3.4).curveTo(13.4,6.4,-6.4,6.5).lineTo(-15.4,6.6).curveTo(-30.3,6.6,-39.6,6).closePath().moveTo(14.1,-4.4).lineTo(8.8,-4.1).curveTo(2.1,-4.1,-1,-3.8).lineTo(-8.7,-3.4).lineTo(-13.9,-2.9).curveTo(-18.9,-2.4,-25.9,-1.4).lineTo(-37.8,0.4).curveTo(-46,1.6,-50.1,3.1).lineTo(-48.4,3.5).lineTo(-36.7,4.5).curveTo(-22,5.3,-3.8,5.1).curveTo(14,4.8,27,2).lineTo(40.5,-1).lineTo(48.9,-2.9).lineTo(47.1,-2.9).lineTo(41.8,-3.4).curveTo(39.4,-3.6,36,-3.7).lineTo(30.4,-3.9).lineTo(25,-4.2).lineTo(19.5,-4.5).lineTo(18.2,-4.6).curveTo(16.5,-4.6,14.1,-4.4).closePath();
	this.shape_13.setTransform(1015.2165,6.5722);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#BEA36F").beginStroke().moveTo(12.1,3.7).lineTo(4.2,3.1).lineTo(-4.3,3.1).lineTo(-12.1,3.7).curveTo(-14.4,3.8,-20,3.5).lineTo(-28.4,3.3).lineTo(-36.4,2.9).lineTo(-44.5,2.5).curveTo(-47.7,2.3,-60.7,2.2).curveTo(-72.5,2.1,-77,1.7).curveTo(-83.6,1.2,-91.7,0).curveTo(-101.6,-1.8,-106.6,-2.4).lineTo(-117.9,-3.7).lineTo(-104.6,-3.7).curveTo(-100.3,-3.1,-91.6,-1.5).curveTo(-83.6,-0.4,-76,0.2).curveTo(-71.9,0.5,-66.3,0.5).lineTo(-56.5,0.5).curveTo(-47.4,0.5,-36.7,1.1).curveTo(-32,1.4,-27.2,1.4).lineTo(-22.3,1.6).lineTo(-17.3,1.8).curveTo(-14,1.9,-9.1,1.9).lineTo(-0.9,1.7).lineTo(0.8,1.7).lineTo(9,1.9).curveTo(13.9,1.9,17.3,1.8).lineTo(22.3,1.6).lineTo(27.2,1.4).curveTo(31.9,1.4,36.7,1.1).curveTo(47.4,0.5,56.5,0.5).lineTo(66.3,0.5).curveTo(71.9,0.5,76.1,0.2).curveTo(83.4,-0.3,91.6,-1.5).lineTo(104.6,-3.7).lineTo(117.9,-3.7).lineTo(106.6,-2.4).lineTo(99.1,-1.3).lineTo(91.6,0).curveTo(83.6,1.2,77,1.7).curveTo(72.4,2.1,60.7,2.2).curveTo(47.6,2.3,44.4,2.5).curveTo(33.7,3.2,28.4,3.3).lineTo(19.9,3.5).curveTo(16.2,3.7,14,3.7).lineTo(12.1,3.7).closePath();
	this.shape_14.setTransform(573.9,3.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#BEA36F").beginStroke().moveTo(-74.7,3.7).lineTo(-56,3.7).curveTo(-64.9,3.6,-75,3).lineTo(-55.4,3).curveTo(-48.1,3,-39,2.4).lineTo(-23.1,1).curveTo(-12.2,-0,10,-1.2).curveTo(13.1,-1.5,18.3,-1.7).lineTo(26.7,-2).lineTo(34.9,-2.4).lineTo(43.1,-2.7).curveTo(50.5,-2.8,58.6,-3.3).curveTo(67.5,-3.8,74,-4.5).lineTo(74.3,-4).curveTo(65.6,-2.7,61.7,-2.4).curveTo(72.7,-2.9,74.9,-3.1).lineTo(75,-2.9).curveTo(66.4,-1.7,53.3,-1.2).lineTo(41.8,-0.7).lineTo(30.5,0.1).curveTo(26.8,0.3,18.5,0.6).curveTo(10.6,0.9,6.4,1.2).curveTo(-7.9,2.3,-16.9,2.6).curveTo(-20.1,2.7,-24.9,3.2).lineTo(-32.8,3.8).curveTo(-42,4.5,-48.8,4.5).curveTo(-60.8,4.5,-74.7,3.7).closePath();
	this.shape_15.setTransform(1050.275,26.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#BEA36F").beginStroke().moveTo(128.8,3.2).lineTo(112,2.5).curveTo(102.1,2.1,95.2,1.7).curveTo(85.9,1.2,79,1.2).curveTo(68,1.5,62.4,1.4).curveTo(41.7,1,28.8,0).lineTo(20.1,-0.6).curveTo(15.4,-1.2,12.9,-1.3).lineTo(6.8,-1.4).lineTo(0,-1.8).lineTo(-6.7,-1.4).lineTo(-12.9,-1.3).lineTo(-16.5,-1).lineTo(-20.1,-0.6).lineTo(-28.8,0).curveTo(-41.7,1,-62.4,1.4).curveTo(-65.6,1.5,-70.6,1.4).lineTo(-78.9,1.2).curveTo(-85.8,1.2,-95.2,1.7).curveTo(-102.1,2.1,-112,2.5).lineTo(-128.8,3.2).curveTo(-133,3.4,-146.1,3.4).lineTo(-135,2.6).lineTo(-145.9,2.7).curveTo(-135.7,1.9,-122.8,1.2).lineTo(-106.2,0.1).lineTo(-90.1,-0.9).curveTo(-81.4,-1.2,-74.1,-0.9).curveTo(-67.7,-0.7,-57.1,-1.1).curveTo(-39.5,-1.6,-35,-1.8).lineTo(-23.5,-2.6).curveTo(-16,-3.2,-13.9,-3.2).curveTo(-9.1,-3.1,-4.2,-3.2).lineTo(-0.9,-3.3).lineTo(-0.9,-3.4).lineTo(0,-3.4).lineTo(0.9,-3.4).lineTo(0.9,-3.3).lineTo(4.3,-3.2).curveTo(9.1,-3.1,14,-3.2).curveTo(16.1,-3.2,23.6,-2.6).lineTo(35,-1.8).curveTo(39.4,-1.6,57.2,-1.1).curveTo(67.8,-0.7,74.1,-0.9).curveTo(81.5,-1.2,90.1,-0.9).lineTo(106.2,0.1).lineTo(122.9,1.2).curveTo(135.6,1.9,146,2.7).lineTo(135,2.6).lineTo(146.1,3.4).curveTo(133,3.4,128.8,3.2).closePath();
	this.shape_16.setTransform(573.8,24.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#BEA36F").beginStroke().moveTo(286.5,6.6).curveTo(162.2,5.9,155.3,5.1).curveTo(142.5,3.6,138.1,3.3).lineTo(121.5,2.5).curveTo(115.1,2.2,104.9,1.4).lineTo(88.4,0.1).lineTo(71.8,-1).lineTo(55.3,-2.1).curveTo(37.9,-3,23,-2.5).curveTo(20.4,-2.4,15.1,-2.5).lineTo(7.1,-2.5).lineTo(-1,-2.2).lineTo(-1,-2.2).lineTo(-2.7,-2.2).lineTo(-2.7,-2.2).lineTo(-10.9,-2.5).lineTo(-18.8,-2.5).curveTo(-24.1,-2.4,-26.8,-2.5).curveTo(-41.7,-3,-59,-2.1).lineTo(-75.6,-1).lineTo(-83.9,-0.4).lineTo(-92.2,0.1).curveTo(-114.2,2,-125.3,2.5).lineTo(-141.9,3.3).curveTo(-146.6,3.7,-159.1,5.1).curveTo(-170.1,6.3,-421.4,7.2).curveTo(-452,7.2,-484.4,2.9).curveTo(-488.1,2.4,-493.5,1.4).lineTo(-502.2,-0.3).lineTo(-510.9,-2.2).curveTo(-516.2,-3.4,-519.7,-3.9).curveTo(-524.4,-4.6,-531.2,-5).lineTo(-543.1,-5.7).lineTo(-542.1,-7.1).lineTo(-528.2,-6.5).curveTo(-519.4,-5.9,-513.9,-4.8).lineTo(-500.3,-2).curveTo(-482.9,1.2,-471.1,2.6).curveTo(-455.8,4.2,-439.4,4.8).curveTo(-419.7,5.6,-406.3,4.7).curveTo(-401,4.3,-275.2,3.1).curveTo(-150.1,1.9,-144.3,1.4).lineTo(-127.6,0.5).curveTo(-117,-0,-111,-0.6).lineTo(-94.7,-1.8).curveTo(-89.1,-2.2,-78.1,-2.8).curveTo(-64.3,-3.8,-57.4,-4.1).curveTo(-48.9,-4.4,-36.8,-4.5).lineTo(-26.6,-4.2).lineTo(-16.3,-4.2).curveTo(-13.2,-4.2,-9.1,-3.9).lineTo(-1.9,-3.5).lineTo(5.3,-3.9).curveTo(9.5,-4.2,12.5,-4.2).lineTo(22.8,-4.2).lineTo(33.1,-4.5).curveTo(45.1,-4.4,53.6,-4.1).curveTo(60.7,-3.8,74.3,-2.8).lineTo(82.6,-2.3).lineTo(90.9,-1.8).curveTo(96.5,-1.5,107.2,-0.6).curveTo(113.2,-0,123.8,0.5).lineTo(140.5,1.4).curveTo(146.3,1.9,271.4,3.1).curveTo(397.2,4.3,402.5,4.7).curveTo(415.9,5.6,435.6,4.8).curveTo(452,4.2,467.3,2.6).curveTo(479,1.3,496.5,-2).curveTo(501.1,-2.8,510.1,-4.8).curveTo(515.7,-5.9,524.5,-6.5).lineTo(542.2,-7.2).lineTo(543.1,-5.8).lineTo(528.8,-5.1).curveTo(520.2,-4.5,515.9,-3.9).curveTo(512.4,-3.4,507.1,-2.2).lineTo(498.5,-0.3).curveTo(486.8,2,480.6,2.9).curveTo(448.2,7.2,417.6,7.2).curveTo(385.5,7.2,286.5,6.6).closePath().moveTo(-1,-2.9).lineTo(-1,-2.9).lineTo(0.9,-3).closePath();
	this.shape_17.setTransform(575.725,19.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#BEA36F").beginStroke().moveTo(-121.4,1.9).curveTo(-111.9,0.4,-94.9,0.3).curveTo(-75.1,0.1,-68.1,-0.5).lineTo(-60.8,-1.1).curveTo(-53,-1.5,-39.2,-0.9).curveTo(-23.4,-0.2,-17.4,-0.3).lineTo(24.4,-0.8).curveTo(73.5,-1.4,98.2,-1.9).curveTo(102.3,-1.9,111.2,-1.8).curveTo(118.4,-1.7,122.9,-2.3).lineTo(121.2,-2.1).curveTo(119.9,-1.8,112.9,-1.6).lineTo(124.1,-1.8).lineTo(121.5,-1.4).curveTo(118.7,-1,114.5,-0.9).lineTo(107.2,-0.8).curveTo(90.3,-0.4,43.3,0.3).curveTo(15.8,1,2,1.3).curveTo(-22.5,1.8,-39.8,0.8).curveTo(-49.6,0.2,-64.2,1).curveTo(-84.2,2.1,-88.4,2.1).curveTo(-92.2,2.2,-99.2,2.1).lineTo(-110.3,2).lineTo(-108.5,1.9).curveTo(-118.2,2.1,-124.1,2.3).closePath();
	this.shape_18.setTransform(837.675,2.4625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#BEA36F").beginStroke().moveTo(-0.5,-0.3).lineTo(4.9,-0.3).lineTo(3,-0.1).curveTo(1.7,0.1,-4.9,0.4).closePath();
	this.shape_19.setTransform(966.7,0.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#BEA36F").beginStroke().moveTo(76.8,10.2).lineTo(-53.7,8.9).curveTo(-177.5,7.6,-184,6.7).curveTo(-194.8,4.9,-200.2,4.2).lineTo(-204.2,3.6).curveTo(-206.7,3.3,-208.3,3.3).curveTo(-210.4,3.3,-212,3.1).curveTo(-213.3,2.9,-214.1,2.6).curveTo(-215,2.2,-214.7,1.6).curveTo(-215.2,1,-214.3,0.4).curveTo(-212.7,-0.7,-208.7,-1.7).curveTo(-203.4,-3.2,-190.8,-5.3).curveTo(-189.4,-5.5,-182.7,-5.7).lineTo(-188.8,-4.8).lineTo(-182.6,-5.1).curveTo(-197.9,-2.7,-203.8,-1.5).curveTo(-209,-0.3,-211.3,0.4).curveTo(-212.9,0.8,-213.4,1.2).curveTo(-212.4,1.8,-210.2,1.8).curveTo(-202.9,2.2,-198,2.9).lineTo(-181.7,5.2).curveTo(-174.7,6.1,-50.9,7.2).lineTo(79.9,8.4).curveTo(94.4,8.8,113.6,8.3).curveTo(131.9,7.9,146.5,6.8).curveTo(160.9,5.8,174.9,1.8).curveTo(181,0.1,187.4,-2.1).lineTo(193.3,-4.1).curveTo(196.9,-5.3,199.1,-6.2).curveTo(203.9,-8.1,212.8,-10.5).lineTo(214.2,-10.5).lineTo(214.9,-9.3).curveTo(210.8,-8.2,207.8,-7.2).lineTo(196.2,-3).curveTo(193,-1.8,184.3,1).curveTo(177.6,3.2,172.1,4.6).curveTo(159.1,8,143.7,9).curveTo(128.9,10.1,110.6,10.4).curveTo(101.5,10.5,94.1,10.5).curveTo(83.9,10.5,76.8,10.2).closePath();
	this.shape_20.setTransform(896.2957,10.5342);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#BEA36F").beginStroke().moveTo(101,9.1).curveTo(87.1,8.7,67.7,6.8).curveTo(64.8,6.5,-53.9,6).curveTo(-172.6,5.4,-175.4,5.1).lineTo(-183.8,4.1).lineTo(-186.2,3.8).curveTo(-187.8,3.4,-188.4,2.9).curveTo(-188.8,2.5,-188.6,2.1).curveTo(-189.4,1,-186.4,0.1).curveTo(-184.8,-0.3,-182.3,-0.8).curveTo(-181,-1.1,-159.6,-1.2).curveTo(-175.5,-0.6,-180.8,-0.2).curveTo(-176.1,-0.5,-155.2,-0.6).curveTo(-180.3,0.1,-182.6,0.6).lineTo(-186.7,1.6).lineTo(-187,1.7).curveTo(-186.4,2.1,-185.4,2.2).curveTo(-183.2,2.6,-178.2,3).curveTo(-175.5,3.3,-57,3.7).curveTo(61.4,4.2,64.4,4.5).curveTo(84.7,6.6,98.6,7.1).curveTo(114,7.7,130.4,6).curveTo(143.7,4.7,159.5,1.6).curveTo(167.3,0.1,172.1,-1.8).curveTo(173.7,-2.4,177.1,-4.1).curveTo(180.1,-5.6,182.1,-6.3).curveTo(185.3,-7.2,186.1,-7.6).curveTo(185.6,-7.7,183,-7.9).curveTo(180.7,-8,176.9,-8.5).lineTo(170.6,-9.2).lineTo(187.3,-9.2).curveTo(187.9,-9,188.1,-8.6).lineTo(188.3,-8.2).lineTo(188.6,-8).curveTo(189.3,-6.9,187.2,-6).curveTo(186.4,-5.7,185.1,-5.3).lineTo(182.9,-4.6).curveTo(181.1,-3.9,177.9,-2.3).curveTo(174.7,-0.7,172.9,-0).curveTo(167.5,2,160.8,3.3).curveTo(145.2,6.4,132.2,7.8).curveTo(119.3,9.2,107.2,9.2).lineTo(101,9.1).closePath().moveTo(64.7,-5.2).lineTo(60.1,-4.9).curveTo(65.7,-6.2,69.8,-6.8).curveTo(76.2,-7.8,84.2,-8.5).lineTo(91.3,-9.2).lineTo(104.8,-9.2).lineTo(103.3,-9).curveTo(96,-7.9,91.6,-7.4).lineTo(78.6,-6.2).curveTo(70.9,-5.5,65.9,-4.6).curveTo(64.6,-4.4,60.4,-4.3).closePath();
	this.shape_21.setTransform(900.4615,9.221);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#BEA36F").beginStroke().moveTo(-24.6,2.6).curveTo(-25.5,2.6,-24.9,2).lineTo(-25,2).curveTo(-25.7,1.9,-25.4,1.4).curveTo(-25.1,1,-24.8,0.9).curveTo(-23.3,0.3,-21,-0.1).lineTo(-17,-0.7).curveTo(-13.4,-1.2,-8.1,-1.7).curveTo(0.4,-2.4,2.1,-2.5).lineTo(5.3,-2.5).lineTo(5.4,-2.6).lineTo(11.5,-2.8).lineTo(16.7,-2.5).lineTo(20.7,-2.4).curveTo(23.2,-2.3,24.9,-1.6).curveTo(25.4,-1.5,24.9,-1.1).lineTo(25.3,-1).curveTo(25.8,-0.8,25.1,-0.3).curveTo(21.1,1.3,14.9,1.9).curveTo(10.6,2.3,3.2,2.3).curveTo(-8.7,2.8,-16.9,2.8).lineTo(-24.6,2.6).closePath().moveTo(2.1,-1.2).lineTo(-7.7,-0.2).curveTo(-13.1,0.4,-15.6,0.8).lineTo(2.8,0.5).lineTo(12.9,0.3).curveTo(18.6,0.1,22.2,-0.9).curveTo(20.9,-1.1,19,-1.1).lineTo(15.9,-1.2).curveTo(14,-1.4,11.2,-1.4).closePath();
	this.shape_22.setTransform(1009.6213,7.0613);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#BEA36F").beginStroke().moveTo(17.6,2.8).curveTo(14.7,2.8,8.8,2.5).curveTo(3.9,2.2,0,2.1).curveTo(-3.9,2.2,-8.8,2.5).lineTo(-36.5,2.4).curveTo(-46,2.4,-55.6,2.1).curveTo(-68.4,1.8,-93.8,0.2).curveTo(-104.5,-0.5,-112.7,-0.5).lineTo(-132.1,-0.3).lineTo(-141.2,-0.1).lineTo(-145.3,0).curveTo(-147.8,0.2,-149.3,0.9).lineTo(-148.5,1.1).curveTo(-146.8,1.7,-144.4,2).lineTo(-136.1,2.5).lineTo(-150.7,2.5).curveTo(-151.8,2,-152,1.3).curveTo(-152.2,0.7,-151.9,0.2).curveTo(-152.3,-1.5,-148.3,-2.1).curveTo(-147.6,-2.2,-143,-2.5).curveTo(-139,-2.6,-133.4,-2.6).lineTo(-123.8,-2.7).curveTo(-109.3,-2.9,-104.8,-2.7).curveTo(-101,-2.6,-95.2,-2.2).lineTo(-85.7,-1.5).curveTo(-75.4,-0.9,-66.7,-0.5).curveTo(-54,0,-28.5,0.5).curveTo(-19.7,0.8,-17.1,0.8).lineTo(-6,0.4).lineTo(0,0.5).lineTo(6,0.4).lineTo(17.1,0.8).curveTo(19.6,0.8,28.5,0.5).lineTo(47.6,0.1).curveTo(59.1,-0.2,66.6,-0.5).curveTo(75.1,-0.9,85.7,-1.5).lineTo(95.2,-2.2).curveTo(100.9,-2.6,104.7,-2.7).curveTo(109.2,-2.9,123.8,-2.7).lineTo(133.3,-2.6).curveTo(139,-2.6,142.9,-2.5).curveTo(147.6,-2.2,148.3,-2.1).curveTo(152.3,-1.5,151.9,0.2).curveTo(152.2,0.7,152.1,1.3).curveTo(151.8,2,150.8,2.5).lineTo(136.1,2.5).lineTo(144.4,2).curveTo(146.8,1.7,148.5,1.1).lineTo(149.3,0.9).curveTo(147.8,0.2,145.3,0).lineTo(141.2,-0.1).curveTo(136.7,-0.3,132.1,-0.3).lineTo(112.7,-0.5).curveTo(104.5,-0.5,93.8,0.2).lineTo(74.7,1.4).curveTo(64.1,1.9,55.6,2.1).curveTo(46.1,2.4,36.5,2.4).lineTo(33.3,2.5).lineTo(25.5,2.7).lineTo(19.3,2.8).lineTo(17.6,2.8).closePath();
	this.shape_23.setTransform(578.585,132.8368);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#BEA36F").beginStroke().moveTo(50.7,4.3).lineTo(48.2,4).lineTo(39.5,2.2).curveTo(34.5,1.2,30.6,0.8).curveTo(26.8,0.4,21.4,0.1).lineTo(12,-0.3).curveTo(-8.3,-1.4,-25.6,-1.5).curveTo(-32.2,-1.6,-42.8,-1.3).lineTo(-60.1,-1).lineTo(-60.1,-3.7).curveTo(-28.9,-4.8,-5.9,-3.6).curveTo(0.6,-3.2,12.8,-2.3).lineTo(22.2,-1.7).curveTo(27.7,-1.3,31.4,-0.9).curveTo(36.9,-0.2,47.8,1.9).curveTo(53.2,3,60.1,3.8).lineTo(50.1,3.3).lineTo(56.5,4.3).closePath();
	this.shape_24.setTransform(60.125,131.0926);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#BEA36F").beginStroke().moveTo(-10.7,0.3).lineTo(10.7,-0.3).lineTo(5.8,0.3).closePath();
	this.shape_25.setTransform(1026.2,135.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#BEA36F").beginStroke().moveTo(514.8,3.6).lineTo(476.9,3.3).curveTo(467,3.2,310.2,3).curveTo(157.9,2.8,143.5,2.6).curveTo(97.6,1.9,66.4,0.2).lineTo(47.7,-0.8).curveTo(36.9,-1.3,29,-1.5).curveTo(12,-1.8,3.5,-1.2).lineTo(3.5,-1.1).lineTo(2.5,-1.2).lineTo(1.5,-1.1).lineTo(1.5,-1.2).curveTo(-6.9,-1.8,-23.9,-1.5).curveTo(-31.9,-1.3,-42.6,-0.8).lineTo(-61.3,0.2).curveTo(-92.4,1.9,-138.4,2.6).curveTo(-152.8,2.8,-305.2,3).curveTo(-461.9,3.2,-471.9,3.3).curveTo(-522.4,3.7,-547.5,3.7).curveTo(-563.5,3.7,-576,3.5).lineTo(-576,1.3).lineTo(-571,1.4).curveTo(-553.9,1.6,-534.1,1.4).curveTo(-496.3,1.2,-458.4,0.8).curveTo(-448.6,0.7,-292,0.5).curveTo(-140,0.2,-125.6,-0).curveTo(-93.1,-0.6,-49,-2.9).curveTo(-34,-3.6,-17.7,-3.7).curveTo(-5.9,-3.7,2.5,-2.8).curveTo(11,-3.7,22.8,-3.7).curveTo(38.9,-3.6,54.1,-2.9).curveTo(98.1,-0.6,130.7,-0).curveTo(145,0.2,297,0.5).curveTo(453.7,0.7,463.4,0.8).curveTo(501.3,1.2,539.1,1.4).curveTo(558.9,1.6,576,1.4).lineTo(576,3.6).curveTo(564.4,3.7,552.6,3.7).lineTo(514.8,3.6).closePath();
	this.shape_26.setTransform(576,118.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#BEA36F").beginStroke().moveTo(-2.5,0.2).lineTo(-0.7,-0.1).lineTo(-2.5,-0.4).lineTo(-2.5,-0.4).lineTo(-2.5,-2.3).curveTo(-0.1,-2,1,-1.5).curveTo(2.5,-0.8,2.5,0.3).curveTo(2.5,1.3,0.2,1.8).curveTo(-0.6,2.1,-2.5,2.3).closePath();
	this.shape_27.setTransform(2.525,76.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#BEA36F").beginStroke().moveTo(-2.1,6.5).lineTo(-10.5,6.3).lineTo(-18,6.1).lineTo(-18,4.1).lineTo(-11.7,4.1).lineTo(-4.4,4.3).curveTo(0,4.3,3.1,4.2).curveTo(9.7,4,14.4,3).lineTo(15.5,2.6).curveTo(15.3,2.4,13.4,1.9).curveTo(11.5,1.4,7.5,0.6).curveTo(-0.4,-1.3,-4.4,-2).curveTo(-14.7,-4,-18,-4.9).lineTo(-18,-5.6).lineTo(-13.2,-4.7).lineTo(-18,-5.8).lineTo(-18,-6.5).curveTo(-14.6,-5.7,-8.8,-4.7).lineTo(0.5,-3.1).lineTo(6.9,-1.7).curveTo(12.4,-0.6,13.8,-0.2).curveTo(16.5,0.5,17.2,1.2).curveTo(18,1.9,18,2.7).curveTo(17.9,3.4,17.1,3.9).curveTo(16.4,4.4,14.9,4.9).curveTo(13.4,5.4,12.5,5.5).lineTo(6.6,6.2).curveTo(3.2,6.5,-0.9,6.5).lineTo(-2.1,6.5).closePath();
	this.shape_28.setTransform(17.9765,77.0781);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#BEA36F").beginStroke().moveTo(7.4,11.9).lineTo(-6.9,11.8).curveTo(-26.2,11.5,-36,11.6).lineTo(-42.5,11.8).lineTo(-42.5,9.8).lineTo(-30.2,9.5).curveTo(-18.5,9.5,4.9,9.8).curveTo(14.8,9.8,18.3,9.7).curveTo(26.1,9.5,32.3,8.5).lineTo(36.1,7.8).curveTo(38.5,7.2,39.9,6.5).curveTo(39.3,5.7,36.2,4.8).curveTo(34,4.2,32.5,3.9).curveTo(28.5,3.1,21.8,2.5).lineTo(10.8,1.5).curveTo(1.9,0.5,-11.3,-1.7).curveTo(-19,-3,-30.9,-6.8).lineTo(-35.9,-8.4).curveTo(-39.3,-9.5,-42.5,-10.2).lineTo(-42.5,-10.9).lineTo(-39.6,-10.4).lineTo(-42.5,-11.2).lineTo(-42.5,-11.9).lineTo(-35.6,-10.2).lineTo(-29.2,-8.4).lineTo(-22.8,-6.6).curveTo(-16.8,-5,-8.3,-3.6).lineTo(7,-1.5).curveTo(11.8,-0.8,22.1,-0.1).curveTo(31.1,0.8,36.2,2.4).curveTo(38.2,3,40.8,4.3).curveTo(42.3,5.1,42.4,6.2).curveTo(42.6,6.7,41.9,7.2).curveTo(41.8,8.6,37.6,9.6).curveTo(31.4,11.2,21.9,11.7).curveTo(16.6,11.9,9.7,11.9).lineTo(7.4,11.9).closePath();
	this.shape_29.setTransform(42.4641,76.3286);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#BEA36F").beginStroke().moveTo(-71,19).lineTo(-71,16.8).lineTo(-66.7,16.8).curveTo(-43.9,16.8,-30,16.3).curveTo(-7.2,15.6,7.9,14.5).lineTo(25.4,13.2).curveTo(35.4,12.5,42.5,12.5).curveTo(52.5,12.6,59.2,12).lineTo(63.3,11.6).curveTo(65.7,11.2,67.3,10.5).curveTo(68.3,10.1,68.6,9.7).curveTo(68.4,9.3,67,8.9).curveTo(64.1,8,58.8,7.6).lineTo(50.3,6.7).lineTo(17.4,2.3).curveTo(1.9,0.3,-7.9,-1.7).curveTo(-16.8,-3.5,-30.6,-7.1).lineTo(-41.8,-10.2).curveTo(-49,-12.2,-53,-13.2).lineTo(-56.3,-14.1).lineTo(-61.7,-15.4).curveTo(-64.7,-16,-70.4,-17).lineTo(-70.1,-17.4).lineTo(-57.7,-15.4).curveTo(-59.5,-16,-69.2,-18.6).lineTo(-68.9,-19.1).lineTo(-59.3,-16.6).lineTo(-52.2,-14.9).lineTo(-45.1,-13.3).lineTo(-30.8,-9.5).curveTo(-22.4,-7.4,-16.4,-6).curveTo(-4,-3.1,15.1,-0.4).lineTo(47.9,4).curveTo(54,4.9,57.1,5.2).curveTo(62.8,5.6,65.9,6.3).curveTo(70.3,7.3,70.9,9.1).curveTo(71.2,9.8,70.6,10.6).curveTo(70.3,11.9,67.8,12.9).curveTo(65.1,13.9,59.6,14.3).curveTo(55,14.7,50,14.8).lineTo(38.9,15).curveTo(32.3,15.1,27.6,15.4).curveTo(4.9,17.1,-6.3,17.6).curveTo(-27.7,18.6,-40.6,18.9).curveTo(-53.2,19.1,-61.8,19.1).lineTo(-71,19).closePath();
	this.shape_30.setTransform(70.9868,75.4481);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#BEA36F").beginStroke().moveTo(-0.9,8).lineTo(-0.9,7.9).lineTo(-4.7,7.8).lineTo(-22.1,8).curveTo(-29.1,8.1,-40,7.8).lineTo(-57.9,7.4).curveTo(-63.5,7.3,-75,6.7).curveTo(-77.7,6.5,-83.5,6.5).curveTo(-89.1,6.4,-92,6.2).lineTo(-108.1,5.5).curveTo(-117.6,5,-123.9,4.1).lineTo(-128.3,3.5).curveTo(-130.8,3.2,-132.3,2.4).curveTo(-133.2,2,-133.6,1.5).curveTo(-134,0.9,-133.7,0.4).curveTo(-134.1,-0.7,-132.1,-1.3).curveTo(-130.4,-1.7,-127.7,-1.7).lineTo(-123.2,-1.7).lineTo(-105.6,-3).lineTo(-97.5,-3.4).curveTo(-93.8,-3.7,-88.5,-4.5).curveTo(-76.2,-6.3,-72.1,-6.7).curveTo(-65.2,-7.4,-55,-7.5).lineTo(-37.8,-7.7).curveTo(-24.6,-8,-17.9,-8).curveTo(-15.9,-8,-11.5,-7.7).curveTo(-7.3,-7.4,-5.1,-7.5).curveTo(-1.2,-7.6,2.6,-7.7).curveTo(2.6,-7.7,2.6,-7.7).curveTo(2.6,-7.7,2.7,-7.8).curveTo(2.7,-7.8,2.7,-7.8).curveTo(2.8,-7.9,2.9,-7.9).lineTo(3.2,-7.9).lineTo(3.7,-7.6).lineTo(7.7,-7.5).lineTo(9.4,-7.7).curveTo(12.1,-8,17.9,-8).curveTo(24.5,-8,37.8,-7.7).lineTo(55,-7.5).curveTo(65.1,-7.4,72.1,-6.7).curveTo(76.3,-6.2,88.5,-4.5).curveTo(93.8,-3.7,97.5,-3.4).lineTo(105.6,-3).lineTo(123.2,-1.7).lineTo(127.7,-1.7).curveTo(130.5,-1.7,132.1,-1.3).curveTo(134.1,-0.7,133.7,0.4).curveTo(134.1,0.9,133.6,1.5).curveTo(133.3,2,132.4,2.4).curveTo(130.9,3.2,128.3,3.5).lineTo(124,4.1).curveTo(117.7,5,108.1,5.5).lineTo(92.1,6.2).curveTo(89.1,6.4,83.6,6.5).curveTo(77.8,6.5,75.1,6.7).curveTo(63.7,7.3,58,7.4).lineTo(40.1,7.8).curveTo(29.2,8.1,22.2,8).lineTo(4.7,7.8).lineTo(0.9,7.9).lineTo(0.9,8).closePath().moveTo(-19.1,-6.2).lineTo(-27.3,-5.9).curveTo(-34.9,-5.5,-44.8,-5.2).curveTo(-56.5,-5.2,-62.3,-4.9).curveTo(-65.7,-4.7,-70.9,-4.2).lineTo(-79.6,-3.3).lineTo(-96.2,-2).lineTo(-104.9,-1.4).lineTo(-113.6,-0.8).curveTo(-124.2,-0.2,-127.2,-0.2).curveTo(-130.1,-0.1,-131.7,0.4).curveTo(-132.3,0.5,-132.6,0.8).curveTo(-132.2,1.3,-130,1.7).curveTo(-126.3,2.5,-119.1,3.1).curveTo(-113.7,3.6,-102.5,3.8).lineTo(-85.9,4.3).curveTo(-76.3,4.3,-69.1,4.8).curveTo(-63.3,5.1,-51.5,5.1).lineTo(-15.5,6).lineTo(-9.6,6).lineTo(-3.8,6.2).lineTo(0,6.4).lineTo(3.8,6.2).curveTo(7.7,6,15.6,6).curveTo(27.6,5.8,51.6,5.1).lineTo(60.4,5).curveTo(65.8,5,69.2,4.8).curveTo(76.4,4.3,86,4.3).curveTo(91.5,4.3,102.5,3.8).curveTo(113.7,3.6,119.2,3.1).curveTo(126.4,2.5,130,1.7).curveTo(132.2,1.4,132.6,0.8).curveTo(132.4,0.6,131.7,0.4).curveTo(130.1,-0.1,127.2,-0.2).curveTo(124.4,-0.2,120.4,-0.4).lineTo(113.6,-0.8).lineTo(104.9,-1.4).lineTo(96.2,-2).lineTo(79.6,-3.3).curveTo(68.1,-4.7,62.2,-4.9).curveTo(59,-5.1,53.5,-5.1).lineTo(44.8,-5.2).curveTo(35,-5.5,27.2,-5.9).lineTo(19.1,-6.2).curveTo(14.4,-6.5,10.9,-6.3).curveTo(7.5,-6,5.7,-5.9).curveTo(3.9,-6,3.1,-6.4).lineTo(2.7,-6.4).curveTo(-7.9,-6.2,-10.9,-6.3).lineTo(-14.1,-6.4).lineTo(-19.1,-6.2).closePath().moveTo(132.2,1.7).curveTo(130.7,2.4,128.2,2.8).lineTo(123.9,3.3).lineTo(119.4,3.9).curveTo(126.9,3.2,130.2,2.5).curveTo(132.4,2.1,132.8,1.5).lineTo(132.9,1.3).closePath().moveTo(-119.4,3.9).lineTo(-123.8,3.3).lineTo(-128.2,2.8).curveTo(-130.7,2.4,-132.2,1.7).lineTo(-132.9,1.3).lineTo(-132.8,1.5).curveTo(-132.4,2.1,-130.1,2.5).curveTo(-127,3.2,-119.4,3.9).closePath().moveTo(-6.2,-6.5).curveTo(-4.3,-6.4,-3.5,-7).curveTo(-4.2,-6.7,-5.8,-6.7).lineTo(-9.3,-6.9).lineTo(-6.2,-6.5).closePath();
	this.shape_31.setTransform(578.3875,65.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#BEA36F").beginStroke().moveTo(-4.6,0.5).curveTo(-65,-0.4,-103.9,-1.2).lineTo(-80.4,-1.2).lineTo(-102.2,-1.9).lineTo(13.7,-0.9).curveTo(91.6,-0,96.7,0.4).lineTo(103.9,1.1).lineTo(90.2,0.9).lineTo(96.6,1.2).lineTo(103.8,1.9).lineTo(-4.6,0.5).closePath();
	this.shape_32.setTransform(337.9375,71.05);

	this.instance = new lib.CompoundPath_18();
	this.instance.setTransform(71.85,48.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#BEA36F").beginStroke().moveTo(-6,0.3).lineTo(-10.9,-0.3).lineTo(10.9,0.3).closePath();
	this.shape_33.setTransform(131.125,135.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#BEA36F").beginStroke().moveTo(0,3.9).curveTo(-2.8,4,-12.6,4).curveTo(-24,3.9,-31.1,3.1).curveTo(-38.5,2.3,-48.8,1.5).lineTo(-56.3,1.1).curveTo(-60.6,0.8,-63.6,0.1).curveTo(-64.2,-0.1,-64.7,-0.4).curveTo(-65.3,-0.8,-65,-1.2).lineTo(-64.8,-1.3).curveTo(-65.2,-1.7,-64.9,-1.9).curveTo(-63.5,-3.2,-60,-3.5).curveTo(-58.8,-3.6,-54.3,-3.6).curveTo(-53,-3.6,-50.4,-3.9).curveTo(-48.1,-4.1,-45.2,-4).lineTo(-35,-3.6).curveTo(-19.5,-3.4,-14.3,-3.2).curveTo(-12.6,-3.1,-7.3,-2.4).lineTo(-3.1,-2).curveTo(1.3,-1.8,6.4,-2).curveTo(7.8,-2,10.4,-2.6).curveTo(13,-3.1,14.4,-3.2).curveTo(19.5,-3.4,35,-3.6).lineTo(45.2,-4).curveTo(48.1,-4.1,50.4,-3.9).lineTo(54.3,-3.6).curveTo(58.8,-3.6,60,-3.5).curveTo(63.5,-3.2,64.9,-1.9).curveTo(65.2,-1.7,64.8,-1.3).lineTo(65,-1.2).curveTo(65.3,-0.8,64.7,-0.4).curveTo(64.2,-0,63.6,0.1).curveTo(60.6,0.8,56.3,1.1).lineTo(48.9,1.5).curveTo(38.8,2.3,31.1,3.1).curveTo(24.1,3.9,12.6,4).curveTo(2.8,4,0,3.9).closePath().moveTo(-50.3,-1.5).lineTo(-57,-1.2).lineTo(-59.5,-1).curveTo(-57.3,-0.7,-54,-0.6).lineTo(-48.7,-0.3).curveTo(-44.1,-0,-31.5,1.3).curveTo(-24.3,2.1,-13.7,2.1).lineTo(0,2.1).curveTo(4.6,2,13.7,2.1).curveTo(24.3,2.1,31.5,1.3).curveTo(44,-0,48.7,-0.3).lineTo(54,-0.6).curveTo(57.3,-0.7,59.5,-1).lineTo(57,-1.2).lineTo(50.3,-1.5).curveTo(46.2,-1.8,40.6,-1.6).lineTo(30.8,-1.3).curveTo(26.3,-1.1,20.6,-1.2).lineTo(10.5,-1.2).curveTo(1.2,-0.8,-1.8,-1).lineTo(-2.3,-1).lineTo(-0.6,-1.3).curveTo(-0.4,-1.6,-0.1,-1.5).lineTo(0,-1.5).lineTo(0.1,-1.5).curveTo(0.3,-1.6,0.6,-1.3).curveTo(2.6,-0.7,6,-1.2).curveTo(2.1,-0.8,0,-1.7).curveTo(-1.9,-0.9,-5.4,-1.2).lineTo(-4.8,-1.1).lineTo(-15.2,-1.3).lineTo(-20.6,-1.2).curveTo(-26.3,-1.1,-30.8,-1.3).lineTo(-40.5,-1.6).lineTo(-44.5,-1.7).curveTo(-47.7,-1.7,-50.3,-1.5).closePath();
	this.shape_34.setTransform(578.375,65.73);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#BEA36F").beginStroke().moveTo(415.4,7.2).curveTo(406.9,7.5,383.5,7.7).curveTo(411.3,6.9,417.4,6.3).lineTo(434.3,4.5).lineTo(442,3.8).curveTo(446.5,3.3,449.5,2.8).lineTo(452.2,2.2).curveTo(454.3,1.6,454.5,1.1).lineTo(453.9,0.7).curveTo(451.1,-0.5,447.3,-0.8).curveTo(445.6,-0.9,440.9,-0.9).curveTo(433.5,-0.8,407,-0.8).lineTo(269.9,-0.8).curveTo(140.4,-0.8,132.7,-1).lineTo(115.1,-1.4).curveTo(105.2,-1.8,97.4,-2.4).lineTo(80.1,-3.9).lineTo(71.3,-4.3).lineTo(62.5,-4.6).lineTo(44.8,-5.6).curveTo(34.3,-6.2,27.1,-6.3).curveTo(22,-6.4,8.6,-6.1).curveTo(-3.2,-5.8,-10,-6.1).curveTo(-21.4,-6.4,-27.2,-6.3).curveTo(-34.4,-6.2,-44.8,-5.6).lineTo(-62.5,-4.6).lineTo(-71.3,-4.3).lineTo(-80.1,-3.9).lineTo(-97.4,-2.4).curveTo(-105.2,-1.8,-115.1,-1.4).lineTo(-132.7,-1).curveTo(-148.2,-0.7,-170.6,-0.7).lineTo(-208.5,-0.8).curveTo(-225.5,-0.8,-266.8,2.3).curveTo(-304.6,5.1,-325.2,4.5).curveTo(-337.6,4.2,-366.1,1.6).curveTo(-391.9,-0.7,-407,-0.8).curveTo(-433.5,-0.8,-441,-0.9).curveTo(-445.6,-0.9,-447.3,-0.8).curveTo(-451.2,-0.5,-453.9,0.7).lineTo(-454.5,1.1).curveTo(-454.2,1.6,-452.2,2.2).lineTo(-449.5,2.8).curveTo(-446.5,3.3,-442,3.8).lineTo(-434.3,4.5).lineTo(-417.4,6.3).curveTo(-411,6.9,-381.1,7.8).curveTo(-406.4,7.5,-415.3,7.2).curveTo(-407.6,7.7,-389,8.4).curveTo(-417.2,8.1,-420.6,7.8).lineTo(-437.5,5.9).lineTo(-444.1,5.2).curveTo(-447.9,4.7,-450.6,4.2).curveTo(-452.9,3.8,-453.8,3.5).curveTo(-455.6,2.8,-456.1,1.9).curveTo(-456.5,1.3,-455.8,0.6).curveTo(-455.8,-0.3,-453.7,-1.1).curveTo(-452.3,-1.7,-450.3,-2.1).curveTo(-447.7,-2.5,-444.1,-2.6).lineTo(-438.1,-2.5).lineTo(-420.7,-2.5).lineTo(-382.4,-2.7).curveTo(-360.8,-2.4,-345.5,-0.2).curveTo(-315.8,4.1,-273.3,0.5).curveTo(-269.3,0.1,-255.1,-1.7).curveTo(-243.7,-3.3,-237.1,-3.4).curveTo(-231.2,-3.5,-220.5,-3.2).curveTo(-208.9,-2.9,-203.9,-2.9).curveTo(-188.6,-2.9,-157.9,-2.8).curveTo(-130.8,-2.8,-111.8,-3.6).curveTo(-105.5,-3.9,-94.5,-4.9).curveTo(-82.3,-6,-77.2,-6.3).lineTo(-59.6,-7).lineTo(-41.9,-8).curveTo(-28.5,-8.6,-19.3,-8.2).lineTo(-13.7,-7.8).lineTo(-8.1,-7.5).curveTo(-6.8,-7.4,-5.5,-7.5).lineTo(19.3,-8.2).curveTo(28.5,-8.6,41.8,-8).lineTo(59.5,-7).lineTo(77.1,-6.3).curveTo(82.2,-6,94.4,-4.9).curveTo(105.5,-3.9,111.7,-3.6).curveTo(126.2,-3,266.2,-2.7).lineTo(420.7,-2.5).lineTo(438.1,-2.5).lineTo(444.1,-2.6).curveTo(447.7,-2.5,450.3,-2.1).curveTo(452.3,-1.7,453.7,-1.1).curveTo(455.8,-0.3,455.8,0.6).curveTo(456.5,1.3,456.1,1.9).curveTo(455.6,2.8,453.8,3.5).curveTo(452.9,3.8,450.6,4.2).curveTo(448,4.7,444.2,5.2).lineTo(437.6,5.9).lineTo(420.6,7.8).curveTo(417.3,8.1,389.1,8.4).curveTo(407.6,7.7,415.4,7.2).closePath().moveTo(3.8,-6.4).lineTo(7.3,-6.7).lineTo(3,-6.6).curveTo(1.3,-6.7,0.5,-7).lineTo(0.6,-6.8).lineTo(0.5,-6.8).curveTo(1.7,-6.3,3.8,-6.4).closePath().moveTo(-3.8,-6.4).curveTo(-1.7,-6.3,-0.6,-6.8).lineTo(-0.6,-6.8).lineTo(-0.6,-7).curveTo(-1.3,-6.7,-3,-6.6).lineTo(-7.4,-6.7).lineTo(-3.8,-6.4).closePath();
	this.shape_35.setTransform(578.375,60.698);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#BEA36F").beginStroke().moveTo(-20.7,0.5).lineTo(-29.7,-0.6).lineTo(-19.3,-0.1).lineTo(-29.3,-1.4).curveTo(-12.8,-0.6,24.5,0.5).lineTo(-1.7,0.3).lineTo(29.7,1.3).curveTo(-17.1,1,-20.7,0.5).closePath();
	this.shape_36.setTransform(161.275,71.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#BEA36F").beginStroke().moveTo(-53.9,4.3).lineTo(-47.5,3.3).lineTo(-57.6,3.8).curveTo(-50.7,3,-45.2,1.9).curveTo(-34.3,-0.2,-28.9,-0.9).curveTo(-25.2,-1.3,-19.7,-1.7).lineTo(-10.3,-2.3).lineTo(8.4,-3.6).curveTo(30.2,-4.7,57.5,-3.9).lineTo(57.5,-1.1).lineTo(42.7,-1.4).curveTo(34.1,-1.6,28.1,-1.5).curveTo(10.9,-1.4,-9.4,-0.3).lineTo(-18.8,0.1).curveTo(-24.2,0.4,-28,0.8).curveTo(-32,1.2,-37,2.2).lineTo(-45.6,4).curveTo(-46.2,4.1,-48,4.3).closePath();
	this.shape_37.setTransform(1094.45,131.0859);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#BEA36F").beginStroke().moveTo(-22.2,-0).lineTo(-5.3,-0).lineTo(-16.1,0.2).closePath().moveTo(-1.7,-0).lineTo(3.1,-0.1).lineTo(22.2,-0.2).lineTo(3.1,-0.1).lineTo(-1.7,-0).lineTo(-5.3,-0).closePath();
	this.shape_38.setTransform(936.4375,126.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#BEA36F").beginStroke().moveTo(-4.4,-0.2).lineTo(17.9,-0.1).lineTo(-11.4,0.1).lineTo(-17.9,0.2).curveTo(-10,-0.2,-4.4,-0.2).closePath();
	this.shape_39.setTransform(998.9875,126.1667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#BEA36F").beginStroke().moveTo(329.6,2.9).curveTo(309.1,1.1,279.6,1.7).curveTo(246.7,2.7,230.3,2.7).lineTo(179,3.1).curveTo(171.3,3.2,159.8,2.8).lineTo(140.5,2.3).lineTo(121.2,2).curveTo(109.5,1.8,101.9,1.3).lineTo(83.2,0.3).curveTo(79,0,64.4,-0.4).lineTo(54.5,-0.7).curveTo(52.6,-0.8,49.9,-0.6).lineTo(45.3,-0.3).curveTo(35.7,0.1,25.9,0.3).lineTo(3.5,0.5).lineTo(1.6,0.5).lineTo(-20.8,0.3).curveTo(-30.4,0.1,-40.1,-0.3).lineTo(-44.8,-0.6).curveTo(-47.6,-0.8,-49.4,-0.7).lineTo(-59.3,-0.4).curveTo(-73.9,0,-78.1,0.3).lineTo(-96.8,1.3).curveTo(-104.4,1.8,-116,2).lineTo(-135.4,2.3).lineTo(-154.6,2.8).curveTo(-166.1,3.2,-174,3.1).lineTo(-322,2.2).curveTo(-462.4,1.4,-469.9,0.9).curveTo(-476,0.5,-488.6,-0).lineTo(-498.2,-0.6).lineTo(-507.6,-1.2).curveTo(-518.2,-1.9,-526.8,-1.7).lineTo(-536.3,-1.4).lineTo(-545.9,-1).curveTo(-551.7,-0.7,-569.8,-0.7).lineTo(-576,-0.7).lineTo(-576,-2.9).lineTo(-562.7,-2.9).curveTo(-548.6,-2.9,-543.4,-3.1).lineTo(-533.8,-3.4).curveTo(-528,-3.6,-524.2,-3.6).curveTo(-516.8,-3.6,-505.2,-2.9).curveTo(-490.8,-1.9,-486.3,-1.8).curveTo(-476.2,-1.4,-449,0.1).curveTo(-440.6,0.6,-301.5,0.6).curveTo(-164.3,0.5,-153.6,0.2).curveTo(-132.1,-0.5,-114.9,-0.8).curveTo(-107.6,-1,-96.1,-1.5).lineTo(-77.3,-2.4).curveTo(-71,-2.7,-54.4,-2.8).curveTo(-49.5,-2.9,-42.4,-2.5).lineTo(-30.3,-1.9).curveTo(-17.6,-1.5,2.5,-1.4).curveTo(22.7,-1.5,35.4,-1.9).lineTo(47.4,-2.5).curveTo(54.7,-2.9,59.5,-2.8).curveTo(76.1,-2.7,82.4,-2.4).lineTo(101.2,-1.5).curveTo(112.7,-1,120.1,-0.8).curveTo(137.2,-0.5,158.8,0.2).curveTo(186.1,1,225.8,0.9).lineTo(292.8,0.6).curveTo(318.4,0.6,338.2,1.2).lineTo(329,1.4).lineTo(344.3,1.4).lineTo(350.5,1.7).lineTo(393,1.4).curveTo(450.6,1.3,454.6,1).lineTo(469.9,0.1).lineTo(448.3,0.4).lineTo(454.1,0.1).curveTo(481.2,-1.4,491.3,-1.8).curveTo(495.9,-1.9,510.2,-2.9).curveTo(521.9,-3.6,529.4,-3.6).curveTo(535.6,-3.6,548.5,-3.1).curveTo(553.7,-2.9,567.7,-2.9).lineTo(576,-2.9).lineTo(576,-0.7).lineTo(574.9,-0.7).curveTo(556.8,-0.7,551,-1).curveTo(538.2,-1.7,531.8,-1.7).curveTo(523.3,-1.9,512.7,-1.2).curveTo(500.1,-0.3,493.7,-0).curveTo(481.2,0.5,474.9,0.9).curveTo(470.2,1.2,386.3,1.8).curveTo(364.9,3.2,358.5,3.4).curveTo(353.2,3.6,348.2,3.6).curveTo(338.3,3.6,329.6,2.9).closePath().moveTo(356.7,2).curveTo(368.5,2.6,384.9,1.8).closePath().moveTo(-449.5,1).curveTo(-440.7,1.5,-296.5,1.4).curveTo(-440.7,0.6,-464.8,0.1).closePath();
	this.shape_40.setTransform(576,125.5401);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#BEA36F").beginStroke().moveTo(508.2,2.1).curveTo(535.7,-1.9,573.2,-2.1).lineTo(576,-2.1).lineTo(576,1.1).curveTo(565.1,1.1,556.5,1.3).curveTo(542.9,1.7,536.1,2.1).closePath().moveTo(-530.9,2.1).curveTo(-537.7,1.7,-551.3,1.3).curveTo(-564.4,1,-573.9,1.1).lineTo(-576,1.1).lineTo(-576,-2).lineTo(-568.1,-2.1).curveTo(-530.5,-1.9,-503.1,2.1).closePath();
	this.shape_41.setTransform(576,133.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#BEA36F").beginStroke().moveTo(-385.2,5.3).lineTo(-423.2,3.9).curveTo(-445.8,3,-461.4,3.3).curveTo(-474.2,3.6,-499.7,3.9).lineTo(-518,4.2).curveTo(-528.9,4.4,-536.2,4.2).curveTo(-549.2,3.8,-576,4.2).lineTo(-576,2.1).curveTo(-551.4,1.8,-544.4,1.9).curveTo(-523,2.3,-508.4,2).lineTo(-489.5,1.8).lineTo(-470.8,1.5).curveTo(-453.7,1.1,-432.5,1).curveTo(-424,0.9,-393.2,2.7).curveTo(-369.2,4,-353.2,2.4).curveTo(-350.1,2.1,-335.8,0.2).curveTo(-325.1,-1.3,-318.5,-1.5).curveTo(-312.7,-1.6,-302.7,-0.5).curveTo(-292,0.6,-286.8,0.6).lineTo(-219.4,0.5).lineTo(-180.2,0.5).curveTo(-157,0.5,-140.9,0.2).lineTo(-122.6,-0.1).lineTo(-104,-1.1).lineTo(-85.5,-2.1).curveTo(-73.2,-2.6,-67.1,-3).lineTo(-46.8,-4.4).curveTo(-34.9,-5.2,-26.5,-5.4).curveTo(-14.7,-5.6,-7.1,-5.5).curveTo(-3,-5.5,1.5,-4.8).lineTo(2.5,-4.6).lineTo(3.5,-4.8).curveTo(7.9,-5.5,12.1,-5.5).curveTo(19.7,-5.6,31.6,-5.4).curveTo(39.9,-5.2,51.8,-4.4).lineTo(72.1,-3).curveTo(78.2,-2.6,90.5,-2.1).lineTo(109,-1.1).lineTo(127.6,-0.1).lineTo(146,0.2).curveTo(153.2,0.3,291.8,0.6).lineTo(437.6,1).curveTo(458.6,1.1,475.7,1.5).lineTo(494.6,1.8).lineTo(513.4,2).curveTo(528.1,2.3,549.5,1.9).curveTo(558.2,1.8,576,2.1).lineTo(576,4.1).curveTo(553.9,3.8,541.3,4.2).curveTo(534,4.4,523.1,4.2).lineTo(504.6,3.9).curveTo(479.2,3.6,466.5,3.3).curveTo(459.8,3.2,320.1,3.1).curveTo(179.8,3,173.9,2.9).lineTo(155.1,2.4).lineTo(136.3,2.1).curveTo(128.6,2.1,117.7,1.5).lineTo(99.2,0.3).lineTo(80.7,-0.6).curveTo(69.3,-1.1,62.3,-1.6).curveTo(38.8,-3.3,25.6,-3.5).lineTo(16.7,-3.7).curveTo(11.5,-3.8,7.7,-3.7).curveTo(6.2,-3.6,3.4,-3.2).lineTo(3.4,-3).lineTo(2.5,-3.1).lineTo(1.5,-3).lineTo(1.5,-3.2).curveTo(-1.4,-3.6,-2.7,-3.7).curveTo(-6.5,-3.8,-11.6,-3.7).lineTo(-20.6,-3.5).curveTo(-33.8,-3.3,-57.2,-1.6).curveTo(-64.3,-1.1,-75.7,-0.6).lineTo(-94.1,0.3).lineTo(-112.7,1.5).curveTo(-123.6,2.1,-131.3,2.1).lineTo(-150,2.4).lineTo(-168.8,2.9).curveTo(-184.8,2.9,-217.9,2.3).curveTo(-250.2,1.8,-266.9,1.8).lineTo(-279.5,2.1).curveTo(-287.4,2.3,-292,2.1).curveTo(-295.1,2,-300.9,1.1).curveTo(-306.8,0.2,-309.9,0).curveTo(-318.3,-0.3,-331.9,1.7).curveTo(-351.7,4.5,-354.4,4.8).curveTo(-361.5,5.4,-370,5.5).lineTo(-371.9,5.5).curveTo(-376.8,5.5,-385.2,5.3).closePath().moveTo(1.7,-3.9).lineTo(2.5,-3.8).lineTo(3.2,-3.9).lineTo(2.5,-4).closePath().moveTo(7.7,-4.5).curveTo(6.2,-4.5,3.4,-4.1).lineTo(3.4,-3.9).lineTo(3.5,-3.9).curveTo(6.6,-4.4,9.8,-4.5).closePath().moveTo(1.5,-3.9).lineTo(1.5,-3.9).lineTo(1.5,-4.1).curveTo(-1.4,-4.5,-2.7,-4.5).lineTo(-4.9,-4.5).curveTo(-1.8,-4.4,1.5,-3.9).closePath();
	this.shape_42.setTransform(576,110.301);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#BEA36F").beginStroke().moveTo(-311.1,1.9).curveTo(-339,-1,-361.5,-1.5).curveTo(-389.1,-2,-414.2,0.9).curveTo(-426.9,2.4,-440.6,3).curveTo(-452.1,3.5,-466.6,3.5).curveTo(-480,3.5,-504.5,3.2).lineTo(-542.3,2.9).curveTo(-564.7,2.8,-575.7,2.5).lineTo(-576,2.5).lineTo(-576,0.3).lineTo(-570.5,0.5).curveTo(-560.6,0.7,-533.2,0.7).curveTo(-514.1,0.7,-476.3,0.8).curveTo(-443.3,0.5,-418.2,-1.7).curveTo(-394.9,-3.8,-383.6,-4).curveTo(-374.5,-4.2,-356.8,-3.6).curveTo(-338.4,-3.6,-289.9,-0.5).curveTo(-247.7,2.2,-222.4,1).curveTo(-203.7,0.2,-176.3,0.1).lineTo(-130.3,-0.2).lineTo(-92.7,-0.7).curveTo(-71.6,-1.2,-55.1,-2.3).lineTo(-39.3,-3.2).curveTo(-30.4,-3.7,-23.6,-3.8).curveTo(-19.8,-3.8,-8.3,-3.3).lineTo(-1,-3.1).lineTo(1.5,-3.1).lineTo(1.5,-3.3).lineTo(2.5,-3.1).lineTo(3.4,-3.3).lineTo(3.4,-3.1).lineTo(5.9,-3.1).lineTo(13.2,-3.3).curveTo(24.7,-3.8,28.5,-3.8).curveTo(35.4,-3.7,44.3,-3.2).lineTo(60.1,-2.3).curveTo(76.6,-1.2,97.7,-0.7).lineTo(135.4,-0.2).curveTo(160.4,0.1,462.9,1).curveTo(474.7,1,500.5,0.8).curveTo(525,0.7,538.1,0.7).curveTo(565.7,0.7,575.5,0.5).lineTo(576,0.5).lineTo(576,2.6).curveTo(566.5,2.8,547.3,2.9).lineTo(509.4,3.2).curveTo(485,3.5,471.6,3.5).curveTo(450.7,3.5,433.8,3.3).curveTo(427.5,3.2,288.5,2.9).curveTo(149.5,2.5,143.2,2.4).lineTo(105.6,2).curveTo(83.5,1.6,67.9,0.6).curveTo(43,-1.3,30.5,-1.8).curveTo(24.5,-2,12.5,-1.7).lineTo(-7.6,-1.7).curveTo(-19.5,-2,-25.6,-1.8).curveTo(-32.8,-1.5,-44.2,-0.7).lineTo(-62.8,0.6).curveTo(-78.5,1.6,-100.5,2).lineTo(-138.2,2.4).lineTo(-156.3,2.6).lineTo(-174.4,2.6).lineTo(-243.5,4).lineTo(-257.9,4.1).curveTo(-289.4,4.1,-311.1,1.9).closePath().moveTo(3.4,-2.3).curveTo(4.6,-2.2,5.9,-2.3).lineTo(17.6,-2.7).lineTo(4.2,-2.5).lineTo(-12.7,-2.7).lineTo(-1,-2.3).curveTo(0.3,-2.2,1.5,-2.3).lineTo(1.5,-2.4).lineTo(2.5,-2.3).lineTo(3.4,-2.4).closePath();
	this.shape_43.setTransform(576,104.4895);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#BEA36F").beginStroke().moveTo(507.4,3.3).curveTo(500,3.2,489.9,2.7).lineTo(472.4,1.7).curveTo(449.4,0.7,437.7,0.1).lineTo(420.3,-0.9).curveTo(410.4,-1.4,403,-1.5).curveTo(392.7,-1.6,269.7,-1.4).curveTo(144.4,-1.3,136.6,-1.1).lineTo(102.3,-0.4).curveTo(96.6,-0.3,67.9,-0.5).curveTo(45.4,-0.6,34.1,-0.1).curveTo(21.8,0.4,17.1,0.4).curveTo(11.9,0.3,9.2,-0).curveTo(6.4,-0.3,4.6,-0.2).lineTo(4.6,-0.1).lineTo(3.7,-0.2).lineTo(2.8,-0.1).lineTo(2.8,-0.2).curveTo(1,-0.3,-1.8,-0).curveTo(-4.5,0.3,-9.8,0.4).curveTo(-14.4,0.4,-26.7,-0.1).curveTo(-38,-0.6,-60.5,-0.5).curveTo(-89.2,-0.3,-94.9,-0.4).lineTo(-129.2,-1.1).curveTo(-140.6,-1.4,-395.6,-1.5).curveTo(-402.9,-1.4,-412.9,-0.9).lineTo(-430.3,0.1).lineTo(-447.6,0.9).lineTo(-465,1.7).lineTo(-482.5,2.7).curveTo(-492.5,3.2,-500,3.3).curveTo(-510.1,3.5,-533,2.9).curveTo(-541.5,2.6,-549.5,2.8).lineTo(-560.7,3).lineTo(-559.6,1.4).curveTo(-539.8,0.8,-532.4,1).curveTo(-510.6,1.7,-497.9,1.4).curveTo(-490.8,1.3,-480.5,0.7).lineTo(-462.9,-0.3).lineTo(-445.7,-1).lineTo(-428.4,-1.9).lineTo(-411,-2.8).curveTo(-401.2,-3.3,-393.8,-3.3).curveTo(-139.4,-3.2,-127.9,-2.9).curveTo(-105,-2.2,-93.6,-2.1).curveTo(-86.8,-2,-76.5,-2).lineTo(-59.3,-2.1).curveTo(-38,-2.1,-26,-1.5).curveTo(-14.7,-1,-9,-1).lineTo(-2.6,-1.3).curveTo(1.3,-1.5,3.7,-1.3).curveTo(6.1,-1.5,10,-1.3).lineTo(16.4,-1).curveTo(22.1,-1,33.4,-1.5).curveTo(45.4,-2.1,66.6,-2.1).lineTo(83.8,-2).curveTo(94.2,-2,101,-2.1).curveTo(112.4,-2.2,135.3,-2.9).curveTo(143.2,-3.1,268.2,-3.3).curveTo(391,-3.4,401.2,-3.3).curveTo(408.6,-3.3,418.4,-2.8).lineTo(435.8,-1.9).curveTo(447.4,-1.2,470.3,-0.3).lineTo(487.9,0.7).curveTo(498.2,1.3,505.3,1.4).curveTo(518,1.7,539.8,1).curveTo(548.9,0.7,559.5,1).lineTo(560.7,2.9).lineTo(556.9,2.8).curveTo(548.9,2.6,540.5,2.9).curveTo(523,3.4,512.9,3.4).lineTo(507.4,3.3).closePath().moveTo(10,-0.6).lineTo(16.4,-0.3).lineTo(17.1,-0.3).curveTo(11.8,-0.4,9.2,-0.7).curveTo(7,-1,4.6,-0.9).lineTo(4.6,-0.8).lineTo(3.7,-0.9).lineTo(2.8,-0.8).lineTo(2.8,-0.9).curveTo(0.4,-1,-1.8,-0.7).curveTo(-4.4,-0.4,-9.7,-0.3).lineTo(-9,-0.3).lineTo(-2.6,-0.6).curveTo(1.3,-0.8,3.7,-0.6).lineTo(6.5,-0.7).lineTo(10,-0.6).closePath();
	this.shape_44.setTransform(574.6,36.7785);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#BEA36F").beginStroke().moveTo(-0.1,-0).lineTo(0.1,-0.5).lineTo(0.1,0.5).curveTo(-0.1,0.4,-0.1,-0).closePath();
	this.shape_45.setTransform(1151.875,76.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#BEA36F").beginStroke().moveTo(-4.1,5.7).lineTo(-10.1,5).lineTo(-12.1,4.7).curveTo(-13.4,4.4,-14,4).curveTo(-14.8,3.3,-14.9,2.8).curveTo(-17,0.8,-11.5,-0.7).curveTo(-10,-1.1,-4.5,-2.2).lineTo(1.9,-3.6).lineTo(15.5,-6).lineTo(15.5,-5.2).lineTo(13.9,-4.8).lineTo(15.5,-5.1).lineTo(15.5,-4.2).lineTo(6.8,-2.5).lineTo(0.8,-1.2).lineTo(-5.1,0.1).curveTo(-9.1,0.9,-11,1.4).curveTo(-12.9,1.9,-13.1,2.1).lineTo(-12,2.5).curveTo(-7.3,3.5,-0.7,3.7).curveTo(2.4,3.8,6.8,3.8).lineTo(14.1,3.6).lineTo(15.5,3.6).lineTo(15.5,5.7).lineTo(12.9,5.8).lineTo(4.6,6).lineTo(3.4,6).curveTo(-0.7,6,-4.1,5.7).closePath();
	this.shape_46.setTransform(1136.4868,77.5781);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#BEA36F").beginStroke().moveTo(-19.4,11).curveTo(-29,10.5,-35.1,9).curveTo(-39.4,8,-39.5,6.6).curveTo(-40.1,6.1,-40,5.5).curveTo(-39.8,4.4,-38.4,3.6).curveTo(-35.8,2.3,-33.8,1.7).curveTo(-28.7,0.1,-19.7,-0.7).lineTo(-4.7,-2.1).lineTo(10.6,-4.3).curveTo(19.1,-5.6,25.1,-7.2).lineTo(31.6,-9.1).lineTo(38,-10.9).lineTo(39.6,-11.3).lineTo(40,-10.7).lineTo(40,-9.5).lineTo(33.2,-7.4).curveTo(21.3,-3.6,13.6,-2.3).curveTo(0.6,-0.1,-8.4,0.9).lineTo(-19.4,1.8).curveTo(-26.1,2.4,-30.1,3.2).curveTo(-31.6,3.5,-33.8,4.2).curveTo(-36.9,5.1,-37.5,5.8).curveTo(-36.1,6.6,-33.7,7.1).lineTo(-29.9,7.8).curveTo(-23.6,8.8,-15.9,9.1).curveTo(-12.4,9.2,-2.5,9.1).lineTo(32.6,8.9).lineTo(40,9).lineTo(40,11).lineTo(38.4,11).lineTo(23.8,11).lineTo(9.3,11.2).lineTo(-5,11.3).lineTo(-7.3,11.3).curveTo(-14.1,11.3,-19.4,11).closePath();
	this.shape_47.setTransform(1111.9729,76.9536);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#BEA36F").beginStroke().moveTo(43,17.9).curveTo(30.1,17.6,8.8,16.6).curveTo(2.7,16.3,-8.1,15.5).lineTo(-25.1,14.4).curveTo(-29.8,14.1,-36.4,14).lineTo(-47.5,13.8).curveTo(-52.6,13.7,-57.1,13.3).curveTo(-62.6,12.9,-65.3,11.9).curveTo(-67.8,10.9,-68.1,9.6).curveTo(-68.8,8.8,-68.5,8.1).curveTo(-67.9,6.3,-63.5,5.3).curveTo(-60.4,4.6,-54.7,4.2).curveTo(-51.6,3.9,-45.5,3).curveTo(-34.6,1.5,-12.7,-1.4).curveTo(6.4,-4.1,18.7,-7).lineTo(33.2,-10.5).lineTo(47.4,-14.3).lineTo(54.5,-15.9).lineTo(61.6,-17.6).lineTo(63.5,-18.1).lineTo(64,-17.4).lineTo(62.1,-16.9).lineTo(64,-17.3).lineTo(64.5,-16.6).lineTo(55.3,-14.2).curveTo(51.3,-13.2,44.1,-11.2).lineTo(32.9,-8.1).curveTo(19.1,-4.5,10.2,-2.7).curveTo(0.3,-0.7,-15,1.3).curveTo(-36.9,4.2,-47.8,5.7).lineTo(-56.4,6.6).curveTo(-61.6,7,-64.5,7.9).curveTo(-66,8.3,-66.2,8.7).curveTo(-65.8,9.1,-64.9,9.5).curveTo(-63.2,10.2,-60.8,10.6).lineTo(-56.8,11).curveTo(-50,11.6,-40.1,11.5).curveTo(-33,11.5,-22.9,12.2).lineTo(-5.4,13.5).curveTo(9.7,14.6,32.5,15.3).curveTo(48.1,15.8,68.5,15.8).lineTo(68.5,18.1).lineTo(65,18.1).curveTo(57.6,18.1,43,17.9).closePath();
	this.shape_48.setTransform(1083.4526,76.4361);

	this.instance_1 = new lib.CompoundPath_27();
	this.instance_1.setTransform(0,88.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#BEA36F").beginStroke().moveTo(4.2,19.5).curveTo(-7.1,19.8,-11,19.7).lineTo(-29.2,19.1).curveTo(-34.1,19,-47.2,19).curveTo(-58.7,19,-65.3,18.8).curveTo(-81.6,18.4,-101,16.3).lineTo(-118.3,14.3).curveTo(-128.6,13.1,-135.6,12.5).curveTo(-141.1,12.1,-275.8,11.1).curveTo(-409.7,10.2,-415.7,9.6).curveTo(-438.9,7.6,-450.4,6.5).curveTo(-469.4,4.6,-482.5,2.8).curveTo(-499.5,0.5,-512.8,-2.6).curveTo(-524.1,-5.3,-543.2,-11.2).curveTo(-550,-13.4,-558,-14.9).curveTo(-562.3,-15.7,-570.4,-16.9).lineTo(-569.9,-17.7).curveTo(-559.9,-16.1,-559.6,-16.4).curveTo(-559.3,-16.7,-568.8,-19.2).lineTo(-568.4,-19.7).curveTo(-558.2,-17.4,-542.5,-13.1).lineTo(-517.6,-6.2).curveTo(-505,-2.7,-487.6,-0.2).curveTo(-476.4,1.4,-455.5,3.5).curveTo(-444.1,4.7,-420.9,6.7).curveTo(-415.1,7.2,-281.5,8.2).curveTo(-147.3,9.2,-141.7,9.7).curveTo(-133.4,10.3,-106.9,13.2).curveTo(-85.3,15.6,-71.8,16.2).curveTo(-64.1,16.5,-52.5,16.7).lineTo(-13.4,17.8).curveTo(-10,17.9,-5,17.9).lineTo(3.3,17.7).lineTo(5.1,17.7).lineTo(13.6,17.9).curveTo(18.4,17.9,21.9,17.8).lineTo(61,16.7).curveTo(72.6,16.5,80.4,16.2).curveTo(93.8,15.6,115.5,13.2).curveTo(141.8,10.3,150.1,9.7).curveTo(155.7,9.2,290,8.2).curveTo(423.6,7.2,429.4,6.7).lineTo(446.7,5.1).curveTo(457.8,4.2,463.9,3.5).curveTo(484.8,1.4,496,-0.2).curveTo(513.4,-2.7,525.9,-6.2).lineTo(547.6,-12.2).curveTo(560.1,-15.7,569.5,-17.8).lineTo(570,-17.1).lineTo(567.7,-16.5).lineTo(570,-17.1).lineTo(570.4,-16.4).curveTo(562.7,-14.4,551.4,-11.2).lineTo(536.6,-6.8).curveTo(527.7,-4.2,521.2,-2.6).curveTo(507.9,0.5,490.9,2.8).curveTo(477.8,4.6,458.8,6.5).lineTo(424.2,9.6).curveTo(418.2,10.2,284.2,11.1).curveTo(149.6,12.1,144.1,12.5).curveTo(137.1,13.1,126.7,14.3).lineTo(109.5,16.3).curveTo(90.1,18.4,73.8,18.8).curveTo(67.2,19,55.7,19).curveTo(42.7,19,37.7,19.1).curveTo(25.6,19.6,19.4,19.7).lineTo(16.7,19.7).lineTo(4.2,19.5).closePath();
	this.shape_49.setTransform(574.2,70.9143);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#BEA36F").beginStroke().moveTo(509.4,3.2).curveTo(494.8,2.9,473.7,1.9).lineTo(437.8,0.1).curveTo(419.3,-0.7,285.6,-1.3).curveTo(150.4,-1.8,133.9,-1).curveTo(124,-0.5,99.7,-0.2).lineTo(82.5,0.2).lineTo(65.2,0.7).lineTo(30.5,1.5).curveTo(23.3,1.7,13.2,1.6).curveTo(7,1.6,4,1.1).curveTo(1,1.6,-5.3,1.6).curveTo(-15.4,1.7,-22.6,1.5).lineTo(-57.3,0.7).curveTo(-80.3,-0,-91.8,-0.2).curveTo(-116,-0.5,-126,-1).lineTo(-128.1,-1.1).curveTo(-140.2,-1.5,-157,-1.5).lineTo(-186,-1.5).lineTo(-232,-1.4).curveTo(-240.5,-1.4,-256,0.4).curveTo(-273.2,2.3,-280.3,2.6).curveTo(-297.7,3.3,-322.9,1.8).lineTo(-364.7,-0.7).curveTo(-390.9,-1.7,-429.9,0.1).lineTo(-465.8,1.9).curveTo(-486.9,2.9,-501.5,3.2).curveTo(-508.2,3.4,-517.6,3.3).lineTo(-533.6,3.2).lineTo(-565.4,3.1).lineTo(-565.1,2.8).lineTo(-534.8,2.9).curveTo(-518.8,2.9,-507.5,2.6).lineTo(-518.8,2.6).lineTo(-533.1,2.4).lineTo(-564.9,2.4).lineTo(-564.6,2.1).lineTo(-530.4,2.2).curveTo(-509.8,2.1,-495.7,1.4).lineTo(-460,-0.4).lineTo(-424.4,-2.1).curveTo(-378.6,-4.1,-325.2,-0.9).lineTo(-309.3,-0.1).curveTo(-291.9,0.6,-261.7,-1.1).curveTo(-226.6,-3,-214,-3.1).lineTo(-185.3,-3.2).lineTo(-156.6,-3.3).lineTo(-155.8,-3.3).curveTo(-144.3,-3.6,-121.6,-2.7).curveTo(-114.5,-2.4,-104.5,-2.3).lineTo(-87.3,-2.1).curveTo(-75.9,-1.9,-52.9,-1.2).lineTo(-21.5,-0.2).lineTo(-6,0.1).lineTo(-1.5,0.1).curveTo(1.2,0.1,3.1,-0.1).lineTo(3.1,-0.3).lineTo(4,-0.2).lineTo(4.8,-0.3).lineTo(4.8,-0.1).curveTo(6.7,0.1,9.4,0.1).lineTo(13.9,0.1).lineTo(29.4,-0.2).lineTo(60.8,-1.2).lineTo(95.2,-2.1).lineTo(112.4,-2.3).curveTo(122.4,-2.4,129.5,-2.7).curveTo(152.2,-3.6,163.7,-3.3).lineTo(297.9,-2.9).curveTo(425.4,-2.4,432.3,-2.1).lineTo(467.9,-0.4).lineTo(503.6,1.4).curveTo(517.5,2.1,534.4,2.3).curveTo(544.6,2.3,564.7,2.2).lineTo(564.9,2.4).lineTo(541,2.4).lineTo(526.7,2.6).curveTo(518.2,2.6,512.3,2.5).curveTo(524.1,3,538.9,3).lineTo(565.2,2.9).lineTo(565.4,3.2).lineTo(541.5,3.2).lineTo(525.5,3.3).lineTo(521,3.4).lineTo(509.4,3.2).closePath().moveTo(3.3,0.5).lineTo(4,0.6).lineTo(4.6,0.5).lineTo(4,0.4).closePath();
	this.shape_50.setTransform(574.375,43.5041);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#BEA36F").beginStroke().moveTo(-80.6,1).lineTo(-74.2,0.7).lineTo(-87.9,0.9).lineTo(-80.7,0.2).curveTo(-75.6,-0.3,2.3,-1.1).curveTo(31.1,-1.4,80.9,-1.7).lineTo(47.1,-0.8).lineTo(87.9,-1).curveTo(58.5,-0.3,20.6,0.3).lineTo(-87.8,1.7).closePath();
	this.shape_51.setTransform(802.9,71.2875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#BEA36F").beginStroke().moveTo(-0,2.5).curveTo(-7.9,2.9,-17.8,2.5).curveTo(-23.3,2.3,-35.6,1.5).curveTo(-48.8,0.8,-71.9,0.4).curveTo(-96.2,0.1,-108.3,-0.2).curveTo(-120.6,-0.5,-136.7,-1.9).lineTo(-124.1,-1.7).curveTo(-131,-2.1,-136.6,-2.7).lineTo(-105.7,-2.2).lineTo(-69.3,-1.6).curveTo(-48.1,-1.2,-33,-0.2).curveTo(-13.3,1.2,-0.6,1).curveTo(-0.3,1,-0,1.3).curveTo(0.3,1,0.5,1).curveTo(13.3,1.2,33,-0.2).curveTo(48,-1.2,69.3,-1.6).lineTo(105.7,-2.2).lineTo(136.5,-2.7).curveTo(130.9,-2.1,124,-1.7).lineTo(136.7,-1.9).curveTo(120.4,-0.5,108.3,-0.2).curveTo(101.2,0,90.1,0.1).lineTo(71.9,0.4).curveTo(48.7,0.8,35.5,1.5).curveTo(23.4,2.3,17.8,2.5).curveTo(13.2,2.7,9,2.7).curveTo(4.2,2.7,-0,2.5).closePath().moveTo(-3.5,1.8).lineTo(-0.6,1.8).curveTo(-0.3,1.8,-0,2.1).curveTo(0.3,1.8,0.5,1.8).lineTo(3.4,1.8).lineTo(-0,1.7).closePath();
	this.shape_52.setTransform(578.425,74.8317);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#BEA36F").beginStroke().moveTo(-18,0.8).lineTo(-40.9,0.8).curveTo(18.9,-0.5,41.1,-1.5).lineTo(31.1,-0.3).lineTo(41.5,-0.7).lineTo(32.5,0.4).curveTo(28.1,0.9,-41.5,1.5).lineTo(-18,0.8).closePath();
	this.shape_53.setTransform(983.775,71.925);

	this.instance_2 = new lib.CompoundPath_30();
	this.instance_2.setTransform(552.5,78.95,1,1,0,0,0,311.4,5.9);
	this.instance_2.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_1},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, rect = new cjs.Rectangle(0,0,1152,135.7), [rect]);


(lib.Dehydration = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// TABLE
	this.instance = new lib.Group_1();
	this.instance.setTransform(272.55,207.7,1,1,0,0,0,283.8,1);
	this.instance.alpha = 0.6094;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Group_1_0();
	this.instance_1.setTransform(370.6,290,1,1,0,0,0,207.5,2.1);
	this.instance_1.alpha = 0.5117;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Group_2();
	this.instance_2.setTransform(-230.85,290,1,1,0,0,0,343.2,2.1);
	this.instance_2.alpha = 0.5117;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Group_3();
	this.instance_3.setTransform(-340.95,207.7,1,1,0,0,0,217.6,1);
	this.instance_3.alpha = 0.6094;
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Group_1_1();
	this.instance_4.setTransform(2.1,237.55,1,1,0,0,0,576,67.8);
	this.instance_4.alpha = 0.25;
	this.instance_4.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CAB285").beginStroke().moveTo(-529.5,-9).lineTo(538.6,-9).lineTo(542.3,-3).lineTo(-526,-3).lineTo(-542.3,9).closePath();
	this.shape.setTransform(-2.05,178.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#BEA36F").beginStroke().moveTo(-576,67.7).lineTo(-576,-8.4).lineTo(-533.7,-67.7).lineTo(534.4,-67.7).lineTo(576,-1.4).lineTo(576,67.7).closePath();
	this.shape_1.setTransform(2.1,237.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(54));

	// Layer_14
	this.instance_5 = new lib.Symbol43("synched",0);
	this.instance_5.setTransform(12,-41,1,1,0,0,0,151.2,243.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).wait(34));

	// Layer_14
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#E0B5A0").beginStroke().moveTo(2.3,3.8).lineTo(-8.6,1.5).curveTo(-10.6,1,-12.1,-0.3).curveTo(-15.1,-2.7,-15.8,-7.1).curveTo(-16,-8.4,-15.3,-9.2).curveTo(-14.9,-9.7,-14.2,-9.8).lineTo(-13.6,-9.8).lineTo(-13.1,-9.7).lineTo(-11.2,-9.1).lineTo(-9.5,-8.4).curveTo(-1.4,-5.6,5.2,-7.1).curveTo(7.4,-7.6,9,-7.5).curveTo(11.1,-7.4,12.6,-6.1).curveTo(13.9,-5,14.8,-2.9).curveTo(15.3,-1.5,15.9,0.7).curveTo(15.1,-1.7,14.5,-2.8).curveTo(13.7,-4.8,12.4,-5.7).curveTo(10.9,-6.8,9,-6.9).curveTo(7.6,-7,5.3,-6.4).curveTo(3.4,-6,1.5,-5.8).curveTo(-0,-5.7,-2.3,-5.9).curveTo(-5.9,-6.2,-9.8,-7.5).lineTo(-11.6,-8.2).lineTo(-13.3,-8.8).curveTo(-14.3,-9,-14.6,-8.6).curveTo(-15,-8.2,-14.9,-7.2).curveTo(-14.2,-3.1,-11.6,-0.9).curveTo(-10.3,0.2,-8.4,0.7).lineTo(2.8,3.5).lineTo(-0.2,9.8).closePath();
	this.shape_2.setTransform(59.8802,59.4983,0.9993,0.9993,-3.1949);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#E0B5A0").beginStroke().moveTo(5.9,13).curveTo(4.9,12.9,3,12.4).curveTo(-1.2,11.2,-7.8,8.6).lineTo(-18.4,4.3).curveTo(-29,-0.3,-39.1,-5.2).lineTo(-17.9,3.2).lineTo(-7.3,7.1).curveTo(-0.7,9.6,3.4,10.7).curveTo(4.9,11.1,6,11.3).lineTo(6.6,11.3).lineTo(7.1,11.1).lineTo(8.5,10.8).curveTo(10.6,10.4,13.9,9.3).curveTo(17.5,8.1,19.2,7.4).curveTo(20.9,6.5,21.3,6.2).lineTo(33.7,-8).lineTo(24.2,-0.3).lineTo(31.2,-6.7).lineTo(38.2,-13).lineTo(38.3,-13).lineTo(39.1,-12.3).lineTo(22.6,7.2).curveTo(22.1,7.8,21.2,8.3).lineTo(19.9,9).curveTo(17.4,10,14.5,11).curveTo(11,12.1,8.9,12.5).lineTo(6.7,13.1).lineTo(5.9,13).closePath();
	this.shape_3.setTransform(16.1021,91.8601,0.9989,0.9989,-3.1954);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#E0B5A0").beginStroke().moveTo(-1.8,7.8).lineTo(-1.7,7.8).lineTo(-1.5,7.6).lineTo(15.7,-7.4).lineTo(15.8,-7.8).curveTo(15.8,-8.3,15.6,-8.8).curveTo(15.3,-9.8,14.7,-10.7).lineTo(10.2,-7.9).lineTo(5.2,-4.9).lineTo(15,-12.4).lineTo(15.3,-11.9).curveTo(16.4,-10.7,16.9,-9.4).curveTo(17.3,-8.4,17.3,-7.8).curveTo(17.3,-7.2,17.1,-6.7).lineTo(16.8,-6.2).lineTo(16.5,-6).lineTo(12.3,-2.1).curveTo(8.8,1,3.8,5.3).lineTo(-0.8,9.1).lineTo(-1.4,9.3).lineTo(-6.2,10.4).curveTo(-12.9,11.8,-17.3,12.4).closePath();
	this.shape_4.setTransform(39.1219,83.5218,0.9989,0.9989,-3.1954);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#E0B5A0").beginStroke().moveTo(13.1,16.4).lineTo(30.3,5.1).lineTo(31.5,3.1).curveTo(30.9,2.1,30.2,1.6).curveTo(29.8,1.2,29.3,1.1).lineTo(29.1,1.1).lineTo(28.3,1.3).curveTo(25.9,2,23.1,3).lineTo(11.5,7.4).curveTo(10.4,7.8,9.9,7.8).curveTo(8.5,7.9,6.9,7.2).curveTo(4.6,6.1,2.1,3.8).curveTo(-1.6,0.4,-5.2,-4.7).lineTo(-5.9,-5.7).lineTo(12.2,-10.9).curveTo(13.1,-11.1,13.5,-11.4).curveTo(14.7,-12.1,15.1,-13.3).curveTo(15.5,-14.4,15.3,-15.6).lineTo(-9.4,-16.8).lineTo(-12.6,-17).curveTo(-13.8,-17.1,-15.6,-16.7).curveTo(-18,-16.3,-21.6,-14.9).curveTo(-26.4,-13.1,-33.1,-9.7).lineTo(-33.2,-9.8).curveTo(-27.5,-13,-21.9,-15.5).curveTo(-18,-17,-15.8,-17.6).curveTo(-14,-18,-12.6,-17.9).lineTo(-9.4,-17.8).lineTo(16,-17.1).lineTo(16.6,-17).lineTo(16.7,-16.5).curveTo(17.1,-14.5,16.7,-12.9).curveTo(16.1,-10.9,14.3,-10).curveTo(13.7,-9.6,12.7,-9.3).lineTo(-3,-4.7).curveTo(0.3,-0.2,3.2,2.6).curveTo(5.6,4.7,7.5,5.6).curveTo(8.9,6.2,9.8,6.1).curveTo(10.4,6.1,10.9,5.8).lineTo(22.5,1.5).lineTo(27.9,-0.2).lineTo(29.1,-0.4).lineTo(29.6,-0.4).curveTo(30.3,-0.2,31.1,0.4).curveTo(32.3,1.5,33,2.8).lineTo(33.2,3.2).lineTo(31.3,6).lineTo(31.1,6.2).lineTo(13.5,17.2).lineTo(13.3,17.3).lineTo(-5.9,18).closePath();
	this.shape_5.setTransform(22.2843,67.3016,0.9989,0.9989,-3.1954);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-14.7,17.8).lineTo(-38.4,7.9).lineTo(-44.6,-3.2).lineTo(-27.7,-15.7).lineTo(-19.8,-19.8).curveTo(-5.4,-26.9,-1.8,-26.9).curveTo(3.5,-27,27.7,-25.8).lineTo(27.9,-23.1).curveTo(27.5,-20.4,25.1,-19.7).lineTo(7.7,-14.7).lineTo(13.1,-8).curveTo(19.2,-1.5,23.1,-2.7).curveTo(25.9,-3.6,32.8,-6.6).curveTo(38.3,-9,40,-9.2).curveTo(41.9,-9.4,43.4,-7.9).curveTo(44.2,-7.1,44.6,-6.3).lineTo(42.6,-3.3).curveTo(44.4,-3,44.6,-1).curveTo(44.6,-0,44.4,0.9).lineTo(26.1,22).curveTo(15,25.9,11.5,26.9).lineTo(11.2,26.9).curveTo(7.9,26.9,-14.7,17.8).closePath();
	this.shape_6.setTransform(10.7443,77.5363,0.9993,0.9993,-3.1949);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#D5A690").beginStroke().moveTo(-14.4,-2.8).curveTo(-7.6,-6,-0.1,-5.8).curveTo(3.8,-5.7,7.2,-4.8).curveTo(11.4,-3.7,14,-2.4).curveTo(20.5,0.6,25.9,5.7).curveTo(19.1,1.4,13.4,-0.8).curveTo(6.5,-3.5,-0.2,-3.7).curveTo(-3.4,-3.8,-7.1,-3.2).curveTo(-10.3,-2.6,-13.8,-1.3).curveTo(-20.4,1.2,-25.9,5.9).curveTo(-21.5,0.5,-14.4,-2.8).closePath();
	this.shape_7.setTransform(-115.9643,10.8714,0.9993,0.9993,-3.1949);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.5,0.4).curveTo(-1.3,-0.6,-1.4,-1.7).curveTo(-0.6,-1.2,0.3,-0.2).curveTo(1.1,0.8,1.4,1.7).curveTo(0.4,1.4,-0.5,0.4).closePath();
	this.shape_8.setTransform(109.3112,-192.2908,0.9989,0.9989,-3.1954);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-2.8,1.3).curveTo(-1.9,0.6,-0.1,-0.2).curveTo(0.9,-0.7,2.8,-1.3).curveTo(2.6,-0.9,1.7,-0.1).curveTo(1.1,0.4,0.3,0.7).curveTo(-0.6,1.1,-1.2,1.2).lineTo(-2.5,1.3).lineTo(-2.8,1.3).closePath();
	this.shape_9.setTransform(85.9847,-192.134,0.9989,0.9989,-3.1954);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#EFC7B0").beginStroke().moveTo(0.6,-1.4).curveTo(2.2,-3.1,3.6,-4.4).lineTo(3.1,-2.2).lineTo(-3.5,4.4).curveTo(-2.5,2,0.6,-1.4).closePath();
	this.shape_10.setTransform(90.1001,-166.9488,0.9993,0.9993,-3.1949);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,0.3).curveTo(-5,0.3,-7.5,0.7).lineTo(-3.2,-0.9).curveTo(-1,-1.8,-0.4,-1.6).lineTo(2,-0.8).lineTo(3,-1.2).curveTo(4.1,-1.4,4.7,-1.1).curveTo(6,-0.2,7.2,1.4).lineTo(7.5,1.6).curveTo(3.9,0.2,-1.6,0.3).closePath();
	this.shape_11.setTransform(102.0817,-153.3394,0.9989,0.9989,-3.1954);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#A51727").beginStroke().moveTo(-2.1,0.9).lineTo(-9.4,1).lineTo(-8.8,0.9).lineTo(-6.7,0.2).lineTo(-2.3,-1.4).curveTo(-0.1,-2.3,0.5,-2.1).lineTo(2.9,-1.3).lineTo(3.9,-1.7).curveTo(5,-1.9,5.6,-1.6).curveTo(6.9,-0.7,8.1,0.9).lineTo(9.4,2.1).curveTo(5.8,1,-2.1,0.9).closePath();
	this.shape_12.setTransform(101.2119,-152.7906,0.9989,0.9989,-3.1954);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFAFAF").beginStroke().moveTo(4.6,5.7).curveTo(1.9,5.5,-1.9,5.6).curveTo(-4.3,5.7,-8.3,3.3).lineTo(-11.9,0.9).lineTo(-7.6,-2.3).curveTo(-2.6,-5.7,0.1,-5.9).curveTo(2.5,-6.1,3.2,-4.9).curveTo(3.6,-4.4,4,-4.8).curveTo(5.4,-5.9,6.9,-5.2).curveTo(8.7,-4.4,10.1,-2.6).curveTo(11.8,-0.4,11.9,2.2).curveTo(11.4,3.1,10.8,4).curveTo(9.5,5.8,8.1,5.9).lineTo(7.8,5.9).lineTo(4.6,5.7).closePath();
	this.shape_13.setTransform(100.5919,-152.697,0.9989,0.9989,-3.1954);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#080808").beginStroke().moveTo(4.7,0.2).curveTo(2.4,-1,0.2,-1.2).curveTo(-2.3,-1.5,-4.5,-0.7).lineTo(-6.8,0.3).lineTo(-9,1.5).curveTo(-8.1,0.4,-7.2,-0.4).curveTo(-5.4,-1.7,-5,-1.8).curveTo(-4.2,-2.3,-2.4,-2.7).curveTo(-0.6,-2.9,0.3,-2.8).curveTo(3.1,-2.4,5.3,-0.9).curveTo(7.7,0.8,9,2.8).curveTo(6.9,1.2,4.7,0.2).closePath();
	this.shape_14.setTransform(118.1523,-196.4569,0.9986,0.9986,-3.1955);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#080808").beginStroke().moveTo(-1,2.4).curveTo(-2.6,2,-3.5,0.6).curveTo(-4.3,-0.8,-3.9,-2.3).lineTo(-3.9,-2.5).curveTo(-0.4,-2.7,4,-0.6).lineTo(4,-0.4).curveTo(3.6,0.9,2.6,1.7).curveTo(1.5,2.4,0.2,2.5).closePath();
	this.shape_15.setTransform(118.9643,-195.6443,0.9989,0.9989,-3.1954);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.3).moveTo(-9.2,0.7).curveTo(-5.3,-4.2,2,-1.6).curveTo(5.7,-0.3,8.6,1.9).curveTo(6.5,2.4,3.2,2.5).curveTo(-3.3,2.7,-9.2,0.7).closePath();
	this.shape_16.setTransform(118.5459,-195.603,0.9989,0.9989,-3.1954);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.9,0.7).curveTo(-5,-4.2,2.3,-1.6).curveTo(6,-0.3,8.9,1.9).curveTo(6.8,2.4,3.5,2.5).lineTo(2.6,2.5).curveTo(-3.4,2.5,-8.9,0.7).closePath();
	this.shape_17.setTransform(118.2312,-195.5855,0.9989,0.9989,-3.1954);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#080808").beginStroke().moveTo(5.6,-0.5).curveTo(3.2,-1.4,0.5,-1.1).curveTo(-1.7,-0.9,-4.7,0).curveTo(-7.3,0.8,-9.9,2).curveTo(-7.9,0.1,-5.2,-1.1).curveTo(-2.2,-2.4,0.4,-2.6).curveTo(3.7,-3,6.1,-1.6).curveTo(8.7,-0.2,9.9,2.7).curveTo(7.9,0.3,5.6,-0.5).closePath();
	this.shape_18.setTransform(78.1471,-196.4431,0.9986,0.9986,-3.1955);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#080808").beginStroke().moveTo(-1.7,2.3).curveTo(-2.9,1.8,-3.6,0.6).curveTo(-4.2,-0.6,-4,-1.9).curveTo(0.7,-3,3.9,-1.9).curveTo(4.2,-1.1,3.9,-0.2).curveTo(3.4,1.8,1.5,2.5).curveTo(-0.2,2.5,-1.7,2.3).closePath();
	this.shape_19.setTransform(79.9147,-195.3831,0.9989,0.9989,-3.1954);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.3).moveTo(10.4,1.6).curveTo(7.4,-3.8,-1.2,-2).curveTo(-3.9,-1.5,-6.8,-0.3).lineTo(-9.2,0.8).lineTo(-2.1,2.1).curveTo(5.9,3.1,10.4,1.6).closePath();
	this.shape_20.setTransform(77.755,-195.2626,0.9989,0.9989,-3.1954);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.7,2.1).lineTo(-9.8,0.8).lineTo(-7.4,-0.3).curveTo(-4.5,-1.5,-1.8,-2).curveTo(6.8,-3.8,9.8,1.6).curveTo(7.1,2.5,3,2.5).curveTo(0.4,2.5,-2.7,2.1).closePath();
	this.shape_21.setTransform(78.33,-195.2947,0.9989,0.9989,-3.1954);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#EFC7B0").beginStroke().moveTo(2.1,10.2).curveTo(-0.8,8.5,-2.5,4.2).curveTo(-3.2,2.2,-3.9,-2.6).curveTo(-4.8,-8.6,-4,-10.2).curveTo(-3.5,-11,-2.6,-10.7).curveTo(-2.1,-10.4,-1.5,-9.5).curveTo(0.2,-7,1,-5.6).curveTo(2.3,-3,2.4,-1.2).lineTo(1.9,2).curveTo(1.7,3.6,2.8,5.2).curveTo(4,6.7,4.4,9).curveTo(4.6,10.8,3.6,10.8).curveTo(3.1,10.8,2.1,10.2).closePath();
	this.shape_22.setTransform(31.9268,-183.3896,0.9993,0.9993,-3.1949);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-1.2,2.8).lineTo(-4.1,1.5).curveTo(-6.2,1,-7.1,0.5).curveTo(-8.7,-0.2,-8.4,-1.8).curveTo(-8.1,-2.9,-7.4,-3.7).curveTo(-7.8,-3,-7.6,-2.1).curveTo(-7.3,-0.9,-5.7,-0.5).lineTo(-2.9,-0.1).curveTo(-2.2,0.1,-0.5,0.9).curveTo(1.1,1.6,1.9,1.7).curveTo(2.5,1.8,4,1.4).curveTo(5.4,1,6.4,0.4).curveTo(7.8,-0.4,7.6,-2.4).lineTo(8.2,-1.1).curveTo(8.7,0.4,7.8,1.4).curveTo(7.5,1.7,7,1.9).lineTo(6,2.3).lineTo(4.2,3.3).curveTo(3.4,3.7,1.8,3.7).curveTo(0.7,3.7,-1.2,2.8).closePath();
	this.shape_23.setTransform(101.1814,-168.3681,0.9993,0.9993,-3.1949);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#080808").beginStroke().moveTo(4.3,3.4).curveTo(1.7,3,-0.8,2.1).curveTo(-3,1.4,-5.5,-0.2).curveTo(-7.8,-1.6,-9.5,-3.6).lineTo(-4.8,-1.6).lineTo(-0.1,0.2).lineTo(9.5,3.5).curveTo(8.5,3.6,7.4,3.6).curveTo(6,3.6,4.3,3.4).closePath();
	this.shape_24.setTransform(118.965,-206.6343,0.9989,0.9989,-3.1954);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#080808").beginStroke().moveTo(-12.6,3.2).curveTo(-9.6,2.4,-6.2,1.7).lineTo(6.4,-1.4).curveTo(9.7,-2.4,12.6,-3.4).curveTo(10.5,-1.5,6.9,0.1).curveTo(4.3,1.2,0.6,2.2).curveTo(-2.7,2.9,-5.9,3.2).curveTo(-7.8,3.4,-9.4,3.4).curveTo(-11.1,3.4,-12.6,3.2).closePath();
	this.shape_25.setTransform(77.2227,-206.1687,0.9989,0.9989,-3.1954);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#080808").beginStroke().moveTo(0,2.7).lineTo(-0.5,-2.7).lineTo(-1,-10.2).lineTo(-0,-2.7).curveTo(0.3,-0.4,0.5,2.7).lineTo(1,10.2).closePath();
	this.shape_26.setTransform(130.3101,-228.8047,0.9981,0.9981,-3.1952);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#080808").beginStroke().moveTo(-0,1.4).lineTo(0.3,-1.4).curveTo(0.5,-3.5,0.5,-5.3).curveTo(0.6,-3.3,0.5,-1.4).curveTo(0.5,-0.2,0.3,1.4).lineTo(-0.6,5.3).curveTo(-0.2,3.2,-0,1.4).closePath();
	this.shape_27.setTransform(125.9552,-240.5577,0.9981,0.9981,-3.1952);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#080808").beginStroke().moveTo(-1,2.9).curveTo(1.3,0.8,2.9,-1.1).curveTo(5.5,-4.2,7.4,-7.6).curveTo(5.6,-3.8,3.3,-0.8).curveTo(1.6,1.4,-0.7,3.3).curveTo(-3.6,5.7,-7.4,7.6).curveTo(-3.8,5.5,-1,2.9).closePath();
	this.shape_28.setTransform(120.579,-241.5072,0.9981,0.9981,-3.1952);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#080808").beginStroke().moveTo(-2.2,3.4).curveTo(1.9,1.6,4.4,0.1).curveTo(9.3,-2.7,12,-6.5).curveTo(9.5,-2.5,4.7,0.8).curveTo(1.8,2.6,-2,3.9).curveTo(-5.6,5.2,-12,6.5).curveTo(-6.1,5,-2.2,3.4).closePath();
	this.shape_29.setTransform(100.1998,-238.1202,0.9981,0.9981,-3.1952);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#080808").beginStroke().moveTo(-16,7.5).curveTo(-21.6,7.3,-26.5,6.7).curveTo(-21.9,6.7,-16.1,6.2).curveTo(-10.8,5.9,-5.7,5).lineTo(1.6,3.9).curveTo(5.8,3.1,8.6,2.4).curveTo(9.7,2.1,11,1.6).lineTo(13.5,0.7).curveTo(15.7,-0.2,18.1,-1.5).curveTo(20.4,-2.7,22.2,-4.6).curveTo(24,-6.3,26.4,-7.6).curveTo(24.2,-6,22.6,-4.1).curveTo(20.9,-2,18.8,-0.5).curveTo(16.8,0.9,14.3,2.3).lineTo(11.9,3.6).lineTo(9.4,4.7).curveTo(3.4,7.1,-5.4,7.5).lineTo(-10.1,7.6).lineTo(-16,7.5).closePath();
	this.shape_30.setTransform(80.1104,-239.3908,0.9981,0.9981,-3.1952);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#080808").beginStroke().moveTo(-0.8,2.4).curveTo(-1.4,0.3,-1.4,-2.1).curveTo(-1.4,-5.2,-0.8,-8.4).curveTo(-1,-5.5,-0.6,-2.1).lineTo(0,2.3).curveTo(0.4,5,1.4,8.4).curveTo(-0,5.3,-0.8,2.4).closePath();
	this.shape_31.setTransform(42.7526,-190.9526,0.9981,0.9981,-3.1952);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#080808").beginStroke().moveTo(-1,11.5).curveTo(-0.1,7.9,0.3,4.9).curveTo(0.9,0.6,1.4,-4.5).curveTo(1.7,-8,1.6,-11.1).curveTo(1.6,-14.3,1.1,-17.8).curveTo(1.8,-15.1,2.5,-11.2).curveTo(3.1,-7.2,3.1,-4.4).curveTo(3.3,0.7,2,5.3).curveTo(1.1,8.4,-0.2,11.7).curveTo(-1.4,14.6,-3.1,17.8).curveTo(-1.9,14.6,-1,11.5).closePath();
	this.shape_32.setTransform(43.7865,-214.6526,0.9981,0.9981,-3.1952);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#080808").beginStroke().moveTo(0.4,2.8).lineTo(-0.1,-3).curveTo(-0.5,-7.2,-1.5,-11.1).curveTo(0.1,-7,0.9,-3.1).curveTo(1.6,-0.1,1.5,2.8).curveTo(1.3,7.3,0.5,11.1).curveTo(0.8,7.2,0.4,2.8).closePath();
	this.shape_33.setTransform(46.248,-223.0373,0.9981,0.9981,-3.1952);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-9.2,2.3).lineTo(-7.1,-0.9).curveTo(-4.1,-4,0.4,-3.6).curveTo(4.8,-3.1,7.4,0.3).curveTo(8.7,2,9.2,3.6).closePath();
	this.shape_34.setTransform(118.1916,-197.192,0.9989,0.9989,-3.1954);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-10,3).lineTo(-7.1,-0.4).curveTo(-3.3,-3.7,1.3,-3.6).curveTo(5.7,-3.5,8.3,0.1).curveTo(9.6,1.9,10,3.6).closePath();
	this.shape_35.setTransform(78.1413,-197.3301,0.9989,0.9989,-3.1954);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#FDE4C8").beginStroke().moveTo(18.3,60.2).curveTo(11,59.9,4.2,56.5).curveTo(-6.4,51.2,-16.5,44.3).curveTo(-30,35.1,-33.1,28.9).curveTo(-36,22.9,-37.3,17.6).lineTo(-37.9,13.5).curveTo(-40.9,13.4,-44.3,11.7).curveTo(-51.1,8.1,-53.4,-0.4).curveTo(-55.9,-10.2,-54.9,-15.5).curveTo(-53.9,-20.3,-50.1,-20.6).curveTo(-46.8,-20.8,-44.8,-18.4).curveTo(-43.3,-16.7,-41.9,-12.8).curveTo(-39.8,-7.3,-39.6,-4.6).curveTo(-39.5,-4,-39.2,-3.6).lineTo(-38.5,-2.9).lineTo(-38.8,-4.9).lineTo(-38.2,-3.8).curveTo(-37.9,-3.2,-37.4,-2.7).lineTo(-37.7,-4.9).lineTo(-36.8,-3.5).curveTo(-36.3,-2.9,-34.4,-1.9).curveTo(-35,-3,-35,-4.7).curveTo(-35.3,-18,-33.5,-21.8).curveTo(-30.6,-28,-29.9,-38.4).curveTo(-29.4,-46.4,-30.2,-51.3).lineTo(-21.4,-50.7).curveTo(-11.2,-50.2,-3.7,-50.4).curveTo(4.4,-50.7,13.9,-52.5).curveTo(20.6,-53.8,20.4,-53.6).curveTo(18.4,-51.9,14.2,-49.8).curveTo(12.4,-48.9,10.2,-48.1).lineTo(8.3,-47.5).curveTo(15.8,-47.8,24.8,-51.1).curveTo(29.2,-52.7,32.2,-54.2).lineTo(24.9,-46.8).curveTo(27.8,-47.3,35,-51.7).curveTo(38.7,-53.8,41.7,-55.9).lineTo(34.5,-47.6).lineTo(37.4,-48.9).curveTo(41,-50.7,44.2,-53).curveTo(47.4,-55.4,49.8,-58).curveTo(51,-59.4,51.5,-60.2).curveTo(51.3,-50.9,51.6,-54.8).lineTo(51.2,-47.4).lineTo(53.5,-53.5).lineTo(54,-49.8).lineTo(54.6,-43.2).curveTo(55.2,-34.1,55.2,-30.9).curveTo(55.2,-25.6,54.3,-19.1).curveTo(53.8,-15.6,53.6,-6.1).curveTo(53.5,4.5,53.2,7.4).lineTo(52.8,15.1).curveTo(51.1,24.9,45.4,35.6).curveTo(40.4,44.9,36.2,50.3).curveTo(33.4,53.9,29.8,57.1).curveTo(26.2,60.2,19.5,60.2).lineTo(18.3,60.2).closePath();
	this.shape_36.setTransform(78.0472,-183.2801,0.9989,0.9989,-3.1954);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#080808").beginStroke().moveTo(0.4,4.1).curveTo(1.1,0.9,1.6,-3.7).curveTo(2.3,-9.4,2,-14.8).curveTo(2.6,-9,2.3,-3.6).curveTo(2.1,0.4,1.1,4.3).curveTo(-0.1,9.7,-2.4,14.8).curveTo(-0.5,9.5,0.4,4.1).closePath();
	this.shape_37.setTransform(137.8498,-233.3743,0.9981,0.9981,-3.1952);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#080808").beginStroke().moveTo(-9.4,-2.3).curveTo(-6.4,-4.7,-3.4,-6.2).curveTo(-0.5,-7.7,3.2,-9).curveTo(13.3,-12.5,22.7,-12.5).curveTo(13.5,-12,3.6,-7.8).lineTo(-2.8,-4.8).curveTo(-5.3,-3.6,-8.7,-1.2).curveTo(-16.6,4.4,-22.7,12.5).curveTo(-17.1,3.9,-9.4,-2.3).closePath();
	this.shape_38.setTransform(30.2676,-273.5783,0.9981,0.9981,-3.1952);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#080808").beginStroke().moveTo(-14.7,-0.4).curveTo(-10.2,-1.5,-6.3,-2.1).curveTo(-0.3,-2.9,6.1,-2.3).curveTo(9,-2,14.5,-1).curveTo(18.6,-0.2,22.9,1.1).curveTo(19,0.2,14.5,-0.5).curveTo(9.9,-1,6,-1.2).curveTo(-0.4,-1.3,-6.2,-1).curveTo(-10.3,-0.7,-14.6,0.2).curveTo(-18.7,1,-22.9,2.5).curveTo(-19.1,0.9,-14.7,-0.4).closePath();
	this.shape_39.setTransform(57.7801,-288.4135,0.9981,0.9981,-3.1952);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#080808").beginStroke().moveTo(16.3,1.7).curveTo(11.2,0.1,7.2,-0.9).curveTo(1.3,-2.3,-6.1,-3.6).curveTo(-9.9,-4.2,-15.6,-4.6).curveTo(-19.8,-4.9,-25.2,-4.7).curveTo(-19.8,-5.3,-15.6,-5.2).curveTo(-10.8,-5.2,-6,-4.8).curveTo(0.9,-4.2,7.5,-2.2).curveTo(12,-0.8,16.5,1.1).curveTo(20.7,2.8,25.2,5.3).curveTo(20.6,3.2,16.3,1.7).closePath();
	this.shape_40.setTransform(77.788,-288.6021,0.9981,0.9981,-3.1952);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#080808").beginStroke().moveTo(14.7,4).curveTo(11.7,1,7.9,-1.5).curveTo(3.1,-4.6,-2.9,-7.2).curveTo(-6.6,-8.8,-11.2,-9.8).curveTo(-15.5,-10.6,-20,-10.7).curveTo(-14.9,-11.2,-11.1,-10.9).curveTo(-6,-10.5,-2.2,-9.3).curveTo(4.3,-7.6,9.3,-3.3).curveTo(12.9,-0.3,15.6,3.3).curveTo(18.3,7,20,11).curveTo(17.8,7.3,14.7,4).closePath();
	this.shape_41.setTransform(103.9569,-280.9473,0.9981,0.9981,-3.1952);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#080808").beginStroke().moveTo(6.2,1.6).curveTo(4.8,0.5,3.2,-0.5).curveTo(1.2,-1.7,-1.5,-2.8).curveTo(-5.1,-4.2,-8.8,-4.3).curveTo(-5.1,-4.7,-1.3,-3.7).curveTo(1.5,-3,3.8,-1.3).curveTo(5.2,-0.3,6.6,1.3).curveTo(7.9,2.7,8.8,4.4).curveTo(7.5,2.7,6.2,1.6).closePath();
	this.shape_42.setTransform(130.1236,-264.8273,0.9981,0.9981,-3.1952);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#080808").beginStroke().moveTo(7.7,5.7).curveTo(6.8,3.3,5.1,1).curveTo(2.9,-1.9,0,-4.7).curveTo(-4.1,-8.7,-8.8,-11.1).curveTo(-3.5,-9.2,1,-5.8).curveTo(4.3,-3.3,6.3,0.3).curveTo(7.8,2.9,8.4,5.5).curveTo(9.1,8.5,8.6,11.1).curveTo(8.7,8.5,7.7,5.7).closePath();
	this.shape_43.setTransform(131.4773,-259.6848,0.9981,0.9981,-3.1952);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#080808").beginStroke().moveTo(4.6,7.6).curveTo(3.9,4.5,3.2,2.6).curveTo(2.3,-0.2,0.5,-4.2).curveTo(-1.8,-9,-5.3,-12.9).curveTo(-1.1,-9.4,1.7,-4.9).curveTo(3.8,-1.5,4.6,2.2).curveTo(5,4.5,5.3,7.6).curveTo(5.4,10.4,5.1,12.9).curveTo(5,10.1,4.6,7.6).closePath();
	this.shape_44.setTransform(121.2819,-273.0111,0.9981,0.9981,-3.1952);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#080808").beginStroke().moveTo(-4.1,9.6).curveTo(-7.7,2.1,-8.4,-5.6).curveTo(-9.5,-16.8,-6.2,-27.3).curveTo(-8.4,-16.7,-6.3,-5.9).curveTo(-4.8,1.6,-2.1,8.8).curveTo(1.9,19.5,8.7,27.3).curveTo(1.1,20,-4.1,9.6).closePath();
	this.shape_45.setTransform(17.5695,-205.0667,0.9981,0.9981,-3.1952);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#080808").beginStroke().moveTo(-6.5,5.9).curveTo(-5.7,-1.7,-3.2,-8.6).curveTo(-1,-14.6,1.1,-18.2).curveTo(3.9,-23.3,7,-26.6).curveTo(4.1,-23.2,1.7,-17.9).curveTo(-0.2,-14.1,-1.9,-8.2).curveTo(-3.8,-1.3,-5.2,6.1).curveTo(-7.2,18.1,-5.6,26.6).curveTo(-7.8,18.1,-6.5,5.9).closePath();
	this.shape_46.setTransform(10.7279,-239.3984,0.9981,0.9981,-3.1952);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#080808").beginStroke().moveTo(-4.9,1.9).curveTo(-3.5,-2,-0.9,-5).curveTo(1.6,-8.1,7,-12.7).curveTo(2.2,-7.2,0.2,-4.2).curveTo(-2.1,-0.5,-3.6,2.4).curveTo(-6,7.1,-7,12.7).curveTo(-6.7,7,-4.9,1.9).closePath();
	this.shape_47.setTransform(9.8252,-252.9685,0.9981,0.9981,-3.1952);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-1.3,0.9).lineTo(-2.3,-4.7).curveTo(-2.3,-4.8,3.6,-11.3).lineTo(3.8,-11.5).lineTo(0.7,-5.4).lineTo(0.6,0.1).curveTo(-0.2,6.5,-3.8,11.5).curveTo(-0.8,7.2,-1.3,0.9).closePath();
	this.shape_48.setTransform(93.5926,-108.2769,0.9989,0.9989,-3.1954);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-17.5,14.7).curveTo(-24.3,4.1,-28.2,-5.7).curveTo(-30.2,-10.9,-31.9,-17.4).curveTo(-28.8,-25.5,-26.9,-33.5).lineTo(-3.9,-24.2).lineTo(18.5,-31.5).lineTo(31.9,1.4).lineTo(18.6,27.3).curveTo(14.9,32.4,8.5,33.3).curveTo(7.4,33.5,6.3,33.5).curveTo(-5.5,33.5,-17.5,14.7).closePath();
	this.shape_49.setTransform(73.845,-139.8871,0.9989,0.9989,-3.1954);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-16.2,57.1).curveTo(-25.4,52.8,-32.1,44.5).curveTo(-38.8,36.3,-40.3,27.7).curveTo(-41.9,18.6,-36.8,12.6).curveTo(-22.6,-4.1,-16.8,-35.5).curveTo(12.8,-59.6,13.1,-60.6).curveTo(13.3,-61.2,27,-27.4).lineTo(40.7,6.4).lineTo(27.5,32.3).lineTo(27.6,36).curveTo(27.4,40.4,25.8,44.3).curveTo(20.6,57,3.6,60.1).curveTo(0.9,60.6,-1.8,60.6).curveTo(-8.9,60.6,-16.2,57.1).closePath();
	this.shape_50.setTransform(64.725,-144.3665,0.9989,0.9989,-3.1954);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#080808").beginStroke().moveTo(1.7,3.9).curveTo(0.2,-0.3,-1,-4.2).curveTo(-2.6,-9.7,-5.1,-15.5).curveTo(-2,-10.2,0.5,-4.8).curveTo(2.3,-0.9,3.2,3.5).curveTo(4.6,9.6,5.1,15.5).curveTo(3.7,9.6,1.7,3.9).closePath();
	this.shape_51.setTransform(31.9472,-168.2816,0.9981,0.9981,-3.1952);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#080808").beginStroke().moveTo(-22.8,76.7).curveTo(-30.6,68.5,-31.3,64.2).curveTo(-31.6,62,-35.9,53.8).lineTo(-45.6,35.7).curveTo(-60.4,7.8,-64.7,-7.3).curveTo(-69.3,-23.6,-65.5,-39.6).curveTo(-63.6,-47.6,-60.8,-52.3).lineTo(-67.8,-44.8).curveTo(-58.2,-67.3,-35,-76.6).curveTo(-23.4,-81.2,-13.7,-81.4).lineTo(-27.1,-81.4).lineTo(-24,-82.3).curveTo(-19.9,-83.3,-14.8,-83.7).curveTo(1.4,-85,21.4,-80.3).curveTo(41.4,-75.6,50.2,-66.1).curveTo(54.7,-61.4,55.1,-57.6).lineTo(56.5,-56.8).curveTo(58.2,-55.7,59.9,-54.1).curveTo(65.1,-49.1,67.2,-41.1).curveTo(69.3,-33,63.2,-11.3).curveTo(60.2,-0.4,56.7,8.9).lineTo(-15.2,83.9).curveTo(-18.9,80.7,-22.8,76.7).closePath();
	this.shape_52.setTransform(74.5482,-208.0236,0.9989,0.9989,-3.1954);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-69,53.1).lineTo(20.1,-62.5).lineTo(22.9,-59.2).lineTo(33.3,-49.2).lineTo(69,-33.9).curveTo(66.4,-21.4,55.6,-10.7).curveTo(50.1,-5.4,45.2,-2.6).lineTo(-15.1,62.6).closePath();
	this.shape_53.setTransform(-75.9878,-45.7822,0.9997,0.9997,-3.1956);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#FDE4C8").beginStroke().moveTo(6.6,28.1).curveTo(-42.3,11.9,-62.3,-14.5).lineTo(-52.4,-37.1).lineTo(-36.9,-22.3).lineTo(-37.4,-23.5).lineTo(-12.9,-39).lineTo(-7.7,-35.4).curveTo(-0.7,-30.2,8,-22.1).curveTo(21.2,-9.9,37.7,0.5).curveTo(53.2,10.4,62.3,13.1).lineTo(60.1,23).curveTo(57,34,51.5,39).curveTo(31,36.2,6.6,28.1).closePath();
	this.shape_54.setTransform(-77.1624,52.8755,0.9997,0.9997,-3.1956);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-15.7,21.2).curveTo(-24.5,14.7,-26.1,3.9).curveTo(-27.7,-6.9,-21.2,-15.7).curveTo(-14.7,-24.5,-3.9,-26.1).curveTo(6.9,-27.7,15.7,-21.2).curveTo(24.5,-14.7,26.1,-3.9).curveTo(27.7,6.9,21.2,15.7).curveTo(14.7,24.5,3.9,26.1).curveTo(1.8,26.4,-0.3,26.4).curveTo(-8.6,26.4,-15.7,21.2).closePath();
	this.shape_55.setTransform(-119.6697,25.2632,0.9997,0.9997,-3.1956);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#E0B5A0").beginStroke().moveTo(14,8.1).curveTo(11.4,8,8.5,7.3).lineTo(6.4,6.8).lineTo(-2,3.5).lineTo(-12.3,-0.9).lineTo(-17.4,-3.3).curveTo(-18.8,-3.9,-19.3,-5.3).curveTo(-19.8,-6.4,-19.4,-8.1).curveTo(-19.6,-6.5,-19.1,-5.4).curveTo(-18.4,-4.1,-17.2,-3.7).curveTo(-14.9,-2.7,-12,-1.6).lineTo(7.3,6.2).lineTo(8.6,6.6).curveTo(11.3,7.4,14.1,7.7).curveTo(17.4,8,19.6,7.4).curveTo(17.8,8.1,15.2,8.1).lineTo(14,8.1).closePath();
	this.shape_56.setTransform(38.1028,86.192,0.9993,0.9993,-3.1949);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#E0B5A0").beginStroke().moveTo(-17.5,2.1).curveTo(-18.9,1,-19.8,-0.7).curveTo(-20.8,-2.7,-20.7,-4.4).curveTo(-20.6,-5.5,-20,-6.2).curveTo(-19.3,-6.9,-18,-6.9).lineTo(-16.2,-6.6).lineTo(-7.3,-4.9).curveTo(-3.4,-4.1,-0.3,-3.3).lineTo(13.7,0.1).curveTo(15.3,0.6,17.2,1).curveTo(19.4,1.2,20.8,0.9).curveTo(19.5,1.3,17.2,1.1).curveTo(15.5,1,13.6,0.6).lineTo(6.6,-0.9).curveTo(-2.8,-3.1,-7.5,-4).lineTo(-16.4,-5.8).curveTo(-17.5,-6.1,-18,-6.1).curveTo(-18.9,-6.2,-19.4,-5.6).curveTo(-19.9,-5.2,-20,-4.3).curveTo(-20.2,-2.8,-19.3,-0.9).curveTo(-18.5,0.6,-17.2,1.8).curveTo(-14.5,4.3,-12.1,6.9).lineTo(-17.5,2.1).closePath();
	this.shape_57.setTransform(38.6886,83.8141,0.9993,0.9993,-3.1949);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#E0B5A0").beginStroke().moveTo(7.3,11.1).curveTo(6.1,11,3.8,10.5).lineTo(3.7,10.5).lineTo(3.7,10.4).lineTo(-12.9,2.2).curveTo(-14.1,1.4,-16.4,-1).curveTo(-18.1,-2.8,-19.2,-4.7).curveTo(-19.9,-5.9,-20.2,-6.9).curveTo(-20.4,-7.8,-20.1,-8.4).curveTo(-19.8,-9,-19.2,-9.4).curveTo(-18.1,-10.3,-16.6,-9.9).lineTo(-15.5,-9.4).lineTo(0.1,-1.8).curveTo(0.9,-1.5,2.2,-1.3).curveTo(4.3,-1.1,6.8,-1.3).curveTo(9.4,-1.4,11.3,-1.8).lineTo(11.7,-2).lineTo(12.1,-2.3).lineTo(13.8,-5.3).lineTo(15.6,-9.5).lineTo(15.6,-9.6).lineTo(15.7,-9.6).lineTo(20.3,-11.2).lineTo(15.8,-9.4).lineTo(14.1,-5.1).lineTo(13.1,-3).lineTo(12.5,-2).lineTo(12,-1.6).curveTo(11.8,-1.4,11.4,-1.3).curveTo(9.6,-0.8,6.8,-0.6).curveTo(4.2,-0.4,2.1,-0.6).curveTo(0.5,-0.8,-0.3,-1.1).lineTo(-16.9,-9).curveTo(-18,-9.2,-18.7,-8.7).curveTo(-19,-8.5,-19.3,-8).curveTo(-19.4,-7.7,-19.3,-7.1).curveTo(-19.1,-6.5,-18.4,-5.2).curveTo(-17.5,-3.6,-15.7,-1.5).curveTo(-13.8,0.6,-12.4,1.5).lineTo(3.9,10.1).curveTo(6,10.7,7.3,10.9).curveTo(9.4,11.2,10.6,11).lineTo(9,11.2).lineTo(7.3,11.1).closePath();
	this.shape_58.setTransform(47.4914,73.2945,0.9993,0.9993,-3.1949);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#E0B5A0").beginStroke().moveTo(-10.5,13).curveTo(-14.1,11.7,-17.6,9.5).lineTo(-17.7,9.5).lineTo(-17.7,9.5).lineTo(-19.3,7.3).lineTo(-19.2,7.4).lineTo(-28.4,1).lineTo(-18.9,6.9).lineTo(-18.9,6.9).lineTo(-18.9,7).lineTo(-17.2,9.1).curveTo(-13.9,10.9,-10.2,12.2).curveTo(-6,13.7,-2.7,13.8).curveTo(-0.6,13.9,1.1,13.4).curveTo(3.3,12.9,4.8,12.3).curveTo(7.5,11.3,11.8,8.7).curveTo(13.4,7.7,15.3,6.8).curveTo(17.1,6.1,18.7,5).curveTo(22.3,2.9,24.5,0.1).curveTo(27,-3.1,27.7,-6.9).curveTo(28,-9,27.9,-10.8).lineTo(27.8,-14.7).lineTo(28.3,-10.8).curveTo(28.5,-8.9,28.2,-6.8).curveTo(27.7,-2.9,25.1,0.5).curveTo(22.9,3.5,19.2,5.8).curveTo(17.7,6.7,15.6,7.6).curveTo(14.3,8.2,12.2,9.5).curveTo(4.1,14.7,-2.7,14.7).curveTo(-6.3,14.5,-10.5,13).closePath();
	this.shape_59.setTransform(54.804,89.8206,0.9993,0.9993,-3.1949);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-3.6,25.7).lineTo(-11.3,23.3).lineTo(-30.4,7.3).lineTo(-32.2,3.1).lineTo(-31.9,-0).lineTo(-30.5,-1).lineTo(1.4,6).lineTo(-6.5,2.2).curveTo(-14.5,-1.8,-15,-2.3).curveTo(-17.5,-4.5,-19.4,-6.6).curveTo(-23.1,-10.7,-22,-12.5).curveTo(-21,-14.4,-18.6,-13.6).curveTo(-17.3,-13.2,-16.3,-12.4).lineTo(-11.3,-10.1).curveTo(-5.8,-7.6,-3.6,-6.4).curveTo(-1.3,-5.1,3.3,-5).curveTo(7.2,-4.9,8.8,-5.6).curveTo(10.5,-6.3,13.3,-13.7).lineTo(2.9,-16.1).curveTo(-2.6,-17.3,-4.1,-22.9).curveTo(-4.7,-25.1,-4,-26.2).curveTo(-3.2,-27.3,-1.4,-26.3).curveTo(5.3,-22.4,18.4,-24.5).curveTo(22.9,-25.2,25.5,-19.5).lineTo(27.4,-14.2).curveTo(28.7,-10.9,29.8,-9.2).curveTo(32.2,-5.5,32.2,1.6).curveTo(32.1,5.2,31.6,8.3).curveTo(31.3,10.6,28.3,13.7).curveTo(26.7,15.3,25.3,16.4).curveTo(14.8,22.8,8.6,25.8).curveTo(6.8,26.8,3.9,26.8).curveTo(0.8,26.8,-3.6,25.7).closePath();
	this.shape_60.setTransform(50.1866,77.4843,0.9997,0.9997,-3.1956);

	this.instance_6 = new lib.Path_10();
	this.instance_6.setTransform(-5.35,64.7,0.9997,0.9997,-3.1956,0,0,69,53.7);
	this.instance_6.alpha = 0.2109;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Path_11();
	this.instance_7.setTransform(16.05,-25.1,0.9997,0.9997,-3.1956,0,0,101.5,110.1);
	this.instance_7.alpha = 0.2109;
	this.instance_7.compositeOperation = "multiply";

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#477A8E").beginStroke().moveTo(8.5,109.5).curveTo(-17.9,107.4,-42.1,102.5).curveTo(-71.3,96.6,-87.1,88.4).curveTo(-105.9,78.6,-102.7,66.7).lineTo(-102.4,65.6).curveTo(-96.5,44.3,-86.4,10.7).lineTo(-77.5,-18.6).curveTo(-67.6,-15.2,-56.7,-17.4).curveTo(-46.5,-19.4,-37.1,-26.1).curveTo(-27.9,-32.5,-21.4,-41.9).curveTo(-14.8,-51.6,-12.6,-62.1).curveTo(-8.4,-82.2,-13.4,-98.4).curveTo(-14.9,-103.4,-17.2,-107.5).lineTo(-19.1,-110.5).curveTo(-9.7,-110.2,5.5,-107.3).curveTo(7.8,-104.1,10.4,-94.6).curveTo(14.4,-79.8,13.7,-62.6).curveTo(12.8,-39.4,21.9,-30.2).curveTo(25.7,-26.3,32.5,-23.4).curveTo(35.7,-22,46.3,-18.6).curveTo(62.9,-13.2,70.9,-16).curveTo(80.3,-19.3,83.7,-35.2).curveTo(87.3,-52.2,85,-70).curveTo(84.3,-75.6,83,-80.6).lineTo(81.9,-84.5).lineTo(96.8,-78.4).curveTo(100.4,-72.8,102.3,-58).curveTo(104.7,-40.3,100.8,-27.9).curveTo(96.5,-14.5,87.5,5.5).curveTo(76.4,30.1,65.1,48.2).curveTo(54.7,64.9,46.9,89).curveTo(43,101.1,41.1,109.9).curveTo(37.2,110.5,30.2,110.5).curveTo(21.7,110.5,8.5,109.5).closePath();
	this.shape_61.setTransform(17.1225,-24.6513,0.9997,0.9997,-3.1956);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#D5A690").beginStroke().moveTo(16.2,2.5).lineTo(14,1.5).lineTo(9.5,-0.1).curveTo(4.9,-1.5,0.1,-1.4).curveTo(-4.5,-1.4,-9.3,0).curveTo(-11.9,0.8,-13.9,1.6).lineTo(-16.2,2.6).curveTo(-17.6,3.3,-18.5,3.5).lineTo(-14.4,0.7).curveTo(-12.1,-0.7,-9.9,-1.5).curveTo(-5.2,-3.4,0,-3.5).lineTo(2.6,-3.4).lineTo(5.1,-3.1).curveTo(8.7,-2.3,10,-1.7).curveTo(11.2,-1.3,14.5,0.5).lineTo(16.5,2).lineTo(18.5,3.5).closePath();
	this.shape_62.setTransform(96.0833,20.4825,0.9993,0.9993,-3.1949);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-27.2,27).curveTo(-36,14.5,-30.3,6.5).curveTo(-27.8,3,-23.1,-6.7).curveTo(-17.6,-17.9,-14.8,-22.6).curveTo(-3.7,-41.1,8.1,-37.2).lineTo(26.4,-26.9).lineTo(28.4,-24.1).curveTo(30.5,-20.6,31.6,-16.6).curveTo(35,-3.7,26.4,9.4).curveTo(17.8,22.4,-0.6,31.4).curveTo(-9.8,36,-17.3,37.9).curveTo(-22.8,33.3,-27.2,27).closePath();
	this.shape_63.setTransform(88.8204,50.0264,0.9997,0.9997,-3.1956);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#D5A690").beginStroke().moveTo(1.4,-6.8).curveTo(2.5,-6.6,4.4,-8).curveTo(8.1,-10.7,11.8,-18.5).curveTo(13.5,-22,10.6,-13.2).lineTo(7.3,-3.6).lineTo(-12.5,19.5).closePath();
	this.shape_64.setTransform(107.8534,-37.1071,0.9997,0.9997,-3.1956);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#D5A690").beginStroke().moveTo(-26.8,48.2).curveTo(-34.7,46.5,-41.5,37).curveTo(-47.3,28.8,-47.3,24.1).curveTo(-47.3,19.4,-39.7,-5.1).curveTo(-32.2,-29.5,-32.2,-19.8).curveTo(-32.3,-14.4,-27.3,-8.5).curveTo(-22.5,-2.8,-14.5,1.9).curveTo(3.9,12.5,21.8,10.2).curveTo(37.2,8.2,39.7,-20.5).curveTo(40.5,-29.6,39.8,-40.3).curveTo(39.4,-48,39,-49.6).lineTo(47.3,-44.3).lineTo(47.3,-25.7).curveTo(47.2,-6.2,46.5,-2).curveTo(45.6,3.5,35.5,18.4).curveTo(24.9,34.2,16.6,40.9).curveTo(8.6,47.5,-5.1,49.1).curveTo(-9.3,49.6,-13.3,49.6).curveTo(-20.2,49.6,-26.8,48.2).closePath();
	this.shape_65.setTransform(60.2084,-55.9229,0.9997,0.9997,-3.1956);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-27.8,51.2).lineTo(-24,-58.7).lineTo(24.1,-60.4).lineTo(25.4,-57).curveTo(26.8,-52.5,27.4,-47.2).curveTo(29.2,-30.4,21.9,-11.6).lineTo(12,60.4).closePath();
	this.shape_66.setTransform(102.5405,-31.6462,0.9997,0.9997,-3.1956);

	this.instance_8 = new lib.Path_18();
	this.instance_8.setTransform(0.95,119.85,0.9997,0.9997,-3.1956,0,0,98.4,77.9);
	this.instance_8.alpha = 0.2109;
	this.instance_8.compositeOperation = "multiply";

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#477A8E").beginStroke().moveTo(0.6,72.9).curveTo(-48.6,71.2,-97.8,69.3).curveTo(-102,8.9,-90.9,-39.3).curveTo(-87.4,-54.4,-82.8,-66.4).lineTo(-78.9,-75.4).lineTo(74.6,-30.5).curveTo(73.6,-6.7,86.2,36.1).curveTo(92.5,57.6,99,75.2).curveTo(99,75.4,93.8,75.4).curveTo(76.4,75.4,0.6,72.9).closePath();
	this.shape_67.setTransform(1.2682,118.5446,0.9997,0.9997,-3.1956);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-22.6,22.6).curveTo(-31.9,13.3,-31.9,0).curveTo(-31.9,-13.2,-22.6,-22.6).curveTo(-13.2,-31.9,0,-31.9).curveTo(13.3,-31.9,22.6,-22.6).curveTo(32,-13.2,32,0).curveTo(32,13.3,22.6,22.6).curveTo(13.3,32,0,32).curveTo(-13.2,32,-22.6,22.6).closePath();
	this.shape_68.setTransform(94.4023,-79.6243,0.9997,0.9997,-3.1956);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#D5A690").beginStroke().moveTo(-9.6,81.8).curveTo(-15.3,80.9,-24.7,59.1).lineTo(-33,37.4).lineTo(-35.3,14.9).lineTo(-19.6,-2.3).lineTo(-16.7,-2.8).curveTo(-13.1,-3.6,-9.8,-5).curveTo(0.9,-9.6,5.7,-19).lineTo(4.4,-16.2).curveTo(2.7,-12.8,0.7,-9.9).curveTo(-5.7,-0.3,-13.1,1.6).curveTo(-11.9,2.1,-6.7,-0.4).curveTo(4.3,-5.8,11.3,-17.8).curveTo(19.3,-31.5,19.4,-48.9).curveTo(19.6,-65.6,12.5,-81.9).lineTo(23.4,-76.8).curveTo(34.2,-71.6,34.4,-70.6).curveTo(35.3,-64.8,35.3,-8.4).curveTo(35.3,53.1,31.7,55.8).curveTo(28.8,57.9,12.3,70.8).curveTo(-2.7,81.9,-8.8,81.9).lineTo(-9.6,81.8).closePath();
	this.shape_69.setTransform(-16.1033,-51.8253,0.9997,0.9997,-3.1956);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-22.6,27).curveTo(-35.2,20.9,-35.2,8.8).curveTo(-35.2,-4.6,-22.6,-18.2).curveTo(-9.8,-32,3.3,-32).curveTo(16.5,-32,25.9,-22.6).curveTo(35.2,-13.2,35.2,-0).curveTo(35.2,13.3,25.9,22.6).curveTo(16.5,31.9,3.3,31.9).curveTo(-12.3,31.9,-22.6,27).closePath();
	this.shape_70.setTransform(-31.9343,-100.4538,0.9997,0.9997,-3.1956);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-87,62).curveTo(-92,58.4,-92.6,50.1).curveTo(-93.4,38.4,-85,18.8).curveTo(-84.3,17.2,-70.2,-35.9).lineTo(-65,-61.6).lineTo(-59.6,-62).curveTo(-52.7,-62.4,-45.4,-62.2).curveTo(-21.9,-61.5,-2.8,-55.6).lineTo(61.6,-35.9).lineTo(65.6,-33.9).curveTo(70.4,-31.2,74.7,-28).curveTo(88.5,-17.8,91.9,-5.7).curveTo(95.6,7.5,82.3,19.7).curveTo(78,23.7,72.4,27).curveTo(68.5,29.3,66.7,30).curveTo(66,30.2,64,33.6).lineTo(59.7,40.7).curveTo(52.9,50.8,46.9,50.8).curveTo(37.9,50.8,18.4,48.3).curveTo(-3.3,45.5,-12.1,42.5).curveTo(-19.1,40,-52.5,51.9).lineTo(-75,59.8).curveTo(-82.7,62.3,-85.6,62.3).curveTo(-86.6,62.3,-87,62).closePath();
	this.shape_71.setTransform(34.722,-74.3026,0.9997,0.9997,-3.1956);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.instance_8},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.instance_7},{t:this.instance_6},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},16).to({state:[]},4).wait(34));

	// Layer_13
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#E0B5A0").beginStroke().moveTo(5.9,13).curveTo(4.9,12.9,2.9,12.4).curveTo(-1.2,11.2,-7.9,8.6).lineTo(-18.4,4.3).curveTo(-29.1,-0.3,-39,-5.2).lineTo(-18,3.1).lineTo(-7.3,7.2).curveTo(-0.8,9.5,3.4,10.7).curveTo(4.9,11.1,6.1,11.2).lineTo(6.6,11.3).lineTo(7.1,11.1).lineTo(8.5,10.9).curveTo(10.6,10.3,13.9,9.3).curveTo(17.5,8.1,19.1,7.4).curveTo(21,6.6,21.3,6.2).lineTo(33.8,-7.9).lineTo(24.2,-0.4).lineTo(31.3,-6.7).lineTo(38.3,-13).lineTo(38.3,-13.1).lineTo(39.1,-12.3).lineTo(22.6,7.3).curveTo(22.1,7.8,21.2,8.3).lineTo(19.9,9).curveTo(17.4,10.1,14.4,11).curveTo(11.1,12,8.9,12.6).lineTo(6.7,13).lineTo(5.9,13).closePath();
	this.shape_72.setTransform(17.5,105);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#E0B5A0").beginStroke().moveTo(-1.8,7.8).lineTo(-1.7,7.8).lineTo(-1.5,7.7).lineTo(11.2,-3.4).lineTo(15.4,-7.1).lineTo(15.7,-7.4).lineTo(15.8,-7.7).curveTo(15.8,-8.3,15.6,-8.8).curveTo(15.3,-9.8,14.7,-10.7).lineTo(5.2,-4.9).lineTo(15,-12.4).lineTo(15.3,-11.9).curveTo(16.4,-10.6,16.9,-9.4).curveTo(17.3,-8.5,17.3,-7.7).curveTo(17.3,-7.2,17.1,-6.7).lineTo(16.8,-6.3).lineTo(16.5,-6).lineTo(12.3,-2.1).curveTo(8.8,1,3.8,5.2).lineTo(-0.8,9).lineTo(-1.4,9.3).lineTo(-6.2,10.4).curveTo(-12.9,11.7,-17.3,12.4).closePath();
	this.shape_73.setTransform(40.975,97.95);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#E0B5A0").beginStroke().moveTo(13.1,16.4).lineTo(30.3,5.1).lineTo(31.5,3.1).curveTo(30.9,2.1,30.2,1.6).curveTo(29.7,1.2,29.3,1.1).lineTo(29.1,1.1).lineTo(28.3,1.3).curveTo(25.8,2,23.1,3).lineTo(11.5,7.4).curveTo(10.5,7.8,9.9,7.8).curveTo(8.5,7.9,6.9,7.2).curveTo(4.6,6.1,2.1,3.8).curveTo(-1.6,0.4,-5.2,-4.7).lineTo(-5.9,-5.7).lineTo(12.2,-10.9).curveTo(13.1,-11.1,13.5,-11.4).curveTo(14.7,-12.1,15.2,-13.3).curveTo(15.5,-14.4,15.3,-15.6).lineTo(-9.4,-16.8).lineTo(-12.6,-17).curveTo(-13.7,-17.1,-15.6,-16.7).curveTo(-18,-16.3,-21.6,-14.9).curveTo(-26.4,-13.1,-33.2,-9.7).lineTo(-33.2,-9.8).curveTo(-27.5,-13,-21.8,-15.5).curveTo(-18,-17,-15.8,-17.6).curveTo(-14.1,-18,-12.6,-17.9).lineTo(-9.4,-17.8).lineTo(16,-17.1).lineTo(16.5,-17).lineTo(16.7,-16.5).curveTo(17.1,-14.5,16.7,-12.9).curveTo(16.1,-10.9,14.3,-10).curveTo(13.7,-9.6,12.7,-9.3).lineTo(-3,-4.7).curveTo(0.3,-0.2,3.3,2.6).curveTo(5.6,4.7,7.5,5.6).curveTo(8.9,6.2,9.8,6.1).curveTo(10.4,6.1,10.9,5.8).lineTo(22.5,1.5).lineTo(27.9,-0.2).lineTo(29.1,-0.4).lineTo(29.6,-0.4).curveTo(30.3,-0.2,31.2,0.4).curveTo(32.4,1.5,33,2.8).lineTo(33.2,3.2).lineTo(31.4,6).lineTo(31.2,6.2).lineTo(13.5,17.2).lineTo(13.3,17.3).lineTo(-6,18).closePath();
	this.shape_74.setTransform(25.05,80.7972);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-14.7,17.8).lineTo(-38.4,7.9).lineTo(-44.6,-3.2).lineTo(-27.7,-15.7).lineTo(-19.8,-19.8).curveTo(-5.4,-26.9,-1.8,-26.9).curveTo(3.5,-27,27.7,-25.8).lineTo(27.9,-23.1).curveTo(27.5,-20.4,25.1,-19.7).lineTo(7.7,-14.7).lineTo(13.1,-8).curveTo(19.2,-1.5,23.1,-2.7).curveTo(25.9,-3.6,32.8,-6.6).curveTo(38.3,-9,40,-9.2).curveTo(41.9,-9.4,43.4,-7.9).curveTo(44.2,-7.1,44.6,-6.3).lineTo(42.6,-3.3).curveTo(44.4,-3,44.6,-1).curveTo(44.6,-0,44.4,0.9).lineTo(26.1,22).curveTo(15,25.9,11.5,26.9).lineTo(11.2,26.9).curveTo(7.9,26.9,-14.7,17.8).closePath();
	this.shape_75.setTransform(12.8792,90.2193);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#D5A690").beginStroke().moveTo(-13.3,-2.3).curveTo(-7.7,-4.6,-0.7,-4.9).lineTo(2.5,-4.9).lineTo(4.1,-4.8).lineTo(5.7,-4.6).curveTo(7.9,-4.4,12,-3.4).curveTo(12.7,-3.3,15.1,-2.4).lineTo(18.1,-1.4).curveTo(20.4,-0.4,23.7,1.3).lineTo(14.7,-1.1).lineTo(11.7,-1.7).curveTo(6.3,-2.6,5.5,-2.5).curveTo(3.4,-2.8,2.5,-2.8).lineTo(-0.7,-2.7).curveTo(-7.1,-2.5,-12.7,-0.7).curveTo(-19.2,1.5,-23.8,4.9).curveTo(-19.8,0.3,-13.3,-2.3).closePath();
	this.shape_76.setTransform(-109.25,14.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#FDE4C8").beginStroke().moveTo(4.9,27.6).curveTo(-42.8,8.1,-61,-19.6).lineTo(-49.6,-41.4).lineTo(-35.1,-25.6).lineTo(-35.6,-26.9).lineTo(-11.6,-39.9).lineTo(-5.3,-36.8).curveTo(2.4,-31.9,9.6,-24.2).curveTo(19.3,-13.7,35.6,-1.1).curveTo(52.3,11.9,60.6,15).lineTo(61,18.3).curveTo(61.2,22.4,60.6,26.1).curveTo(58.6,38,48.9,41.4).curveTo(28.7,37.3,4.9,27.6).closePath();
	this.shape_77.setTransform(-71.975,57.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-17,20.1).curveTo(-25.4,13.1,-26.3,2.2).curveTo(-27.2,-8.7,-20.1,-17).curveTo(-13,-25.4,-2.2,-26.3).curveTo(8.7,-27.2,17.1,-20.1).curveTo(25.4,-13.1,26.3,-2.2).curveTo(27.2,8.7,20.1,17.1).curveTo(13.1,25.4,2.2,26.3).lineTo(-0.2,26.4).curveTo(-9.6,26.4,-17,20.1).closePath();
	this.shape_78.setTransform(-110.625,24.225);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#E0B5A0").beginStroke().moveTo(2.3,3.8).lineTo(-8.6,1.5).curveTo(-10.6,1,-12.1,-0.3).curveTo(-15.1,-2.7,-15.8,-7.1).curveTo(-16,-8.4,-15.3,-9.2).curveTo(-14.9,-9.7,-14.2,-9.8).lineTo(-13.6,-9.8).lineTo(-13.1,-9.7).lineTo(-11.2,-9.1).lineTo(-9.5,-8.4).curveTo(-1.4,-5.6,5.2,-7.1).curveTo(7.4,-7.6,9,-7.5).curveTo(11.1,-7.4,12.6,-6.1).curveTo(13.9,-5,14.8,-2.9).curveTo(15.3,-1.5,15.9,0.7).curveTo(15.1,-1.7,14.5,-2.8).curveTo(13.7,-4.8,12.4,-5.7).curveTo(10.9,-6.8,9,-6.9).curveTo(7.6,-7,5.3,-6.4).curveTo(3.4,-6,1.5,-5.8).curveTo(-0,-5.7,-2.3,-5.9).curveTo(-5.9,-6.2,-9.8,-7.5).lineTo(-11.6,-8.2).lineTo(-13.3,-8.8).curveTo(-14.3,-9,-14.6,-8.6).curveTo(-15,-8.2,-14.9,-7.2).curveTo(-14.2,-3.1,-11.6,-0.9).curveTo(-10.3,0.2,-8.4,0.7).lineTo(2.8,3.5).lineTo(-0.2,9.8).closePath();
	this.shape_79.setTransform(62.9778,74.9375);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.5,0.5).curveTo(-1.3,-0.6,-1.4,-1.6).curveTo(-0.7,-1.3,0.3,-0.2).curveTo(1.1,0.8,1.4,1.6).curveTo(0.6,1.4,-0.5,0.5).closePath();
	this.shape_80.setTransform(89.25,-191.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.1,-0.2).lineTo(2.7,-1.5).curveTo(2.5,-0.9,1.7,-0.2).curveTo(1.1,0.4,0.3,0.7).lineTo(-1.1,1.2).curveTo(-1.9,1.5,-2.7,1.5).curveTo(-1.8,0.6,-0.1,-0.2).closePath();
	this.shape_81.setTransform(65.9,-191.45);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#EFC7B0").beginStroke().moveTo(0.5,-1.5).lineTo(3.3,-4.6).lineTo(3,-2.3).lineTo(-3.3,4.6).curveTo(-2.4,2.1,0.5,-1.5).closePath();
	this.shape_82.setTransform(69.925,-166.275);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.5,1.3).lineTo(-3.3,-0.6).curveTo(-1.1,-1.5,-0.5,-1.4).lineTo(2,-0.8).lineTo(2.9,-1.2).curveTo(4,-1.5,4.6,-1.2).curveTo(6,-0.2,7.3,1.1).lineTo(7.5,1.3).curveTo(3.9,0.2,-1.6,0.5).curveTo(-5.2,0.8,-7.5,1.4).closePath();
	this.shape_83.setTransform(82.075,-152.7852);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#A51727").beginStroke().moveTo(-2.2,1.3).lineTo(-9.4,1.8).lineTo(-8.8,1.7).curveTo(-7.9,1.5,-6.7,0.9).lineTo(-2.5,-1).curveTo(-0.3,-2,0.3,-1.8).lineTo(2.8,-1.2).lineTo(3.8,-1.6).curveTo(4.8,-1.9,5.4,-1.6).curveTo(6.8,-0.7,8.1,0.7).lineTo(9.4,1.8).curveTo(5.9,1,-2.2,1.3).closePath();
	this.shape_84.setTransform(81.25,-152.3352);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#FFAFAF").beginStroke().moveTo(-8.2,3.9).lineTo(-11.8,1.7).lineTo(-7.8,-1.8).curveTo(-3,-5.3,-0.4,-5.7).curveTo(2,-6.1,2.9,-4.9).curveTo(3.3,-4.5,3.7,-4.9).curveTo(5,-6.1,6.5,-5.4).curveTo(8.3,-4.7,9.8,-3.1).curveTo(11.7,-1,11.8,1.6).curveTo(11.5,2.6,10.9,3.5).curveTo(9.7,5.4,8.3,5.5).curveTo(7.4,5.6,4.7,5.5).curveTo(2.1,5.5,-1.7,5.8).lineTo(-2.2,5.8).curveTo(-4.5,5.8,-8.2,3.9).closePath();
	this.shape_85.setTransform(80.65,-152.0528);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#080808").beginStroke().moveTo(4.6,0.2).curveTo(2.1,-0.9,-0.1,-1).curveTo(-2.4,-1.2,-4.7,-0.2).lineTo(-6.9,0.9).lineTo(-9,2.3).curveTo(-8,0.9,-7.3,0.3).curveTo(-5.7,-1,-5.2,-1.3).curveTo(-4.4,-1.8,-2.7,-2.3).curveTo(-0.9,-2.6,0,-2.5).curveTo(2.9,-2.3,5.1,-0.9).curveTo(7.5,0.5,9,2.6).curveTo(6.7,1,4.6,0.2).closePath();
	this.shape_86.setTransform(98.325,-196.0036);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#080808").beginStroke().moveTo(-0.3,2.4).lineTo(-0.8,2.4).curveTo(-2.4,2.1,-3.4,0.7).curveTo(-4.3,-0.6,-4,-2.1).lineTo(-4,-2.3).curveTo(-0.6,-2.8,4,-0.9).lineTo(4,-0.6).curveTo(3.7,0.6,2.7,1.5).curveTo(1.7,2.3,0.4,2.4).closePath();
	this.shape_87.setTransform(98.8529,-194.9021);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.3).moveTo(-9.2,1.2).curveTo(-5.6,-3.9,1.9,-1.8).curveTo(5.6,-0.7,8.6,1.4).curveTo(6.5,2,3.3,2.3).curveTo(-3.3,2.8,-9.2,1.2).closePath();
	this.shape_88.setTransform(98.5984,-194.875);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.9,1.2).curveTo(-5.3,-3.9,2.2,-1.8).curveTo(5.9,-0.7,8.9,1.4).curveTo(6.8,2,3.6,2.3).lineTo(0.3,2.4).curveTo(-4.5,2.4,-8.9,1.2).closePath();
	this.shape_89.setTransform(98.275,-194.875);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#080808").beginStroke().moveTo(-5.4,-0.7).curveTo(-2.6,-2.1,0.1,-2.5).curveTo(3.3,-3,5.9,-1.8).curveTo(8.6,-0.6,9.9,2.2).curveTo(7.8,0.1,5.4,-0.7).curveTo(3,-1.5,0.3,-1).curveTo(-1.9,-0.7,-4.8,0.4).curveTo(-6.8,1.2,-9.9,2.6).curveTo(-8.1,0.8,-5.4,-0.7).closePath();
	this.shape_90.setTransform(58.25,-195.8485);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#080808").beginStroke().moveTo(-3.5,0.9).curveTo(-4.2,-0.3,-4,-1.6).curveTo(0.8,-2.9,3.9,-2.1).curveTo(4.1,-1.2,4,-0.3).curveTo(3.6,1.6,1.7,2.4).lineTo(-1.5,2.5).curveTo(-2.8,2,-3.5,0.9).closePath();
	this.shape_91.setTransform(59.7571,-194.7024);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.3).moveTo(10.4,1.1).curveTo(7.1,-4,-1.4,-1.8).curveTo(-4.1,-1.1,-6.9,0.3).lineTo(-9.3,1.5).lineTo(-2.1,2.4).curveTo(6,2.9,10.4,1.1).closePath();
	this.shape_92.setTransform(57.7031,-194.7115);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,2.4).lineTo(-9.8,1.5).lineTo(-7.5,0.3).curveTo(-4.6,-1.1,-2,-1.8).curveTo(6.5,-4,9.8,1.1).curveTo(6.4,2.5,0.8,2.5).lineTo(-2.6,2.4).closePath();
	this.shape_93.setTransform(58.3,-194.7115);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#EFC7B0").beginStroke().moveTo(2.7,10.1).curveTo(-0.4,8.5,-2.3,4.3).curveTo(-3.1,2.6,-4.1,-2.3).curveTo(-5.4,-8.3,-4.6,-10).curveTo(-4.2,-10.8,-3.3,-10.5).curveTo(-2.8,-10.3,-2.1,-9.4).curveTo(-0.2,-6.9,0.6,-5.6).curveTo(2.1,-3.1,2.3,-1.3).lineTo(2,1.9).curveTo(1.8,3.6,3.1,5).curveTo(4.3,6.5,4.8,8.8).curveTo(5.2,10.6,4.1,10.6).curveTo(3.6,10.6,2.7,10.1).closePath();
	this.shape_94.setTransform(11.7476,-182.6982);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-1,2.7).lineTo(-4,1.5).curveTo(-6.2,1.1,-7.1,0.8).curveTo(-8.6,0.1,-8.4,-1.5).curveTo(-8.3,-2.6,-7.5,-3.5).curveTo(-8,-2.7,-7.7,-1.8).curveTo(-7.3,-0.6,-5.7,-0.4).lineTo(-2.9,-0.1).curveTo(-2.2,0,-0.4,0.7).curveTo(1.2,1.3,2,1.4).curveTo(2.7,1.5,4.1,1).curveTo(5.5,0.5,6.5,-0.1).curveTo(7.8,-1,7.5,-3).lineTo(8.2,-1.7).curveTo(8.7,-0.3,7.9,0.8).curveTo(7.6,1.1,7.1,1.3).lineTo(6.2,1.7).lineTo(4.4,2.9).curveTo(3.6,3.3,2,3.4).lineTo(1.9,3.5).curveTo(0.9,3.5,-1,2.7).closePath();
	this.shape_95.setTransform(81.0062,-167.5484);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#080808").beginStroke().moveTo(4.5,3.1).curveTo(1.9,2.9,-0.7,2.1).curveTo(-3.1,1.4,-5.6,0.1).curveTo(-7.9,-1.3,-9.7,-3.1).lineTo(-4.9,-1.4).curveTo(-2.5,-0.5,-0.1,0.1).lineTo(9.7,2.9).curveTo(8.3,3.1,6.5,3.1).lineTo(4.5,3.1).closePath();
	this.shape_96.setTransform(98.9,-205.9054);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#080808").beginStroke().moveTo(-12.4,4).curveTo(-10.3,3.3,-6.1,2.1).lineTo(6.3,-1.7).curveTo(9.6,-2.9,12.4,-4.1).curveTo(10.3,-2,6.9,-0.3).curveTo(4.5,1,0.7,2.2).curveTo(-2.7,3.2,-5.8,3.6).curveTo(-8.7,4.1,-11.1,4.1).lineTo(-12.4,4).closePath();
	this.shape_97.setTransform(57.125,-205.5339);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#080808").beginStroke().moveTo(0.2,2.7).lineTo(-0.7,-2.6).lineTo(-1.6,-10.1).lineTo(-0.1,-2.7).curveTo(0.3,-0.4,0.7,2.6).lineTo(1.6,10.1).closePath();
	this.shape_98.setTransform(110.45,-228.125);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#080808").beginStroke().moveTo(0.1,-1.4).lineTo(0.1,-5.3).lineTo(0.3,-1.4).curveTo(0.4,-0.2,0.2,1.4).lineTo(-0.4,5.3).closePath();
	this.shape_99.setTransform(106.2063,-239.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#080808").beginStroke().moveTo(-0.8,3).curveTo(1.3,0.7,2.9,-1.3).curveTo(5.3,-4.3,6.9,-8).curveTo(5.7,-4.4,3.3,-1).curveTo(1.5,1.5,-0.5,3.3).curveTo(-3.6,6.2,-6.9,8).curveTo(-3.6,5.8,-0.8,3).closePath();
	this.shape_100.setTransform(100.7,-240.875);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#080808").beginStroke().moveTo(-2,3.5).curveTo(1.7,1.7,4.3,-0.1).curveTo(9.1,-3.2,11.6,-7.2).curveTo(9.2,-2.9,4.7,0.5).curveTo(1.8,2.7,-1.8,4.1).curveTo(-5.6,5.7,-11.6,7.2).curveTo(-6.2,5.5,-2,3.5).closePath();
	this.shape_101.setTransform(80.325,-237.475);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#080808").beginStroke().moveTo(-26,8.5).curveTo(-21.6,8.3,-15.6,7.5).curveTo(-9.4,6.6,-5.4,5.7).lineTo(1.8,4.1).curveTo(5.9,3.2,8.8,2.2).curveTo(9.8,1.9,11.1,1.3).lineTo(13.5,0.2).curveTo(16,-1,18,-2.2).curveTo(20.2,-3.6,21.9,-5.5).curveTo(23.7,-7.3,26,-8.8).curveTo(23.9,-7.1,22.4,-5.1).curveTo(20.8,-2.8,18.8,-1.2).curveTo(16.9,0.3,14.4,1.9).lineTo(12.2,3.3).lineTo(9.8,4.5).curveTo(3.7,7.3,-5,8.1).curveTo(-9.3,8.5,-15.5,8.7).lineTo(-18.6,8.8).curveTo(-23,8.8,-26,8.5).closePath();
	this.shape_102.setTransform(60.15,-239.0375);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#080808").beginStroke().moveTo(-0.8,2.5).curveTo(-1.5,0.5,-1.7,-2).curveTo(-1.8,-5.3,-1.5,-8.3).curveTo(-1.5,-5.1,-0.9,-2.1).lineTo(-0,2.3).curveTo(0.5,5.2,1.7,8.3).curveTo(0.1,5.5,-0.8,2.5).closePath();
	this.shape_103.setTransform(22.9525,-190.15);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#080808").beginStroke().moveTo(-0.8,11.4).curveTo(-0.2,8.3,0.1,4.8).curveTo(0.5,-0.5,0.7,-4.6).curveTo(0.8,-7.7,0.6,-11.3).curveTo(0.3,-14.8,-0.4,-17.9).curveTo(0.7,-14.6,1.4,-11.4).curveTo(2.1,-7.8,2.4,-4.7).curveTo(2.9,0.3,1.8,5.1).curveTo(1.3,7.9,0,11.7).curveTo(-1.1,14.9,-2.6,17.9).curveTo(-1.4,14.5,-0.8,11.4).closePath();
	this.shape_104.setTransform(24.2175,-213.825);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#080808").beginStroke().moveTo(0.8,2.8).lineTo(-0,-3).curveTo(-0.6,-6.8,-1.9,-11).curveTo(-0.3,-7.5,1,-3.2).curveTo(1.8,-0.2,1.9,2.7).curveTo(2,6.6,1.4,11).curveTo(1.4,7,0.8,2.8).closePath();
	this.shape_105.setTransform(26.0141,-222.275);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-9.2,3).lineTo(-7.3,-0.3).curveTo(-4.5,-3.5,0,-3.3).curveTo(4.4,-3.1,7.3,0.1).curveTo(8.6,1.7,9.2,3.3).closePath();
	this.shape_106.setTransform(98.3,-196.7808);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-7.3,0.1).curveTo(-3.7,-3.4,0.9,-3.6).curveTo(5.3,-3.7,8.1,-0.3).curveTo(9.5,1.4,10,3.1).lineTo(-10,3.6).closePath();
	this.shape_107.setTransform(58.225,-196.7032);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#FDE4C8").beginStroke().moveTo(8.4,58.1).curveTo(-2.5,53.4,-12.9,47.1).curveTo(-26.8,38.7,-30.3,32.6).curveTo(-33.6,26.8,-35.1,21.6).lineTo(-36,17.6).curveTo(-38.9,17.7,-42.4,16.1).curveTo(-49.5,13,-52.2,4.6).curveTo(-55.3,-5,-54.5,-10.4).curveTo(-53.8,-15.3,-50.1,-15.8).curveTo(-46.9,-16.2,-44.7,-13.9).curveTo(-43.1,-12.3,-41.4,-8.4).curveTo(-39,-2.9,-38.7,-0.4).curveTo(-38.6,0.2,-38.2,0.6).lineTo(-37.5,1.2).lineTo(-37.9,-0.8).lineTo(-37.3,0.3).curveTo(-37,0.9,-36.4,1.4).lineTo(-36.8,-0.8).lineTo(-35.8,0.5).curveTo(-35.3,1.1,-33.4,2).curveTo(-34,1,-34.2,-0.7).curveTo(-35.2,-14,-33.6,-18).curveTo(-31,-24.3,-30.9,-34.7).curveTo(-30.8,-42.7,-31.9,-47.5).lineTo(-23.2,-47.5).curveTo(-12.9,-47.5,-5.4,-48.2).curveTo(2.7,-48.9,12,-51.3).curveTo(18.6,-53,18.5,-52.7).curveTo(16.5,-50.9,12.5,-48.6).curveTo(10.7,-47.5,8.5,-46.6).lineTo(6.7,-45.9).curveTo(14.2,-46.7,22.9,-50.4).curveTo(27.3,-52.3,30.2,-54).lineTo(23.3,-46.2).curveTo(26.2,-46.8,33.2,-51.6).curveTo(36.7,-54,39.6,-56.2).lineTo(32.9,-47.5).lineTo(35.7,-49).curveTo(39.1,-51,42.2,-53.5).curveTo(45.3,-56,47.5,-58.8).curveTo(48.6,-60.2,49.1,-61.1).curveTo(49.5,-52.3,49.5,-55.2).lineTo(49.5,-48.3).lineTo(51.5,-54.5).lineTo(52.2,-50.8).lineTo(53.1,-44.3).curveTo(54.2,-35.5,54.4,-32).curveTo(54.7,-26.8,54.2,-20.2).curveTo(54,-16.7,54.3,-7.2).curveTo(54.7,3.2,54.6,6.4).lineTo(54.6,14.1).curveTo(53.6,23.9,48.4,34.9).curveTo(44,44.6,40.1,50.2).curveTo(37.6,53.9,34.1,57.3).curveTo(30.4,61,22.8,61.1).lineTo(22.3,61.1).curveTo(15.3,61.1,8.4,58.1).closePath();
	this.shape_108.setTransform(56.8529,-184.5484);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#080808").beginStroke().moveTo(0.4,4.1).curveTo(0.9,-0.4,1.1,-3.9).curveTo(1.5,-9.2,0.8,-14.9).curveTo(1.8,-9.8,1.8,-3.8).curveTo(1.8,0.2,1.1,4.1).curveTo(0.2,9.6,-1.9,14.9).curveTo(-0.3,9.6,0.4,4.1).closePath();
	this.shape_109.setTransform(118.3,-232.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#080808").beginStroke().moveTo(-9.6,-1.7).curveTo(-6.8,-4.2,-3.7,-5.9).curveTo(-0.9,-7.6,2.7,-9.1).curveTo(12.7,-13.2,21.9,-13.8).curveTo(12.8,-12.6,3.2,-7.9).curveTo(-1,-5.8,-3,-4.7).curveTo(-5.6,-3.1,-8.8,-0.7).curveTo(-16.3,5.3,-21.9,13.8).curveTo(-16.8,4.9,-9.6,-1.7).closePath();
	this.shape_110.setTransform(10.2,-272.95);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#080808").beginStroke().moveTo(-14.9,-0.1).curveTo(-10.7,-1.5,-6.5,-2.3).curveTo(-0.8,-3.4,5.8,-3.2).curveTo(9.2,-3.1,14.4,-2.4).curveTo(18.6,-1.8,22.8,-0.8).curveTo(18.5,-1.5,14.3,-1.8).curveTo(9.8,-2.1,5.8,-2.1).curveTo(-0.3,-1.9,-6.4,-1.2).curveTo(-10.4,-0.7,-14.7,0.4).curveTo(-18.7,1.5,-22.8,3.2).curveTo(-18.5,1.1,-14.9,-0.1).closePath();
	this.shape_111.setTransform(37.875,-287.2223);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#080808").beginStroke().moveTo(16.4,1.2).curveTo(11.1,-0.3,7.1,-1).curveTo(1.2,-2,-6.4,-2.9).curveTo(-10.8,-3.3,-15.9,-3.4).curveTo(-20.3,-3.4,-25.4,-3).curveTo(-19.8,-3.8,-15.9,-4).curveTo(-10.8,-4.3,-6.3,-4.1).curveTo(0.7,-3.8,7.3,-2.2).curveTo(11.4,-1.2,16.6,0.6).curveTo(20.3,1.9,25.4,4.2).curveTo(20.9,2.4,16.4,1.2).closePath();
	this.shape_112.setTransform(57.825,-288.3781);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#080808").beginStroke().moveTo(14.8,3.4).curveTo(11.6,0.5,7.8,-1.7).curveTo(2.3,-4.7,-3.3,-6.8).curveTo(-7.3,-8.2,-11.7,-8.9).curveTo(-15.9,-9.6,-20.5,-9.3).curveTo(-15.8,-10.1,-11.6,-10.1).curveTo(-6.6,-9.9,-2.7,-9).curveTo(3.9,-7.5,9.1,-3.6).curveTo(12.8,-0.8,15.7,2.6).curveTo(18.7,6.3,20.5,10.1).curveTo(18.1,6.3,14.8,3.4).closePath();
	this.shape_113.setTransform(84.05,-280.5765);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#080808").beginStroke().moveTo(6.4,1.4).curveTo(4.9,0.3,3.2,-0.6).curveTo(0.8,-1.7,-1.7,-2.6).curveTo(-5.4,-3.8,-9.1,-3.6).curveTo(-5.2,-4.3,-1.5,-3.5).curveTo(1.4,-3,3.7,-1.4).curveTo(5.1,-0.5,6.7,1).curveTo(8,2.3,9.1,4).curveTo(7.7,2.3,6.4,1.4).closePath();
	this.shape_114.setTransform(110.25,-264.3133);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#080808").beginStroke().moveTo(8.1,5.3).curveTo(7.1,3,5.2,0.8).curveTo(3.1,-1.7,-0.2,-4.7).curveTo(-4.6,-8.5,-9.4,-10.6).curveTo(-4.1,-9.1,0.7,-5.8).curveTo(4.3,-3.4,6.4,-0.1).curveTo(8,2.6,8.8,5.1).curveTo(9.6,7.9,9.3,10.6).curveTo(9.2,7.8,8.1,5.3).closePath();
	this.shape_115.setTransform(111.5659,-259.075);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#080808").beginStroke().moveTo(5.1,7.4).curveTo(4.5,5,3.5,2.4).curveTo(2.1,-0.8,0.3,-4.2).curveTo(-2.1,-8.8,-5.9,-12.6).curveTo(-1.6,-9.3,1.5,-4.9).curveTo(3.7,-1.9,4.8,2).curveTo(5.4,4.2,5.8,7.3).curveTo(6,10.1,5.9,12.6).curveTo(5.6,9.7,5.1,7.4).closePath();
	this.shape_116.setTransform(101.3281,-272.425);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#080808").beginStroke().moveTo(-4,9.9).curveTo(-7.9,2.8,-9.2,-5).curveTo(-10.8,-16.1,-8.2,-26.9).curveTo(-9.8,-16.2,-7.1,-5.5).curveTo(-5.3,1.7,-2.1,8.9).curveTo(2.5,19.4,9.8,26.9).curveTo(1.8,20.2,-4,9.9).closePath();
	this.shape_117.setTransform(-2.0453,-204.325);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#080808").beginStroke().moveTo(-5.8,6.3).curveTo(-5.4,-1.2,-3.3,-8.4).curveTo(-1.5,-14.1,0.4,-18.1).curveTo(2.9,-23.5,5.9,-26.9).curveTo(3.2,-23.3,1,-17.9).curveTo(-0.4,-14.5,-2,-8).curveTo(-3.7,-0.6,-4.5,6.4).curveTo(-5.8,18.4,-3.7,27).curveTo(-6.4,18.6,-5.8,6.3).closePath();
	this.shape_118.setTransform(-9.7473,-238.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#080808").beginStroke().moveTo(-4.8,2.2).curveTo(-3.6,-1.7,-1.2,-4.9).curveTo(1.1,-8.1,6.3,-13).curveTo(2.1,-7.8,0,-4.1).curveTo(-2,-0.8,-3.4,2.6).curveTo(-5.6,7.6,-6.2,13.1).curveTo(-6.3,7.3,-4.8,2.2).closePath();
	this.shape_119.setTransform(-10.253,-252.25);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-14.1,17.7).curveTo(-22.3,8.3,-27.5,-0.9).curveTo(-30.4,-5.9,-32.9,-12).curveTo(-31,-20.3,-30.2,-28.6).lineTo(-6.1,-22.7).lineTo(14.9,-33.1).lineTo(32.9,-2.5).lineTo(23.5,25.1).curveTo(20.5,30.6,14.2,32.5).curveTo(12.2,33.1,10,33.1).curveTo(-0.9,33.1,-14.1,17.7).closePath();
	this.shape_120.setTransform(55.15,-140.691);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-9.9,59.5).curveTo(-19.6,56.5,-27.5,49.3).curveTo(-35.3,42.1,-38,33.9).curveTo(-40.9,25.1,-36.7,18.4).curveTo(-25.1,-0.2,-23.8,-32.1).curveTo(2.1,-60.1,2.2,-61.2).curveTo(2.3,-61.8,20.7,-30.4).lineTo(39.2,1.1).lineTo(29.8,28.7).lineTo(30.4,32.3).curveTo(30.8,36.7,29.8,40.8).curveTo(26.5,54.1,10.1,59.6).curveTo(5.5,61.2,0.5,61.2).curveTo(-4.5,61.2,-9.9,59.5).closePath();
	this.shape_121.setTransform(48.8577,-144.2804);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#080808").beginStroke().moveTo(1.9,3.8).lineTo(-1.2,-4.1).curveTo(-3.4,-9.8,-6,-15.2).curveTo(-2.7,-10.2,0.2,-4.8).curveTo(2.2,-1,3.4,3.3).curveTo(5,9,6,15.2).curveTo(4.2,9.1,1.9,3.8).closePath();
	this.shape_122.setTransform(11.975,-167.425);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#080808").beginStroke().moveTo(-16.1,77.3).curveTo(-24.3,69.6,-25.3,65.3).curveTo(-25.7,63.2,-30.5,55.2).lineTo(-41.2,37.7).curveTo(-57.6,10.7,-62.8,-4.2).curveTo(-68.3,-20.2,-65.4,-36.3).curveTo(-63.9,-44.4,-61.4,-49.3).lineTo(-67.9,-41.4).curveTo(-59.6,-64.5,-37,-75).curveTo(-25.6,-80.3,-16,-81).lineTo(-29.4,-80.3).lineTo(-26.4,-81.4).curveTo(-22.3,-82.6,-17.3,-83.2).curveTo(-1.1,-85.5,19.1,-81.9).curveTo(39.3,-78.4,48.7,-69.4).curveTo(53.4,-64.9,54,-61.1).lineTo(55.4,-60.4).curveTo(57.3,-59.5,59,-58).curveTo(64.5,-53.3,67.1,-45.3).curveTo(69.6,-37.4,64.8,-15.3).curveTo(62.3,-4.3,59.4,5.2).lineTo(-8.1,84.1).curveTo(-12,81.1,-16.1,77.3).closePath();
	this.shape_123.setTransform(52.1894,-206.7614);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-57.1,50).lineTo(-5.5,-59.4).lineTo(5.1,-55.2).lineTo(16.8,-46.8).lineTo(57.1,-46).curveTo(56.4,-33.2,51.3,-31.7).curveTo(49.7,-31.2,47.9,-31.9).lineTo(46.3,-32.7).lineTo(-8.8,59.4).closePath();
	this.shape_124.setTransform(-75.875,-39.775);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#E0B5A0").beginStroke().moveTo(11.6,7).curveTo(9.9,6.5,7.3,5.6).curveTo(4.1,4.4,-0.9,1.9).curveTo(-4.8,-0.1,-8.7,-2.5).curveTo(-14.1,-5.8,-16,-7.5).lineTo(-12.2,-5.2).lineTo(-8.3,-3.1).lineTo(-0.4,1).curveTo(2.7,2.7,7.6,4.9).curveTo(9.7,5.8,11.7,6.5).curveTo(14.2,7.4,16,7.5).lineTo(15.4,7.5).curveTo(13.8,7.5,11.6,7).closePath();
	this.shape_125.setTransform(37.125,107.5641);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#E0B5A0").beginStroke().moveTo(14,8.1).curveTo(11.4,8,8.5,7.3).lineTo(6.4,6.8).lineTo(-2,3.5).lineTo(-12.3,-0.9).lineTo(-17.4,-3.3).curveTo(-18.8,-3.9,-19.3,-5.3).curveTo(-19.8,-6.4,-19.4,-8.1).curveTo(-19.6,-6.5,-19.1,-5.4).curveTo(-18.4,-4.1,-17.2,-3.7).curveTo(-14.9,-2.7,-12,-1.6).lineTo(7.3,6.2).lineTo(8.6,6.6).curveTo(11.3,7.4,14.1,7.7).curveTo(17.4,8,19.6,7.4).curveTo(17.8,8.1,15.2,8.1).lineTo(14,8.1).closePath();
	this.shape_126.setTransform(39.7309,100.3932);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#E0B5A0").beginStroke().moveTo(-17.5,2.2).curveTo(-18.9,1.1,-19.8,-0.7).curveTo(-20.8,-2.6,-20.7,-4.3).curveTo(-20.6,-5.5,-20,-6.2).curveTo(-19.3,-6.9,-18,-6.9).lineTo(-16.2,-6.6).lineTo(-7.3,-4.9).curveTo(-3.4,-4.1,-0.3,-3.3).lineTo(13.7,0.2).curveTo(15.3,0.6,17.2,1).curveTo(19.4,1.3,20.8,0.8).curveTo(19.5,1.4,17.2,1.2).curveTo(15.5,1,13.6,0.6).lineTo(6.6,-0.9).curveTo(-2.8,-3.1,-7.5,-4).lineTo(-16.4,-5.8).curveTo(-17.5,-6,-18,-6).curveTo(-18.9,-6.1,-19.4,-5.7).curveTo(-19.9,-5.2,-20,-4.3).curveTo(-20.2,-2.8,-19.3,-1).curveTo(-18.5,0.6,-17.2,1.8).curveTo(-14.5,4.3,-12.1,6.9).lineTo(-17.5,2.2).closePath();
	this.shape_127.setTransform(40.4487,98.05);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#E0B5A0").beginStroke().moveTo(7.3,11.1).curveTo(6.1,11,3.8,10.5).lineTo(3.7,10.5).lineTo(3.7,10.4).lineTo(-8.7,4.4).curveTo(-11.2,3.2,-12.9,2.2).curveTo(-14.1,1.4,-16.4,-1).curveTo(-18.1,-2.8,-19.2,-4.7).curveTo(-19.9,-5.9,-20.2,-6.9).curveTo(-20.4,-7.8,-20.1,-8.4).curveTo(-19.8,-9,-19.2,-9.4).curveTo(-18.1,-10.3,-16.6,-9.9).lineTo(-15.5,-9.4).lineTo(0.1,-1.8).curveTo(0.9,-1.5,2.2,-1.3).curveTo(4.3,-1.1,6.8,-1.3).curveTo(9.4,-1.4,11.3,-1.8).lineTo(11.7,-2).lineTo(12.1,-2.3).lineTo(13.8,-5.3).lineTo(15.6,-9.5).lineTo(15.6,-9.6).lineTo(15.7,-9.6).lineTo(20.3,-11.2).lineTo(15.8,-9.4).lineTo(14.1,-5.1).lineTo(13.1,-3).lineTo(12.5,-2).lineTo(12,-1.6).curveTo(11.8,-1.4,11.4,-1.3).curveTo(9.6,-0.8,6.8,-0.6).curveTo(4.2,-0.4,2.1,-0.6).curveTo(0.5,-0.8,-0.3,-1.1).lineTo(-16.9,-9).curveTo(-18,-9.2,-18.7,-8.7).curveTo(-19,-8.5,-19.3,-8).curveTo(-19.4,-7.7,-19.3,-7.1).curveTo(-19.1,-6.5,-18.4,-5.2).curveTo(-17.5,-3.6,-15.7,-1.5).curveTo(-13.8,0.6,-12.4,1.5).lineTo(3.9,10.1).curveTo(6,10.7,7.3,10.9).curveTo(9.4,11.2,10.6,11).lineTo(9,11.2).lineTo(7.3,11.1).closePath();
	this.shape_128.setTransform(49.8306,88.0306);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#E0B5A0").beginStroke().moveTo(-10.5,13).curveTo(-14.1,11.6,-17.6,9.6).lineTo(-17.7,9.6).lineTo(-17.7,9.5).lineTo(-19.3,7.2).lineTo(-19.2,7.3).lineTo(-28.4,0.9).lineTo(-18.9,6.9).lineTo(-18.9,7).lineTo(-18.9,7).lineTo(-17.2,9.1).curveTo(-13.9,10.9,-10.2,12.2).curveTo(-6,13.7,-2.7,13.8).curveTo(-0.6,13.9,1.1,13.4).curveTo(3.3,12.9,4.8,12.3).curveTo(7.5,11.3,11.8,8.8).curveTo(13.4,7.7,15.3,6.9).curveTo(17.1,6.1,18.7,5.1).curveTo(22.3,2.9,24.5,0).curveTo(27,-3,27.7,-6.9).curveTo(28,-9,27.9,-10.8).lineTo(27.8,-14.7).lineTo(28.3,-10.8).curveTo(28.5,-8.9,28.2,-6.8).curveTo(27.7,-2.9,25.1,0.5).curveTo(22.9,3.5,19.2,5.8).curveTo(17.7,6.7,15.6,7.7).curveTo(14.3,8.2,12.2,9.6).curveTo(4.1,14.7,-2.7,14.7).curveTo(-6.3,14.5,-10.5,13).closePath();
	this.shape_129.setTransform(56.215,104.95);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-3.6,25.7).lineTo(-11.3,23.3).lineTo(-30.4,7.3).lineTo(-32.2,3.1).lineTo(-31.9,-0).lineTo(-30.5,-1).lineTo(1.4,6).lineTo(-6.5,2.2).curveTo(-14.5,-1.8,-15,-2.3).curveTo(-17.5,-4.5,-19.4,-6.6).curveTo(-23.1,-10.7,-22,-12.5).curveTo(-21,-14.4,-18.6,-13.6).curveTo(-17.3,-13.2,-16.3,-12.4).lineTo(-11.3,-10.1).curveTo(-5.8,-7.6,-3.6,-6.4).curveTo(-1.3,-5.1,3.3,-5).curveTo(7.2,-4.9,8.8,-5.6).curveTo(10.5,-6.3,13.3,-13.7).lineTo(2.9,-16.1).curveTo(-2.6,-17.3,-4.1,-22.9).curveTo(-4.7,-25.1,-4,-26.2).curveTo(-3.2,-27.3,-1.4,-26.3).curveTo(5.3,-22.4,18.4,-24.5).curveTo(22.9,-25.2,25.5,-19.5).lineTo(27.4,-14.2).curveTo(28.7,-10.9,29.8,-9.2).curveTo(32.2,-5.5,32.2,1.6).curveTo(32.1,5.2,31.6,8.3).curveTo(31.3,10.6,28.3,13.7).curveTo(26.7,15.3,25.3,16.4).curveTo(14.8,22.8,8.6,25.8).curveTo(6.8,26.8,3.9,26.8).curveTo(0.8,26.8,-3.6,25.7).closePath();
	this.shape_130.setTransform(52.2255,92.2564);

	this.instance_9 = new lib.Path_8();
	this.instance_9.setTransform(2.05,90.5,1,1,0,0,0,62.3,55.1);
	this.instance_9.alpha = 0.2109;
	this.instance_9.compositeOperation = "multiply";

	this.instance_10 = new lib.Path_9();
	this.instance_10.setTransform(11.7,-17.85,1,1,0,0,0,94.2,109.5);
	this.instance_10.alpha = 0.2109;
	this.instance_10.compositeOperation = "multiply";

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#477A8E").beginStroke().moveTo(-30,107.3).curveTo(-59.3,104.5,-75.9,98).curveTo(-95.6,90.2,-94.2,77.9).lineTo(-94,76.8).curveTo(-91.3,54.8,-86.1,20.2).lineTo(-81.5,-10.1).curveTo(-71.2,-8.1,-60.7,-11.9).curveTo(-50.9,-15.4,-42.5,-23.3).curveTo(-34.4,-31,-29.3,-41.2).curveTo(-24.2,-51.7,-23.5,-62.5).curveTo(-22.2,-82.9,-29.3,-97.9).curveTo(-31.5,-102.6,-34.3,-106.1).lineTo(-36.6,-108.7).curveTo(-27.3,-109.1,-12,-109).curveTo(-7.5,-104.7,-4.7,-92.8).curveTo(-2.7,-84.5,0.7,-60.6).curveTo(2.4,-49,12.2,-40.6).curveTo(22.9,-31.6,38.1,-31.5).lineTo(52,-31.5).curveTo(58.4,-31.7,62,-33.1).curveTo(70.1,-36.2,73,-50.3).curveTo(76,-64.8,71.8,-82.9).curveTo(70.4,-88.6,68.5,-93.9).lineTo(66.9,-98.2).lineTo(82.8,-93.6).curveTo(87.1,-88.6,91,-74.5).curveTo(95.8,-57.7,93.6,-44.9).curveTo(91.6,-32.7,85.6,-8.4).curveTo(79.1,18.1,72.6,39.4).lineTo(52.6,105.3).curveTo(44.4,108,20.5,108.8).curveTo(13.6,109,6.8,109).curveTo(-11.9,109,-30,107.3).closePath();
	this.shape_131.setTransform(11.7854,-17.4402);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#D5A690").beginStroke().moveTo(-23.4,6.8).lineTo(-19.5,3.5).curveTo(-16.7,1.3,-13.9,-0.5).curveTo(-7.8,-4.4,-1.4,-6.4).curveTo(6.3,-8.7,12.6,-7.6).curveTo(15.9,-7,19.2,-5.3).curveTo(22.1,-3.8,24.7,-1.2).curveTo(21.4,-3.4,18.8,-4.4).curveTo(15.8,-5.5,12.3,-5.9).curveTo(9.2,-6.3,5.7,-5.8).curveTo(2.3,-5.3,-0.7,-4.4).curveTo(-6.3,-2.7,-13,0.9).curveTo(-15.7,2.4,-18.9,4.4).lineTo(-21.8,6.2).curveTo(-24,7.6,-24.8,7.9).lineTo(-23.4,6.8).closePath();
	this.shape_132.setTransform(89.1,37.5583);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-25.3,27).curveTo(-34.1,14.5,-28.4,6.5).curveTo(-25.9,3,-21.2,-6.7).curveTo(-15.7,-17.9,-12.9,-22.6).curveTo(-1.8,-41.1,10,-37.2).lineTo(22.1,-31.6).lineTo(24.4,-28.9).curveTo(27,-25.3,28.6,-21.1).curveTo(33.7,-7.7,26.1,7.1).curveTo(19.1,21,1.1,30.8).curveTo(-7.9,35.7,-15.4,37.9).curveTo(-20.9,33.3,-25.3,27).closePath();
	this.shape_133.setTransform(90.4378,66.9855);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#D5A690").beginStroke().moveTo(-0.5,-3).curveTo(2.2,-8,8.9,-20.1).curveTo(10.8,-23.4,8,-14.3).lineTo(4.9,-4.5).lineTo(-9.7,20.9).closePath();
	this.shape_134.setTransform(99.172,-40.4891);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#D5A690").beginStroke().moveTo(-14.9,59.7).curveTo(-22.5,59,-38,52.2).curveTo(-44,49.5,-46.3,35.2).curveTo(-48.2,23.3,-47.1,6.5).curveTo(-46.1,-8.7,-43.5,-18.3).curveTo(-40.8,-28.2,-38.5,-23.2).curveTo(-34.3,-14.2,-31.6,-9.8).curveTo(-27.5,-3.5,-22.4,-0).curveTo(-10.6,8,14.1,4.5).curveTo(35.1,1.5,33.8,-29.5).curveTo(33.5,-39.1,30.9,-50.5).lineTo(28.4,-59.8).lineTo(40.2,-48.5).lineTo(47.5,-20).lineTo(46.1,-1.8).curveTo(44.7,17.1,44.7,20.7).curveTo(44.8,25.3,34.4,35.3).curveTo(23.4,45.8,9.6,53.5).curveTo(-1.8,59.8,-11.9,59.8).lineTo(-14.9,59.7).closePath();
	this.shape_135.setTransform(50.2631,-55.753);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-29.3,-58).lineTo(2.9,-79.5).lineTo(8.1,-77.5).curveTo(14.2,-74.4,18.8,-69.1).curveTo(33.5,-52.2,27.6,-19.2).lineTo(22.5,67.7).lineTo(-16,79.5).closePath();
	this.shape_136.setTransform(91.3929,-31.325);

	this.instance_11 = new lib.Path_16();
	this.instance_11.setTransform(1.05,133.25,1,1,0,0,0,98.9,77.2);
	this.instance_11.alpha = 0.2109;
	this.instance_11.compositeOperation = "multiply";

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#477A8E").beginStroke().moveTo(0.6,72.9).curveTo(-48.6,71.2,-97.8,69.3).curveTo(-102,8.9,-90.9,-39.3).curveTo(-87.4,-54.4,-82.8,-66.4).lineTo(-78.9,-75.4).lineTo(74.6,-30.5).curveTo(73.6,-6.7,86.2,36.1).curveTo(92.5,57.6,99,75.2).curveTo(99,75.4,93.8,75.4).curveTo(76.4,75.4,0.6,72.9).closePath();
	this.shape_137.setTransform(1.0754,130.5399);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-21.3,25.4).curveTo(-31.9,17.5,-33.8,4.4).curveTo(-35.7,-9.1,-27.8,-20.3).curveTo(-19.6,-31.8,-6.7,-31.8).curveTo(8.7,-31.8,20.3,-23.2).curveTo(32.1,-14.5,33.9,-1.5).curveTo(35.7,11,25.7,20.6).curveTo(16.4,29.4,2.4,31.5).curveTo(-0.1,31.8,-2.6,31.8).curveTo(-12.7,31.8,-21.3,25.4).closePath();
	this.shape_138.setTransform(84.0437,-81.6168);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#D5A690").beginStroke().moveTo(-1.5,82.5).curveTo(-7.3,82.5,-19.7,62.3).lineTo(-31,42).lineTo(-36.5,20.1).lineTo(-15.3,-12.8).lineTo(-15,-11.9).curveTo(-14.6,-11.1,-13.6,-11.2).curveTo(-10.4,-11.8,-2.8,-22.6).lineTo(-7.1,-12.3).curveTo(-12.2,-1.2,-16.5,3.7).curveTo(-17.7,5,-16,4.6).curveTo(-14.2,4.2,-11.4,1.9).curveTo(-3.3,-4.7,2.2,-17.9).curveTo(9.1,-34.6,7.7,-51.4).curveTo(6.2,-67.5,-3,-82.5).lineTo(8.4,-79.1).curveTo(19.9,-75.5,20.2,-74.5).curveTo(21.9,-69.2,30,-13).curveTo(38.8,47.8,35.6,50.9).curveTo(33.1,53.4,18.6,68.7).curveTo(4.4,82.5,-1.4,82.6).lineTo(-1.5,82.5).closePath();
	this.shape_139.setTransform(-22.0233,-44.3499);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-19.1,30.1).curveTo(-32.5,25.8,-34.2,13.9).curveTo(-36.3,-0.7,-27.6,-15).curveTo(-18,-30.8,-2,-32).curveTo(11.5,-33.1,21.8,-25.5).curveTo(32.4,-17.9,34.2,-5).curveTo(36.1,8.1,28.2,18.8).curveTo(20.3,29.4,7.2,31.3).curveTo(1.1,32.1,-4.2,32.1).curveTo(-12.5,32.1,-19.1,30.1).closePath();
	this.shape_140.setTransform(-50.845,-93.232);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-80.6,64.2).curveTo(-86.1,61.4,-87.8,53.3).curveTo(-90.3,41.8,-84.8,21.2).curveTo(-84.4,19.5,-78,-35).lineTo(-79,-63.5).lineTo(-58.6,-64.1).curveTo(-34.2,-64.7,-14.1,-64.2).curveTo(5.9,-63.7,31.2,-58.7).curveTo(43.8,-56.3,52.4,-53.9).lineTo(56.6,-52.5).curveTo(61.8,-50.5,66.5,-48).curveTo(81.7,-39.8,86.8,-28.3).curveTo(92.3,-15.8,80.9,-1.9).curveTo(74,6.6,66.9,10.6).curveTo(65.9,11.2,61.5,22.2).curveTo(56.3,33.2,50.3,34.1).curveTo(41.3,35.3,21.8,35.7).curveTo(-0.2,36,-9.2,34.2).curveTo(-16.5,32.8,-47.8,49.3).curveTo(-66,58.9,-69,60.4).curveTo(-77.2,64.4,-79.8,64.4).curveTo(-80.3,64.4,-80.6,64.2).closePath();
	this.shape_141.setTransform(26.2287,-61.7406);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.instance_11},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.instance_10},{t:this.instance_9},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},11).to({state:[]},5).wait(38));

	// Layer_9
	this.instance_12 = new lib.Symbol18("synched",0,false);
	this.instance_12.setTransform(-2,-62,1,1,0,0,0,152.2,240.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},11).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-574,-302.2,1152.2,607.6);
p.frameBounds = [rect, rect, new cjs.Rectangle(-574,-300.6,1152.2,606.1), new cjs.Rectangle(-574,-299.1,1152.2,604.6), new cjs.Rectangle(-574,-297.7,1152.2,603.1), new cjs.Rectangle(-574,-296.1,1152.2,601.6), new cjs.Rectangle(-574,-294.6,1152.2,600.1), new cjs.Rectangle(-574,-293.1,1152.2,598.5), new cjs.Rectangle(-574,-291.6,1152.2,597.1), rect=new cjs.Rectangle(-574,-290.2,1152.2,595.7), rect, rect=new cjs.Rectangle(-574,-292.5,1152.2,598), rect, rect, rect, rect, rect=new cjs.Rectangle(-574,-293.1,1152.2,598.6), rect, rect, rect, rect=new cjs.Rectangle(-574,-284.8,1152.2,590.2), rect, new cjs.Rectangle(-574,-284.2,1152.2,589.6), new cjs.Rectangle(-574,-283.7,1152.2,589.1), new cjs.Rectangle(-574,-283.1,1152.2,588.6), new cjs.Rectangle(-574,-282.6,1152.2,588), new cjs.Rectangle(-574,-282,1152.2,587.5), new cjs.Rectangle(-574,-281.6,1152.2,587), new cjs.Rectangle(-574,-281,1152.2,586.5), new cjs.Rectangle(-574,-280.5,1152.2,585.9), new cjs.Rectangle(-574,-279.9,1152.2,585.3), new cjs.Rectangle(-574,-279.4,1152.2,584.8), new cjs.Rectangle(-574,-278.8,1152.2,584.3), new cjs.Rectangle(-574,-278.3,1152.2,583.7), rect=new cjs.Rectangle(-574,-277.8,1152.2,583.3), rect, rect, rect, rect, new cjs.Rectangle(-574,-278.2,1152.2,583.6), new cjs.Rectangle(-574,-278.7,1152.2,584.2), new cjs.Rectangle(-574,-279.3,1152.2,584.8), new cjs.Rectangle(-574,-279.8,1152.2,585.2), new cjs.Rectangle(-574,-280.3,1152.2,585.8), new cjs.Rectangle(-574,-280.8,1152.2,586.2), new cjs.Rectangle(-574,-281.3,1152.2,586.7), new cjs.Rectangle(-574,-281.8,1152.2,587.2), new cjs.Rectangle(-574,-282.2,1152.2,587.7), new cjs.Rectangle(-574,-282.8,1152.2,588.2), new cjs.Rectangle(-574,-283.3,1152.2,588.7), new cjs.Rectangle(-574,-283.7,1152.2,589.2), new cjs.Rectangle(-574,-284.3,1152.2,589.7), rect=new cjs.Rectangle(-574,-284.8,1152.2,590.2), rect];


(lib.Over_Dehydration = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Symbol2copy("synched",0);
	this.instance.setTransform(-100.65,269.1,1,1,0,0,0,0.1,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:0,scaleY:1.001,skewX:2.5782,x:-100.75},0).wait(2).to({regX:-0.1,scaleY:0.9885,skewX:2.5781,x:-100.85,y:269.15},0).wait(12).to({regX:0,scaleY:1.001,skewX:2.5782,x:-100.75,y:269.1},0).wait(6).to({regX:-0.1,scaleY:1.0001,skewX:-0.6452,x:-100.8},0).to({regX:-0.2,regY:100.2,scaleY:0.9683,skewX:-2.2153,x:-100.85,y:269.35},13).wait(4).to({startPosition:0},0).to({regX:-0.1,regY:100,scaleY:1.0001,skewX:-0.6452,x:-100.8,y:269.1},13).wait(3).to({startPosition:0},0).to({regX:-0.2,regY:100.2,scaleY:0.9683,skewX:-2.2153,x:-100.85,y:269.35},13).wait(4).to({startPosition:0},0).to({regX:-0.1,regY:100,scaleY:1.0001,skewX:-0.6452,x:-100.8,y:269.1},13).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().moveTo(-545.2,261.5).lineTo(-545.2,-261.6).lineTo(545.2,-261.6).lineTo(545.2,261.5).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:4.025,y:-91.5}).wait(84));

	// Layer_9
	this.instance_1 = new lib.Symbol49("synched",0);
	this.instance_1.setTransform(2,3.45);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).wait(64));

	// Layer_13
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-35.3,75.6).curveTo(-35.3,55,-34.3,29.6).curveTo(-32.2,-21.2,-27.1,-45.2).curveTo(-27.2,-54.3,-20.8,-66.2).curveTo(-14.1,-78.5,-8.3,-77.8).curveTo(-1.7,-77,0.1,-78.3).curveTo(1.2,-79,0.8,-81.5).curveTo(0.4,-84.2,1.4,-85.2).curveTo(3.2,-86.9,9.6,-86.7).curveTo(36.4,-85.9,35.2,-43.3).curveTo(34.9,-33,32.7,-26.9).curveTo(30.5,-21.3,24.8,-14.7).lineTo(4.9,86.7).closePath();
	this.shape.setTransform(-93.7493,11.1645);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-8.6,18.4).curveTo(-16.2,14.8,-19.1,6.9).curveTo(-22,-0.9,-18.4,-8.6).curveTo(-14.8,-16.2,-6.9,-19.1).curveTo(1,-21.9,8.6,-18.4).curveTo(16.2,-14.8,19,-6.9).curveTo(21.9,1,18.4,8.6).curveTo(14.8,16.2,6.9,19.1).curveTo(3.4,20.4,-0.1,20.4).curveTo(-4.4,20.4,-8.6,18.4).closePath();
	this.shape_1.setTransform(-109.095,90.2424);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.2,1.3).curveTo(-4.9,0.8,-8.4,-1.5).lineTo(-4.3,-0.4).curveTo(-1.9,0.1,-0.1,0.3).curveTo(1.3,0.5,4.2,0.5).curveTo(5.9,0.5,8.4,0.2).curveTo(6.1,1.1,4.2,1.3).lineTo(2,1.5).lineTo(-0.2,1.3).closePath();
	this.shape_2.setTransform(33.675,-209.0875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-3.3,2.8).curveTo(-1,2,0.7,1.2).curveTo(2.4,0.4,4.4,-1).curveTo(5.9,-2.2,7.5,-4).curveTo(6.4,-1.8,4.9,-0.4).curveTo(3.1,1.1,1.2,2.1).curveTo(-0.8,3,-3.1,3.5).lineTo(-7.5,4).curveTo(-6.1,3.5,-3.3,2.8).closePath();
	this.shape_3.setTransform(-5.2,-202.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#080808").beginStroke().moveTo(-0.4,1).lineTo(-2.9,0.2).curveTo(-4.3,-0.2,-5.2,-0.3).curveTo(-6.4,-0.5,-7.6,-0.1).curveTo(-8.2,0.1,-9.8,1.1).curveTo(-9.1,-0.2,-8,-1).curveTo(-6.7,-1.9,-5.2,-1.9).curveTo(-3.4,-2,0.2,-0.9).curveTo(3.3,0.1,5,0.2).curveTo(6.3,0.4,7.5,0.2).curveTo(8.8,-0.1,9.8,-0.8).curveTo(9.4,0.3,7.8,1.1).curveTo(6.7,1.7,5,1.8).lineTo(4.2,1.9).curveTo(2.1,1.9,-0.4,1).closePath();
	this.shape_4.setTransform(31.9,-217.8375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#080808").beginStroke().moveTo(-11,3.5).lineTo(-5.3,2).curveTo(-2.7,1.2,-0,0.1).lineTo(2.5,-1.4).lineTo(5,-2.8).lineTo(6.4,-3.5).curveTo(7.3,-3.8,8.2,-3.8).curveTo(9.3,-3.6,11,-2.6).lineTo(8.2,-2.8).curveTo(7.6,-2.7,5.9,-1.5).lineTo(3.5,0.2).curveTo(1.8,1.3,0.9,1.8).curveTo(-1.6,3.1,-5.1,3.6).curveTo(-6.4,3.8,-7.8,3.8).curveTo(-9.5,3.8,-11,3.5).closePath();
	this.shape_5.setTransform(-6.05,-209.8392);

	this.instance_2 = new lib.Path_0_2();
	this.instance_2.setTransform(-21.2,133.65,1,1,0,0,0,25.8,18.4);
	this.instance_2.alpha = 0.5313;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Path_1_1_1();
	this.instance_3.setTransform(-26.1,108.15,1,1,0,0,0,23.1,10.3);
	this.instance_3.alpha = 0.5313;
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Path_5();
	this.instance_4.setTransform(-60.85,1.85,1,1,0,0,0,13.2,46);
	this.instance_4.alpha = 0.5313;
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Path_1_0_1();
	this.instance_5.setTransform(0.05,57.65,1,1,0,0,0,74.1,126.8);
	this.instance_5.alpha = 0.2109;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.Path_2_0_1();
	this.instance_6.setTransform(90.1,5.15,1,1,0,0,0,4.4,19);
	this.instance_6.alpha = 0.5313;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Path_3_1();
	this.instance_7.setTransform(88.7,54.6,1,1,0,0,0,16.1,121.6);
	this.instance_7.alpha = 0.2109;
	this.instance_7.compositeOperation = "multiply";

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#477A8E").beginStroke().moveTo(-53,7.3).curveTo(-75,4.3,-75,0).curveTo(-75,-4.2,-53,-7.3).curveTo(-31.1,-10.3,0,-10.3).curveTo(31.1,-10.3,53.1,-7.3).curveTo(75,-4.2,75,0).curveTo(75,4.3,53.1,7.3).curveTo(31.1,10.3,0,10.3).curveTo(-31,10.3,-53,7.3).closePath();
	this.shape_6.setTransform(21.125,99.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#477A8E").beginStroke().moveTo(-86.2,35.3).lineTo(-75,-42.5).lineTo(75.3,-43.3).lineTo(86.2,43.3).closePath();
	this.shape_7.setTransform(20.925,143.325);

	this.instance_8 = new lib.Path_1_3();
	this.instance_8.setTransform(51.15,-97.65,1,1,0,0,0,16.6,9.2);
	this.instance_8.alpha = 0.2109;
	this.instance_8.compositeOperation = "multiply";

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#477A8E").beginStroke().moveTo(-65.1,94.5).lineTo(-65,93.6).curveTo(-69.7,70.2,-77.9,35.6).lineTo(-85.1,5.6).curveTo(-82.7,5,-78.9,1.7).curveTo(-74.6,-2.1,-70.8,-7.9).curveTo(-60.7,-23.4,-59.3,-44.4).curveTo(-57.8,-66.4,-69.8,-83.9).curveTo(-73.6,-89.3,-78.3,-93.7).lineTo(-82.2,-97).curveTo(-72.8,-101,-60.8,-104.9).curveTo(-61.1,-104.8,-59.8,-103.9).curveTo(-57.3,-102.1,-54.6,-99.4).curveTo(-44.4,-89.2,-32.9,-67.5).curveTo(-24.1,-51,-12,-43.3).curveTo(1.8,-34.5,21.4,-36.3).curveTo(48.6,-38.7,49.5,-56.7).curveTo(50.5,-75.4,23.5,-113).curveTo(30.9,-113.5,36.2,-112.4).curveTo(38.8,-111.9,40,-111.3).lineTo(47,-105.2).curveTo(55.5,-97,62.4,-86.9).curveTo(84.6,-54.5,83.5,-14.4).curveTo(82.9,6.1,84,52).curveTo(84.5,74.9,85.1,93.8).lineTo(51.2,113.1).closePath().moveTo(-60.8,-104.9).lineTo(-60.8,-104.9).lineTo(-60.8,-104.9).closePath();
	this.shape_8.setTransform(11.075,6.2583);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-3.9,1.7).lineTo(-9.8,-0.7).curveTo(-4.9,1.1,2.9,-0.7).curveTo(6.8,-1.7,9.8,-3).lineTo(9.6,-1.5).curveTo(8.9,0.4,6.1,2.2).curveTo(4.9,3,2.8,3).curveTo(0.2,3,-3.9,1.7).closePath();
	this.shape_9.setTransform(16.3069,-91.9299);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#D5A690").beginStroke().moveTo(-15.1,56.9).curveTo(-34.7,55.8,-45.9,40.7).curveTo(-49.4,36,-51.6,30.5).lineTo(-53.1,25.9).curveTo(-55.1,10.6,-56.2,-4).curveTo(-58.5,-33.2,-54.4,-29.8).curveTo(-52.8,-28.5,-46.6,-18.6).curveTo(-39.7,-7.8,-33.6,-1.4).curveTo(-12.7,20.6,17.3,14.4).curveTo(44.5,8.8,31.3,-24.8).curveTo(27.2,-35.2,19.5,-47.3).lineTo(12.7,-57.2).lineTo(29.6,-52.7).lineTo(35.7,-47).curveTo(42,-40.9,43,-38.8).lineTo(50.8,-24.3).curveTo(57.1,-11.9,57,-9.6).lineTo(55.8,13.6).curveTo(54,35.3,49.9,41.5).curveTo(44.9,49.1,26.7,53.6).curveTo(12.2,57.2,-4.8,57.2).curveTo(-9.8,57.2,-15.1,56.9).closePath();
	this.shape_10.setTransform(21.8531,-49.5218);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#D5A690").beginStroke().moveTo(-4.6,3.1).curveTo(2.3,-0.4,5.6,-10).curveTo(6.6,-13,7.2,-16.2).lineTo(7.6,-18.7).curveTo(9.3,-7,4.3,2.7).curveTo(1.8,7.6,-1,10.1).lineTo(-8,18.7).closePath();
	this.shape_11.setTransform(-66.0327,-6.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#D5A690").beginStroke().moveTo(-22.8,42.8).lineTo(-17.6,17.6).lineTo(-17.8,24.6).curveTo(-17,30.8,-12.1,27.6).curveTo(-9,24.1,-7.6,22.1).lineTo(-6.8,20.7).curveTo(6,-9.6,-4.2,-36.5).curveTo(-7.4,-44.9,-12.5,-52).lineTo(-16.9,-57.4).lineTo(-1.2,-47.7).curveTo(10.1,-29.9,11.8,-28.3).curveTo(12.8,-27.3,16.5,-18.5).lineTo(20.9,-7.8).curveTo(21.8,-5.6,22.4,7.1).curveTo(23,19.5,22.7,25.7).curveTo(22.4,30.8,15.7,42.1).curveTo(9.7,52.1,7.7,53.5).curveTo(6.1,54.7,-17.8,57.4).closePath();
	this.shape_12.setTransform(-51.275,-30.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-26.1,29.5).curveTo(-36.3,20.4,-36.3,-1.2).curveTo(-36.3,-17.4,-26.1,-27.3).curveTo(-16.2,-37,-0.6,-37).curveTo(14.7,-37,25.5,-26.1).curveTo(36.3,-15.3,36.3,0).curveTo(36.3,15.3,25.5,26.2).curveTo(14.7,37,-0.6,37).curveTo(-17.7,37,-26.1,29.5).closePath();
	this.shape_13.setTransform(-85.725,-45.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#D5A690").beginStroke().moveTo(3.3,7.3).curveTo(2.2,5.6,-3.8,-1.9).lineTo(-9.4,-8.9).curveTo(-8.6,-8.1,-5.5,-8.1).curveTo(-3.8,-8,-2.1,-8.2).lineTo(9.4,8.4).curveTo(8.3,8.8,7,8.9).lineTo(6.5,8.9).curveTo(4.2,8.9,3.3,7.3).closePath();
	this.shape_14.setTransform(41.7375,-98.5439);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-91.9,-66.7).curveTo(-90.9,-67.1,-69.6,-74.7).curveTo(-44.4,-83.6,-29.2,-89.4).curveTo(-19.9,-92.9,-15.8,-94.2).curveTo(-8.5,-96.6,-3.6,-97.1).curveTo(5.9,-98.3,18.2,-96.9).curveTo(25.5,-96,40.4,-93.2).curveTo(48.2,-91.7,56.2,-89.7).curveTo(64.2,-87.7,72.1,-86.2).curveTo(72.8,-86.1,79.2,-83.4).lineTo(85.3,-80.8).lineTo(84.2,-77.3).curveTo(82.9,-72.9,82.1,-67.9).curveTo(79.7,-51.8,83.7,-35.8).curveTo(87.9,-19.2,90.3,-16.7).lineTo(90.6,-16.5).lineTo(38.5,29.4).lineTo(-45.2,97.7).closePath().moveTo(90.6,-16.5).lineTo(91.9,-17.6).curveTo(91.7,-16.3,91.1,-16.3).curveTo(90.9,-16.3,90.6,-16.5).closePath().moveTo(90.6,-16.5).lineTo(90.6,-16.5).closePath();
	this.shape_15.setTransform(-7.575,-13.8593);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#477A8E").beginStroke().moveTo(-2.3,-0.2).lineTo(2.2,0).curveTo(2,0.2,1.2,0.2).curveTo(0.1,0.2,-2.3,-0.2).closePath();
	this.shape_16.setTransform(-44.75,21.7991);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-23.8,23.4).curveTo(-35.2,16.1,-36.5,4.2).curveTo(-37.8,-8.8,-31.9,-17.7).curveTo(-25.3,-27.7,-11.2,-29.2).curveTo(3.7,-30.7,16.7,-23.6).curveTo(29.8,-16.4,35.4,-3.3).curveTo(39.9,7.3,28.7,17.7).curveTo(18,27.6,2.5,29.2).curveTo(-0.1,29.5,-2.6,29.5).curveTo(-14.4,29.5,-23.8,23.4).closePath();
	this.shape_17.setTransform(64.3545,-71.7031);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#477A8E").beginStroke().moveTo(-46.4,9.9).curveTo(-65.7,5.8,-65.7,-0).curveTo(-65.7,-5.8,-46.4,-9.9).curveTo(-27.2,-14,0,-14).curveTo(27.2,-14,46.4,-9.9).curveTo(65.7,-5.8,65.7,-0).curveTo(65.7,5.8,46.4,9.9).curveTo(27.2,14,0,14).curveTo(-27.2,14,-46.4,9.9).closePath();
	this.shape_18.setTransform(15.725,91.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#477A8E").beginStroke().moveTo(0,89.6).curveTo(-29.4,90.7,-52.4,87.2).curveTo(-84.1,82.5,-87.6,70.4).curveTo(-92,54.8,-80,-9.9).curveTo(-76.2,-30.1,-71.3,-52.9).lineTo(-63.5,-87.5).lineTo(-16.7,-88.9).lineTo(-16.7,-89.9).lineTo(0,-89.4).lineTo(16.7,-89.9).lineTo(16.7,-88.9).lineTo(63.5,-87.5).lineTo(71.3,-52.9).curveTo(76.3,-30.2,80,-9.9).curveTo(92,54.8,87.6,70.4).curveTo(84.1,82.5,52.4,87.2).curveTo(34.8,89.9,13.4,89.9).curveTo(6.9,89.9,0,89.6).closePath();
	this.shape_19.setTransform(18.3768,165.6725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.4,0.9).curveTo(-1.4,0.5,-1.9,0).curveTo(-2.8,-0.6,-3.2,-1.2).lineTo(3.2,0.8).curveTo(2.4,1.2,1.4,1.2).curveTo(0.7,1.2,-0.4,0.9).closePath();
	this.shape_20.setTransform(26.925,-204.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#EFC7B0").beginStroke().moveTo(2.4,-2.8).curveTo(2.4,-1.8,2,-0.9).curveTo(1.5,-0,0.9,0.8).lineTo(-0.6,2).curveTo(-1.5,2.5,-2.4,2.7).closePath();
	this.shape_21.setTransform(3.2,-199.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#EFC7B0").beginStroke().moveTo(0.2,-1.6).curveTo(1.3,-3.6,2.3,-5.1).lineTo(2.4,-2.8).lineTo(-2.4,5.1).curveTo(-1.9,2.5,0.2,-1.6).closePath();
	this.shape_22.setTransform(11.525,-175.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.1,2.3).lineTo(-3.4,-0.4).curveTo(-1.5,-1.7,-0.9,-1.6).lineTo(1.5,-1.4).lineTo(2.3,-2).curveTo(3.3,-2.5,3.9,-2.3).curveTo(5.3,-1.7,6.9,-0.4).lineTo(7.1,-0.3).curveTo(3.5,-0.8,-1.6,0.5).curveTo(-5,1.3,-7.1,2.3).closePath();
	this.shape_23.setTransform(25.475,-163.6786);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#A51727").beginStroke().moveTo(-6.6,1.7).lineTo(-2.9,-1).curveTo(-1,-2.3,-0.4,-2.3).lineTo(2.1,-2.1).lineTo(2.9,-2.6).curveTo(3.8,-3.1,4.4,-2.9).curveTo(5.9,-2.3,7.4,-1.1).lineTo(8.8,-0.2).curveTo(5.3,-0.4,-2.2,1.3).lineTo(-8.8,3).curveTo(-8.2,2.8,-6.6,1.7).closePath();
	this.shape_24.setTransform(24.9125,-163.0161);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FFAFAF").beginStroke().moveTo(-7.3,5.5).lineTo(-11.2,3.9).curveTo(-9.8,1.9,-7.9,-0.3).curveTo(-4.1,-4.7,-1.6,-5.5).curveTo(0.6,-6.2,1.6,-5.3).curveTo(2,-4.9,2.4,-5.3).curveTo(3.4,-6.8,5,-6.4).curveTo(6.8,-6,8.5,-4.6).curveTo(10.6,-2.8,11.2,-0.2).lineTo(10.7,1.8).curveTo(9.8,3.9,8.6,4.2).lineTo(5.2,4.9).curveTo(2.6,5.3,-0.9,6.3).curveTo(-1.5,6.5,-2.4,6.5).curveTo(-4.4,6.5,-7.3,5.5).closePath();
	this.shape_25.setTransform(24.3,-163.2176);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#080808").beginStroke().moveTo(-4.1,2).lineTo(-6.4,1.5).lineTo(-8.5,0.6).lineTo(0.4,0.7).curveTo(2.5,0.5,4.5,-0.2).curveTo(6.9,-1.1,8.5,-2.2).curveTo(7.4,-0.4,5,0.8).curveTo(3.2,1.8,0.5,2.2).lineTo(-1,2.2).curveTo(-2.4,2.2,-4.1,2).closePath();
	this.shape_26.setTransform(33.6,-206.6519);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#080808").beginStroke().moveTo(-4.4,2.5).curveTo(-7.1,2.2,-9.3,1.2).curveTo(-3.5,1.5,0.5,0.9).curveTo(2.5,0.6,5,-0.3).curveTo(7,-1.1,9.3,-2.6).curveTo(7.9,-0.5,5.5,0.8).curveTo(3.4,1.9,0.6,2.4).curveTo(-0.9,2.6,-2.3,2.6).lineTo(-4.4,2.5).closePath();
	this.shape_27.setTransform(-4.2,-199.7857);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#EFC7B0").beginStroke().moveTo(4.1,9.6).curveTo(0.9,8.6,-1.5,4.7).curveTo(-2.6,3.2,-4.4,-1.6).curveTo(-6.6,-7.3,-6.1,-9.1).curveTo(-5.9,-10,-5,-9.8).curveTo(-4.5,-9.7,-3.7,-9).curveTo(-1.4,-6.7,-0.5,-5.6).curveTo(1.3,-3.4,1.8,-1.7).lineTo(2.1,1.6).curveTo(2.2,3.3,3.6,4.5).curveTo(5.1,5.7,6,8).curveTo(6.7,9.9,5.3,9.9).curveTo(4.9,9.9,4.1,9.6).closePath();
	this.shape_28.setTransform(-46.1583,-181.8758);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.3,3.4).lineTo(-3.3,2.8).curveTo(-5.4,2.8,-6.3,2.6).curveTo(-7.9,2.2,-8,0.5).curveTo(-8.1,-0.3,-7.5,-1.6).curveTo(-7.8,-0.7,-7.3,0.1).curveTo(-6.8,1.2,-5.2,1.2).curveTo(-4.4,1.2,-2.6,1).curveTo(-1.9,1,-0.1,1.4).curveTo(1.5,1.7,2.4,1.6).curveTo(3,1.6,4.2,0.9).curveTo(5.5,0.2,6.3,-0.6).curveTo(7.4,-1.7,6.8,-3.7).lineTo(7.7,-2.5).curveTo(8.4,-1.2,7.8,0).curveTo(7.6,0.3,7.2,0.7).lineTo(6.3,1.3).lineTo(4.9,2.7).curveTo(4.2,3.3,2.7,3.6).lineTo(1.9,3.7).curveTo(1,3.7,-0.3,3.4).closePath();
	this.shape_29.setTransform(21.5488,-179.1054);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#D5A690").beginStroke().moveTo(-1.1,8.3).curveTo(-2.9,5.1,-3.7,1.2).curveTo(-4.4,-2.6,-4.1,-6.4).curveTo(-3.9,-10.7,-2.8,-13.7).curveTo(-2.8,-9.6,-2.6,-6.4).curveTo(-2.3,-2.3,-1.7,0.8).curveTo(-1.1,4.1,0.3,7.6).curveTo(1.8,10.7,4.2,13.7).curveTo(1.1,11.8,-1.1,8.3).closePath();
	this.shape_30.setTransform(52.6921,-240.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#E2B19F").beginStroke().moveTo(1.9,3.6).curveTo(-0.8,-5.4,-2.4,-11.2).lineTo(-3.8,-13.5).lineTo(-3.9,-13.6).lineTo(-3.9,-13.6).lineTo(-4.3,-14.9).curveTo(-4.3,-15.3,-4.5,-15.6).lineTo(-4.9,-16.1).lineTo(-6.7,-18.3).curveTo(-5.8,-17.5,-4.7,-16.3).lineTo(-4.2,-15.8).curveTo(-3.9,-15.5,-3.8,-15.1).lineTo(-3.4,-13.8).lineTo(-3.4,-13.8).lineTo(-1.8,-11.5).lineTo(-1.7,-11.5).lineTo(-1.7,-11.4).curveTo(0.4,-5,2.8,3.3).lineTo(4.9,10.8).lineTo(6.8,18.3).closePath();
	this.shape_31.setTransform(59.85,-251.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#E2B19F").beginStroke().moveTo(3.4,2.4).curveTo(2.5,1.9,1.6,2).lineTo(1.5,2).lineTo(1.5,2).curveTo(-0.4,0.5,-1.7,-0.8).curveTo(-3.5,-2.4,-4.7,-3.7).curveTo(-3.2,-2.6,-1.4,-1).lineTo(1.7,1.7).curveTo(2.6,1.6,3.5,2.1).curveTo(4.4,2.7,4.7,3.7).curveTo(4.2,2.8,3.4,2.4).closePath();
	this.shape_32.setTransform(50.775,-267);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#E2B19F").beginStroke().moveTo(-0.3,0.3).curveTo(-4,-3.7,-5.9,-6.3).curveTo(-3.2,-4.1,0.3,-0.3).curveTo(3.7,3.2,5.9,6.3).curveTo(3,3.9,-0.3,0.3).closePath();
	this.shape_33.setTransform(47.225,-257.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#E2B19F").beginStroke().moveTo(16.9,10).curveTo(16.7,9.5,16.1,8.9).lineTo(15.2,7.9).lineTo(5.4,-2.6).lineTo(3.6,-3.5).lineTo(-1.5,-5.5).lineTo(-4.1,-6.4).curveTo(-5.5,-6.8,-6.7,-7.3).curveTo(-9.5,-8.5,-16.5,-11.7).curveTo(-17.1,-10.7,-17.3,-9.8).curveTo(-17.5,-8.5,-17.2,-7.4).curveTo(-16.6,-5.3,-14.6,-3.4).lineTo(-7.9,0.9).lineTo(-7.8,1).lineTo(-7.9,1.1).curveTo(-8.5,2.2,-8.1,3.7).curveTo(-7.7,5.1,-7,6.2).curveTo(-7.9,5,-8.2,3.7).curveTo(-8.6,2.3,-8.1,1.1).lineTo(-14.8,-3).lineTo(-14.8,-3).curveTo(-15.8,-3.9,-16.6,-4.9).curveTo(-17.4,-6,-17.7,-7.3).curveTo(-18.1,-8.5,-17.9,-9.9).curveTo(-17.7,-11.1,-16.8,-12.3).lineTo(-16.7,-12.5).lineTo(-16.5,-12.4).lineTo(-6.4,-8).curveTo(1,-5.4,3.8,-4).curveTo(4.4,-3.8,5.1,-3.4).lineTo(5.7,-3.1).lineTo(6.3,-2.6).lineTo(16.4,8.7).curveTo(16.9,9.3,17.1,9.9).lineTo(17.9,12.5).closePath();
	this.shape_34.setTransform(38.6519,-276.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#E2B19F").beginStroke().moveTo(8.5,7.6).lineTo(0,-2.3).lineTo(0.2,-2.2).lineTo(-6.5,-6.4).lineTo(-6.5,-6.4).curveTo(-7.6,-7,-8.6,-7.9).curveTo(-9.7,-8.9,-10.3,-10).curveTo(-11,-11.2,-11,-12.6).curveTo(-11,-13.9,-10.3,-15.2).lineTo(-10.2,-15.5).lineTo(4.3,-9.7).lineTo(4.3,-9.7).lineTo(4.3,-9.6).lineTo(11,-3.5).lineTo(4.1,-9.3).lineTo(-9.9,-14.7).curveTo(-10.3,-13.5,-10.3,-12.6).curveTo(-10.3,-11.4,-9.7,-10.3).curveTo(-8.6,-8.3,-6.1,-6.9).lineTo(0.5,-2.8).lineTo(0.5,-2.8).lineTo(0.5,-2.7).lineTo(8.7,7.5).lineTo(8.8,7.5).lineTo(8.8,7.6).curveTo(8.5,11.9,7.6,15.5).curveTo(8.4,11.8,8.5,7.6).closePath();
	this.shape_35.setTransform(41.25,-261.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#FDE4C8").beginStroke().moveTo(0.2,7).curveTo(-0,3.6,0.5,0.2).lineTo(1,-2.4).lineTo(-7.4,-12.5).lineTo(-14,-16.6).curveTo(-17.9,-19,-18.2,-22.3).lineTo(-17.7,-25.1).lineTo(7.3,-13.2).lineTo(8.9,-10.8).lineTo(18.2,20.2).curveTo(16.9,22,12.3,23.7).lineTo(8,25.1).curveTo(0.8,17.7,0.2,7).closePath();
	this.shape_36.setTransform(48.925,-251.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#FDE4C8").beginStroke().moveTo(9.9,-1.5).curveTo(-7.3,-11,-15.1,-16).curveTo(-20.1,-19,-19.9,-22.9).curveTo(-19.8,-24.1,-19.2,-25.2).lineTo(-18.7,-26.1).lineTo(-13,-23.5).curveTo(-6.9,-20.9,-4.8,-20.3).curveTo(-1.3,-19.5,3.3,-17).lineTo(8.3,-11.5).curveTo(13.6,-5.8,14.7,-4.4).curveTo(16.5,-2.3,19.9,21).lineTo(18.1,26.1).closePath();
	this.shape_37.setTransform(40.7711,-262.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#080808").beginStroke().moveTo(0.6,2.6).lineTo(-1.1,-2.5).lineTo(-3.2,-9.8).lineTo(-0.6,-2.7).lineTo(1,2.5).lineTo(3.2,9.8).closePath();
	this.shape_38.setTransform(39.15,-244.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#080808").beginStroke().moveTo(0.3,1.4).lineTo(-0,-1.4).curveTo(-0.3,-3.6,-0.7,-5.4).curveTo(-0.2,-3.5,0.2,-1.5).curveTo(0.5,-0.2,0.5,1.4).curveTo(0.7,3.3,0.7,5.3).lineTo(0.3,1.4).closePath();
	this.shape_39.setTransform(33,-255);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#080808").beginStroke().moveTo(-0.3,3.1).curveTo(1.2,0.8,2.5,-1.8).curveTo(4.3,-5.5,5.2,-9.2).curveTo(4.5,-5.2,3,-1.6).curveTo(1.8,1.3,0.2,3.3).curveTo(-2.2,6.5,-5.2,9.2).curveTo(-2.4,6.4,-0.3,3.1).closePath();
	this.shape_40.setTransform(27.75,-255.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#080808").beginStroke().moveTo(-1.2,3.7).curveTo(1.8,1.4,4.2,-0.9).curveTo(8.1,-4.8,9.7,-9.2).curveTo(8.3,-4.7,4.6,-0.5).curveTo(2.5,2,-0.9,4.3).curveTo(-4.2,6.5,-9.7,9.2).curveTo(-4.4,6.2,-1.2,3.7).closePath();
	this.shape_41.setTransform(9.1,-248.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#080808").beginStroke().moveTo(-13.4,10.3).curveTo(-7.9,8.4,-3.9,6.7).lineTo(2.6,3.9).curveTo(6.4,2.3,8.9,0.8).curveTo(10.5,-0.2,13,-2).curveTo(15.1,-3.6,16.8,-5.3).lineTo(18.5,-7.1).lineTo(19.8,-9.2).curveTo(21.2,-11.3,23.1,-13.1).curveTo(21.4,-11,20.4,-8.9).lineTo(19.1,-6.6).curveTo(18.3,-5.2,17.7,-4.5).curveTo(16.4,-2.9,14.2,-0.7).lineTo(10.3,2.8).curveTo(5,6.5,-3.1,9).curveTo(-8,10.3,-13,11.4).curveTo(-18.6,12.5,-23.1,13.1).curveTo(-19.1,12.2,-13.4,10.3).closePath();
	this.shape_42.setTransform(-10.25,-246.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#080808").beginStroke().moveTo(-0.5,2.7).curveTo(-1.5,0.5,-2.1,-1.6).curveTo(-2.7,-4.9,-2.9,-8).curveTo(-2.3,-4.8,-1.3,-1.9).lineTo(0.3,2.3).curveTo(1.5,5.7,2.9,8).curveTo(0.9,5.4,-0.5,2.7).closePath();
	this.shape_43.setTransform(-36.85,-191.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#080808").beginStroke().moveTo(1.5,11.3).curveTo(1.6,8.2,1.3,4.5).curveTo(0.8,-0.8,0.2,-4.9).curveTo(-0.2,-8,-1.1,-11.6).curveTo(-2,-15.3,-3.1,-18).curveTo(-1.6,-15.2,-0.2,-11.8).curveTo(1.1,-8.2,1.9,-5.3).curveTo(3.2,-0.3,3,4.5).curveTo(2.9,8,2.4,11.4).curveTo(2,14.1,1,18).curveTo(1.4,14.9,1.5,11.3).closePath();
	this.shape_44.setTransform(-40.192,-214.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#080808").beginStroke().moveTo(1.5,2.6).lineTo(-0.3,-3).curveTo(-1.5,-6.8,-3.4,-10.7).curveTo(-1,-7,0.7,-3.4).curveTo(2,-0.5,2.5,2.3).curveTo(3.4,6.5,3.4,10.7).curveTo(2.8,6.6,1.5,2.6).closePath();
	this.shape_45.setTransform(-39.825,-223.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#FDE4C8").beginStroke().moveTo(19.6,62.4).curveTo(7.5,59.3,-3.4,55.1).curveTo(-19.1,49,-23.4,43.6).curveTo(-27.5,38.4,-29.8,33.5).lineTo(-31.4,29.6).curveTo(-34.1,30.2,-37.7,29.2).curveTo(-44.9,27.3,-48.9,19.3).curveTo(-53.5,10.3,-53.7,4.8).curveTo(-53.8,-0.1,-50.4,-1.3).curveTo(-47.4,-2.3,-45,-0.4).curveTo(-43.2,0.9,-41,4.5).curveTo(-37.9,9.4,-37,12.1).curveTo(-36.8,12.6,-36.4,13).lineTo(-35.6,13.5).lineTo(-36.3,11.6).lineTo(-35.5,12.6).curveTo(-35.1,13.1,-34.5,13.5).lineTo(-35.3,11.4).lineTo(-34.1,12.5).curveTo(-33.5,13,-31.6,13.6).curveTo(-32.4,12.7,-32.8,11).curveTo(-33.8,6.7,-34.3,2).curveTo(-35,-4.2,-34.1,-6.9).curveTo(-31.3,-15.3,-33.6,-26.8).curveTo(-35.7,-37.8,-40,-40.9).lineTo(-38.2,-40.2).curveTo(-35.7,-39.5,-32.9,-39.1).curveTo(-23.8,-38,-13.8,-41.2).curveTo(-6.6,-43.5,2.1,-47.5).curveTo(8.1,-50.2,8,-49.8).curveTo(6.5,-47.7,3.1,-44.7).curveTo(1.5,-43.3,-0.3,-42.1).lineTo(-1.9,-41.1).curveTo(5,-43.1,12.6,-48.3).curveTo(16.4,-50.9,18.8,-53.1).lineTo(13.7,-44.2).curveTo(16.3,-45.3,22.1,-51.2).curveTo(25,-54.2,27.3,-57).lineTo(22.5,-47.1).lineTo(24.9,-49.1).curveTo(27.8,-51.6,30.3,-54.7).curveTo(32.7,-57.7,34.4,-60.9).curveTo(35.2,-62.4,35.5,-63.4).curveTo(37.3,-54.7,36.9,-57.7).lineTo(38.1,-50.7).lineTo(38.9,-57.3).lineTo(40.1,-53.7).lineTo(42.2,-47.3).curveTo(44.7,-38.5,45.5,-35.3).curveTo(46.7,-30.1,47.3,-23.5).curveTo(47.7,-19.9,49.6,-10.6).curveTo(51.8,-0.1,52.3,2.9).lineTo(53.6,10.6).curveTo(54.3,20.6,51.3,32.5).curveTo(48.4,44.3,46.8,49).curveTo(45.2,54,43.2,57.1).curveTo(40.3,61.4,33.3,62.8).curveTo(30.4,63.4,27.4,63.4).curveTo(23.5,63.4,19.6,62.4).closePath();
	this.shape_46.setTransform(-3.561,-197.2687);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#080808").beginStroke().moveTo(1,3.9).curveTo(0.8,-0.6,0.4,-4.1).curveTo(-0.3,-9.9,-1.8,-15.1).curveTo(0.1,-9.8,1.1,-4.2).curveTo(1.8,-0.1,1.8,3.9).curveTo(1.7,9.8,0.8,15.1).curveTo(1.4,9.3,1,3.9).closePath();
	this.shape_47.setTransform(45.775,-249.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#080808").beginStroke().moveTo(-9.5,0.1).curveTo(-7.2,-3,-4.8,-5.1).curveTo(-2,-7.6,0.7,-9.3).curveTo(9.6,-15.3,18.4,-17.5).curveTo(9.7,-14.8,1.5,-8.3).lineTo(-3.8,-4).curveTo(-6,-2.1,-8.5,0.9).curveTo(-14.6,8.3,-18.4,17.5).curveTo(-15.1,7.9,-9.5,0.1).closePath();
	this.shape_48.setTransform(-63.175,-271.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#080808").beginStroke().moveTo(-14.4,1.4).curveTo(-10.7,-0.6,-6.8,-2.2).curveTo(-1.4,-4.4,4.7,-5.2).curveTo(8.3,-5.8,13,-5.9).curveTo(16.8,-6.1,21.2,-5.8).curveTo(16.4,-5.7,13,-5.4).curveTo(8.5,-4.9,4.9,-4.2).curveTo(-1.3,-2.9,-6.5,-1.2).curveTo(-9.9,-0.1,-14.1,1.8).curveTo(-17.6,3.6,-21.2,6).curveTo(-18,3.5,-14.4,1.4).closePath();
	this.shape_49.setTransform(-39.3,-289.4531);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#080808").beginStroke().moveTo(-15.8,-0.2).curveTo(-10.7,-1.3,-6.7,-1.9).curveTo(-0.5,-2.8,6.5,-2.3).curveTo(10.7,-2,15.7,-1.2).curveTo(19.4,-0.5,24.6,0.9).curveTo(20,-0.1,15.6,-0.6).curveTo(10,-1.1,6.4,-1.1).curveTo(0.3,-1.2,-6.6,-0.7).curveTo(-10.6,-0.5,-15.7,0.4).curveTo(-20.2,1.2,-24.6,2.5).curveTo(-20.6,1,-15.8,-0.2).closePath();
	this.shape_50.setTransform(-20.75,-296.2362);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#080808").beginStroke().moveTo(14.7,1.9).curveTo(10.9,-0.6,7.2,-2).curveTo(1.7,-4.2,-4.2,-5.3).curveTo(-8.1,-6,-12.6,-6).curveTo(-16.8,-5.9,-21.1,-4.9).curveTo(-17,-6.4,-12.7,-7.1).curveTo(-7.7,-7.7,-3.9,-7.5).curveTo(2.6,-7.1,8.2,-4).curveTo(12,-2,15.4,1).curveTo(18.5,3.9,21.1,7.5).curveTo(18,4.1,14.7,1.9).closePath();
	this.shape_51.setTransform(5.275,-292.7868);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#080808").beginStroke().moveTo(6.2,0.7).curveTo(4.4,-0.2,2.9,-0.7).curveTo(0.5,-1.5,-2,-1.9).curveTo(-3.9,-2.2,-5.6,-2.1).curveTo(-7.5,-2,-9.2,-1.6).curveTo(-7.8,-2.2,-5.7,-2.6).curveTo(-3.5,-2.9,-1.9,-2.8).curveTo(0.8,-2.7,3.3,-1.6).curveTo(4.8,-0.8,6.5,0.3).curveTo(8.1,1.5,9.2,2.8).curveTo(7.8,1.6,6.2,0.7).closePath();
	this.shape_52.setTransform(32.775,-280.5292);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#080808").beginStroke().moveTo(5.2,0).curveTo(2.8,-2.2,-0.8,-4.6).curveTo(-5.3,-7.5,-10.7,-9).curveTo(-5.2,-8.3,-0.2,-5.8).curveTo(3.6,-4,6.2,-1).curveTo(8.3,1.5,9.3,3.7).curveTo(10.4,6.4,10.6,9).curveTo(9.6,4,5.2,0).closePath();
	this.shape_53.setTransform(34.85,-275.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#080808").beginStroke().moveTo(6.1,6.5).curveTo(4.9,3.8,3.8,1.9).curveTo(1.9,-1.2,-0.3,-4.2).curveTo(-2,-6.4,-3.7,-8.2).curveTo(-5.9,-10.3,-7.7,-11.5).curveTo(-5.3,-10.2,-3.3,-8.7).curveTo(-1,-6.9,0.7,-5.1).curveTo(3.4,-2.3,5,1.3).curveTo(6.1,3.9,6.8,6.3).curveTo(7.4,8.7,7.7,11.5).curveTo(7.2,9.1,6.1,6.5).closePath();
	this.shape_54.setTransform(22.875,-286.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#080808").beginStroke().moveTo(2.2,6).curveTo(-2.4,-1.7,-4.2,-5).curveTo(-6.7,-10.1,-7.9,-13.3).curveTo(-9.4,-17.7,-10.3,-22).curveTo(-8.7,-17.4,-6.8,-13.7).curveTo(-5.1,-10.5,-2.2,-6.2).curveTo(2.1,0.1,4.3,4.9).curveTo(8,13.4,10.2,22).curveTo(7,13.7,2.2,6).closePath();
	this.shape_55.setTransform(-47.2,-167.325);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#080808").beginStroke().moveTo(-2.9,10.4).curveTo(-7.8,4.1,-10.3,-3.6).curveTo(-13.7,-14.2,-13,-25.3).curveTo(-12.6,-14.4,-8.4,-4.3).curveTo(-5.5,2.4,-1.2,9.2).curveTo(4.8,18.8,13.1,25.3).curveTo(4.1,19.5,-2.9,10.4).closePath();
	this.shape_56.setTransform(-62.2848,-201.225);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#080808").beginStroke().moveTo(-2.5,7.5).curveTo(-3.4,-0,-2.7,-7.5).curveTo(-1.9,-13.8,-0.9,-17.9).curveTo(0.7,-23.9,2.8,-27.7).curveTo(0.9,-23.6,-0.2,-17.8).curveTo(-1.1,-13.4,-1.3,-7.4).curveTo(-1.6,-0.3,-1.2,7.4).curveTo(-0.3,19.6,3,27.7).curveTo(-0.9,19.7,-2.5,7.5).closePath();
	this.shape_57.setTransform(-78.0455,-234.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#080808").beginStroke().moveTo(-3.8,3).curveTo(-3.4,-1.1,-1.7,-4.6).curveTo(0,-8.2,4,-14.1).curveTo(0.9,-8,-0.4,-4.1).curveTo(-1.4,-1,-2.4,3.3).curveTo(-3.6,8.6,-3.3,14.1).curveTo(-4.3,8.6,-3.8,3).closePath();
	this.shape_58.setTransform(-79.3056,-247.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#EFC7B0").beginStroke().moveTo(10.4,31.5).curveTo(2.5,30.1,-10.8,24).curveTo(-16.3,21.5,-22.8,16.3).curveTo(-30.8,9.8,-33.4,3.9).curveTo(-34.4,-1.7,-35.7,-6.4).lineTo(-38,-13.8).lineTo(-39.5,-18.4).curveTo(-31.9,-23.8,-29.1,-26.9).curveTo(-25,-25.7,-21.5,-24.5).lineTo(-21.4,-24.6).lineTo(-21.3,-24.5).lineTo(-21.1,-24.6).curveTo(-6,-31.8,-3.5,-32).lineTo(-3.4,-32).curveTo(-1,-31.9,27.9,-4).lineTo(27.8,-3.1).curveTo(27.6,-1.4,33.2,4.3).curveTo(37.5,8.7,38.8,10.6).curveTo(38,10.2,36.2,9.9).curveTo(32.4,9.4,28.9,10.8).lineTo(28.9,11.6).curveTo(28.3,11.3,27.8,11.3).curveTo(27.1,11.7,26.9,11.5).curveTo(25.7,12.2,26.6,16.7).lineTo(27.7,25).curveTo(27.7,30.7,23.5,31.5).curveTo(19.8,32,16.5,32).curveTo(13.2,32,10.4,31.5).closePath().moveTo(38.8,10.6).curveTo(39.8,11.1,39.5,11.7).curveTo(39.4,11.3,38.8,10.6).closePath();
	this.shape_59.setTransform(-1.1543,-153.075);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-18.3,49.7).lineTo(-40,26.7).curveTo(-22.8,19.5,-27,-13.4).curveTo(-28.3,-23.6,-31.6,-35.2).lineTo(-34.6,-44.8).curveTo(-31.9,-46.6,-29.2,-48.9).curveTo(-23.6,-53.3,-23.1,-54.9).curveTo(-22.7,-56.6,-19.5,-53.9).curveTo(-17.9,-52.6,-16.4,-50.9).lineTo(-8.5,-54.6).curveTo(-0.2,-58.3,1.5,-58.4).curveTo(3.1,-58.4,20.7,-41.9).curveTo(29.4,-33.8,37.7,-25.7).curveTo(37.1,-24.7,35.3,-20.5).curveTo(35.1,-19.9,37.2,-18.1).curveTo(39,-16.5,37.6,-15.2).curveTo(34.4,-13,33.1,-12).curveTo(30.9,-10.1,31.5,-7.3).curveTo(32.1,-4.8,33.1,1.4).lineTo(34.4,8.9).curveTo(35.9,15.5,38.1,18.9).curveTo(39.2,20.6,40,20.9).lineTo(24,45.8).curveTo(17,57.1,3.8,58.3).lineTo(1,58.4).curveTo(-10.4,58.4,-18.3,49.7).closePath().moveTo(37.7,-25.7).lineTo(37.9,-25.9).curveTo(38.2,-26.2,38,-25.4).lineTo(37.7,-25.7).closePath().moveTo(37.7,-25.7).lineTo(37.7,-25.7).closePath();
	this.shape_60.setTransform(-6.075,-126.6596);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#080808").beginStroke().moveTo(2.3,82.4).curveTo(-8.8,78.8,-10.4,74.7).curveTo(-11.4,72.2,-28.2,47.2).curveTo(-46.5,19.9,-53.7,6.4).curveTo(-61.6,-8.6,-61.6,-25.3).curveTo(-61.6,-30.5,-60.9,-35.2).lineTo(-60.1,-38.9).lineTo(-64.9,-29.9).curveTo(-61,-54.3,-41.4,-68.7).curveTo(-31.6,-75.9,-22.6,-78.3).lineTo(-35.2,-75.3).lineTo(-32.5,-76.8).curveTo(-28.9,-78.7,-24.3,-80.2).curveTo(-9.4,-85.2,10.3,-85.1).curveTo(30,-85,40.4,-77.7).curveTo(45.6,-74,46.8,-70.3).lineTo(48.3,-69.9).curveTo(50.1,-69.2,52,-68.1).curveTo(58,-64.3,61.8,-56.8).curveTo(65.6,-49.4,64.8,-26.5).curveTo(64.4,-15.1,63.3,-5.1).lineTo(13.1,85.1).curveTo(7.9,84.2,2.3,82.4).closePath();
	this.shape_61.setTransform(-18.5054,-212.6252);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#080808").beginStroke().moveTo(0.8,1.1).lineTo(-0.1,-1.4).curveTo(-0.6,-3,-1.7,-4.7).curveTo(-0.7,-3.4,0.3,-1.5).curveTo(0.9,-0.3,1.2,1).curveTo(1.6,2.5,1.7,4.7).curveTo(1.4,2.8,0.8,1.1).closePath();
	this.shape_62.setTransform(-28.3,-161.175);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#D5A690").beginStroke().moveTo(-18.7,1.2).curveTo(-14.3,0.2,-9.4,-0.3).curveTo(-6.3,-0.7,-0,-1.1).curveTo(6.2,-1.3,9.3,-1.2).curveTo(14.3,-1.1,18.7,-0.5).curveTo(14.7,-0,9.3,0.3).lineTo(-0,0.9).lineTo(-9.3,1.2).lineTo(-14.8,1.3).lineTo(-18.7,1.2).closePath();
	this.shape_63.setTransform(153.15,-164.9167);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-9.2,18.1).curveTo(-16.7,14.2,-19.3,6.3).curveTo(-21.9,-1.7,-18.1,-9.2).curveTo(-14.3,-16.7,-6.3,-19.3).curveTo(1.7,-21.9,9.2,-18.1).curveTo(16.7,-14.3,19.3,-6.3).curveTo(21.9,1.7,18.1,9.2).curveTo(14.3,16.6,6.3,19.3).curveTo(3.1,20.3,-0.1,20.3).curveTo(-4.7,20.3,-9.2,18.1).closePath();
	this.shape_64.setTransform(163.075,-171.2913);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#FDE4C8").beginStroke().moveTo(15,23.4).curveTo(15.4,23.8,13.1,22.7).curveTo(8.3,20.2,-6.9,10.9).curveTo(-21.2,2.3,-41.3,-11.4).lineTo(-63.4,-26.2).lineTo(-50,-46.9).lineTo(-21.7,-38.8).curveTo(8.4,-29.7,17.6,-25.9).curveTo(28.3,-21.4,43.2,-12.7).curveTo(60.5,-2.4,63.1,2.5).curveTo(65.3,6.5,51.2,27.1).lineTo(36.8,46.9).closePath();
	this.shape_65.setTransform(117.0927,-184.65);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#477A8E").beginStroke().moveTo(-2.3,-0.2).lineTo(2.2,0).curveTo(2,0.2,1.2,0.2).curveTo(0.1,0.2,-2.3,-0.2).closePath();
	this.shape_66.setTransform(-44.75,21.7991);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-18,27.7).curveTo(-29.4,20.4,-30.7,8.5).curveTo(-32.4,-8.5,-31.2,-14.3).curveTo(-28.7,-25.5,-15.9,-28.6).curveTo(-14.1,-29,-8.8,-30.7).curveTo(-4.1,-32.2,-0.6,-32.9).curveTo(10.3,-35,24.4,-32.1).curveTo(30,-31,31.3,-20.8).curveTo(32.5,-11.5,29.7,1.1).curveTo(26.8,13.9,21.4,22.8).curveTo(15.3,32.8,8.3,33.5).curveTo(5.7,33.8,3.2,33.8).curveTo(-8.6,33.8,-18,27.7).closePath();
	this.shape_67.setTransform(58.557,-76.0105);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#D5A690").beginStroke().moveTo(-2.8,16.7).lineTo(-5.1,11.6).curveTo(-6.8,7.7,-6.3,2).curveTo(-5.2,-9.5,6.4,-19).lineTo(4.9,-16.7).curveTo(3.1,-13.6,1.7,-9.8).curveTo(-2.6,2.3,-1.1,17.2).curveTo(-0.9,19,-1.3,19).curveTo(-1.7,19,-2.8,16.7).closePath();
	this.shape_68.setTransform(94.5342,-37.5141);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-37.6,75.9).curveTo(-44.9,69.2,-68.4,42.5).lineTo(-43.1,-32.5).curveTo(-13.2,-56.8,5.9,-74.1).curveTo(15.5,-82.8,19,-86.6).lineTo(68.4,-80.9).lineTo(-9.2,23.4).curveTo(-16.7,34,-17.1,52.1).curveTo(-17.2,57.5,-16.6,66.6).curveTo(-16.1,75.7,-16.1,79).curveTo(-16.2,86.6,-20.8,86.6).curveTo(-26.1,86.6,-37.6,75.9).closePath();
	this.shape_69.setTransform(110.175,-77.2742);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#E2B19F").beginStroke().moveTo(6.7,2.5).lineTo(1.9,-0.7).lineTo(1.8,-0.7).lineTo(-11.7,-5.6).lineTo(-4.8,-3.6).lineTo(2.1,-1.3).lineTo(2.1,-1.3).lineTo(2.2,-1.2).lineTo(11.7,5.6).closePath();
	this.shape_70.setTransform(32.125,-259.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#E2B19F").beginStroke().moveTo(9.9,11).lineTo(12.3,8.2).lineTo(7.6,0.9).lineTo(2.6,-6.4).lineTo(1.2,-8.1).curveTo(0.9,-8.4,-0.6,-9.1).lineTo(-13.1,-14.1).curveTo(-9.1,-12.9,-4.6,-11.3).lineTo(0.6,-9.2).lineTo(1.6,-8.6).lineTo(3.1,-6.9).curveTo(6.1,-2.6,12.9,8).lineTo(13.1,8.2).lineTo(7.3,14).lineTo(9.9,11).closePath();
	this.shape_71.setTransform(36.575,-256.4);

	this.instance_9 = new lib.Path_2_1();
	this.instance_9.setTransform(38.75,-247.75,1,1,0,0,0,23.8,28.9);
	this.instance_9.alpha = 0.1992;
	this.instance_9.compositeOperation = "multiply";

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-4,31).curveTo(-7.1,28.8,-10,25.8).lineTo(-12.3,23.2).curveTo(-11.5,13.9,-10.6,10.2).curveTo(-10.1,8.4,-18.5,-4.7).curveTo(-26.7,-17.5,-25.8,-18.9).curveTo(-24.7,-20.6,-17.6,-28).lineTo(-10.6,-35).lineTo(2.5,-29.1).lineTo(21.6,9.5).lineTo(25.4,14.4).lineTo(25.9,16.1).lineTo(22.8,22.6).curveTo(22.8,24.1,21.8,26.2).curveTo(19.7,30.4,14.7,33.1).curveTo(11.2,35,7.4,35).curveTo(2,35,-4,31).closePath();
	this.shape_72.setTransform(40.8807,-244.8308);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.shape_6,this.shape_7,this.instance_8,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.instance_9,this.shape_72];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_72},{t:this.instance_9},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).to({state:[]},2).wait(64));

	// Layer_13
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#E2B19F").beginStroke().moveTo(-2.2,0.1).lineTo(-1,-0.5).lineTo(2.2,0.4).closePath();
	this.shape_73.setTransform(121.903,-278.5212,0.9994,0.9994,-23.6927);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#E2B19F").beginStroke().moveTo(-3.8,6.8).curveTo(-3.9,5.3,-3.9,4.1).curveTo(-3.8,1.3,-2.6,-1.1).curveTo(-2.3,-1.8,-1.2,-3.3).lineTo(0.4,-5.4).curveTo(2.1,-7.6,3.9,-9.4).lineTo(0.9,-5.1).lineTo(-0.6,-2.9).curveTo(-1.8,-1.2,-2,-0.7).curveTo(-3,1.3,-3.3,4.2).lineTo(-3.4,6.8).lineTo(-3.4,9.4).closePath();
	this.shape_74.setTransform(115.7022,-253.7518,0.9985,0.9985,-23.6929);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill().beginStroke("#E2B19F").setStrokeStyle(0.7).moveTo(-1,1.8).lineTo(1,-1.8);
	this.shape_75.setTransform(103.9187,-280.643,0.9994,0.9994,-23.6927);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill().beginStroke("#E2B19F").setStrokeStyle(0.7).moveTo(-1.5,2.6).lineTo(1.5,-2.6);
	this.shape_76.setTransform(109.919,-281.8299,0.9994,0.9994,-23.6927);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#E2B19F").beginStroke().moveTo(-0.2,0.3).curveTo(-3,-1.2,-4.8,-2.7).curveTo(-2.7,-2,0.1,-0.4).curveTo(3.1,1.3,4.8,2.8).curveTo(3.2,2.2,-0.2,0.3).closePath();
	this.shape_77.setTransform(103.2403,-278.6248,0.9985,0.9985,-23.6929);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#E2B19F").beginStroke().moveTo(4.4,1.9).lineTo(3.5,-0.1).lineTo(2.9,-1.1).lineTo(2.2,-2).curveTo(1,-3.5,-1.2,-4.8).lineTo(-3.2,-5.7).lineTo(-5.4,-6.3).curveTo(-3.2,-6.3,-0.9,-5.3).curveTo(1.4,-4.2,2.8,-2.4).curveTo(4.5,-0.3,4.9,1.7).lineTo(5.3,4).lineTo(5.4,6.3).closePath();
	this.shape_78.setTransform(99.4567,-252.8929,0.9985,0.9985,-23.6929);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#E2B19F").beginStroke().moveTo(0.1,-0.1).lineTo(-3,-2.6).curveTo(-1.1,-2.1,0.6,-0.7).curveTo(2.5,1,3,2.6).curveTo(1.8,1.3,0.1,-0.1).closePath();
	this.shape_79.setTransform(90.6437,-256.1408,0.9985,0.9985,-23.6929);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#E2B19F").beginStroke().moveTo(-0.4,6.3).lineTo(-7.9,4.2).lineTo(-10.4,3.3).curveTo(-11.7,2.6,-12.4,1.4).curveTo(-13,0.4,-13.2,-1.2).lineTo(-13.3,-2.5).curveTo(-13.3,-3.2,-13,-3.9).curveTo(-12.4,-5,-11.4,-6.1).lineTo(-11.3,-6.3).lineTo(5,-1.6).curveTo(5.9,-1.4,6.6,-0.9).lineTo(8,0).curveTo(10.5,1.9,13.1,4.4).lineTo(13.3,4.6).lineTo(8.2,4.9).lineTo(12.8,4.4).lineTo(7.7,0.4).curveTo(5.8,-0.9,4.9,-1.1).lineTo(-11.1,-5.5).curveTo(-11.9,-4.5,-12.3,-3.6).curveTo(-12.6,-3,-12.6,-2.5).lineTo(-12.5,-1.2).curveTo(-12.4,0.2,-11.9,1.1).curveTo(-11.2,2.2,-10.2,2.8).lineTo(-7.8,3.7).lineTo(-0.3,6).lineTo(4.7,5.3).lineTo(-0.4,6.3).closePath();
	this.shape_80.setTransform(85.9992,-292.568,0.9985,0.9985,-23.6929);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#E2B19F").beginStroke().moveTo(2.5,5.7).curveTo(0.7,5,-0.1,4.3).lineTo(-5.9,5).curveTo(-8.3,5.2,-8.9,5).curveTo(-10.5,4.8,-11.7,3.7).curveTo(-12.8,2.8,-13.4,1.2).lineTo(-13.8,-0.3).curveTo(-13.8,-1.1,-13.4,-1.9).curveTo(-12.8,-3,-10.9,-3.7).curveTo(-10.2,-4,-8,-4.4).lineTo(-0.8,-5.5).lineTo(0.7,-5.6).lineTo(8,-6.2).lineTo(8.8,-6.2).lineTo(9.4,-5.7).curveTo(10.7,-4.6,13.6,-1.5).lineTo(13.8,-1.3).lineTo(8.6,-2).lineTo(13.2,-1.6).curveTo(10.6,-4.2,9.2,-5.3).lineTo(8.6,-5.7).lineTo(8,-5.7).lineTo(6.5,-5.6).lineTo(-7.9,-3.6).curveTo(-10.1,-3.3,-10.7,-3.1).curveTo(-12.3,-2.5,-12.8,-1.6).curveTo(-13.4,-0.7,-12.7,1).curveTo(-12.3,2.4,-11.3,3.3).curveTo(-10.2,4.2,-8.8,4.5).curveTo(-8.1,4.6,-6,4.5).lineTo(-0.2,4).lineTo(-0.1,4).lineTo(-0.1,4.1).curveTo(1.1,5,2.5,5.5).curveTo(4,6.1,5.5,6.2).curveTo(4.1,6.2,2.5,5.7).closePath();
	this.shape_81.setTransform(96.9957,-286.3255,0.9985,0.9985,-23.6929);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#E2B19F").beginStroke().moveTo(11.8,3.2).lineTo(10.5,0.5).lineTo(9.8,-0.9).curveTo(9.2,-1.8,8.9,-1.9).curveTo(8,-2.3,5.9,-2.7).lineTo(2.9,-3.2).lineTo(-6.3,-4.3).lineTo(-7.8,-4.4).curveTo(-8.4,-4.4,-9.3,-4.2).curveTo(-11,-3.7,-11.4,-2.6).curveTo(-11.5,-2,-11.4,-1.2).curveTo(-11.3,-0.5,-11,0.2).curveTo(-9.8,2.8,-6.4,3.7).curveTo(-5.2,4,-3.4,4.1).lineTo(5.9,5).lineTo(-3.4,4.5).curveTo(-5.1,4.5,-6.6,4.2).curveTo(-8.1,3.9,-9.5,3).curveTo(-10.9,2,-11.6,0.5).curveTo(-11.9,-0.2,-12.1,-1.1).curveTo(-12.3,-2,-12,-2.8).curveTo(-11.8,-3.6,-11,-4.2).curveTo(-10.2,-4.7,-9.5,-4.8).curveTo(-8.6,-5.1,-7.9,-5.1).lineTo(-7,-5.1).lineTo(3,-3.8).lineTo(6,-3.2).curveTo(8.2,-2.7,9.1,-2.4).curveTo(9.5,-2.1,10.2,-1.1).lineTo(10.9,0.3).lineTo(12.1,3.2).lineTo(12.1,3.3).lineTo(12,3.3).lineTo(7.7,5.1).closePath();
	this.shape_82.setTransform(106.6779,-288.4479,0.9985,0.9985,-23.6929);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#E2B19F").beginStroke().moveTo(-6.3,6.9).curveTo(-7.3,6.6,-8.1,5.6).curveTo(-8.9,4.6,-9.3,3.7).curveTo(-9.7,2.4,-9.4,1.4).curveTo(-8.8,-0.5,-6.5,-1.9).lineTo(5.3,-7.2).lineTo(5.4,-7.2).curveTo(6.2,-7,7.2,-6.6).lineTo(8.1,-6.2).curveTo(8.5,-5.9,8.7,-5.4).curveTo(9.5,-4.1,9.6,-1.8).lineTo(9.5,0).lineTo(9,1.8).curveTo(8.4,3.1,7.4,5).lineTo(8.7,1.7).curveTo(9.1,0.6,9.2,-0).curveTo(9.3,-0.9,9.2,-1.8).curveTo(9,-4.1,8.3,-5.2).lineTo(7.7,-5.7).lineTo(7,-6.1).curveTo(5.9,-6.5,5.3,-6.5).lineTo(-6.1,-1.3).curveTo(-8.2,-0.1,-8.8,1.6).curveTo(-9.1,2.5,-8.7,3.5).curveTo(-8.3,4.4,-7.7,5.2).curveTo(-6.9,6.1,-6.1,6.5).curveTo(-5.3,6.8,-4.1,6.7).curveTo(-2.7,6.5,-0.1,5.5).lineTo(3.8,3.8).lineTo(-0,5.7).curveTo(-2.8,6.9,-4.1,7.1).lineTo(-4.8,7.2).curveTo(-5.6,7.2,-6.3,6.9).closePath();
	this.shape_83.setTransform(116.7835,-281.9263,0.9985,0.9985,-23.6929);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-2.6,33.2).curveTo(-4.8,33.2,-7.4,32.8).curveTo(-12.8,32,-15,30).curveTo(-18.7,28,-22.3,24.9).curveTo(-29.5,18.9,-29.1,13.7).curveTo(-28.8,9.2,-27.8,3.2).curveTo(-27.1,-1.7,-27.1,-2.7).curveTo(-27.2,-4.2,-28,-9.4).lineTo(-28.8,-14.4).lineTo(-28.6,-15).curveTo(-28.1,-15.6,-26.9,-15.9).curveTo(-25.2,-16.4,-23.6,-16).curveTo(-21.6,-15.6,-20.8,-14.1).lineTo(-18.6,-10.3).curveTo(-17.4,-7.8,-17.5,-6.3).curveTo(-17.8,-3.8,-17.7,3.1).lineTo(-13.3,5.9).lineTo(-1.9,-14.8).curveTo(-3.6,-14.4,-5.5,-14.8).curveTo(-9.4,-15.8,-10.2,-20.2).lineTo(-9.4,-21.7).curveTo(-7.9,-23.3,-4.6,-23.5).curveTo(-15.1,-26.2,-16,-27.7).curveTo(-17.1,-29.5,-17.2,-30.8).curveTo(-17.5,-33.2,-15.4,-35.5).curveTo(1.1,-31.1,2.1,-30.5).curveTo(3.1,-29.9,8.7,-25.1).lineTo(10.1,-25.5).curveTo(11.5,-25.8,12,-25.4).lineTo(16.5,-20.9).lineTo(18.9,-20.6).curveTo(21.5,-20.2,22.1,-19.6).curveTo(23,-18.8,25,-14.3).lineTo(26.5,-14.1).curveTo(28.1,-13.6,28.6,-11.8).curveTo(29,-9.9,29.1,-9.1).curveTo(29.3,-7.6,28.8,-6.4).curveTo(28.3,-4.9,26.9,-2.1).lineTo(15,30.9).curveTo(13.9,33,11.1,34.4).curveTo(8.9,35.5,6.2,35.5).curveTo(2.2,35.5,-2.6,33.2).closePath();
	this.shape_84.setTransform(102.1039,-267.2384,0.9994,0.9994,-23.6927);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#D5A690").beginStroke().moveTo(9.4,13.4).lineTo(5.9,11.8).lineTo(1.6,9).lineTo(-0.4,7.4).lineTo(-4,3.7).curveTo(-7.4,-0.2,-9.7,-4.8).curveTo(-12.3,-10,-13.1,-14.4).curveTo(-11,-9.9,-8.4,-5.6).curveTo(-5.6,-1.2,-2.5,2.4).curveTo(0.4,5.9,4.6,9.2).lineTo(9.7,12.7).lineTo(13.1,14.4).closePath();
	this.shape_85.setTransform(155.4421,-138.5641,0.9994,0.9994,-23.6927);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#FDE4C8").beginStroke().moveTo(4.2,61.3).lineTo(-8.5,54.8).lineTo(-21.3,44.5).curveTo(-22.5,40.7,-23.1,33.6).curveTo(-24.4,19.3,-21.7,2.2).curveTo(-18.8,-15.8,-18.5,-37.9).curveTo(-18.1,-58.9,-20.1,-62.8).lineTo(4.8,-64.8).lineTo(13.1,-34.3).curveTo(21.6,-2.2,22.5,5.4).curveTo(23.8,16.9,23.4,36.3).curveTo(22.9,58.6,19.8,63.3).curveTo(18.9,64.8,16.2,64.8).curveTo(12.2,64.8,4.2,61.3).closePath();
	this.shape_86.setTransform(145.5582,-186.3676,1,1,-23.6928);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-35.3,75.6).curveTo(-35.3,55,-34.3,29.6).curveTo(-32.2,-21.2,-27.1,-45.2).curveTo(-27.2,-54.3,-20.8,-66.2).curveTo(-14.1,-78.5,-8.3,-77.8).curveTo(-1.7,-77,0.1,-78.3).curveTo(1.2,-79,0.8,-81.5).curveTo(0.4,-84.2,1.4,-85.2).curveTo(3.2,-86.9,9.6,-86.7).curveTo(36.4,-85.9,35.2,-43.3).curveTo(34.9,-33,32.7,-26.9).curveTo(30.5,-21.3,24.8,-14.7).lineTo(4.9,86.7).closePath();
	this.shape_87.setTransform(-93.7493,11.1645);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-8.6,18.4).curveTo(-16.2,14.8,-19.1,6.9).curveTo(-22,-0.9,-18.4,-8.6).curveTo(-14.8,-16.2,-6.9,-19.1).curveTo(1,-21.9,8.6,-18.4).curveTo(16.2,-14.8,19,-6.9).curveTo(21.9,1,18.4,8.6).curveTo(14.8,16.2,6.9,19.1).curveTo(3.4,20.4,-0.1,20.4).curveTo(-4.4,20.4,-8.6,18.4).closePath();
	this.shape_88.setTransform(-109.095,90.2424);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.2,1.3).curveTo(-4.9,0.8,-8.4,-1.5).lineTo(-4.3,-0.4).curveTo(-1.9,0.1,-0.1,0.3).curveTo(1.3,0.5,4.2,0.5).curveTo(5.9,0.5,8.4,0.2).curveTo(6.1,1.1,4.2,1.3).lineTo(2,1.5).lineTo(-0.2,1.3).closePath();
	this.shape_89.setTransform(33.675,-209.0875);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-3.3,2.8).curveTo(-1,2,0.7,1.2).curveTo(2.4,0.4,4.4,-1).curveTo(5.9,-2.2,7.5,-4).curveTo(6.4,-1.8,4.9,-0.4).curveTo(3.1,1.1,1.2,2.1).curveTo(-0.8,3,-3.1,3.5).lineTo(-7.5,4).curveTo(-6.1,3.5,-3.3,2.8).closePath();
	this.shape_90.setTransform(-5.2,-202.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#080808").beginStroke().moveTo(-0.4,1).lineTo(-2.9,0.2).curveTo(-4.3,-0.2,-5.2,-0.3).curveTo(-6.4,-0.5,-7.6,-0.1).curveTo(-8.2,0.1,-9.8,1.1).curveTo(-9.1,-0.2,-8,-1).curveTo(-6.7,-1.9,-5.2,-1.9).curveTo(-3.4,-2,0.2,-0.9).curveTo(3.3,0.1,5,0.2).curveTo(6.3,0.4,7.5,0.2).curveTo(8.8,-0.1,9.8,-0.8).curveTo(9.4,0.3,7.8,1.1).curveTo(6.7,1.7,5,1.8).lineTo(4.2,1.9).curveTo(2.1,1.9,-0.4,1).closePath();
	this.shape_91.setTransform(31.9,-217.8375);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#080808").beginStroke().moveTo(-11,3.5).lineTo(-5.3,2).curveTo(-2.7,1.2,-0,0.1).lineTo(2.5,-1.4).lineTo(5,-2.8).lineTo(6.4,-3.5).curveTo(7.3,-3.8,8.2,-3.8).curveTo(9.3,-3.6,11,-2.6).lineTo(8.2,-2.8).curveTo(7.6,-2.7,5.9,-1.5).lineTo(3.5,0.2).curveTo(1.8,1.3,0.9,1.8).curveTo(-1.6,3.1,-5.1,3.6).curveTo(-6.4,3.8,-7.8,3.8).curveTo(-9.5,3.8,-11,3.5).closePath();
	this.shape_92.setTransform(-6.05,-209.8392);

	this.instance_10 = new lib.Path_0_2();
	this.instance_10.setTransform(-21.2,133.65,1,1,0,0,0,25.8,18.4);
	this.instance_10.alpha = 0.5313;
	this.instance_10.compositeOperation = "multiply";

	this.instance_11 = new lib.Path_1_1_1();
	this.instance_11.setTransform(-26.1,108.15,1,1,0,0,0,23.1,10.3);
	this.instance_11.alpha = 0.5313;
	this.instance_11.compositeOperation = "multiply";

	this.instance_12 = new lib.Path_5();
	this.instance_12.setTransform(-60.85,1.85,1,1,0,0,0,13.2,46);
	this.instance_12.alpha = 0.5313;
	this.instance_12.compositeOperation = "multiply";

	this.instance_13 = new lib.Path_1_0_1();
	this.instance_13.setTransform(0.05,57.65,1,1,0,0,0,74.1,126.8);
	this.instance_13.alpha = 0.2109;
	this.instance_13.compositeOperation = "multiply";

	this.instance_14 = new lib.Path_2_0_1();
	this.instance_14.setTransform(90.1,5.15,1,1,0,0,0,4.4,19);
	this.instance_14.alpha = 0.5313;
	this.instance_14.compositeOperation = "multiply";

	this.instance_15 = new lib.Path_3_1();
	this.instance_15.setTransform(88.7,54.6,1,1,0,0,0,16.1,121.6);
	this.instance_15.alpha = 0.2109;
	this.instance_15.compositeOperation = "multiply";

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#477A8E").beginStroke().moveTo(-53,7.3).curveTo(-75,4.3,-75,0).curveTo(-75,-4.2,-53,-7.3).curveTo(-31.1,-10.3,0,-10.3).curveTo(31.1,-10.3,53.1,-7.3).curveTo(75,-4.2,75,0).curveTo(75,4.3,53.1,7.3).curveTo(31.1,10.3,0,10.3).curveTo(-31,10.3,-53,7.3).closePath();
	this.shape_93.setTransform(21.125,99.875);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#477A8E").beginStroke().moveTo(-86.2,35.3).lineTo(-75,-42.5).lineTo(75.3,-43.3).lineTo(86.2,43.3).closePath();
	this.shape_94.setTransform(20.925,143.325);

	this.instance_16 = new lib.Path_1_3();
	this.instance_16.setTransform(51.15,-97.65,1,1,0,0,0,16.6,9.2);
	this.instance_16.alpha = 0.2109;
	this.instance_16.compositeOperation = "multiply";

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#477A8E").beginStroke().moveTo(-65.1,94.5).lineTo(-65,93.6).curveTo(-69.7,70.2,-77.9,35.6).lineTo(-85.1,5.6).curveTo(-82.7,5,-78.9,1.7).curveTo(-74.6,-2.1,-70.8,-7.9).curveTo(-60.7,-23.4,-59.3,-44.4).curveTo(-57.8,-66.4,-69.8,-83.9).curveTo(-73.6,-89.3,-78.3,-93.7).lineTo(-82.2,-97).curveTo(-72.8,-101,-60.8,-104.9).curveTo(-61.1,-104.8,-59.8,-103.9).curveTo(-57.3,-102.1,-54.6,-99.4).curveTo(-44.4,-89.2,-32.9,-67.5).curveTo(-24.1,-51,-12,-43.3).curveTo(1.8,-34.5,21.4,-36.3).curveTo(48.6,-38.7,49.5,-56.7).curveTo(50.5,-75.4,23.5,-113).curveTo(30.9,-113.5,36.2,-112.4).curveTo(38.8,-111.9,40,-111.3).lineTo(47,-105.2).curveTo(55.5,-97,62.4,-86.9).curveTo(84.6,-54.5,83.5,-14.4).curveTo(82.9,6.1,84,52).curveTo(84.5,74.9,85.1,93.8).lineTo(51.2,113.1).closePath().moveTo(-60.8,-104.9).lineTo(-60.8,-104.9).lineTo(-60.8,-104.9).closePath();
	this.shape_95.setTransform(11.075,6.2583);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-3.9,1.7).lineTo(-9.8,-0.7).curveTo(-4.9,1.1,2.9,-0.7).curveTo(6.8,-1.7,9.8,-3).lineTo(9.6,-1.5).curveTo(8.9,0.4,6.1,2.2).curveTo(4.9,3,2.8,3).curveTo(0.2,3,-3.9,1.7).closePath();
	this.shape_96.setTransform(16.3069,-91.9299);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#D5A690").beginStroke().moveTo(-15.1,56.9).curveTo(-34.7,55.8,-45.9,40.7).curveTo(-49.4,36,-51.6,30.5).lineTo(-53.1,25.9).curveTo(-55.1,10.6,-56.2,-4).curveTo(-58.5,-33.2,-54.4,-29.8).curveTo(-52.8,-28.5,-46.6,-18.6).curveTo(-39.7,-7.8,-33.6,-1.4).curveTo(-12.7,20.6,17.3,14.4).curveTo(44.5,8.8,31.3,-24.8).curveTo(27.2,-35.2,19.5,-47.3).lineTo(12.7,-57.2).lineTo(29.6,-52.7).lineTo(35.7,-47).curveTo(42,-40.9,43,-38.8).lineTo(50.8,-24.3).curveTo(57.1,-11.9,57,-9.6).lineTo(55.8,13.6).curveTo(54,35.3,49.9,41.5).curveTo(44.9,49.1,26.7,53.6).curveTo(12.2,57.2,-4.8,57.2).curveTo(-9.8,57.2,-15.1,56.9).closePath();
	this.shape_97.setTransform(21.8531,-49.5218);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#D5A690").beginStroke().moveTo(-4.6,3.1).curveTo(2.3,-0.4,5.6,-10).curveTo(6.6,-13,7.2,-16.2).lineTo(7.6,-18.7).curveTo(9.3,-7,4.3,2.7).curveTo(1.8,7.6,-1,10.1).lineTo(-8,18.7).closePath();
	this.shape_98.setTransform(-66.0327,-6.825);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#D5A690").beginStroke().moveTo(-22.8,42.8).lineTo(-17.6,17.6).lineTo(-17.8,24.6).curveTo(-17,30.8,-12.1,27.6).curveTo(-9,24.1,-7.6,22.1).lineTo(-6.8,20.7).curveTo(6,-9.6,-4.2,-36.5).curveTo(-7.4,-44.9,-12.5,-52).lineTo(-16.9,-57.4).lineTo(-1.2,-47.7).curveTo(10.1,-29.9,11.8,-28.3).curveTo(12.8,-27.3,16.5,-18.5).lineTo(20.9,-7.8).curveTo(21.8,-5.6,22.4,7.1).curveTo(23,19.5,22.7,25.7).curveTo(22.4,30.8,15.7,42.1).curveTo(9.7,52.1,7.7,53.5).curveTo(6.1,54.7,-17.8,57.4).closePath();
	this.shape_99.setTransform(-51.275,-30.975);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-26.1,29.5).curveTo(-36.3,20.4,-36.3,-1.2).curveTo(-36.3,-17.4,-26.1,-27.3).curveTo(-16.2,-37,-0.6,-37).curveTo(14.7,-37,25.5,-26.1).curveTo(36.3,-15.3,36.3,0).curveTo(36.3,15.3,25.5,26.2).curveTo(14.7,37,-0.6,37).curveTo(-17.7,37,-26.1,29.5).closePath();
	this.shape_100.setTransform(-85.725,-45.975);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#D5A690").beginStroke().moveTo(3.3,7.3).curveTo(2.2,5.6,-3.8,-1.9).lineTo(-9.4,-8.9).curveTo(-8.6,-8.1,-5.5,-8.1).curveTo(-3.8,-8,-2.1,-8.2).lineTo(9.4,8.4).curveTo(8.3,8.8,7,8.9).lineTo(6.5,8.9).curveTo(4.2,8.9,3.3,7.3).closePath();
	this.shape_101.setTransform(41.7375,-98.5439);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-91.9,-66.7).curveTo(-90.9,-67.1,-69.6,-74.7).curveTo(-44.4,-83.6,-29.2,-89.4).curveTo(-19.9,-92.9,-15.8,-94.2).curveTo(-8.5,-96.6,-3.6,-97.1).curveTo(5.9,-98.3,18.2,-96.9).curveTo(25.5,-96,40.4,-93.2).curveTo(48.2,-91.7,56.2,-89.7).curveTo(64.2,-87.7,72.1,-86.2).curveTo(72.8,-86.1,79.2,-83.4).lineTo(85.3,-80.8).lineTo(84.2,-77.3).curveTo(82.9,-72.9,82.1,-67.9).curveTo(79.7,-51.8,83.7,-35.8).curveTo(87.9,-19.2,90.3,-16.7).lineTo(90.6,-16.5).lineTo(38.5,29.4).lineTo(-45.2,97.7).closePath().moveTo(90.6,-16.5).lineTo(91.9,-17.6).curveTo(91.7,-16.3,91.1,-16.3).curveTo(90.9,-16.3,90.6,-16.5).closePath().moveTo(90.6,-16.5).lineTo(90.6,-16.5).closePath();
	this.shape_102.setTransform(-7.575,-13.8593);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#477A8E").beginStroke().moveTo(-2.3,-0.2).lineTo(2.2,0).curveTo(2,0.2,1.2,0.2).curveTo(0.1,0.2,-2.3,-0.2).closePath();
	this.shape_103.setTransform(-44.75,21.7991);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-23.8,23.4).curveTo(-35.2,16.1,-36.5,4.2).curveTo(-37.8,-8.8,-31.9,-17.7).curveTo(-25.3,-27.7,-11.2,-29.2).curveTo(3.7,-30.7,16.7,-23.6).curveTo(29.8,-16.4,35.4,-3.3).curveTo(39.9,7.3,28.7,17.7).curveTo(18,27.6,2.5,29.2).curveTo(-0.1,29.5,-2.6,29.5).curveTo(-14.4,29.5,-23.8,23.4).closePath();
	this.shape_104.setTransform(64.3545,-71.7031);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#477A8E").beginStroke().moveTo(-46.4,9.9).curveTo(-65.7,5.8,-65.7,-0).curveTo(-65.7,-5.8,-46.4,-9.9).curveTo(-27.2,-14,0,-14).curveTo(27.2,-14,46.4,-9.9).curveTo(65.7,-5.8,65.7,-0).curveTo(65.7,5.8,46.4,9.9).curveTo(27.2,14,0,14).curveTo(-27.2,14,-46.4,9.9).closePath();
	this.shape_105.setTransform(15.725,91.325);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#477A8E").beginStroke().moveTo(0,89.6).curveTo(-29.4,90.7,-52.4,87.2).curveTo(-84.1,82.5,-87.6,70.4).curveTo(-92,54.8,-80,-9.9).curveTo(-76.2,-30.1,-71.3,-52.9).lineTo(-63.5,-87.5).lineTo(-16.7,-88.9).lineTo(-16.7,-89.9).lineTo(0,-89.4).lineTo(16.7,-89.9).lineTo(16.7,-88.9).lineTo(63.5,-87.5).lineTo(71.3,-52.9).curveTo(76.3,-30.2,80,-9.9).curveTo(92,54.8,87.6,70.4).curveTo(84.1,82.5,52.4,87.2).curveTo(34.8,89.9,13.4,89.9).curveTo(6.9,89.9,0,89.6).closePath();
	this.shape_106.setTransform(18.3768,165.6725);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.4,0.9).curveTo(-1.4,0.5,-1.9,0).curveTo(-2.8,-0.6,-3.2,-1.2).lineTo(3.2,0.8).curveTo(2.4,1.2,1.4,1.2).curveTo(0.7,1.2,-0.4,0.9).closePath();
	this.shape_107.setTransform(26.925,-204.075);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#EFC7B0").beginStroke().moveTo(2.4,-2.8).curveTo(2.4,-1.8,2,-0.9).curveTo(1.5,-0,0.9,0.8).lineTo(-0.6,2).curveTo(-1.5,2.5,-2.4,2.7).closePath();
	this.shape_108.setTransform(3.2,-199.05);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#EFC7B0").beginStroke().moveTo(0.2,-1.6).curveTo(1.3,-3.6,2.3,-5.1).lineTo(2.4,-2.8).lineTo(-2.4,5.1).curveTo(-1.9,2.5,0.2,-1.6).closePath();
	this.shape_109.setTransform(11.525,-175.425);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.1,2.3).lineTo(-3.4,-0.4).curveTo(-1.5,-1.7,-0.9,-1.6).lineTo(1.5,-1.4).lineTo(2.3,-2).curveTo(3.3,-2.5,3.9,-2.3).curveTo(5.3,-1.7,6.9,-0.4).lineTo(7.1,-0.3).curveTo(3.5,-0.8,-1.6,0.5).curveTo(-5,1.3,-7.1,2.3).closePath();
	this.shape_110.setTransform(25.475,-163.6786);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#A51727").beginStroke().moveTo(-6.6,1.7).lineTo(-2.9,-1).curveTo(-1,-2.3,-0.4,-2.3).lineTo(2.1,-2.1).lineTo(2.9,-2.6).curveTo(3.8,-3.1,4.4,-2.9).curveTo(5.9,-2.3,7.4,-1.1).lineTo(8.8,-0.2).curveTo(5.3,-0.4,-2.2,1.3).lineTo(-8.8,3).curveTo(-8.2,2.8,-6.6,1.7).closePath();
	this.shape_111.setTransform(24.9125,-163.0161);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#FFAFAF").beginStroke().moveTo(-7.3,5.5).lineTo(-11.2,3.9).curveTo(-9.8,1.9,-7.9,-0.3).curveTo(-4.1,-4.7,-1.6,-5.5).curveTo(0.6,-6.2,1.6,-5.3).curveTo(2,-4.9,2.4,-5.3).curveTo(3.4,-6.8,5,-6.4).curveTo(6.8,-6,8.5,-4.6).curveTo(10.6,-2.8,11.2,-0.2).lineTo(10.7,1.8).curveTo(9.8,3.9,8.6,4.2).lineTo(5.2,4.9).curveTo(2.6,5.3,-0.9,6.3).curveTo(-1.5,6.5,-2.4,6.5).curveTo(-4.4,6.5,-7.3,5.5).closePath();
	this.shape_112.setTransform(24.3,-163.2176);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#080808").beginStroke().moveTo(-4.1,2).lineTo(-6.4,1.5).lineTo(-8.5,0.6).lineTo(0.4,0.7).curveTo(2.5,0.5,4.5,-0.2).curveTo(6.9,-1.1,8.5,-2.2).curveTo(7.4,-0.4,5,0.8).curveTo(3.2,1.8,0.5,2.2).lineTo(-1,2.2).curveTo(-2.4,2.2,-4.1,2).closePath();
	this.shape_113.setTransform(33.6,-206.6519);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#080808").beginStroke().moveTo(-4.4,2.5).curveTo(-7.1,2.2,-9.3,1.2).curveTo(-3.5,1.5,0.5,0.9).curveTo(2.5,0.6,5,-0.3).curveTo(7,-1.1,9.3,-2.6).curveTo(7.9,-0.5,5.5,0.8).curveTo(3.4,1.9,0.6,2.4).curveTo(-0.9,2.6,-2.3,2.6).lineTo(-4.4,2.5).closePath();
	this.shape_114.setTransform(-4.2,-199.7857);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#EFC7B0").beginStroke().moveTo(4.1,9.6).curveTo(0.9,8.6,-1.5,4.7).curveTo(-2.6,3.2,-4.4,-1.6).curveTo(-6.6,-7.3,-6.1,-9.1).curveTo(-5.9,-10,-5,-9.8).curveTo(-4.5,-9.7,-3.7,-9).curveTo(-1.4,-6.7,-0.5,-5.6).curveTo(1.3,-3.4,1.8,-1.7).lineTo(2.1,1.6).curveTo(2.2,3.3,3.6,4.5).curveTo(5.1,5.7,6,8).curveTo(6.7,9.9,5.3,9.9).curveTo(4.9,9.9,4.1,9.6).closePath();
	this.shape_115.setTransform(-46.1583,-181.8758);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.3,3.4).lineTo(-3.3,2.8).curveTo(-5.4,2.8,-6.3,2.6).curveTo(-7.9,2.2,-8,0.5).curveTo(-8.1,-0.3,-7.5,-1.6).curveTo(-7.8,-0.7,-7.3,0.1).curveTo(-6.8,1.2,-5.2,1.2).curveTo(-4.4,1.2,-2.6,1).curveTo(-1.9,1,-0.1,1.4).curveTo(1.5,1.7,2.4,1.6).curveTo(3,1.6,4.2,0.9).curveTo(5.5,0.2,6.3,-0.6).curveTo(7.4,-1.7,6.8,-3.7).lineTo(7.7,-2.5).curveTo(8.4,-1.2,7.8,0).curveTo(7.6,0.3,7.2,0.7).lineTo(6.3,1.3).lineTo(4.9,2.7).curveTo(4.2,3.3,2.7,3.6).lineTo(1.9,3.7).curveTo(1,3.7,-0.3,3.4).closePath();
	this.shape_116.setTransform(21.5488,-179.1054);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#080808").beginStroke().moveTo(0.6,2.6).lineTo(-1.1,-2.5).lineTo(-3.2,-9.8).lineTo(-0.6,-2.7).lineTo(1,2.5).lineTo(3.2,9.8).closePath();
	this.shape_117.setTransform(39.15,-244.025);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#080808").beginStroke().moveTo(0.3,1.4).lineTo(-0,-1.4).curveTo(-0.3,-3.6,-0.7,-5.4).curveTo(-0.2,-3.5,0.2,-1.5).curveTo(0.5,-0.2,0.5,1.4).curveTo(0.7,3.3,0.7,5.3).lineTo(0.3,1.4).closePath();
	this.shape_118.setTransform(33,-255);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#080808").beginStroke().moveTo(-0.3,3.1).curveTo(1.2,0.8,2.5,-1.8).curveTo(4.3,-5.5,5.2,-9.2).curveTo(4.5,-5.2,3,-1.6).curveTo(1.8,1.3,0.2,3.3).curveTo(-2.2,6.5,-5.2,9.2).curveTo(-2.4,6.4,-0.3,3.1).closePath();
	this.shape_119.setTransform(27.75,-255.075);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#080808").beginStroke().moveTo(-1.2,3.7).curveTo(1.8,1.4,4.2,-0.9).curveTo(8.1,-4.8,9.7,-9.2).curveTo(8.3,-4.7,4.6,-0.5).curveTo(2.5,2,-0.9,4.3).curveTo(-4.2,6.5,-9.7,9.2).curveTo(-4.4,6.2,-1.2,3.7).closePath();
	this.shape_120.setTransform(9.1,-248.175);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#080808").beginStroke().moveTo(-13.4,10.3).curveTo(-7.9,8.4,-3.9,6.7).lineTo(2.6,3.9).curveTo(6.4,2.3,8.9,0.8).curveTo(10.5,-0.2,13,-2).curveTo(15.1,-3.6,16.8,-5.3).lineTo(18.5,-7.1).lineTo(19.8,-9.2).curveTo(21.2,-11.3,23.1,-13.1).curveTo(21.4,-11,20.4,-8.9).lineTo(19.1,-6.6).curveTo(18.3,-5.2,17.7,-4.5).curveTo(16.4,-2.9,14.2,-0.7).lineTo(10.3,2.8).curveTo(5,6.5,-3.1,9).curveTo(-8,10.3,-13,11.4).curveTo(-18.6,12.5,-23.1,13.1).curveTo(-19.1,12.2,-13.4,10.3).closePath();
	this.shape_121.setTransform(-10.25,-246.425);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#080808").beginStroke().moveTo(-0.5,2.7).curveTo(-1.5,0.5,-2.1,-1.6).curveTo(-2.7,-4.9,-2.9,-8).curveTo(-2.3,-4.8,-1.3,-1.9).lineTo(0.3,2.3).curveTo(1.5,5.7,2.9,8).curveTo(0.9,5.4,-0.5,2.7).closePath();
	this.shape_122.setTransform(-36.85,-191.25);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#080808").beginStroke().moveTo(1.5,11.3).curveTo(1.6,8.2,1.3,4.5).curveTo(0.8,-0.8,0.2,-4.9).curveTo(-0.2,-8,-1.1,-11.6).curveTo(-2,-15.3,-3.1,-18).curveTo(-1.6,-15.2,-0.2,-11.8).curveTo(1.1,-8.2,1.9,-5.3).curveTo(3.2,-0.3,3,4.5).curveTo(2.9,8,2.4,11.4).curveTo(2,14.1,1,18).curveTo(1.4,14.9,1.5,11.3).closePath();
	this.shape_123.setTransform(-40.192,-214.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#080808").beginStroke().moveTo(1.5,2.6).lineTo(-0.3,-3).curveTo(-1.5,-6.8,-3.4,-10.7).curveTo(-1,-7,0.7,-3.4).curveTo(2,-0.5,2.5,2.3).curveTo(3.4,6.5,3.4,10.7).curveTo(2.8,6.6,1.5,2.6).closePath();
	this.shape_124.setTransform(-39.825,-223.725);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#FDE4C8").beginStroke().moveTo(19.6,62.4).curveTo(7.5,59.3,-3.4,55.1).curveTo(-19.1,49,-23.4,43.6).curveTo(-27.5,38.4,-29.8,33.5).lineTo(-31.4,29.6).curveTo(-34.1,30.2,-37.7,29.2).curveTo(-44.9,27.3,-48.9,19.3).curveTo(-53.5,10.3,-53.7,4.8).curveTo(-53.8,-0.1,-50.4,-1.3).curveTo(-47.4,-2.3,-45,-0.4).curveTo(-43.2,0.9,-41,4.5).curveTo(-37.9,9.4,-37,12.1).curveTo(-36.8,12.6,-36.4,13).lineTo(-35.6,13.5).lineTo(-36.3,11.6).lineTo(-35.5,12.6).curveTo(-35.1,13.1,-34.5,13.5).lineTo(-35.3,11.4).lineTo(-34.1,12.5).curveTo(-33.5,13,-31.6,13.6).curveTo(-32.4,12.7,-32.8,11).curveTo(-33.8,6.7,-34.3,2).curveTo(-35,-4.2,-34.1,-6.9).curveTo(-31.3,-15.3,-33.6,-26.8).curveTo(-35.7,-37.8,-40,-40.9).lineTo(-38.2,-40.2).curveTo(-35.7,-39.5,-32.9,-39.1).curveTo(-23.8,-38,-13.8,-41.2).curveTo(-6.6,-43.5,2.1,-47.5).curveTo(8.1,-50.2,8,-49.8).curveTo(6.5,-47.7,3.1,-44.7).curveTo(1.5,-43.3,-0.3,-42.1).lineTo(-1.9,-41.1).curveTo(5,-43.1,12.6,-48.3).curveTo(16.4,-50.9,18.8,-53.1).lineTo(13.7,-44.2).curveTo(16.3,-45.3,22.1,-51.2).curveTo(25,-54.2,27.3,-57).lineTo(22.5,-47.1).lineTo(24.9,-49.1).curveTo(27.8,-51.6,30.3,-54.7).curveTo(32.7,-57.7,34.4,-60.9).curveTo(35.2,-62.4,35.5,-63.4).curveTo(37.3,-54.7,36.9,-57.7).lineTo(38.1,-50.7).lineTo(38.9,-57.3).lineTo(40.1,-53.7).lineTo(42.2,-47.3).curveTo(44.7,-38.5,45.5,-35.3).curveTo(46.7,-30.1,47.3,-23.5).curveTo(47.7,-19.9,49.6,-10.6).curveTo(51.8,-0.1,52.3,2.9).lineTo(53.6,10.6).curveTo(54.3,20.6,51.3,32.5).curveTo(48.4,44.3,46.8,49).curveTo(45.2,54,43.2,57.1).curveTo(40.3,61.4,33.3,62.8).curveTo(30.4,63.4,27.4,63.4).curveTo(23.5,63.4,19.6,62.4).closePath();
	this.shape_125.setTransform(-3.561,-197.2687);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#080808").beginStroke().moveTo(1,3.9).curveTo(0.8,-0.6,0.4,-4.1).curveTo(-0.3,-9.9,-1.8,-15.1).curveTo(0.1,-9.8,1.1,-4.2).curveTo(1.8,-0.1,1.8,3.9).curveTo(1.7,9.8,0.8,15.1).curveTo(1.4,9.3,1,3.9).closePath();
	this.shape_126.setTransform(45.775,-249.85);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#080808").beginStroke().moveTo(-9.5,0.1).curveTo(-7.2,-3,-4.8,-5.1).curveTo(-2,-7.6,0.7,-9.3).curveTo(9.6,-15.3,18.4,-17.5).curveTo(9.7,-14.8,1.5,-8.3).lineTo(-3.8,-4).curveTo(-6,-2.1,-8.5,0.9).curveTo(-14.6,8.3,-18.4,17.5).curveTo(-15.1,7.9,-9.5,0.1).closePath();
	this.shape_127.setTransform(-63.175,-271.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#080808").beginStroke().moveTo(-14.4,1.4).curveTo(-10.7,-0.6,-6.8,-2.2).curveTo(-1.4,-4.4,4.7,-5.2).curveTo(8.3,-5.8,13,-5.9).curveTo(16.8,-6.1,21.2,-5.8).curveTo(16.4,-5.7,13,-5.4).curveTo(8.5,-4.9,4.9,-4.2).curveTo(-1.3,-2.9,-6.5,-1.2).curveTo(-9.9,-0.1,-14.1,1.8).curveTo(-17.6,3.6,-21.2,6).curveTo(-18,3.5,-14.4,1.4).closePath();
	this.shape_128.setTransform(-39.3,-289.4531);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#080808").beginStroke().moveTo(-15.8,-0.2).curveTo(-10.7,-1.3,-6.7,-1.9).curveTo(-0.5,-2.8,6.5,-2.3).curveTo(10.7,-2,15.7,-1.2).curveTo(19.4,-0.5,24.6,0.9).curveTo(20,-0.1,15.6,-0.6).curveTo(10,-1.1,6.4,-1.1).curveTo(0.3,-1.2,-6.6,-0.7).curveTo(-10.6,-0.5,-15.7,0.4).curveTo(-20.2,1.2,-24.6,2.5).curveTo(-20.6,1,-15.8,-0.2).closePath();
	this.shape_129.setTransform(-20.75,-296.2362);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#080808").beginStroke().moveTo(14.7,1.9).curveTo(10.9,-0.6,7.2,-2).curveTo(1.7,-4.2,-4.2,-5.3).curveTo(-8.1,-6,-12.6,-6).curveTo(-16.8,-5.9,-21.1,-4.9).curveTo(-17,-6.4,-12.7,-7.1).curveTo(-7.7,-7.7,-3.9,-7.5).curveTo(2.6,-7.1,8.2,-4).curveTo(12,-2,15.4,1).curveTo(18.5,3.9,21.1,7.5).curveTo(18,4.1,14.7,1.9).closePath();
	this.shape_130.setTransform(5.275,-292.7868);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#080808").beginStroke().moveTo(6.2,0.7).curveTo(4.4,-0.2,2.9,-0.7).curveTo(0.5,-1.5,-2,-1.9).curveTo(-3.9,-2.2,-5.6,-2.1).curveTo(-7.5,-2,-9.2,-1.6).curveTo(-7.8,-2.2,-5.7,-2.6).curveTo(-3.5,-2.9,-1.9,-2.8).curveTo(0.8,-2.7,3.3,-1.6).curveTo(4.8,-0.8,6.5,0.3).curveTo(8.1,1.5,9.2,2.8).curveTo(7.8,1.6,6.2,0.7).closePath();
	this.shape_131.setTransform(32.775,-280.5292);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#080808").beginStroke().moveTo(5.2,0).curveTo(2.8,-2.2,-0.8,-4.6).curveTo(-5.3,-7.5,-10.7,-9).curveTo(-5.2,-8.3,-0.2,-5.8).curveTo(3.6,-4,6.2,-1).curveTo(8.3,1.5,9.3,3.7).curveTo(10.4,6.4,10.6,9).curveTo(9.6,4,5.2,0).closePath();
	this.shape_132.setTransform(34.85,-275.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#080808").beginStroke().moveTo(6.1,6.5).curveTo(4.9,3.8,3.8,1.9).curveTo(1.9,-1.2,-0.3,-4.2).curveTo(-2,-6.4,-3.7,-8.2).curveTo(-5.9,-10.3,-7.7,-11.5).curveTo(-5.3,-10.2,-3.3,-8.7).curveTo(-1,-6.9,0.7,-5.1).curveTo(3.4,-2.3,5,1.3).curveTo(6.1,3.9,6.8,6.3).curveTo(7.4,8.7,7.7,11.5).curveTo(7.2,9.1,6.1,6.5).closePath();
	this.shape_133.setTransform(22.875,-286.625);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#080808").beginStroke().moveTo(2.2,6).curveTo(-2.4,-1.7,-4.2,-5).curveTo(-6.7,-10.1,-7.9,-13.3).curveTo(-9.4,-17.7,-10.3,-22).curveTo(-8.7,-17.4,-6.8,-13.7).curveTo(-5.1,-10.5,-2.2,-6.2).curveTo(2.1,0.1,4.3,4.9).curveTo(8,13.4,10.2,22).curveTo(7,13.7,2.2,6).closePath();
	this.shape_134.setTransform(-47.2,-167.325);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#080808").beginStroke().moveTo(-2.9,10.4).curveTo(-7.8,4.1,-10.3,-3.6).curveTo(-13.7,-14.2,-13,-25.3).curveTo(-12.6,-14.4,-8.4,-4.3).curveTo(-5.5,2.4,-1.2,9.2).curveTo(4.8,18.8,13.1,25.3).curveTo(4.1,19.5,-2.9,10.4).closePath();
	this.shape_135.setTransform(-62.2848,-201.225);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#080808").beginStroke().moveTo(-2.5,7.5).curveTo(-3.4,-0,-2.7,-7.5).curveTo(-1.9,-13.8,-0.9,-17.9).curveTo(0.7,-23.9,2.8,-27.7).curveTo(0.9,-23.6,-0.2,-17.8).curveTo(-1.1,-13.4,-1.3,-7.4).curveTo(-1.6,-0.3,-1.2,7.4).curveTo(-0.3,19.6,3,27.7).curveTo(-0.9,19.7,-2.5,7.5).closePath();
	this.shape_136.setTransform(-78.0455,-234.25);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#080808").beginStroke().moveTo(-3.8,3).curveTo(-3.4,-1.1,-1.7,-4.6).curveTo(0,-8.2,4,-14.1).curveTo(0.9,-8,-0.4,-4.1).curveTo(-1.4,-1,-2.4,3.3).curveTo(-3.6,8.6,-3.3,14.1).curveTo(-4.3,8.6,-3.8,3).closePath();
	this.shape_137.setTransform(-79.3056,-247.475);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#EFC7B0").beginStroke().moveTo(10.4,31.5).curveTo(2.5,30.1,-10.8,24).curveTo(-16.3,21.5,-22.8,16.3).curveTo(-30.8,9.8,-33.4,3.9).curveTo(-34.4,-1.7,-35.7,-6.4).lineTo(-38,-13.8).lineTo(-39.5,-18.4).curveTo(-31.9,-23.8,-29.1,-26.9).curveTo(-25,-25.7,-21.5,-24.5).lineTo(-21.4,-24.6).lineTo(-21.3,-24.5).lineTo(-21.1,-24.6).curveTo(-6,-31.8,-3.5,-32).lineTo(-3.4,-32).curveTo(-1,-31.9,27.9,-4).lineTo(27.8,-3.1).curveTo(27.6,-1.4,33.2,4.3).curveTo(37.5,8.7,38.8,10.6).curveTo(38,10.2,36.2,9.9).curveTo(32.4,9.4,28.9,10.8).lineTo(28.9,11.6).curveTo(28.3,11.3,27.8,11.3).curveTo(27.1,11.7,26.9,11.5).curveTo(25.7,12.2,26.6,16.7).lineTo(27.7,25).curveTo(27.7,30.7,23.5,31.5).curveTo(19.8,32,16.5,32).curveTo(13.2,32,10.4,31.5).closePath().moveTo(38.8,10.6).curveTo(39.8,11.1,39.5,11.7).curveTo(39.4,11.3,38.8,10.6).closePath();
	this.shape_138.setTransform(-1.1543,-153.075);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-18.3,49.7).lineTo(-40,26.7).curveTo(-22.8,19.5,-27,-13.4).curveTo(-28.3,-23.6,-31.6,-35.2).lineTo(-34.6,-44.8).curveTo(-31.9,-46.6,-29.2,-48.9).curveTo(-23.6,-53.3,-23.1,-54.9).curveTo(-22.7,-56.6,-19.5,-53.9).curveTo(-17.9,-52.6,-16.4,-50.9).lineTo(-8.5,-54.6).curveTo(-0.2,-58.3,1.5,-58.4).curveTo(3.1,-58.4,20.7,-41.9).curveTo(29.4,-33.8,37.7,-25.7).curveTo(37.1,-24.7,35.3,-20.5).curveTo(35.1,-19.9,37.2,-18.1).curveTo(39,-16.5,37.6,-15.2).curveTo(34.4,-13,33.1,-12).curveTo(30.9,-10.1,31.5,-7.3).curveTo(32.1,-4.8,33.1,1.4).lineTo(34.4,8.9).curveTo(35.9,15.5,38.1,18.9).curveTo(39.2,20.6,40,20.9).lineTo(24,45.8).curveTo(17,57.1,3.8,58.3).lineTo(1,58.4).curveTo(-10.4,58.4,-18.3,49.7).closePath().moveTo(37.7,-25.7).lineTo(37.9,-25.9).curveTo(38.2,-26.2,38,-25.4).lineTo(37.7,-25.7).closePath().moveTo(37.7,-25.7).lineTo(37.7,-25.7).closePath();
	this.shape_139.setTransform(-6.075,-126.6596);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#080808").beginStroke().moveTo(2.3,82.4).curveTo(-8.8,78.8,-10.4,74.7).curveTo(-11.4,72.2,-28.2,47.2).curveTo(-46.5,19.9,-53.7,6.4).curveTo(-61.6,-8.6,-61.6,-25.3).curveTo(-61.6,-30.5,-60.9,-35.2).lineTo(-60.1,-38.9).lineTo(-64.9,-29.9).curveTo(-61,-54.3,-41.4,-68.7).curveTo(-31.6,-75.9,-22.6,-78.3).lineTo(-35.2,-75.3).lineTo(-32.5,-76.8).curveTo(-28.9,-78.7,-24.3,-80.2).curveTo(-9.4,-85.2,10.3,-85.1).curveTo(30,-85,40.4,-77.7).curveTo(45.6,-74,46.8,-70.3).lineTo(48.3,-69.9).curveTo(50.1,-69.2,52,-68.1).curveTo(58,-64.3,61.8,-56.8).curveTo(65.6,-49.4,64.8,-26.5).curveTo(64.4,-15.1,63.3,-5.1).lineTo(13.1,85.1).curveTo(7.9,84.2,2.3,82.4).closePath();
	this.shape_140.setTransform(-18.5054,-212.6252);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#080808").beginStroke().moveTo(0.8,1.1).lineTo(-0.1,-1.4).curveTo(-0.6,-3,-1.7,-4.7).curveTo(-0.7,-3.4,0.3,-1.5).curveTo(0.9,-0.3,1.2,1).curveTo(1.6,2.5,1.7,4.7).curveTo(1.4,2.8,0.8,1.1).closePath();
	this.shape_141.setTransform(-28.3,-161.175);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#477A8E").beginStroke().moveTo(-2.3,-0.2).lineTo(2.2,0).curveTo(2,0.2,1.2,0.2).curveTo(0.1,0.2,-2.3,-0.2).closePath();
	this.shape_142.setTransform(-44.75,21.7991);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-18,27.7).curveTo(-29.4,20.4,-30.7,8.5).curveTo(-32.4,-8.5,-31.2,-14.3).curveTo(-28.7,-25.5,-15.9,-28.6).curveTo(-14.1,-29,-8.8,-30.7).curveTo(-4.1,-32.2,-0.6,-32.9).curveTo(10.3,-35,24.4,-32.1).curveTo(30,-31,31.3,-20.8).curveTo(32.5,-11.5,29.7,1.1).curveTo(26.8,13.9,21.4,22.8).curveTo(15.3,32.8,8.3,33.5).curveTo(5.7,33.8,3.2,33.8).curveTo(-8.6,33.8,-18,27.7).closePath();
	this.shape_143.setTransform(58.557,-76.0105);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#D5A690").beginStroke().moveTo(-2.8,16.7).lineTo(-5.1,11.6).curveTo(-6.8,7.7,-6.3,2).curveTo(-5.2,-9.5,6.4,-19).lineTo(4.9,-16.7).curveTo(3.1,-13.6,1.7,-9.8).curveTo(-2.6,2.3,-1.1,17.2).curveTo(-0.9,19,-1.3,19).curveTo(-1.7,19,-2.8,16.7).closePath();
	this.shape_144.setTransform(94.6455,-37.3647,1,1,22.4601);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-37.6,75.9).curveTo(-44.9,69.2,-68.4,42.5).lineTo(-43.1,-32.5).curveTo(-13.2,-56.8,5.9,-74.1).curveTo(15.5,-82.8,19,-86.6).lineTo(68.4,-80.9).lineTo(-9.2,23.4).curveTo(-16.7,34,-17.1,52.1).curveTo(-17.2,57.5,-16.6,66.6).curveTo(-16.1,75.7,-16.1,79).curveTo(-16.2,86.6,-20.8,86.6).curveTo(-26.1,86.6,-37.6,75.9).closePath();
	this.shape_145.setTransform(109.6432,-66.0853,1,1,8.5029);

	var maskedShapeInstanceList = [this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.shape_93,this.shape_94,this.instance_16,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.instance_16},{t:this.shape_94},{t:this.shape_93},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},18).to({state:[]},2).wait(66));

	// Layer_13
	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#E2B19F").beginStroke().moveTo(-2.2,0.1).lineTo(-1,-0.5).lineTo(2.2,0.4).closePath();
	this.shape_146.setTransform(156.9594,-272.0837,0.9995,0.9995,-14.9984);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#E2B19F").beginStroke().moveTo(-3.8,6.8).curveTo(-3.9,5.3,-3.9,4.1).curveTo(-3.8,1.3,-2.6,-1.1).curveTo(-2.3,-1.8,-1.2,-3.3).lineTo(0.4,-5.4).curveTo(2.1,-7.6,3.9,-9.4).lineTo(0.9,-5.1).lineTo(-0.6,-2.9).curveTo(-1.8,-1.2,-2,-0.7).curveTo(-3,1.3,-3.3,4.2).lineTo(-3.4,6.8).lineTo(-3.4,9.4).closePath();
	this.shape_147.setTransform(147.1076,-248.531,0.9986,0.9986,-14.9984);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill().beginStroke("#E2B19F").setStrokeStyle(0.7).moveTo(-1,1.8).lineTo(1,-1.8);
	this.shape_148.setTransform(139.5018,-276.8999,0.9995,0.9995,-14.9984);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill().beginStroke("#E2B19F").setStrokeStyle(0.7).moveTo(-1.5,2.6).lineTo(1.5,-2.6);
	this.shape_149.setTransform(145.6128,-277.1662,0.9995,0.9995,-14.9984);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#E2B19F").beginStroke().moveTo(-0.2,0.3).curveTo(-3,-1.2,-4.8,-2.7).curveTo(-2.7,-2,0.1,-0.4).curveTo(3.1,1.3,4.8,2.8).curveTo(3.2,2.2,-0.2,0.3).closePath();
	this.shape_150.setTransform(138.548,-275.0047,0.9986,0.9986,-14.9984);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#E2B19F").beginStroke().moveTo(4.4,1.9).lineTo(3.5,-0.1).lineTo(2.9,-1.1).lineTo(2.2,-2).curveTo(1,-3.5,-1.2,-4.8).lineTo(-3.2,-5.7).lineTo(-5.4,-6.3).curveTo(-3.2,-6.3,-0.9,-5.3).curveTo(1.4,-4.2,2.8,-2.4).curveTo(4.5,-0.3,4.9,1.7).lineTo(5.3,4).lineTo(5.4,6.3).closePath();
	this.shape_151.setTransform(130.9172,-250.1379,0.9986,0.9986,-14.9984);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#E2B19F").beginStroke().moveTo(0.1,-0.1).lineTo(-3,-2.6).curveTo(-1.1,-2.1,0.6,-0.7).curveTo(2.5,1,3,2.6).curveTo(1.8,1.3,0.1,-0.1).closePath();
	this.shape_152.setTransform(122.6956,-254.6811,0.9986,0.9986,-14.9984);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#E2B19F").beginStroke().moveTo(-0.4,6.3).lineTo(-7.9,4.2).lineTo(-10.4,3.3).curveTo(-11.7,2.6,-12.4,1.4).curveTo(-13,0.4,-13.2,-1.2).lineTo(-13.3,-2.5).curveTo(-13.3,-3.2,-13,-3.9).curveTo(-12.4,-5,-11.4,-6.1).lineTo(-11.3,-6.3).lineTo(5,-1.6).curveTo(5.9,-1.4,6.6,-0.9).lineTo(8,0).curveTo(10.5,1.9,13.1,4.4).lineTo(13.3,4.6).lineTo(8.2,4.9).lineTo(12.8,4.4).lineTo(7.7,0.4).curveTo(5.8,-0.9,4.9,-1.1).lineTo(-11.1,-5.5).curveTo(-11.9,-4.5,-12.3,-3.6).curveTo(-12.6,-3,-12.6,-2.5).lineTo(-12.5,-1.2).curveTo(-12.4,0.2,-11.9,1.1).curveTo(-11.2,2.2,-10.2,2.8).lineTo(-7.8,3.7).lineTo(-0.3,6).lineTo(4.7,5.3).lineTo(-0.4,6.3).closePath();
	this.shape_153.setTransform(123.6112,-291.3957,0.9986,0.9986,-14.9984);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#E2B19F").beginStroke().moveTo(2.5,5.7).curveTo(0.7,5,-0.1,4.3).lineTo(-5.9,5).curveTo(-8.3,5.2,-8.9,5).curveTo(-10.5,4.8,-11.7,3.7).curveTo(-12.8,2.8,-13.4,1.2).lineTo(-13.8,-0.3).curveTo(-13.8,-1.1,-13.4,-1.9).curveTo(-12.8,-3,-10.9,-3.7).curveTo(-10.2,-4,-8,-4.4).lineTo(-0.8,-5.5).lineTo(0.7,-5.6).lineTo(8,-6.2).lineTo(8.8,-6.2).lineTo(9.4,-5.7).curveTo(10.7,-4.6,13.6,-1.5).lineTo(13.8,-1.3).lineTo(8.6,-2).lineTo(13.2,-1.6).curveTo(10.6,-4.2,9.2,-5.3).lineTo(8.6,-5.7).lineTo(8,-5.7).lineTo(6.5,-5.6).lineTo(-7.9,-3.6).curveTo(-10.1,-3.3,-10.7,-3.1).curveTo(-12.3,-2.5,-12.8,-1.6).curveTo(-13.4,-0.7,-12.7,1).curveTo(-12.3,2.4,-11.3,3.3).curveTo(-10.2,4.2,-8.8,4.5).curveTo(-8.1,4.6,-6,4.5).lineTo(-0.2,4).lineTo(-0.1,4).lineTo(-0.1,4.1).curveTo(1.1,5,2.5,5.5).curveTo(4,6.1,5.5,6.2).curveTo(4.1,6.2,2.5,5.7).closePath();
	this.shape_154.setTransform(133.5387,-283.5618,0.9986,0.9986,-14.9984);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#E2B19F").beginStroke().moveTo(11.8,3.2).lineTo(10.5,0.5).lineTo(9.8,-0.9).curveTo(9.2,-1.8,8.9,-1.9).curveTo(8,-2.3,5.9,-2.7).lineTo(2.9,-3.2).lineTo(-6.3,-4.3).lineTo(-7.8,-4.4).curveTo(-8.4,-4.4,-9.3,-4.2).curveTo(-11,-3.7,-11.4,-2.6).curveTo(-11.5,-2,-11.4,-1.2).curveTo(-11.3,-0.5,-11,0.2).curveTo(-9.8,2.8,-6.4,3.7).curveTo(-5.2,4,-3.4,4.1).lineTo(5.9,5).lineTo(-3.4,4.5).curveTo(-5.1,4.5,-6.6,4.2).curveTo(-8.1,3.9,-9.5,3).curveTo(-10.9,2,-11.6,0.5).curveTo(-11.9,-0.2,-12.1,-1.1).curveTo(-12.3,-2,-12,-2.8).curveTo(-11.8,-3.6,-11,-4.2).curveTo(-10.2,-4.7,-9.5,-4.8).curveTo(-8.6,-5.1,-7.9,-5.1).lineTo(-7,-5.1).lineTo(3,-3.8).lineTo(6,-3.2).curveTo(8.2,-2.7,9.1,-2.4).curveTo(9.5,-2.1,10.2,-1.1).lineTo(10.9,0.3).lineTo(12.1,3.2).lineTo(12.1,3.3).lineTo(12,3.3).lineTo(7.7,5.1).closePath();
	this.shape_155.setTransform(143.4315,-284.1962,0.9986,0.9986,-14.9984);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#E2B19F").beginStroke().moveTo(-6.3,6.9).curveTo(-7.3,6.6,-8.1,5.6).curveTo(-8.9,4.6,-9.3,3.7).curveTo(-9.7,2.4,-9.4,1.4).curveTo(-8.8,-0.5,-6.5,-1.9).lineTo(5.3,-7.2).lineTo(5.4,-7.2).curveTo(6.2,-7,7.2,-6.6).lineTo(8.1,-6.2).curveTo(8.5,-5.9,8.7,-5.4).curveTo(9.5,-4.1,9.6,-1.8).lineTo(9.5,0).lineTo(9,1.8).curveTo(8.4,3.1,7.4,5).lineTo(8.7,1.7).curveTo(9.1,0.6,9.2,-0).curveTo(9.3,-0.9,9.2,-1.8).curveTo(9,-4.1,8.3,-5.2).lineTo(7.7,-5.7).lineTo(7,-6.1).curveTo(5.9,-6.5,5.3,-6.5).lineTo(-6.1,-1.3).curveTo(-8.2,-0.1,-8.8,1.6).curveTo(-9.1,2.5,-8.7,3.5).curveTo(-8.3,4.4,-7.7,5.2).curveTo(-6.9,6.1,-6.1,6.5).curveTo(-5.3,6.8,-4.1,6.7).curveTo(-2.7,6.5,-0.1,5.5).lineTo(3.8,3.8).lineTo(-0,5.7).curveTo(-2.8,6.9,-4.1,7.1).lineTo(-4.8,7.2).curveTo(-5.6,7.2,-6.3,6.9).closePath();
	this.shape_156.setTransform(152.436,-276.2211,0.9986,0.9986,-14.9984);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-2.6,33.2).curveTo(-4.8,33.2,-7.4,32.8).curveTo(-12.8,32,-15,30).curveTo(-18.7,28,-22.3,24.9).curveTo(-29.5,18.9,-29.1,13.7).curveTo(-28.8,9.2,-27.8,3.2).curveTo(-27.1,-1.7,-27.1,-2.7).curveTo(-27.2,-4.2,-28,-9.4).lineTo(-28.8,-14.4).lineTo(-28.6,-15).curveTo(-28.1,-15.6,-26.9,-15.9).curveTo(-25.2,-16.4,-23.6,-16).curveTo(-21.6,-15.6,-20.8,-14.1).lineTo(-18.6,-10.3).curveTo(-17.4,-7.8,-17.5,-6.3).curveTo(-17.8,-3.8,-17.7,3.1).lineTo(-13.3,5.9).lineTo(-1.9,-14.8).curveTo(-3.6,-14.4,-5.5,-14.8).curveTo(-9.4,-15.8,-10.2,-20.2).lineTo(-9.4,-21.7).curveTo(-7.9,-23.3,-4.6,-23.5).curveTo(-15.1,-26.2,-16,-27.7).curveTo(-17.1,-29.5,-17.2,-30.8).curveTo(-17.5,-33.2,-15.4,-35.5).curveTo(1.1,-31.1,2.1,-30.5).curveTo(3.1,-29.9,8.7,-25.1).lineTo(10.1,-25.5).curveTo(11.5,-25.8,12,-25.4).lineTo(16.5,-20.9).lineTo(18.9,-20.6).curveTo(21.5,-20.2,22.1,-19.6).curveTo(23,-18.8,25,-14.3).lineTo(26.5,-14.1).curveTo(28.1,-13.6,28.6,-11.8).curveTo(29,-9.9,29.1,-9.1).curveTo(29.3,-7.6,28.8,-6.4).curveTo(28.3,-4.9,26.9,-2.1).lineTo(15,30.9).curveTo(13.9,33,11.1,34.4).curveTo(8.9,35.5,6.2,35.5).curveTo(2.2,35.5,-2.6,33.2).closePath();
	this.shape_157.setTransform(135.6814,-263.9231,0.9995,0.9995,-14.9984);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#D5A690").beginStroke().moveTo(9.4,13.4).lineTo(5.9,11.8).lineTo(1.6,9).lineTo(-0.4,7.4).lineTo(-4,3.7).curveTo(-7.4,-0.2,-9.7,-4.8).curveTo(-12.3,-10,-13.1,-14.4).curveTo(-11,-9.9,-8.4,-5.6).curveTo(-5.6,-1.2,-2.5,2.4).curveTo(0.4,5.9,4.6,9.2).lineTo(9.7,12.7).lineTo(13.1,14.4).closePath();
	this.shape_158.setTransform(168.985,-128.6558,0.9995,0.9995,-14.9984);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#FDE4C8").beginStroke().moveTo(4.2,61.3).lineTo(-8.5,54.8).lineTo(-21.3,44.5).curveTo(-22.5,40.7,-23.1,33.6).curveTo(-24.4,19.3,-21.7,2.2).curveTo(-18.8,-15.8,-18.5,-37.9).curveTo(-18.1,-58.9,-20.1,-62.8).lineTo(4.8,-64.8).lineTo(13.1,-34.3).curveTo(21.6,-2.2,22.5,5.4).curveTo(23.8,16.9,23.4,36.3).curveTo(22.9,58.6,19.8,63.3).curveTo(18.9,64.8,16.2,64.8).curveTo(12.2,64.8,4.2,61.3).closePath();
	this.shape_159.setTransform(166.404,-177.4169,1,1,-14.9992);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-35.3,75.6).curveTo(-35.3,55,-34.3,29.6).curveTo(-32.2,-21.2,-27.1,-45.2).curveTo(-27.2,-54.3,-20.8,-66.2).curveTo(-14.1,-78.5,-8.3,-77.8).curveTo(-1.7,-77,0.1,-78.3).curveTo(1.2,-79,0.8,-81.5).curveTo(0.4,-84.2,1.4,-85.2).curveTo(3.2,-86.9,9.6,-86.7).curveTo(36.4,-85.9,35.2,-43.3).curveTo(34.9,-33,32.7,-26.9).curveTo(30.5,-21.3,24.8,-14.7).lineTo(4.9,86.7).closePath();
	this.shape_160.setTransform(-93.7493,11.1645);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-8.6,18.4).curveTo(-16.2,14.8,-19.1,6.9).curveTo(-22,-0.9,-18.4,-8.6).curveTo(-14.8,-16.2,-6.9,-19.1).curveTo(1,-21.9,8.6,-18.4).curveTo(16.2,-14.8,19,-6.9).curveTo(21.9,1,18.4,8.6).curveTo(14.8,16.2,6.9,19.1).curveTo(3.4,20.4,-0.1,20.4).curveTo(-4.4,20.4,-8.6,18.4).closePath();
	this.shape_161.setTransform(-109.095,90.2424);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.2,1.3).curveTo(-4.9,0.8,-8.4,-1.5).lineTo(-4.3,-0.4).curveTo(-1.9,0.1,-0.1,0.3).curveTo(1.3,0.5,4.2,0.5).curveTo(5.9,0.5,8.4,0.2).curveTo(6.1,1.1,4.2,1.3).lineTo(2,1.5).lineTo(-0.2,1.3).closePath();
	this.shape_162.setTransform(33.675,-209.0875);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-3.3,2.8).curveTo(-1,2,0.7,1.2).curveTo(2.4,0.4,4.4,-1).curveTo(5.9,-2.2,7.5,-4).curveTo(6.4,-1.8,4.9,-0.4).curveTo(3.1,1.1,1.2,2.1).curveTo(-0.8,3,-3.1,3.5).lineTo(-7.5,4).curveTo(-6.1,3.5,-3.3,2.8).closePath();
	this.shape_163.setTransform(-5.2,-202.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#080808").beginStroke().moveTo(-0.4,1).lineTo(-2.9,0.2).curveTo(-4.3,-0.2,-5.2,-0.3).curveTo(-6.4,-0.5,-7.6,-0.1).curveTo(-8.2,0.1,-9.8,1.1).curveTo(-9.1,-0.2,-8,-1).curveTo(-6.7,-1.9,-5.2,-1.9).curveTo(-3.4,-2,0.2,-0.9).curveTo(3.3,0.1,5,0.2).curveTo(6.3,0.4,7.5,0.2).curveTo(8.8,-0.1,9.8,-0.8).curveTo(9.4,0.3,7.8,1.1).curveTo(6.7,1.7,5,1.8).lineTo(4.2,1.9).curveTo(2.1,1.9,-0.4,1).closePath();
	this.shape_164.setTransform(31.9,-217.8375);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#080808").beginStroke().moveTo(-11,3.5).lineTo(-5.3,2).curveTo(-2.7,1.2,-0,0.1).lineTo(2.5,-1.4).lineTo(5,-2.8).lineTo(6.4,-3.5).curveTo(7.3,-3.8,8.2,-3.8).curveTo(9.3,-3.6,11,-2.6).lineTo(8.2,-2.8).curveTo(7.6,-2.7,5.9,-1.5).lineTo(3.5,0.2).curveTo(1.8,1.3,0.9,1.8).curveTo(-1.6,3.1,-5.1,3.6).curveTo(-6.4,3.8,-7.8,3.8).curveTo(-9.5,3.8,-11,3.5).closePath();
	this.shape_165.setTransform(-6.05,-209.8392);

	this.instance_17 = new lib.Path_0_2();
	this.instance_17.setTransform(-21.2,133.65,1,1,0,0,0,25.8,18.4);
	this.instance_17.alpha = 0.5313;
	this.instance_17.compositeOperation = "multiply";

	this.instance_18 = new lib.Path_1_1_1();
	this.instance_18.setTransform(-26.1,108.15,1,1,0,0,0,23.1,10.3);
	this.instance_18.alpha = 0.5313;
	this.instance_18.compositeOperation = "multiply";

	this.instance_19 = new lib.Path_5();
	this.instance_19.setTransform(-60.85,1.85,1,1,0,0,0,13.2,46);
	this.instance_19.alpha = 0.5313;
	this.instance_19.compositeOperation = "multiply";

	this.instance_20 = new lib.Path_1_0_1();
	this.instance_20.setTransform(0.05,57.65,1,1,0,0,0,74.1,126.8);
	this.instance_20.alpha = 0.2109;
	this.instance_20.compositeOperation = "multiply";

	this.instance_21 = new lib.Path_2_0_1();
	this.instance_21.setTransform(90.1,5.15,1,1,0,0,0,4.4,19);
	this.instance_21.alpha = 0.5313;
	this.instance_21.compositeOperation = "multiply";

	this.instance_22 = new lib.Path_3_1();
	this.instance_22.setTransform(88.7,54.6,1,1,0,0,0,16.1,121.6);
	this.instance_22.alpha = 0.2109;
	this.instance_22.compositeOperation = "multiply";

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#477A8E").beginStroke().moveTo(-53,7.3).curveTo(-75,4.3,-75,0).curveTo(-75,-4.2,-53,-7.3).curveTo(-31.1,-10.3,0,-10.3).curveTo(31.1,-10.3,53.1,-7.3).curveTo(75,-4.2,75,0).curveTo(75,4.3,53.1,7.3).curveTo(31.1,10.3,0,10.3).curveTo(-31,10.3,-53,7.3).closePath();
	this.shape_166.setTransform(21.125,99.875);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#477A8E").beginStroke().moveTo(-86.2,35.3).lineTo(-75,-42.5).lineTo(75.3,-43.3).lineTo(86.2,43.3).closePath();
	this.shape_167.setTransform(20.925,143.325);

	this.instance_23 = new lib.Path_1_3();
	this.instance_23.setTransform(51.15,-97.65,1,1,0,0,0,16.6,9.2);
	this.instance_23.alpha = 0.2109;
	this.instance_23.compositeOperation = "multiply";

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#477A8E").beginStroke().moveTo(-65.1,94.5).lineTo(-65,93.6).curveTo(-69.7,70.2,-77.9,35.6).lineTo(-85.1,5.6).curveTo(-82.7,5,-78.9,1.7).curveTo(-74.6,-2.1,-70.8,-7.9).curveTo(-60.7,-23.4,-59.3,-44.4).curveTo(-57.8,-66.4,-69.8,-83.9).curveTo(-73.6,-89.3,-78.3,-93.7).lineTo(-82.2,-97).curveTo(-72.8,-101,-60.8,-104.9).curveTo(-61.1,-104.8,-59.8,-103.9).curveTo(-57.3,-102.1,-54.6,-99.4).curveTo(-44.4,-89.2,-32.9,-67.5).curveTo(-24.1,-51,-12,-43.3).curveTo(1.8,-34.5,21.4,-36.3).curveTo(48.6,-38.7,49.5,-56.7).curveTo(50.5,-75.4,23.5,-113).curveTo(30.9,-113.5,36.2,-112.4).curveTo(38.8,-111.9,40,-111.3).lineTo(47,-105.2).curveTo(55.5,-97,62.4,-86.9).curveTo(84.6,-54.5,83.5,-14.4).curveTo(82.9,6.1,84,52).curveTo(84.5,74.9,85.1,93.8).lineTo(51.2,113.1).closePath().moveTo(-60.8,-104.9).lineTo(-60.8,-104.9).lineTo(-60.8,-104.9).closePath();
	this.shape_168.setTransform(11.075,6.2583);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-3.9,1.7).lineTo(-9.8,-0.7).curveTo(-4.9,1.1,2.9,-0.7).curveTo(6.8,-1.7,9.8,-3).lineTo(9.6,-1.5).curveTo(8.9,0.4,6.1,2.2).curveTo(4.9,3,2.8,3).curveTo(0.2,3,-3.9,1.7).closePath();
	this.shape_169.setTransform(16.3069,-91.9299);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#D5A690").beginStroke().moveTo(-15.1,56.9).curveTo(-34.7,55.8,-45.9,40.7).curveTo(-49.4,36,-51.6,30.5).lineTo(-53.1,25.9).curveTo(-55.1,10.6,-56.2,-4).curveTo(-58.5,-33.2,-54.4,-29.8).curveTo(-52.8,-28.5,-46.6,-18.6).curveTo(-39.7,-7.8,-33.6,-1.4).curveTo(-12.7,20.6,17.3,14.4).curveTo(44.5,8.8,31.3,-24.8).curveTo(27.2,-35.2,19.5,-47.3).lineTo(12.7,-57.2).lineTo(29.6,-52.7).lineTo(35.7,-47).curveTo(42,-40.9,43,-38.8).lineTo(50.8,-24.3).curveTo(57.1,-11.9,57,-9.6).lineTo(55.8,13.6).curveTo(54,35.3,49.9,41.5).curveTo(44.9,49.1,26.7,53.6).curveTo(12.2,57.2,-4.8,57.2).curveTo(-9.8,57.2,-15.1,56.9).closePath();
	this.shape_170.setTransform(21.8531,-49.5218);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#D5A690").beginStroke().moveTo(-4.6,3.1).curveTo(2.3,-0.4,5.6,-10).curveTo(6.6,-13,7.2,-16.2).lineTo(7.6,-18.7).curveTo(9.3,-7,4.3,2.7).curveTo(1.8,7.6,-1,10.1).lineTo(-8,18.7).closePath();
	this.shape_171.setTransform(-66.0327,-6.825);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#D5A690").beginStroke().moveTo(-22.8,42.8).lineTo(-17.6,17.6).lineTo(-17.8,24.6).curveTo(-17,30.8,-12.1,27.6).curveTo(-9,24.1,-7.6,22.1).lineTo(-6.8,20.7).curveTo(6,-9.6,-4.2,-36.5).curveTo(-7.4,-44.9,-12.5,-52).lineTo(-16.9,-57.4).lineTo(-1.2,-47.7).curveTo(10.1,-29.9,11.8,-28.3).curveTo(12.8,-27.3,16.5,-18.5).lineTo(20.9,-7.8).curveTo(21.8,-5.6,22.4,7.1).curveTo(23,19.5,22.7,25.7).curveTo(22.4,30.8,15.7,42.1).curveTo(9.7,52.1,7.7,53.5).curveTo(6.1,54.7,-17.8,57.4).closePath();
	this.shape_172.setTransform(-51.275,-30.975);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-26.1,29.5).curveTo(-36.3,20.4,-36.3,-1.2).curveTo(-36.3,-17.4,-26.1,-27.3).curveTo(-16.2,-37,-0.6,-37).curveTo(14.7,-37,25.5,-26.1).curveTo(36.3,-15.3,36.3,0).curveTo(36.3,15.3,25.5,26.2).curveTo(14.7,37,-0.6,37).curveTo(-17.7,37,-26.1,29.5).closePath();
	this.shape_173.setTransform(-85.725,-45.975);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#D5A690").beginStroke().moveTo(3.3,7.3).curveTo(2.2,5.6,-3.8,-1.9).lineTo(-9.4,-8.9).curveTo(-8.6,-8.1,-5.5,-8.1).curveTo(-3.8,-8,-2.1,-8.2).lineTo(9.4,8.4).curveTo(8.3,8.8,7,8.9).lineTo(6.5,8.9).curveTo(4.2,8.9,3.3,7.3).closePath();
	this.shape_174.setTransform(41.7375,-98.5439);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-91.9,-66.7).curveTo(-90.9,-67.1,-69.6,-74.7).curveTo(-44.4,-83.6,-29.2,-89.4).curveTo(-19.9,-92.9,-15.8,-94.2).curveTo(-8.5,-96.6,-3.6,-97.1).curveTo(5.9,-98.3,18.2,-96.9).curveTo(25.5,-96,40.4,-93.2).curveTo(48.2,-91.7,56.2,-89.7).curveTo(64.2,-87.7,72.1,-86.2).curveTo(72.8,-86.1,79.2,-83.4).lineTo(85.3,-80.8).lineTo(84.2,-77.3).curveTo(82.9,-72.9,82.1,-67.9).curveTo(79.7,-51.8,83.7,-35.8).curveTo(87.9,-19.2,90.3,-16.7).lineTo(90.6,-16.5).lineTo(38.5,29.4).lineTo(-45.2,97.7).closePath().moveTo(90.6,-16.5).lineTo(91.9,-17.6).curveTo(91.7,-16.3,91.1,-16.3).curveTo(90.9,-16.3,90.6,-16.5).closePath().moveTo(90.6,-16.5).lineTo(90.6,-16.5).closePath();
	this.shape_175.setTransform(-7.575,-13.8593);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#477A8E").beginStroke().moveTo(-2.3,-0.2).lineTo(2.2,0).curveTo(2,0.2,1.2,0.2).curveTo(0.1,0.2,-2.3,-0.2).closePath();
	this.shape_176.setTransform(-44.75,21.7991);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-23.8,23.4).curveTo(-35.2,16.1,-36.5,4.2).curveTo(-37.8,-8.8,-31.9,-17.7).curveTo(-25.3,-27.7,-11.2,-29.2).curveTo(3.7,-30.7,16.7,-23.6).curveTo(29.8,-16.4,35.4,-3.3).curveTo(39.9,7.3,28.7,17.7).curveTo(18,27.6,2.5,29.2).curveTo(-0.1,29.5,-2.6,29.5).curveTo(-14.4,29.5,-23.8,23.4).closePath();
	this.shape_177.setTransform(64.3545,-71.7031);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#477A8E").beginStroke().moveTo(-46.4,9.9).curveTo(-65.7,5.8,-65.7,-0).curveTo(-65.7,-5.8,-46.4,-9.9).curveTo(-27.2,-14,0,-14).curveTo(27.2,-14,46.4,-9.9).curveTo(65.7,-5.8,65.7,-0).curveTo(65.7,5.8,46.4,9.9).curveTo(27.2,14,0,14).curveTo(-27.2,14,-46.4,9.9).closePath();
	this.shape_178.setTransform(15.725,91.325);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#477A8E").beginStroke().moveTo(0,89.6).curveTo(-29.4,90.7,-52.4,87.2).curveTo(-84.1,82.5,-87.6,70.4).curveTo(-92,54.8,-80,-9.9).curveTo(-76.2,-30.1,-71.3,-52.9).lineTo(-63.5,-87.5).lineTo(-16.7,-88.9).lineTo(-16.7,-89.9).lineTo(0,-89.4).lineTo(16.7,-89.9).lineTo(16.7,-88.9).lineTo(63.5,-87.5).lineTo(71.3,-52.9).curveTo(76.3,-30.2,80,-9.9).curveTo(92,54.8,87.6,70.4).curveTo(84.1,82.5,52.4,87.2).curveTo(34.8,89.9,13.4,89.9).curveTo(6.9,89.9,0,89.6).closePath();
	this.shape_179.setTransform(18.3768,165.6725);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.4,0.9).curveTo(-1.4,0.5,-1.9,0).curveTo(-2.8,-0.6,-3.2,-1.2).lineTo(3.2,0.8).curveTo(2.4,1.2,1.4,1.2).curveTo(0.7,1.2,-0.4,0.9).closePath();
	this.shape_180.setTransform(26.925,-204.075);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#EFC7B0").beginStroke().moveTo(2.4,-2.8).curveTo(2.4,-1.8,2,-0.9).curveTo(1.5,-0,0.9,0.8).lineTo(-0.6,2).curveTo(-1.5,2.5,-2.4,2.7).closePath();
	this.shape_181.setTransform(3.2,-199.05);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#EFC7B0").beginStroke().moveTo(0.2,-1.6).curveTo(1.3,-3.6,2.3,-5.1).lineTo(2.4,-2.8).lineTo(-2.4,5.1).curveTo(-1.9,2.5,0.2,-1.6).closePath();
	this.shape_182.setTransform(11.525,-175.425);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.1,2.3).lineTo(-3.4,-0.4).curveTo(-1.5,-1.7,-0.9,-1.6).lineTo(1.5,-1.4).lineTo(2.3,-2).curveTo(3.3,-2.5,3.9,-2.3).curveTo(5.3,-1.7,6.9,-0.4).lineTo(7.1,-0.3).curveTo(3.5,-0.8,-1.6,0.5).curveTo(-5,1.3,-7.1,2.3).closePath();
	this.shape_183.setTransform(25.475,-163.6786);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#A51727").beginStroke().moveTo(-6.6,1.7).lineTo(-2.9,-1).curveTo(-1,-2.3,-0.4,-2.3).lineTo(2.1,-2.1).lineTo(2.9,-2.6).curveTo(3.8,-3.1,4.4,-2.9).curveTo(5.9,-2.3,7.4,-1.1).lineTo(8.8,-0.2).curveTo(5.3,-0.4,-2.2,1.3).lineTo(-8.8,3).curveTo(-8.2,2.8,-6.6,1.7).closePath();
	this.shape_184.setTransform(24.9125,-163.0161);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#FFAFAF").beginStroke().moveTo(-7.3,5.5).lineTo(-11.2,3.9).curveTo(-9.8,1.9,-7.9,-0.3).curveTo(-4.1,-4.7,-1.6,-5.5).curveTo(0.6,-6.2,1.6,-5.3).curveTo(2,-4.9,2.4,-5.3).curveTo(3.4,-6.8,5,-6.4).curveTo(6.8,-6,8.5,-4.6).curveTo(10.6,-2.8,11.2,-0.2).lineTo(10.7,1.8).curveTo(9.8,3.9,8.6,4.2).lineTo(5.2,4.9).curveTo(2.6,5.3,-0.9,6.3).curveTo(-1.5,6.5,-2.4,6.5).curveTo(-4.4,6.5,-7.3,5.5).closePath();
	this.shape_185.setTransform(24.3,-163.2176);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#080808").beginStroke().moveTo(-4.1,2).lineTo(-6.4,1.5).lineTo(-8.5,0.6).lineTo(0.4,0.7).curveTo(2.5,0.5,4.5,-0.2).curveTo(6.9,-1.1,8.5,-2.2).curveTo(7.4,-0.4,5,0.8).curveTo(3.2,1.8,0.5,2.2).lineTo(-1,2.2).curveTo(-2.4,2.2,-4.1,2).closePath();
	this.shape_186.setTransform(33.6,-206.6519);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#080808").beginStroke().moveTo(-4.4,2.5).curveTo(-7.1,2.2,-9.3,1.2).curveTo(-3.5,1.5,0.5,0.9).curveTo(2.5,0.6,5,-0.3).curveTo(7,-1.1,9.3,-2.6).curveTo(7.9,-0.5,5.5,0.8).curveTo(3.4,1.9,0.6,2.4).curveTo(-0.9,2.6,-2.3,2.6).lineTo(-4.4,2.5).closePath();
	this.shape_187.setTransform(-4.2,-199.7857);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#EFC7B0").beginStroke().moveTo(4.1,9.6).curveTo(0.9,8.6,-1.5,4.7).curveTo(-2.6,3.2,-4.4,-1.6).curveTo(-6.6,-7.3,-6.1,-9.1).curveTo(-5.9,-10,-5,-9.8).curveTo(-4.5,-9.7,-3.7,-9).curveTo(-1.4,-6.7,-0.5,-5.6).curveTo(1.3,-3.4,1.8,-1.7).lineTo(2.1,1.6).curveTo(2.2,3.3,3.6,4.5).curveTo(5.1,5.7,6,8).curveTo(6.7,9.9,5.3,9.9).curveTo(4.9,9.9,4.1,9.6).closePath();
	this.shape_188.setTransform(-46.1583,-181.8758);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.3,3.4).lineTo(-3.3,2.8).curveTo(-5.4,2.8,-6.3,2.6).curveTo(-7.9,2.2,-8,0.5).curveTo(-8.1,-0.3,-7.5,-1.6).curveTo(-7.8,-0.7,-7.3,0.1).curveTo(-6.8,1.2,-5.2,1.2).curveTo(-4.4,1.2,-2.6,1).curveTo(-1.9,1,-0.1,1.4).curveTo(1.5,1.7,2.4,1.6).curveTo(3,1.6,4.2,0.9).curveTo(5.5,0.2,6.3,-0.6).curveTo(7.4,-1.7,6.8,-3.7).lineTo(7.7,-2.5).curveTo(8.4,-1.2,7.8,0).curveTo(7.6,0.3,7.2,0.7).lineTo(6.3,1.3).lineTo(4.9,2.7).curveTo(4.2,3.3,2.7,3.6).lineTo(1.9,3.7).curveTo(1,3.7,-0.3,3.4).closePath();
	this.shape_189.setTransform(21.5488,-179.1054);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#080808").beginStroke().moveTo(0.6,2.6).lineTo(-1.1,-2.5).lineTo(-3.2,-9.8).lineTo(-0.6,-2.7).lineTo(1,2.5).lineTo(3.2,9.8).closePath();
	this.shape_190.setTransform(39.15,-244.025);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#080808").beginStroke().moveTo(0.3,1.4).lineTo(-0,-1.4).curveTo(-0.3,-3.6,-0.7,-5.4).curveTo(-0.2,-3.5,0.2,-1.5).curveTo(0.5,-0.2,0.5,1.4).curveTo(0.7,3.3,0.7,5.3).lineTo(0.3,1.4).closePath();
	this.shape_191.setTransform(33,-255);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#080808").beginStroke().moveTo(-0.3,3.1).curveTo(1.2,0.8,2.5,-1.8).curveTo(4.3,-5.5,5.2,-9.2).curveTo(4.5,-5.2,3,-1.6).curveTo(1.8,1.3,0.2,3.3).curveTo(-2.2,6.5,-5.2,9.2).curveTo(-2.4,6.4,-0.3,3.1).closePath();
	this.shape_192.setTransform(27.75,-255.075);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#080808").beginStroke().moveTo(-1.2,3.7).curveTo(1.8,1.4,4.2,-0.9).curveTo(8.1,-4.8,9.7,-9.2).curveTo(8.3,-4.7,4.6,-0.5).curveTo(2.5,2,-0.9,4.3).curveTo(-4.2,6.5,-9.7,9.2).curveTo(-4.4,6.2,-1.2,3.7).closePath();
	this.shape_193.setTransform(9.1,-248.175);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill("#080808").beginStroke().moveTo(-13.4,10.3).curveTo(-7.9,8.4,-3.9,6.7).lineTo(2.6,3.9).curveTo(6.4,2.3,8.9,0.8).curveTo(10.5,-0.2,13,-2).curveTo(15.1,-3.6,16.8,-5.3).lineTo(18.5,-7.1).lineTo(19.8,-9.2).curveTo(21.2,-11.3,23.1,-13.1).curveTo(21.4,-11,20.4,-8.9).lineTo(19.1,-6.6).curveTo(18.3,-5.2,17.7,-4.5).curveTo(16.4,-2.9,14.2,-0.7).lineTo(10.3,2.8).curveTo(5,6.5,-3.1,9).curveTo(-8,10.3,-13,11.4).curveTo(-18.6,12.5,-23.1,13.1).curveTo(-19.1,12.2,-13.4,10.3).closePath();
	this.shape_194.setTransform(-10.25,-246.425);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill("#080808").beginStroke().moveTo(-0.5,2.7).curveTo(-1.5,0.5,-2.1,-1.6).curveTo(-2.7,-4.9,-2.9,-8).curveTo(-2.3,-4.8,-1.3,-1.9).lineTo(0.3,2.3).curveTo(1.5,5.7,2.9,8).curveTo(0.9,5.4,-0.5,2.7).closePath();
	this.shape_195.setTransform(-36.85,-191.25);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill("#080808").beginStroke().moveTo(1.5,11.3).curveTo(1.6,8.2,1.3,4.5).curveTo(0.8,-0.8,0.2,-4.9).curveTo(-0.2,-8,-1.1,-11.6).curveTo(-2,-15.3,-3.1,-18).curveTo(-1.6,-15.2,-0.2,-11.8).curveTo(1.1,-8.2,1.9,-5.3).curveTo(3.2,-0.3,3,4.5).curveTo(2.9,8,2.4,11.4).curveTo(2,14.1,1,18).curveTo(1.4,14.9,1.5,11.3).closePath();
	this.shape_196.setTransform(-40.192,-214.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill("#080808").beginStroke().moveTo(1.5,2.6).lineTo(-0.3,-3).curveTo(-1.5,-6.8,-3.4,-10.7).curveTo(-1,-7,0.7,-3.4).curveTo(2,-0.5,2.5,2.3).curveTo(3.4,6.5,3.4,10.7).curveTo(2.8,6.6,1.5,2.6).closePath();
	this.shape_197.setTransform(-39.825,-223.725);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill("#FDE4C8").beginStroke().moveTo(19.6,62.4).curveTo(7.5,59.3,-3.4,55.1).curveTo(-19.1,49,-23.4,43.6).curveTo(-27.5,38.4,-29.8,33.5).lineTo(-31.4,29.6).curveTo(-34.1,30.2,-37.7,29.2).curveTo(-44.9,27.3,-48.9,19.3).curveTo(-53.5,10.3,-53.7,4.8).curveTo(-53.8,-0.1,-50.4,-1.3).curveTo(-47.4,-2.3,-45,-0.4).curveTo(-43.2,0.9,-41,4.5).curveTo(-37.9,9.4,-37,12.1).curveTo(-36.8,12.6,-36.4,13).lineTo(-35.6,13.5).lineTo(-36.3,11.6).lineTo(-35.5,12.6).curveTo(-35.1,13.1,-34.5,13.5).lineTo(-35.3,11.4).lineTo(-34.1,12.5).curveTo(-33.5,13,-31.6,13.6).curveTo(-32.4,12.7,-32.8,11).curveTo(-33.8,6.7,-34.3,2).curveTo(-35,-4.2,-34.1,-6.9).curveTo(-31.3,-15.3,-33.6,-26.8).curveTo(-35.7,-37.8,-40,-40.9).lineTo(-38.2,-40.2).curveTo(-35.7,-39.5,-32.9,-39.1).curveTo(-23.8,-38,-13.8,-41.2).curveTo(-6.6,-43.5,2.1,-47.5).curveTo(8.1,-50.2,8,-49.8).curveTo(6.5,-47.7,3.1,-44.7).curveTo(1.5,-43.3,-0.3,-42.1).lineTo(-1.9,-41.1).curveTo(5,-43.1,12.6,-48.3).curveTo(16.4,-50.9,18.8,-53.1).lineTo(13.7,-44.2).curveTo(16.3,-45.3,22.1,-51.2).curveTo(25,-54.2,27.3,-57).lineTo(22.5,-47.1).lineTo(24.9,-49.1).curveTo(27.8,-51.6,30.3,-54.7).curveTo(32.7,-57.7,34.4,-60.9).curveTo(35.2,-62.4,35.5,-63.4).curveTo(37.3,-54.7,36.9,-57.7).lineTo(38.1,-50.7).lineTo(38.9,-57.3).lineTo(40.1,-53.7).lineTo(42.2,-47.3).curveTo(44.7,-38.5,45.5,-35.3).curveTo(46.7,-30.1,47.3,-23.5).curveTo(47.7,-19.9,49.6,-10.6).curveTo(51.8,-0.1,52.3,2.9).lineTo(53.6,10.6).curveTo(54.3,20.6,51.3,32.5).curveTo(48.4,44.3,46.8,49).curveTo(45.2,54,43.2,57.1).curveTo(40.3,61.4,33.3,62.8).curveTo(30.4,63.4,27.4,63.4).curveTo(23.5,63.4,19.6,62.4).closePath();
	this.shape_198.setTransform(-3.561,-197.2687);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill("#080808").beginStroke().moveTo(1,3.9).curveTo(0.8,-0.6,0.4,-4.1).curveTo(-0.3,-9.9,-1.8,-15.1).curveTo(0.1,-9.8,1.1,-4.2).curveTo(1.8,-0.1,1.8,3.9).curveTo(1.7,9.8,0.8,15.1).curveTo(1.4,9.3,1,3.9).closePath();
	this.shape_199.setTransform(45.775,-249.85);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill("#080808").beginStroke().moveTo(-9.5,0.1).curveTo(-7.2,-3,-4.8,-5.1).curveTo(-2,-7.6,0.7,-9.3).curveTo(9.6,-15.3,18.4,-17.5).curveTo(9.7,-14.8,1.5,-8.3).lineTo(-3.8,-4).curveTo(-6,-2.1,-8.5,0.9).curveTo(-14.6,8.3,-18.4,17.5).curveTo(-15.1,7.9,-9.5,0.1).closePath();
	this.shape_200.setTransform(-63.175,-271.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill("#080808").beginStroke().moveTo(-14.4,1.4).curveTo(-10.7,-0.6,-6.8,-2.2).curveTo(-1.4,-4.4,4.7,-5.2).curveTo(8.3,-5.8,13,-5.9).curveTo(16.8,-6.1,21.2,-5.8).curveTo(16.4,-5.7,13,-5.4).curveTo(8.5,-4.9,4.9,-4.2).curveTo(-1.3,-2.9,-6.5,-1.2).curveTo(-9.9,-0.1,-14.1,1.8).curveTo(-17.6,3.6,-21.2,6).curveTo(-18,3.5,-14.4,1.4).closePath();
	this.shape_201.setTransform(-39.3,-289.4531);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill("#080808").beginStroke().moveTo(-15.8,-0.2).curveTo(-10.7,-1.3,-6.7,-1.9).curveTo(-0.5,-2.8,6.5,-2.3).curveTo(10.7,-2,15.7,-1.2).curveTo(19.4,-0.5,24.6,0.9).curveTo(20,-0.1,15.6,-0.6).curveTo(10,-1.1,6.4,-1.1).curveTo(0.3,-1.2,-6.6,-0.7).curveTo(-10.6,-0.5,-15.7,0.4).curveTo(-20.2,1.2,-24.6,2.5).curveTo(-20.6,1,-15.8,-0.2).closePath();
	this.shape_202.setTransform(-20.75,-296.2362);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill("#080808").beginStroke().moveTo(14.7,1.9).curveTo(10.9,-0.6,7.2,-2).curveTo(1.7,-4.2,-4.2,-5.3).curveTo(-8.1,-6,-12.6,-6).curveTo(-16.8,-5.9,-21.1,-4.9).curveTo(-17,-6.4,-12.7,-7.1).curveTo(-7.7,-7.7,-3.9,-7.5).curveTo(2.6,-7.1,8.2,-4).curveTo(12,-2,15.4,1).curveTo(18.5,3.9,21.1,7.5).curveTo(18,4.1,14.7,1.9).closePath();
	this.shape_203.setTransform(5.275,-292.7868);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill("#080808").beginStroke().moveTo(6.2,0.7).curveTo(4.4,-0.2,2.9,-0.7).curveTo(0.5,-1.5,-2,-1.9).curveTo(-3.9,-2.2,-5.6,-2.1).curveTo(-7.5,-2,-9.2,-1.6).curveTo(-7.8,-2.2,-5.7,-2.6).curveTo(-3.5,-2.9,-1.9,-2.8).curveTo(0.8,-2.7,3.3,-1.6).curveTo(4.8,-0.8,6.5,0.3).curveTo(8.1,1.5,9.2,2.8).curveTo(7.8,1.6,6.2,0.7).closePath();
	this.shape_204.setTransform(32.775,-280.5292);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill("#080808").beginStroke().moveTo(5.2,0).curveTo(2.8,-2.2,-0.8,-4.6).curveTo(-5.3,-7.5,-10.7,-9).curveTo(-5.2,-8.3,-0.2,-5.8).curveTo(3.6,-4,6.2,-1).curveTo(8.3,1.5,9.3,3.7).curveTo(10.4,6.4,10.6,9).curveTo(9.6,4,5.2,0).closePath();
	this.shape_205.setTransform(34.85,-275.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill("#080808").beginStroke().moveTo(6.1,6.5).curveTo(4.9,3.8,3.8,1.9).curveTo(1.9,-1.2,-0.3,-4.2).curveTo(-2,-6.4,-3.7,-8.2).curveTo(-5.9,-10.3,-7.7,-11.5).curveTo(-5.3,-10.2,-3.3,-8.7).curveTo(-1,-6.9,0.7,-5.1).curveTo(3.4,-2.3,5,1.3).curveTo(6.1,3.9,6.8,6.3).curveTo(7.4,8.7,7.7,11.5).curveTo(7.2,9.1,6.1,6.5).closePath();
	this.shape_206.setTransform(22.875,-286.625);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#080808").beginStroke().moveTo(2.2,6).curveTo(-2.4,-1.7,-4.2,-5).curveTo(-6.7,-10.1,-7.9,-13.3).curveTo(-9.4,-17.7,-10.3,-22).curveTo(-8.7,-17.4,-6.8,-13.7).curveTo(-5.1,-10.5,-2.2,-6.2).curveTo(2.1,0.1,4.3,4.9).curveTo(8,13.4,10.2,22).curveTo(7,13.7,2.2,6).closePath();
	this.shape_207.setTransform(-47.2,-167.325);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill("#080808").beginStroke().moveTo(-2.9,10.4).curveTo(-7.8,4.1,-10.3,-3.6).curveTo(-13.7,-14.2,-13,-25.3).curveTo(-12.6,-14.4,-8.4,-4.3).curveTo(-5.5,2.4,-1.2,9.2).curveTo(4.8,18.8,13.1,25.3).curveTo(4.1,19.5,-2.9,10.4).closePath();
	this.shape_208.setTransform(-62.2848,-201.225);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill("#080808").beginStroke().moveTo(-2.5,7.5).curveTo(-3.4,-0,-2.7,-7.5).curveTo(-1.9,-13.8,-0.9,-17.9).curveTo(0.7,-23.9,2.8,-27.7).curveTo(0.9,-23.6,-0.2,-17.8).curveTo(-1.1,-13.4,-1.3,-7.4).curveTo(-1.6,-0.3,-1.2,7.4).curveTo(-0.3,19.6,3,27.7).curveTo(-0.9,19.7,-2.5,7.5).closePath();
	this.shape_209.setTransform(-78.0455,-234.25);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill("#080808").beginStroke().moveTo(-3.8,3).curveTo(-3.4,-1.1,-1.7,-4.6).curveTo(0,-8.2,4,-14.1).curveTo(0.9,-8,-0.4,-4.1).curveTo(-1.4,-1,-2.4,3.3).curveTo(-3.6,8.6,-3.3,14.1).curveTo(-4.3,8.6,-3.8,3).closePath();
	this.shape_210.setTransform(-79.3056,-247.475);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginFill("#EFC7B0").beginStroke().moveTo(10.4,31.5).curveTo(2.5,30.1,-10.8,24).curveTo(-16.3,21.5,-22.8,16.3).curveTo(-30.8,9.8,-33.4,3.9).curveTo(-34.4,-1.7,-35.7,-6.4).lineTo(-38,-13.8).lineTo(-39.5,-18.4).curveTo(-31.9,-23.8,-29.1,-26.9).curveTo(-25,-25.7,-21.5,-24.5).lineTo(-21.4,-24.6).lineTo(-21.3,-24.5).lineTo(-21.1,-24.6).curveTo(-6,-31.8,-3.5,-32).lineTo(-3.4,-32).curveTo(-1,-31.9,27.9,-4).lineTo(27.8,-3.1).curveTo(27.6,-1.4,33.2,4.3).curveTo(37.5,8.7,38.8,10.6).curveTo(38,10.2,36.2,9.9).curveTo(32.4,9.4,28.9,10.8).lineTo(28.9,11.6).curveTo(28.3,11.3,27.8,11.3).curveTo(27.1,11.7,26.9,11.5).curveTo(25.7,12.2,26.6,16.7).lineTo(27.7,25).curveTo(27.7,30.7,23.5,31.5).curveTo(19.8,32,16.5,32).curveTo(13.2,32,10.4,31.5).closePath().moveTo(38.8,10.6).curveTo(39.8,11.1,39.5,11.7).curveTo(39.4,11.3,38.8,10.6).closePath();
	this.shape_211.setTransform(-1.1543,-153.075);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-18.3,49.7).lineTo(-40,26.7).curveTo(-22.8,19.5,-27,-13.4).curveTo(-28.3,-23.6,-31.6,-35.2).lineTo(-34.6,-44.8).curveTo(-31.9,-46.6,-29.2,-48.9).curveTo(-23.6,-53.3,-23.1,-54.9).curveTo(-22.7,-56.6,-19.5,-53.9).curveTo(-17.9,-52.6,-16.4,-50.9).lineTo(-8.5,-54.6).curveTo(-0.2,-58.3,1.5,-58.4).curveTo(3.1,-58.4,20.7,-41.9).curveTo(29.4,-33.8,37.7,-25.7).curveTo(37.1,-24.7,35.3,-20.5).curveTo(35.1,-19.9,37.2,-18.1).curveTo(39,-16.5,37.6,-15.2).curveTo(34.4,-13,33.1,-12).curveTo(30.9,-10.1,31.5,-7.3).curveTo(32.1,-4.8,33.1,1.4).lineTo(34.4,8.9).curveTo(35.9,15.5,38.1,18.9).curveTo(39.2,20.6,40,20.9).lineTo(24,45.8).curveTo(17,57.1,3.8,58.3).lineTo(1,58.4).curveTo(-10.4,58.4,-18.3,49.7).closePath().moveTo(37.7,-25.7).lineTo(37.9,-25.9).curveTo(38.2,-26.2,38,-25.4).lineTo(37.7,-25.7).closePath().moveTo(37.7,-25.7).lineTo(37.7,-25.7).closePath();
	this.shape_212.setTransform(-6.075,-126.6596);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.beginFill("#080808").beginStroke().moveTo(2.3,82.4).curveTo(-8.8,78.8,-10.4,74.7).curveTo(-11.4,72.2,-28.2,47.2).curveTo(-46.5,19.9,-53.7,6.4).curveTo(-61.6,-8.6,-61.6,-25.3).curveTo(-61.6,-30.5,-60.9,-35.2).lineTo(-60.1,-38.9).lineTo(-64.9,-29.9).curveTo(-61,-54.3,-41.4,-68.7).curveTo(-31.6,-75.9,-22.6,-78.3).lineTo(-35.2,-75.3).lineTo(-32.5,-76.8).curveTo(-28.9,-78.7,-24.3,-80.2).curveTo(-9.4,-85.2,10.3,-85.1).curveTo(30,-85,40.4,-77.7).curveTo(45.6,-74,46.8,-70.3).lineTo(48.3,-69.9).curveTo(50.1,-69.2,52,-68.1).curveTo(58,-64.3,61.8,-56.8).curveTo(65.6,-49.4,64.8,-26.5).curveTo(64.4,-15.1,63.3,-5.1).lineTo(13.1,85.1).curveTo(7.9,84.2,2.3,82.4).closePath();
	this.shape_213.setTransform(-18.5054,-212.6252);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.beginFill("#080808").beginStroke().moveTo(0.8,1.1).lineTo(-0.1,-1.4).curveTo(-0.6,-3,-1.7,-4.7).curveTo(-0.7,-3.4,0.3,-1.5).curveTo(0.9,-0.3,1.2,1).curveTo(1.6,2.5,1.7,4.7).curveTo(1.4,2.8,0.8,1.1).closePath();
	this.shape_214.setTransform(-28.3,-161.175);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.beginFill("#477A8E").beginStroke().moveTo(-2.3,-0.2).lineTo(2.2,0).curveTo(2,0.2,1.2,0.2).curveTo(0.1,0.2,-2.3,-0.2).closePath();
	this.shape_215.setTransform(-44.75,21.7991);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-18,27.7).curveTo(-29.4,20.4,-30.7,8.5).curveTo(-32.4,-8.5,-31.2,-14.3).curveTo(-28.7,-25.5,-15.9,-28.6).curveTo(-14.1,-29,-8.8,-30.7).curveTo(-4.1,-32.2,-0.6,-32.9).curveTo(10.3,-35,24.4,-32.1).curveTo(30,-31,31.3,-20.8).curveTo(32.5,-11.5,29.7,1.1).curveTo(26.8,13.9,21.4,22.8).curveTo(15.3,32.8,8.3,33.5).curveTo(5.7,33.8,3.2,33.8).curveTo(-8.6,33.8,-18,27.7).closePath();
	this.shape_216.setTransform(58.557,-76.0105);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.beginFill("#D5A690").beginStroke().moveTo(-2.8,16.7).lineTo(-5.1,11.6).curveTo(-6.8,7.7,-6.3,2).curveTo(-5.2,-9.5,6.4,-19).lineTo(4.9,-16.7).curveTo(3.1,-13.6,1.7,-9.8).curveTo(-2.6,2.3,-1.1,17.2).curveTo(-0.9,19,-1.3,19).curveTo(-1.7,19,-2.8,16.7).closePath();
	this.shape_217.setTransform(94.6455,-37.3647,1,1,22.4601);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-37.6,75.9).curveTo(-44.9,69.2,-68.4,42.5).lineTo(-43.1,-32.5).curveTo(-13.2,-56.8,5.9,-74.1).curveTo(15.5,-82.8,19,-86.6).lineTo(68.4,-80.9).lineTo(-9.2,23.4).curveTo(-16.7,34,-17.1,52.1).curveTo(-17.2,57.5,-16.6,66.6).curveTo(-16.1,75.7,-16.1,79).curveTo(-16.2,86.6,-20.8,86.6).curveTo(-26.1,86.6,-37.6,75.9).closePath();
	this.shape_218.setTransform(112.7093,-63.9761,1,1,17.1968);

	var maskedShapeInstanceList = [this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.shape_166,this.shape_167,this.instance_23,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.instance_23},{t:this.shape_167},{t:this.shape_166},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146}]},16).to({state:[]},2).wait(68));

	// Layer_9
	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-8.6,18.4).curveTo(-16.2,14.8,-19.1,6.9).curveTo(-22,-0.9,-18.4,-8.6).curveTo(-14.8,-16.2,-6.9,-19.1).curveTo(1,-21.9,8.6,-18.4).curveTo(16.2,-14.8,19,-6.9).curveTo(21.9,1,18.4,8.6).curveTo(14.8,16.2,6.9,19.1).curveTo(3.4,20.4,-0.1,20.4).curveTo(-4.4,20.4,-8.6,18.4).closePath();
	this.shape_219.setTransform(-109.095,90.2424);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-35.3,75.6).curveTo(-35.3,55,-34.3,29.6).curveTo(-32.2,-21.2,-27.1,-45.2).curveTo(-27.2,-54.3,-20.8,-66.2).curveTo(-14.1,-78.5,-8.3,-77.8).curveTo(-1.7,-77,0.1,-78.3).curveTo(1.2,-79,0.8,-81.5).curveTo(0.4,-84.2,1.4,-85.2).curveTo(3.2,-86.9,9.6,-86.7).curveTo(36.4,-85.9,35.2,-43.3).curveTo(34.9,-33,32.7,-26.9).curveTo(30.5,-21.3,24.8,-14.7).lineTo(4.9,86.7).closePath();
	this.shape_220.setTransform(-93.7493,12.9145);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.beginFill("#D5A690").beginStroke().moveTo(-4.6,3.1).curveTo(2.3,-0.4,5.6,-10).curveTo(6.6,-13,7.2,-16.2).lineTo(7.6,-18.7).curveTo(9.3,-7,4.3,2.7).curveTo(1.8,7.6,-1,10.1).lineTo(-8,18.7).closePath();
	this.shape_221.setTransform(-66.0327,-5.075);

	this.instance_24 = new lib.Path_0_3();
	this.instance_24.setTransform(-21.2,135.4,1,1,0,0,0,25.8,18.4);
	this.instance_24.alpha = 0.5313;
	this.instance_24.compositeOperation = "multiply";

	this.instance_25 = new lib.Path_1_0_2();
	this.instance_25.setTransform(-26.1,109.9,1,1,0,0,0,23.1,10.3);
	this.instance_25.alpha = 0.5313;
	this.instance_25.compositeOperation = "multiply";

	this.instance_26 = new lib.Path_6();
	this.instance_26.setTransform(-60.85,3.6,1,1,0,0,0,13.2,46);
	this.instance_26.alpha = 0.5313;
	this.instance_26.compositeOperation = "multiply";

	this.instance_27 = new lib.Path_1_4();
	this.instance_27.setTransform(0.05,59.4,1,1,0,0,0,74.1,126.8);
	this.instance_27.alpha = 0.2109;
	this.instance_27.compositeOperation = "multiply";

	this.instance_28 = new lib.Path_2_2();
	this.instance_28.setTransform(90.75,4.1,1,1,0,0,0,4.1,14.9);
	this.instance_28.alpha = 0.5313;
	this.instance_28.compositeOperation = "multiply";

	this.instance_29 = new lib.Path_3_2();
	this.instance_29.setTransform(85,54.95,1,1,0,0,0,20.1,120.2);
	this.instance_29.alpha = 0.2109;
	this.instance_29.compositeOperation = "multiply";

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.beginFill("#477A8E").beginStroke().moveTo(-53,7.3).curveTo(-75,4.3,-75,0).curveTo(-75,-4.2,-53,-7.3).curveTo(-31.1,-10.3,0,-10.3).curveTo(31.1,-10.3,53.1,-7.3).curveTo(75,-4.2,75,0).curveTo(75,4.3,53.1,7.3).curveTo(31.1,10.3,0,10.3).curveTo(-31,10.3,-53,7.3).closePath();
	this.shape_222.setTransform(21.125,101.625);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.beginFill("#477A8E").beginStroke().moveTo(-86.2,35.3).lineTo(-75,-42.5).lineTo(75.3,-43.3).lineTo(86.2,43.3).closePath();
	this.shape_223.setTransform(20.925,145.075);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.beginFill("#477A8E").beginStroke().moveTo(-65.1,93.7).lineTo(-65,92.8).curveTo(-69.7,69.4,-77.9,34.8).lineTo(-85.1,4.8).curveTo(-82.7,4.3,-78.9,0.9).curveTo(-74.6,-2.9,-70.8,-8.7).curveTo(-60.7,-24.1,-59.3,-45.2).curveTo(-57.8,-67.1,-69.8,-84.7).curveTo(-73.6,-90.1,-78.3,-94.5).lineTo(-82.2,-97.7).curveTo(-72.8,-101.7,-60.8,-105.7).curveTo(-61.1,-105.6,-59.8,-104.7).curveTo(-57.3,-102.9,-54.6,-100.2).curveTo(-44.4,-89.9,-32.9,-68.3).curveTo(-24.1,-51.8,-12,-44.1).curveTo(1.8,-35.3,21.4,-37.1).curveTo(80.4,-42.3,30.2,-112.4).curveTo(40.4,-110.2,49.6,-108.1).lineTo(55.2,-102.6).curveTo(61.8,-95.1,67.2,-85.6).curveTo(84.6,-55.2,83.5,-15.2).curveTo(82.9,5.4,84,51.2).curveTo(84.5,74.1,85.1,93).lineTo(51.2,112.3).closePath().moveTo(-60.8,-105.7).lineTo(-60.8,-105.7).lineTo(-60.8,-105.7).closePath();
	this.shape_224.setTransform(11.075,8.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.beginFill("#D5A690").beginStroke().moveTo(-22.8,42.8).lineTo(-17.5,24).lineTo(-17.7,27.7).curveTo(-17,30.8,-12.1,27.6).curveTo(-9.6,24.1,-7.9,22.1).lineTo(-6.8,20.7).curveTo(6,-9.6,-4.2,-36.5).curveTo(-7.4,-44.9,-12.5,-52).lineTo(-16.9,-57.4).lineTo(-1.2,-47.7).curveTo(10.1,-29.9,11.8,-28.3).curveTo(12.8,-27.3,16.5,-18.5).lineTo(20.9,-7.8).curveTo(21.8,-5.6,22.4,7.1).curveTo(23,19.5,22.7,25.7).curveTo(22.4,30.8,15.7,42.1).curveTo(9.7,52.1,7.7,53.5).curveTo(6.1,54.7,-17.8,57.4).closePath();
	this.shape_225.setTransform(-51.275,-29.225);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-4.4,0.4).lineTo(-9.8,-3.1).curveTo(-5.3,-0.4,2.7,-0.7).curveTo(6.7,-0.9,9.8,-1.6).lineTo(9.4,-0.2).curveTo(8.3,1.5,5.3,2.7).curveTo(4.5,3.1,3.5,3.1).curveTo(0.5,3.1,-4.4,0.4).closePath();
	this.shape_226.setTransform(16.6338,-89.6468);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.beginFill("#D5A690").beginStroke().moveTo(-15.1,56.2).curveTo(-34.7,55.1,-45.9,40).curveTo(-49.4,35.3,-51.6,29.8).lineTo(-53.1,25.2).curveTo(-55.1,9.9,-56.2,-4.7).curveTo(-58.5,-33.9,-54.4,-30.5).curveTo(-52.8,-29.2,-46.6,-19.4).curveTo(-39.8,-8.8,-33.7,-2.4).curveTo(-12.8,19.4,17.3,13.7).curveTo(48,7.9,36.7,-24.9).curveTo(33.2,-35.1,25.9,-46.8).lineTo(19.4,-56.5).lineTo(32.1,-50.3).lineTo(36.9,-46.2).curveTo(42,-41.6,43,-39.5).lineTo(50.8,-25).curveTo(57.1,-12.6,57,-10.3).lineTo(55.8,12.9).curveTo(54,34.6,49.9,40.8).curveTo(44.9,48.4,26.7,52.9).curveTo(12.2,56.5,-4.8,56.5).curveTo(-9.8,56.5,-15.1,56.2).closePath();
	this.shape_227.setTransform(21.8531,-47.0718);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-26.1,29.5).curveTo(-36.3,20.4,-36.3,-1.2).curveTo(-36.3,-17.4,-26.1,-27.3).curveTo(-16.2,-37,-0.6,-37).curveTo(14.7,-37,25.5,-26.1).curveTo(36.3,-15.3,36.3,0).curveTo(36.3,15.3,25.5,26.2).curveTo(14.7,37,-0.6,37).curveTo(-17.7,37,-26.1,29.5).closePath();
	this.shape_228.setTransform(-85.725,-44.225);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-91.9,-66.7).curveTo(-90.9,-67.1,-69.6,-74.7).curveTo(-44.4,-83.6,-29.2,-89.4).curveTo(-19.9,-92.9,-15.8,-94.2).curveTo(-8.5,-96.6,-3.6,-97.1).curveTo(5.9,-98.3,18.2,-96.9).curveTo(25.5,-96,40.4,-93.2).curveTo(48.2,-91.7,56.2,-89.7).curveTo(64.2,-87.7,72.1,-86.2).curveTo(72.8,-86.1,79.2,-83.4).lineTo(85.3,-80.8).lineTo(84.2,-77.3).curveTo(82.9,-72.9,82.1,-67.9).curveTo(79.7,-51.8,83.7,-35.8).curveTo(87.9,-19.2,90.3,-16.7).lineTo(90.6,-16.5).lineTo(38.5,29.4).lineTo(-45.2,97.7).closePath().moveTo(90.6,-16.5).lineTo(91.9,-17.6).curveTo(91.7,-16.3,91.1,-16.3).curveTo(90.9,-16.3,90.6,-16.5).closePath().moveTo(90.6,-16.5).lineTo(90.6,-16.5).closePath();
	this.shape_229.setTransform(-7.575,-12.1093);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.beginFill("#477A8E").beginStroke().moveTo(-2.3,-0.2).lineTo(2.2,0).curveTo(2,0.2,1.2,0.2).curveTo(0.1,0.2,-2.3,-0.2).closePath();
	this.shape_230.setTransform(-44.75,23.5491);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.beginFill("#477A8E").beginStroke().moveTo(-46.4,9.9).curveTo(-65.7,5.8,-65.7,-0).curveTo(-65.7,-5.8,-46.4,-9.9).curveTo(-27.2,-14,0,-14).curveTo(27.2,-14,46.4,-9.9).curveTo(65.7,-5.8,65.7,-0).curveTo(65.7,5.8,46.4,9.9).curveTo(27.2,14,0,14).curveTo(-27.2,14,-46.4,9.9).closePath();
	this.shape_231.setTransform(15.725,93.075);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.beginFill("#477A8E").beginStroke().moveTo(0,89.6).curveTo(-29.4,90.7,-52.4,87.2).curveTo(-84.1,82.5,-87.6,70.4).curveTo(-92,54.8,-80,-9.9).curveTo(-76.2,-30.1,-71.3,-52.9).lineTo(-63.5,-87.5).lineTo(-16.7,-88.9).lineTo(-16.7,-89.9).lineTo(0,-89.4).lineTo(16.7,-89.9).lineTo(16.7,-88.9).lineTo(63.5,-87.5).lineTo(71.3,-52.9).curveTo(76.3,-30.2,80,-9.9).curveTo(92,54.8,87.6,70.4).curveTo(84.1,82.5,52.4,87.2).curveTo(34.8,89.9,13.4,89.9).curveTo(6.9,89.9,0,89.6).closePath();
	this.shape_232.setTransform(18.3768,167.4225);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.4,0.5).curveTo(-1.4,-0.5,-1.6,-1.4).curveTo(-0.7,-1.1,0.2,-0.2).curveTo(1.1,0.6,1.6,1.5).curveTo(0.7,1.4,-0.4,0.5).closePath();
	this.shape_233.setTransform(28.575,-199);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.2,-0.2).lineTo(2.4,-1.8).curveTo(2.2,-1.1,1.6,-0.4).lineTo(0.4,0.7).curveTo(-1.2,1.7,-2.4,1.8).curveTo(-1.7,1,-0.2,-0.2).closePath();
	this.shape_234.setTransform(6.35,-196.25);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.beginFill("#EFC7B0").beginStroke().moveTo(0.4,-1.5).curveTo(1.6,-3.5,2.6,-5).lineTo(2.6,-2.7).lineTo(-2.6,5).curveTo(-2,2.4,0.4,-1.5).closePath();
	this.shape_235.setTransform(12.925,-171.35);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,-0.4).curveTo(-1.4,-1.6,-0.8,-1.5).lineTo(1.6,-1.2).lineTo(2.5,-1.7).curveTo(3.5,-2.1,4.1,-1.9).curveTo(5.6,-1,6.9,0.1).lineTo(7.1,0.3).curveTo(3.5,-0.4,-1.7,0.6).curveTo(-4.8,1.2,-7.1,2).lineTo(-3.4,-0.4).closePath();
	this.shape_236.setTransform(26.1375,-158.9196);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.beginFill("#A51727").beginStroke().moveTo(-8.4,2.4).curveTo(-7.6,2.1,-6.5,1.4).lineTo(-2.7,-1.1).curveTo(-0.7,-2.3,-0.1,-2.2).lineTo(2.3,-1.8).lineTo(3.2,-2.3).curveTo(4.2,-2.8,4.8,-2.5).curveTo(6.3,-1.7,7.6,-0.5).lineTo(9,0.5).curveTo(5.4,0.1,-2.1,1.3).lineTo(-9,2.6).closePath();
	this.shape_237.setTransform(25.425,-158.2946);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.beginFill("#FFAFAF").beginStroke().moveTo(-7.5,4.9).lineTo(-11.3,3.1).curveTo(-9.8,1.2,-7.7,-0.9).curveTo(-3.7,-5,-1.1,-5.7).curveTo(1.1,-6.2,2,-5.2).curveTo(2.4,-4.8,2.8,-5.2).curveTo(3.9,-6.6,5.4,-6.1).curveTo(7.3,-5.6,8.9,-4.1).curveTo(10.8,-2.2,11.3,0.4).lineTo(10.6,2.4).curveTo(9.7,4.4,8.3,4.7).lineTo(5,5.1).curveTo(2.4,5.4,-1.1,6.1).lineTo(-2.3,6.2).curveTo(-4.3,6.2,-7.5,4.9).closePath();
	this.shape_238.setTransform(24.85,-158.334);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.beginFill("#080808").beginStroke().moveTo(-7.2,0.8).curveTo(-6,-0.6,-5.4,-1.1).lineTo(-4.3,-1.8).lineTo(-3.1,-2.4).curveTo(-1.4,-2.9,-0.5,-2.9).curveTo(2.1,-3.1,4.6,-1.9).curveTo(7.1,-0.7,8.6,1.2).curveTo(6.4,-0,4.1,-0.8).curveTo(1.7,-1.6,-0.4,-1.4).curveTo(-2.8,-1.3,-4.8,-0.1).lineTo(-6.7,1.3).lineTo(-8.6,2.9).curveTo(-7.9,1.6,-7.2,0.8).closePath();
	this.shape_239.setTransform(36.975,-204.0333);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.beginFill("#080808").beginStroke().moveTo(-0.3,2.3).curveTo(-1.9,2.2,-3,1).curveTo(-4,-0.3,-3.9,-1.9).lineTo(-3.9,-2).curveTo(-0.6,-2.9,3.9,-1.5).lineTo(3.9,-1.2).curveTo(3.8,0.1,2.9,1).curveTo(2,2,0.8,2.2).lineTo(0.1,2.3).closePath();
	this.shape_240.setTransform(37.2156,-203.2473);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.3).moveTo(-8.8,2).curveTo(-5.9,-3.5,1.5,-2.2).curveTo(5.2,-1.5,8.3,0.3).curveTo(6.4,1.1,3.3,1.7).curveTo(-2.9,3,-8.8,2).closePath();
	this.shape_241.setTransform(37.2476,-203.127);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.6,2).curveTo(-5.7,-3.5,1.8,-2.2).curveTo(5.4,-1.5,8.5,0.3).curveTo(6.7,1.1,3.6,1.7).curveTo(0,2.4,-3.4,2.4).curveTo(-6,2.4,-8.6,2).closePath();
	this.shape_242.setTransform(36.95,-203.127);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.beginFill("#080808").beginStroke().moveTo(-5.5,-0.5).curveTo(-3,-2.2,-0.5,-2.9).curveTo(2.5,-3.8,5.2,-2.9).curveTo(7.9,-1.9,9.4,0.7).curveTo(7.2,-1.2,4.9,-1.8).curveTo(2.6,-2.3,-0.1,-1.5).curveTo(-2.1,-1,-4.8,0.5).curveTo(-7.1,1.7,-9.4,3.4).curveTo(-8,1.4,-5.5,-0.5).closePath();
	this.shape_243.setTransform(-1.15,-199.3689);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.beginFill("#080808").beginStroke().moveTo(-3.1,1.3).curveTo(-3.9,0.2,-3.9,-1.1).curveTo(0.4,-3,3.6,-2.5).curveTo(4,-1.7,3.9,-0.8).curveTo(3.7,1.2,2,2.3).lineTo(-1,2.7).curveTo(-2.3,2.3,-3.1,1.3).closePath();
	this.shape_244.setTransform(0.01,-198.8521);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.3).moveTo(9.9,0.1).curveTo(6.2,-4.7,-1.7,-1.5).curveTo(-4.2,-0.5,-6.7,1.2).lineTo(-8.8,2.7).lineTo(-1.9,2.8).curveTo(5.8,2.4,9.9,0.1).closePath();
	this.shape_245.setTransform(-1.6223,-198.765);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.4,2.7).lineTo(-7.2,1.2).curveTo(-4.7,-0.5,-2.3,-1.5).curveTo(5.6,-4.7,9.3,0.1).curveTo(5.3,2.4,-2.4,2.8).closePath();
	this.shape_246.setTransform(-1.1,-198.765);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.beginFill("#EFC7B0").beginStroke().moveTo(3.5,9.9).curveTo(0.4,8.7,-1.8,4.6).curveTo(-2.8,2.9,-4.3,-1.8).curveTo(-6.1,-7.7,-5.5,-9.5).curveTo(-5.3,-10.4,-4.4,-10.1).curveTo(-3.9,-10,-3.1,-9.2).curveTo(-1,-6.9,-0.1,-5.6).curveTo(1.6,-3.3,1.9,-1.5).lineTo(2,1.7).curveTo(2,3.4,3.4,4.7).curveTo(4.7,6.1,5.5,8.3).curveTo(6.1,10.2,4.8,10.2).curveTo(4.3,10.2,3.5,9.9).closePath();
	this.shape_247.setTransform(-44.2333,-181.435);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.5,3.1).lineTo(-3.5,2.2).curveTo(-5.6,2.1,-6.5,1.8).curveTo(-8.1,1.3,-8.1,-0.3).curveTo(-8.1,-1.3,-7.4,-2.4).curveTo(-7.7,-1.5,-7.4,-0.7).curveTo(-6.9,0.4,-5.4,0.6).lineTo(-2.7,0.5).curveTo(-2,0.6,-0.2,1).curveTo(1.4,1.5,2.2,1.5).curveTo(2.9,1.4,4.1,0.8).curveTo(5.5,0.2,6.3,-0.6).curveTo(7.4,-1.6,7,-3.5).lineTo(7.8,-2.4).curveTo(8.4,-1,7.7,0.1).curveTo(7.5,0.5,7.1,0.8).lineTo(6.2,1.3).lineTo(4.6,2.7).curveTo(4,3.2,2.4,3.5).lineTo(1.9,3.5).curveTo(0.9,3.5,-0.5,3.1).closePath();
	this.shape_248.setTransform(23.2127,-174.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.beginFill("#080808").beginStroke().moveTo(-0.4,1.8).curveTo(-2.9,1.4,-5.3,0.4).curveTo(-7.5,-0.5,-9.6,-2.3).lineTo(-4.8,-1.1).lineTo(9.6,1.5).curveTo(7.6,2.2,4.6,2.3).lineTo(3.8,2.3).curveTo(1.7,2.3,-0.4,1.8).closePath();
	this.shape_249.setTransform(36.2,-214.1923);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.beginFill("#080808").beginStroke().moveTo(-5.6,2.8).lineTo(0.2,0.2).curveTo(3.4,-1.2,5.8,-2.4).curveTo(8.9,-4,11.3,-5.5).curveTo(9.7,-3.2,6.6,-1).curveTo(4.4,0.5,1,2.1).curveTo(-2.1,3.4,-5.1,4.3).curveTo(-8.5,5.3,-11.3,5.4).lineTo(-5.6,2.8).closePath();
	this.shape_250.setTransform(-3.55,-209.45);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.beginFill("#080808").beginStroke().moveTo(0.4,2.7).lineTo(-0.9,-2.6).lineTo(-2.6,-10).lineTo(-0.5,-2.7).curveTo(0.3,-0.3,0.9,2.6).lineTo(2.6,10).closePath();
	this.shape_251.setTransform(44.825,-238.125);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.beginFill("#080808").beginStroke().moveTo(0.2,1.4).lineTo(-0.4,-5.4).lineTo(0.3,-1.5).lineTo(0.4,1.4).curveTo(0.4,3.4,0.3,5.4).curveTo(0.3,3.6,0.2,1.4).closePath();
	this.shape_252.setTransform(39.45,-249.45);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.beginFill("#080808").beginStroke().moveTo(-0.4,3).curveTo(1.1,0.8,2.6,-1.7).curveTo(4.5,-5,5.8,-8.8).curveTo(4.8,-4.9,3.1,-1.4).curveTo(1.8,1.1,-0.1,3.3).curveTo(-2.6,6.5,-5.8,8.8).curveTo(-2.9,6.3,-0.4,3).closePath();
	this.shape_253.setTransform(34.15,-249.825);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.beginFill("#080808").beginStroke().moveTo(-1.5,3.7).curveTo(2,1.3,4.2,-0.6).curveTo(8.3,-4.2,10.2,-8.6).curveTo(8.6,-4.1,4.7,-0.2).curveTo(2.3,2.3,-1.1,4.2).curveTo(-4.4,6.1,-10.3,8.6).curveTo(-4.6,5.7,-1.5,3.7).closePath();
	this.shape_254.setTransform(15.1,-244.125);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.beginFill("#080808").beginStroke().moveTo(-14,9.4).curveTo(-9.2,8.1,-4.4,6.5).curveTo(4.7,3.4,8.8,1.3).curveTo(10.5,0.5,13.1,-1.2).curveTo(15.7,-3,17,-4.2).curveTo(17.7,-4.7,18.8,-5.9).lineTo(20.4,-7.9).curveTo(21.8,-9.9,23.9,-11.6).curveTo(22,-9.8,20.8,-7.6).curveTo(20.4,-6.6,19.5,-5.3).curveTo(18.7,-4.1,17.8,-3.3).curveTo(16.1,-1.5,14.1,0.2).curveTo(11.8,2.2,10,3.4).curveTo(4.6,6.9,-3.7,8.7).curveTo(-8.7,9.9,-13.8,10.5).curveTo(-19.4,11.4,-23.8,11.6).curveTo(-19.9,11,-14,9.4).closePath();
	this.shape_255.setTransform(-4.3,-243.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.beginFill("#080808").beginStroke().moveTo(-0.6,2.6).curveTo(-1.6,0.4,-1.9,-1.8).curveTo(-2.4,-5,-2.4,-8.2).curveTo(-2,-4.8,-1.1,-2).lineTo(0.1,2.3).curveTo(1.1,5.5,2.4,8.2).curveTo(0.8,5.7,-0.6,2.6).closePath();
	this.shape_256.setTransform(-34.3023,-190.175);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.beginFill("#080808").beginStroke().moveTo(0.4,11.5).curveTo(0.6,7.4,0.5,4.7).curveTo(0.4,-0.1,0.1,-4.9).curveTo(-0.1,-8,-0.8,-11.6).curveTo(-1.3,-14.7,-2.4,-18.2).curveTo(-0.9,-14.8,0.1,-11.8).curveTo(1,-8.8,1.8,-5.1).curveTo(2.7,-0.3,2.3,4.7).curveTo(2,7.5,1.2,11.6).curveTo(0.7,14.4,-0.6,18.1).curveTo(0.1,14.9,0.4,11.5).closePath();
	this.shape_257.setTransform(-35.7027,-213.95);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.beginFill("#080808").beginStroke().moveTo(1.3,2.7).lineTo(-0.2,-3).curveTo(-1.2,-7.2,-2.8,-10.9).curveTo(-0.7,-7.4,0.9,-3.3).curveTo(2,-0.5,2.3,2.5).curveTo(2.9,6.4,2.7,10.9).curveTo(2.4,6.9,1.3,2.7).closePath();
	this.shape_258.setTransform(-35.2339,-222.775);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-7.3,0.2).curveTo(-5,-3.4,-0.7,-3.7).curveTo(3.5,-4,6.6,-1).curveTo(8.1,0.4,8.8,2).lineTo(-8.8,3.7).closePath();
	this.shape_259.setTransform(36.975,-204.8386);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-7.3,0.4).curveTo(-4.2,-3.6,0.1,-4.2).curveTo(4.2,-4.8,7.3,-1.7).curveTo(8.8,-0.2,9.5,1.5).lineTo(-9.5,4.3).curveTo(-8.8,2.4,-7.3,0.4).closePath();
	this.shape_260.setTransform(-1.175,-200.1986);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.beginFill("#FDE4C8").beginStroke().moveTo(14.1,61.4).curveTo(3.1,57.8,-7.3,52.7).curveTo(-21.6,45.8,-25.5,40.1).curveTo(-29.3,34.6,-31.3,29.5).lineTo(-32.6,25.5).curveTo(-35.4,26,-38.9,24.8).curveTo(-46,22.4,-49.5,14.2).curveTo(-53.5,4.9,-53.3,-0.6).curveTo(-53.2,-5.5,-49.6,-6.4).curveTo(-46.6,-7.2,-44.3,-5.2).curveTo(-42.6,-3.7,-40.6,-0).curveTo(-37.8,5.1,-37.1,7.7).curveTo(-37,8.3,-36.6,8.7).lineTo(-35.9,9.2).lineTo(-36.4,7.3).lineTo(-35.7,8.3).lineTo(-34.8,9.3).lineTo(-35.4,7.1).lineTo(-34.3,8.4).curveTo(-33.7,8.9,-31.8,9.6).curveTo(-32.6,8.6,-32.9,6.9).curveTo(-33.7,2.6,-33.8,-2.2).curveTo(-34.1,-8.3,-33,-11).curveTo(-29.7,-19.2,-31.3,-30.8).curveTo(-32.8,-42,-36.8,-45.3).lineTo(-35,-44.5).curveTo(-32.6,-43.6,-29.8,-43.1).curveTo(-20.8,-41.4,-10.6,-44).curveTo(-3.3,-45.9,5.6,-49.3).curveTo(11.8,-51.6,11.6,-51.2).curveTo(10,-49.2,6.4,-46.4).curveTo(4.8,-45.1,2.8,-44).lineTo(1.2,-43.1).curveTo(8.2,-44.7,16.1,-49.4).curveTo(20.1,-51.8,22.6,-53.8).lineTo(16.9,-45.2).curveTo(19.6,-46.2,25.7,-51.8).curveTo(28.8,-54.5,31.4,-57.1).lineTo(26,-47.6).lineTo(28.5,-49.4).curveTo(31.5,-51.8,34.2,-54.7).curveTo(36.8,-57.5,38.7,-60.6).curveTo(39.6,-62.1,40,-63.1).curveTo(41.3,-53.7,40.9,-57.7).lineTo(41.7,-50.2).lineTo(42.9,-56.7).lineTo(43.9,-53.1).lineTo(45.6,-46.6).curveTo(47.6,-37.8,48.1,-34.4).curveTo(49,-29.2,49.2,-22.5).curveTo(49.4,-18.9,50.7,-9.4).curveTo(52.3,1.2,52.5,4.2).lineTo(53.3,11.9).curveTo(53.4,22,49.7,33.6).curveTo(46.5,43.8,43.4,49.9).curveTo(41.3,54,38.5,57.7).curveTo(35.4,61.8,28.1,62.8).curveTo(26.1,63.1,24.1,63.1).curveTo(19.1,63.1,14.1,61.4).closePath();
	this.shape_261.setTransform(-1.2764,-192.1464);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.beginFill("#080808").beginStroke().moveTo(0.4,4).curveTo(0.4,-0.5,0.2,-4).curveTo(-0,-9.3,-1.2,-15.2).curveTo(0.2,-9.9,0.9,-4.1).curveTo(1.4,-0,1.1,4).curveTo(0.7,9.7,-0.6,15.2).curveTo(0.4,9.3,0.4,4).closePath();
	this.shape_262.setTransform(52.21,-243.525);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.beginFill("#080808").beginStroke().moveTo(-9.5,-0.4).curveTo(-7.1,-3.3,-4.5,-5.4).curveTo(-2.2,-7.2,1.3,-9.3).curveTo(10.4,-14.7,19.4,-16.3).curveTo(10.8,-14.2,2,-8.2).curveTo(-1.4,-5.9,-3.6,-4.2).curveTo(-6.2,-2.2,-8.6,0.4).curveTo(-14.9,7.1,-19.4,16.3).curveTo(-15.6,7,-9.5,-0.4).closePath();
	this.shape_263.setTransform(-55.575,-272.025);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.beginFill("#080808").beginStroke().moveTo(-14.4,0.7).curveTo(-10.4,-1.2,-6.7,-2.4).curveTo(-1.2,-4.2,5,-4.7).curveTo(8.8,-5,13.3,-4.9).curveTo(16.7,-4.7,21.5,-4.2).curveTo(17.1,-4.5,13.3,-4.3).curveTo(8.8,-4.2,5.1,-3.6).curveTo(-0.6,-2.8,-6.4,-1.4).curveTo(-10.5,-0.3,-14.2,1.2).curveTo(-17.8,2.7,-21.5,4.9).curveTo(-17.9,2.5,-14.4,0.7).closePath();
	this.shape_264.setTransform(-30.625,-288.6125);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.beginFill("#080808").beginStroke().moveTo(15.6,0.4).curveTo(10.9,-0.4,6.6,-0.7).curveTo(-0.3,-1.2,-6.4,-1.1).curveTo(-10.7,-1.1,-15.5,-0.6).curveTo(-19.2,-0.2,-24.6,0.9).curveTo(-20,-0.3,-15.6,-1.1).curveTo(-10.9,-2,-6.5,-2.3).curveTo(0.1,-2.8,6.7,-1.9).curveTo(11.9,-1.1,15.8,-0.1).curveTo(19.8,0.8,24.6,2.5).curveTo(20,1.2,15.6,0.4).closePath();
	this.shape_265.setTransform(-11.8,-293.9643);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.beginFill("#080808").beginStroke().moveTo(14.6,2.4).curveTo(11,-0.4,7.4,-2).curveTo(2.3,-4.4,-3.8,-6).curveTo(-7.5,-6.9,-12.2,-7.2).curveTo(-16.3,-7.3,-20.6,-6.6).curveTo(-16.3,-7.9,-12.2,-8.3).curveTo(-7.3,-8.6,-3.4,-8.1).curveTo(3.2,-7.3,8.4,-3.9).curveTo(12.1,-1.6,15.4,1.6).curveTo(18.2,4.4,20.7,8.4).curveTo(17.8,4.9,14.6,2.4).closePath();
	this.shape_266.setTransform(14,-288.4721);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.beginFill("#080808").beginStroke().moveTo(6.2,0.9).curveTo(4.6,-0.1,3,-0.7).curveTo(0.7,-1.6,-1.9,-2.2).curveTo(-3.6,-2.6,-5.4,-2.7).curveTo(-7.2,-2.7,-9.1,-2.4).curveTo(-7.4,-2.9,-5.5,-3.2).curveTo(-3.5,-3.3,-1.7,-3.1).curveTo(1,-2.9,3.4,-1.6).curveTo(4.8,-0.8,6.5,0.6).curveTo(7.7,1.6,9.1,3.2).curveTo(7.6,1.8,6.2,0.9).closePath();
	this.shape_267.setTransform(40.725,-274.7321);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.beginFill("#080808").beginStroke().moveTo(5.2,0.3).curveTo(2.7,-2.3,-0.5,-4.7).curveTo(-4.8,-7.9,-10.1,-9.6).curveTo(-4.7,-8.6,0.2,-5.9).curveTo(3.9,-3.8,6.3,-0.6).curveTo(8.1,1.9,9,4.2).curveTo(10,6.9,10.1,9.6).curveTo(9.4,4.6,5.2,0.3).closePath();
	this.shape_268.setTransform(42.475,-269.35);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.beginFill("#080808").beginStroke().moveTo(5.7,6.9).curveTo(4.6,4.1,3.6,2.1).curveTo(2.1,-0.8,-0.1,-4.2).curveTo(-1.6,-6.5,-3.2,-8.3).curveTo(-4.7,-10,-7,-12).curveTo(-4.7,-10.5,-2.7,-8.9).curveTo(-0.5,-6.8,1,-5).curveTo(3.6,-1.9,4.9,1.6).curveTo(5.6,3.6,6.3,6.7).curveTo(6.8,9.1,7,12).curveTo(6.6,9.5,5.7,6.9).closePath();
	this.shape_269.setTransform(31.25,-281.65);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.beginFill("#080808").beginStroke().moveTo(2.3,6).curveTo(-2.5,-1.7,-4.1,-5).curveTo(-6.6,-9.6,-7.9,-13.3).curveTo(-9.3,-17.3,-10.3,-22).curveTo(-9,-17.8,-6.8,-13.7).curveTo(-5.5,-11.1,-2.2,-6.2).curveTo(2.1,0,4.2,5).curveTo(8,13.2,10.3,22).curveTo(6.7,13.4,2.3,6).closePath();
	this.shape_270.setTransform(-46.95,-165.475);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.beginFill("#080808").beginStroke().moveTo(-3.4,10.2).curveTo(-7.9,3.5,-9.9,-4.2).curveTo(-12.6,-15,-11.3,-26).curveTo(-11.5,-15,-7.9,-4.8).curveTo(-5.2,2.4,-1.6,9.2).curveTo(3.8,19.1,11.7,26.1).curveTo(3.2,19.9,-3.4,10.2).closePath();
	this.shape_271.setTransform(-59.25,-201.75);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.beginFill("#080808").beginStroke().moveTo(-3.8,7.2).curveTo(-4.2,-0.7,-2.9,-7.9).curveTo(-1.8,-14.2,-0.5,-18.1).curveTo(1.3,-23.7,3.8,-27.6).curveTo(1.7,-23.9,0.1,-17.9).curveTo(-0.9,-13.9,-1.6,-7.7).curveTo(-2.3,-0.6,-2.4,7.1).curveTo(-2.3,19.4,0.5,27.6).curveTo(-2.9,19.7,-3.8,7.2).closePath();
	this.shape_272.setTransform(-71.9985,-235.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.beginFill("#080808").beginStroke().moveTo(-4.2,2.8).curveTo(-3.5,-1.2,-1.6,-4.7).curveTo(0.4,-8.4,4.7,-13.8).curveTo(1.2,-8,-0.3,-4.1).curveTo(-1.8,-0.5,-2.9,3.1).curveTo(-4.4,8.3,-4.4,13.9).curveTo(-5.1,8,-4.2,2.8).closePath();
	this.shape_273.setTransform(-72.9831,-248.95);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.beginFill("#EFC7B0").beginStroke().moveTo(25.2,33.7).curveTo(18.8,33.2,0.9,24.7).curveTo(-4.2,22.2,-13.4,15.4).curveTo(-23.9,7.5,-28.5,1.6).curveTo(-29.8,-8.2,-32.1,-18.7).lineTo(-34.1,-27.3).lineTo(-33.9,-27.3).curveTo(-27.8,-27.6,-25,-28.8).lineTo(-24.7,-28.9).curveTo(-20.4,-27.6,-16.7,-26.3).lineTo(-16.5,-26.4).lineTo(-16.4,-26.3).lineTo(-8.6,-30).curveTo(-0.4,-33.6,1.4,-33.8).lineTo(4.4,-33.6).lineTo(24.9,-31.7).lineTo(25.1,-31.7).lineTo(25.5,-32.3).curveTo(26.5,-33.1,27.6,-33.3).curveTo(31.9,-32.1,32.7,-4.9).lineTo(33,4.2).curveTo(32.7,13.3,32.9,18.1).curveTo(33.1,24.4,34.1,28.2).curveTo(31.4,33.8,26.1,33.8).lineTo(25.2,33.7).closePath();
	this.shape_274.setTransform(-5.825,-149.4273);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-18.3,49.6).lineTo(-40,26.7).curveTo(-24.6,20.6,-27.8,-16.3).curveTo(-28.8,-27.8,-31.6,-41).lineTo(-34.1,-52).lineTo(-28.9,-52.5).curveTo(-23.6,-53.3,-23.1,-55).curveTo(-22.7,-56.7,-19.5,-54).curveTo(-17.9,-52.6,-16.4,-51).lineTo(-8.5,-54.6).curveTo(-0.2,-58.3,1.4,-58.4).curveTo(4.1,-58.5,25.1,-56.4).lineTo(26.1,-57.6).curveTo(27.3,-58.6,28.4,-57.4).curveTo(32,-53.6,32.7,-29.6).curveTo(33.6,-0.3,36.9,13.2).curveTo(38.5,20,40,20.9).lineTo(24,45.8).curveTo(17,57.1,3.8,58.3).lineTo(1,58.4).curveTo(-10.4,58.4,-18.3,49.6).closePath();
	this.shape_275.setTransform(-5.825,-124.7871);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.beginFill("#080808").beginStroke().moveTo(-5,81.8).curveTo(-15.9,77.5,-17.2,73.3).curveTo(-18.1,70.7,-33.2,44.7).curveTo(-49.8,16.3,-56.1,2.4).curveTo(-63.1,-13.1,-62.1,-29.7).curveTo(-61.8,-34.8,-60.7,-39.5).lineTo(-59.7,-43.2).lineTo(-65.1,-34.5).curveTo(-59.7,-58.6,-39.2,-71.8).curveTo(-29.2,-78.2,-20.3,-80).lineTo(-32.6,-77.9).lineTo(-29.8,-79.3).curveTo(-26.1,-80.9,-21.4,-82.2).curveTo(-6.2,-86.2,13.4,-84.9).curveTo(33.1,-83.6,43,-75.6).curveTo(47.9,-71.6,48.9,-67.9).lineTo(50.4,-67.3).curveTo(52.2,-66.6,54,-65.3).curveTo(59.8,-61.1,63.1,-53.4).curveTo(66.4,-45.8,64.2,-23).curveTo(63.1,-11.6,61.3,-1.7).lineTo(5.5,85.2).curveTo(0.4,83.9,-5,81.8).closePath();
	this.shape_276.setTransform(-12.535,-209.7844);

	this.instance_30 = new lib.Symbol4("synched",0,false);
	this.instance_30.setTransform(154.95,47.15);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.beginFill("#080808").beginStroke().moveTo(0.8,1.1).lineTo(-0.1,-1.3).curveTo(-0.7,-3.1,-1.7,-4.7).curveTo(-0.7,-3.6,0.4,-1.5).curveTo(1,-0.4,1.3,0.9).curveTo(1.7,2.9,1.7,4.7).curveTo(1.4,2.8,0.8,1.1).closePath();
	this.shape_277.setTransform(-28.05,-159.3);

	var maskedShapeInstanceList = [this.shape_219,this.shape_220,this.shape_221,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.instance_30,this.shape_277];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_277},{t:this.instance_30},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219}]},4).to({state:[]},12).wait(70));

	// Layer_11
	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.beginFill("#080808").beginStroke().moveTo(-2.3,2.4).curveTo(-3.3,1.4,-3.3,0).curveTo(-3.3,-1.4,-2.3,-2.3).curveTo(-1.4,-3.3,0,-3.3).curveTo(1.4,-3.3,2.3,-2.3).curveTo(3.3,-1.4,3.3,0).curveTo(3.3,1.4,2.3,2.4).curveTo(1.4,3.3,0,3.3).curveTo(-1.4,3.3,-2.3,2.4).closePath();
	this.shape_278.setTransform(35.5,-205.65);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.beginFill("#080808").beginStroke().moveTo(-2.3,2.3).curveTo(-3.3,1.4,-3.3,-0).curveTo(-3.3,-1.4,-2.3,-2.3).curveTo(-1.4,-3.3,-0,-3.3).curveTo(1.4,-3.3,2.3,-2.3).curveTo(3.3,-1.4,3.3,-0).curveTo(3.3,1.4,2.3,2.3).curveTo(1.4,3.3,-0,3.3).curveTo(-1.4,3.3,-2.3,2.3).closePath();
	this.shape_279.setTransform(-2.55,-201.1);

	this.instance_31 = new lib.Path_2_0_2();
	this.instance_31.setTransform(24.55,-159.3,1,1,0,0,0,10.8,0.7);
	this.instance_31.alpha = 0.5;
	this.instance_31.compositeOperation = "multiply";

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-4.4,0.4).lineTo(-9.8,-3.1).curveTo(-5.3,-0.4,2.7,-0.7).curveTo(6.7,-0.9,9.8,-1.6).lineTo(9.4,-0.2).curveTo(8.3,1.5,5.3,2.7).curveTo(4.5,3.1,3.5,3.1).curveTo(0.5,3.1,-4.4,0.4).closePath();
	this.shape_280.setTransform(16.6338,-91.2468);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-35.3,75.6).curveTo(-35.3,55,-34.3,29.6).curveTo(-32.2,-21.2,-27.1,-45.2).curveTo(-27.2,-54.3,-20.8,-66.2).curveTo(-14.1,-78.5,-8.3,-77.8).curveTo(-1.7,-77,0.1,-78.3).curveTo(1.2,-79,0.8,-81.5).curveTo(0.4,-84.2,1.4,-85.2).curveTo(3.2,-86.9,9.6,-86.7).curveTo(36.4,-85.9,35.2,-43.3).curveTo(34.9,-33,32.7,-26.9).curveTo(30.5,-21.3,24.8,-14.7).lineTo(4.9,86.7).closePath();
	this.shape_281.setTransform(-93.7493,11.3145);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-8.6,18.4).curveTo(-16.2,14.8,-19.1,6.9).curveTo(-22,-0.9,-18.4,-8.6).curveTo(-14.8,-16.2,-6.9,-19.1).curveTo(1,-21.9,8.6,-18.4).curveTo(16.2,-14.8,19,-6.9).curveTo(21.9,1,18.4,8.6).curveTo(14.8,16.2,6.9,19.1).curveTo(3.4,20.4,-0.1,20.4).curveTo(-4.4,20.4,-8.6,18.4).closePath();
	this.shape_282.setTransform(-109.095,90.3924);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.beginFill("#D5A690").beginStroke().moveTo(-4.6,3.1).curveTo(2.3,-0.4,5.6,-10).curveTo(6.6,-13,7.2,-16.2).lineTo(7.6,-18.7).curveTo(9.3,-7,4.3,2.7).curveTo(1.8,7.6,-1,10.1).lineTo(-8,18.7).closePath();
	this.shape_283.setTransform(-66.0327,-6.675);

	this.instance_32 = new lib.Path_0_4();
	this.instance_32.setTransform(-21.2,133.8,1,1,0,0,0,25.8,18.4);
	this.instance_32.alpha = 0.5313;
	this.instance_32.compositeOperation = "multiply";

	this.instance_33 = new lib.Path_1_0_3();
	this.instance_33.setTransform(-26.1,108.3,1,1,0,0,0,23.1,10.3);
	this.instance_33.alpha = 0.5313;
	this.instance_33.compositeOperation = "multiply";

	this.instance_34 = new lib.Path_12();
	this.instance_34.setTransform(-60.85,2,1,1,0,0,0,13.2,46);
	this.instance_34.alpha = 0.5313;
	this.instance_34.compositeOperation = "multiply";

	this.instance_35 = new lib.Path_1_5();
	this.instance_35.setTransform(0.05,57.8,1,1,0,0,0,74.1,126.8);
	this.instance_35.alpha = 0.2109;
	this.instance_35.compositeOperation = "multiply";

	this.instance_36 = new lib.Path_2_3();
	this.instance_36.setTransform(90.75,2.5,1,1,0,0,0,4.1,14.9);
	this.instance_36.alpha = 0.5313;
	this.instance_36.compositeOperation = "multiply";

	this.instance_37 = new lib.Path_3_3();
	this.instance_37.setTransform(85,53.35,1,1,0,0,0,20.1,120.2);
	this.instance_37.alpha = 0.2109;
	this.instance_37.compositeOperation = "multiply";

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.beginFill("#477A8E").beginStroke().moveTo(-53,7.3).curveTo(-75,4.3,-75,0).curveTo(-75,-4.2,-53,-7.3).curveTo(-31.1,-10.3,0,-10.3).curveTo(31.1,-10.3,53.1,-7.3).curveTo(75,-4.2,75,0).curveTo(75,4.3,53.1,7.3).curveTo(31.1,10.3,0,10.3).curveTo(-31,10.3,-53,7.3).closePath();
	this.shape_284.setTransform(21.125,100.025);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.beginFill("#477A8E").beginStroke().moveTo(-86.2,35.3).lineTo(-75,-42.5).lineTo(75.3,-43.3).lineTo(86.2,43.3).closePath();
	this.shape_285.setTransform(20.925,143.475);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.beginFill("#477A8E").beginStroke().moveTo(-65.1,93.7).lineTo(-65,92.8).curveTo(-69.7,69.4,-77.9,34.8).lineTo(-85.1,4.8).curveTo(-82.7,4.3,-78.9,0.9).curveTo(-74.6,-2.9,-70.8,-8.7).curveTo(-60.7,-24.1,-59.3,-45.2).curveTo(-57.8,-67.1,-69.8,-84.7).curveTo(-73.6,-90.1,-78.3,-94.5).lineTo(-82.2,-97.7).curveTo(-72.8,-101.7,-60.8,-105.7).curveTo(-60.9,-105.6,-59.8,-105.1).curveTo(-57.4,-103.9,-54.6,-101.5).curveTo(-44.6,-92.6,-33,-70.9).curveTo(-23.9,-53.7,-12.1,-45.4).curveTo(2.2,-35.3,21.4,-37.1).curveTo(80.4,-42.3,30.2,-112.4).curveTo(40.4,-110.2,49.6,-108.1).lineTo(55.2,-102.6).curveTo(61.8,-95.1,67.2,-85.6).curveTo(84.6,-55.2,83.5,-15.2).curveTo(82.9,5.4,84,51.2).curveTo(84.5,74.1,85.1,93).lineTo(51.2,112.3).closePath().moveTo(-60.8,-105.7).lineTo(-60.8,-105.7).lineTo(-60.8,-105.7).closePath();
	this.shape_286.setTransform(11.075,7.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.beginFill("#D5A690").beginStroke().moveTo(-22.8,42.8).lineTo(-17.5,24).lineTo(-17.7,27.7).curveTo(-17,30.8,-12.1,27.6).curveTo(-9.6,24.1,-7.9,22.1).lineTo(-6.8,20.7).curveTo(6,-9.6,-4.2,-36.5).curveTo(-7.4,-44.9,-12.5,-52).lineTo(-16.9,-57.4).lineTo(-1.2,-47.7).curveTo(10.1,-29.9,11.8,-28.3).curveTo(12.8,-27.3,16.5,-18.5).lineTo(20.9,-7.8).curveTo(21.8,-5.6,22.4,7.1).curveTo(23,19.5,22.7,25.7).curveTo(22.4,30.8,15.7,42.1).curveTo(9.7,52.1,7.7,53.5).curveTo(6.1,54.7,-17.8,57.4).closePath();
	this.shape_287.setTransform(-51.275,-30.825);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.beginFill("#D5A690").beginStroke().moveTo(-5.4,-5.9).curveTo(-4.1,-4.5,-2.2,-6.7).curveTo(1.8,-11,5.4,-29.1).lineTo(-3,29.1).closePath();
	this.shape_288.setTransform(96.525,-13.475);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.4,0.5).curveTo(-1.4,-0.5,-1.6,-1.4).curveTo(-0.7,-1.1,0.2,-0.2).curveTo(1.1,0.6,1.6,1.5).curveTo(0.7,1.4,-0.4,0.5).closePath();
	this.shape_289.setTransform(28.575,-200.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.2,-0.2).lineTo(2.4,-1.8).curveTo(2.2,-1.1,1.6,-0.4).lineTo(0.4,0.7).curveTo(-1.2,1.7,-2.4,1.8).curveTo(-1.7,1,-0.2,-0.2).closePath();
	this.shape_290.setTransform(6.35,-197.85);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.beginFill("#EFC7B0").beginStroke().moveTo(0.4,-1.5).curveTo(1.6,-3.5,2.6,-5).lineTo(2.6,-2.7).lineTo(-2.6,5).curveTo(-2,2.4,0.4,-1.5).closePath();
	this.shape_291.setTransform(12.925,-172.95);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.beginFill("#FFAFAF").beginStroke().moveTo(-1.4,4.9).curveTo(-3.6,4.6,-7.9,2.9).lineTo(-11.8,1.2).lineTo(-7.8,-1.1).curveTo(-3.4,-3.6,-0.8,-4.3).curveTo(2.4,-5,2.9,-4.5).curveTo(3.3,-4.1,3.6,-4.5).curveTo(4.7,-5.7,6.3,-5.3).curveTo(8.1,-4.8,9.6,-3.6).curveTo(11.5,-2.2,11.8,-0.4).curveTo(11.5,0.5,11,1.5).curveTo(10,3.4,8.7,3.9).curveTo(7,4.8,5.6,5.2).curveTo(4.6,5.4,3.2,5.4).curveTo(1.3,5.4,-1.4,4.9).closePath();
	this.shape_292.setTransform(24.475,-159.788);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.beginFill("#080808").beginStroke().moveTo(-6,-1.3).curveTo(-5,-2.3,-3.6,-2.9).curveTo(-2.4,-3.5,-0.8,-3.5).curveTo(1.9,-3.4,4.6,-1.8).curveTo(7.1,-0.2,8.6,1.7).curveTo(5.8,-0,4,-0.8).curveTo(1.4,-2,-0.8,-2).curveTo(-3.1,-2,-5.2,-0.4).curveTo(-6.8,0.8,-8.6,3.5).curveTo(-7.9,0.7,-6,-1.3).closePath();
	this.shape_293.setTransform(36.975,-206.175);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.3).moveTo(-8.7,2.7).curveTo(-4.8,-4.8,2.2,-2.6).curveTo(5.7,-1.6,8.4,1).curveTo(6.5,1.8,3.4,2.4).curveTo(-2.8,3.7,-8.7,2.7).closePath();
	this.shape_294.setTransform(37.1438,-205.4094);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.6,2.7).curveTo(-4.6,-4.8,2.4,-2.6).curveTo(5.8,-1.6,8.5,1).curveTo(6.7,1.8,3.6,2.4).curveTo(0,3.1,-3.4,3.1).curveTo(-6,3.1,-8.6,2.7).closePath();
	this.shape_295.setTransform(36.95,-205.4094);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.beginFill("#080808").beginStroke().moveTo(-6,-0.9).curveTo(-3.8,-3.1,-0.8,-3.7).curveTo(2.3,-4.2,5.1,-2.7).curveTo(7.7,-1.3,9.4,1.1).curveTo(6.7,-0.8,4.6,-1.6).curveTo(1.8,-2.7,-0.5,-2.2).curveTo(-2.8,-1.8,-5.3,-0).curveTo(-7.4,1.4,-9.4,3.8).curveTo(-8.3,1.1,-6,-0.9).closePath();
	this.shape_296.setTransform(-1.15,-201.397);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.3).moveTo(9.6,0.8).curveTo(3.7,-5.9,-3.3,-1.9).curveTo(-5.5,-0.7,-7.5,1.5).lineTo(-9.1,3.4).lineTo(-2.1,3.4).curveTo(5.6,3,9.6,0.8).closePath();
	this.shape_297.setTransform(-1.3841,-201.0226);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.4,3.4).lineTo(-7.8,1.5).curveTo(-5.7,-0.7,-3.6,-1.9).curveTo(3.4,-5.9,9.3,0.8).curveTo(5.3,3,-2.4,3.4).closePath();
	this.shape_298.setTransform(-1.1,-201.0227);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.beginFill("#EFC7B0").beginStroke().moveTo(3.5,9.9).curveTo(0.4,8.7,-1.8,4.6).curveTo(-2.8,2.9,-4.3,-1.8).curveTo(-6.1,-7.7,-5.5,-9.5).curveTo(-5.3,-10.4,-4.4,-10.1).curveTo(-3.9,-10,-3.1,-9.2).curveTo(-1,-6.9,-0.1,-5.6).curveTo(1.6,-3.3,1.9,-1.5).lineTo(2,1.7).curveTo(2,3.4,3.4,4.7).curveTo(4.7,6.1,5.5,8.3).curveTo(6.1,10.2,4.8,10.2).curveTo(4.3,10.2,3.5,9.9).closePath();
	this.shape_299.setTransform(-44.2333,-183.035);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.5,3.1).lineTo(-3.5,2.2).curveTo(-5.6,2.1,-6.5,1.8).curveTo(-8.1,1.3,-8.1,-0.3).curveTo(-8.1,-1.3,-7.4,-2.4).curveTo(-7.7,-1.5,-7.4,-0.7).curveTo(-6.9,0.4,-5.4,0.6).lineTo(-2.7,0.5).curveTo(-2,0.6,-0.2,1).curveTo(1.4,1.5,2.2,1.5).curveTo(2.9,1.4,4.1,0.8).curveTo(5.5,0.2,6.3,-0.6).curveTo(7.4,-1.6,7,-3.5).lineTo(7.8,-2.4).curveTo(8.4,-1,7.7,0.1).curveTo(7.5,0.5,7.1,0.8).lineTo(6.2,1.3).lineTo(4.6,2.7).curveTo(4,3.2,2.4,3.5).lineTo(1.9,3.5).curveTo(0.9,3.5,-0.5,3.1).closePath();
	this.shape_300.setTransform(23.2127,-175.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.beginFill("#080808").beginStroke().moveTo(-0.5,1.9).curveTo(-2.7,1.5,-5.3,0.4).curveTo(-7.5,-0.5,-9.6,-2.3).lineTo(-4.8,-1.1).lineTo(-0.1,-0.1).lineTo(9.6,1.5).curveTo(7.3,2.3,4.6,2.3).lineTo(4.1,2.3).curveTo(1.9,2.3,-0.5,1.9).closePath();
	this.shape_301.setTransform(35.9,-218.6975);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.beginFill("#080808").beginStroke().moveTo(-5.6,2.8).lineTo(0.2,0.3).lineTo(5.8,-2.4).curveTo(9.5,-4.3,11.4,-5.4).curveTo(9.5,-3,6.6,-1.1).curveTo(4.3,0.5,1,2.1).curveTo(-2,3.4,-5,4.3).curveTo(-8.6,5.2,-11.3,5.4).lineTo(-5.6,2.8).closePath();
	this.shape_302.setTransform(-3.85,-213.925);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.beginFill("#080808").beginStroke().moveTo(0.4,2.7).lineTo(-0.9,-2.6).lineTo(-2.6,-10).lineTo(-0.5,-2.7).curveTo(0.3,-0.3,0.9,2.6).lineTo(2.6,10).closePath();
	this.shape_303.setTransform(44.825,-239.725);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.beginFill("#080808").beginStroke().moveTo(0.2,1.4).lineTo(-0.4,-5.4).lineTo(0.3,-1.5).lineTo(0.4,1.4).curveTo(0.4,3.4,0.3,5.4).curveTo(0.3,3.6,0.2,1.4).closePath();
	this.shape_304.setTransform(39.45,-251.05);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.beginFill("#080808").beginStroke().moveTo(-0.4,3).curveTo(1.1,0.8,2.6,-1.7).curveTo(4.5,-5,5.8,-8.8).curveTo(4.8,-4.9,3.1,-1.4).curveTo(1.8,1.1,-0.1,3.3).curveTo(-2.6,6.5,-5.8,8.8).curveTo(-2.9,6.3,-0.4,3).closePath();
	this.shape_305.setTransform(34.15,-251.425);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.beginFill("#080808").beginStroke().moveTo(-1.5,3.7).curveTo(2,1.3,4.2,-0.6).curveTo(8.3,-4.2,10.2,-8.6).curveTo(8.6,-4.1,4.7,-0.2).curveTo(2.3,2.3,-1.1,4.2).curveTo(-4.4,6.1,-10.3,8.6).curveTo(-4.6,5.7,-1.5,3.7).closePath();
	this.shape_306.setTransform(15.1,-245.725);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.beginFill("#080808").beginStroke().moveTo(-14,9.4).curveTo(-9.2,8.1,-4.4,6.5).curveTo(4.7,3.4,8.8,1.3).curveTo(10.5,0.5,13.1,-1.2).curveTo(15.7,-3,17,-4.2).curveTo(17.7,-4.7,18.8,-5.9).lineTo(20.4,-7.9).curveTo(21.8,-9.9,23.9,-11.6).curveTo(22,-9.8,20.8,-7.6).curveTo(20.4,-6.6,19.5,-5.3).curveTo(18.7,-4.1,17.8,-3.3).curveTo(16.1,-1.5,14.1,0.2).curveTo(11.8,2.2,10,3.4).curveTo(4.6,6.9,-3.7,8.7).curveTo(-8.7,9.9,-13.8,10.5).curveTo(-19.4,11.4,-23.8,11.6).curveTo(-19.9,11,-14,9.4).closePath();
	this.shape_307.setTransform(-4.3,-245.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.beginFill("#080808").beginStroke().moveTo(-0.6,2.6).curveTo(-1.6,0.4,-1.9,-1.8).curveTo(-2.4,-5,-2.4,-8.2).curveTo(-2,-4.8,-1.1,-2).lineTo(0.1,2.3).curveTo(1.1,5.5,2.4,8.2).curveTo(0.8,5.7,-0.6,2.6).closePath();
	this.shape_308.setTransform(-34.3023,-191.775);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.beginFill("#080808").beginStroke().moveTo(0.4,11.5).curveTo(0.6,7.4,0.5,4.7).curveTo(0.4,-0.1,0.1,-4.9).curveTo(-0.1,-8,-0.8,-11.6).curveTo(-1.3,-14.7,-2.4,-18.2).curveTo(-0.9,-14.8,0.1,-11.8).curveTo(1,-8.8,1.8,-5.1).curveTo(2.7,-0.3,2.3,4.7).curveTo(2,7.5,1.2,11.6).curveTo(0.7,14.4,-0.6,18.1).curveTo(0.1,14.9,0.4,11.5).closePath();
	this.shape_309.setTransform(-35.7027,-215.55);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.beginFill("#080808").beginStroke().moveTo(1.3,2.7).lineTo(-0.2,-3).curveTo(-1.2,-7.2,-2.8,-10.9).curveTo(-0.7,-7.4,0.9,-3.3).curveTo(2,-0.5,2.3,2.5).curveTo(2.9,6.4,2.7,10.9).curveTo(2.4,6.9,1.3,2.7).closePath();
	this.shape_310.setTransform(-35.2339,-224.375);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-7.5,0.2).curveTo(-5.4,-3.6,-1.1,-3.9).curveTo(3.1,-4.2,6.4,-1.1).curveTo(8,0.5,8.8,2.2).lineTo(-8.8,3.9).closePath();
	this.shape_311.setTransform(36.975,-206.638);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-7.7,0.3).curveTo(-5,-4.1,-0.7,-4.5).curveTo(3.8,-5,7.1,-1.6).curveTo(8.8,0.1,9.5,1.9).lineTo(-9.5,4.6).curveTo(-9,2.5,-7.7,0.3).closePath();
	this.shape_312.setTransform(-1.175,-202.1071);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.beginFill("#FDE4C8").beginStroke().moveTo(14.1,61.4).curveTo(3.1,57.8,-7.3,52.7).curveTo(-21.6,45.8,-25.5,40.1).curveTo(-29.3,34.6,-31.3,29.5).lineTo(-32.6,25.5).curveTo(-35.4,26,-38.9,24.8).curveTo(-46,22.4,-49.5,14.2).curveTo(-53.5,4.9,-53.3,-0.6).curveTo(-53.2,-5.5,-49.6,-6.4).curveTo(-46.6,-7.2,-44.3,-5.2).curveTo(-42.6,-3.7,-40.6,-0).curveTo(-37.8,5.1,-37.1,7.7).curveTo(-37,8.3,-36.6,8.7).lineTo(-35.9,9.2).lineTo(-36.4,7.3).lineTo(-35.7,8.3).lineTo(-34.8,9.3).lineTo(-35.4,7.1).lineTo(-34.3,8.4).curveTo(-33.7,8.9,-31.8,9.6).curveTo(-32.6,8.6,-32.9,6.9).curveTo(-33.7,2.6,-33.8,-2.2).curveTo(-34.1,-8.3,-33,-11).curveTo(-29.7,-19.2,-31.3,-30.8).curveTo(-32.8,-42,-36.8,-45.3).lineTo(-35,-44.5).curveTo(-32.6,-43.6,-29.8,-43.1).curveTo(-20.8,-41.4,-10.6,-44).curveTo(-3.3,-45.9,5.6,-49.3).curveTo(11.8,-51.6,11.6,-51.2).curveTo(10,-49.2,6.4,-46.4).curveTo(4.8,-45.1,2.8,-44).lineTo(1.2,-43.1).curveTo(8.2,-44.7,16.1,-49.4).curveTo(20.1,-51.8,22.6,-53.8).lineTo(16.9,-45.2).curveTo(19.6,-46.2,25.7,-51.8).curveTo(28.8,-54.5,31.4,-57.1).lineTo(26,-47.6).lineTo(28.5,-49.4).curveTo(31.5,-51.8,34.2,-54.7).curveTo(36.8,-57.5,38.7,-60.6).curveTo(39.6,-62.1,40,-63.1).curveTo(41.3,-53.7,40.9,-57.7).lineTo(41.7,-50.2).lineTo(42.9,-56.7).lineTo(43.9,-53.1).lineTo(45.6,-46.6).curveTo(47.6,-37.8,48.1,-34.4).curveTo(49,-29.2,49.2,-22.5).curveTo(49.4,-18.9,50.7,-9.4).curveTo(52.3,1.2,52.5,4.2).lineTo(53.3,11.9).curveTo(53.4,22,49.7,33.6).curveTo(46.5,43.8,43.4,49.9).curveTo(41.3,54,38.5,57.7).curveTo(35.4,61.8,28.1,62.8).curveTo(26.1,63.1,24.1,63.1).curveTo(19.1,63.1,14.1,61.4).closePath();
	this.shape_313.setTransform(-1.2764,-193.7464);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.beginFill("#080808").beginStroke().moveTo(0.4,4).curveTo(0.4,-0.5,0.2,-4).curveTo(-0,-9.3,-1.2,-15.2).curveTo(0.2,-9.9,0.9,-4.1).curveTo(1.4,-0,1.1,4).curveTo(0.7,9.7,-0.6,15.2).curveTo(0.4,9.3,0.4,4).closePath();
	this.shape_314.setTransform(52.21,-245.125);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.beginFill("#080808").beginStroke().moveTo(-9.5,-0.4).curveTo(-7.1,-3.3,-4.5,-5.4).curveTo(-2.2,-7.2,1.3,-9.3).curveTo(10.4,-14.7,19.4,-16.3).curveTo(10.8,-14.2,2,-8.2).curveTo(-1.4,-5.9,-3.6,-4.2).curveTo(-6.2,-2.2,-8.6,0.4).curveTo(-14.9,7.1,-19.4,16.3).curveTo(-15.6,7,-9.5,-0.4).closePath();
	this.shape_315.setTransform(-55.575,-273.625);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.beginFill("#080808").beginStroke().moveTo(-14.4,0.7).curveTo(-10.4,-1.2,-6.7,-2.4).curveTo(-1.2,-4.2,5,-4.7).curveTo(8.8,-5,13.3,-4.9).curveTo(16.7,-4.7,21.5,-4.2).curveTo(17.1,-4.5,13.3,-4.3).curveTo(8.8,-4.2,5.1,-3.6).curveTo(-0.6,-2.8,-6.4,-1.4).curveTo(-10.5,-0.3,-14.2,1.2).curveTo(-17.8,2.7,-21.5,4.9).curveTo(-17.9,2.5,-14.4,0.7).closePath();
	this.shape_316.setTransform(-30.625,-290.2125);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.beginFill("#080808").beginStroke().moveTo(15.6,0.4).curveTo(10.9,-0.4,6.6,-0.7).curveTo(-0.3,-1.2,-6.4,-1.1).curveTo(-10.7,-1.1,-15.5,-0.6).curveTo(-19.2,-0.2,-24.6,0.9).curveTo(-20,-0.3,-15.6,-1.1).curveTo(-10.9,-2,-6.5,-2.3).curveTo(0.1,-2.8,6.7,-1.9).curveTo(11.9,-1.1,15.8,-0.1).curveTo(19.8,0.8,24.6,2.5).curveTo(20,1.2,15.6,0.4).closePath();
	this.shape_317.setTransform(-11.8,-295.5643);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.beginFill("#080808").beginStroke().moveTo(14.6,2.4).curveTo(11,-0.4,7.4,-2).curveTo(2.3,-4.4,-3.8,-6).curveTo(-7.5,-6.9,-12.2,-7.2).curveTo(-16.3,-7.3,-20.6,-6.6).curveTo(-16.3,-7.9,-12.2,-8.3).curveTo(-7.3,-8.6,-3.4,-8.1).curveTo(3.2,-7.3,8.4,-3.9).curveTo(12.1,-1.6,15.4,1.6).curveTo(18.2,4.4,20.7,8.4).curveTo(17.8,4.9,14.6,2.4).closePath();
	this.shape_318.setTransform(14,-290.0721);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.beginFill("#080808").beginStroke().moveTo(6.2,0.9).curveTo(4.6,-0.1,3,-0.7).curveTo(0.7,-1.6,-1.9,-2.2).curveTo(-3.6,-2.6,-5.4,-2.7).curveTo(-7.2,-2.7,-9.1,-2.4).curveTo(-7.4,-2.9,-5.5,-3.2).curveTo(-3.5,-3.3,-1.7,-3.1).curveTo(1,-2.9,3.4,-1.6).curveTo(4.8,-0.8,6.5,0.6).curveTo(7.7,1.6,9.1,3.2).curveTo(7.6,1.8,6.2,0.9).closePath();
	this.shape_319.setTransform(40.725,-276.3321);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.beginFill("#080808").beginStroke().moveTo(5.2,0.3).curveTo(2.7,-2.3,-0.5,-4.7).curveTo(-4.8,-7.9,-10.1,-9.6).curveTo(-4.7,-8.6,0.2,-5.9).curveTo(3.9,-3.8,6.3,-0.6).curveTo(8.1,1.9,9,4.2).curveTo(10,6.9,10.1,9.6).curveTo(9.4,4.6,5.2,0.3).closePath();
	this.shape_320.setTransform(42.475,-270.95);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.beginFill("#080808").beginStroke().moveTo(5.7,6.9).curveTo(4.6,4.1,3.6,2.1).curveTo(2.1,-0.8,-0.1,-4.2).curveTo(-1.6,-6.5,-3.2,-8.3).curveTo(-4.7,-10,-7,-12).curveTo(-4.7,-10.5,-2.7,-8.9).curveTo(-0.5,-6.8,1,-5).curveTo(3.6,-1.9,4.9,1.6).curveTo(5.6,3.6,6.3,6.7).curveTo(6.8,9.1,7,12).curveTo(6.6,9.5,5.7,6.9).closePath();
	this.shape_321.setTransform(31.25,-283.25);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.beginFill("#080808").beginStroke().moveTo(2.3,6).curveTo(-2.5,-1.7,-4.1,-5).curveTo(-6.6,-9.6,-7.9,-13.3).curveTo(-9.3,-17.3,-10.3,-22).curveTo(-9,-17.8,-6.8,-13.7).curveTo(-5.5,-11.1,-2.2,-6.2).curveTo(2.1,0,4.2,5).curveTo(8,13.2,10.3,22).curveTo(6.7,13.4,2.3,6).closePath();
	this.shape_322.setTransform(-46.95,-167.075);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.beginFill("#080808").beginStroke().moveTo(-3.4,10.2).curveTo(-7.9,3.5,-9.9,-4.2).curveTo(-12.6,-15,-11.3,-26).curveTo(-11.5,-15,-7.9,-4.8).curveTo(-5.2,2.4,-1.6,9.2).curveTo(3.8,19.1,11.7,26.1).curveTo(3.2,19.9,-3.4,10.2).closePath();
	this.shape_323.setTransform(-59.25,-203.35);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.beginFill("#080808").beginStroke().moveTo(-3.8,7.2).curveTo(-4.2,-0.7,-2.9,-7.9).curveTo(-1.8,-14.2,-0.5,-18.1).curveTo(1.3,-23.7,3.8,-27.6).curveTo(1.7,-23.9,0.1,-17.9).curveTo(-0.9,-13.9,-1.6,-7.7).curveTo(-2.3,-0.6,-2.4,7.1).curveTo(-2.3,19.4,0.5,27.6).curveTo(-2.9,19.7,-3.8,7.2).closePath();
	this.shape_324.setTransform(-71.9985,-237.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.beginFill("#080808").beginStroke().moveTo(-4.2,2.8).curveTo(-3.5,-1.2,-1.6,-4.7).curveTo(0.4,-8.4,4.7,-13.8).curveTo(1.2,-8,-0.3,-4.1).curveTo(-1.8,-0.5,-2.9,3.1).curveTo(-4.4,8.3,-4.4,13.9).curveTo(-5.1,8,-4.2,2.8).closePath();
	this.shape_325.setTransform(-72.9831,-250.55);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.beginFill("#EFC7B0").beginStroke().moveTo(25.2,33.7).curveTo(18.8,33.2,0.9,24.7).curveTo(-4.2,22.2,-13.4,15.4).curveTo(-23.9,7.5,-28.5,1.6).curveTo(-29.8,-8.2,-32.1,-18.7).lineTo(-34.1,-27.3).lineTo(-33.9,-27.3).curveTo(-27.8,-27.6,-25,-28.8).lineTo(-24.7,-28.9).curveTo(-20.4,-27.6,-16.7,-26.3).lineTo(-16.5,-26.4).lineTo(-16.4,-26.3).lineTo(-8.6,-30).curveTo(-0.4,-33.6,1.4,-33.8).lineTo(4.4,-33.6).lineTo(24.9,-31.7).lineTo(25.1,-31.7).lineTo(25.5,-32.3).curveTo(26.5,-33.1,27.6,-33.3).curveTo(31.9,-32.1,32.7,-4.9).lineTo(33,4.2).curveTo(32.7,13.3,32.9,18.1).curveTo(33.1,24.4,34.1,28.2).curveTo(31.4,33.8,26.1,33.8).lineTo(25.2,33.7).closePath();
	this.shape_326.setTransform(-5.825,-151.0273);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-18.3,49.6).lineTo(-40,26.7).curveTo(-24.6,20.6,-27.8,-16.3).curveTo(-28.8,-27.8,-31.6,-41).lineTo(-34.1,-52).lineTo(-28.9,-52.5).curveTo(-23.6,-53.3,-23.1,-55).curveTo(-22.7,-56.7,-19.5,-54).curveTo(-17.9,-52.6,-16.4,-51).lineTo(-8.5,-54.6).curveTo(-0.2,-58.3,1.4,-58.4).curveTo(4.1,-58.5,25.1,-56.4).lineTo(26.1,-57.6).curveTo(27.3,-58.6,28.4,-57.4).curveTo(32,-53.6,32.7,-29.6).curveTo(33.6,-0.3,36.9,13.2).curveTo(38.5,20,40,20.9).lineTo(24,45.8).curveTo(17,57.1,3.8,58.3).lineTo(1,58.4).curveTo(-10.4,58.4,-18.3,49.6).closePath();
	this.shape_327.setTransform(-5.825,-126.3871);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.beginFill("#080808").beginStroke().moveTo(-5,81.8).curveTo(-15.9,77.5,-17.2,73.3).curveTo(-18.1,70.7,-33.2,44.7).curveTo(-49.8,16.3,-56.1,2.4).curveTo(-63.1,-13.1,-62.1,-29.7).curveTo(-61.8,-34.8,-60.7,-39.5).lineTo(-59.7,-43.2).lineTo(-65.1,-34.5).curveTo(-59.7,-58.6,-39.2,-71.8).curveTo(-29.2,-78.2,-20.3,-80).lineTo(-32.6,-77.9).lineTo(-29.8,-79.3).curveTo(-26.1,-80.9,-21.4,-82.2).curveTo(-6.2,-86.2,13.4,-84.9).curveTo(33.1,-83.6,43,-75.6).curveTo(47.9,-71.6,48.9,-67.9).lineTo(50.4,-67.3).curveTo(52.2,-66.6,54,-65.3).curveTo(59.8,-61.1,63.1,-53.4).curveTo(66.4,-45.8,64.2,-23).curveTo(63.1,-11.6,61.3,-1.7).lineTo(5.5,85.2).curveTo(0.4,83.9,-5,81.8).closePath();
	this.shape_328.setTransform(-12.535,-211.3844);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.beginFill("#080808").beginStroke().moveTo(0.8,1.1).lineTo(-0.1,-1.3).curveTo(-0.7,-3.1,-1.7,-4.7).curveTo(-0.7,-3.6,0.4,-1.5).curveTo(1,-0.4,1.3,0.9).curveTo(1.7,2.9,1.7,4.7).curveTo(1.4,2.8,0.8,1.1).closePath();
	this.shape_329.setTransform(-28.05,-160.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-5.7,76.2).curveTo(-12.6,71.4,-13.3,67.9).curveTo(-13.5,66.9,-12.4,54.5).curveTo(-10.6,36.3,-9.9,25.8).curveTo(-6.5,-19,-9.6,-42.8).curveTo(-11.7,-58.7,-16.6,-69).curveTo(-20.3,-76.8,-25.3,-80.9).lineTo(-19.3,-79.4).curveTo(11,-77.8,21.1,-52.9).curveTo(26.2,-40.5,25.2,-28.4).curveTo(25.6,-23.7,21.4,-12.3).curveTo(13.9,7.6,12.6,11.8).curveTo(1.4,48.1,11.3,80.7).curveTo(9.8,80.9,8.2,80.9).curveTo(1.2,80.9,-5.7,76.2).closePath();
	this.shape_330.setTransform(79.3326,-21.406);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-4.4,0.4).lineTo(-9.8,-3.1).curveTo(-5.3,-0.4,2.7,-0.7).curveTo(6.7,-0.9,9.8,-1.6).lineTo(9.4,-0.2).curveTo(8.3,1.5,5.3,2.7).curveTo(4.5,3.1,3.5,3.1).curveTo(0.5,3.1,-4.4,0.4).closePath();
	this.shape_331.setTransform(16.6338,-91.2468);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.beginFill("#D5A690").beginStroke().moveTo(-16.4,56.2).curveTo(-36,55.1,-47.2,40).curveTo(-50.7,35.3,-52.9,29.8).lineTo(-54.4,25.2).curveTo(-55.3,9.9,-55.6,-4.6).curveTo(-56.2,-33.5,-53.1,-29.1).curveTo(-51.9,-27.5,-47,-18.3).curveTo(-41.3,-8.3,-34.7,-1.5).curveTo(-14,20.2,16.4,14.6).curveTo(45.8,9.3,34.9,-24.1).curveTo(31.5,-34.6,24.4,-46.6).lineTo(18.1,-56.5).lineTo(30.8,-53.6).lineTo(35.6,-47.8).curveTo(40.7,-41.6,41.7,-39.5).lineTo(49.5,-25).curveTo(55.8,-12.6,55.7,-10.3).lineTo(54.5,12.9).curveTo(52.7,34.6,48.6,40.8).curveTo(43.6,48.4,25.4,52.9).curveTo(10.9,56.5,-6.1,56.5).curveTo(-11.1,56.5,-16.4,56.2).closePath();
	this.shape_332.setTransform(23.1603,-48.6718);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-26.1,29.5).curveTo(-36.3,20.4,-36.3,-1.2).curveTo(-36.3,-17.4,-26.1,-27.3).curveTo(-16.2,-37,-0.6,-37).curveTo(14.7,-37,25.5,-26.1).curveTo(36.3,-15.3,36.3,0).curveTo(36.3,15.3,25.5,26.2).curveTo(14.7,37,-0.6,37).curveTo(-17.7,37,-26.1,29.5).closePath();
	this.shape_333.setTransform(-85.725,-45.825);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-91.9,-66.7).curveTo(-90.9,-67.1,-69.6,-74.7).curveTo(-44.4,-83.6,-29.2,-89.4).curveTo(-19.9,-92.9,-15.8,-94.2).curveTo(-8.5,-96.6,-3.6,-97.1).curveTo(5.9,-98.3,18.2,-96.9).curveTo(25.5,-96,40.4,-93.2).curveTo(48.2,-91.7,56.2,-89.7).curveTo(64.2,-87.7,72.1,-86.2).curveTo(72.8,-86.1,79.2,-83.4).lineTo(85.3,-80.8).lineTo(84.2,-77.3).curveTo(82.9,-72.9,82.1,-67.9).curveTo(79.7,-51.8,83.7,-35.8).curveTo(87.9,-19.2,90.3,-16.7).lineTo(90.6,-16.5).lineTo(38.5,29.4).lineTo(-45.2,97.7).closePath().moveTo(90.6,-16.5).lineTo(91.9,-17.6).curveTo(91.7,-16.3,91.1,-16.3).curveTo(90.9,-16.3,90.6,-16.5).closePath().moveTo(90.6,-16.5).lineTo(90.6,-16.5).closePath();
	this.shape_334.setTransform(-7.575,-13.7093);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.beginFill("#477A8E").beginStroke().moveTo(-2.3,-0.2).lineTo(2.2,0).curveTo(2,0.2,1.2,0.2).curveTo(0.1,0.2,-2.3,-0.2).closePath();
	this.shape_335.setTransform(-44.75,21.9491);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.beginFill("#E2B19F").beginStroke().moveTo(1.9,-1).lineTo(1.2,0.1).lineTo(-2,1).closePath();
	this.shape_336.setTransform(156.8,219.825);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.beginFill("#E2B19F").beginStroke().moveTo(1.6,-0.5).curveTo(1.4,-2.6,0.2,-5.4).curveTo(-0.2,-6.4,-1,-7.7).lineTo(-2.4,-10).lineTo(-0.7,-7.9).curveTo(0.1,-6.8,0.7,-5.7).curveTo(2.1,-3.1,2.3,-0.6).curveTo(2.4,0.7,2.2,2.1).lineTo(2,4.8).curveTo(1.6,7.7,1,10).closePath();
	this.shape_337.setTransform(160.1563,194.875);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.beginFill().beginStroke("#E2B19F").setStrokeStyle(0.7).moveTo(-0.1,-2).lineTo(0.1,2);
	this.shape_338.setTransform(175.05,219.95);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.beginFill().beginStroke("#E2B19F").setStrokeStyle(0.7).moveTo(-0.1,-3).lineTo(0.1,3);
	this.shape_339.setTransform(169.25,221.85);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.beginFill("#E2B19F").beginStroke().moveTo(-5.6,0.1).curveTo(-3.4,-0.3,-0,-0.4).curveTo(3.7,-0.4,5.6,-0.1).curveTo(3.4,0.3,0,0.4).curveTo(-3.7,0.4,-5.6,0.1).closePath();
	this.shape_340.setTransform(175.175,217.925);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.beginFill("#E2B19F").beginStroke().moveTo(-1.2,2.8).curveTo(-3.7,1.8,-5.1,0.3).curveTo(-5.7,-0.2,-5.9,-0.6).lineTo(-6.7,-1.4).lineTo(-7.9,-3.4).lineTo(-5.6,-0.9).lineTo(-4.7,-0.1).lineTo(-2.9,1.1).lineTo(-1.9,1.7).lineTo(-0.9,2.1).curveTo(0.8,2.8,3.4,2.8).lineTo(4.6,2.7).lineTo(5.6,2.5).curveTo(6.6,2.4,7.9,2).curveTo(5.8,3.1,3.5,3.3).lineTo(2.3,3.4).curveTo(0.4,3.4,-1.2,2.8).closePath();
	this.shape_341.setTransform(175.75,192.6048);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.beginFill("#E2B19F").beginStroke().moveTo(-0.2,0.7).curveTo(-2.5,0.4,-3.9,-0.8).curveTo(-2.2,-0.3,-0,0).lineTo(3.9,0.5).curveTo(2.7,0.8,1.4,0.8).lineTo(-0.2,0.7).closePath();
	this.shape_342.setTransform(184.875,194.1813);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.beginFill("#E2B19F").beginStroke().moveTo(-6.6,6).curveTo(-9.7,5.7,-13.2,4.9).lineTo(-13.5,4.8).lineTo(-9.2,1.9).lineTo(-12.9,4.7).curveTo(-8.7,5.4,-6.6,5.6).curveTo(-4.2,5.7,-3.3,5.4).lineTo(-0.1,4.5).lineTo(12.6,1).curveTo(12.9,-0.2,12.7,-1.2).curveTo(12.6,-2,12.4,-2.4).lineTo(11.7,-3.4).curveTo(10.9,-4.5,9.9,-5.1).curveTo(8.8,-5.6,7.6,-5.6).curveTo(6.8,-5.6,5.1,-5.2).lineTo(-2.5,-3.4).lineTo(-2.5,-3.4).lineTo(-6.5,-0.2).lineTo(-2.6,-3.6).lineTo(-2.6,-3.6).lineTo(5,-5.7).curveTo(7,-6.2,7.6,-6.2).curveTo(9.1,-6.3,10.2,-5.6).curveTo(11.4,-5,12.3,-3.8).lineTo(13,-2.7).curveTo(13.3,-2.2,13.4,-1.3).curveTo(13.6,-0.1,13.2,1.4).lineTo(13.2,1.6).lineTo(13,1.6).lineTo(0,5.1).lineTo(-3.2,5.9).curveTo(-4.1,6.2,-4.9,6.2).closePath();
	this.shape_343.setTransform(193.7225,227.6683);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.beginFill("#E2B19F").beginStroke().moveTo(-5.8,9.5).curveTo(-8,9.1,-11.5,8).lineTo(-11.8,7.9).lineTo(-11.5,7.8).lineTo(-7,5.9).lineTo(-11.2,7.9).lineTo(-5.8,9.1).lineTo(-5.1,9.1).lineTo(-4.6,8.8).lineTo(8,-1.1).curveTo(9.7,-2.6,10.1,-3.1).curveTo(11.2,-4.4,11.2,-5.5).curveTo(11.2,-6.5,9.8,-7.6).curveTo(8.6,-8.6,7.3,-8.8).curveTo(6.1,-9.1,4.6,-8.6).curveTo(3.8,-8.3,2.2,-7.2).lineTo(-2.6,-3.8).lineTo(-2.6,-3.7).lineTo(-2.7,-3.7).curveTo(-4,-3.9,-5.7,-3.7).curveTo(-7.2,-3.4,-8.5,-2.8).curveTo(-7.2,-3.4,-5.7,-3.8).curveTo(-4.1,-4.2,-2.8,-4.1).lineTo(1.9,-7.6).curveTo(3.8,-8.9,4.4,-9.1).curveTo(6,-9.7,7.5,-9.4).curveTo(8.9,-9.1,10.2,-8.1).lineTo(11.3,-7).curveTo(11.8,-6.3,11.8,-5.5).curveTo(11.9,-4.1,10.6,-2.6).curveTo(10,-1.8,8.5,-0.6).lineTo(-4.3,9.2).curveTo(-4.7,9.5,-5,9.5).closePath();
	this.shape_344.setTransform(182.976,225.025);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.beginFill("#E2B19F").beginStroke().moveTo(-8,6.6).lineTo(-9.4,5.7).lineTo(-11.9,3.9).lineTo(-12,3.8).lineTo(-11.9,3.7).lineTo(-9.1,-0.1).lineTo(-11.6,3.7).lineTo(-7.8,6.2).curveTo(-6.8,6.6,-6.5,6.6).lineTo(-3.6,5.7).lineTo(-0.7,4.6).lineTo(7.8,0.8).curveTo(8.7,0.4,9.1,0.1).curveTo(9.6,-0.2,10.2,-0.8).curveTo(11.5,-2,11.2,-3.2).curveTo(11.1,-3.7,10.5,-4.4).curveTo(10.2,-4.8,9.4,-5.4).curveTo(7.2,-7.1,3.8,-6.1).curveTo(2.8,-5.8,1,-4.9).lineTo(-7.5,-0.9).lineTo(0.7,-5.3).curveTo(2.5,-6.2,3.6,-6.6).curveTo(5.3,-7.1,6.8,-7).curveTo(8.5,-6.9,9.8,-6).lineTo(11,-4.9).curveTo(11.7,-4.1,11.9,-3.4).curveTo(12.1,-2.5,11.7,-1.7).curveTo(11.4,-1,10.7,-0.3).curveTo(10.4,0.1,9.5,0.7).lineTo(8.8,1.2).lineTo(-0.5,5.2).lineTo(-3.4,6.3).lineTo(-6.4,7.1).curveTo(-6.9,7.1,-8,6.6).closePath();
	this.shape_345.setTransform(172.8196,227.7477);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.beginFill("#E2B19F").beginStroke().moveTo(-4,9).curveTo(-5.2,8.3,-6.6,6.4).curveTo(-7.1,5.6,-7.5,4.8).lineTo(-7.9,3).curveTo(-8.1,1.4,-8.2,-0.6).lineTo(-7.7,2.9).lineTo(-7.2,4.6).curveTo(-6.9,5.3,-6.2,6.1).curveTo(-5.1,7.8,-3.8,8.6).lineTo(-3,8.8).lineTo(-2.2,8.7).curveTo(-1.2,8.5,-0.6,8.2).lineTo(-0.6,8.3).lineTo(-0.5,8.2).lineTo(-0.6,8.2).lineTo(6.6,-2.1).curveTo(7.8,-4.3,7.4,-6).curveTo(7.2,-6.9,6.4,-7.5).curveTo(5.7,-8.1,4.6,-8.5).curveTo(3.6,-8.9,2.7,-8.8).curveTo(1.7,-8.6,0.8,-8).curveTo(-0.4,-6.9,-2,-4.9).lineTo(-4.5,-1.4).lineTo(-2.2,-5).curveTo(-0.6,-7.3,0.6,-8.3).curveTo(1.5,-9.1,2.6,-9.3).curveTo(3.7,-9.5,4.8,-9.1).curveTo(6,-8.6,6.8,-8).curveTo(7.8,-7.3,8.1,-6.1).curveTo(8.5,-4.2,7.2,-1.8).lineTo(-0.1,8.7).lineTo(-0.2,8.8).curveTo(-0.9,9.1,-2.1,9.3).lineTo(-3,9.4).curveTo(-3.6,9.3,-4,9).closePath();
	this.shape_346.setTransform(161.4079,222.9917);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-10.6,30.9).curveTo(-11.4,30.7,-13.7,29.2).lineTo(-15.9,27.8).curveTo(-16.4,28.3,-17.3,28.5).curveTo(-18.9,28.9,-20.2,27.5).curveTo(-21.5,26.1,-22,25.4).curveTo(-22.9,24.2,-23.2,22.9).lineTo(-23.6,20).lineTo(-23.8,18.3).lineTo(-30.5,-16.1).curveTo(-30.6,-18.5,-28.9,-21.1).curveTo(-25.5,-26.3,-16.5,-27.1).lineTo(-12.1,-29.3).curveTo(-7.1,-31.3,-4.2,-30.8).lineTo(4.6,-30.1).curveTo(13.9,-28.6,16.3,-24).curveTo(18.3,-20,20.5,-14.4).curveTo(22.4,-9.7,23,-8.9).curveTo(24.2,-6.9,30.3,0.3).lineTo(30.5,0.9).curveTo(30.5,1.7,29.6,2.6).curveTo(28.3,3.8,26.7,4.3).curveTo(24.8,4.9,23.3,4.1).lineTo(19.5,2).curveTo(17.2,0.5,16.5,-0.9).curveTo(15.9,-2.3,13.8,-5.8).lineTo(11.9,-9).lineTo(6.7,-9.1).lineTo(7.5,14.4).lineTo(10.6,12.6).curveTo(14.4,11.5,17.4,14.8).lineTo(17.5,16.5).curveTo(17,18.6,14.3,20.5).lineTo(19.7,19.1).curveTo(25.2,17.8,26.2,18.3).curveTo(28.1,19.3,28.9,20.3).curveTo(30.3,22.2,29.7,25.2).curveTo(13.2,29.9,12.1,29.9).curveTo(11.4,29.9,7.4,29.3).lineTo(3.6,28.7).curveTo(2,30.8,1,30.6).lineTo(-5.2,29.1).curveTo(-9,30.9,-10.4,30.9).lineTo(-10.6,30.9).closePath();
	this.shape_347.setTransform(176.9222,203.7261);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.beginFill("#FDE4C8").beginStroke().moveTo(2.8,36.3).curveTo(-14.7,12.8,-19.2,4.1).curveTo(-23.9,-4.9,-31.7,-25.8).curveTo(-40,-47.8,-40.1,-52.9).curveTo(-40.1,-57.4,-25,-49.5).curveTo(-17.3,-45.6,-9.8,-40.7).lineTo(-0.1,-57.9).lineTo(6.9,-45.7).curveTo(14.8,-30.1,19.5,-12.6).curveTo(26.6,13.3,30.5,25.9).curveTo(37.3,47.7,40.1,50).lineTo(19.4,57.9).curveTo(11.5,48,2.8,36.3).closePath();
	this.shape_348.setTransform(121.1499,128.025);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.beginFill("#D5A690").beginStroke().moveTo(-5.5,0.1).curveTo(-3.4,-1.2,-0.9,-2.2).curveTo(1.4,-3,4.1,-3.4).curveTo(6.8,-3.9,9.2,-3.6).lineTo(-4.8,1.5).curveTo(-6.7,2.4,-9.2,3.8).curveTo(-8,1.9,-5.5,0.1).closePath();
	this.shape_349.setTransform(107.725,73.7438);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-6.6,19.2).curveTo(-14.5,16.5,-18.2,9).curveTo(-21.9,1.4,-19.2,-6.6).curveTo(-16.5,-14.5,-8.9,-18.2).curveTo(-1.4,-21.9,6.6,-19.2).curveTo(14.5,-16.5,18.2,-8.9).curveTo(21.9,-1.4,19.2,6.6).curveTo(16.5,14.5,9,18.2).curveTo(4.6,20.3,0.1,20.3).curveTo(-3.2,20.3,-6.6,19.2).closePath();
	this.shape_350.setTransform(101.8833,76.55);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-35.6,-14.6).curveTo(-40.1,-19.8,-39.7,-32.6).curveTo(-38.4,-47.7,-38.6,-54.8).curveTo(-39,-73.1,-32.1,-78.6).curveTo(-27,-82.7,-10.7,-83).lineTo(23.8,-48.9).curveTo(30.1,-26.2,35.5,23.4).curveTo(38.3,48.2,39.8,68.5).lineTo(1.7,83).closePath();
	this.shape_351.setTransform(80.8337,0.225);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.beginFill("#477A8E").beginStroke().moveTo(-46.4,9.9).curveTo(-65.7,5.8,-65.7,-0).curveTo(-65.7,-5.8,-46.4,-9.9).curveTo(-27.2,-14,0,-14).curveTo(27.2,-14,46.4,-9.9).curveTo(65.7,-5.8,65.7,-0).curveTo(65.7,5.8,46.4,9.9).curveTo(27.2,14,0,14).curveTo(-27.2,14,-46.4,9.9).closePath();
	this.shape_352.setTransform(15.725,91.475);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.beginFill("#477A8E").beginStroke().moveTo(0,89.6).curveTo(-29.4,90.7,-52.4,87.2).curveTo(-84.1,82.5,-87.6,70.4).curveTo(-92,54.8,-80,-9.9).curveTo(-76.2,-30.1,-71.3,-52.9).lineTo(-63.5,-87.5).lineTo(-16.7,-88.9).lineTo(-16.7,-89.9).lineTo(0,-89.4).lineTo(16.7,-89.9).lineTo(16.7,-88.9).lineTo(63.5,-87.5).lineTo(71.3,-52.9).curveTo(76.3,-30.2,80,-9.9).curveTo(92,54.8,87.6,70.4).curveTo(84.1,82.5,52.4,87.2).curveTo(34.8,89.9,13.4,89.9).curveTo(6.9,89.9,0,89.6).closePath();
	this.shape_353.setTransform(18.3768,165.8225);

	var maskedShapeInstanceList = [this.shape_278,this.shape_279,this.instance_31,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331,this.shape_332,this.shape_333,this.shape_334,this.shape_335,this.shape_336,this.shape_337,this.shape_338,this.shape_339,this.shape_340,this.shape_341,this.shape_342,this.shape_343,this.shape_344,this.shape_345,this.shape_346,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.shape_351,this.shape_352,this.shape_353];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.instance_31},{t:this.shape_279},{t:this.shape_278}]},2).to({state:[]},2).wait(82));

	// Table
	this.instance_38 = new lib.Group_1();
	this.instance_38.setTransform(272.55,207.7,1,1,0,0,0,283.8,1);
	this.instance_38.alpha = 0.6094;
	this.instance_38.compositeOperation = "multiply";

	this.instance_39 = new lib.Group_1_0();
	this.instance_39.setTransform(370.6,290,1,1,0,0,0,207.5,2.1);
	this.instance_39.alpha = 0.5117;
	this.instance_39.compositeOperation = "multiply";

	this.instance_40 = new lib.Group_2();
	this.instance_40.setTransform(-230.85,290,1,1,0,0,0,343.2,2.1);
	this.instance_40.alpha = 0.5117;
	this.instance_40.compositeOperation = "multiply";

	this.instance_41 = new lib.Group_3();
	this.instance_41.setTransform(-340.95,207.7,1,1,0,0,0,217.6,1);
	this.instance_41.alpha = 0.6094;
	this.instance_41.compositeOperation = "multiply";

	this.instance_42 = new lib.Group_1_1();
	this.instance_42.setTransform(2.1,237.55,1,1,0,0,0,576,67.8);
	this.instance_42.alpha = 0.25;
	this.instance_42.compositeOperation = "multiply";

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.beginFill("#CAB285").beginStroke().moveTo(-529.5,-9).lineTo(538.6,-9).lineTo(542.3,-3).lineTo(-526,-3).lineTo(-542.3,9).closePath();
	this.shape_354.setTransform(-2.05,178.725);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.beginFill("#BEA36F").beginStroke().moveTo(-576,67.7).lineTo(-576,-8.4).lineTo(-533.7,-67.7).lineTo(534.4,-67.7).lineTo(576,-1.4).lineTo(576,67.7).closePath();
	this.shape_355.setTransform(2.1,237.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_355},{t:this.shape_354},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38}]}).wait(86));

	// Layer_11
	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.beginFill("#080808").beginStroke().moveTo(-2.3,2.4).curveTo(-3.3,1.4,-3.3,0).curveTo(-3.3,-1.4,-2.3,-2.3).curveTo(-1.4,-3.3,0,-3.3).curveTo(1.4,-3.3,2.3,-2.3).curveTo(3.3,-1.4,3.3,0).curveTo(3.3,1.4,2.3,2.4).curveTo(1.4,3.3,0,3.3).curveTo(-1.4,3.3,-2.3,2.4).closePath();
	this.shape_356.setTransform(35.5,-205.65);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.beginFill("#080808").beginStroke().moveTo(-2.3,2.3).curveTo(-3.3,1.4,-3.3,-0).curveTo(-3.3,-1.4,-2.3,-2.3).curveTo(-1.4,-3.3,-0,-3.3).curveTo(1.4,-3.3,2.3,-2.3).curveTo(3.3,-1.4,3.3,-0).curveTo(3.3,1.4,2.3,2.3).curveTo(1.4,3.3,-0,3.3).curveTo(-1.4,3.3,-2.3,2.3).closePath();
	this.shape_357.setTransform(-2.55,-201.1);

	this.instance_43 = new lib.Path_2_0_2();
	this.instance_43.setTransform(24.55,-159.3,1,1,0,0,0,10.8,0.7);
	this.instance_43.alpha = 0.5;
	this.instance_43.compositeOperation = "multiply";

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-4.4,0.4).lineTo(-9.8,-3.1).curveTo(-5.3,-0.4,2.7,-0.7).curveTo(6.7,-0.9,9.8,-1.6).lineTo(9.4,-0.2).curveTo(8.3,1.5,5.3,2.7).curveTo(4.5,3.1,3.5,3.1).curveTo(0.5,3.1,-4.4,0.4).closePath();
	this.shape_358.setTransform(16.6338,-91.2468);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-35.3,75.6).curveTo(-35.3,55,-34.3,29.6).curveTo(-32.2,-21.2,-27.1,-45.2).curveTo(-27.2,-54.3,-20.8,-66.2).curveTo(-14.1,-78.5,-8.3,-77.8).curveTo(-1.7,-77,0.1,-78.3).curveTo(1.2,-79,0.8,-81.5).curveTo(0.4,-84.2,1.4,-85.2).curveTo(3.2,-86.9,9.6,-86.7).curveTo(36.4,-85.9,35.2,-43.3).curveTo(34.9,-33,32.7,-26.9).curveTo(30.5,-21.3,24.8,-14.7).lineTo(4.9,86.7).closePath();
	this.shape_359.setTransform(-97.3805,11.4341,1,1,3.1962);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-8.6,18.4).curveTo(-16.2,14.8,-19.1,6.9).curveTo(-22,-0.9,-18.4,-8.6).curveTo(-14.8,-16.2,-6.9,-19.1).curveTo(1,-21.9,8.6,-18.4).curveTo(16.2,-14.8,19,-6.9).curveTo(21.9,1,18.4,8.6).curveTo(14.8,16.2,6.9,19.1).curveTo(3.4,20.4,-0.1,20.4).curveTo(-4.4,20.4,-8.6,18.4).closePath();
	this.shape_360.setTransform(-117.1113,89.5333,1,1,3.1962);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.beginFill("#D5A690").beginStroke().moveTo(-4.6,3.1).curveTo(2.3,-0.4,5.6,-10).curveTo(6.6,-13,7.2,-16.2).lineTo(7.6,-18.7).curveTo(9.3,-7,4.3,2.7).curveTo(1.8,7.6,-1,10.1).lineTo(-8,18.7).closePath();
	this.shape_361.setTransform(-66.0327,-6.675);

	this.instance_44 = new lib.Path_0_4();
	this.instance_44.setTransform(-21.2,133.8,1,1,0,0,0,25.8,18.4);
	this.instance_44.alpha = 0.5313;
	this.instance_44.compositeOperation = "multiply";

	this.instance_45 = new lib.Path_1_0_3();
	this.instance_45.setTransform(-26.1,108.3,1,1,0,0,0,23.1,10.3);
	this.instance_45.alpha = 0.5313;
	this.instance_45.compositeOperation = "multiply";

	this.instance_46 = new lib.Path_12();
	this.instance_46.setTransform(-60.85,2,1,1,0,0,0,13.2,46);
	this.instance_46.alpha = 0.5313;
	this.instance_46.compositeOperation = "multiply";

	this.instance_47 = new lib.Path_1_5();
	this.instance_47.setTransform(0.05,57.8,1,1,0,0,0,74.1,126.8);
	this.instance_47.alpha = 0.2109;
	this.instance_47.compositeOperation = "multiply";

	this.instance_48 = new lib.Path_2_3();
	this.instance_48.setTransform(90.75,2.5,1,1,0,0,0,4.1,14.9);
	this.instance_48.alpha = 0.5313;
	this.instance_48.compositeOperation = "multiply";

	this.instance_49 = new lib.Path_3_3();
	this.instance_49.setTransform(85,53.35,1,1,0,0,0,20.1,120.2);
	this.instance_49.alpha = 0.2109;
	this.instance_49.compositeOperation = "multiply";

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.beginFill("#477A8E").beginStroke().moveTo(-53,7.3).curveTo(-75,4.3,-75,0).curveTo(-75,-4.2,-53,-7.3).curveTo(-31.1,-10.3,0,-10.3).curveTo(31.1,-10.3,53.1,-7.3).curveTo(75,-4.2,75,0).curveTo(75,4.3,53.1,7.3).curveTo(31.1,10.3,0,10.3).curveTo(-31,10.3,-53,7.3).closePath();
	this.shape_362.setTransform(21.125,100.025);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.beginFill("#477A8E").beginStroke().moveTo(-86.2,35.3).lineTo(-75,-42.5).lineTo(75.3,-43.3).lineTo(86.2,43.3).closePath();
	this.shape_363.setTransform(20.925,143.475);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.beginFill("#477A8E").beginStroke().moveTo(-65.1,93.7).lineTo(-65,92.8).curveTo(-69.7,69.4,-77.9,34.8).lineTo(-85.1,4.8).curveTo(-82.7,4.3,-78.9,0.9).curveTo(-74.6,-2.9,-70.8,-8.7).curveTo(-60.7,-24.1,-59.3,-45.2).curveTo(-57.8,-67.1,-69.8,-84.7).curveTo(-73.6,-90.1,-78.3,-94.5).lineTo(-82.2,-97.7).curveTo(-72.8,-101.7,-60.8,-105.7).curveTo(-60.9,-105.6,-59.8,-105.1).curveTo(-57.4,-103.9,-54.6,-101.5).curveTo(-44.6,-92.6,-33,-70.9).curveTo(-23.9,-53.7,-12.1,-45.4).curveTo(2.2,-35.3,21.4,-37.1).curveTo(80.4,-42.3,30.2,-112.4).curveTo(40.4,-110.2,49.6,-108.1).lineTo(55.2,-102.6).curveTo(61.8,-95.1,67.2,-85.6).curveTo(84.6,-55.2,83.5,-15.2).curveTo(82.9,5.4,84,51.2).curveTo(84.5,74.1,85.1,93).lineTo(51.2,112.3).closePath().moveTo(-60.8,-105.7).lineTo(-60.8,-105.7).lineTo(-60.8,-105.7).closePath();
	this.shape_364.setTransform(11.075,7.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.beginFill("#D5A690").beginStroke().moveTo(-22.8,42.8).lineTo(-17.5,24).lineTo(-17.7,27.7).curveTo(-17,30.8,-12.1,27.6).curveTo(-9.6,24.1,-7.9,22.1).lineTo(-6.8,20.7).curveTo(6,-9.6,-4.2,-36.5).curveTo(-7.4,-44.9,-12.5,-52).lineTo(-16.9,-57.4).lineTo(-1.2,-47.7).curveTo(10.1,-29.9,11.8,-28.3).curveTo(12.8,-27.3,16.5,-18.5).lineTo(20.9,-7.8).curveTo(21.8,-5.6,22.4,7.1).curveTo(23,19.5,22.7,25.7).curveTo(22.4,30.8,15.7,42.1).curveTo(9.7,52.1,7.7,53.5).curveTo(6.1,54.7,-17.8,57.4).closePath();
	this.shape_365.setTransform(-51.275,-30.825);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.beginFill("#D5A690").beginStroke().moveTo(-5.4,-5.9).curveTo(-4.1,-4.5,-2.2,-6.7).curveTo(1.8,-11,5.4,-29.1).lineTo(-3,29.1).closePath();
	this.shape_366.setTransform(96.525,-13.475);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.4,0.5).curveTo(-1.4,-0.5,-1.6,-1.4).curveTo(-0.7,-1.1,0.2,-0.2).curveTo(1.1,0.6,1.6,1.5).curveTo(0.7,1.4,-0.4,0.5).closePath();
	this.shape_367.setTransform(28.575,-200.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.2,-0.2).lineTo(2.4,-1.8).curveTo(2.2,-1.1,1.6,-0.4).lineTo(0.4,0.7).curveTo(-1.2,1.7,-2.4,1.8).curveTo(-1.7,1,-0.2,-0.2).closePath();
	this.shape_368.setTransform(6.35,-197.85);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.beginFill("#EFC7B0").beginStroke().moveTo(0.4,-1.5).curveTo(1.6,-3.5,2.6,-5).lineTo(2.6,-2.7).lineTo(-2.6,5).curveTo(-2,2.4,0.4,-1.5).closePath();
	this.shape_369.setTransform(12.925,-172.95);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.beginFill("#FFAFAF").beginStroke().moveTo(-1.4,4.9).curveTo(-3.6,4.6,-7.9,2.9).lineTo(-11.8,1.2).lineTo(-7.8,-1.1).curveTo(-3.4,-3.6,-0.8,-4.3).curveTo(2.4,-5,2.9,-4.5).curveTo(3.3,-4.1,3.6,-4.5).curveTo(4.7,-5.7,6.3,-5.3).curveTo(8.1,-4.8,9.6,-3.6).curveTo(11.5,-2.2,11.8,-0.4).curveTo(11.5,0.5,11,1.5).curveTo(10,3.4,8.7,3.9).curveTo(7,4.8,5.6,5.2).curveTo(4.6,5.4,3.2,5.4).curveTo(1.3,5.4,-1.4,4.9).closePath();
	this.shape_370.setTransform(24.475,-159.788);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.beginFill("#080808").beginStroke().moveTo(-6,-1.3).curveTo(-5,-2.3,-3.6,-2.9).curveTo(-2.4,-3.5,-0.8,-3.5).curveTo(1.9,-3.4,4.6,-1.8).curveTo(7.1,-0.2,8.6,1.7).curveTo(5.8,-0,4,-0.8).curveTo(1.4,-2,-0.8,-2).curveTo(-3.1,-2,-5.2,-0.4).curveTo(-6.8,0.8,-8.6,3.5).curveTo(-7.9,0.7,-6,-1.3).closePath();
	this.shape_371.setTransform(36.975,-206.175);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.3).moveTo(-8.7,2.7).curveTo(-4.8,-4.8,2.2,-2.6).curveTo(5.7,-1.6,8.4,1).curveTo(6.5,1.8,3.4,2.4).curveTo(-2.8,3.7,-8.7,2.7).closePath();
	this.shape_372.setTransform(37.1438,-205.4094);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.6,2.7).curveTo(-4.6,-4.8,2.4,-2.6).curveTo(5.8,-1.6,8.5,1).curveTo(6.7,1.8,3.6,2.4).curveTo(0,3.1,-3.4,3.1).curveTo(-6,3.1,-8.6,2.7).closePath();
	this.shape_373.setTransform(36.95,-205.4094);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.beginFill("#080808").beginStroke().moveTo(-6,-0.9).curveTo(-3.8,-3.1,-0.8,-3.7).curveTo(2.3,-4.2,5.1,-2.7).curveTo(7.7,-1.3,9.4,1.1).curveTo(6.7,-0.8,4.6,-1.6).curveTo(1.8,-2.7,-0.5,-2.2).curveTo(-2.8,-1.8,-5.3,-0).curveTo(-7.4,1.4,-9.4,3.8).curveTo(-8.3,1.1,-6,-0.9).closePath();
	this.shape_374.setTransform(-1.15,-201.397);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.beginFill().beginStroke("#080808").setStrokeStyle(0.3).moveTo(9.6,0.8).curveTo(3.7,-5.9,-3.3,-1.9).curveTo(-5.5,-0.7,-7.5,1.5).lineTo(-9.1,3.4).lineTo(-2.1,3.4).curveTo(5.6,3,9.6,0.8).closePath();
	this.shape_375.setTransform(-1.3841,-201.0226);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.4,3.4).lineTo(-7.8,1.5).curveTo(-5.7,-0.7,-3.6,-1.9).curveTo(3.4,-5.9,9.3,0.8).curveTo(5.3,3,-2.4,3.4).closePath();
	this.shape_376.setTransform(-1.1,-201.0227);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.beginFill("#EFC7B0").beginStroke().moveTo(3.5,9.9).curveTo(0.4,8.7,-1.8,4.6).curveTo(-2.8,2.9,-4.3,-1.8).curveTo(-6.1,-7.7,-5.5,-9.5).curveTo(-5.3,-10.4,-4.4,-10.1).curveTo(-3.9,-10,-3.1,-9.2).curveTo(-1,-6.9,-0.1,-5.6).curveTo(1.6,-3.3,1.9,-1.5).lineTo(2,1.7).curveTo(2,3.4,3.4,4.7).curveTo(4.7,6.1,5.5,8.3).curveTo(6.1,10.2,4.8,10.2).curveTo(4.3,10.2,3.5,9.9).closePath();
	this.shape_377.setTransform(-44.2333,-183.035);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.5,3.1).lineTo(-3.5,2.2).curveTo(-5.6,2.1,-6.5,1.8).curveTo(-8.1,1.3,-8.1,-0.3).curveTo(-8.1,-1.3,-7.4,-2.4).curveTo(-7.7,-1.5,-7.4,-0.7).curveTo(-6.9,0.4,-5.4,0.6).lineTo(-2.7,0.5).curveTo(-2,0.6,-0.2,1).curveTo(1.4,1.5,2.2,1.5).curveTo(2.9,1.4,4.1,0.8).curveTo(5.5,0.2,6.3,-0.6).curveTo(7.4,-1.6,7,-3.5).lineTo(7.8,-2.4).curveTo(8.4,-1,7.7,0.1).curveTo(7.5,0.5,7.1,0.8).lineTo(6.2,1.3).lineTo(4.6,2.7).curveTo(4,3.2,2.4,3.5).lineTo(1.9,3.5).curveTo(0.9,3.5,-0.5,3.1).closePath();
	this.shape_378.setTransform(23.2127,-175.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.beginFill("#080808").beginStroke().moveTo(-0.5,1.9).curveTo(-2.7,1.5,-5.3,0.4).curveTo(-7.5,-0.5,-9.6,-2.3).lineTo(-4.8,-1.1).lineTo(-0.1,-0.1).lineTo(9.6,1.5).curveTo(7.3,2.3,4.6,2.3).lineTo(4.1,2.3).curveTo(1.9,2.3,-0.5,1.9).closePath();
	this.shape_379.setTransform(35.9,-218.6975);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.beginFill("#080808").beginStroke().moveTo(-5.6,2.8).lineTo(0.2,0.3).lineTo(5.8,-2.4).curveTo(9.5,-4.3,11.4,-5.4).curveTo(9.5,-3,6.6,-1.1).curveTo(4.3,0.5,1,2.1).curveTo(-2,3.4,-5,4.3).curveTo(-8.6,5.2,-11.3,5.4).lineTo(-5.6,2.8).closePath();
	this.shape_380.setTransform(-3.85,-213.925);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.beginFill("#080808").beginStroke().moveTo(0.4,2.7).lineTo(-0.9,-2.6).lineTo(-2.6,-10).lineTo(-0.5,-2.7).curveTo(0.3,-0.3,0.9,2.6).lineTo(2.6,10).closePath();
	this.shape_381.setTransform(44.825,-239.725);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.beginFill("#080808").beginStroke().moveTo(0.2,1.4).lineTo(-0.4,-5.4).lineTo(0.3,-1.5).lineTo(0.4,1.4).curveTo(0.4,3.4,0.3,5.4).curveTo(0.3,3.6,0.2,1.4).closePath();
	this.shape_382.setTransform(39.45,-251.05);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.beginFill("#080808").beginStroke().moveTo(-0.4,3).curveTo(1.1,0.8,2.6,-1.7).curveTo(4.5,-5,5.8,-8.8).curveTo(4.8,-4.9,3.1,-1.4).curveTo(1.8,1.1,-0.1,3.3).curveTo(-2.6,6.5,-5.8,8.8).curveTo(-2.9,6.3,-0.4,3).closePath();
	this.shape_383.setTransform(34.15,-251.425);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.beginFill("#080808").beginStroke().moveTo(-1.5,3.7).curveTo(2,1.3,4.2,-0.6).curveTo(8.3,-4.2,10.2,-8.6).curveTo(8.6,-4.1,4.7,-0.2).curveTo(2.3,2.3,-1.1,4.2).curveTo(-4.4,6.1,-10.3,8.6).curveTo(-4.6,5.7,-1.5,3.7).closePath();
	this.shape_384.setTransform(15.1,-245.725);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.beginFill("#080808").beginStroke().moveTo(-14,9.4).curveTo(-9.2,8.1,-4.4,6.5).curveTo(4.7,3.4,8.8,1.3).curveTo(10.5,0.5,13.1,-1.2).curveTo(15.7,-3,17,-4.2).curveTo(17.7,-4.7,18.8,-5.9).lineTo(20.4,-7.9).curveTo(21.8,-9.9,23.9,-11.6).curveTo(22,-9.8,20.8,-7.6).curveTo(20.4,-6.6,19.5,-5.3).curveTo(18.7,-4.1,17.8,-3.3).curveTo(16.1,-1.5,14.1,0.2).curveTo(11.8,2.2,10,3.4).curveTo(4.6,6.9,-3.7,8.7).curveTo(-8.7,9.9,-13.8,10.5).curveTo(-19.4,11.4,-23.8,11.6).curveTo(-19.9,11,-14,9.4).closePath();
	this.shape_385.setTransform(-4.3,-245.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.beginFill("#080808").beginStroke().moveTo(-0.6,2.6).curveTo(-1.6,0.4,-1.9,-1.8).curveTo(-2.4,-5,-2.4,-8.2).curveTo(-2,-4.8,-1.1,-2).lineTo(0.1,2.3).curveTo(1.1,5.5,2.4,8.2).curveTo(0.8,5.7,-0.6,2.6).closePath();
	this.shape_386.setTransform(-34.3023,-191.775);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.beginFill("#080808").beginStroke().moveTo(0.4,11.5).curveTo(0.6,7.4,0.5,4.7).curveTo(0.4,-0.1,0.1,-4.9).curveTo(-0.1,-8,-0.8,-11.6).curveTo(-1.3,-14.7,-2.4,-18.2).curveTo(-0.9,-14.8,0.1,-11.8).curveTo(1,-8.8,1.8,-5.1).curveTo(2.7,-0.3,2.3,4.7).curveTo(2,7.5,1.2,11.6).curveTo(0.7,14.4,-0.6,18.1).curveTo(0.1,14.9,0.4,11.5).closePath();
	this.shape_387.setTransform(-35.7027,-215.55);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.beginFill("#080808").beginStroke().moveTo(1.3,2.7).lineTo(-0.2,-3).curveTo(-1.2,-7.2,-2.8,-10.9).curveTo(-0.7,-7.4,0.9,-3.3).curveTo(2,-0.5,2.3,2.5).curveTo(2.9,6.4,2.7,10.9).curveTo(2.4,6.9,1.3,2.7).closePath();
	this.shape_388.setTransform(-35.2339,-224.375);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-7.5,0.2).curveTo(-5.4,-3.6,-1.1,-3.9).curveTo(3.1,-4.2,6.4,-1.1).curveTo(8,0.5,8.8,2.2).lineTo(-8.8,3.9).closePath();
	this.shape_389.setTransform(36.975,-206.638);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-7.7,0.3).curveTo(-5,-4.1,-0.7,-4.5).curveTo(3.8,-5,7.1,-1.6).curveTo(8.8,0.1,9.5,1.9).lineTo(-9.5,4.6).curveTo(-9,2.5,-7.7,0.3).closePath();
	this.shape_390.setTransform(-1.175,-202.1071);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.beginFill("#FDE4C8").beginStroke().moveTo(14.1,61.4).curveTo(3.1,57.8,-7.3,52.7).curveTo(-21.6,45.8,-25.5,40.1).curveTo(-29.3,34.6,-31.3,29.5).lineTo(-32.6,25.5).curveTo(-35.4,26,-38.9,24.8).curveTo(-46,22.4,-49.5,14.2).curveTo(-53.5,4.9,-53.3,-0.6).curveTo(-53.2,-5.5,-49.6,-6.4).curveTo(-46.6,-7.2,-44.3,-5.2).curveTo(-42.6,-3.7,-40.6,-0).curveTo(-37.8,5.1,-37.1,7.7).curveTo(-37,8.3,-36.6,8.7).lineTo(-35.9,9.2).lineTo(-36.4,7.3).lineTo(-35.7,8.3).lineTo(-34.8,9.3).lineTo(-35.4,7.1).lineTo(-34.3,8.4).curveTo(-33.7,8.9,-31.8,9.6).curveTo(-32.6,8.6,-32.9,6.9).curveTo(-33.7,2.6,-33.8,-2.2).curveTo(-34.1,-8.3,-33,-11).curveTo(-29.7,-19.2,-31.3,-30.8).curveTo(-32.8,-42,-36.8,-45.3).lineTo(-35,-44.5).curveTo(-32.6,-43.6,-29.8,-43.1).curveTo(-20.8,-41.4,-10.6,-44).curveTo(-3.3,-45.9,5.6,-49.3).curveTo(11.8,-51.6,11.6,-51.2).curveTo(10,-49.2,6.4,-46.4).curveTo(4.8,-45.1,2.8,-44).lineTo(1.2,-43.1).curveTo(8.2,-44.7,16.1,-49.4).curveTo(20.1,-51.8,22.6,-53.8).lineTo(16.9,-45.2).curveTo(19.6,-46.2,25.7,-51.8).curveTo(28.8,-54.5,31.4,-57.1).lineTo(26,-47.6).lineTo(28.5,-49.4).curveTo(31.5,-51.8,34.2,-54.7).curveTo(36.8,-57.5,38.7,-60.6).curveTo(39.6,-62.1,40,-63.1).curveTo(41.3,-53.7,40.9,-57.7).lineTo(41.7,-50.2).lineTo(42.9,-56.7).lineTo(43.9,-53.1).lineTo(45.6,-46.6).curveTo(47.6,-37.8,48.1,-34.4).curveTo(49,-29.2,49.2,-22.5).curveTo(49.4,-18.9,50.7,-9.4).curveTo(52.3,1.2,52.5,4.2).lineTo(53.3,11.9).curveTo(53.4,22,49.7,33.6).curveTo(46.5,43.8,43.4,49.9).curveTo(41.3,54,38.5,57.7).curveTo(35.4,61.8,28.1,62.8).curveTo(26.1,63.1,24.1,63.1).curveTo(19.1,63.1,14.1,61.4).closePath();
	this.shape_391.setTransform(-1.2764,-193.7464);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.beginFill("#080808").beginStroke().moveTo(0.4,4).curveTo(0.4,-0.5,0.2,-4).curveTo(-0,-9.3,-1.2,-15.2).curveTo(0.2,-9.9,0.9,-4.1).curveTo(1.4,-0,1.1,4).curveTo(0.7,9.7,-0.6,15.2).curveTo(0.4,9.3,0.4,4).closePath();
	this.shape_392.setTransform(52.21,-245.125);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.beginFill("#080808").beginStroke().moveTo(-9.5,-0.4).curveTo(-7.1,-3.3,-4.5,-5.4).curveTo(-2.2,-7.2,1.3,-9.3).curveTo(10.4,-14.7,19.4,-16.3).curveTo(10.8,-14.2,2,-8.2).curveTo(-1.4,-5.9,-3.6,-4.2).curveTo(-6.2,-2.2,-8.6,0.4).curveTo(-14.9,7.1,-19.4,16.3).curveTo(-15.6,7,-9.5,-0.4).closePath();
	this.shape_393.setTransform(-55.575,-273.625);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.beginFill("#080808").beginStroke().moveTo(-14.4,0.7).curveTo(-10.4,-1.2,-6.7,-2.4).curveTo(-1.2,-4.2,5,-4.7).curveTo(8.8,-5,13.3,-4.9).curveTo(16.7,-4.7,21.5,-4.2).curveTo(17.1,-4.5,13.3,-4.3).curveTo(8.8,-4.2,5.1,-3.6).curveTo(-0.6,-2.8,-6.4,-1.4).curveTo(-10.5,-0.3,-14.2,1.2).curveTo(-17.8,2.7,-21.5,4.9).curveTo(-17.9,2.5,-14.4,0.7).closePath();
	this.shape_394.setTransform(-30.625,-290.2125);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.beginFill("#080808").beginStroke().moveTo(15.6,0.4).curveTo(10.9,-0.4,6.6,-0.7).curveTo(-0.3,-1.2,-6.4,-1.1).curveTo(-10.7,-1.1,-15.5,-0.6).curveTo(-19.2,-0.2,-24.6,0.9).curveTo(-20,-0.3,-15.6,-1.1).curveTo(-10.9,-2,-6.5,-2.3).curveTo(0.1,-2.8,6.7,-1.9).curveTo(11.9,-1.1,15.8,-0.1).curveTo(19.8,0.8,24.6,2.5).curveTo(20,1.2,15.6,0.4).closePath();
	this.shape_395.setTransform(-11.8,-295.5643);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.beginFill("#080808").beginStroke().moveTo(14.6,2.4).curveTo(11,-0.4,7.4,-2).curveTo(2.3,-4.4,-3.8,-6).curveTo(-7.5,-6.9,-12.2,-7.2).curveTo(-16.3,-7.3,-20.6,-6.6).curveTo(-16.3,-7.9,-12.2,-8.3).curveTo(-7.3,-8.6,-3.4,-8.1).curveTo(3.2,-7.3,8.4,-3.9).curveTo(12.1,-1.6,15.4,1.6).curveTo(18.2,4.4,20.7,8.4).curveTo(17.8,4.9,14.6,2.4).closePath();
	this.shape_396.setTransform(14,-290.0721);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.beginFill("#080808").beginStroke().moveTo(6.2,0.9).curveTo(4.6,-0.1,3,-0.7).curveTo(0.7,-1.6,-1.9,-2.2).curveTo(-3.6,-2.6,-5.4,-2.7).curveTo(-7.2,-2.7,-9.1,-2.4).curveTo(-7.4,-2.9,-5.5,-3.2).curveTo(-3.5,-3.3,-1.7,-3.1).curveTo(1,-2.9,3.4,-1.6).curveTo(4.8,-0.8,6.5,0.6).curveTo(7.7,1.6,9.1,3.2).curveTo(7.6,1.8,6.2,0.9).closePath();
	this.shape_397.setTransform(40.725,-276.3321);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.beginFill("#080808").beginStroke().moveTo(5.2,0.3).curveTo(2.7,-2.3,-0.5,-4.7).curveTo(-4.8,-7.9,-10.1,-9.6).curveTo(-4.7,-8.6,0.2,-5.9).curveTo(3.9,-3.8,6.3,-0.6).curveTo(8.1,1.9,9,4.2).curveTo(10,6.9,10.1,9.6).curveTo(9.4,4.6,5.2,0.3).closePath();
	this.shape_398.setTransform(42.475,-270.95);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.beginFill("#080808").beginStroke().moveTo(5.7,6.9).curveTo(4.6,4.1,3.6,2.1).curveTo(2.1,-0.8,-0.1,-4.2).curveTo(-1.6,-6.5,-3.2,-8.3).curveTo(-4.7,-10,-7,-12).curveTo(-4.7,-10.5,-2.7,-8.9).curveTo(-0.5,-6.8,1,-5).curveTo(3.6,-1.9,4.9,1.6).curveTo(5.6,3.6,6.3,6.7).curveTo(6.8,9.1,7,12).curveTo(6.6,9.5,5.7,6.9).closePath();
	this.shape_399.setTransform(31.25,-283.25);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.beginFill("#080808").beginStroke().moveTo(2.3,6).curveTo(-2.5,-1.7,-4.1,-5).curveTo(-6.6,-9.6,-7.9,-13.3).curveTo(-9.3,-17.3,-10.3,-22).curveTo(-9,-17.8,-6.8,-13.7).curveTo(-5.5,-11.1,-2.2,-6.2).curveTo(2.1,0,4.2,5).curveTo(8,13.2,10.3,22).curveTo(6.7,13.4,2.3,6).closePath();
	this.shape_400.setTransform(-46.95,-167.075);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.beginFill("#080808").beginStroke().moveTo(-3.4,10.2).curveTo(-7.9,3.5,-9.9,-4.2).curveTo(-12.6,-15,-11.3,-26).curveTo(-11.5,-15,-7.9,-4.8).curveTo(-5.2,2.4,-1.6,9.2).curveTo(3.8,19.1,11.7,26.1).curveTo(3.2,19.9,-3.4,10.2).closePath();
	this.shape_401.setTransform(-59.25,-203.35);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.beginFill("#080808").beginStroke().moveTo(-3.8,7.2).curveTo(-4.2,-0.7,-2.9,-7.9).curveTo(-1.8,-14.2,-0.5,-18.1).curveTo(1.3,-23.7,3.8,-27.6).curveTo(1.7,-23.9,0.1,-17.9).curveTo(-0.9,-13.9,-1.6,-7.7).curveTo(-2.3,-0.6,-2.4,7.1).curveTo(-2.3,19.4,0.5,27.6).curveTo(-2.9,19.7,-3.8,7.2).closePath();
	this.shape_402.setTransform(-71.9985,-237.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.beginFill("#080808").beginStroke().moveTo(-4.2,2.8).curveTo(-3.5,-1.2,-1.6,-4.7).curveTo(0.4,-8.4,4.7,-13.8).curveTo(1.2,-8,-0.3,-4.1).curveTo(-1.8,-0.5,-2.9,3.1).curveTo(-4.4,8.3,-4.4,13.9).curveTo(-5.1,8,-4.2,2.8).closePath();
	this.shape_403.setTransform(-72.9831,-250.55);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.beginFill("#EFC7B0").beginStroke().moveTo(25.2,33.7).curveTo(18.8,33.2,0.9,24.7).curveTo(-4.2,22.2,-13.4,15.4).curveTo(-23.9,7.5,-28.5,1.6).curveTo(-29.8,-8.2,-32.1,-18.7).lineTo(-34.1,-27.3).lineTo(-33.9,-27.3).curveTo(-27.8,-27.6,-25,-28.8).lineTo(-24.7,-28.9).curveTo(-20.4,-27.6,-16.7,-26.3).lineTo(-16.5,-26.4).lineTo(-16.4,-26.3).lineTo(-8.6,-30).curveTo(-0.4,-33.6,1.4,-33.8).lineTo(4.4,-33.6).lineTo(24.9,-31.7).lineTo(25.1,-31.7).lineTo(25.5,-32.3).curveTo(26.5,-33.1,27.6,-33.3).curveTo(31.9,-32.1,32.7,-4.9).lineTo(33,4.2).curveTo(32.7,13.3,32.9,18.1).curveTo(33.1,24.4,34.1,28.2).curveTo(31.4,33.8,26.1,33.8).lineTo(25.2,33.7).closePath();
	this.shape_404.setTransform(-5.825,-151.0273);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-18.3,49.6).lineTo(-40,26.7).curveTo(-24.6,20.6,-27.8,-16.3).curveTo(-28.8,-27.8,-31.6,-41).lineTo(-34.1,-52).lineTo(-28.9,-52.5).curveTo(-23.6,-53.3,-23.1,-55).curveTo(-22.7,-56.7,-19.5,-54).curveTo(-17.9,-52.6,-16.4,-51).lineTo(-8.5,-54.6).curveTo(-0.2,-58.3,1.4,-58.4).curveTo(4.1,-58.5,25.1,-56.4).lineTo(26.1,-57.6).curveTo(27.3,-58.6,28.4,-57.4).curveTo(32,-53.6,32.7,-29.6).curveTo(33.6,-0.3,36.9,13.2).curveTo(38.5,20,40,20.9).lineTo(24,45.8).curveTo(17,57.1,3.8,58.3).lineTo(1,58.4).curveTo(-10.4,58.4,-18.3,49.6).closePath();
	this.shape_405.setTransform(-5.825,-126.3871);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.beginFill("#080808").beginStroke().moveTo(-5,81.8).curveTo(-15.9,77.5,-17.2,73.3).curveTo(-18.1,70.7,-33.2,44.7).curveTo(-49.8,16.3,-56.1,2.4).curveTo(-63.1,-13.1,-62.1,-29.7).curveTo(-61.8,-34.8,-60.7,-39.5).lineTo(-59.7,-43.2).lineTo(-65.1,-34.5).curveTo(-59.7,-58.6,-39.2,-71.8).curveTo(-29.2,-78.2,-20.3,-80).lineTo(-32.6,-77.9).lineTo(-29.8,-79.3).curveTo(-26.1,-80.9,-21.4,-82.2).curveTo(-6.2,-86.2,13.4,-84.9).curveTo(33.1,-83.6,43,-75.6).curveTo(47.9,-71.6,48.9,-67.9).lineTo(50.4,-67.3).curveTo(52.2,-66.6,54,-65.3).curveTo(59.8,-61.1,63.1,-53.4).curveTo(66.4,-45.8,64.2,-23).curveTo(63.1,-11.6,61.3,-1.7).lineTo(5.5,85.2).curveTo(0.4,83.9,-5,81.8).closePath();
	this.shape_406.setTransform(-12.535,-211.3844);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.beginFill("#080808").beginStroke().moveTo(0.8,1.1).lineTo(-0.1,-1.3).curveTo(-0.7,-3.1,-1.7,-4.7).curveTo(-0.7,-3.6,0.4,-1.5).curveTo(1,-0.4,1.3,0.9).curveTo(1.7,2.9,1.7,4.7).curveTo(1.4,2.8,0.8,1.1).closePath();
	this.shape_407.setTransform(-28.05,-160.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-5.7,76.2).curveTo(-12.6,71.4,-13.3,67.9).curveTo(-13.5,66.9,-12.4,54.5).curveTo(-10.6,36.3,-9.9,25.8).curveTo(-6.5,-19,-9.6,-42.8).curveTo(-11.7,-58.7,-16.6,-69).curveTo(-20.3,-76.8,-25.3,-80.9).lineTo(-19.3,-79.4).curveTo(11,-77.8,21.1,-52.9).curveTo(26.2,-40.5,25.2,-28.4).curveTo(25.6,-23.7,21.4,-12.3).curveTo(13.9,7.6,12.6,11.8).curveTo(1.4,48.1,11.3,80.7).curveTo(9.8,80.9,8.2,80.9).curveTo(1.2,80.9,-5.7,76.2).closePath();
	this.shape_408.setTransform(79.3326,-21.406);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-4.4,0.4).lineTo(-9.8,-3.1).curveTo(-5.3,-0.4,2.7,-0.7).curveTo(6.7,-0.9,9.8,-1.6).lineTo(9.4,-0.2).curveTo(8.3,1.5,5.3,2.7).curveTo(4.5,3.1,3.5,3.1).curveTo(0.5,3.1,-4.4,0.4).closePath();
	this.shape_409.setTransform(16.6338,-91.2468);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.beginFill("#D5A690").beginStroke().moveTo(-16.4,56.2).curveTo(-36,55.1,-47.2,40).curveTo(-50.7,35.3,-52.9,29.8).lineTo(-54.4,25.2).curveTo(-55.3,9.9,-55.6,-4.6).curveTo(-56.2,-33.5,-53.1,-29.1).curveTo(-51.9,-27.5,-47,-18.3).curveTo(-41.3,-8.3,-34.7,-1.5).curveTo(-14,20.2,16.4,14.6).curveTo(45.8,9.3,34.9,-24.1).curveTo(31.5,-34.6,24.4,-46.6).lineTo(18.1,-56.5).lineTo(30.8,-53.6).lineTo(35.6,-47.8).curveTo(40.7,-41.6,41.7,-39.5).lineTo(49.5,-25).curveTo(55.8,-12.6,55.7,-10.3).lineTo(54.5,12.9).curveTo(52.7,34.6,48.6,40.8).curveTo(43.6,48.4,25.4,52.9).curveTo(10.9,56.5,-6.1,56.5).curveTo(-11.1,56.5,-16.4,56.2).closePath();
	this.shape_410.setTransform(23.1603,-48.6718);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-26.1,29.5).curveTo(-36.3,20.4,-36.3,-1.2).curveTo(-36.3,-17.4,-26.1,-27.3).curveTo(-16.2,-37,-0.6,-37).curveTo(14.7,-37,25.5,-26.1).curveTo(36.3,-15.3,36.3,0).curveTo(36.3,15.3,25.5,26.2).curveTo(14.7,37,-0.6,37).curveTo(-17.7,37,-26.1,29.5).closePath();
	this.shape_411.setTransform(-85.725,-45.825);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-91.9,-66.7).curveTo(-90.9,-67.1,-69.6,-74.7).curveTo(-44.4,-83.6,-29.2,-89.4).curveTo(-19.9,-92.9,-15.8,-94.2).curveTo(-8.5,-96.6,-3.6,-97.1).curveTo(5.9,-98.3,18.2,-96.9).curveTo(25.5,-96,40.4,-93.2).curveTo(48.2,-91.7,56.2,-89.7).curveTo(64.2,-87.7,72.1,-86.2).curveTo(72.8,-86.1,79.2,-83.4).lineTo(85.3,-80.8).lineTo(84.2,-77.3).curveTo(82.9,-72.9,82.1,-67.9).curveTo(79.7,-51.8,83.7,-35.8).curveTo(87.9,-19.2,90.3,-16.7).lineTo(90.6,-16.5).lineTo(38.5,29.4).lineTo(-45.2,97.7).closePath().moveTo(90.6,-16.5).lineTo(91.9,-17.6).curveTo(91.7,-16.3,91.1,-16.3).curveTo(90.9,-16.3,90.6,-16.5).closePath().moveTo(90.6,-16.5).lineTo(90.6,-16.5).closePath();
	this.shape_412.setTransform(-7.575,-13.7093);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.beginFill("#477A8E").beginStroke().moveTo(-2.3,-0.2).lineTo(2.2,0).curveTo(2,0.2,1.2,0.2).curveTo(0.1,0.2,-2.3,-0.2).closePath();
	this.shape_413.setTransform(-44.75,21.9491);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.beginFill("#E2B19F").beginStroke().moveTo(1.9,-1).lineTo(1.2,0.1).lineTo(-2,1).closePath();
	this.shape_414.setTransform(164.7503,217.6949,0.9992,0.9992,-1.7327);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.beginFill("#E2B19F").beginStroke().moveTo(1.6,-0.5).curveTo(1.4,-2.6,0.2,-5.4).curveTo(-0.2,-6.4,-1,-7.7).lineTo(-2.4,-10).lineTo(-0.7,-7.9).curveTo(0.1,-6.8,0.7,-5.7).curveTo(2.1,-3.1,2.3,-0.6).curveTo(2.4,0.7,2.2,2.1).lineTo(2,4.8).curveTo(1.6,7.7,1,10).closePath();
	this.shape_415.setTransform(167.2124,192.4609,0.9988,0.9988,-1.7326);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.beginFill().beginStroke("#E2B19F").setStrokeStyle(0.7).moveTo(-0.1,-2).lineTo(0.1,2);
	this.shape_416.setTransform(182.9812,217.2684,0.9992,0.9992,-1.7327);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.beginFill().beginStroke("#E2B19F").setStrokeStyle(0.7).moveTo(-0.1,-3).lineTo(0.1,3);
	this.shape_417.setTransform(177.2459,219.3412,0.9992,0.9992,-1.7327);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.beginFill("#E2B19F").beginStroke().moveTo(-5.6,0.1).curveTo(-3.4,-0.3,-0,-0.4).curveTo(3.7,-0.4,5.6,-0.1).curveTo(3.4,0.3,0,0.4).curveTo(-3.7,0.4,-5.6,0.1).closePath();
	this.shape_418.setTransform(182.9017,215.0183,0.9988,0.9988,-1.7326);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.beginFill("#E2B19F").beginStroke().moveTo(-1.2,2.8).curveTo(-3.7,1.8,-5.1,0.3).curveTo(-5.7,-0.2,-5.9,-0.6).lineTo(-6.7,-1.4).lineTo(-7.9,-3.4).lineTo(-5.6,-0.9).lineTo(-4.7,-0.1).lineTo(-2.9,1.1).lineTo(-1.9,1.7).lineTo(-0.9,2.1).curveTo(0.8,2.8,3.4,2.8).lineTo(4.6,2.7).lineTo(5.6,2.5).curveTo(6.6,2.4,7.9,2).curveTo(5.8,3.1,3.5,3.3).lineTo(2.3,3.4).curveTo(0.4,3.4,-1.2,2.8).closePath();
	this.shape_419.setTransform(182.7112,189.7236,0.9988,0.9988,-1.7326);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.beginFill("#E2B19F").beginStroke().moveTo(-0.2,0.7).curveTo(-2.5,0.4,-3.9,-0.8).curveTo(-2.2,-0.3,-0,0).lineTo(3.9,0.5).curveTo(2.7,0.8,1.4,0.8).lineTo(-0.2,0.7).closePath();
	this.shape_420.setTransform(191.8683,191.0218,0.9988,0.9988,-1.7326);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.beginFill("#E2B19F").beginStroke().moveTo(-6.6,6).curveTo(-9.7,5.7,-13.2,4.9).lineTo(-13.5,4.8).lineTo(-9.2,1.9).lineTo(-12.9,4.7).curveTo(-8.7,5.4,-6.6,5.6).curveTo(-4.2,5.7,-3.3,5.4).lineTo(-0.1,4.5).lineTo(12.6,1).curveTo(12.9,-0.2,12.7,-1.2).curveTo(12.6,-2,12.4,-2.4).lineTo(11.7,-3.4).curveTo(10.9,-4.5,9.9,-5.1).curveTo(8.8,-5.6,7.6,-5.6).curveTo(6.8,-5.6,5.1,-5.2).lineTo(-2.5,-3.4).lineTo(-2.5,-3.4).lineTo(-6.5,-0.2).lineTo(-2.6,-3.6).lineTo(-2.6,-3.6).lineTo(5,-5.7).curveTo(7,-6.2,7.6,-6.2).curveTo(9.1,-6.3,10.2,-5.6).curveTo(11.4,-5,12.3,-3.8).lineTo(13,-2.7).curveTo(13.3,-2.2,13.4,-1.3).curveTo(13.6,-0.1,13.2,1.4).lineTo(13.2,1.6).lineTo(13,1.6).lineTo(0,5.1).lineTo(-3.2,5.9).curveTo(-4.1,6.2,-4.9,6.2).closePath();
	this.shape_421.setTransform(201.7121,224.185,0.9988,0.9988,-1.7326);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.beginFill("#E2B19F").beginStroke().moveTo(-5.8,9.5).curveTo(-8,9.1,-11.5,8).lineTo(-11.8,7.9).lineTo(-11.5,7.8).lineTo(-7,5.9).lineTo(-11.2,7.9).lineTo(-5.8,9.1).lineTo(-5.1,9.1).lineTo(-4.6,8.8).lineTo(8,-1.1).curveTo(9.7,-2.6,10.1,-3.1).curveTo(11.2,-4.4,11.2,-5.5).curveTo(11.2,-6.5,9.8,-7.6).curveTo(8.6,-8.6,7.3,-8.8).curveTo(6.1,-9.1,4.6,-8.6).curveTo(3.8,-8.3,2.2,-7.2).lineTo(-2.6,-3.8).lineTo(-2.6,-3.7).lineTo(-2.7,-3.7).curveTo(-4,-3.9,-5.7,-3.7).curveTo(-7.2,-3.4,-8.5,-2.8).curveTo(-7.2,-3.4,-5.7,-3.8).curveTo(-4.1,-4.2,-2.8,-4.1).lineTo(1.9,-7.6).curveTo(3.8,-8.9,4.4,-9.1).curveTo(6,-9.7,7.5,-9.4).curveTo(8.9,-9.1,10.2,-8.1).lineTo(11.3,-7).curveTo(11.8,-6.3,11.8,-5.5).curveTo(11.9,-4.1,10.6,-2.6).curveTo(10,-1.8,8.5,-0.6).lineTo(-4.3,9.2).curveTo(-4.7,9.5,-5,9.5).closePath();
	this.shape_422.setTransform(190.9039,221.8707,0.9988,0.9988,-1.7326);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.beginFill("#E2B19F").beginStroke().moveTo(-8,6.6).lineTo(-9.4,5.7).lineTo(-11.9,3.9).lineTo(-12,3.8).lineTo(-11.9,3.7).lineTo(-9.1,-0.1).lineTo(-11.6,3.7).lineTo(-7.8,6.2).curveTo(-6.8,6.6,-6.5,6.6).lineTo(-3.6,5.7).lineTo(-0.7,4.6).lineTo(7.8,0.8).curveTo(8.7,0.4,9.1,0.1).curveTo(9.6,-0.2,10.2,-0.8).curveTo(11.5,-2,11.2,-3.2).curveTo(11.1,-3.7,10.5,-4.4).curveTo(10.2,-4.8,9.4,-5.4).curveTo(7.2,-7.1,3.8,-6.1).curveTo(2.8,-5.8,1,-4.9).lineTo(-7.5,-0.9).lineTo(0.7,-5.3).curveTo(2.5,-6.2,3.6,-6.6).curveTo(5.3,-7.1,6.8,-7).curveTo(8.5,-6.9,9.8,-6).lineTo(11,-4.9).curveTo(11.7,-4.1,11.9,-3.4).curveTo(12.1,-2.5,11.7,-1.7).curveTo(11.4,-1,10.7,-0.3).curveTo(10.4,0.1,9.5,0.7).lineTo(8.8,1.2).lineTo(-0.5,5.2).lineTo(-3.4,6.3).lineTo(-6.4,7.1).curveTo(-6.9,7.1,-8,6.6).closePath();
	this.shape_423.setTransform(180.847,224.8955,0.9988,0.9988,-1.7326);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.beginFill("#E2B19F").beginStroke().moveTo(-4,9).curveTo(-5.2,8.3,-6.6,6.4).curveTo(-7.1,5.6,-7.5,4.8).lineTo(-7.9,3).curveTo(-8.1,1.4,-8.2,-0.6).lineTo(-7.7,2.9).lineTo(-7.2,4.6).curveTo(-6.9,5.3,-6.2,6.1).curveTo(-5.1,7.8,-3.8,8.6).lineTo(-3,8.8).lineTo(-2.2,8.7).curveTo(-1.2,8.5,-0.6,8.2).lineTo(-0.6,8.3).lineTo(-0.5,8.2).lineTo(-0.6,8.2).lineTo(6.6,-2.1).curveTo(7.8,-4.3,7.4,-6).curveTo(7.2,-6.9,6.4,-7.5).curveTo(5.7,-8.1,4.6,-8.5).curveTo(3.6,-8.9,2.7,-8.8).curveTo(1.7,-8.6,0.8,-8).curveTo(-0.4,-6.9,-2,-4.9).lineTo(-4.5,-1.4).lineTo(-2.2,-5).curveTo(-0.6,-7.3,0.6,-8.3).curveTo(1.5,-9.1,2.6,-9.3).curveTo(3.7,-9.5,4.8,-9.1).curveTo(6,-8.6,6.8,-8).curveTo(7.8,-7.3,8.1,-6.1).curveTo(8.5,-4.2,7.2,-1.8).lineTo(-0.1,8.7).lineTo(-0.2,8.8).curveTo(-0.9,9.1,-2.1,9.3).lineTo(-3,9.4).curveTo(-3.6,9.3,-4,9).closePath();
	this.shape_424.setTransform(169.3109,220.4921,0.9988,0.9988,-1.7326);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-10.6,30.9).curveTo(-11.4,30.7,-13.7,29.2).lineTo(-15.9,27.8).curveTo(-16.4,28.3,-17.3,28.5).curveTo(-18.9,28.9,-20.2,27.5).curveTo(-21.5,26.1,-22,25.4).curveTo(-22.9,24.2,-23.2,22.9).lineTo(-23.6,20).lineTo(-23.8,18.3).lineTo(-30.5,-16.1).curveTo(-30.6,-18.5,-28.9,-21.1).curveTo(-25.5,-26.3,-16.5,-27.1).lineTo(-12.1,-29.3).curveTo(-7.1,-31.3,-4.2,-30.8).lineTo(4.6,-30.1).curveTo(13.9,-28.6,16.3,-24).curveTo(18.3,-20,20.5,-14.4).curveTo(22.4,-9.7,23,-8.9).curveTo(24.2,-6.9,30.3,0.3).lineTo(30.5,0.9).curveTo(30.5,1.7,29.6,2.6).curveTo(28.3,3.8,26.7,4.3).curveTo(24.8,4.9,23.3,4.1).lineTo(19.5,2).curveTo(17.2,0.5,16.5,-0.9).curveTo(15.9,-2.3,13.8,-5.8).lineTo(11.9,-9).lineTo(6.7,-9.1).lineTo(7.5,14.4).lineTo(10.6,12.6).curveTo(14.4,11.5,17.4,14.8).lineTo(17.5,16.5).curveTo(17,18.6,14.3,20.5).lineTo(19.7,19.1).curveTo(25.2,17.8,26.2,18.3).curveTo(28.1,19.3,28.9,20.3).curveTo(30.3,22.2,29.7,25.2).curveTo(13.2,29.9,12.1,29.9).curveTo(11.4,29.9,7.4,29.3).lineTo(3.6,28.7).curveTo(2,30.8,1,30.6).lineTo(-5.2,29.1).curveTo(-9,30.9,-10.4,30.9).lineTo(-10.6,30.9).closePath();
	this.shape_425.setTransform(184.361,201.0083,0.9992,0.9992,-1.7327);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.beginFill("#FDE4C8").beginStroke().moveTo(2.8,36.3).curveTo(-14.7,12.8,-19.2,4.1).curveTo(-23.9,-4.9,-31.7,-25.8).curveTo(-40,-47.8,-40.1,-52.9).curveTo(-40.1,-57.4,-25,-49.5).curveTo(-17.3,-45.6,-9.8,-40.7).lineTo(-0.1,-57.9).lineTo(6.9,-45.7).curveTo(14.8,-30.1,19.5,-12.6).curveTo(26.6,13.3,30.5,25.9).curveTo(37.3,47.7,40.1,50).lineTo(19.4,57.9).curveTo(11.5,48,2.8,36.3).closePath();
	this.shape_426.setTransform(126.4662,127.2327,0.9996,0.9996,-1.7329);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.beginFill("#D5A690").beginStroke().moveTo(-5.5,0.1).curveTo(-3.4,-1.2,-0.9,-2.2).curveTo(1.4,-3,4.1,-3.4).curveTo(6.8,-3.9,9.2,-3.6).lineTo(-4.8,1.5).curveTo(-6.7,2.4,-9.2,3.8).curveTo(-8,1.9,-5.5,0.1).closePath();
	this.shape_427.setTransform(111.4125,73.4061,0.9996,0.9996,-1.7329);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-6.6,19.2).curveTo(-14.5,16.5,-18.2,9).curveTo(-21.9,1.4,-19.2,-6.6).curveTo(-16.5,-14.5,-8.9,-18.2).curveTo(-1.4,-21.9,6.6,-19.2).curveTo(14.5,-16.5,18.2,-8.9).curveTo(21.9,-1.4,19.2,6.6).curveTo(16.5,14.5,9,18.2).curveTo(4.6,20.3,0.1,20.3).curveTo(-3.2,20.3,-6.6,19.2).closePath();
	this.shape_428.setTransform(105.7695,76.5489,1,1,-1.7331);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-35.6,-14.6).curveTo(-40.1,-19.8,-39.7,-32.6).curveTo(-38.4,-47.7,-38.6,-54.8).curveTo(-39,-73.1,-32.1,-78.6).curveTo(-27,-82.7,-10.7,-83).lineTo(23.8,-48.9).curveTo(30.1,-26.2,35.5,23.4).curveTo(38.3,48.2,39.8,68.5).lineTo(1.7,83).closePath();
	this.shape_429.setTransform(82.4212,0.8954,1,1,-1.7331);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.beginFill("#477A8E").beginStroke().moveTo(-46.4,9.9).curveTo(-65.7,5.8,-65.7,-0).curveTo(-65.7,-5.8,-46.4,-9.9).curveTo(-27.2,-14,0,-14).curveTo(27.2,-14,46.4,-9.9).curveTo(65.7,-5.8,65.7,-0).curveTo(65.7,5.8,46.4,9.9).curveTo(27.2,14,0,14).curveTo(-27.2,14,-46.4,9.9).closePath();
	this.shape_430.setTransform(15.725,91.475);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.beginFill("#477A8E").beginStroke().moveTo(0,89.6).curveTo(-29.4,90.7,-52.4,87.2).curveTo(-84.1,82.5,-87.6,70.4).curveTo(-92,54.8,-80,-9.9).curveTo(-76.2,-30.1,-71.3,-52.9).lineTo(-63.5,-87.5).lineTo(-16.7,-88.9).lineTo(-16.7,-89.9).lineTo(0,-89.4).lineTo(16.7,-89.9).lineTo(16.7,-88.9).lineTo(63.5,-87.5).lineTo(71.3,-52.9).curveTo(76.3,-30.2,80,-9.9).curveTo(92,54.8,87.6,70.4).curveTo(84.1,82.5,52.4,87.2).curveTo(34.8,89.9,13.4,89.9).curveTo(6.9,89.9,0,89.6).closePath();
	this.shape_431.setTransform(18.3768,165.8225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.instance_43},{t:this.shape_357},{t:this.shape_356}]}).to({state:[]},2).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-574,-298.5,1152.2,603.9);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-574,-296.9,1152.2,602.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-574,-300.3,1152.2,605.7), rect, rect, rect, rect, rect, new cjs.Rectangle(-574,-298.4,1152.2,603.8), new cjs.Rectangle(-574,-298,1152.2,603.4), new cjs.Rectangle(-574,-297.6,1152.2,603.1), new cjs.Rectangle(-574,-297.1,1152.2,602.6), new cjs.Rectangle(-574,-296.7,1152.2,602.2), new cjs.Rectangle(-574,-296.4,1152.2,601.8), new cjs.Rectangle(-574,-295.9,1152.2,601.3), new cjs.Rectangle(-574,-295.5,1152.2,601), new cjs.Rectangle(-574,-295.1,1152.2,600.6), new cjs.Rectangle(-574,-294.7,1152.2,600.2), new cjs.Rectangle(-574,-294.3,1152.2,599.8), new cjs.Rectangle(-574,-293.9,1152.2,599.3), new cjs.Rectangle(-574,-293.5,1152.2,599), rect=new cjs.Rectangle(-574,-293.1,1152.2,598.6), rect, rect, rect, rect, new cjs.Rectangle(-574,-293.5,1152.2,598.9), new cjs.Rectangle(-574,-293.8,1152.2,599.3), new cjs.Rectangle(-574,-294.2,1152.2,599.7), new cjs.Rectangle(-574,-294.6,1152.2,600.1), new cjs.Rectangle(-574,-295,1152.2,600.5), new cjs.Rectangle(-574,-295.4,1152.2,600.8), new cjs.Rectangle(-574,-295.8,1152.2,601.2), new cjs.Rectangle(-574,-296.2,1152.2,601.6), new cjs.Rectangle(-574,-296.5,1152.2,602), new cjs.Rectangle(-574,-296.9,1152.2,602.3), new cjs.Rectangle(-574,-297.3,1152.2,602.8), new cjs.Rectangle(-574,-297.7,1152.2,603.1), new cjs.Rectangle(-574,-298.1,1152.2,603.5), rect=new cjs.Rectangle(-574,-298.4,1152.2,603.8), rect, new cjs.Rectangle(-574,-298,1152.2,603.4), new cjs.Rectangle(-574,-297.6,1152.2,603.1), new cjs.Rectangle(-574,-297.1,1152.2,602.6), new cjs.Rectangle(-574,-296.7,1152.2,602.2), new cjs.Rectangle(-574,-296.4,1152.2,601.8), new cjs.Rectangle(-574,-295.9,1152.2,601.3), new cjs.Rectangle(-574,-295.5,1152.2,601), new cjs.Rectangle(-574,-295.1,1152.2,600.6), new cjs.Rectangle(-574,-294.7,1152.2,600.2), new cjs.Rectangle(-574,-294.3,1152.2,599.8), new cjs.Rectangle(-574,-293.9,1152.2,599.3), new cjs.Rectangle(-574,-293.5,1152.2,599), rect=new cjs.Rectangle(-574,-293.1,1152.2,598.6), rect, rect, rect, rect, new cjs.Rectangle(-574,-293.5,1152.2,598.9), new cjs.Rectangle(-574,-293.8,1152.2,599.3), new cjs.Rectangle(-574,-294.2,1152.2,599.7), new cjs.Rectangle(-574,-294.6,1152.2,600.1), new cjs.Rectangle(-574,-295,1152.2,600.5), new cjs.Rectangle(-574,-295.4,1152.2,600.8), new cjs.Rectangle(-574,-295.8,1152.2,601.2), new cjs.Rectangle(-574,-296.2,1152.2,601.6), new cjs.Rectangle(-574,-296.5,1152.2,602), new cjs.Rectangle(-574,-296.9,1152.2,602.3), new cjs.Rectangle(-574,-297.3,1152.2,602.8), new cjs.Rectangle(-574,-297.7,1152.2,603.1), new cjs.Rectangle(-574,-298.1,1152.2,603.5), new cjs.Rectangle(-574,-298.4,1152.2,603.8)];


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Cl
	this.instance = new lib.ionCl7();
	this.instance.setTransform(223.1,165.75);

	this.instance_1 = new lib.ionCl7();
	this.instance_1.setTransform(89.4,61.15);

	this.instance_2 = new lib.ionCl7();
	this.instance_2.setTransform(42.5,251.35);

	this.instance_3 = new lib.ionCl7();
	this.instance_3.setTransform(-211.95,-193.85);

	this.instance_4 = new lib.ionCl7();
	this.instance_4.setTransform(159.4,-228.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Na
	this.instance_5 = new lib.Symbol5_1();
	this.instance_5.setTransform(-92.05,-47);

	this.instance_6 = new lib.Symbol5_1();
	this.instance_6.setTransform(-202.3,207.35);

	this.instance_7 = new lib.Symbol5_1();
	this.instance_7.setTransform(-291.95,-45.85);

	this.instance_8 = new lib.Symbol5_1();
	this.instance_8.setTransform(-40.25,-252.15);

	this.instance_9 = new lib.Symbol5_1();
	this.instance_9.setTransform(287.3,-68.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// protein_channels
	this.instance_10 = new lib.Symbol108();
	this.instance_10.setTransform(210.55,-48.8,1.2054,1.2054,0,-2.2476,177.7524,31.4,26.5);

	this.instance_11 = new lib.Symbol108();
	this.instance_11.setTransform(-220.4,-19.9,1.2054,1.2054,2.2476,0,0,31.4,26.5);

	this.instance_12 = new lib.Symbol107();
	this.instance_12.setTransform(-129.6,139.05,1.2053,1.2053,1.9856,0,0,25.7,30.7);

	this.instance_13 = new lib.Symbol106();
	this.instance_13.setTransform(46.9,165.35,1.2053,1.2053,2.8437,0,0,14.5,29.7);

	this.instance_14 = new lib.Symbol105();
	this.instance_14.setTransform(197.25,81.75,1.2054,1.2054,2.1526,0,0,28.9,25.2);

	this.instance_15 = new lib.Symbol103();
	this.instance_15.setTransform(64.9,-162.45,1.2053,1.2053,1.8993,0,0,28.3,31.6);

	this.instance_16 = new lib.Symbol102();
	this.instance_16.setTransform(-96.9,-153,1.2054,1.2054,2.0662,0,0,22.4,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// Layer_4
	this.instance_17 = new lib.Symbol110();
	this.instance_17.setTransform(237.25,200.05,1.2053,1.2053,180,0,0,-0.1,0);

	this.instance_18 = new lib.Symbol109();
	this.instance_18.setTransform(245.35,199.1,1.2053,1.2053,180);

	this.instance_19 = new lib.Symbol111();
	this.instance_19.setTransform(243.15,199.25,1.2053,1.2053,180,0,0,-0.1,0);

	this.instance_20 = new lib.Symbol84();
	this.instance_20.setTransform(244.35,204.2,1.2053,1.2053,180,0,0,-0.1,0);

	this.instance_21 = new lib.Symbol59();
	this.instance_21.setTransform(-242.9,-200.85,1.2054,1.2054);

	this.instance_22 = new lib.Symbol57();
	this.instance_22.setTransform(-244.3,-202.35,1.2054,1.2054);

	this.instance_23 = new lib.Symbol51();
	this.instance_23.setTransform(-245.5,-177.4,1.2054,1.2054,0,0,0,0,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(1));

	// Cell_memrain
	this.membraneInternal = new lib.membraneInternal();
	this.membraneInternal.name = "membraneInternal";
	this.membraneInternal.setTransform(-0.3,0,1,1,0,0,0,199.1,145.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFBCC").beginStroke().moveTo(-79.9,148.7).curveTo(-116.8,136.4,-145.2,114.1).curveTo(-173.6,91.8,-189.2,62.8).curveTo(-205.4,32.8,-205.4,-0).curveTo(-205.4,-32.8,-189.2,-62.8).curveTo(-173.6,-91.8,-145.2,-114.1).curveTo(-116.8,-136.4,-79.9,-148.7).curveTo(-41.8,-161.4,0,-161.4).curveTo(41.8,-161.4,80,-148.7).curveTo(116.8,-136.4,145.2,-114.1).curveTo(173.7,-91.8,189.2,-62.8).curveTo(205.4,-32.8,205.4,-0).curveTo(205.4,32.8,189.2,62.8).curveTo(173.6,91.8,145.2,114.1).curveTo(116.8,136.4,80,148.7).curveTo(41.8,161.4,0,161.4).curveTo(-41.8,161.4,-79.9,148.7).closePath();
	this.shape.setTransform(-0.2983,0.062,1.2054,1.2054);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#6DCFF6").beginStroke().moveTo(-121.7,287.9).curveTo(-177.7,264.3,-221,220.9).curveTo(-264.3,177.7,-287.9,121.7).curveTo(-312.5,63.6,-312.5,0).curveTo(-312.5,-63.6,-287.9,-121.7).curveTo(-264.3,-177.7,-221,-221).curveTo(-177.7,-264.3,-121.7,-287.9).curveTo(-63.6,-312.5,0,-312.5).curveTo(63.5,-312.5,121.6,-287.9).curveTo(177.7,-264.3,220.9,-221).curveTo(264.2,-177.7,287.9,-121.7).curveTo(312.5,-63.6,312.5,0).curveTo(312.5,63.6,287.9,121.7).curveTo(264.2,177.7,220.9,220.9).curveTo(177.7,264.3,121.6,287.9).curveTo(63.5,312.5,0,312.5).curveTo(-63.6,312.5,-121.7,287.9).closePath();
	this.shape_1.setTransform(0,0,1.0279,1.0279);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.membraneInternal}]}).wait(1));

	// Layer_2
	this.cellContainer = new lib.cellContainer();
	this.cellContainer.name = "cellContainer";
	this.cellContainer.setTransform(-1.05,-1.05,1,1,0,0,0,321.2,321.2);

	this.timeline.addTween(cjs.Tween.get(this.cellContainer).wait(1));

	// Black_Bg
	this.instance_24 = new lib.Symbol24("synched",0);
	this.instance_24.setTransform(51.7,0,1,1,0,0,0,51.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, rect = new cjs.Rectangle(-365,-349.9,730,700), [rect]);


(lib.Standing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-18.9,6.4).curveTo(-23.2,-2.8,-25.2,-7.8).curveTo(-29.3,-18.5,-29.9,-37.3).lineTo(-29.6,-53.9).lineTo(-17.1,-58).lineTo(9.6,-49.7).lineTo(11.2,-46.9).curveTo(13.1,-43.2,14.8,-38.7).curveTo(20.5,-24.1,22.1,-6.3).curveTo(23.5,9.1,26.9,28.8).curveTo(28.5,38.5,29.9,45.3).lineTo(5.5,57.9).lineTo(-18.9,6.4).closePath();
	this.shape.setTransform(-119.35,134.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#D0926E").beginStroke().moveTo(-0.9,1.9).lineTo(-0.2,-0.1).lineTo(0.1,-1.1).curveTo(0.4,-1.6,0.8,-1.9).lineTo(0.8,-1.9).curveTo(1,-1.4,0.8,-0.8).lineTo(0.3,0.1).curveTo(-0.1,1,-0.8,1.9).closePath();
	this.shape_1.setTransform(-132.2929,209.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#D0926E").beginStroke().moveTo(-6.7,14.5).lineTo(-5.1,6.5).lineTo(-3.2,-0.4).lineTo(-2.7,-1.3).lineTo(1.8,-8).lineTo(6.6,-14.5).lineTo(6.7,-14.4).curveTo(6.1,-12.8,4.9,-10.8).lineTo(2.8,-7.3).curveTo(1.1,-4.7,-1.8,-0.7).lineTo(-2.3,0.1).lineTo(-4.5,6.7).lineTo(-6.6,14.5).closePath();
	this.shape_2.setTransform(-130.55,227);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-17,38.2).curveTo(-16.5,35.2,-14.7,30.2).curveTo(-13.2,26.1,-11.5,22.4).curveTo(-10.4,19.9,-6.8,14).lineTo(-3.5,8.5).lineTo(-8.5,13.6).curveTo(-13.7,19.2,-14.8,21.7).curveTo(-18.2,29.1,-20.6,32.7).curveTo(-25.6,40.4,-29.1,38.6).curveTo(-29.7,38,-29.9,36.9).curveTo(-30.4,34.6,-28.8,31.6).curveTo(-30.2,32.6,-31.6,32.8).curveTo(-34.5,33,-34.2,28.7).curveTo(-34,23.8,-32.9,18.3).curveTo(-31.8,13.4,-31,11.8).lineTo(-24.7,1.6).lineTo(-28.2,4.6).curveTo(-31.7,7.9,-32.4,9.3).curveTo(-33,10.4,-34.9,17.2).curveTo(-37.3,23,-40.5,21).curveTo(-40.4,17.3,-39.9,13.1).curveTo(-38.9,4.5,-36.8,1.6).curveTo(-34.8,-1.4,-29.4,-6.3).lineTo(-24.4,-10.5).curveTo(-15.2,-24.8,-7.5,-35.4).curveTo(-6.9,-36.1,-5.8,-36.9).curveTo(-3.6,-38.6,-1,-39.7).curveTo(7.6,-42.9,17.4,-38).curveTo(23.6,-34.9,28.5,-26.3).curveTo(31,-21.9,32.2,-18.2).lineTo(33.7,-14.9).curveTo(35.3,-10.7,35.7,-6.1).curveTo(36.2,-1.6,38.3,6.9).lineTo(40.5,15.8).curveTo(40.6,16.6,39.6,17.5).curveTo(38.6,18.4,37.1,18.5).curveTo(33.1,18.8,30.2,12.2).curveTo(28.6,8.3,27.1,2).curveTo(26.2,-1.9,22.9,-6.5).lineTo(4.6,16.6).lineTo(-2.2,26.5).curveTo(-8.6,35.9,-10.1,37.8).curveTo(-12.1,40.5,-14.8,40.9).lineTo(-15.4,41).curveTo(-17.5,41,-17,38.2).closePath();
	this.shape_3.setTransform(-108.4152,209.8551);

	this.instance = new lib.Group_1();
	this.instance.setTransform(272.55,207.7,1,1,0,0,0,283.8,1);
	this.instance.alpha = 0.6094;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Group_1_0();
	this.instance_1.setTransform(370.6,290,1,1,0,0,0,207.5,2.1);
	this.instance_1.alpha = 0.5117;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Group_2();
	this.instance_2.setTransform(-230.85,290,1,1,0,0,0,343.2,2.1);
	this.instance_2.alpha = 0.5117;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Group_3();
	this.instance_3.setTransform(-340.95,207.7,1,1,0,0,0,217.6,1);
	this.instance_3.alpha = 0.6094;
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Group_1_1();
	this.instance_4.setTransform(2.1,237.55,1,1,0,0,0,576,67.8);
	this.instance_4.alpha = 0.25;
	this.instance_4.compositeOperation = "multiply";

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#CAB285").beginStroke().moveTo(-529.5,-9).lineTo(538.6,-9).lineTo(542.3,-3).lineTo(-526,-3).lineTo(-542.3,9).closePath();
	this.shape_4.setTransform(-2.05,178.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#BEA36F").beginStroke().moveTo(-576,67.7).lineTo(-576,-8.4).lineTo(-533.7,-67.7).lineTo(534.4,-67.7).lineTo(576,-1.4).lineTo(576,67.7).closePath();
	this.shape_5.setTransform(2.1,237.425);

	this.instance_5 = new lib.Path_13();
	this.instance_5.setTransform(62.65,102.35,1,1,0,0,0,15,1);
	this.instance_5.alpha = 0.5313;
	this.instance_5.compositeOperation = "multiply";

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#D5A690").beginStroke().moveTo(-11.1,3.3).curveTo(-9.2,2.7,-5.2,2.1).lineTo(-2.3,1.7).lineTo(0.4,1.2).lineTo(5.7,-1.2).curveTo(8.6,-2.8,11.1,-3.7).curveTo(9.3,-2,6.4,-0).lineTo(3.9,1.7).lineTo(1.1,3.1).curveTo(0.3,3.4,-2.1,3.6).lineTo(-5.1,3.7).curveTo(-8.6,3.7,-11.1,3.3).closePath();
	this.shape_6.setTransform(125.675,94.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#D5A690").beginStroke().moveTo(9.4,0).curveTo(5.4,-2.4,1.3,-3.2).curveTo(-2.7,-4.1,-7.5,-3.8).curveTo(-11.7,-3.5,-16.3,-2.3).curveTo(-12.7,-4.5,-7.6,-5.4).curveTo(-2.9,-6.1,1.7,-5.2).curveTo(4.1,-4.6,6.2,-3.7).curveTo(8.4,-2.7,10.3,-1.3).curveTo(14,1.6,16.3,5.7).curveTo(12.9,2.2,9.4,0).closePath();
	this.shape_7.setTransform(-127.275,78.4346);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-10.1,10.1).curveTo(-14.2,5.9,-14.2,0).curveTo(-14.2,-5.9,-10.1,-10).curveTo(-5.9,-14.3,0,-14.3).curveTo(5.9,-14.3,10.1,-10).curveTo(14.3,-5.9,14.2,0).curveTo(14.3,5.9,10.1,10.1).curveTo(5.9,14.2,0,14.2).curveTo(-5.9,14.2,-10.1,10.1).closePath();
	this.shape_8.setTransform(-105.25,177.8);

	this.instance_6 = new lib.Path_5_1();
	this.instance_6.setTransform(-37.85,110.25,1,1,0,0,0,23.8,4.2);
	this.instance_6.alpha = 0.5313;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Path_6_1();
	this.instance_7.setTransform(-69.05,6.3,1,1,0,0,0,13.4,52.1);
	this.instance_7.alpha = 0.5313;
	this.instance_7.compositeOperation = "multiply";

	this.instance_8 = new lib.Path_7_1();
	this.instance_8.setTransform(-32.45,56.3,1,1,0,0,0,50,113.8);
	this.instance_8.alpha = 0.2109;
	this.instance_8.compositeOperation = "multiply";

	this.instance_9 = new lib.Path_8_2();
	this.instance_9.setTransform(66.55,67.85,1,1,0,0,0,26.7,112.8);
	this.instance_9.alpha = 0.2109;
	this.instance_9.compositeOperation = "multiply";

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#477A8E").beginStroke().moveTo(0.9,178).curveTo(-28.1,179.1,-50.7,175.7).curveTo(-82,171,-85.4,159.1).curveTo(-89.7,143.8,-80,82.8).curveTo(-77,63.8,-72.9,42.4).lineTo(-69.5,24.9).curveTo(-72.8,8,-76.8,-13.3).curveTo(-84.8,-55.9,-87.8,-77.5).curveTo(-90.8,-99.2,-84.9,-135).curveTo(-83,-146.2,-80.5,-157.5).lineTo(-78.4,-166.5).lineTo(-54.1,-176.2).curveTo(-54.4,-170.8,-55.9,-155.8).curveTo(-56.6,-141.7,-53.5,-132.2).curveTo(-44.5,-104.4,-0.9,-105).curveTo(38.5,-105.5,49.2,-121.2).curveTo(53.1,-127,53.4,-135.4).curveTo(53.5,-140.1,52.1,-149.1).lineTo(45.5,-178.2).lineTo(68,-169.3).curveTo(77.7,-157.1,83.2,-132.5).curveTo(88.1,-110.7,86.8,-94.8).curveTo(85.8,-81.8,75.3,24.9).lineTo(78.1,42.4).curveTo(81.4,63.8,83.9,82.8).curveTo(91.6,143.8,87.2,159.1).curveTo(83.8,171,52.5,175.7).curveTo(35.2,178.2,14.2,178.2).curveTo(7.7,178.2,0.9,178).closePath();
	this.shape_9.setTransform(6.1194,78.9489);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-8.5,18.1).curveTo(-16,14.6,-18.8,6.8).curveTo(-21.6,-0.9,-18.1,-8.4).curveTo(-14.6,-16,-6.8,-18.8).curveTo(0.9,-21.6,8.5,-18.1).curveTo(16,-14.6,18.8,-6.8).curveTo(21.6,0.9,18.1,8.5).curveTo(14.6,16,6.8,18.8).curveTo(3.4,20,-0,20).curveTo(-4.3,20,-8.5,18.1).closePath();
	this.shape_10.setTransform(-129.0423,79.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#477A8E").beginStroke().moveTo(-2.2,-0.2).lineTo(2.2,0).curveTo(2,0.2,1.2,0.2).curveTo(0.1,0.2,-2.2,-0.2).closePath();
	this.shape_11.setTransform(-55.2,26.9491);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#D5A690").beginStroke().moveTo(-16.1,26.8).curveTo(-13.4,16.9,-16.2,4.4).curveTo(-17,0.6,-18.3,-3.2).lineTo(-19.5,-6.1).curveTo(-14.2,3.4,-14.3,0.2).curveTo(-14.7,-15.1,-10.7,-35).lineTo(-6.6,-51.7).curveTo(-5.6,-15.3,-5.4,-13.3).curveTo(-5.3,-12.1,8.9,6.5).lineTo(23.2,24.9).lineTo(-7.3,10.7).lineTo(-23.2,51.7).curveTo(-19.5,39.5,-16.1,26.8).closePath();
	this.shape_12.setTransform(-70,-16.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-45.3,70.1).curveTo(-27.9,-16.6,-25.2,-28.1).curveTo(-24.8,-32.9,-23.6,-40.7).curveTo(-20.6,-59.9,-8.5,-71.9).curveTo(3.6,-83.9,17.7,-81.7).curveTo(31.8,-79.5,39.6,-64.4).curveTo(47.4,-49.3,44.4,-30.1).curveTo(43.1,-21.6,35.8,-15.6).curveTo(26.6,-9.5,22.5,-5.8).lineTo(-7.2,82).closePath();
	this.shape_13.setTransform(-102.5833,2.4046);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-2.3,44.9).curveTo(-11.3,18.3,-17.6,2.4).curveTo(-23.1,-11.9,-27.1,-35.1).lineTo(-30,-55.3).lineTo(-5.3,-66.7).lineTo(7.6,-68.5).lineTo(14.6,-52.8).curveTo(22,-35.6,24.5,-27.1).curveTo(26.8,-19.7,28.6,23.9).curveTo(29.5,45.7,30,66.1).lineTo(5.5,68.5).curveTo(2.2,58.3,-2.3,44.9).closePath();
	this.shape_14.setTransform(136.8,159.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-12.7,15.5).curveTo(-19,10.2,-19.9,2).curveTo(-20.7,-6.3,-15.5,-12.7).curveTo(-10.2,-19,-2,-19.9).curveTo(6.3,-20.7,12.6,-15.5).curveTo(19.1,-10.2,19.9,-2).curveTo(20.7,6.3,15.5,12.7).curveTo(10.2,19.1,2,19.9).lineTo(-0.3,20).curveTo(-7.1,20,-12.7,15.5).closePath();
	this.shape_15.setTransform(126.05,98.8809);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#D5A690").beginStroke().moveTo(5.8,44.7).lineTo(-25.4,50.4).curveTo(6.3,-0,6.7,-2).curveTo(7.1,-3.9,3.1,-57.8).lineTo(5,-53.8).curveTo(7.5,-48.5,9.4,-42).curveTo(15.7,-21.4,15.1,3.1).curveTo(15,7.1,16.3,8.7).curveTo(18.8,11.7,25.4,4).curveTo(24.3,5.4,22.7,8).curveTo(19.3,13.2,16.8,19.2).curveTo(8.4,38.2,9.7,57.8).closePath();
	this.shape_16.setTransform(79.7,-17.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-19.1,31.5).curveTo(-28.4,1.6,-27.7,-5.5).curveTo(-27,-12.7,-10.3,-37.1).curveTo(-1.9,-49.3,6.3,-60).lineTo(17.9,-53.9).lineTo(20.5,-37.2).curveTo(23.2,-18,24,-5.5).lineTo(27.7,50.2).lineTo(-9.7,60).curveTo(-14.5,46.5,-19.1,31.5).closePath();
	this.shape_17.setTransform(115.8254,40.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-26.2,-6.8).curveTo(-31.6,-13.5,-34.6,-22.3).curveTo(-37.7,-31.6,-37.7,-41.9).curveTo(-37.7,-61.3,-27.6,-75.1).curveTo(-17.5,-88.8,-3.3,-88.8).curveTo(11.4,-88.8,21,-76.3).curveTo(31,-63.3,30,-43.7).curveTo(29.8,-39,28.8,-31.9).lineTo(27.2,-20).curveTo(28.1,-8.2,37.7,79).lineTo(0.3,88.8).closePath();
	this.shape_18.setTransform(105.875,12.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#D5A690").beginStroke().moveTo(-34.7,41.7).curveTo(-42.1,38.2,-56.2,22.8).curveTo(-67.6,10.4,-70.6,5.4).curveTo(-72.3,2.7,-71.6,-5.1).curveTo(-70.8,-13.2,-68.3,-16.9).curveTo(-66.1,-20,-62.3,-29.7).lineTo(-59,-38.7).lineTo(-52,-43.2).lineTo(-53.6,-32.8).curveTo(-54.7,-20.3,-52,-10).curveTo(-43.2,23.1,0.6,22.3).curveTo(44.7,21.4,52.6,1.6).curveTo(55.3,-5.3,54,-15.9).curveTo(52,-27.4,51.4,-32.1).curveTo(50,-44.2,60.8,-25).curveTo(64.6,-18.2,68.3,-10.4).curveTo(71.8,-3,71.8,-1.9).curveTo(71.8,3,69.3,10.7).curveTo(65.7,22.2,58.7,27.2).curveTo(50.2,33.3,12.2,39.4).curveTo(-11.3,43.2,-23.6,43.2).curveTo(-31.5,43.2,-34.7,41.7).closePath();
	this.shape_19.setTransform(3.8102,-51.2195);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FDE4C8").beginStroke().moveTo(0,99.7).lineTo(-64.7,100.8).curveTo(-70.7,81.5,-76.2,56.6).curveTo(-87.4,6.8,-85.3,-21.3).curveTo(-83.3,-49.3,-87.4,-55.4).curveTo(-88.6,-57.2,-90.4,-56.7).lineTo(-91.9,-55.8).lineTo(-111.3,-65.8).lineTo(-112.5,-66.8).lineTo(-108.6,-69.2).curveTo(-103.5,-72.1,-97.4,-74.2).curveTo(-91.5,-76.3,-62.3,-87.9).lineTo(-31.6,-100.2).curveTo(-28,-101.5,4.4,-100.3).curveTo(28,-101.5,31.6,-100.2).lineTo(62.3,-87.9).curveTo(91.5,-76.3,97.4,-74.2).curveTo(103.5,-72.1,108.6,-69.2).curveTo(111.2,-67.8,112.5,-66.8).lineTo(111.3,-65.8).lineTo(91.9,-55.8).curveTo(89.4,-58.4,87.4,-55.4).curveTo(83.3,-49.3,85.3,-21.3).curveTo(87.4,6.8,76.2,56.6).curveTo(70.7,81.5,64.7,100.8).closePath();
	this.shape_20.setTransform(4.375,-5.3949);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#477A8E").beginStroke().moveTo(-45.7,9.8).curveTo(-64.7,5.7,-64.7,0).curveTo(-64.7,-5.7,-45.7,-9.7).curveTo(-26.8,-13.8,-0,-13.8).curveTo(26.8,-13.8,45.8,-9.7).curveTo(64.7,-5.7,64.7,0).curveTo(64.7,5.7,45.8,9.8).curveTo(26.8,13.8,-0,13.8).curveTo(-26.8,13.8,-45.7,9.8).closePath();
	this.shape_21.setTransform(4.4,95.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFAFAF").beginStroke().moveTo(-4.4,1.9).curveTo(-10.2,1.3,-14.7,-0.4).lineTo(-15.1,0.7).curveTo(-15.6,-0.4,-14.7,-1.3).curveTo(-14.3,-1.8,-13.7,-2).curveTo(-14.2,-1.5,-14.6,-0.6).curveTo(-13,-0.4,-9.3,-0.7).lineTo(-4.4,-1.1).curveTo(-3.2,-1.1,-1.4,-0.5).lineTo(0.2,0.2).curveTo(0.4,0.2,2.2,-0.7).curveTo(4.2,-1.5,5.6,-1.3).lineTo(10.1,-0.9).lineTo(14.5,-0.7).curveTo(14,-1.7,13.7,-1.9).lineTo(14.7,-1.2).curveTo(15.6,-0.3,15.1,0.8).lineTo(14.6,-0.5).curveTo(7.3,2,-0.3,2).curveTo(-2.3,2,-4.4,1.9).closePath();
	this.shape_22.setTransform(2.925,-157.4536);

	this.instance_10 = new lib.Path_1_6();
	this.instance_10.setTransform(2.85,-156.2,1,1,0,0,0,14.5,1.8);
	this.instance_10.alpha = 0.4297;
	this.instance_10.compositeOperation = "multiply";

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFAFAF").beginStroke().moveTo(-10.7,0.1).lineTo(-14.4,-3.9).lineTo(-10.2,-3.3).curveTo(-5.3,-2.6,-1.9,-2.3).curveTo(1.6,-2,8.4,-3).curveTo(11.8,-3.5,14.4,-4.1).curveTo(13.2,-2.1,10.8,0).curveTo(6,4.1,0,4.1).curveTo(-5.9,4.1,-10.7,0.1).closePath();
	this.shape_23.setTransform(3.025,-153.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-2.1,3).lineTo(-4.6,1.7).curveTo(-5.2,1.4,-6.4,1.2).curveTo(-7.3,1.1,-7.8,0.3).curveTo(-8.2,-0.2,-7.7,-1.8).lineTo(-7.2,-3.3).lineTo(-7.1,-2.5).curveTo(-7,-1.6,-6.7,-1.1).curveTo(-6.1,-0.2,0.4,1.1).curveTo(0.8,1.1,3.3,0.3).curveTo(5.9,-0.6,6.5,-1).curveTo(7.4,-1.6,7,-3.5).lineTo(7.7,-2.2).curveTo(8.3,-0.6,7.7,0.3).curveTo(7.3,1,6.6,1.1).curveTo(5.7,1.2,5.2,1.5).lineTo(3,2.9).curveTo(1.6,3.5,0.5,3.6).curveTo(-0.8,3.6,-2.1,3).closePath();
	this.shape_24.setTransform(2.6801,-171);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#080808").beginStroke().moveTo(-5.6,-1.1).curveTo(-3.1,-2.5,-0,-2.6).curveTo(1.3,-2.7,2.8,-2.4).curveTo(4.3,-2.1,5.5,-1.4).curveTo(8.2,0,9.6,2.4).curveTo(5.1,-1.4,-0,-1.1).curveTo(-2.9,-1,-5.1,-0.1).curveTo(-7.6,0.9,-9.6,2.7).curveTo(-8.3,0.4,-5.6,-1.1).closePath();
	this.shape_25.setTransform(25.9,-201.0536);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#080808").beginStroke().moveTo(-2.6,2.5).curveTo(-3.7,1.5,-3.8,0.1).curveTo(-3.8,-1.3,-2.8,-2.3).curveTo(-1.7,-3.4,-0.1,-3.4).curveTo(1.5,-3.4,2.6,-2.5).curveTo(3.7,-1.5,3.7,-0.1).curveTo(3.8,1.3,2.7,2.3).curveTo(1.6,3.4,0.1,3.4).lineTo(-0.1,3.4).curveTo(-1.5,3.4,-2.6,2.5).closePath();
	this.shape_26.setTransform(25.95,-199.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#080808").beginStroke().moveTo(0.2,3.7).curveTo(-2.2,3.6,-4.8,2.9).curveTo(-7.5,2,-9.6,1).lineTo(-9.7,0.9).lineTo(-9.6,0.8).curveTo(-7.9,-1.2,-5.2,-2.4).curveTo(-2.9,-3.5,0.1,-3.6).curveTo(2.9,-3.8,5.4,-2.6).curveTo(7.3,-1.7,8.8,-0.3).curveTo(7.4,-1.6,5.4,-2.5).curveTo(2.8,-3.6,0.1,-3.5).curveTo(-2.9,-3.3,-5.2,-2.2).curveTo(-7.6,-1.2,-9.3,0.8).curveTo(-7.3,1.9,-4.7,2.7).curveTo(-2.2,3.4,0.2,3.5).curveTo(2.8,3.6,5.2,2.9).curveTo(7.4,2.3,9.7,0.7).curveTo(7.6,2.3,5.2,3).curveTo(3.1,3.7,0.8,3.7).lineTo(0.2,3.7).closePath();
	this.shape_27.setTransform(25.85,-199.3528);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,3.2).curveTo(-5.4,2.7,-7.7,1.8).lineTo(-9.6,0.9).lineTo(-7.1,-1.3).curveTo(-3.8,-3.5,0.5,-3.6).curveTo(4.1,-3.6,7.2,-1.5).curveTo(8.8,-0.4,9.6,0.7).curveTo(5.8,3.6,0.9,3.6).curveTo(-1,3.6,-3.1,3.2).closePath();
	this.shape_28.setTransform(25.925,-199.3611);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#080808").beginStroke().moveTo(5,-0.1).curveTo(2.8,-1,-0.1,-1.1).curveTo(-5.2,-1.4,-9.6,2.5).curveTo(-8.3,0.1,-5.6,-1.3).curveTo(-4.4,-1.9,-2.9,-2.3).curveTo(-1.4,-2.6,0,-2.6).curveTo(3.1,-2.4,5.5,-1.1).curveTo(8.1,0.2,9.6,2.6).curveTo(7.5,0.8,5,-0.1).closePath();
	this.shape_29.setTransform(-20.3,-201.1536);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#080808").beginStroke().moveTo(-0.1,3.4).curveTo(-1.6,3.4,-2.7,2.4).curveTo(-3.8,1.3,-3.7,-0.1).curveTo(-3.7,-1.5,-2.6,-2.5).curveTo(-1.5,-3.4,0.1,-3.4).curveTo(1.6,-3.4,2.7,-2.3).curveTo(3.8,-1.3,3.8,0.1).curveTo(3.7,1.5,2.6,2.5).curveTo(1.5,3.4,0,3.4).lineTo(-0.1,3.4).closePath();
	this.shape_30.setTransform(-20.35,-199.3238);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#080808").beginStroke().moveTo(-5.2,3.1).curveTo(-7.5,2.3,-9.7,0.8).curveTo(-7.4,2.4,-5.2,3).curveTo(-2.8,3.6,-0.1,3.5).curveTo(2,3.4,4.8,2.6).curveTo(7.2,1.9,9.3,0.7).curveTo(7.7,-1.1,5.1,-2.3).curveTo(2.7,-3.4,-0.1,-3.5).curveTo(-2.9,-3.6,-5.3,-2.5).curveTo(-8,-1.3,-9.7,0.8).curveTo(-8.1,-1.3,-5.4,-2.6).curveTo(-2.9,-3.7,-0.1,-3.7).curveTo(2.7,-3.6,5.2,-2.5).curveTo(7.9,-1.3,9.5,0.7).lineTo(9.7,0.8).lineTo(9.5,0.9).curveTo(7.3,2.1,4.8,2.8).curveTo(2.3,3.6,-0.1,3.6).lineTo(-1.1,3.7).curveTo(-3.3,3.7,-5.2,3.1).closePath().moveTo(-9.7,0.8).lineTo(-9.7,0.8).closePath();
	this.shape_31.setTransform(-20.25,-199.4378);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.6,0.8).lineTo(-7.2,-1.4).curveTo(-4.1,-3.6,-0.5,-3.6).curveTo(3.8,-3.6,7.1,-1.4).curveTo(8.7,-0.3,9.5,0.8).curveTo(6.9,2.4,3.1,3.2).curveTo(1.1,3.6,-0.9,3.6).curveTo(-5.8,3.6,-9.6,0.8).closePath();
	this.shape_32.setTransform(-20.35,-199.4071);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#080808").beginStroke().moveTo(5.8,0.7).curveTo(3,-0.1,0.1,-0.3).curveTo(-3,-0.4,-5.7,0.2).curveTo(-6.5,0.3,-8.5,0.9).curveTo(-10.5,1.6,-11.5,1.9).curveTo(-10.3,0.6,-9.1,-0.2).curveTo(-7,-1.5,-6.2,-1.7).curveTo(-3.3,-2.9,0.2,-2.8).curveTo(3.6,-2.5,6.5,-1.1).curveTo(9.7,0.5,11.5,2.8).curveTo(8.6,1.5,5.8,0.7).closePath();
	this.shape_33.setTransform(25.15,-210.008);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#080808").beginStroke().moveTo(-6.5,-1.1).curveTo(-3.5,-2.7,-0.3,-2.8).curveTo(3.1,-3.1,6.1,-1.9).curveTo(6.8,-1.7,9,-0.5).curveTo(10.1,0.2,11.5,1.5).lineTo(8.5,0.6).curveTo(6.3,0,5.6,-0).curveTo(3.1,-0.5,-0.2,-0.4).curveTo(-3.1,-0.1,-5.8,0.7).curveTo(-8.5,1.5,-11.4,2.9).curveTo(-9.7,0.5,-6.5,-1.1).closePath();
	this.shape_34.setTransform(-20.75,-209.705);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#080808").beginStroke().moveTo(-0.7,3.8).curveTo(-1.4,-0.1,-1.4,-3.5).curveTo(-1.6,-8.3,-1.2,-13.7).curveTo(-1.4,-8.6,-0.9,-3.6).lineTo(-0.2,3.7).curveTo(0.5,9.1,1.5,13.7).curveTo(0.2,9,-0.7,3.8).closePath();
	this.shape_35.setTransform(46.3417,-230.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#080808").beginStroke().moveTo(-0.6,3.1).curveTo(-0.6,0.3,-0.2,-3.2).lineTo(0.7,-12.1).lineTo(0.3,-3.2).lineTo(-0.2,3.2).curveTo(-0.5,7.6,-0.8,12.1).lineTo(-0.6,3.1).closePath();
	this.shape_36.setTransform(-45.5,-228.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#080808").beginStroke().moveTo(0.6,2.2).lineTo(0.1,-2.3).curveTo(-0.2,-5.2,-1,-8.5).curveTo(0.1,-5.2,0.5,-2.3).curveTo(1,-0.1,1,2.2).curveTo(1.1,5.5,0.6,8.5).curveTo(0.8,5.7,0.6,2.2).closePath();
	this.shape_37.setTransform(38.3591,-243.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#080808").beginStroke().moveTo(-2.6,2).lineTo(3,-1.5).curveTo(6.9,-3.9,10.6,-6.7).curveTo(6.6,-3.3,3.3,-0.9).curveTo(0.8,0.8,-2.3,2.5).curveTo(-5.9,4.5,-10.6,6.6).curveTo(-6.2,4.3,-2.6,2).closePath();
	this.shape_38.setTransform(32.625,-245.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#080808").beginStroke().moveTo(7.5,2.2).curveTo(5.7,0.5,4,-0.6).curveTo(1.2,-2.3,-1.6,-3.7).curveTo(-3.4,-4.4,-5.8,-5).curveTo(-7.9,-5.6,-10.3,-5.5).curveTo(-8.1,-5.8,-5.7,-5.7).curveTo(-3.1,-5.4,-1.1,-4.8).curveTo(2.2,-3.8,4.7,-1.6).curveTo(6.4,-0.2,7.9,1.8).curveTo(9.4,3.7,10.3,5.8).curveTo(9.2,3.9,7.5,2.2).closePath();
	this.shape_39.setTransform(54.775,-261.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#080808").beginStroke().moveTo(10.7,0.3).curveTo(7.4,-0.6,4.5,-0.8).curveTo(-0.1,-1.3,-4.4,-1.2).curveTo(-7.1,-1.2,-10.6,-0.7).curveTo(-13.9,-0.2,-16.7,0.7).curveTo(-13.8,-0.4,-10.7,-1.2).curveTo(-7.1,-1.9,-4.4,-2.1).curveTo(0.2,-2.5,4.7,-1.7).curveTo(7.1,-1.3,10.8,-0.2).curveTo(14.3,1.1,16.7,2.2).curveTo(13.8,1,10.7,0.3).closePath();
	this.shape_40.setTransform(-9.7,-296.8783);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#080808").beginStroke().moveTo(0.3,10.4).curveTo(-0.5,7.6,-1.2,4.5).curveTo(-2.1,0.5,-2.3,-4).curveTo(-2.5,-7.9,-2.5,-15.9).curveTo(-1.9,-7.1,-1.5,-4).lineTo(-0.4,4.4).curveTo(-0.1,6.9,0.7,10.3).curveTo(1.5,13.2,2.5,15.9).curveTo(1.2,13,0.3,10.4).closePath();
	this.shape_41.setTransform(-56.825,-222.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#080808").beginStroke().moveTo(-4.1,5.2).curveTo(-4.1,-0.7,-2.9,-6.8).curveTo(-1.9,-11.6,-0.5,-14.8).curveTo(1.3,-18.9,4.1,-21.8).curveTo(1.6,-18.8,0.1,-14.6).curveTo(-1.1,-11.2,-1.8,-6.6).curveTo(-2.6,-0.2,-2.9,5.2).curveTo(-3.4,13.5,-2.5,21.8).curveTo(-4.1,13.5,-4.1,5.2).closePath();
	this.shape_42.setTransform(-57.426,-242.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#080808").beginStroke().moveTo(-4.2,1.2).curveTo(-2.5,-1.9,-0,-4.3).curveTo(3.5,-7.6,7.6,-10).curveTo(4,-7.1,1,-3.4).lineTo(-3.1,1.8).curveTo(-5.8,5.6,-7.6,9.9).curveTo(-6.4,5.4,-4.2,1.2).closePath();
	this.shape_43.setTransform(-55.1,-261.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#080808").beginStroke().moveTo(-8.6,11.4).curveTo(-5.8,9.6,-1.9,6.5).curveTo(0.3,4.4,6.2,-1.8).curveTo(8.8,-4.7,11.5,-8.2).curveTo(14.5,-12.4,16,-15.2).curveTo(14.8,-11.8,12.5,-7.6).curveTo(10.5,-4,8,-0.4).curveTo(6.1,2.4,4.1,4.3).curveTo(1.9,6.8,-0.6,8.4).curveTo(-5,11,-8,12.4).curveTo(-12.2,14.5,-16,15.3).curveTo(-12.4,13.9,-8.6,11.4).closePath();
	this.shape_44.setTransform(16.2,-250.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#080808").beginStroke().moveTo(-17.5,7.8).curveTo(-21.9,7.3,-28.8,5.9).curveTo(-21.3,6.6,-17.5,6.6).lineTo(-11.9,6.4).lineTo(-6.3,5.9).curveTo(2.3,4.6,9.2,2.5).curveTo(14.6,0.8,19.4,-1.9).curveTo(24.1,-4.5,28.8,-8.2).curveTo(24.5,-4,20.1,-0.9).curveTo(15.4,2.4,10,4.7).curveTo(2.5,7.9,-6.1,8.2).closePath();
	this.shape_45.setTransform(-11.125,-243.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#080808").beginStroke().moveTo(1.2,4.4).curveTo(1.9,0.2,1.5,-4.1).curveTo(0.9,-10.5,-2.7,-15.6).curveTo(1.7,-10.9,3.2,-4.4).curveTo(4.3,0.2,2.9,4.8).curveTo(1,11.2,-3.7,15.6).curveTo(0.2,10.7,1.2,4.4).closePath();
	this.shape_46.setTransform(48.7093,-272.125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#080808").beginStroke().moveTo(-14,3.9).curveTo(-11,0.8,-7.7,-1.7).curveTo(-2.9,-5.3,2.9,-7.4).curveTo(6.7,-8.6,11,-9.5).curveTo(15,-10.2,19.3,-10.3).curveTo(15.2,-9.9,11.1,-9).curveTo(6.6,-7.7,3.3,-6.3).curveTo(-2,-4,-7,-0.8).curveTo(-10,1.2,-13.6,4.2).curveTo(-16.8,7.1,-19.3,10.3).curveTo(-16.9,6.8,-14,3.9).closePath();
	this.shape_47.setTransform(-32.325,-284.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#080808").beginStroke().moveTo(-6.5,-2.7).curveTo(-1.5,-4.2,4.8,-4.5).curveTo(10.1,-4.8,20.8,-4.4).curveTo(9.4,-3.9,4.9,-3.4).curveTo(-1.6,-2.6,-6.3,-1.6).curveTo(-14.6,0.3,-20.8,4.6).curveTo(-14.9,-0.1,-6.5,-2.7).closePath();
	this.shape_48.setTransform(-19.825,-292.5981);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#080808").beginStroke().moveTo(-0.4,13.2).curveTo(0.3,9.7,0.6,5.6).curveTo(1,0.1,0.9,-5.4).curveTo(0.8,-8.7,0.4,-13.1).curveTo(-0.1,-16.9,-1,-20.8).curveTo(0.3,-16.4,0.9,-13.2).curveTo(1.6,-9.7,2,-5.5).curveTo(2.4,0.2,1.6,5.7).curveTo(1.1,9.3,0.2,13.3).curveTo(-0.6,16.4,-2.1,20.8).curveTo(-1,16.7,-0.4,13.2).closePath();
	this.shape_49.setTransform(59.781,-236.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#080808").beginStroke().moveTo(9.3,6).curveTo(8.3,2.3,6.9,-0.2).curveTo(4.4,-4.9,1.6,-7.8).curveTo(-0.7,-10.2,-3.8,-11.5).curveTo(-6.6,-12.6,-10.4,-12.5).curveTo(-6.5,-13.1,-3.5,-12.4).curveTo(-0,-11.5,2.9,-9.2).curveTo(6.8,-6.2,8.7,-1).curveTo(9.7,1.8,10.3,5.9).curveTo(10.6,8.9,10.3,12.8).curveTo(10.1,9.2,9.3,6).closePath();
	this.shape_50.setTransform(52.9875,-254.5833);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#080808").beginStroke().moveTo(10.3,7.6).curveTo(9.5,4,7.8,0.6).curveTo(5.1,-4.4,1.7,-8.1).curveTo(-3.5,-13.6,-11.3,-15.2).curveTo(-3.1,-14.7,3.2,-9.6).curveTo(7.7,-6,9.8,-0.2).curveTo(11.1,3.4,11.3,7.5).curveTo(11.6,12,10.1,15.2).curveTo(11.1,12,10.3,7.6).closePath();
	this.shape_51.setTransform(39.3929,-277.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#080808").beginStroke().moveTo(15.9,3.2).curveTo(11.8,0.5,7.7,-1.3).curveTo(1.8,-3.9,-4.8,-6).curveTo(-13.3,-8.6,-23.3,-8.7).curveTo(-13.3,-9.7,-4.3,-7.9).curveTo(2.5,-6.5,8.6,-3.1).curveTo(12.7,-0.7,16.5,2.4).curveTo(20.4,5.6,23.3,9).curveTo(20.3,6.1,15.9,3.2).closePath();
	this.shape_52.setTransform(20.975,-290.2891);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#080808").beginStroke().moveTo(-49.9,46.1).lineTo(-53,42.4).curveTo(-54.2,38.7,-55.7,33.2).curveTo(-58.5,22.2,-59.7,12.7).curveTo(-61.1,0.8,-58.1,-10.1).curveTo(-57.1,-13.5,-55.8,-16.4).lineTo(-54.7,-18.6).lineTo(-60.8,-11.7).curveTo(-56.1,-21.3,-52,-26.9).curveTo(-47.1,-33.6,-40.8,-38).curveTo(-31.6,-44.4,-21.6,-48.1).curveTo(-16.6,-49.9,-13.5,-50.5).lineTo(-29.3,-48.4).curveTo(-19.7,-52.5,-4.8,-52.5).curveTo(14,-52.6,31.4,-45.4).curveTo(44.6,-39.8,49.2,-30.3).curveTo(51.5,-25.5,51.2,-21.8).curveTo(55.2,-18.8,57.5,-14.9).curveTo(59.9,-10.8,60.5,-5.3).curveTo(61.9,7,57.9,26.2).curveTo(55.9,35.8,53.6,42.9).curveTo(51.5,43.7,49.9,46.9).lineTo(48.7,49.9).curveTo(48.4,38.2,47.9,32.7).lineTo(46.3,16).lineTo(45.1,5.5).lineTo(44.3,10.7).lineTo(43.4,0.4).lineTo(41.5,6.8).curveTo(40.3,10.3,38.9,12.4).curveTo(40.4,8.8,39.6,2.4).lineTo(38.5,-3.2).lineTo(19.5,7).lineTo(28.5,-2.3).lineTo(11.7,9).lineTo(18.9,-1.7).curveTo(14.4,3,3.2,7.2).lineTo(-7.2,10.5).curveTo(-1.7,7.4,3.7,3.3).curveTo(-1,4.7,-8.3,5.9).curveTo(-17,7.4,-23,7.4).curveTo(-28,7.4,-37.3,6.4).curveTo(-44.5,5.6,-44.7,5.9).curveTo(-46,8.6,-46.1,30.8).curveTo(-46.1,42,-45.9,52.6).curveTo(-46.7,50.3,-49.9,46.1).closePath();
	this.shape_53.setTransform(-0.1547,-245.2007);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-7.8,0.2).curveTo(-5.1,-3,-0.7,-3.3).curveTo(2.7,-3.5,5.6,-1.7).curveTo(8.4,0,9.6,3).lineTo(-9.6,3.3).closePath();
	this.shape_54.setTransform(25.9,-201.7353);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-7.8,0.2).curveTo(-5.1,-3,-0.7,-3.3).curveTo(2.7,-3.5,5.6,-1.7).curveTo(8.4,-0,9.6,3).lineTo(-9.6,3.3).closePath();
	this.shape_55.setTransform(-20.45,-202.2402);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#FDE4C8").beginStroke().moveTo(1.3,68.6).curveTo(-9.6,68.8,-25.2,54.7).curveTo(-39.9,41.5,-42.9,31.3).curveTo(-45.3,23.4,-46.7,10.7).lineTo(-47.7,-0.4).lineTo(-49.4,-21.2).curveTo(-50.9,-42.2,-50.5,-42.9).curveTo(-50,-43.5,-47.2,-49.1).curveTo(-44.1,-54.8,-42.4,-56.3).curveTo(-33.7,-63.6,-24.4,-65.1).curveTo(-5.4,-68.1,0,-68.6).curveTo(5.2,-68.1,24.4,-65.1).curveTo(33.7,-63.6,42.4,-56.3).curveTo(44.1,-54.8,47.2,-49.1).lineTo(50.4,-42.9).curveTo(50.9,-42.2,49.3,-21.2).lineTo(47.6,-0.4).lineTo(46.7,10.7).curveTo(45.4,23.4,42.9,31.3).curveTo(39.9,41.8,26.5,54.7).curveTo(12.3,68.6,1.7,68.6).lineTo(1.3,68.6).closePath();
	this.shape_56.setTransform(1.3,-195.0978);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-0.1,31.6).curveTo(-8.9,30.9,-18.9,21.6).curveTo(-22.1,18.6,-26.2,13.9).lineTo(-31.6,7.8).curveTo(-31.6,4.1,-32,0.4).lineTo(-32.3,-2.5).curveTo(-28.3,-11.6,-27.5,-14.2).curveTo(-27,-15.8,-22.8,-20.6).lineTo(-18.7,-25.1).lineTo(-10.8,-28.4).curveTo(-2.4,-31.6,-0.8,-31.6).curveTo(1.8,-31.6,22.3,-28.6).lineTo(23.8,-29.8).curveTo(25.6,-30.7,27,-29.5).curveTo(31.7,-25.7,32,-2).curveTo(32.1,4.3,32.3,8.6).curveTo(22.7,20.2,18,24.2).curveTo(9.3,31.6,1.2,31.6).lineTo(-0.1,31.6).closePath();
	this.shape_57.setTransform(1.4,-146.3757);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-19.6,46.5).lineTo(-39.4,22.8).curveTo(-32.5,18.1,-32,-4.8).curveTo(-31.8,-12,-32.3,-20.1).lineTo(-32.8,-26.8).curveTo(-28.8,-36,-28,-38.6).curveTo(-27.5,-40.2,-23.3,-45).lineTo(-19.2,-49.5).lineTo(-11.3,-52.7).curveTo(-2.9,-56,-1.3,-56).curveTo(1.3,-56,21.8,-52.9).lineTo(23.3,-54.1).curveTo(25.1,-55,26.5,-53.9).curveTo(31.2,-50.1,31.5,-26.4).curveTo(31.8,-1.3,35.5,11.7).curveTo(37.5,18.2,39.4,19.7).lineTo(22.3,44.6).curveTo(14.9,55.4,1.8,56).lineTo(0.4,56).curveTo(-11.7,56,-19.6,46.5).closePath();
	this.shape_58.setTransform(1.9,-122.0081);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#EFC7B0").beginStroke().moveTo(3.5,8.7).curveTo(3,8.6,2.7,8.4).curveTo(0.4,6.6,-0.8,4.9).curveTo(-4.2,0,-4.2,-5.7).curveTo(-4.2,-6.8,-3.8,-7.5).curveTo(-3.3,-8.5,-2.1,-8.7).curveTo(-0.8,-8.8,0.1,-7.8).curveTo(0.5,-7.3,0.9,-5.9).lineTo(2.4,-0.8).curveTo(2.6,0.3,2.6,0.7).lineTo(2.4,1.6).lineTo(2.3,1.8).curveTo(2,3.1,2.7,5).lineTo(4.1,8).lineTo(4.1,8.5).curveTo(4,8.7,3.6,8.7).lineTo(3.5,8.7).closePath();
	this.shape_59.setTransform(-51.1417,-183.8562);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-5.9,5.8).curveTo(-9.8,-2.8,-8.5,-9.9).curveTo(-7.6,-14.6,-4.7,-15.9).curveTo(-3.3,-16.5,-2,-16.2).lineTo(-2,-19.2).lineTo(0.8,-16.8).curveTo(3.8,-14.4,4.3,-13.9).curveTo(5.1,-13.1,8.4,-2.9).lineTo(8.8,19.2).curveTo(-1.1,16.3,-5.9,5.8).closePath();
	this.shape_60.setTransform(-51.2219,-186.025);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#EFC7B0").beginStroke().moveTo(-4.1,8.5).lineTo(-4.1,8).lineTo(-2.7,5).curveTo(-2,3.1,-2.3,1.8).lineTo(-2.4,1.6).lineTo(-2.6,0.7).curveTo(-2.6,0.2,-2.3,-0.8).lineTo(-0.9,-5.9).curveTo(-0.5,-7.3,-0,-7.8).curveTo(0.8,-8.8,2.1,-8.7).curveTo(3.3,-8.5,3.8,-7.5).curveTo(4.2,-6.8,4.2,-5.7).curveTo(4.2,-0,0.8,4.9).curveTo(-0.3,6.6,-2.6,8.4).lineTo(-3.4,8.7).lineTo(-3.6,8.7).curveTo(-4,8.7,-4.1,8.5).closePath();
	this.shape_61.setTransform(51.4917,-183.8562);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#FDE4C8").beginStroke().moveTo(-8.4,-2.9).lineTo(-6.6,-8.1).curveTo(-4.8,-13.4,-4.3,-13.9).curveTo(-3.5,-14.7,2,-19.2).lineTo(2,-16.2).lineTo(4.8,-15.9).curveTo(7.7,-14.6,8.5,-9.9).curveTo(9.8,-2.8,5.9,5.8).curveTo(1.1,16.3,-8.8,19.2).closePath();
	this.shape_62.setTransform(51.586,-186.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_10},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_5},{t:this.shape_5},{t:this.shape_4},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-574,-299.3,1152.2,604.8);
p.frameBounds = [rect];


// stage content:
(lib.Testfile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Re_start
	this.instance = new lib.ResetBt();
	this.instance.setTransform(1045.2,655,1,1,0,0,0,76.2,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// _30_panel
	this.instance_1 = new lib.Symbol23();
	this.instance_1.setTransform(786.9,387.2,1,1,0,0,0,-0.1,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Graph
	this.instance_2 = new lib.graphMc();
	this.instance_2.setTransform(208.45,532.1,1,1,0,0,0,177.8,155.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3C0000").beginStroke().moveTo(-211,4.5).lineTo(-211,-4.5).lineTo(211,-4.5).lineTo(211,4.5).closePath();
	this.shape.setTransform(211.025,354.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-211,175).lineTo(-211,-175).lineTo(211,-175).lineTo(211,175).closePath();
	mask.setTransform(211,175);

	// Over_Dehydration
	this.instance_3 = new lib.Over_Dehydration();
	this.instance_3.setTransform(202.9,187.3,0.578,0.578,0,0,0,0.2,0.2);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Dehydration
	this.instance_4 = new lib.Dehydration();
	this.instance_4.setTransform(202.9,187.3,0.578,0.578,0,0,0,0.2,0.2);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Steating
	this.instance_5 = new lib.Standing();
	this.instance_5.setTransform(202.9,187.3,0.578,0.578,0,0,0,0.2,0.2);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-594.1,362.1).lineTo(-594.1,-362.1).lineTo(594.1,-362.1).lineTo(594.1,362.1).closePath();
	this.shape_1.setTransform(582.15,348.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// stageBackground
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("rgba(0,0,0,0)").setStrokeStyle(1,1,1,3,true).moveTo(-586,-360).lineTo(586,-360).lineTo(586,360).lineTo(-586,360).closePath();
	this.shape_2.setTransform(576,350);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-586,360).lineTo(-586,-360).lineTo(586,-360).lineTo(586,360).closePath();
	this.shape_3.setTransform(576,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(564,336,1188.3,724.2);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '5FAC3C4D49FFAB4A92C82020BAF07A5B',
	width: 1152,
	height: 700,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"assets/images/CompoundPath_18.png", id:"CompoundPath_18"},
		{src:"assets/images/CompoundPath_27.png", id:"CompoundPath_27"},
		{src:"assets/images/outerCellBitmap.png", id:"outerCellBitmap"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5FAC3C4D49FFAB4A92C82020BAF07A5B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
  console.log('dhfgshdgfjkghsdjkfskdfhjksdhkjfhjk')
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
