(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.logo_mini = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAsIAMg1IgKAAIACgIIAJAAIACgJIADgKQABgDADgCQADgCAGAAIAMACIgCAJIgJgBQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQgCABgBAGIgBAHIAMAAIgCAIIgMAAIgKA1g");
	this.shape.setTransform(16.8,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjArIAAhVIAiAAIAPABQAFABAEADQAEACACAEQADAFAAAFQAAAHgDAFQgEAFgFADQAIABAEAFQAEAGAAAHQAAAGgDAFQgCAGgFADQgFADgHACIgUAAgAgSAdIAQAAIALgBQAEgBADgCQACgDAAgEQAAgFgCgCQgCgDgDgBQgEgCgLAAIgOAAgAgSgHIAMAAIALgBQAFgBACgCQADgCAAgFQAAgEgCgCQgCgDgFAAIgOAAIgKAAg");
	this.shape_1.setTransform(9.9,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4B3F80").s().p("AgJBqIhthsQgJgKAJgJIBZhZIAAAAIABABQAQAMATgKQAEAeAmgKIADgBIBDBDQAFAFAAAEQAAAGgGAEIhsBsQgFAFgFAAQgEAAgFgFg");
	this.shape_2.setTransform(12.4,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_mini, new cjs.Rectangle(0,0,24.8,22.3), null);


(lib.head_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B3F80").s().p("AAADhQgqAAgegeQgegeAAgrIAAjzQAAgrAegeQAegeAqAAIAAAAQArAAAeAeQAeAeAAArIAADzQAAArgeAeQgeAegrAAg");
	this.shape.setTransform(10.3,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.6,45);


(lib.hand_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B3F80").ss(2,0,0,3).p("Ag1AoQgJgRAEgNQAFgKATgQQAMgKAbgMQAZgKAPgDQAXgFgNAOQgLANgbARQgFADAPAPQAQAQgMALQgRAQgbAEQgeAEgKgRg");
	this.shape.setTransform(6,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1AoQgJgRAEgNQAFgKATgQQAMgKAbgMQAZgKAPgDQAXgFgNAOQgLANgbARQgFADAPAPQAQAQgMALQgRAQgbAEIgLAAQgVAAgIgNg");
	this.shape_1.setTransform(6,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,14,13.5);


(lib.cook_head2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B3F80").ss(4,1,1).p("AipglIAHAMQALAPAQAKQAyAmBRAAQBOAAA4gmQAcgRAMgR");
	this.shape.setTransform(33.7,49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B3F80").s().p("AiFAmQgIgPAAgWQAAgUAIgPQAJgPANAAQAMAAAJAPQAJAPAAAUQAAAWgJAPQgJAPgMAAQgNAAgJgPgABTAjQgLgPAAgUQAAgWALgPQAKgPAOAAQAPAAAKAPQAKAPAAAWQAAAUgKAPQgKAPgPAAQgOAAgKgPg");
	this.shape_1.setTransform(33.7,26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6501E").s().p("AABD2QgKgOAAgTIAAigQAAgTAKgNQALgOAPAAQAPAAALAOQALANAAATIAACgQAAATgLAOQgLANgPAAQgPAAgLgNgAhLhFQhdgUhLgyQgjgWgSgTQALAHA/AGQAkAEAmgQQAPgGAmgXQAVgYAvgPQBcgeB8AuQAlANAnAlQATATAMAQQABABglAQQguATgwAPQhnAghLAAQgiAAgdgGg");
	this.shape_2.setTransform(29.3,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4B3F80").ss(4,1,1).p("AE5AAQAACThcBoQhbBoiCAAQiAAAhchoQhbhoAAiTQAAiSBbhoQBchoCAAAQCCAABbBoQBcBoAACSg");
	this.shape_3.setTransform(35.6,35.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5E7B8").s().p("AjcD7QhbhoAAiTQAAiSBbhoQBbhoCBAAQCCAABbBoQBbBoAACSQAACThbBoQhbBoiCAAQiBAAhbhog");
	this.shape_4.setTransform(35.6,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-2.4,69.1,75.5);


(lib.cook_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B3F80").ss(4,1,1).p("AB8AZQAAgVAPgNQAOgPAVAAIACAAQAVAAAPAPQAOANAAAVAjhAZQAAgVAPgNQAOgPAVAAIACAAQAVAAAPAPQAOANAAAV");
	this.shape.setTransform(32.8,25.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4B3F80").ss(4,1,1).p("AFjAAQAACThoBoQhoBoiTAAQiSAAhohoQhohoAAiTQAAiSBohoQBohoCSAAQCTAABoBoQBoBoAACSg");
	this.shape_1.setTransform(35.5,35.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5E7B8").s().p("Aj6D7QhohoAAiTQAAiSBohoQBohoCSAAQCTAABoBoQBoBoAACSQAACThoBoQhoBoiTAAQiSAAhohog");
	this.shape_2.setTransform(35.5,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,75,75);


(lib.cook_hat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B3F80").ss(4,1,1).p("AC2BUQgKgHgJgJQgegfgHgnQg2AjhEAAQhBAAgzghQgHAsgiAhQgBABgBABQgpAog6AAQg7AAgqgqQgqgqAAg6QAAg7AqgqQAqgqA7AAQAVAAATAFQgCgMAAgNQAAhcBBhAQBAhBBbAAQBbAABBBBQBABAAABcQAAANgBAMQASgFAUAAQA5AAAoAoQAoApAAA5QAAA4goAoQgoAog5AAQgtAAgigYgAibBPIAAEXQCoBkCphkIAAkS");
	this.shape.setTransform(39.8,40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AibFmIAAkXQgqAog5AAQg7AAgqgqQgqgqAAg6QAAg7AqgqQAqgqA7AAQAUAAAUAGQgCgNAAgOQAAhbBBhAQBAhBBaAAQBcAABABBQBBBAAABbIgBAaQARgFAVAAQA4AAAoAoQApAoAAA6QAAA3gpAoQgoApg4AAQgtAAgigZQgKgGgJgKQgfgegGgnQg2AjhFAAQhAAAg0ghQgGAsgiAhIgCACIACgCQAighAGgsQA0AhBAAAQBFAAA2gjQAGAnAfAeQAJAKAKAGIAAETQhVAyhUAAQhUAAhUgyg");
	this.shape_1.setTransform(39.8,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,83.6,85.6);


(lib.cook_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6501E").s().p("AgmBmQgPgNAAgRIAAgFIAAiKQAAgRAPgNQAQgMAWAAQAWAAAQAMQAQANAAARIAACIIAAAHQAAARgQANQgQAMgWgBQgWABgQgMg");
	this.shape.setTransform(23,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B3F80").s().p("ACQBRQgeAAgxgLQgugKgdABQghABglAEIhGAHQgkADgfhDIgXhBIAWAYQAbAWAVgNIBCgnQAUgJAUgGIAAAFQAAARAQAMQAQAMAWAAQAWAAAQgMQAQgMAAgRIAAgIQATAFAUAJQAqATAdAdQAXAWAhgZQAQgNANgRQAHAHgeA7QgfBCgoAAIgBAAg");
	this.shape_1.setTransform(24.1,25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.1,34);


(lib.cook_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B3F80").s().p("ABRDrQgNgNAAgUQAAgSANgNQANgNATgBQASABAOANQANANAAASQAAAUgNANQgOANgSgBQgTABgNgNgAioDrQgNgNgBgUQABgSANgNQANgNASgBQAUABANANQANANgBASQABAUgNANQgNANgUgBQgSABgNgNgABbAeQgNgNgBgTQABgSANgNQANgOASAAQATAAAOAOQANANgBASQABATgNANQgOAMgTAAQgSAAgNgMgAieAeQgOgNAAgTQAAgSAOgNQANgOASAAQATAAANAOQANANAAASQAAATgNANQgNAMgTAAQgSAAgNgMgABpipQgNgNABgUQgBgSANgNQAOgNATgBQASABANANQANANABASQgBAUgNANQgNANgSgBQgTABgOgNgAiQipQgNgNAAgUQAAgSANgNQAOgNASgBQATABAOANQANANgBASQABAUgNANQgOANgTgBQgSABgOgNg");
	this.shape.setTransform(47.3,50.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4B3F80").ss(4,1,1).p("AjmmsIA6AjQBLAjBWAAQDvAAADADQABABgLCRQgPC8gFBLQgFBaABEd");
	this.shape_1.setTransform(52.2,52.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4B3F80").ss(4,1,1).p("AgdnfQF/AACbHeQAwCTAVC1QAKBaACA9QAGAEyhgEQgBg8AFhZQAJi2AniTQB8nfGAAAg");
	this.shape_2.setTransform(59,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ApNHeQgBg8AFhZQAJi2AniTQB8nfGAAAQF/AACbHeQAwCTAVC1QAKBaACA9QADACknAAIt3gCg");
	this.shape_3.setTransform(59,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,122.1,100);


(lib.body_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B90D9").s().p("ABiDfIhbAAIhZAAIg1AAQAAhVATg6QARg1AdgTIgXhOQgOgxAAggQAAggAigUQAegSArgBQAsAAAeARQAiAUAAAiQAAAfgNAxQgIAcgQAzQAcATARA1QASA4ACBXg");
	this.shape.setTransform(13.6,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.2,44.6);


(lib.arm_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B90D9").s().p("AhAAfQgNAAgJgJQgJgJAAgNIAAAAQAAgMAJgJQAJgJANAAICBAAQANAAAJAJQAJAJAAAMIAAAAQAAANgJAJQgJAJgNAAg");
	this.shape.setTransform(9.6,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.2,6.3);


(lib.perso_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.head_01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(16.9,28,1,1,0,0,0,8.1,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// body
	this.instance_1 = new lib.body_01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.6,51.4,1,1,0,0,0,13.6,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240));

	// arm
	this.instance_2 = new lib.arm_01("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(30.6,29.2,1,1,40.4,0,0,3.1,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({startPosition:0},0).to({scaleX:0.7,rotation:25.5,x:30.7,y:29.3},6,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({scaleX:1,rotation:40.4,x:30.6,y:29.2},8,cjs.Ease.get(-1)).wait(103).to({startPosition:0},0).to({scaleX:0.7,rotation:25.5,x:30.7,y:29.3},6,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({scaleX:1,rotation:40.4,x:30.6,y:29.2},8,cjs.Ease.get(-1)).wait(74));

	// arm
	this.instance_3 = new lib.arm_01("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(40.5,37.8,0.899,0.998,-40.4,0,0,3.1,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({startPosition:0},0).to({scaleX:0.9,rotation:-70.4,x:39.3,y:33.8},6,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({scaleX:0.9,rotation:-40.4,x:40.5,y:37.8},8,cjs.Ease.get(-1)).wait(103).to({startPosition:0},0).to({scaleX:0.9,rotation:-70.4,x:39.3,y:33.8},6,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({scaleX:0.9,rotation:-40.4,x:40.5,y:37.8},8,cjs.Ease.get(-1)).wait(74));

	// hand
	this.instance_4 = new lib.hand_01("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(50.3,29.3,1,1,0,0,0,1.3,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({startPosition:0},0).to({rotation:-45,x:43.6,y:22.5},6,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({rotation:0,x:50.3,y:29.3},8,cjs.Ease.get(-1)).wait(103).to({startPosition:0},0).to({rotation:-45,x:43.6,y:22.5},6,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({rotation:0,x:50.3,y:29.3},8,cjs.Ease.get(-1)).wait(74));

	// arm
	this.instance_5 = new lib.arm_01("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(12.3,32.6,1,1,128.2,0,0,3.3,3.1);

	this.instance_6 = new lib.arm_01("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(4.3,42.9,0.898,0.998,47.4,0,0,3.3,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(240));

	// leg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B3F80").ss(2,0,0,3).p("ABbjRQgFDDg1ClIAPAQQAQASACAJQACAKgjgGQgSgDgRgEAhajRQAECCAwDgIgLAOQgMARgEAMQgEALAigDIAhgFIACmQ");
	this.shape.setTransform(21.5,87.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhDLIgjgHIACmQIBaAAQgEDDg1ClIAPAQQAQASACAJQABAGgOAAQgHAAgNgCgAhBDBQAEgMAMgRIALgOQgwjggEiCIBaAAIgCGQIgiAFIgMABQgUAAADgJgAAAjMg");
	this.shape_1.setTransform(21.5,87.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,0,60.8,109.2);


(lib.cook_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cook_hat("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51.3,44.5,1,1,5.5,0,0,39.9,40.9);

	this.instance_1 = new lib.cook_head2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(46.8,113.4,1,1,0,0,0,35.5,35.5);

	this.instance_2 = new lib.cook_body("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(59,177.9,1,1,0,0,0,59,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cook_02, new cjs.Rectangle(-2,1.8,122.1,226.1), null);


(lib.cook_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cook_hat("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51.2,40.8,1,1,0,0,0,39.8,40.8);

	this.instance_1 = new lib.cook_face("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.1,110.3,1,1,0,0,0,24.1,16.9);

	this.instance_2 = new lib.cook_head("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(51.8,108.8,1,1,0,0,0,35.5,35.5);

	this.instance_3 = new lib.cook_body("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(59,175.3,1,1,0,0,0,59,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cook_01, new cjs.Rectangle(-2,-2,122.1,227.3), null);


(lib.cuisto_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cook
	this.instance = new lib.cook_01();
	this.instance.parent = this;
	this.instance.setTransform(12.7,31.4,0.28,0.28,0,0,0,58.4,111.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E6501E").ss(2,0,0,3).p("AiMgxIBbAAIAABjIhbAAgAAAgxIBRAAAAAAAICXAAAAAAyIB5AA");
	this.shape.setTransform(12.9,71.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-0.4,34.2,78.3);


(lib.cuisto_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cook
	this.instance = new lib.cook_02();
	this.instance.parent = this;
	this.instance.setTransform(14.3,30,0.28,0.28,0,0,0,59,113.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E6501E").ss(2,0,0,3).p("AibgxIBbAAIAABjIhbAAgAgPAyICXAAAgPgxIC1AAAgPAAIBqAA");
	this.shape.setTransform(14.4,71.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-2.3,34.8,80.1);


(lib.screen_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chief
	this.instance = new lib.cuisto_02("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(78.8,48.4,0.8,0.8,0,0,0,12.8,39);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({regY:38.9,scaleX:1,scaleY:1,x:31.3},9,cjs.Ease.get(1)).wait(107).to({startPosition:0},0).to({regY:39,scaleX:0.8,scaleY:0.8,x:-13.5},8,cjs.Ease.get(1)).to({_off:true},1).wait(80));

	// chief
	this.instance_1 = new lib.cuisto_01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.3,48.4,1,1,0,0,0,12.8,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({startPosition:0},0).to({regX:13,regY:39,scaleX:0.8,scaleY:0.8,x:-16.2},9,cjs.Ease.get(1)).to({_off:true},1).wait(114).to({_off:false,regX:12.9,x:81.7},0).to({regX:12.8,regY:38.9,scaleX:1,scaleY:1,x:31.3},9,cjs.Ease.get(1)).wait(76));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak9HWQgTAAgBgUIAAuDQABgUATAAIJ7AAQATAAABAUIAAODQgBAUgTAAg");
	this.shape.setTransform(33.8,47);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.5,94);


(lib.machine_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo_mini();
	this.instance.parent = this;
	this.instance.setTransform(70,29.5,1,1,0,0,0,12.4,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// cadre
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E6501E").ss(2,1,1).p("AgDgwIAHAAQAFAAAFADQACABACACQAGAGAAAIIAAA5QAAAIgGAGQgGAGgIAAIgHAAQgIAAgGgGQgGgGAAgIIAAg5QAAgIAGgGQADgDADgCQAEgBAEAAg");
	this.shape.setTransform(104.9,78.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E6501E").ss(2,0,0,3).p("Akko5IJJAAQAUAAAAAUIAAODQAAAUgUAAIpJAAQgUAAAAgUIAAuDQAAgUAUAAgAkkGuIJJAAQAUAAAAAUIAABkQAAAUgUAAIpJAAQgUAAAAgUIAAhkQAAgUAUAAg");
	this.shape_1.setTransform(68.3,90.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AABABIgHAAQgEAAgDABIgBgBIgBAAIABAAIAEgCQADgBAEgBIAHAAQAGABAEACIABABIABAAIgBAAIgEACQgEgCgGAAg");
	this.shape_2.setTransform(104.9,74.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(240));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkjHWQgVAAAAgUIAAuDQAAgUAVAAIJIAAQATAAABAUIAAODQgBAUgTAAg");
	mask.setTransform(68.5,79.9);

	// screen
	this.instance_1 = new lib.screen_01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(71,79.9,1,1,0,0,0,33.8,47);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240));

	// bg
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E6501E").ss(2,1,1).p("ANIIhIBHAAApSldIAAmJQAAgKAFgFIACAAIABAAIABgBQAEgEAHAAILrAAQAKAAAFAFQAFAFAAAKIAAXNQAAAKgFAFIAAAAQgFAFgKAAIr/AAIABxYAuOIhIBHAAArzIhIB0AAADLIhIIiAA");
	this.shape_3.setTransform(91.1,92.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmJL7IABxYIgBAAIAAmJQAAgKAGgFIACAAIAAAAIABAAQAEgFAHAAILqAAQALAAAEAFQAFAFABAKIAAXNQAAAKgFAFIgBAAQgEAFgLAAg");
	this.shape_4.setTransform(71,92.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,15.5,184.1,154.6);


(lib.anime_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// perso
	this.instance = new lib.perso_01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(65.4,255.2,1.1,1.1,0,0,0,22.4,107.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// cat
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B3F80").s().p("ABlCcIAAAAQgJgDgagOIAAAAQgNgHgQAGIgSAJIgCABQgEAFgGABIg3AAQgTAAgNgOQgOgNAAgTIAAhgQAAgPAKgMQgKgEgIgIQgPgPAAgWQAAgGABgFIgNgfQgMgfAFgCQAEgCAWAPIAVAQQAKgFANAAQAGAAAGABIARgVQARgWAFAAQAIAAgLBIQAEAKAAALQAAAVgNAOQAGADAGAGQAKAKAHAaIAMAmQAJAgACAWIAAANIADgBIAAAAIABAAQAagKAVAMQAXAMAIADQAIACAHgGQADgCAEAAQAEAAADADQADADAAAEQAAAEgDADQgLAKgNAAIgLgCg");
	this.shape.setTransform(188.2,216);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	// bf
	this.instance_1 = new lib.machine_01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(118,154.5,1,1,0,0,0,85.5,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.5,85.5,184.1,171.1);


// stage content:
(lib.Anime_short = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anime_01();
	this.instance.parent = this;
	this.instance.setTransform(148.2,27.1,1.7,1.7,0,0,0,91.8,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(245.7,155.8,313,291.7);
// library properties:
lib.properties = {
	width: 400,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(animation1 = animation1||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var animation1, images, createjs, ss, AdobeAn;