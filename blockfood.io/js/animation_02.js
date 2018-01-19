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


    (lib.ok = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#4B3F80").s().p("AAaBWIgjhGIgcAcIAAAqIg1AAIAAirIA1AAIAABBIA3hBIBGAAIg+BBIBBBqg");
        this.shape.setTransform(48.5,38.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#4B3F80").s().p("AguBPQgSgJgNgUQgLgUAAgeQAAgpAXgYQAYgXApAAQAqAAAYAXQAXAXAAAqQAAAdgKATQgKATgUALQgSALgdAAQgcAAgUgKgAgZgkQgKALAAAZQAAAaAKAMQAJALAQAAQARAAAKgLQAJgLAAgcQAAgYgKgMQgKgLgQAAQgQAAgJAMg");
        this.shape_1.setTransform(27.6,38.1);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#4B3F80").ss(4,1,1).p("AFFAAQAAA2geBeQCHCugFADQgEADjHhGQgTAdgsAeQhXA6h5AAQicAAhuhuQhthuAAibQAAibBthuQBuhtCcAAQCaAABuBtQBuBuAACbg");
        this.shape_2.setTransform(42.5,37.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AkIEJQhuhuAAibQAAibBuhtQBthuCbAAQCbAABuBuQBuBtAACbQAAA2gdBeIhKBuQgSAdgtAdQhXA7h6AAQibAAhthug");
        this.shape_3.setTransform(37.5,37.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.ok, new cjs.Rectangle(-2,-2,89.1,79), null);


    (lib.meal = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 4
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#339900").s().p("AADA7QgIAEgKABQgXADgTgMQgSgLgCgTIAAgBQgHgCgHgFQgOgMgCgSQgCgSALgOQAMgOASgCQATgCAOALIACADIADgDQALgPARgCQARgBANALIADADQAWgCARAJQAUAIABAQQACAQgRAMIgDACQAMAAAKAHQAMAIABANQACANgKAKQgKAKgQACQgPACgMgIIgGgEQgHAKgKACIgCAAQgKAAgJgLg");
        this.shape.setTransform(25,7.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer 3
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#339900").s().p("AAsBaIgDgDIgFAEQgSATgaABQgagBgTgTIgEgEQgigCgZgQQgbgQAAgYQAAgYAbgQIAGgDQgTgCgOgMQgQgNAAgVQAAgTAQgOQASgOAXgBQAZABAQAOIAHAHQAMgPAQAAQATgBAMAUQANgEAPgBQAkABAaAUQAaAVAAAcIAAABQAKAFAJAJQAUATAAAcQAAAcgUATQgTAVgcAAQgcAAgVgVg");
        this.shape_1.setTransform(44,4.9);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // Layer 2
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#E6501E").s().p("AhoBMQgrgfAAgtQAAgsArgfQAsggA8ABQA+gBAqAgQAsAfAAAsQAAAtgsAfQgqAgg+AAQg8AAgsggg");
        this.shape_2.setTransform(60.8,-0.2);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 1
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#4B3F80").ss(5,1,1).p("AHHAAQAAAqiFAdQiGAdi8AAQi8AAiFgdQiFgdAAgqQAAgpCFgdQCFgdC8AAQC8AACGAdQCFAdAAApg");
        this.shape_3.setTransform(45.5,10);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AlBBGQiFgdAAgpQAAgpCFgdQCGgdC7AAQC9AACFAdQCFAdAAApQAAApiFAdQiFAei9AAQi7AAiGgeg");
        this.shape_4.setTransform(45.5,10);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.meal, new cjs.Rectangle(-2.5,-11,96,33.5), null);


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


    (lib.line = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#E6501E").ss(6,1,1).p("AAAlsIAALZ");
        this.shape.setTransform(0,36.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-3,-3,6,79), null);


    (lib.head_01 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#4B3F80").s().p("AAADhQgqAAgegeQgegeAAgrIAAjzQAAgrAegeQAegeAqAAIAAAAQArAAAeAeQAeAeAAArIAADzQAAArgeAeQgeAegrAAg");
        this.shape.setTransform(10.3,22.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,20.6,45);


    (lib.hand_02 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#4B3F80").ss(2,0,0,3).p("AgsAjQgJgPAFgPQAJgUAFgPQAFgRANADQAVAGADgBQAIgCAPgGQALgDAEAFQAHAJgDAJQgBAEgFAIQgCADAFAQQAFANgMALQgSAQgbAEQgeAEgJgRg");
        this.shape.setTransform(5.2,5.8);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgsAjQgJgPAFgPQAJgUAFgPQAFgRANADQAVAGADgBIAXgIQALgDAEAFQAHAJgDAJQgBAEgFAIQgCADAFAQQAFANgMALQgSAQgbAEIgLABQgVAAgHgOg");
        this.shape_1.setTransform(5.2,5.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.9,0,12.9,12.5);


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
        this.shape.graphics.f().s("#4B3F80").ss(4,1,1).p("AibBPQgpAog6AAQg7AAgqgqQgqgqAAg6QAAg7AqgqQAqgqA7AAQAVAAATAFQgCgMAAgNQAAhcBBhAQBAhBBbAAQBbAABBBBQBABAAABcQAAANgBAMQASgFAUAAQA5AAAoAoQAoApAAA5QAAA4goAoQgoAog5AAQgtAAgigYQgKgHgJgJQgegfgHgnQg2AjhEAAQhBAAgzghQgHAsgiAhQgBABgBABIAAEXQCoBkCphkIAAkS");
        this.shape.setTransform(39.8,40.8);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AibFmIAAkXIACgCQAighAGgsQA0AhBAAAQBFAAA2gjQAGAnAfAeQAJAKAKAGIAAETQhVAyhUAAQhUAAhUgygAljBNQgqgqAAg6QAAg7AqgqQAqgqA7AAQAUAAAUAGQgCgNAAgOQAAhbBBhAQBAhBBaAAQBcAABABBQBBBAAABbIgBAaQARgFAVAAQA4AAAoAoQApAoAAA6QAAA3gpAoQgoApg4AAQgtAAgigZQgKgGgJgKQgfgegGgnQg2AjhFAAQhAAAg0ghQgGAsgiAhIgCACQgqAog5AAQg7AAgqgqgAC2BTIAAAAg");
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


    (lib.cadre = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E6501E").s().p("EAvOAbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgEAsaAbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgEApmAbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgEAmyAbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgEAj+AbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgEAhKAbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAeWbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAbibvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAYubvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAV6bvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgATGbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAQSbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgANebvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAKqbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAH2bvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAFCbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgACObvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAglbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAjZbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAmNbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgApBbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAr1bvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAupbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgAxdbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgA0RbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgA3FbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgA55bvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgA8tbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgA/hbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgEgiVAbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgEglJAbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgEgn9AbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgEgqxAbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgEgtlAbvIhQAAQgJAAgGgGQgFgGAAgIQAAgIAFgGQAGgGAJAAIBQAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIAAAAgEAwSAa9IgCAAQgHAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSAYJQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSAVVQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSAShQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSAPtQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSAM5QgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSAKFQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSAHRQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSAEdQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSABpQgJAAgGgGQgFgGAAgIIAAhQQAAgHAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAHIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSgBKQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSgD+QgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSgGyQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSgJmQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSgMaQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSgPOQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSgSCQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSgU2QgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSgXqQgJAAgGgGQgFgGAAgIIAAhQQAAgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAABQQAAAIgGAGQgGAGgIAAIAAAAgEAwSgaeQgIAAgFgFQgHgFAAgJQgBgKgFgFQgHgGgNAAIgOAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIAOAAQAgAAAQARQAQAPACAbQAAAIgFAGQgFAGgJABIgBAAIAAAAgEAtygbGIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgEAq+gbGIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgEAoKgbGIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgEAlWgbGIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgEAiigbGIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAfu7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAc67GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAaG7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAXS7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAUe7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgARq7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAO27GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAMC7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAJO7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAGa7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgADm7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAAy7GIhPAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBPAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAiB7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAk17GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAnp7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAqd7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAtR7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAwF7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgAy57GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgA1t7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgA4h7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgA7V7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgA+J7GIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgEgg9gbGIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgEgjxgbGIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgEgmlgbGIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgEgpZgbGIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgEgsNgbGIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAgEgvBgbGIhQAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIBQAAQAJAAAFAGQAGAGAAAIQAAAIgGAGQgFAGgJAAIAAAAg");
        this.shape.setTransform(309.1,175.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(255,255,255,0.847)").s().p("EAviAbbQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg7AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAQAAgIgGgGQgFgGgJAAIhQAAQgIAAgGAGQgGAGAAAIIg8AAIgH7bQgH4fACinIBRAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBPAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIBQAAQAIAAAGgGQAGgGAAgIIA8AAQAAAIAFAGQAGAGAJAAIANAAQAOAAAGAGQAFAFABAKQABAJAGAFQAGAFAHAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAHIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAGAGAIAAIAAA8QgIAAgGAGQgGAGAAAIIAABQQAAAIAGAGQAFAGAIAAQgDALgGAHIgBABQgMALgXAAg");
        this.shape_1.setTransform(309,175.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.cadre, new cjs.Rectangle(-1.9,-2,621.9,355), null);


    (lib.boy_01 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // hat
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E6501E").s().p("AmRDDQgTgQgMgPID/hQIAFh8QAAhMBeg1QBVgxB5gGQB7gGBTArQBeAyAABhIAFCaQABAkiRAHQjLAIgdAHQh9AbhwAPQhcAMg1AAQgmAAgmgfg");
        this.shape.setTransform(15.7,19.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // face
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#4B3F80").ss(5,1,1).p("AiFg6QANB1BHAAQBGAABxh1");
        this.shape_1.setTransform(24.5,69.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#4B3F80").s().p("AA6A8QgMgZAAgjQAAgiAMgZQAMgZASAAQAQAAANAZQAMAZAAAiQAAAjgMAZQgNAZgQAAQgSAAgMgZgAh0A8QgMgZAAgjQAAgiAMgZQAMgZARAAQASAAALAZQANAZAAAiQAAAjgNAZQgLAZgSAAQgRAAgMgZg");
        this.shape_2.setTransform(22,39.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

        // head
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#4B3F80").ss(5,1,1).p("AjtkYQAAhNBNg1QBHgwBhgHQBlgGBEAsQBNAxAABiQAcEBgCCIQgCDqhKAwQhbA7h/AKQh8AKhHgpQg/gkgGiIQgHiEAwhUg");
        this.shape_3.setTransform(27.6,46.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FEC28D").s().p("AjRGxQg/gkgGiIQgHiEAwhUIAAlFQAAhNBNg1QBHgwBhgHQBlgGBEAsQBNAxAABiQAcEBgCCIQgCDqhKAwQhbA7h/AKQgYACgXAAQhbAAg5ghg");
        this.shape_4.setTransform(27.6,46.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

        // hand
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#4B3F80").ss(4,1,1).p("ACJBZQAqgJAJgzQAIgxgigXQgZgQhRgWQhQgWgIgFQgSgLAMAhQAMAgAVALQAeAQAgAHQABAAhtADQhyAFgPAMQgRAMARAcQAPAZAhAVQAcASAYAEQANACA5ABQAoABA6gMg");
        this.shape_5.setTransform(-48.4,64);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FEC28D").s().p("AgKBvQg5gBgNgCQgYgEgcgSQghgVgPgZQgRgcARgMQAPgMBygFIBsgDQgggHgegQQgVgLgMggQgMghASALQAIAFBQAWQBRAWAZAQQAiAXgIAxQgJAzgqAJIgxALQg3ALgnAAIgEAAg");
        this.shape_6.setTransform(-48.4,64);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

        // body
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#4B3F80").s().p("Ah1GtQhNiIhik5QkxDGh8ABQh7iph7kxICggtICvExQCEiDCUhUIGkhpQDVguB0gQQCFgRBsAJQBnAfDjEmQgpBPhxAZQhxifhxhBQhSAFhBAeQgmARhkA/QBSEjCjDzg");
        this.shape_7.setTransform(52.6,101.6);

        this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

        // hand
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#4B3F80").ss(4,1,1).p("Ah2g7QAkgcAfgHQAjgHARAWQAQAUARAPQAOAMADAAQAAgXAEgUQAGgpAUATQAhAfARAqQAWAygjAOQg1AigfAQQg3AcgvgcQgtgagSgxQgUgxAhgZg");
        this.shape_8.setTransform(150.5,103.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FEC28D").s().p("AhEBaQgtgagSgxQgUgxAhgZQAkgcAfgHQAjgHARAWQAQAUARAPQAOAMADAAQAAgXAEgUQAGgpAUATQAhAfARAqQAWAygjAOQg1AigfAQQgcAOgZAAQgaAAgXgOg");
        this.shape_9.setTransform(150.5,103.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69.4,-2.9,235.9,147.5);


    (lib.body_01 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#6B90D9").s().p("ABiDfIhbAAIhZAAIg1AAQAAhVATg6QARg1AdgTIgXhOQgOgxAAggQAAggAigUQAegSArgBQAsAAAeARQAiAUAAAiQAAAfgNAxQgIAcgQAzQAcATARA1QASA4ACBXg");
        this.shape.setTransform(13.6,22.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,27.2,44.6);


    (lib.bfc = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // txt
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#4B3F80").s().p("AgCAwQgFgCgBgCIgDgIIgBgNIAAgfIgJAAIAAgPIAJAAIAAgPIASgLIAAAaIAOAAIAAAPIgOAAIAAAcIABALIACACIADABIAIgCIACAPQgIADgIAAQgFAAgDgCg");
        this.shape.setTransform(20.7,13.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#4B3F80").s().p("AgNAzIAAg4IgKAAIAAgPIAKAAIAAgGQAAgJACgEQACgFAFgDQAEgDAJAAQAIAAAHADIgCANIgJgBQgEAAgCACQgCACAAAFIAAAGIAPAAIAAAPIgPAAIAAA4g");
        this.shape_1.setTransform(16.3,12.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#4B3F80").s().p("AgpAyIAAhjIAoAAIARABQAGABAEADQAFADADAFQADAGAAAGQAAAHgEAGQgEAGgGACQAJADAFAGQAFAHAAAIQAAAHgDAGQgDAHgGADQgFAFgIABIgYAAgAgVAhIATAAIANgBQAEAAADgDQADgDAAgGQAAgEgCgDQgCgEgEgBQgFgBgMgBIgRAAgAgVgKIAOAAIANAAQAFgBADgCQADgDAAgFQAAgFgCgDQgDgDgFAAIgQAAIgMAAg");
        this.shape_2.setTransform(8.8,13);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

        // coin
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#4B3F80").ss(4,1,1).p("ACLAAQAAA5gqApQgoApg5AAQg4AAgqgpQgogpAAg5QAAg4AogpQAqgpA4AAQA5AAAoApQAqApAAA4g");
        this.shape_3.setTransform(13.3,13.3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AhiBiQgogpAAg5QAAg4AogpQAqgpA4AAQA5AAAoApQAqApAAA4QAAA5gqApQgoApg5AAQg4AAgqgpg");
        this.shape_4.setTransform(13.3,13.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

        // line
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#4B3F80").ss(1,1,1).p("AhVAcIByAAAhWgWICFAAAhCBIICZAAAhGhBIBOAAAgpBlIBhAAAgrhkIBfAA");
        this.shape_5.setTransform(0.6,13.4);

        this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

        // bg
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#4B3F80").ss(5,1,1).p("ABhCGIg8AAQg2AAgogoQgngnAAg3QAAg2AngoQAognA2AAIA8AA");
        this.shape_6.setTransform(1.4,13.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f().s("#4B3F80").ss(2,1,1).p("AAAiFIAAEL");
        this.shape_7.setTransform(11.1,13.4);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AAlCGQg2AAgogoQgngnAAg3QAAg2AngoQAognA2AAIA8AAIAAELg");
        this.shape_8.setTransform(1.4,13.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.bfc, new cjs.Rectangle(-10.7,-2.5,40,31.8), null);


    (lib.arm_01 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#6B90D9").s().p("AhAAfQgNAAgJgJQgJgJAAgNIAAAAQAAgMAJgJQAJgJANAAICBAAQANAAAJAJQAJAJAAAMIAAAAQAAANgJAJQgJAJgNAAg");
        this.shape.setTransform(9.6,3.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19.2,6.3);


    (lib._07_txt = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#4B3F80").s().p("AgKALIAAgVIAVAAIAAAVg");
        this.shape.setTransform(13.2,15.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#4B3F80").s().p("AgVA4QAAgXAKgZQAJgXAOgUIgwAAIAAgUIBJAAIAAAQQgJAIgKARQgJARgFATQgEATAAAPg");
        this.shape_1.setTransform(6.5,10.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#4B3F80").s().p("AgdAvQgKgMAAgVQgBgUALgLQAKgLAPAAQANAAAJAMIAAgpIAXAAIAABxIgVAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgLgFQgGAGAAAMQAAANAEAGQAFAJAIAAQAIAAAGgHQAEgGAAgNQAAgOgEgFQgGgHgIAAQgGAAgFAGg");
        this.shape_2.setTransform(124,10.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_3.setTransform(114.8,12.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#4B3F80").s().p("AgkApIAAgRIAggjIAKgMIgJAAIgeAAIAAgSIBEAAIAAAQIggAkIgKAMIAKgBIAiAAIAAATg");
        this.shape_4.setTransform(106.4,12.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#4B3F80").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
        this.shape_5.setTransform(100.2,10.8);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#4B3F80").s().p("AgKA5IAAhxIAVAAIAABxg");
        this.shape_6.setTransform(95.8,10.8);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#4B3F80").s().p("AgfAlQgHgIAAgKQAAgHADgGQAEgFAGgCQAGgDALgCQAPgDAGgDIAAgCQAAgGgEgDQgCgDgIABQgGgBgDADQgEACgCAGIgTgDQADgNAIgFQAIgHAQABQAOAAAHADQAIADACAGQAEAFAAAOIgBAZIABAQQABAFADAGIgVAAIgCgGIgBgDQgGAGgHACQgFADgHABQgNgBgIgGgAAAAFQgJACgCACQgFADAAAFQAAAEADADQAEAEAFAAQAFAAAGgEQAEgDABgEQABgDAAgIIAAgEIgNADg");
        this.shape_7.setTransform(89.1,12.4);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4B3F80").s().p("AAQAqIAAgqQAAgNgCgDQgBgEgDgDQgDgBgFAAQgFAAgEACQgFADgBAGQgCAFAAANIAAAlIgWAAIAAhSIAUAAIAAAMQALgOAQABQAHAAAGACQAGADADAEQADAEACAFIABAPIAAAyg");
        this.shape_8.setTransform(79.8,12.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#4B3F80").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
        this.shape_9.setTransform(72.7,10.8);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#4B3F80").s().p("AgPA6IAAhAIgMAAIAAgSIAMAAIAAgGQAAgKACgGQADgFAGgDQAEgDAKAAQAJAAAJADIgDAPIgKgBQgFAAgCACQgCACAAAGIAAAGIAQAAIAAASIgQAAIAABAg");
        this.shape_10.setTransform(68.1,10.7);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAUAAIAAAMQAGgIADgDQAEgCAFAAQAIAAAHAEIgHATQgGgDgFgBQgEABgDACQgCACgCAHQgCAGAAAVIAAAZg");
        this.shape_11.setTransform(58.1,12.3);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_12.setTransform(49.8,12.4);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#4B3F80").s().p("AgdAvQgKgMAAgVQgBgUAKgLQALgLAPAAQANAAAJAMIAAgpIAXAAIAABxIgVAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgMgFQgFAGAAAMQAAANAEAGQAFAJAIAAQAIAAAGgHQAEgGAAgNQAAgOgEgFQgFgHgJAAQgHAAgFAGg");
        this.shape_13.setTransform(40.4,10.9);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAVAAIAAAMQAFgIADgDQAEgCAGAAQAHAAAHAEIgHATQgFgDgGgBQgEABgDACQgCACgCAHQgCAGAAAVIAAAZg");
        this.shape_14.setTransform(33.2,12.3);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#4B3F80").s().p("AgoAsQgOgQAAgbQAAgRAEgMQAFgIAGgHQAHgHAIgEQALgEANAAQAZAAAPAPQAPAQAAAbQAAAcgPAQQgPAPgZAAQgZAAgPgPgAgWgdQgJAKAAATQABATAIAKQAJAKANAAQAOAAAJgJQAJgKgBgUQABgTgJgKQgJgJgOAAQgNAAgJAJg");
        this.shape_15.setTransform(23.3,10.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib._07_txt, new cjs.Rectangle(0,0,131.3,21.9), null);


    (lib._06_txt = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#4B3F80").s().p("AgKALIAAgVIAVAAIAAAVg");
        this.shape.setTransform(13.2,15.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#4B3F80").s().p("AgaAtQgLgNAAgfQAAgfALgOQAMgNARAAQANgBAJAIQAJAHACAOIgVACQgBgGgDgDQgEgDgFAAQgGgBgFAHQgEAGgCAUQAIgKAMAAQANAAAKAKQAKAKAAAQQAAASgKALQgLALgQAAQgQAAgLgOgAgIADQgFAFAAAKQAAAKAFAHQAFAFAFABQAGgBAEgFQAFgEAAgLQAAgLgFgGQgEgDgHAAQgFAAgEADg");
        this.shape_1.setTransform(6.5,10.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#4B3F80").s().p("AgdAvQgLgMAAgVQABgUAJgLQALgLAOAAQANAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAGgGAAgNQAAgOgGgFQgFgHgHAAQgHAAgGAGg");
        this.shape_2.setTransform(130.3,10.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_3.setTransform(121,12.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAUAAIAAAMQAFgIAEgDQAEgCAFAAQAIAAAHAEIgHATQgGgDgEgBQgFABgDACQgDACgBAHQgCAGAAAVIAAAZg");
        this.shape_4.setTransform(114.2,12.3);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_5.setTransform(105.9,12.4);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#4B3F80").s().p("AgJApIghhSIAXAAIAQAqIADAOIADgHIACgHIAQgqIAWAAIghBSg");
        this.shape_6.setTransform(97,12.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#4B3F80").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
        this.shape_7.setTransform(90.4,10.8);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4B3F80").s().p("AgKA5IAAhxIAVAAIAABxg");
        this.shape_8.setTransform(86,10.8);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_9.setTransform(79.2,12.4);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#4B3F80").s().p("AgdAvQgLgMAAgVQAAgUAKgLQALgLAPAAQANAAAKAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgMgFQgFAGAAAMQAAANAEAGQAFAJAJAAQAHAAAFgHQAFgGABgNQgBgOgFgFQgEgHgIAAQgIAAgFAGg");
        this.shape_10.setTransform(69.8,10.9);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAUAAIAAAMQAGgIADgDQAEgCAFAAQAIAAAHAEIgHATQgGgDgFgBQgEABgDACQgCACgCAHQgCAGAAAVIAAAZg");
        this.shape_11.setTransform(58.1,12.3);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_12.setTransform(49.8,12.4);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#4B3F80").s().p("AgdAvQgKgMAAgVQgBgUAKgLQALgLAPAAQANAAAJAMIAAgpIAXAAIAABxIgVAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgMgFQgFAGAAAMQAAANAEAGQAFAJAIAAQAIAAAGgHQAEgGAAgNQAAgOgEgFQgFgHgJAAQgHAAgFAGg");
        this.shape_13.setTransform(40.4,10.9);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAVAAIAAAMQAFgIADgDQAEgCAGAAQAHAAAHAEIgHATQgFgDgGgBQgEABgDACQgCACgCAHQgCAGAAAVIAAAZg");
        this.shape_14.setTransform(33.2,12.3);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#4B3F80").s().p("AgoAsQgOgQAAgbQAAgRAEgMQAFgIAGgHQAHgHAIgEQALgEANAAQAZAAAPAPQAPAQAAAbQAAAcgPAQQgPAPgZAAQgZAAgPgPgAgWgdQgJAKAAATQABATAIAKQAJAKANAAQAOAAAJgJQAJgKgBgUQABgTgJgKQgJgJgOAAQgNAAgJAJg");
        this.shape_15.setTransform(23.3,10.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib._06_txt, new cjs.Rectangle(0,0,137.5,21.9), null);


    (lib._05_txt = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#4B3F80").s().p("AgKALIAAgVIAVAAIAAAVg");
        this.shape.setTransform(13.2,15.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#4B3F80").s().p("AgaAxQgJgJgCgOIAVgCQACAHAEAEQAFAFAFAAQAGAAAGgGQAEgFAAgMQAAgKgEgGQgGgDgGAAQgKgBgHAIIgSgDIAMg6IA4AAIAAAUIgoAAIgDATQAHgDAHAAQAPAAAJAKQALAKAAARQgBAOgHAMQgLAPgUAAQgPAAgLgJg");
        this.shape_1.setTransform(6.6,11);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAUAAIAAAMQAGgIADgDQAEgCAGAAQAHAAAHAEIgHATQgGgDgFgBQgEABgDACQgDACgBAHQgCAGAAAVIAAAZg");
        this.shape_2.setTransform(117.6,12.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_3.setTransform(109.3,12.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#4B3F80").s().p("AgdAvQgLgMAAgVQAAgUAKgLQALgLAPAAQANAAAKAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgMgFQgFAGAAAMQAAANAEAGQAFAJAJAAQAHAAAFgHQAFgGABgNQgBgOgFgFQgEgHgIAAQgIAAgFAGg");
        this.shape_4.setTransform(99.9,10.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAVAAIAAAMQAEgIAEgDQAEgCAGAAQAHAAAHAEIgHATQgFgDgFgBQgFABgDACQgCACgCAHQgCAGAAAVIAAAZg");
        this.shape_5.setTransform(92.7,12.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#4B3F80").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgKAKgFQAKgFALAAQATAAAMAMQAMAMAAASQAAATgMAMQgNANgSAAQgKAAgLgGgAgNgSQgGAHAAALQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgIAAgFAGg");
        this.shape_6.setTransform(84.1,12.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#4B3F80").s().p("AgoA6IAAhxIAVAAIAAAMQAEgGAHgEQAGgEAIAAQAOAAAKALQALAMgBAUQABAUgLALQgKAMgOAAQgHAAgFgDQgGgDgFgGIAAApgAgNghQgFAGAAAMQAAAOAFAGQAGAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgGgGQgEgHgIAAQgHAAgGAHg");
        this.shape_7.setTransform(70.2,13.8);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4B3F80").s().p("AgYAmQgHgDgDgGQgDgHAAgMIAAg0IAWAAIAAAmQAAARABAEQACAEADACQADADAFAAQAFAAAEgEQAFgDABgEQACgEAAgSIAAgjIAWAAIAABSIgVAAIAAgMQgEAHgIADQgGAEgIABQgJgBgGgEg");
        this.shape_8.setTransform(60.1,12.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#4B3F80").s().p("AgVALIAAgVIAqAAIAAAVg");
        this.shape_9.setTransform(53,12.4);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#4B3F80").s().p("AAPA5IgUglIgKALIAAAaIgXAAIAAhxIAXAAIAAA8IAZgdIAbAAIgdAeIAfA0g");
        this.shape_10.setTransform(45.9,10.8);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#4B3F80").s().p("AgbAgQgLgLAAgVQAAgTALgMQALgLARAAQAPAAAJAGQAJAHAEANIgWAEQgBgHgDgDQgEgDgHAAQgHAAgFAFQgFAHAAANQAAANAFAHQAFAFAIABQAGAAAEgEQAEgEACgIIAVADQgDAPgKAIQgJAIgQAAQgRAAgLgMg");
        this.shape_11.setTransform(36.7,12.4);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#4B3F80").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
        this.shape_12.setTransform(29.9,10.8);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#4B3F80").s().p("AgrA5IAAhxIAlAAQAUAAAHABQAKADAGAJQAHAIAAAOQAAALgEAHQgEAGgGAEQgFAEgHABQgIACgPAAIgOAAIAAArgAgTgEIAMAAQAMAAAFgCQAFgCACgEQADgEAAgFQAAgGgDgEQgEgEgGgBIgPgBIgLAAg");
        this.shape_13.setTransform(22.6,10.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib._05_txt, new cjs.Rectangle(0,0,122.3,21.9), null);


    (lib._04_txt = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#4B3F80").s().p("AgKALIAAgVIAVAAIAAAVg");
        this.shape.setTransform(13.2,15.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#4B3F80").s().p("AAGA5IAAgWIguAAIAAgUIAwhHIATAAIAABHIAOAAIAAAUIgOAAIAAAWgAgUAPIAaAAIAAgmg");
        this.shape_1.setTransform(6.4,10.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#4B3F80").s().p("AgiA5IgCgRIAJABQAIAAADgFQAEgEACgHIgghSIAYAAIATA6IATg6IAXAAIgeBPIgFAOIgFALQgDAEgCACQgEADgFABIgLABIgMgBg");
        this.shape_2.setTransform(103.2,14);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#4B3F80").s().p("AgdAvQgLgMAAgVQABgUAJgLQALgLAOAAQANAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAGgGAAgNQAAgOgGgFQgFgHgHAAQgHAAgGAGg");
        this.shape_3.setTransform(93.8,10.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#4B3F80").s().p("AgeAlQgIgIAAgKQAAgHADgGQAEgFAGgCQAGgDALgCQAPgDAGgDIAAgCQAAgGgEgDQgCgDgIABQgGgBgDADQgDACgDAGIgUgDQAEgNAIgFQAIgHAQABQAOAAAHADQAHADAEAGQADAFAAAOIgBAZIABAQQABAFADAGIgVAAIgCgGIgBgDQgGAGgHACQgFADgHABQgNgBgHgGgAAAAFQgJACgCACQgFADAAAFQAAAEAEADQADAEAGAAQAEAAAGgEQAEgDABgEQABgDAAgIIAAgEIgNADg");
        this.shape_4.setTransform(84.7,12.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_5.setTransform(75.7,12.4);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAUAAIAAAMQAFgIAEgDQAEgCAFAAQAIAAAHAEIgHATQgGgDgEgBQgFABgDACQgDACgBAHQgCAGAAAVIAAAZg");
        this.shape_6.setTransform(68.8,12.3);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAUAAIAAAMQAGgIADgDQAEgCAFAAQAIAAAHAEIgHATQgGgDgFgBQgEABgDACQgCACgCAHQgCAGAAAVIAAAZg");
        this.shape_7.setTransform(58.1,12.3);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_8.setTransform(49.8,12.4);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#4B3F80").s().p("AgdAvQgKgMAAgVQgBgUAKgLQALgLAPAAQANAAAJAMIAAgpIAXAAIAABxIgVAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgMgFQgFAGAAAMQAAANAEAGQAFAJAIAAQAIAAAGgHQAEgGAAgNQAAgOgEgFQgFgHgJAAQgHAAgFAGg");
        this.shape_9.setTransform(40.4,10.9);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAVAAIAAAMQAFgIADgDQAEgCAGAAQAHAAAHAEIgHATQgFgDgGgBQgEABgDACQgCACgCAHQgCAGAAAVIAAAZg");
        this.shape_10.setTransform(33.2,12.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#4B3F80").s().p("AgoAsQgOgQAAgbQAAgRAEgMQAFgIAGgHQAHgHAIgEQALgEANAAQAZAAAPAPQAPAQAAAbQAAAcgPAQQgPAPgZAAQgZAAgPgPgAgWgdQgJAKAAATQABATAIAKQAJAKANAAQAOAAAJgJQAJgKgBgUQABgTgJgKQgJgJgOAAQgNAAgJAJg");
        this.shape_11.setTransform(23.3,10.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib._04_txt, new cjs.Rectangle(0,0,110,21.9), null);


    (lib._03_txt = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#4B3F80").s().p("AgKALIAAgVIAVAAIAAAVg");
        this.shape.setTransform(13.2,15.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#4B3F80").s().p("AgZAyQgLgJgBgPIAWgCQABAHADAFQAFAFAGAAQAGAAAFgGQAFgFgBgJQABgIgFgFQgFgFgFAAQgEAAgGACIADgRQAHAAAFgEQAFgEAAgHQAAgFgEgEQgDgDgFAAQgFAAgFADQgDAEgBAIIgUgDQACgLAEgGQAFgGAHgEQAIgDAJAAQAPgBAKALQAIAJAAAKQAAAPgRAJQALACAFAHQAGAGAAALQAAAPgLALQgLALgQAAQgPgBgKgIg");
        this.shape_1.setTransform(6.4,10.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAVAAIAAAMQAFgIADgDQAEgCAGAAQAHAAAHAEIgHATQgFgDgGgBQgEABgDACQgCACgCAHQgCAGAAAVIAAAZg");
        this.shape_2.setTransform(113.2,12.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_3.setTransform(104.9,12.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#4B3F80").s().p("AgdAvQgLgMAAgVQAAgUAKgLQALgLAOAAQANAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAFgGABgNQgBgOgFgFQgFgHgHAAQgHAAgGAGg");
        this.shape_4.setTransform(95.5,10.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAVAAIAAAMQAEgIAEgDQAEgCAFAAQAIAAAHAEIgHATQgFgDgFgBQgFABgDACQgCACgCAHQgCAGAAAVIAAAZg");
        this.shape_5.setTransform(88.3,12.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#4B3F80").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgKAKgFQAKgFALAAQATAAAMAMQAMAMAAASQAAATgMAMQgNANgSAAQgKAAgLgGgAgNgSQgGAHAAALQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgIAAgFAGg");
        this.shape_6.setTransform(79.7,12.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#4B3F80").s().p("AgDA3QgEgCgCgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIACARQgHADgKAAQgGAAgEgCg");
        this.shape_7.setTransform(67.7,11);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4B3F80").s().p("AgoA6IAAhxIAVAAIAAAMQAEgGAHgEQAHgEAGAAQAPAAAKALQAKAMAAAUQAAAUgKALQgKAMgPAAQgFAAgGgDQgFgDgGgGIAAApgAgNghQgFAGAAAMQAAAOAFAGQAGAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgGgGQgEgHgIAAQgIAAgFAHg");
        this.shape_8.setTransform(60.4,13.8);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_9.setTransform(50.7,12.4);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#4B3F80").s().p("AgbAgQgLgLAAgVQAAgTALgMQALgLARAAQAPAAAJAGQAJAHAEANIgWAEQgBgHgDgDQgEgDgHAAQgHAAgFAFQgFAHAAANQAAANAFAHQAFAFAIABQAGAAAEgEQAEgEACgIIAVADQgDAPgKAIQgJAIgQAAQgRAAgLgMg");
        this.shape_10.setTransform(42,12.4);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#4B3F80").s().p("AgbAgQgLgLAAgVQAAgTALgMQALgLARAAQAPAAAJAGQAJAHAEANIgWAEQgBgHgDgDQgEgDgHAAQgHAAgFAFQgFAHAAANQAAANAFAHQAFAFAIABQAGAAAEgEQAEgEACgIIAVADQgDAPgKAIQgJAIgQAAQgRAAgLgMg");
        this.shape_11.setTransform(33.1,12.4);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#4B3F80").s().p("AAhA5IgKgaIgtAAIgKAaIgYAAIAshxIAYAAIAuBxgAgQAMIAfAAIgPgqg");
        this.shape_12.setTransform(22.8,10.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib._03_txt, new cjs.Rectangle(0,0,117.9,21.9), null);


    (lib._02_txt = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#4B3F80").s().p("AgKALIAAgVIAVAAIAAAVg");
        this.shape.setTransform(13.2,15.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#4B3F80").s().p("AglA5QABgLAGgKQAGgLASgRQAPgNADgEQAEgIABgGQAAgIgFgEQgDgDgIAAQgFgBgEAFQgEAEgBAKIgWgDQACgRAKgJQALgHAOAAQARAAAKAJQAJAJAAANQAAAIgCAHQgDAHgGAHIgPAOIgMANIgEAGIAqAAIAAAUg");
        this.shape_1.setTransform(6.3,10.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAUAAIAAAMQAGgIADgDQAEgCAFAAQAIAAAHAEIgHATQgGgDgFgBQgEABgDACQgCACgCAHQgCAGAAAVIAAAZg");
        this.shape_2.setTransform(92.8,12.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_3.setTransform(84.5,12.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#4B3F80").s().p("AgdAvQgKgMAAgVQgBgUALgLQAKgLAPAAQANAAAJAMIAAgpIAXAAIAABxIgVAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgMgFQgFAGAAAMQAAANAEAGQAFAJAIAAQAIAAAGgHQAEgGAAgNQAAgOgEgFQgFgHgJAAQgHAAgFAGg");
        this.shape_4.setTransform(75.1,10.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAVAAIAAAMQAFgIADgDQAEgCAGAAQAHAAAHAEIgHATQgFgDgGgBQgEABgDACQgCACgCAHQgCAGAAAVIAAAZg");
        this.shape_5.setTransform(67.9,12.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#4B3F80").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgKAKgFQAKgFALAAQATAAAMAMQAMAMAAASQAAATgMAMQgNANgSAAQgKAAgLgGgAgNgSQgGAHAAALQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgIAAgFAGg");
        this.shape_6.setTransform(59.3,12.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#4B3F80").s().p("AAOApIgOg0IgNA0IgWAAIgahSIAWAAIAPA2IAPg2IATAAIAPA2IAPg2IAWAAIgbBSg");
        this.shape_7.setTransform(43.7,12.4);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_8.setTransform(32.9,12.4);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#4B3F80").s().p("AAWA5IgthJIAABJIgVAAIAAhxIAWAAIAuBLIAAhLIAVAAIAABxg");
        this.shape_9.setTransform(22.7,10.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib._02_txt, new cjs.Rectangle(0,0,97.5,21.9), null);


    (lib._01_txt = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#4B3F80").s().p("AgKALIAAgVIAVAAIAAAVg");
        this.shape.setTransform(13.2,15.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#4B3F80").s().p("AADA5IAAhRQgLALgQAFIAAgTQAJgDAKgIQAJgIADgKIASAAIAABxg");
        this.shape_1.setTransform(5.8,10.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAVAAIAAAMQAFgIADgDQAEgCAGAAQAHAAAHAEIgHATQgFgDgGgBQgEABgDACQgCACgCAHQgCAGAAAVIAAAZg");
        this.shape_2.setTransform(109.7,12.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_3.setTransform(101.4,12.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#4B3F80").s().p("AgdAvQgLgMAAgVQABgUAJgLQALgLAOAAQANAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAGgGAAgNQAAgOgGgFQgFgHgHAAQgHAAgGAGg");
        this.shape_4.setTransform(92,10.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAVAAIAAAMQAEgIAEgDQAEgCAFAAQAIAAAHAEIgHATQgGgDgEgBQgFABgDACQgDACgBAHQgCAGAAAVIAAAZg");
        this.shape_5.setTransform(84.8,12.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#4B3F80").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgKAKgFQAKgFALAAQATAAAMAMQAMAMAAASQAAATgMAMQgNANgSAAQgKAAgLgGgAgNgSQgGAHAAALQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgIAAgFAGg");
        this.shape_6.setTransform(76.2,12.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_7.setTransform(62.3,12.4);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4B3F80").s().p("AgCA3QgGgCgBgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIADARQgJADgJAAQgGAAgDgCg");
        this.shape_8.setTransform(55.3,11);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#4B3F80").s().p("AgeAlQgIgIAAgKQAAgHAEgGQADgFAGgCQAGgDAMgCQAOgDAGgDIAAgCQAAgGgDgDQgEgDgHABQgGgBgEADQgCACgCAGIgVgDQAEgNAIgFQAIgHAQABQAOAAAIADQAGADADAGQADAFAAAOIAAAZIABAQQABAFADAGIgWAAIgCgGIgBgDQgFAGgGACQgGADgHABQgNgBgHgGgAAAAFQgIACgEACQgEADAAAFQAAAEADADQAEAEAGAAQAEAAAFgEQAFgDABgEQABgDAAgIIAAgEIgNADg");
        this.shape_9.setTransform(48.2,12.4);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
        this.shape_10.setTransform(39.2,12.4);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#4B3F80").s().p("AgaAqIAAhSIAVAAIAAAMQAFgIADgDQAEgCAGAAQAHAAAHAEIgHATQgFgDgGgBQgEABgDACQgCACgCAHQgCAGAAAVIAAAZg");
        this.shape_11.setTransform(32.3,12.3);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#4B3F80").s().p("AgiAsQgPgQAAgbQAAgcAPgPQAOgQAYAAQAUAAAOAMQAHAIAFANIgYAGQgCgJgGgFQgHgFgIAAQgMAAgIAJQgIAJAAAUQAAAVAHAJQAJAJALAAQAJAAAHgFQAGgGADgNIAXAHQgFATgMAJQgNAJgRAAQgXAAgOgPg");
        this.shape_12.setTransform(22.8,10.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib._01_txt, new cjs.Rectangle(0,0,114.4,21.9), null);


    (lib.perso_02 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // head
        this.instance = new lib.head_01("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(16.9,28,1,1,0,0,0,8.1,28);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({startPosition:0},0).wait(1).to({regX:10.3,regY:22.5,rotation:1.5,x:19.8,y:22.7},0).wait(1).to({rotation:6.6,x:22.4,y:23.4},0).wait(1).to({rotation:15.4,x:26.7,y:24.5},0).wait(1).to({rotation:24.4,x:31,y:25.8},0).wait(1).to({rotation:30.5,x:33.9,y:26.8},0).wait(1).to({rotation:33.6,x:35.4,y:27.3},0).wait(1).to({regX:8.2,regY:27.9,rotation:34.5,x:30.9,y:30.7},0).wait(8).to({startPosition:0},0).wait(1).to({regX:10.3,regY:22.5,rotation:34,x:35.4,y:27.3},0).wait(1).to({rotation:32.4,x:34.7,y:27.1},0).wait(1).to({rotation:29.5,x:33.3,y:26.6},0).wait(1).to({rotation:25,x:31.2,y:25.9},0).wait(1).to({rotation:18.9,x:28.3,y:25.1},0).wait(1).to({rotation:12,x:24.9,y:24.1},0).wait(1).to({rotation:5.6,x:21.7,y:23.3},0).wait(1).to({rotation:1.4,x:19.6,y:22.8},0).wait(1).to({regX:8.1,regY:28,rotation:0,x:16.9,y:28},0).wait(47));

        // body
        this.instance_1 = new lib.body_01("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(21.6,51.4,1,1,0,0,0,13.6,27.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({regY:38.9,y:62.5},0).wait(1).to({regY:22.3,rotation:0.8,x:21.9,y:46},0).wait(1).to({rotation:3.7,x:22.9,y:46.4},0).wait(1).to({rotation:8.7,x:24.7,y:47.1},0).wait(1).to({rotation:13.8,x:26.5,y:48},0).wait(1).to({rotation:17.2,x:27.7,y:48.7},0).wait(1).to({rotation:19,x:28.3,y:49.1},0).wait(1).to({regY:38.9,rotation:19.5,x:22.9,y:64.8},0).wait(8).to({startPosition:0},0).wait(1).to({regY:22.3,rotation:19.1,x:28.4,y:49.1},0).wait(1).to({rotation:18,x:28.1,y:49},0).wait(1).to({rotation:16,x:27.4,y:48.8},0).wait(1).to({rotation:12.9,x:26.6,y:48.5},0).wait(1).to({rotation:8.7,x:25.4,y:48.2},0).wait(1).to({rotation:3.8,x:23.9,y:48},0).wait(1).to({rotation:-0.6,x:22.6,y:47.9},0).wait(1).to({rotation:-3.5,x:21.6,y:47.8},0).wait(1).to({regY:39,rotation:-4.5,x:22.7,y:64.5},0).wait(47));

        // arm
        this.instance_2 = new lib.arm_01("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(30.6,29.2,1,1,40.4,0,0,3.1,3.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({startPosition:0},0).wait(1).to({regX:9.6,rotation:40.2,x:35.6,y:33.4},0).wait(1).to({rotation:39.6},0).wait(1).to({rotation:38.3,x:35.7,y:33.3},0).wait(1).to({rotation:36.3,x:35.8,y:33.1},0).wait(1).to({rotation:33.4,x:36,y:32.8},0).wait(1).to({rotation:29.8,x:36.2,y:32.4},0).wait(1).to({rotation:25.9,x:36.5,y:32.1},0).wait(1).to({rotation:22.3,x:36.6,y:31.7},0).wait(1).to({rotation:19.1,x:36.7,y:31.4},0).wait(1).to({rotation:16.6,x:36.8,y:31.1},0).wait(1).to({rotation:14.7,x:36.9,y:30.9},0).wait(1).to({rotation:13.2,y:30.7},0).wait(1).to({rotation:12.1,x:37,y:30.6},0).wait(1).to({rotation:11.3},0).wait(1).to({rotation:10.8,y:30.5},0).wait(1).to({rotation:10.5,y:30.4},0).wait(1).to({regX:3.1,x:30.7,y:29.3},0).wait(13).to({startPosition:0},0).wait(1).to({regX:9.6,rotation:10.9,x:37,y:30.5},0).wait(1).to({rotation:12.5,y:30.8},0).wait(1).to({rotation:15.7,x:36.9,y:31.2},0).wait(1).to({rotation:21.1,x:36.7,y:32},0).wait(1).to({rotation:29.3,x:36.3,y:33.1},0).wait(1).to({rotation:39.2,x:35.7,y:34.4},0).wait(1).to({rotation:47.3,x:35,y:35.3},0).wait(1).to({rotation:52.3,x:34.6,y:35.9},0).wait(1).to({rotation:54.8,x:34.4,y:36.1},0).wait(1).to({regX:3.1,rotation:55.5,x:30.7,y:30.8},0).wait(10).to({startPosition:0},0).wait(1).to({regX:9.6,scaleX:1,rotation:56.3,x:34.7,y:36.5},0).wait(1).to({scaleX:1.02,rotation:59.2,x:36.3,y:37.9},0).wait(1).to({scaleX:1.05,rotation:64.2,x:38.8,y:40.2},0).wait(1).to({scaleX:1.08,rotation:69.2,x:41.4,y:42.5},0).wait(1).to({scaleX:1.1,rotation:72.7,x:43.1,y:44.1},0).wait(1).to({scaleX:1.1,rotation:74.4,x:43.9,y:44.8},0).wait(1).to({regX:3.3,scaleX:1.11,rotation:74.9,x:42.3,y:38.2},0).wait(8).to({startPosition:0},0).wait(1).to({regX:9.6,scaleX:1.11,x:43.9,y:44.8},0).wait(1).to({scaleX:1.1,rotation:74.7,x:43.4,y:44.3},0).wait(1).to({scaleX:1.09,rotation:74.3,x:42.4,y:43.5},0).wait(1).to({scaleX:1.08,rotation:73.7,x:40.9,y:42.2},0).wait(1).to({scaleX:1.06,rotation:72.9,x:39,y:40.5},0).wait(1).to({scaleX:1.04,rotation:72,x:36.8,y:38.5},0).wait(1).to({scaleX:1.02,rotation:71.2,x:34.6,y:36.8},0).wait(1).to({scaleX:1,rotation:70.6,x:33.3,y:35.6},0).wait(1).to({regX:3.2,scaleX:1,rotation:70.4,x:30.7,y:29.3},0).wait(47));

        // arm
        this.instance_3 = new lib.arm_01("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(40.5,37.8,0.899,0.998,-40.4,0,0,3.1,3.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({startPosition:0},0).wait(1).to({regX:9.6,regY:3.1,rotation:-40.2,x:44.9,y:33.8},0).wait(1).to({scaleX:0.9,rotation:-39.7,x:45.1},0).wait(1).to({scaleX:0.9,rotation:-38.7,x:45.3,y:33.6},0).wait(1).to({rotation:-37.1,x:45.6,y:33.3},0).wait(1).to({rotation:-34.9,x:46,y:32.9},0).wait(1).to({rotation:-32,x:46.6,y:32.5},0).wait(1).to({rotation:-29,x:47.2,y:32},0).wait(1).to({rotation:-26.1,x:47.7,y:31.6},0).wait(1).to({scaleX:0.9,rotation:-23.7,x:48.2,y:31.2},0).wait(1).to({scaleX:0.9,rotation:-21.7,x:48.6,y:30.9},0).wait(1).to({rotation:-20.2,x:48.8,y:30.6},0).wait(1).to({scaleX:0.9,rotation:-19,x:49.1,y:30.5},0).wait(1).to({rotation:-18.2,x:49.2,y:30.3},0).wait(1).to({scaleX:0.9,rotation:-17.6,x:49.3},0).wait(1).to({rotation:-17.2,x:49.4,y:30.2},0).wait(1).to({rotation:-17},0).wait(1).to({regX:3.1,regY:3.2,rotation:-16.9,x:43.9,y:32},0).wait(13).to({startPosition:0},0).wait(1).to({regX:9.6,regY:3.1,rotation:-15.3,x:49.4,y:30.4},0).wait(1).to({scaleX:0.9,rotation:-9.7,y:31.3},0).wait(1).to({scaleX:0.9,rotation:1.3,x:49.1,y:33.1},0).wait(1).to({rotation:20.2,x:48.1,y:36.1},0).wait(1).to({scaleX:0.9,rotation:48.7,x:45.5,y:40.4},0).wait(1).to({rotation:83.1,x:41.2,y:43.9},0).wait(1).to({rotation:111.6,x:37.3,y:45.4},0).wait(1).to({rotation:129.1,x:35.1,y:45.7},0).wait(1).to({rotation:137.5,x:34.2,y:45.6},0).wait(1).to({regX:3.2,regY:3.2,rotation:139.9,x:38.4,y:41.8},0).wait(10).to({startPosition:0},0).wait(1).to({regX:9.6,regY:3.1,scaleX:0.9,rotation:136.7,x:34.6,y:46.4},0).wait(1).to({scaleX:0.92,rotation:125.6,x:36.6,y:48.9},0).wait(1).to({scaleX:0.95,rotation:106.5,x:40.6,y:52.9},0).wait(1).to({scaleX:0.97,rotation:87,x:44.8,y:56.3},0).wait(1).to({scaleX:0.99,rotation:73.7,x:47.7,y:58.3},0).wait(1).to({scaleX:1,rotation:67,x:49.2,y:59.1},0).wait(1).to({regX:3.5,scaleX:1,rotation:65.1,x:46.9,y:53.7},0).wait(8).to({startPosition:0},0).wait(1).to({regX:9.6,scaleX:1,rotation:64,x:49.4,y:59},0).wait(1).to({scaleX:1,rotation:60.5,x:49.2,y:58.3},0).wait(1).to({scaleX:0.99,rotation:54.1,x:48.8,y:57},0).wait(1).to({scaleX:0.97,rotation:44.3,x:48,y:54.9},0).wait(1).to({scaleX:0.96,rotation:31.1,x:46.8,y:51.9},0).wait(1).to({scaleX:0.94,rotation:15.8,x:45,y:48.4},0).wait(1).to({scaleX:0.92,rotation:1.8,x:43,y:45},0).wait(1).to({scaleX:0.9,rotation:-7.4,x:41.5,y:42.8},0).wait(1).to({regX:3.2,regY:3.2,scaleX:0.9,rotation:-10.4,x:35.5,y:43.2},0).wait(47));

        // hand
        this.instance_4 = new lib.hand_02("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(50.3,29.3,1,1,0,0,0,1.3,9.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({startPosition:0},0).wait(1).to({regX:5.2,regY:5.8,x:54.3,y:25.9},0).wait(1).to({rotation:0.2,x:54.4},0).wait(1).to({rotation:0.5,x:54.7},0).wait(1).to({rotation:0.9,x:55.2,y:25.8},0).wait(1).to({rotation:1.5,x:55.9,y:25.7},0).wait(1).to({rotation:2.3,x:56.8,y:25.6},0).wait(1).to({rotation:3.1,x:57.8},0).wait(1).to({rotation:3.9,x:58.7,y:25.5},0).wait(1).to({rotation:4.6,x:59.5,y:25.4},0).wait(1).to({rotation:5.1,x:60.1},0).wait(1).to({rotation:5.6,x:60.6,y:25.3},0).wait(1).to({rotation:5.9,x:60.9},0).wait(1).to({rotation:6.1,x:61.2,y:25.2},0).wait(1).to({rotation:6.3,x:61.3},0).wait(1).to({rotation:6.4,x:61.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:1.3,regY:9.2,rotation:6.5,x:57.3,y:28.2},0).wait(13).to({startPosition:0},0).wait(1).to({regX:5.2,regY:5.8,rotation:4.9,x:61.2,y:25.4},0).wait(1).to({rotation:-0.4,x:60,y:26.2},0).wait(1).to({rotation:-11,x:57.5,y:27.8},0).wait(1).to({rotation:-29,x:53.1,y:30.8},0).wait(1).to({rotation:-56.3,x:46.1,y:36.4},0).wait(1).to({rotation:-89.2,x:37.8,y:44.6},0).wait(1).to({rotation:-116.5,x:31.8,y:52.4},0).wait(1).to({rotation:-133.2,x:28.6,y:57.4},0).wait(1).to({rotation:-141.3,x:27.2,y:59.9},0).wait(1).to({regX:1.3,regY:9.2,rotation:-143.5,x:31.9,y:60.1},0).to({_off:true},1).wait(9).to({_off:false},0).wait(1).to({regX:5.2,regY:5.8,rotation:-148.1,x:27.7,y:61.2},0).wait(1).to({rotation:-164.2,x:31.3,y:63.6},0).wait(1).to({rotation:-191.6,x:38.1,y:67.2},0).wait(1).to({rotation:-219.7,x:45.9,y:70},0).wait(1).to({rotation:-238.7,x:51.4,y:71.2},0).wait(1).to({rotation:-248.3,x:54.1,y:71.6},0).wait(1).to({regX:1.3,regY:9.2,rotation:-251.1,x:53,y:66.9},0).wait(8).to({startPosition:0},0).wait(1).to({regX:5.2,regY:5.8,rotation:-252.6,x:54.9,y:71.2},0).wait(1).to({rotation:-257.7,x:55.1,y:69.8},0).wait(1).to({rotation:-267,x:55.3,y:67.2},0).wait(1).to({rotation:-281.1,x:55.4,y:63},0).wait(1).to({rotation:-300.2,x:55.2,y:57},0).wait(1).to({rotation:-322.2,x:54.4,y:49.9},0).wait(1).to({rotation:-342.4,x:52.9,y:43.4},0).wait(1).to({rotation:-355.7,x:51.6,y:39.2},0).wait(1).to({regX:1.3,regY:9.2,rotation:-360,x:47.3,y:41.3},0).wait(47));

        // arm
        this.instance_5 = new lib.arm_01("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(12.3,32.6,1,1,128.2,0,0,3.3,3.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({startPosition:0},0).wait(1).to({regX:9.6,rotation:128.7,x:8.9,y:37.5},0).wait(1).to({rotation:130.5,x:10.5},0).wait(1).to({rotation:133.4,x:13.3,y:37.6},0).wait(1).to({rotation:136.4,x:16.2},0).wait(1).to({rotation:138.5,x:18.2},0).wait(1).to({rotation:139.5,x:19.2},0).wait(1).to({regX:3.3,rotation:139.8,x:24.3,y:33.5},0).wait(8).to({startPosition:0},0).wait(1).to({regX:9.6,rotation:139.6,x:19.3,y:37.5},0).wait(1).to({rotation:139.1,x:18.8},0).wait(1).to({rotation:138.1,x:17.9},0).wait(1).to({rotation:136.6,x:16.4},0).wait(1).to({rotation:134.6,x:14.5},0).wait(1).to({rotation:132.2,x:12.2,y:37.4},0).wait(1).to({rotation:130.1,x:10.2},0).wait(1).to({rotation:128.7,x:8.9},0).wait(1).to({regX:3.3,rotation:128.2,x:12.3,y:32.6},0).wait(47));

        // arm
        this.instance_6 = new lib.arm_01("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(4.3,42.9,0.898,0.998,47.4,0,0,3.3,3.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79).to({startPosition:0},0).wait(1).to({regX:9.6,regY:3.1,rotation:48.9,x:8.6,y:46.9},0).wait(1).to({rotation:54.1,x:9.6,y:47.2},0).wait(1).to({rotation:62.8,x:11.3,y:47.5},0).wait(1).to({rotation:71.8,x:13,y:47.7},0).wait(1).to({rotation:77.9,x:14,y:47.8},0).wait(1).to({rotation:81,x:14.6},0).wait(1).to({regX:3.4,regY:3.3,rotation:81.9,x:13.8,y:42.2},0).wait(8).to({startPosition:0},0).wait(1).to({regX:9.6,regY:3.1,rotation:81.4,x:14.7,y:47.7},0).wait(1).to({rotation:79.8,x:14.3},0).wait(1).to({rotation:76.9,x:13.9},0).wait(1).to({rotation:72.4,x:13,y:47.6},0).wait(1).to({rotation:66.4,x:11.9,y:47.5},0).wait(1).to({rotation:59.4,x:10.6,y:47.3},0).wait(1).to({rotation:53,x:9.4,y:47},0).wait(1).to({rotation:48.8,x:8.5,y:46.9},0).wait(1).to({regX:3.3,regY:3.3,rotation:47.4,x:4.3,y:42.9},0).wait(47));

        // leg
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#4B3F80").ss(2,0,0,3).p("ABbjRQgFDDg1ClIAPAQQAQASACAJQACAKgjgGQgSgDgRgEAhajRQAECCAwDgIgLAOQgMARgEAMQgEALAigDIAhgFIACmQ");
        this.shape.setTransform(21.5,87.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AAhDLIgjgHIACmQIBaAAQgEDDg1ClIAPAQQAQASACAJQABAGgOAAQgHAAgNgCgAhBDBQAEgMAMgRIALgOQgwjggEiCIBaAAIgCGQIgiAFIgMABQgUAAADgJgAAAjMg");
        this.shape_1.setTransform(21.5,87.2);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(150));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1.3,0,59.8,109.2);


    (lib.line_01 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.line();
        this.instance.parent = this;
        this.instance.setTransform(0,73.1,1,0.1,0,0,0,0,73.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:36.5,scaleY:0.1,y:69.3},0).wait(1).to({scaleY:0.1,y:69.2},0).wait(1).to({scaleY:0.11,y:69},0).wait(1).to({scaleY:0.12,y:68.6},0).wait(1).to({scaleY:0.13,y:68.1},0).wait(1).to({scaleY:0.15,y:67.4},0).wait(1).to({scaleY:0.18,y:66.5},0).wait(1).to({scaleY:0.21,y:65.4},0).wait(1).to({scaleY:0.25,y:63.9},0).wait(1).to({scaleY:0.3,y:62},0).wait(1).to({scaleY:0.36,y:59.6},0).wait(1).to({scaleY:0.45,y:56.3},0).wait(1).to({scaleY:0.59,y:51.2},0).wait(1).to({regY:73,scaleY:1,y:73},0).wait(1).to({regY:36.5,scaleY:0.46,y:4},0).wait(1).to({scaleY:0.3,y:-5.4},0).wait(1).to({scaleY:0.21,y:-11},0).wait(1).to({scaleY:0.15,y:-14.5},0).wait(1).to({scaleY:0.11,y:-16.8},0).wait(1).to({scaleY:0.09,y:-18.2},0).wait(1).to({scaleY:0.08,y:-19},0).wait(1).to({scaleY:0.07,y:-19.4},0).wait(1).to({regY:71.5,scaleY:0.07,y:-17},0).to({_off:true},1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3,65.4,6,7.9);


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


    (lib._07 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_9 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

        // Layer 1
        this.instance = new lib._07_txt();
        this.instance.parent = this;
        this.instance.setTransform(65.6,11.1,2,2,0,0,0,65.6,11);
        this.instance.alpha = 0.102;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:65.4,regY:10.8,scaleX:2,scaleY:2,x:65.3,y:10.7,alpha:0.103},0).wait(1).to({scaleX:1.99,scaleY:1.99,alpha:0.108},0).wait(1).to({scaleX:1.98,scaleY:1.98,alpha:0.121},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:65.2,alpha:0.144},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:65.3,alpha:0.181},0).wait(1).to({scaleX:1.85,scaleY:1.85,alpha:0.238},0).wait(1).to({scaleX:1.75,scaleY:1.75,alpha:0.327},0).wait(1).to({scaleX:1.58,scaleY:1.58,y:10.8,alpha:0.477},0).wait(1).to({regX:65.6,regY:11,scaleX:1,scaleY:1,x:65.6,y:11,alpha:1},0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-65.6,-10.9,262.5,43.8);


    (lib._06 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_9 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

        // Layer 1
        this.instance = new lib._06_txt();
        this.instance.parent = this;
        this.instance.setTransform(68.9,11.1,2,2,0,0,0,68.8,11);
        this.instance.alpha = 0.102;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:68.5,regY:10.8,scaleX:2,scaleY:2,x:68.3,y:10.7,alpha:0.103},0).wait(1).to({scaleX:1.99,scaleY:1.99,alpha:0.108},0).wait(1).to({scaleX:1.98,scaleY:1.98,alpha:0.121},0).wait(1).to({scaleX:1.95,scaleY:1.95,alpha:0.144},0).wait(1).to({scaleX:1.91,scaleY:1.91,alpha:0.181},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:68.4,alpha:0.238},0).wait(1).to({scaleX:1.75,scaleY:1.75,alpha:0.327},0).wait(1).to({scaleX:1.58,scaleY:1.58,y:10.8,alpha:0.477},0).wait(1).to({regX:68.8,regY:11,scaleX:1,scaleY:1,x:68.8,y:11,alpha:1},0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-68.7,-10.9,275,43.8);


    (lib._05 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_9 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

        // Layer 1
        this.instance = new lib._05_txt();
        this.instance.parent = this;
        this.instance.setTransform(61.1,11.1,2,2,0,0,0,61.1,11);
        this.instance.alpha = 0.102;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:61.5,regY:12.4,scaleX:2,scaleY:2,x:61.9,y:13.9,alpha:0.103},0).wait(1).to({scaleX:1.99,scaleY:1.99,alpha:0.108},0).wait(1).to({scaleX:1.98,scaleY:1.98,alpha:0.121},0).wait(1).to({scaleX:1.95,scaleY:1.95,y:13.8,alpha:0.144},0).wait(1).to({scaleX:1.91,scaleY:1.91,alpha:0.181},0).wait(1).to({scaleX:1.85,scaleY:1.85,y:13.7,alpha:0.238},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:61.8,y:13.5,alpha:0.327},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:61.7,y:13.3,alpha:0.477},0).wait(1).to({regX:61.1,regY:11,scaleX:1,scaleY:1,x:61.1,y:11,alpha:1},0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-61.1,-10.9,244.6,43.8);


    (lib._04 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_9 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

        // Layer 1
        this.instance = new lib._04_txt();
        this.instance.parent = this;
        this.instance.setTransform(55.1,11.1,2,2,0,0,0,55,11);
        this.instance.alpha = 0.102;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:54.9,regY:12.4,scaleX:2,scaleY:2,x:54.9,y:13.9,alpha:0.103},0).wait(1).to({scaleX:1.99,scaleY:1.99,alpha:0.108},0).wait(1).to({scaleX:1.98,scaleY:1.98,alpha:0.121},0).wait(1).to({scaleX:1.95,scaleY:1.95,y:13.8,alpha:0.144},0).wait(1).to({scaleX:1.91,scaleY:1.91,alpha:0.181},0).wait(1).to({scaleX:1.85,scaleY:1.85,y:13.7,alpha:0.238},0).wait(1).to({scaleX:1.75,scaleY:1.75,y:13.5,alpha:0.327},0).wait(1).to({scaleX:1.58,scaleY:1.58,y:13.3,alpha:0.477},0).wait(1).to({regX:55,regY:11,scaleX:1,scaleY:1,x:55,y:11,alpha:1},0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-54.9,-10.9,219.9,43.8);


    (lib._03 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_9 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

        // Layer 1
        this.instance = new lib._03_txt();
        this.instance.parent = this;
        this.instance.setTransform(59.1,11.1,2,2,0,0,0,59,11);
        this.instance.alpha = 0.102;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:59.3,regY:12.3,scaleX:2,scaleY:2,x:59.7,y:13.7,alpha:0.103},0).wait(1).to({scaleX:1.99,scaleY:1.99,alpha:0.108},0).wait(1).to({scaleX:1.98,scaleY:1.98,alpha:0.121},0).wait(1).to({scaleX:1.95,scaleY:1.95,y:13.6,alpha:0.144},0).wait(1).to({scaleX:1.91,scaleY:1.91,alpha:0.181},0).wait(1).to({scaleX:1.85,scaleY:1.85,y:13.5,alpha:0.238},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:59.6,y:13.3,alpha:0.327},0).wait(1).to({scaleX:1.58,scaleY:1.58,y:13.1,alpha:0.477},0).wait(1).to({regX:59,regY:11,scaleX:1,scaleY:1,x:59,y:11,alpha:1},0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-58.9,-10.9,235.8,43.8);


    (lib._02 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_9 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

        // Layer 1
        this.instance = new lib._02_txt();
        this.instance.parent = this;
        this.instance.setTransform(48.7,11.1,2,2,0,0,0,48.7,11);
        this.instance.alpha = 0.102;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:48.9,regY:10.9,scaleX:2,scaleY:2,x:49.2,y:10.9,alpha:0.103},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:49.1,alpha:0.108},0).wait(1).to({scaleX:1.98,scaleY:1.98,alpha:0.121},0).wait(1).to({scaleX:1.95,scaleY:1.95,alpha:0.144},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:49.2,alpha:0.181},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:49.1,alpha:0.238},0).wait(1).to({scaleX:1.75,scaleY:1.75,alpha:0.327},0).wait(1).to({scaleX:1.58,scaleY:1.58,alpha:0.477},0).wait(1).to({regX:48.7,regY:11,scaleX:1,scaleY:1,x:48.7,y:11,alpha:1},0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-48.7,-10.9,194.9,43.8);


    (lib._01 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_9 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

        // Layer 1
        this.instance = new lib._01_txt();
        this.instance.parent = this;
        this.instance.setTransform(57.2,11.1,2,2,0,0,0,57.2,11);
        this.instance.alpha = 0.102;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:57.8,regY:10.8,scaleX:2,scaleY:2,x:58.5,y:10.7,alpha:0.103},0).wait(1).to({scaleX:1.99,scaleY:1.99,alpha:0.108},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:58.4,alpha:0.121},0).wait(1).to({scaleX:1.95,scaleY:1.95,alpha:0.144},0).wait(1).to({scaleX:1.91,scaleY:1.91,alpha:0.181},0).wait(1).to({scaleX:1.85,scaleY:1.85,alpha:0.238},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:58.3,alpha:0.327},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:58.2,y:10.8,alpha:0.477},0).wait(1).to({regX:57.2,regY:11,scaleX:1,scaleY:1,x:57.2,y:11,alpha:1},0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-57.2,-10.9,228.8,43.8);


    (lib.SC = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // SC
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#4B3F80").ss(2,1,1).p("AizA9ICnAAAizCIIBhAAAC0CkIgZATIADAiIgigDIgTAZIgUgZIgiADIADgiIgZgTIAZgUIgDgiIAiADIAUgZIATAZIAigDIgDAigAizgNIFQAAAizhYIFQAAAizijIEoAAAizjuIFQAA");
        this.shape.setTransform(36.8,38.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#4B3F80").ss(4,1,1).p("AifmKIIHAAQgUAKgUAUQgoAoAAAyIAAIlQAAB4h4AAIoHAAIAogeQAogoAAgyIAAolQAAh4B4AAg");
        this.shape_1.setTransform(36,39.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AlnGLIAogeQAogoAAgyIAAolQAAh4B4AAIIHAAQgUAKgUAUQgoAoAAAyIAAIlQAAB4h4AAgABxDmIATgZIAiADIgDgiIAZgTIgZgUIADghIgiACIgTgZIgUAZIgigCIADAhIgZAUIAZATIgDAiIAigDgAhKCAIhiAAgAgEA0IioAAgAClgVIlRAAgAClhgIlRAAgAB9isIkpAAgAClj2IlRAAgABdDNIgiADIADgiIgZgTIAZgUIgDghIAiACIAUgZIATAZIAigCIgDAhIAZAUIgZATIADAiIgigDIgTAZgAC8Cbg");
        this.shape_2.setTransform(36,39.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},149).wait(1));

        // progress
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#4B3F80").s().p("AgQBGQgVAAAAgWIAAhfQAAgWAVAAIAhAAQAVAAgBAWIAABfQABAWgVAAg");
        this.shape_3.setTransform(-49.8,95.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#4B3F80").s().p("AgbBGQgVAAAAgWIAAhfQAAgWAVAAIA4AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_4.setTransform(-48.6,95.5);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#4B3F80").s().p("AgmBGQgVAAAAgWIAAhfQAAgWAVAAIBOAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_5.setTransform(-47.5,95.5);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#4B3F80").s().p("AgxBGQgUAAAAgWIAAhfQAAgWAUAAIBjAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_6.setTransform(-46.5,95.5);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#4B3F80").s().p("Ag6BGQgVAAAAgWIAAhfQAAgWAVAAIB2AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_7.setTransform(-45.5,95.5);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4B3F80").s().p("AhDBGQgVAAAAgWIAAhfQAAgWAVAAICIAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_8.setTransform(-44.6,95.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#4B3F80").s().p("AhMBGQgUAAAAgWIAAhfQAAgWAUAAICZAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_9.setTransform(-43.8,95.5);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#4B3F80").s().p("AhTBGQgVAAAAgWIAAhfQAAgWAVAAICoAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_10.setTransform(-43,95.5);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#4B3F80").s().p("AhbBGQgUAAAAgWIAAhfQAAgWAUAAIC3AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_11.setTransform(-42.3,95.5);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#4B3F80").s().p("AhhBGQgVAAAAgWIAAhfQAAgWAVAAIDEAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_12.setTransform(-41.7,95.5);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#4B3F80").s().p("AhnBGQgVAAAAgWIAAhfQAAgWAVAAIDQAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_13.setTransform(-41.1,95.5);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#4B3F80").s().p("AhsBGQgVAAAAgWIAAhfQAAgWAVAAIDaAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_14.setTransform(-40.5,95.5);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#4B3F80").s().p("AhxBGQgVAAAAgWIAAhfQAAgWAVAAIDkAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_15.setTransform(-40.1,95.5);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#4B3F80").s().p("Ah1BGQgVAAAAgWIAAhfQAAgWAVAAIDsAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_16.setTransform(-39.7,95.5);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#4B3F80").s().p("Ah5BGQgUAAAAgWIAAhfQAAgWAUAAIDzAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_17.setTransform(-39.3,95.5);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#4B3F80").s().p("Ah7BGQgVAAAAgWIAAhfQAAgWAVAAID4AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_18.setTransform(-39,95.5);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#4B3F80").s().p("Ah+BGQgUAAAAgWIAAhfQAAgWAUAAID9AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_19.setTransform(-38.8,95.5);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#4B3F80").s().p("Ah/BGQgVAAAAgWIAAhfQAAgWAVAAIEAAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_20.setTransform(-38.7,95.5);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#4B3F80").s().p("AiABGQgVAAAAgWIAAhfQAAgWAVAAIECAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_21.setTransform(-38.6,95.5);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#4B3F80").s().p("AiLBGQgUAAAAgWIAAhfQAAgWAUAAIEXAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_22.setTransform(-37.5,95.5);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#4B3F80").s().p("AiUBGQgVAAAAgWIAAhfQAAgWAVAAIEqAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_23.setTransform(-36.5,95.5);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#4B3F80").s().p("AidBGQgVAAAAgWIAAhfQAAgWAVAAIE8AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_24.setTransform(-35.6,95.5);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#4B3F80").s().p("AimBGQgVAAAAgWIAAhfQAAgWAVAAIFOAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_25.setTransform(-34.8,95.5);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#4B3F80").s().p("AiuBGQgVAAAAgWIAAhfQAAgWAVAAIFeAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_26.setTransform(-34,95.5);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#4B3F80").s().p("Ai2BGQgUAAAAgWIAAhfQAAgWAUAAIFtAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_27.setTransform(-33.2,95.5);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#4B3F80").s().p("Ai8BGQgVAAAAgWIAAhfQAAgWAVAAIF6AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_28.setTransform(-32.5,95.5);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#4B3F80").s().p("AjDBGQgVAAAAgWIAAhfQAAgWAVAAIGIAAQATAAAAAWIAABfQAAAWgTAAg");
        this.shape_29.setTransform(-31.9,95.5);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#4B3F80").s().p("AjJBGQgUAAAAgWIAAhfQAAgWAUAAIGTAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_30.setTransform(-31.3,95.5);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#4B3F80").s().p("AjOBGQgVAAAAgWIAAhfQAAgWAVAAIGdAAQAVAAAAAWIAABfQAAAWgVAAg");
        this.shape_31.setTransform(-30.8,95.5);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#4B3F80").s().p("AjTBGQgUAAAAgWIAAhfQAAgWAUAAIGnAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_32.setTransform(-30.3,95.5);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#4B3F80").s().p("AjXBGQgVAAAAgWIAAhfQAAgWAVAAIGvAAQAVAAAAAWIAABfQAAAWgVAAg");
        this.shape_33.setTransform(-29.9,95.5);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#4B3F80").s().p("AjaBGQgVAAAAgWIAAhfQAAgWAVAAIG2AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_34.setTransform(-29.5,95.5);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#4B3F80").s().p("AjdBGQgVAAAAgWIAAhfQAAgWAVAAIG8AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_35.setTransform(-29.2,95.5);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#4B3F80").s().p("AjgBGQgVAAAAgWIAAhfQAAgWAVAAIHBAAQAVAAAAAWIAABfQAAAWgVAAg");
        this.shape_36.setTransform(-29,95.5);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#4B3F80").s().p("AjiBGQgVAAAAgWIAAhfQAAgWAVAAIHGAAQATAAAAAWIAABfQAAAWgTAAg");
        this.shape_37.setTransform(-28.8,95.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#4B3F80").s().p("AjjBGQgVAAAAgWIAAhfQAAgWAVAAIHIAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_38.setTransform(-28.6,95.5);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#4B3F80").s().p("AjkBGQgVAAAAgWIAAhfQAAgWAVAAIHKAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_39.setTransform(-28.6,95.5);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#4B3F80").s().p("AjrBGQgVAAAAgWIAAhfQAAgWAVAAIHYAAQATAAAAAWIAABfQAAAWgTAAg");
        this.shape_40.setTransform(-27.9,95.5);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#4B3F80").s().p("AjyBGQgUAAAAgWIAAhfQAAgWAUAAIHlAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_41.setTransform(-27.2,95.5);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#4B3F80").s().p("Aj4BGQgVAAAAgWIAAhfQAAgWAVAAIHyAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_42.setTransform(-26.6,95.5);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#4B3F80").s().p("Aj/BGQgUAAAAgWIAAhfQAAgWAUAAIH/AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_43.setTransform(-25.9,95.5);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#4B3F80").s().p("AkFBGQgVAAAAgWIAAhfQAAgWAVAAIIMAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_44.setTransform(-25.2,95.5);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#4B3F80").s().p("AkMBGQgVAAAAgWIAAhfQAAgWAVAAIIZAAQAVAAgBAWIAABfQABAWgVAAg");
        this.shape_45.setTransform(-24.6,95.5);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#4B3F80").s().p("AkSBGQgVAAAAgWIAAhfQAAgWAVAAIImAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_46.setTransform(-23.9,95.5);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#4B3F80").s().p("AkZBGQgVAAAAgWIAAhfQAAgWAVAAII0AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_47.setTransform(-23.3,95.5);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#4B3F80").s().p("AkgBGQgUAAAAgWIAAhfQAAgWAUAAIJBAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_48.setTransform(-22.6,95.5);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#4B3F80").s().p("AkmBGQgVAAAAgWIAAhfQAAgWAVAAIJOAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_49.setTransform(-22,95.5);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#4B3F80").s().p("AktBGQgUAAAAgWIAAhfQAAgWAUAAIJbAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_50.setTransform(-21.3,95.5);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#4B3F80").s().p("AkzBGQgVAAAAgWIAAhfQAAgWAVAAIJoAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_51.setTransform(-20.6,95.5);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#4B3F80").s().p("Ak6BGQgVAAAAgWIAAhfQAAgWAVAAIJ1AAQAVAAAAAWIAABfQAAAWgVAAg");
        this.shape_52.setTransform(-20,95.5);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#4B3F80").s().p("AlABGQgVAAAAgWIAAhfQAAgWAVAAIKCAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_53.setTransform(-19.3,95.5);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#4B3F80").s().p("AlHBGQgVAAAAgWIAAhfQAAgWAVAAIKQAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_54.setTransform(-18.7,95.5);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#4B3F80").s().p("AlOBGQgUAAAAgWIAAhfQAAgWAUAAIKdAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_55.setTransform(-18,95.5);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#4B3F80").s().p("AlUBGQgVAAAAgWIAAhfQAAgWAVAAIKqAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_56.setTransform(-17.4,95.5);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#4B3F80").s().p("AlbBGQgVAAAAgWIAAhfQAAgWAVAAIK4AAQATAAABAWIAABfQgBAWgTAAg");
        this.shape_57.setTransform(-16.7,95.5);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#4B3F80").s().p("AlhBGQgVAAAAgWIAAhfQAAgWAVAAILEAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_58.setTransform(-16,95.5);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#4B3F80").s().p("Al2BGQgVAAAAgWIAAhfQAAgWAVAAILuAAQATAAABAWIAABfQgBAWgTAAg");
        this.shape_59.setTransform(-14,95.5);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#4B3F80").s().p("AmJBGQgVAAAAgWIAAhfQAAgWAVAAIMUAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_60.setTransform(-12,95.5);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#4B3F80").s().p("AmcBGQgUAAAAgWIAAhfQAAgWAUAAIM5AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_61.setTransform(-10.2,95.5);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#4B3F80").s().p("AmtBGQgUAAAAgWIAAhfQAAgWAUAAINbAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_62.setTransform(-8.5,95.5);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#4B3F80").s().p("Am9BGQgVAAAAgWIAAhfQAAgWAVAAIN7AAQAVAAAAAWIAABfQAAAWgVAAg");
        this.shape_63.setTransform(-6.9,95.5);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#4B3F80").s().p("AnMBGQgUAAAAgWIAAhfQAAgWAUAAIOZAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_64.setTransform(-5.4,95.5);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#4B3F80").s().p("AnaBGQgUAAAAgWIAAhfQAAgWAUAAIO1AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_65.setTransform(-4,95.5);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#4B3F80").s().p("AnmBGQgVAAAAgWIAAhfQAAgWAVAAIPOAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_66.setTransform(-2.7,95.5);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#4B3F80").s().p("AnyBGQgVAAAAgWIAAhfQAAgWAVAAIPlAAQAVAAgBAWIAABfQABAWgVAAg");
        this.shape_67.setTransform(-1.6,95.5);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#4B3F80").s().p("An9BGQgUAAAAgWIAAhfQAAgWAUAAIP7AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_68.setTransform(-0.5,95.5);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#4B3F80").s().p("AoGBGQgVAAAAgWIAAhfQAAgWAVAAIQOAAQATAAABAWIAABfQgBAWgTAAg");
        this.shape_69.setTransform(0.4,95.5);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#4B3F80").s().p("AoOBGQgVAAAAgWIAAhfQAAgWAVAAIQeAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_70.setTransform(1.2,95.5);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#4B3F80").s().p("AoVBGQgVAAAAgWIAAhfQAAgWAVAAIQsAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_71.setTransform(2,95.5);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#4B3F80").s().p("AocBGQgUAAAAgWIAAhfQAAgWAUAAIQ5AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_72.setTransform(2.6,95.5);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#4B3F80").s().p("AohBGQgUAAAAgWIAAhfQAAgWAUAAIRDAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_73.setTransform(3.1,95.5);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#4B3F80").s().p("AokBGQgVAAAAgWIAAhfQAAgWAVAAIRKAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_74.setTransform(3.5,95.5);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#4B3F80").s().p("AonBGQgVAAAAgWIAAhfQAAgWAVAAIRQAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_75.setTransform(3.7,95.5);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#4B3F80").s().p("AopBGQgVAAAAgWIAAhfQAAgWAVAAIRTAAQAVAAAAAWIAABfQAAAWgVAAg");
        this.shape_76.setTransform(3.9,95.5);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#4B3F80").s().p("AopBGQgVAAAAgWIAAhfQAAgWAVAAIRUAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_77.setTransform(4,95.5);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#4B3F80").s().p("Ao7BGQgVAAAAgWIAAhfQAAgWAVAAIR4AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_78.setTransform(5.8,95.5);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#4B3F80").s().p("ApMBGQgVAAAAgWIAAhfQAAgWAVAAISaAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_79.setTransform(7.5,95.5);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#4B3F80").s().p("ApcBGQgVAAAAgWIAAhfQAAgWAVAAIS6AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_80.setTransform(9.1,95.5);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#4B3F80").s().p("AprBGQgVAAAAgWIAAhfQAAgWAVAAITYAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_81.setTransform(10.6,95.5);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#4B3F80").s().p("Ap5BGQgVAAAAgWIAAhfQAAgWAVAAIT0AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_82.setTransform(12,95.5);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#4B3F80").s().p("AqGBGQgVAAAAgWIAAhfQAAgWAVAAIUOAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_83.setTransform(13.3,95.5);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#4B3F80").s().p("AqTBGQgUAAAAgWIAAhfQAAgWAUAAIUnAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_84.setTransform(14.5,95.5);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#4B3F80").s().p("AqeBGQgUAAAAgWIAAhfQAAgWAUAAIU9AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_85.setTransform(15.6,95.5);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#4B3F80").s().p("AqoBGQgVAAAAgWIAAhfQAAgWAVAAIVSAAQATAAABAWIAABfQgBAWgTAAg");
        this.shape_86.setTransform(16.6,95.5);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#4B3F80").s().p("AqxBGQgVAAAAgWIAAhfQAAgWAVAAIVkAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_87.setTransform(17.5,95.5);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#4B3F80").s().p("Aq5BGQgVAAAAgWIAAhfQAAgWAVAAIV0AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_88.setTransform(18.4,95.5);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#4B3F80").s().p("ArBBGQgUAAAAgWIAAhfQAAgWAUAAIWDAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_89.setTransform(19.1,95.5);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#4B3F80").s().p("ArHBGQgVAAAAgWIAAhfQAAgWAVAAIWQAAQATAAABAWIAABfQgBAWgTAAg");
        this.shape_90.setTransform(19.7,95.5);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#4B3F80").s().p("ArMBGQgVAAAAgWIAAhfQAAgWAVAAIWaAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_91.setTransform(20.3,95.5);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#4B3F80").s().p("ArRBGQgUAAAAgWIAAhfQAAgWAUAAIWjAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_92.setTransform(20.7,95.5);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#4B3F80").s().p("ArUBGQgVAAAAgWIAAhfQAAgWAVAAIWqAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_93.setTransform(21,95.5);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#4B3F80").s().p("ArWBGQgVAAAAgWIAAhfQAAgWAVAAIWuAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_94.setTransform(21.3,95.5);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#4B3F80").s().p("ArYBGQgVAAAAgWIAAhfQAAgWAVAAIWxAAQAVAAAAAWIAABfQAAAWgVAAg");
        this.shape_95.setTransform(21.4,95.5);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#4B3F80").s().p("ArYBGQgVAAAAgWIAAhfQAAgWAVAAIWyAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_96.setTransform(21.5,95.5);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#4B3F80").s().p("ArgBGQgVAAAAgWIAAhfQAAgWAVAAIXCAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_97.setTransform(22.3,95.5);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#4B3F80").s().p("AroBGQgVAAAAgWIAAhfQAAgWAVAAIXSAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_98.setTransform(23,95.5);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#4B3F80").s().p("ArwBGQgVAAAAgWIAAhfQAAgWAVAAIXiAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_99.setTransform(23.8,95.5);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#4B3F80").s().p("Ar4BGQgVAAAAgWIAAhfQAAgWAVAAIXxAAQAVAAAAAWIAABfQAAAWgVAAg");
        this.shape_100.setTransform(24.6,95.5);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#4B3F80").s().p("AsABGQgVAAAAgWIAAhfQAAgWAVAAIYBAAQAVAAgBAWIAABfQABAWgVAAg");
        this.shape_101.setTransform(25.4,95.5);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#4B3F80").s().p("AsIBGQgUAAAAgWIAAhfQAAgWAUAAIYRAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_102.setTransform(26.2,95.5);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#4B3F80").s().p("AsQBGQgUAAAAgWIAAhfQAAgWAUAAIYhAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_103.setTransform(27,95.5);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#4B3F80").s().p("AsYBGQgUAAAAgWIAAhfQAAgWAUAAIYxAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_104.setTransform(27.8,95.5);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#4B3F80").s().p("AsfBGQgVAAAAgWIAAhfQAAgWAVAAIZAAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_105.setTransform(28.6,95.5);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#4B3F80").s().p("AsnBGQgVAAAAgWIAAhfQAAgWAVAAIZQAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_106.setTransform(29.4,95.5);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#4B3F80").s().p("AsvBGQgVAAAAgWIAAhfQAAgWAVAAIZgAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_107.setTransform(30.1,95.5);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#4B3F80").s().p("As3BGQgVAAAAgWIAAhfQAAgWAVAAIZwAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_108.setTransform(30.9,95.5);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#4B3F80").s().p("As/BGQgVAAAAgWIAAhfQAAgWAVAAIaAAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_109.setTransform(31.7,95.5);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#4B3F80").s().p("AtHBGQgVAAAAgWIAAhfQAAgWAVAAIaPAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_110.setTransform(32.5,95.5);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#4B3F80").s().p("AtPBGQgVAAAAgWIAAhfQAAgWAVAAIagAAQATAAABAWIAABfQgBAWgTAAg");
        this.shape_111.setTransform(33.3,95.5);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#4B3F80").s().p("AtXBGQgUAAAAgWIAAhfQAAgWAUAAIavAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_112.setTransform(34.1,95.5);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#4B3F80").s().p("AtfBGQgUAAAAgWIAAhfQAAgWAUAAIa/AAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_113.setTransform(34.9,95.5);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#4B3F80").s().p("AtmBGQgVAAAAgWIAAhfQAAgWAVAAIbOAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_114.setTransform(35.7,95.5);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#4B3F80").s().p("AtuBGQgVAAAAgWIAAhfQAAgWAVAAIbeAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_115.setTransform(36.5,95.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},29).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21,p:{x:-38.6}}]},1).to({state:[{t:this.shape_21,p:{x:-38.5}}]},1).to({state:[{t:this.shape_21,p:{x:-38.5}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39,p:{x:-28.6}}]},1).to({state:[{t:this.shape_39,p:{x:-28.5}}]},1).to({state:[{t:this.shape_39,p:{x:-28.5}}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[]},1).wait(1));

        // arrow
        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f().s("#4B3F80").ss(4,1,1).p("AAAh1IAADr");
        this.shape_116.setTransform(-47.5,106.3);
        this.shape_116._off = true;

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f().s("#4B3F80").ss(4,1,1).p("AAAB2IAAjr");
        this.shape_117.setTransform(-45.3,106.3);
        this.shape_117._off = true;

        this.timeline.addTween(cjs.Tween.get(this.shape_116).wait(29).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false,x:-25.5},0).wait(1).to({_off:true},1).wait(18).to({_off:false,x:-5.5},0).wait(1).to({_off:true},1).wait(18).to({_off:false,x:19.5},0).wait(1).to({_off:true},1).wait(18).to({_off:false,x:59.5},0).wait(1).to({_off:true},1).wait(18).to({_off:false,x:94.5},0).wait(1).to({_off:true},1).wait(18).to({_off:false,x:124.5},0).to({_off:true},1).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.shape_117).wait(30).to({_off:false},0).wait(1).to({x:-43.1},0).wait(1).to({x:-41.1},0).wait(1).to({x:-39.2},0).wait(1).to({x:-37.5},0).wait(1).to({x:-35.8},0).wait(1).to({x:-34.3},0).wait(1).to({x:-32.9},0).wait(1).to({x:-31.6},0).wait(1).to({x:-30.5},0).wait(1).to({x:-29.4},0).wait(1).to({x:-28.5},0).wait(1).to({x:-27.7},0).wait(1).to({x:-27},0).wait(1).to({x:-26.5},0).wait(1).to({x:-26.1},0).wait(1).to({x:-25.8},0).wait(1).to({x:-25.6},0).to({_off:true},1).wait(2).to({_off:false,x:-23.5},0).wait(1).to({x:-21.5},0).wait(1).to({x:-19.7},0).wait(1).to({x:-18},0).wait(1).to({x:-16.4},0).wait(1).to({x:-14.9},0).wait(1).to({x:-13.5},0).wait(1).to({x:-12.2},0).wait(1).to({x:-11.1},0).wait(1).to({x:-10},0).wait(1).to({x:-9.1},0).wait(1).to({x:-8.2},0).wait(1).to({x:-7.5},0).wait(1).to({x:-6.9},0).wait(1).to({x:-6.4},0).wait(1).to({x:-6},0).wait(1).to({x:-5.7},0).wait(1).to({x:-5.6},0).to({_off:true},1).wait(2).to({_off:false,x:-4.2},0).wait(1).to({x:-2.9},0).wait(1).to({x:-1.6},0).wait(1).to({x:-0.3},0).wait(1).to({x:1.1},0).wait(1).to({x:2.4},0).wait(1).to({x:3.7},0).wait(1).to({x:5},0).wait(1).to({x:6.3},0).wait(1).to({x:7.6},0).wait(1).to({x:8.9},0).wait(1).to({x:10.3},0).wait(1).to({x:11.6},0).wait(1).to({x:12.9},0).wait(1).to({x:14.2},0).wait(1).to({x:15.5},0).wait(1).to({x:16.8},0).wait(1).to({x:18.2},0).to({_off:true},1).wait(2).to({_off:false,x:23.6},0).wait(1).to({x:27.5},0).wait(1).to({x:31.1},0).wait(1).to({x:34.5},0).wait(1).to({x:37.8},0).wait(1).to({x:40.7},0).wait(1).to({x:43.5},0).wait(1).to({x:46.1},0).wait(1).to({x:48.4},0).wait(1).to({x:50.5},0).wait(1).to({x:52.4},0).wait(1).to({x:54},0).wait(1).to({x:55.5},0).wait(1).to({x:56.7},0).wait(1).to({x:57.7},0).wait(1).to({x:58.5},0).wait(1).to({x:59},0).wait(1).to({x:59.4},0).to({_off:true},1).wait(2).to({_off:false,x:63.1},0).wait(1).to({x:66.5},0).wait(1).to({x:69.7},0).wait(1).to({x:72.7},0).wait(1).to({x:75.5},0).wait(1).to({x:78.1},0).wait(1).to({x:80.5},0).wait(1).to({x:82.7},0).wait(1).to({x:84.8},0).wait(1).to({x:86.6},0).wait(1).to({x:88.3},0).wait(1).to({x:89.7},0).wait(1).to({x:91},0).wait(1).to({x:92.1},0).wait(1).to({x:92.9},0).wait(1).to({x:93.6},0).wait(1).to({x:94.1},0).wait(1).to({x:94.4},0).to({_off:true},1).wait(2).to({_off:false,x:96.1},0).wait(1).to({x:97.6},0).wait(1).to({x:99.2},0).wait(1).to({x:100.8},0).wait(1).to({x:102.4},0).wait(1).to({x:103.9},0).wait(1).to({x:105.5},0).wait(1).to({x:107.1},0).wait(1).to({x:108.7},0).wait(1).to({x:110.3},0).wait(1).to({x:111.8},0).wait(1).to({x:113.4},0).wait(1).to({x:115},0).wait(1).to({x:116.6},0).wait(1).to({x:118.2},0).wait(1).to({x:119.7},0).wait(1).to({x:121.3},0).wait(1).to({x:122.9},0).to({_off:true},1).wait(2));

        // txt
        this.instance = new lib._01();
        this.instance.parent = this;
        this.instance.setTransform(-1.5,129.2,1,1,0,0,0,57.2,11);

        this.instance_1 = new lib._02();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-10,129.2,1,1,0,0,0,48.7,11);

        this.instance_2 = new lib._03();
        this.instance_2.parent = this;
        this.instance_2.setTransform(0.3,129.2,1,1,0,0,0,59,11);

        this.instance_3 = new lib._04();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-3.7,129.2,1,1,0,0,0,55,11);

        this.instance_4 = new lib._05();
        this.instance_4.parent = this;
        this.instance_4.setTransform(2.4,129.2,1,1,0,0,0,61.1,11);

        this.instance_5 = new lib._06();
        this.instance_5.parent = this;
        this.instance_5.setTransform(10.1,129.2,1,1,0,0,0,68.8,11);

        this.instance_6 = new lib._07();
        this.instance_6.parent = this;
        this.instance_6.setTransform(6.9,129.2,1,1,0,0,0,65.6,11);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},20).to({state:[{t:this.instance_3}]},20).to({state:[{t:this.instance_4}]},20).to({state:[{t:this.instance_5}]},20).to({state:[{t:this.instance_6}]},20).to({state:[]},1).wait(1));

        // void
        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#FFFFFF").s().p("AhDBGQgCAAABgWIAAhfQgBgWACAAICHAAQACAAgBAWIAABfQABAWgCAAg");
        this.shape_118.setTransform(36.5,95.5);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#FFFFFF").s().p("AifBGQgFAAAAgWIAAhfQAAgWAFAAIE/AAQAFAAAAAWIAABfQAAAWgFAAg");
        this.shape_119.setTransform(36.5,95.5);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#FFFFFF").s().p("Aj3BGQgFAAgBgWIAAhfQABgWAFAAIHvAAQAGAAAAAWIAABfQAAAWgGAAg");
        this.shape_120.setTransform(36.5,95.5);

        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f("#FFFFFF").s().p("AlIBGQgHAAgBgWIAAhfQABgWAHAAIKRAAQAIAAAAAWIAABfQAAAWgIAAg");
        this.shape_121.setTransform(36.5,95.5);

        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f("#FFFFFF").s().p("AmUBGQgKAAAAgWIAAhfQAAgWAKAAIMpAAQAKAAAAAWIAABfQAAAWgKAAg");
        this.shape_122.setTransform(36.5,95.5);

        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f("#FFFFFF").s().p("AnaBGQgLAAAAgWIAAhfQAAgWALAAIO1AAQALAAAAAWIAABfQAAAWgLAAg");
        this.shape_123.setTransform(36.5,95.5);

        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f("#FFFFFF").s().p("AoaBGQgNAAgBgWIAAhfQABgWANAAIQ2AAQANAAAAAWIAABfQAAAWgNAAg");
        this.shape_124.setTransform(36.5,95.5);

        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f("#FFFFFF").s().p("ApWBGQgOAAAAgWIAAhfQAAgWAOAAIStAAQAOAAAAAWIAABfQAAAWgOAAg");
        this.shape_125.setTransform(36.5,95.5);

        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f("#FFFFFF").s().p("AqLBGQgPAAAAgWIAAhfQAAgWAPAAIUXAAQAPAAAAAWIAABfQAAAWgPAAg");
        this.shape_126.setTransform(36.5,95.5);

        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f("#FFFFFF").s().p("Aq7BGQgQAAAAgWIAAhfQAAgWAQAAIV3AAQAQAAAAAWIAABfQAAAWgQAAg");
        this.shape_127.setTransform(36.5,95.5);

        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f("#FFFFFF").s().p("ArlBGQgRAAAAgWIAAhfQAAgWARAAIXLAAQARAAAAAWIAABfQAAAWgRAAg");
        this.shape_128.setTransform(36.5,95.5);

        this.shape_129 = new cjs.Shape();
        this.shape_129.graphics.f("#FFFFFF").s().p("AsKBGQgRAAgBgWIAAhfQABgWARAAIYVAAQASAAgBAWIAABfQABAWgSAAg");
        this.shape_129.setTransform(36.5,95.5);

        this.shape_130 = new cjs.Shape();
        this.shape_130.graphics.f("#FFFFFF").s().p("AsoBGQgTAAAAgWIAAhfQAAgWATAAIZSAAQASAAAAAWIAABfQAAAWgSAAg");
        this.shape_130.setTransform(36.5,95.5);

        this.shape_131 = new cjs.Shape();
        this.shape_131.graphics.f("#FFFFFF").s().p("AtBBGQgUAAAAgWIAAhfQAAgWAUAAIaEAAQATAAAAAWIAABfQAAAWgTAAg");
        this.shape_131.setTransform(36.5,95.5);

        this.shape_132 = new cjs.Shape();
        this.shape_132.graphics.f("#FFFFFF").s().p("AtVBGQgUAAAAgWIAAhfQAAgWAUAAIarAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_132.setTransform(36.5,95.5);

        this.shape_133 = new cjs.Shape();
        this.shape_133.graphics.f("#FFFFFF").s().p("AtkBGQgTAAAAgWIAAhfQAAgWATAAIbJAAQATAAAAAWIAABfQAAAWgTAAg");
        this.shape_133.setTransform(36.5,95.5);

        this.shape_134 = new cjs.Shape();
        this.shape_134.graphics.f("#FFFFFF").s().p("AtsBGQgUAAAAgWIAAhfQAAgWAUAAIbZAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_134.setTransform(36.5,95.5);

        this.shape_135 = new cjs.Shape();
        this.shape_135.graphics.f("#FFFFFF").s().p("AtuBGQgVAAAAgWIAAhfQAAgWAVAAIbeAAQAUAAAAAWIAABfQAAAWgUAAg");
        this.shape_135.setTransform(36.5,95.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_118}]},5).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[]},127).wait(1));

        // bg
        this.shape_136 = new cjs.Shape();
        this.shape_136.graphics.f("#FF9900").s().p("AiNH0QgTAAgBh3IAAr6QABh2ATAAIEbAAQATAAAAB2IAAL6QAAB3gTAAg");
        this.shape_136.setTransform(36.5,60.5);

        this.shape_137 = new cjs.Shape();
        this.shape_137.graphics.f("#FF9900").s().p("AjmH0QggAAAAh3IAAr6QAAh2AgAAIHNAAQAgAAAAB2IAAL6QAAB3ggAAg");
        this.shape_137.setTransform(36.5,60.5);

        this.shape_138 = new cjs.Shape();
        this.shape_138.graphics.f("#FF9900").s().p("Ak5H0QgsAAAAh3IAAr6QAAh2AsAAIJzAAQAsAAAAB2IAAL6QAAB3gsAAg");
        this.shape_138.setTransform(36.5,60.5);

        this.shape_139 = new cjs.Shape();
        this.shape_139.graphics.f("#FF9900").s().p("AmGH0Qg4AAAAh3IAAr6QAAh2A4AAIMNAAQA4AAAAB2IAAL6QAAB3g4AAg");
        this.shape_139.setTransform(36.5,60.5);

        this.shape_140 = new cjs.Shape();
        this.shape_140.graphics.f("#FF9900").s().p("AnOH0QhBAAAAh3IAAr6QAAh2BBAAIOdAAQBBAAAAB2IAAL6QAAB3hBAAg");
        this.shape_140.setTransform(36.5,60.5);

        this.shape_141 = new cjs.Shape();
        this.shape_141.graphics.f("#FF9900").s().p("AoQH0QhLAAAAh3IAAr6QAAh2BLAAIQhAAQBLAAAAB2IAAL6QAAB3hLAAg");
        this.shape_141.setTransform(36.5,60.5);

        this.shape_142 = new cjs.Shape();
        this.shape_142.graphics.f("#FF9900").s().p("ApMH0QhUAAABh3IAAr6QgBh2BUAAISaAAQBSAAAAB2IAAL6QAAB3hSAAg");
        this.shape_142.setTransform(36.5,60.5);

        this.shape_143 = new cjs.Shape();
        this.shape_143.graphics.f("#FF9900").s().p("AqDH0QhbAAAAh3IAAr6QAAh2BbAAIUHAAQBbAAAAB2IAAL6QAAB3hbAAg");
        this.shape_143.setTransform(36.5,60.5);

        this.shape_144 = new cjs.Shape();
        this.shape_144.graphics.f("#FF9900").s().p("Aq0H0QhhAAAAh3IAAr6QAAh2BhAAIVpAAQBhAAAAB2IAAL6QAAB3hhAAg");
        this.shape_144.setTransform(36.5,60.5);

        this.shape_145 = new cjs.Shape();
        this.shape_145.graphics.f("#FF9900").s().p("AreH0QhpAAAAh3IAAr6QAAh2BpAAIW+AAQBnAAABB2IAAL6QgBB3hnAAg");
        this.shape_145.setTransform(36.5,60.5);

        this.shape_146 = new cjs.Shape();
        this.shape_146.graphics.f("#FF9900").s().p("AsEH0QhtAAAAh3IAAr6QAAh2BtAAIYJAAQBtAAAAB2IAAL6QAAB3htAAg");
        this.shape_146.setTransform(36.5,60.5);

        this.shape_147 = new cjs.Shape();
        this.shape_147.graphics.f("#FF9900").s().p("AskH0QhxAAAAh3IAAr6QAAh2BxAAIZJAAQBxAAAAB2IAAL6QAAB3hxAAg");
        this.shape_147.setTransform(36.5,60.5);

        this.shape_148 = new cjs.Shape();
        this.shape_148.graphics.f("#FF9900").s().p("As+H0Qh0AAgBh3IAAr6QABh2B0AAIZ9AAQB0AAABB2IAAL6QgBB3h0AAg");
        this.shape_148.setTransform(36.5,60.5);

        this.shape_149 = new cjs.Shape();
        this.shape_149.graphics.f("#FF9900").s().p("AtSH0Qh3AAAAh3IAAr6QAAh2B3AAIalAAQB3AAAAB2IAAL6QAAB3h3AAg");
        this.shape_149.setTransform(36.5,60.5);

        this.shape_150 = new cjs.Shape();
        this.shape_150.graphics.f("#FF9900").s().p("AtgH0Qh6AAAAh3IAAr6QAAh2B6AAIbBAAQB6AAAAB2IAAL6QAAB3h6AAg");
        this.shape_150.setTransform(36.5,60.5);

        this.shape_151 = new cjs.Shape();
        this.shape_151.graphics.f("#FF9900").s().p("AtpH0Qh7AAABh3IAAr6QgBh2B7AAIbTAAQB7AAgBB2IAAL6QABB3h7AAg");
        this.shape_151.setTransform(36.5,60.5);

        this.shape_152 = new cjs.Shape();
        this.shape_152.graphics.f("#FF9900").s().p("AtsH0Qh7AAAAh3IAAr6QAAh2B7AAIbZAAQB7AAAAB2IAAL6QAAB3h7AAg");
        this.shape_152.setTransform(36.5,60.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[]},132).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2,-2,76.1,83);


    (lib.Machine = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // logo
        this.instance = new lib.logo_mini();
        this.instance.parent = this;
        this.instance.setTransform(84.4,27.3,2,2,0,0,0,12.4,11.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

        // cache
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#E6501E").ss(4,1,1).p("Ag+ihIABAAQAUAAAPAUQAPAVAAAcIAAC0QAAAdgPAUQgPAVgUAAIgBAAAA/jtIAAHb");
        this.shape.setTransform(174.8,149.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("Ag+DuIAAhQIABAAQAUAAAPgVQAPgUAAgdIAAi0QAAgcgPgVQgPgUgUAAIgBAAIAAhMIB9AAIAAHbg");
        this.shape_1.setTransform(174.8,149.9);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},9).to({state:[]},10).wait(31));

        // bfc
        this.instance_1 = new lib.bfc();
        this.instance_1.parent = this;
        this.instance_1.setTransform(107.3,149.6,1,1,0,0,0,13.4,13.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:9.2,regY:13.3,x:103.3,y:149.5},0).wait(1).to({x:104.2},0).wait(1).to({x:105.8},0).wait(1).to({x:107.9},0).wait(1).to({x:110.8},0).wait(1).to({x:114.5},0).wait(1).to({x:118.9},0).wait(1).to({x:124.1},0).wait(1).to({x:130.1},0).wait(1).to({x:136.9},0).wait(1).to({x:144.5},0).wait(1).to({x:152.9},0).wait(1).to({x:162.1},0).wait(1).to({x:171.9},0).wait(1).to({x:182.4},0).wait(1).to({x:193.4},0).wait(1).to({x:204.8},0).wait(1).to({x:216.5},0).wait(1).to({x:228.3},0).wait(1).to({x:240.2},0).wait(1).to({x:252},0).wait(1).to({x:263.5},0).wait(1).to({x:274.7},0).wait(1).to({x:285.6},0).wait(1).to({x:296},0).wait(1).to({x:305.8},0).wait(1).to({x:315.2},0).wait(1).to({x:324},0).wait(1).to({x:332.2},0).wait(1).to({x:339.9},0).wait(1).to({x:347},0).wait(1).to({x:353.5},0).wait(1).to({x:359.5},0).wait(1).to({x:365.1},0).wait(1).to({x:370.1},0).wait(1).to({x:374.6},0).wait(1).to({x:378.6},0).wait(1).to({x:382.3},0).wait(1).to({x:385.5},0).wait(1).to({x:388.3},0).wait(1).to({x:390.7},0).wait(1).to({x:392.7},0).wait(1).to({x:394.4},0).wait(1).to({x:395.8},0).wait(1).to({x:396.8},0).wait(1).to({x:397.5},0).wait(1).to({x:397.9},0).wait(1).to({regX:13.4,regY:13.4,x:402.3,y:149.6},0).to({_off:true},1).wait(1));

        // chief
        this.instance_2 = new lib.cook_01();
        this.instance_2.parent = this;
        this.instance_2.setTransform(87.2,113.1,0.5,0.5,0,0,0,59.2,111.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

        // food
        this.instance_3 = new lib.meal();
        this.instance_3.parent = this;
        this.instance_3.setTransform(84,209.3,0.6,0.6,0,0,0,45.6,5.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

        // machine
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#E6501E").ss(4,0,0,3).p("Aqg1BIVBAAQAuAAAAAuMAAAAgVQAAAuguAAI1BAAQguAAAAguMAAAggVQAAguAuAAgAlGO6IPnAAQAuAAAAAuIAAEsQAAAuguAAIvnAAIlaAAQguAAAAguIAAksQAAguAuAAg");
        this.shape_2.setTransform(84.4,173.8);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#E6501E").ss(4,1,1).p("ANcbbI7lAAMAAAg2HQAAgXAMgMIALgIQACgDAHAAIbFAAQAXAAALALQAMAMAAAXMAAAA1ZQAAAXgLAMIgBABQgLAKgXAAgAMNmhQAUAAAPAUQAPAUAAAdIAAC1QAAAdgPAUQgPAVgUAAQgVAAgPgVQgOgUAAgdIAAi1QAAgdAOgUQAPgUAVAAg");
        this.shape_3.setTransform(90.6,175.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AuJbbMAAAg2HQAAgXAMgLIALgJQADgDAGAAIbEAAQAYAAALAMQALALAAAXMAAAA1ZQAAAXgKALIgBABQgLALgYAAgAsMUDQAAAuAuAAIFaAAIPnAAQAuAAAAguIAAksQAAgvguABIvnAAIPnAAQAugBAAAvIAAEsQAAAuguAAIvnAAIlaAAQguAAAAguIAAksQAAgvAuABIFaAAIlaAAQgugBAAAvIAAEsgAsMLxQAAAuAuAAIVBAAQAuAAAAguMAAAggWQAAgtgugBI1BAAIVBAAQAuABAAAtMAAAAgWQAAAuguAAI1BAAQguAAAAguMAAAggWQAAgtAugBQguABAAAtMAAAAgWgALbinQAAAdAOATQAPAWAUAAQAVAAAOgWQAPgTABgdIAAi1QgBgcgPgWQgOgTgVgBQAVABAOATQAPAWABAcIAAC1QgBAdgPATQgOAWgVAAQgUAAgPgWQgOgTAAgdIAAi1QAAgcAOgWQAPgTAUgBQgUABgPATQgOAWAAAcIAAC1g");
        this.shape_4.setTransform(90.6,175.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(50));

        // cadre
        this.instance_4 = new lib.cadre();
        this.instance_4.parent = this;
        this.instance_4.setTransform(160.6,176,0.05,1,0,0,0,0,175.5);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).wait(1).to({regX:309.1,scaleX:0.5,x:314.8},0).wait(1).to({scaleX:0.64,x:359.3},0).wait(1).to({scaleX:0.74,x:388.3},0).wait(1).to({scaleX:0.8,x:409.2},0).wait(1).to({scaleX:0.86,x:425},0).wait(1).to({scaleX:0.9,x:437.2},0).wait(1).to({scaleX:0.93,x:446.6},0).wait(1).to({scaleX:0.95,x:453.8},0).wait(1).to({scaleX:0.97,x:459.3},0).wait(1).to({scaleX:0.98,x:463.4},0).wait(1).to({scaleX:0.99,x:466.2},0).wait(1).to({scaleX:1,x:468.1},0).wait(1).to({scaleX:1,x:469.2},0).wait(1).to({scaleX:1,x:469.6},0).wait(1).to({regX:0,x:160.6},0).wait(21));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2,-2,185.1,355);


    (lib.line_anime = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.line_01("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-42.3,90.5,1,1,-45,0,0,0.1,73);

        this.instance_1 = new lib.line_01("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(42.5,175.4,1,1,135,0,0,0,73);

        this.instance_2 = new lib.line_01("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-42.4,175.4,1,1,-135,0,0,0.1,73);

        this.instance_3 = new lib.line_01("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(42.5,90.5,1,1,45,0,0,0,73);

        this.instance_4 = new lib.line_01("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(-59.9,133,1,1,-90,0,0,0.1,73);

        this.instance_5 = new lib.line_01("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(60.1,133,1,1,90,0,0,0,73);

        this.instance_6 = new lib.line_01("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(0,193,1,1,180,0,0,0.1,73);

        this.instance_7 = new lib.line_01("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(0,73,1,1,0,0,0,0,73);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(25));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69.4,63.6,138.9,138.9);


    (lib.Explain = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // perso
        this.instance = new lib.perso_02("synched",0,false);
        this.instance.parent = this;
        this.instance.setTransform(126,373.2,2.6,2.6,0,0,0,20.5,107.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({mode:"single",startPosition:74},0).wait(405).to({mode:"synched",loop:false},0).wait(148).to({startPosition:149},0).to({alpha:0},11).wait(1).to({mode:"single",startPosition:0},0).to({alpha:1},10).wait(1));

        // effect
        this.instance_1 = new lib.line_anime("synched",0,false);
        this.instance_1.parent = this;
        this.instance_1.setTransform(651.7,177.5,0.5,0.5,0,0,0,0.2,128.6);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(588).to({_off:false},0).to({_off:true},26).wait(36));

        // effect
        this.instance_2 = new lib.line_anime("synched",0,false);
        this.instance_2.parent = this;
        this.instance_2.setTransform(508.6,146.3,1,1,0,0,0,0,128.6);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off:false},0).to({_off:true},24).wait(437).to({_off:false,regX:0.1,scaleX:0.8,scaleY:0.8,x:498.6,y:-101.7},0).to({_off:true},24).wait(14).to({_off:false,scaleX:0.5,scaleY:0.5,x:454.6,y:105.3},0).to({_off:true},27).wait(36));

        // bfc
        this.instance_3 = new lib.bfc();
        this.instance_3.parent = this;
        this.instance_3.setTransform(487.8,-88,1,1,0,0,0,13.4,13.4);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(563).to({_off:false},0).wait(11).to({regX:9.2,regY:13.3,x:483.4,y:-86.9},0).wait(1).to({x:482.8,y:-83},0).wait(1).to({x:481.6,y:-75.9},0).wait(1).to({x:480,y:-65},0).wait(1).to({x:477.6,y:-49.8},0).wait(1).to({x:474.5,y:-30.3},0).wait(1).to({x:470.9,y:-7.2},0).wait(1).to({x:467.1,y:17.5},0).wait(1).to({x:463.4,y:41.3},0).wait(1).to({x:460.1,y:62.1},0).wait(1).to({x:457.5,y:78.8},0).wait(1).to({x:455.6,y:91.6},0).wait(1).to({x:454.1,y:100.6},0).wait(1).to({x:453.2,y:106.6},0).wait(1).to({x:452.7,y:109.8},0).wait(1).to({regX:13.4,regY:13.4,x:456.8,y:111},0).wait(10).to({regX:9.2,regY:13.3,scaleX:1,scaleY:1,x:452.6,y:110.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:110.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:452.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:452.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:453.3},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:453.9},0).wait(1).to({regX:13.5,regY:13.5,scaleX:0.1,scaleY:0.1,x:456.7},0).to({_off:true},1).wait(44));

        // bfc
        this.instance_4 = new lib.bfc();
        this.instance_4.parent = this;
        this.instance_4.setTransform(509.4,148.1,1,1,0,0,0,13.4,13.4);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(128).to({_off:false},0).wait(1).to({regX:9.2,regY:13.3,x:505.2,y:147.2},0).wait(1).to({y:144.6},0).wait(1).to({y:140.1},0).wait(1).to({y:133.2},0).wait(1).to({y:123.6},0).wait(1).to({y:111.2},0).wait(1).to({y:95.6},0).wait(1).to({y:77},0).wait(1).to({y:55.7},0).wait(1).to({y:33},0).wait(1).to({y:10.3},0).wait(1).to({y:-10.9},0).wait(1).to({y:-29.6},0).wait(1).to({y:-45.1},0).wait(1).to({y:-57.6},0).wait(1).to({y:-67.1},0).wait(1).to({y:-74},0).wait(1).to({y:-78.6},0).wait(1).to({y:-81.1},0).wait(1).to({regX:13.4,regY:13.4,x:509.4,y:-81.9},0).wait(396).to({scaleX:2,scaleY:2,y:-101.8},10).wait(9).to({scaleX:1,scaleY:1,x:516.4,y:-108.9},0).wait(11).to({regX:9.2,regY:13.3,x:513,y:-107.2},0).wait(1).to({x:515.7,y:-101.5},0).wait(1).to({x:520.7,y:-91.2},0).wait(1).to({x:528.3,y:-75.3},0).wait(1).to({x:538.9,y:-53.2},0).wait(1).to({x:552.5,y:-24.7},0).wait(1).to({x:568.7,y:9},0).wait(1).to({x:586,y:45},0).wait(1).to({x:602.6,y:79.7},0).wait(1).to({x:617.1,y:109.9},0).wait(1).to({x:628.8,y:134.4},0).wait(1).to({x:637.7,y:152.9},0).wait(1).to({x:644,y:166.1},0).wait(1).to({x:648.2,y:174.8},0).wait(1).to({x:650.4,y:179.5},0).wait(1).to({regX:13.4,regY:13.4,x:655.4,y:181.1},0).wait(10).to({regX:9.2,regY:13.3,scaleX:1,scaleY:1,x:651.2,y:181},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:651.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:651.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:651.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:652.5},0).wait(1).to({regX:13.5,regY:13.5,scaleX:0.1,scaleY:0.1,x:655.3,y:181.1},0).to({_off:true},1).wait(44));

        // SC
        this.instance_5 = new lib.SC("single",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(508,151.5,0.1,0.1,0,0,0,36.5,40);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(88).to({_off:false},0).wait(1).to({regX:9.5,regY:72.5,scaleX:0.68,scaleY:0.68,rotation:78.4,x:482.7,y:138},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:200.3,x:538.7,y:133.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:270,x:538.3,y:176.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:312.9,x:513.4,y:192.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:338.8,x:494.3,y:192.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:352.9,x:484.2,y:188.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:358.9,x:480.3,y:186},0).wait(1).to({regX:36.1,regY:39.5,scaleX:1.05,scaleY:1.05,rotation:360,x:508.1,y:151.5},0).to({regX:36,scaleX:0.98,scaleY:0.98,x:508},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4).wait(14).to({startPosition:0},0).wait(1).to({regX:9.5,regY:72.5,x:481.5,y:183.9},0).wait(1).to({y:182},0).wait(1).to({y:178.6},0).wait(1).to({y:173.4},0).wait(1).to({y:166.3},0).wait(1).to({y:157},0).wait(1).to({y:145.3},0).wait(1).to({y:131.4},0).wait(1).to({y:115.5},0).wait(1).to({y:98.5},0).wait(1).to({y:81.5},0).wait(1).to({y:65.7},0).wait(1).to({y:51.7},0).wait(1).to({y:40.1},0).wait(1).to({y:30.8},0).wait(1).to({y:23.6},0).wait(1).to({y:18.5},0).wait(1).to({y:15.1},0).wait(1).to({y:13.1},0).wait(1).to({regX:36,regY:39.5,x:508,y:-20.5},0).wait(5).to({mode:"synched",loop:false},0).wait(29).to({mode:"single",startPosition:29},0).wait(27).to({mode:"synched",loop:false},0).wait(19).to({mode:"single",startPosition:48},0).wait(41).to({mode:"synched",loop:false},0).wait(22).to({mode:"single",startPosition:68},0).wait(33).to({mode:"synched",loop:false},0).wait(21).to({mode:"single",startPosition:89},0).wait(29).to({mode:"synched",loop:false},0).wait(19).to({mode:"single",startPosition:108},0).wait(51).to({mode:"synched",loop:false},0).wait(21).to({mode:"single",startPosition:129},0).wait(49).to({mode:"synched",loop:false},0).wait(19).to({mode:"single",startPosition:148},0).wait(97).to({startPosition:148},0).wait(1).to({regX:9.5,regY:72.5,scaleX:1,scaleY:1,rotation:359.7,x:481.7,y:12.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:358.1,x:482.7,y:13.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:354.2,x:485.3,y:14.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:347.3,x:489.9,y:16.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:336.4,x:497.6,y:18},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:320.1,x:508.7,y:17.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:296.2,x:523.1,y:11.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:260.2,x:535.8,y:-5.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:200.9,x:530,y:-33.4},0).wait(1).to({regX:36.5,regY:39,scaleX:0.1,scaleY:0.1,rotation:360,x:508,y:-20.5},0).to({_off:true},1).wait(19));

        // meal
        this.instance_6 = new lib.meal();
        this.instance_6.parent = this;
        this.instance_6.setTransform(224.1,304.7,1,1,0,0,0,45.5,20);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(500).to({_off:false},0).wait(1).to({regY:5.8,x:223.5,y:286.7},0).wait(1).to({x:221.5,y:274.5},0).wait(1).to({x:218.1,y:253.6},0).wait(1).to({x:213.8,y:227.9},0).wait(1).to({x:209.9,y:204.1},0).wait(1).to({x:207.1,y:186.9},0).wait(1).to({x:205.6,y:177.4},0).wait(1).to({regY:20,x:205.1,y:188.7},0).wait(110).to({alpha:0},10).to({_off:true},1).wait(21));

        // cache
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#E6501E").ss(4,1,1).p("AKHnRIAAN1QAAAXgKAMIgBABQgMAKgXAAIzfAA");
        this.shape.setTransform(223.6,304.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#E6501E").ss(4,0,0,3).p("AnijDIPnAAQAuAAAAAuIAAErQAAAuguAAIxLAA");
        this.shape_1.setTransform(207.2,289.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("ApUHSIhkmqIRLAAQAuAAAAgtIAAksQAAguguAAIvnAAIAAhKIUNgoIAAN1QAAAXgKAMIgBABQgMAKgXAAg");
        this.shape_2.setTransform(218.6,304.9);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},419).to({state:[]},81).wait(150));

        // meal
        this.instance_7 = new lib.meal();
        this.instance_7.parent = this;
        this.instance_7.setTransform(564.1,252.7,0.1,0.1,0,0,0,45.5,20);
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(299).to({_off:false},0).wait(1).to({regY:5.8,scaleX:0.82,scaleY:0.82,y:241},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:238.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:237.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:237.2},0).wait(1).to({regY:20,scaleX:1.1,scaleY:1.1,y:252.7},0).to({regX:45.6,scaleX:0.95,scaleY:0.95,x:564.2},3,cjs.Ease.get(-1)).to({regX:45.5,scaleX:1,scaleY:1,x:564.1},3).wait(49).to({y:202.7},7,cjs.Ease.get(1)).to({y:272.7},8,cjs.Ease.get(-1)).wait(31).to({regY:5.8,x:558.5,y:258.5},0).wait(1).to({x:536.6},0).wait(1).to({x:497.7},0).wait(1).to({x:458.4},0).wait(1).to({x:428},0).wait(1).to({x:405.3},0).wait(1).to({x:388.3},0).wait(1).to({x:375.4},0).wait(1).to({x:365.5},0).wait(1).to({x:358},0).wait(1).to({x:352.5},0).wait(1).to({x:348.6},0).wait(1).to({x:346},0).wait(1).to({x:344.6},0).wait(1).to({regY:20,x:344.1,y:272.7},0).to({x:226.1,y:308.7},10,cjs.Ease.get(-1)).to({_off:true},71).wait(150));

        // boy
        this.instance_8 = new lib.boy_01("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(786.2,288.6,1,1,0,0,0,26.5,88.4);
        this.instance_8.alpha = 0.102;
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(365).to({_off:false},0).wait(1).to({regX:48.5,regY:70.8,x:733,y:271,alpha:0.584},0).wait(1).to({x:710.3,alpha:0.73},0).wait(1).to({x:696.2,alpha:0.82},0).wait(1).to({x:686.6,alpha:0.881},0).wait(1).to({x:679.9,alpha:0.925},0).wait(1).to({x:675.2,alpha:0.955},0).wait(1).to({x:671.9,alpha:0.976},0).wait(1).to({x:669.9,alpha:0.989},0).wait(1).to({x:668.7,alpha:0.996},0).wait(1).to({x:668.2,alpha:0.999},0).wait(1).to({regX:26.5,regY:88.4,x:646.2,y:288.6,alpha:1},0).wait(28).to({startPosition:0},0).wait(1).to({regX:48.5,regY:70.8,x:662.5,y:271},0).wait(1).to({x:640.7},0).wait(1).to({x:601.8},0).wait(1).to({x:562.5},0).wait(1).to({x:532},0).wait(1).to({x:509.4},0).wait(1).to({x:492.4},0).wait(1).to({x:479.4},0).wait(1).to({x:469.6},0).wait(1).to({x:462.1},0).wait(1).to({x:456.6},0).wait(1).to({x:452.6},0).wait(1).to({x:450},0).wait(1).to({x:448.6},0).wait(1).to({regX:26.5,regY:88.4,x:426.2,y:288.6},0).wait(20).to({startPosition:0},0).wait(1).to({regX:48.5,regY:70.8,x:448.4,y:271},0).wait(1).to({x:449.9},0).wait(1).to({x:453.3},0).wait(1).to({x:459.4},0).wait(1).to({x:469.1},0).wait(1).to({x:483.6},0).wait(1).to({x:504.9},0).wait(1).to({x:536.9},0).wait(1).to({x:589.6},0).wait(1).to({regX:26.5,regY:88.4,x:746.2,y:288.6},0).to({_off:true},1).wait(94).to({_off:false,x:651.1,y:277.8},0).wait(71).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(24));

        // talk
        this.instance_9 = new lib.ok();
        this.instance_9.parent = this;
        this.instance_9.setTransform(612.6,184.8,0.1,0.1,0,0,0,85,75);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(249).to({_off:false},0).wait(1).to({regX:42.5,regY:37.5,scaleX:0.82,scaleY:0.82,x:563.2,y:139.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:552.8,y:129.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:548.1,y:125.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:546.2,y:123.8},0).wait(1).to({regX:85,regY:75,scaleX:1.1,scaleY:1.1,x:592.6,y:164.8},0).to({scaleX:0.95,scaleY:0.95},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).to({_off:true},29).wait(361));

        // chief
        this.instance_10 = new lib.cook_01();
        this.instance_10.parent = this;
        this.instance_10.setTransform(823.6,288,1,1,0,0,0,59,223.3);
        this.instance_10.alpha = 0.102;
        this.instance_10._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(214).to({_off:false},0).wait(1).to({regY:111.6,scaleY:1,skewX:-1.7,x:725.4,y:176.2,alpha:0.603},0).wait(1).to({skewX:-2.2,x:696.4,alpha:0.751},0).wait(1).to({skewX:-2.5,x:678.8,alpha:0.841},0).wait(1).to({skewX:-2.7,x:667.1,alpha:0.901},0).wait(1).to({skewX:-2.9,x:659.1,alpha:0.941},0).wait(1).to({skewX:-3,x:653.8,alpha:0.968},0).wait(1).to({x:650.4,alpha:0.986},0).wait(1).to({skewX:-3.1,x:648.5,alpha:0.995},0).wait(1).to({x:647.7,alpha:0.999},0).wait(1).to({regY:223.3,x:653.6,y:288,alpha:1},0).to({regX:59.1,scaleY:1,skewX:1.8,x:653.8},5,cjs.Ease.get(-1)).to({regX:59,skewX:0,x:653.6},5).wait(125).to({x:713.6,alpha:0},7).to({_off:true},1).wait(177).to({_off:false,x:460.6,y:334,alpha:1},0).wait(70).to({alpha:0},10).to({_off:true},1).wait(25));

        // gear
        this.instance_11 = new lib.Machine("single",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(197.3,175.5,1,1,0,0,0,90.5,175.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({mode:"synched",loop:false},0).wait(48).to({mode:"single",startPosition:48},0).wait(51).to({startPosition:49},0).wait(495).to({startPosition:49},0).to({alpha:0},13).wait(1).to({startPosition:0},0).to({alpha:1},12).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(76,-2,900.3,377.7);


// stage content:
    (lib.Anime_long = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.instance = new lib.Explain("synched",0,false);
        this.instance.parent = this;
        this.instance.setTransform(182.5,410.6,1,1,0,0,0,237.3,186.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(650));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(446.2,522,214,377.7);
// library properties:
    lib.properties = {
        width: 850,
        height: 600,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [],
        preloads: []
    };

    

})(animation2 = animation2||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var animation2, images, createjs, ss, AdobeAn;