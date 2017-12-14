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


(lib.SC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SC
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B3F80").ss(2,1,1).p("AizA9ICnAAAizCIIBhAAAC0CkIgZATIADAiIgigDIgTAZIgUgZIgiADIADgiIgZgTIAZgUIgDgiIAiADIAUgZIATAZIAigDIgDAigAizjuIFQAAAizijIEoAAAizhYIFQAAAizgNIFQAA");
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
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#4B3F80").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_118.setTransform(-45.6,133.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#4B3F80").s().p("AADA6IAAhSQgLALgQAFIAAgUQAJgCAKgIQAJgIADgKIASAAIAAByg");
	this.shape_119.setTransform(-53,129);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#4B3F80").s().p("AgaArIAAhTIAVAAIAAANQAEgJAEgCQAEgEAGAAQAHABAHAEIgHATQgFgEgFAAQgFAAgDADQgCADgCAGQgCAHAAAUIAAAag");
	this.shape_120.setTransform(51,130.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgMAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGAAQgGAAgFAGg");
	this.shape_121.setTransform(42.7,130.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#4B3F80").s().p("AgdAvQgLgMAAgVQAAgUALgLQAJgLAPAAQANAAAKAMIAAgpIAWAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgLgFQgGAGAAAMQAAANADAGQAGAJAIAAQAIAAAFgHQAGgGgBgNQABgOgGgFQgEgHgJAAQgHAAgEAGg");
	this.shape_122.setTransform(33.3,129.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#4B3F80").s().p("AgaArIAAhTIAUAAIAAANQAFgJAEgCQAEgEAFAAQAIABAHAEIgHATQgGgEgFAAQgEAAgDADQgDADgBAGQgCAHAAAUIAAAag");
	this.shape_123.setTransform(26.1,130.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4B3F80").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgKQAFgKAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAASgMANQgNANgSAAQgKgBgLgFgAgNgSQgGAHAAALQAAAMAGAHQAFAGAIABQAJgBAFgGQAGgHAAgMQAAgLgGgHQgFgGgJgBQgIABgFAGg");
	this.shape_124.setTransform(17.5,130.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgMAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGAAQgGAAgFAGg");
	this.shape_125.setTransform(3.6,130.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#4B3F80").s().p("AgCA3QgGgCgCgDQgCgDgBgGIAAgPIAAgjIgLAAIAAgSIALAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIAEABIAJgCIACARQgJADgJAAQgGAAgDgCg");
	this.shape_126.setTransform(-3.4,129.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4B3F80").s().p("AgfAkQgHgHAAgKQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgCIAAgDQAAgGgDgDQgDgCgIgBQgGABgEACQgDACgBAGIgUgDQADgNAIgFQAIgHAQAAQAOABAHADQAIAEACAFQADAGABAOIgBAYIABAQQABAFADAHIgVAAIgDgHIgBgCQgFAFgHADQgFADgHAAQgNAAgIgIgAAAAFQgIACgEACQgEADAAAFQAAAEADAEQAEADAFAAQAGAAAEgEQAEgDACgEQABgDAAgIIAAgFIgNAEg");
	this.shape_127.setTransform(-10.6,130.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgMAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGAAQgGAAgFAGg");
	this.shape_128.setTransform(-19.6,130.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#4B3F80").s().p("AgaArIAAhTIAVAAIAAANQAEgJAEgCQAEgEAFAAQAIABAHAEIgHATQgFgEgFAAQgFAAgDADQgCADgCAGQgCAHAAAUIAAAag");
	this.shape_129.setTransform(-26.4,130.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#4B3F80").s().p("AgiAsQgPgQAAgbQAAgcAPgPQAOgQAYAAQAUAAAOAMQAIAIADANIgXAGQgCgJgGgFQgHgFgIAAQgMAAgIAJQgIAJAAAUQAAAVAHAJQAIAJAMAAQAKAAAGgFQAGgGAEgNIAWAHQgGATgMAJQgMAJgRAAQgXAAgOgPg");
	this.shape_130.setTransform(-36,129);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#4B3F80").s().p("AglA6QABgMAGgLQAGgKASgRQAPgNADgFQAEgGAAgHQAAgHgDgFQgFgDgHAAQgGAAgEAEQgDAEgBAKIgWgCQACgTALgHQAJgJAPABQARgBAKAKQAKAJgBANQAAAIgDAHQgCAHgGAHIgOAOIgNANIgEAGIAqAAIAAAVg");
	this.shape_131.setTransform(-52.5,129);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#4B3F80").s().p("AgaArIAAhTIAVAAIAAANQAFgJADgCQAEgEAGAAQAHABAHAEIgHATQgFgEgGAAQgEAAgDADQgCADgCAGQgCAHAAAUIAAAag");
	this.shape_132.setTransform(34,130.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#4B3F80").s().p("AgdAvQgLgMAAgVQAAgUAKgLQALgLAOAAQANAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAFgGABgNQgBgOgFgFQgFgHgHAAQgHAAgGAGg");
	this.shape_133.setTransform(16.3,129.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#4B3F80").s().p("AAOAqIgOg1IgNA1IgWAAIgahTIAWAAIAPA2IAOg2IAUAAIAOA2IAQg2IAWAAIgbBTg");
	this.shape_134.setTransform(-15,130.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#4B3F80").s().p("AAWA5IgthJIAABJIgVAAIAAhxIAWAAIAuBLIAAhLIAVAAIAABxg");
	this.shape_135.setTransform(-36,129);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#4B3F80").s().p("AgZAyQgKgKgCgOIAVgDQABAJAFAEQAEAEAGABQAGgBAFgFQAFgFAAgJQAAgIgFgFQgFgFgFAAQgEAAgGACIACgRQAJAAAEgEQAFgEAAgHQAAgGgDgDQgEgDgEAAQgHAAgDADQgEAFgBAHIgUgEQACgKAEgGQAEgHAIgDQAIgDAJAAQAPAAAKAKQAIAIAAALQAAAPgQAJQAJACAGAHQAGAHAAAKQAAAPgLALQgLALgQAAQgPAAgKgJg");
	this.shape_136.setTransform(-52.3,129.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#4B3F80").s().p("AgdAvQgLgMAAgVQABgUAJgLQAKgLAPAAQANAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAGgGAAgNQAAgOgGgFQgFgHgHAAQgIAAgFAGg");
	this.shape_137.setTransform(36.8,129.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#4B3F80").s().p("AgaArIAAhTIAUAAIAAANQAFgJAEgCQAEgEAFAAQAIABAHAEIgHATQgGgEgEAAQgFAAgDADQgDADgBAGQgCAHAAAUIAAAag");
	this.shape_138.setTransform(29.6,130.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4B3F80").s().p("AgCA3QgGgCgBgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIADARQgJADgJAAQgGAAgDgCg");
	this.shape_139.setTransform(9,129.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#4B3F80").s().p("AgoA6IAAhxIAVAAIAAAMQAEgGAHgEQAGgEAHAAQAPAAAKALQAKAMAAAUQAAAUgKALQgKAMgPAAQgFAAgGgDQgGgDgFgGIAAApgAgNghQgFAGAAAMQAAAOAFAGQAGAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgGgGQgEgHgIAAQgHAAgGAHg");
	this.shape_140.setTransform(1.7,132);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4B3F80").s().p("AgbAgQgLgMAAgUQAAgUALgLQALgMARAAQAPABAJAGQAJAHAEANIgWAEQgBgGgDgEQgEgDgHAAQgHAAgFAGQgFAFAAAOQAAAOAFAFQAFAHAIAAQAGgBAEgDQAEgDACgKIAVAFQgDAOgKAIQgJAHgQABQgRAAgLgMg");
	this.shape_141.setTransform(-16.7,130.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#4B3F80").s().p("AgbAgQgLgMAAgUQAAgUALgLQALgMARAAQAPABAJAGQAJAHAEANIgWAEQgBgGgDgEQgEgDgHAAQgHAAgFAGQgFAFAAAOQAAAOAFAFQAFAHAIAAQAGgBAEgDQAEgDACgKIAVAFQgDAOgKAIQgJAHgQABQgRAAgLgMg");
	this.shape_142.setTransform(-25.6,130.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#4B3F80").s().p("AAgA5IgKgaIgsAAIgKAaIgZAAIAthxIAYAAIAuBxgAgPAMIAeAAIgPgqg");
	this.shape_143.setTransform(-36,129);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#4B3F80").s().p("AAGA6IAAgYIguAAIAAgTIAwhHIATAAIAABHIAOAAIAAATIgOAAIAAAYgAgUAPIAaAAIAAgmg");
	this.shape_144.setTransform(-52.3,129);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#4B3F80").s().p("AgiA5IgCgRIAJABQAIAAADgFQAEgEACgHIgghSIAYAAIATA6IATg6IAXAAIgeBPIgFAOIgFALQgDAEgCACQgEADgFABIgLABIgMgBg");
	this.shape_145.setTransform(44.5,132.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#4B3F80").s().p("AgeAkQgIgHAAgKQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgCIAAgDQAAgGgEgDQgDgCgHgBQgGABgDACQgDACgDAGIgUgDQAEgNAIgFQAIgHAQAAQAOABAIADQAHAEADAFQACAGAAAOIAAAYIABAQQABAFADAHIgWAAIgCgHIAAgCQgGAFgGADQgGADgHAAQgNAAgHgIgAAAAFQgIACgDACQgFADAAAFQAAAEAEAEQADADAGAAQAFAAAEgEQAEgDACgEQABgDAAgIIAAgFIgNAEg");
	this.shape_146.setTransform(25.9,130.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#4B3F80").s().p("AgaArIAAhTIAUAAIAAANQAGgJADgCQAEgEAGAAQAHABAHAEIgHATQgGgEgFAAQgEAAgDADQgCADgCAGQgCAHAAAUIAAAag");
	this.shape_147.setTransform(10.1,130.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#4B3F80").s().p("AgnAsQgQgQABgbQAAgRAEgMQAFgIAHgHQAGgHAIgEQALgEANAAQAZAAAQAPQAPAQgBAbQABAcgPAQQgQAPgZAAQgYAAgPgPgAgWgdQgJAKABATQAAATAJAKQAIAKANAAQAOAAAJgJQAJgKAAgUQAAgTgJgKQgJgJgOAAQgNAAgJAJg");
	this.shape_148.setTransform(-35.5,129);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4B3F80").s().p("AgZAxQgLgIgCgPIAXgCQAAAHAFAEQAEAFAGAAQAGAAAGgGQAEgFAAgMQAAgKgEgFQgGgFgGAAQgJAAgIAHIgRgCIALg7IA4AAIAAAVIgoAAIgEAUQAIgEAHAAQAOAAALAKQAJAKABARQgBAOgHALQgLAPgUABQgQAAgJgJg");
	this.shape_149.setTransform(-52.2,129.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#4B3F80").s().p("AgdAvQgLgMAAgVQABgUAJgLQALgLAOAAQANAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAGgGAAgNQAAgOgGgFQgFgHgHAAQgHAAgGAGg");
	this.shape_150.setTransform(41.2,129.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#4B3F80").s().p("AgnA6IAAhxIAUAAIAAAMQAEgGAGgEQAIgEAHAAQAOAAAKALQALAMAAAUQAAAUgLALQgKAMgOAAQgHAAgFgDQgGgDgGgGIAAApgAgMghQgGAGAAAMQAAAOAGAGQAFAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgFgGQgGgHgHAAQgIAAgEAHg");
	this.shape_151.setTransform(11.4,132);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#4B3F80").s().p("AgYAmQgHgDgDgHQgDgGAAgMIAAg0IAWAAIAAAnQAAAQABAEQACAEADADQADABAFAAQAFAAAEgCQAFgEABgEQACgEAAgSIAAgjIAWAAIAABTIgVAAIAAgNQgEAGgIAEQgGAFgIAAQgJAAgGgFg");
	this.shape_152.setTransform(1.4,130.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#4B3F80").s().p("AgUALIAAgVIApAAIAAAVg");
	this.shape_153.setTransform(-5.8,130.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#4B3F80").s().p("AAPA5IgUglIgKALIAAAaIgXAAIAAhxIAXAAIAAA8IAZgdIAbAAIgdAeIAeA0g");
	this.shape_154.setTransform(-12.8,129);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#4B3F80").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_155.setTransform(-28.8,129);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#4B3F80").s().p("AgrA5IAAhxIAmAAQAUAAAGABQAJADAHAJQAHAIAAAOQAAALgEAHQgEAGgFAEQgHAEgGABQgIACgOAAIgQAAIAAArgAgUgEIANAAQANAAAEgCQAFgCACgEQADgEAAgFQAAgGgEgEQgDgEgGgBIgQgBIgLAAg");
	this.shape_156.setTransform(-36.2,129);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#4B3F80").s().p("AgaAtQgLgOAAgeQAAgfALgOQAMgOARABQANAAAJAHQAJAHACAOIgVACQgBgGgDgEQgEgCgFAAQgGAAgFAGQgEAGgCAUQAIgKAMAAQANAAAKALQAKAJAAARQAAARgKALQgLALgQAAQgQAAgLgOgAgIAEQgFAEAAAKQAAALAFAFQAFAHAFAAQAGAAAEgGQAFgEAAgLQAAgMgFgEQgEgFgHAAQgFAAgEAFg");
	this.shape_157.setTransform(-52.2,129.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#4B3F80").s().p("AgaArIAAhTIAUAAIAAANQAGgJADgCQAEgEAFAAQAIABAHAEIgHATQgGgEgFAAQgEAAgDADQgCADgCAGQgCAHAAAUIAAAag");
	this.shape_158.setTransform(55.4,130.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#4B3F80").s().p("AgJAqIghhTIAXAAIAPAqIAEAOIADgHIACgHIAQgqIAWAAIghBTg");
	this.shape_159.setTransform(38.3,130.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#4B3F80").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_160.setTransform(27.2,129);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#4B3F80").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgMAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGAAQgGAAgFAGg");
	this.shape_161.setTransform(-8.9,130.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#4B3F80").s().p("AgVA5QAAgYAJgZQAKgYAOgTIgxAAIAAgVIBLAAIAAARQgKAJgKARQgJAQgFATQgEAUAAAPg");
	this.shape_162.setTransform(-52.3,129.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#4B3F80").s().p("AgdAvQgLgMABgVQgBgUAKgLQALgLAPAAQANAAAKAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgMgFQgFAGAAAMQAAANAEAGQAFAJAJAAQAHAAAFgHQAFgGABgNQgBgOgFgFQgEgHgIAAQgIAAgFAGg");
	this.shape_163.setTransform(65.3,129.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#4B3F80").s().p("AgkAqIAAgRIAggjIAJgNIgIAAIgeAAIAAgSIBEAAIAAAQIggAjIgKANIAKgBIAiAAIAAAUg");
	this.shape_164.setTransform(47.6,130.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#4B3F80").s().p("AgeAkQgIgHAAgKQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgCIAAgDQAAgGgEgDQgCgCgIgBQgGABgDACQgEACgCAGIgUgDQAEgNAIgFQAIgHAQAAQAOABAIADQAGAEAEAFQADAGgBAOIAAAYIABAQQABAFADAHIgWAAIgBgHIgBgCQgGAFgHADQgFADgHAAQgNAAgHgIgAAAAFQgJACgCACQgFADAAAFQAAAEAEAEQADADAGAAQAFAAAFgEQADgDACgEQABgDAAgIIAAgFIgNAEg");
	this.shape_165.setTransform(30.3,130.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#4B3F80").s().p("AAQArIAAgrQAAgNgCgDQgBgEgDgDQgDgCgFAAQgFAAgEADQgFADgBAGQgCAFAAANIAAAmIgWAAIAAhTIAUAAIAAANQALgOAQgBQAHAAAGAEQAGACADAEQADAEACAFIABAPIAAAzg");
	this.shape_166.setTransform(21,130.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#4B3F80").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_167.setTransform(13.9,129);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#4B3F80").s().p("AgPA6IAAhAIgMAAIAAgSIAMAAIAAgGQAAgKACgGQACgFAGgDQAGgDAJAAQAJAAAJADIgDAPIgKgBQgFAAgCACQgCACAAAGIAAAGIAQAAIAAASIgQAAIAABAg");
	this.shape_168.setTransform(9.3,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_130},{t:this.shape_129,p:{x:-26.4}},{t:this.shape_128,p:{x:-19.6}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125,p:{x:3.6}},{t:this.shape_124,p:{x:17.5}},{t:this.shape_123},{t:this.shape_122,p:{x:33.3}},{t:this.shape_121,p:{x:42.7}},{t:this.shape_120,p:{x:51}},{t:this.shape_119},{t:this.shape_118}]},29).to({state:[{t:this.shape_135},{t:this.shape_125,p:{x:-25.8}},{t:this.shape_134},{t:this.shape_124,p:{x:0.5}},{t:this.shape_129,p:{x:9.1}},{t:this.shape_133,p:{x:16.3}},{t:this.shape_121,p:{x:25.7}},{t:this.shape_132,p:{x:34}},{t:this.shape_131},{t:this.shape_118}]},19).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141,p:{x:-16.7}},{t:this.shape_125,p:{x:-8}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_124,p:{x:21}},{t:this.shape_138,p:{x:29.6}},{t:this.shape_137},{t:this.shape_121,p:{x:46.2}},{t:this.shape_120,p:{x:54.5}},{t:this.shape_136},{t:this.shape_118}]},20).to({state:[{t:this.shape_148},{t:this.shape_129,p:{x:-25.5}},{t:this.shape_133,p:{x:-18.3}},{t:this.shape_125,p:{x:-8.9}},{t:this.shape_132,p:{x:-0.6}},{t:this.shape_147},{t:this.shape_121,p:{x:16.9}},{t:this.shape_146},{t:this.shape_122,p:{x:35.1}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_118}]},20).to({state:[{t:this.shape_156},{t:this.shape_155,p:{x:-28.8}},{t:this.shape_141,p:{x:-22.1}},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_124,p:{x:25.4}},{t:this.shape_138,p:{x:34}},{t:this.shape_150,p:{x:41.2}},{t:this.shape_121,p:{x:50.6}},{t:this.shape_132,p:{x:58.9}},{t:this.shape_149},{t:this.shape_118}]},20).to({state:[{t:this.shape_148},{t:this.shape_129,p:{x:-25.5}},{t:this.shape_133,p:{x:-18.3}},{t:this.shape_161},{t:this.shape_132,p:{x:-0.6}},{t:this.shape_150,p:{x:11}},{t:this.shape_128,p:{x:20.4}},{t:this.shape_160,p:{x:27.2}},{t:this.shape_155,p:{x:31.7}},{t:this.shape_159},{t:this.shape_125,p:{x:47.1}},{t:this.shape_158},{t:this.shape_121,p:{x:62.3}},{t:this.shape_122,p:{x:71.5}},{t:this.shape_157},{t:this.shape_118}]},20).to({state:[{t:this.shape_148},{t:this.shape_129,p:{x:-25.5}},{t:this.shape_133,p:{x:-18.3}},{t:this.shape_125,p:{x:-8.9}},{t:this.shape_132,p:{x:-0.6}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_160,p:{x:37}},{t:this.shape_155,p:{x:41.5}},{t:this.shape_164},{t:this.shape_121,p:{x:56}},{t:this.shape_163},{t:this.shape_162},{t:this.shape_118}]},20).to({state:[]},1).wait(1));

	// void
	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AhDBGQgCAAABgWIAAhfQgBgWACAAICHAAQACAAgBAWIAABfQABAWgCAAg");
	this.shape_169.setTransform(36.5,95.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AifBGQgFAAAAgWIAAhfQAAgWAFAAIE/AAQAFAAAAAWIAABfQAAAWgFAAg");
	this.shape_170.setTransform(36.5,95.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("Aj3BGQgFAAgBgWIAAhfQABgWAFAAIHvAAQAGAAAAAWIAABfQAAAWgGAAg");
	this.shape_171.setTransform(36.5,95.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AlIBGQgHAAgBgWIAAhfQABgWAHAAIKRAAQAIAAAAAWIAABfQAAAWgIAAg");
	this.shape_172.setTransform(36.5,95.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AmUBGQgKAAAAgWIAAhfQAAgWAKAAIMpAAQAKAAAAAWIAABfQAAAWgKAAg");
	this.shape_173.setTransform(36.5,95.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AnaBGQgLAAAAgWIAAhfQAAgWALAAIO1AAQALAAAAAWIAABfQAAAWgLAAg");
	this.shape_174.setTransform(36.5,95.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AoaBGQgNAAgBgWIAAhfQABgWANAAIQ2AAQANAAAAAWIAABfQAAAWgNAAg");
	this.shape_175.setTransform(36.5,95.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("ApWBGQgOAAAAgWIAAhfQAAgWAOAAIStAAQAOAAAAAWIAABfQAAAWgOAAg");
	this.shape_176.setTransform(36.5,95.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AqLBGQgPAAAAgWIAAhfQAAgWAPAAIUXAAQAPAAAAAWIAABfQAAAWgPAAg");
	this.shape_177.setTransform(36.5,95.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("Aq7BGQgQAAAAgWIAAhfQAAgWAQAAIV3AAQAQAAAAAWIAABfQAAAWgQAAg");
	this.shape_178.setTransform(36.5,95.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("ArlBGQgRAAAAgWIAAhfQAAgWARAAIXLAAQARAAAAAWIAABfQAAAWgRAAg");
	this.shape_179.setTransform(36.5,95.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AsKBGQgRAAgBgWIAAhfQABgWARAAIYVAAQASAAgBAWIAABfQABAWgSAAg");
	this.shape_180.setTransform(36.5,95.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AsoBGQgTAAAAgWIAAhfQAAgWATAAIZSAAQASAAAAAWIAABfQAAAWgSAAg");
	this.shape_181.setTransform(36.5,95.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AtBBGQgUAAAAgWIAAhfQAAgWAUAAIaEAAQATAAAAAWIAABfQAAAWgTAAg");
	this.shape_182.setTransform(36.5,95.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AtVBGQgUAAAAgWIAAhfQAAgWAUAAIarAAQAUAAAAAWIAABfQAAAWgUAAg");
	this.shape_183.setTransform(36.5,95.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AtkBGQgTAAAAgWIAAhfQAAgWATAAIbJAAQATAAAAAWIAABfQAAAWgTAAg");
	this.shape_184.setTransform(36.5,95.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AtsBGQgUAAAAgWIAAhfQAAgWAUAAIbZAAQAUAAAAAWIAABfQAAAWgUAAg");
	this.shape_185.setTransform(36.5,95.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AtuBGQgVAAAAgWIAAhfQAAgWAVAAIbeAAQAUAAAAAWIAABfQAAAWgUAAg");
	this.shape_186.setTransform(36.5,95.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_169}]},5).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[]},127).wait(1));

	// bg
	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FF9900").s().p("AiNH0QgTAAgBh3IAAr6QABh2ATAAIEbAAQATAAAAB2IAAL6QAAB3gTAAg");
	this.shape_187.setTransform(36.5,60.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FF9900").s().p("AjmH0QggAAAAh3IAAr6QAAh2AgAAIHNAAQAgAAAAB2IAAL6QAAB3ggAAg");
	this.shape_188.setTransform(36.5,60.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FF9900").s().p("Ak5H0QgsAAAAh3IAAr6QAAh2AsAAIJzAAQAsAAAAB2IAAL6QAAB3gsAAg");
	this.shape_189.setTransform(36.5,60.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FF9900").s().p("AmGH0Qg4AAAAh3IAAr6QAAh2A4AAIMNAAQA4AAAAB2IAAL6QAAB3g4AAg");
	this.shape_190.setTransform(36.5,60.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FF9900").s().p("AnOH0QhBAAAAh3IAAr6QAAh2BBAAIOdAAQBBAAAAB2IAAL6QAAB3hBAAg");
	this.shape_191.setTransform(36.5,60.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FF9900").s().p("AoQH0QhLAAAAh3IAAr6QAAh2BLAAIQhAAQBLAAAAB2IAAL6QAAB3hLAAg");
	this.shape_192.setTransform(36.5,60.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FF9900").s().p("ApMH0QhUAAABh3IAAr6QgBh2BUAAISaAAQBSAAAAB2IAAL6QAAB3hSAAg");
	this.shape_193.setTransform(36.5,60.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FF9900").s().p("AqDH0QhbAAAAh3IAAr6QAAh2BbAAIUHAAQBbAAAAB2IAAL6QAAB3hbAAg");
	this.shape_194.setTransform(36.5,60.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FF9900").s().p("Aq0H0QhhAAAAh3IAAr6QAAh2BhAAIVpAAQBhAAAAB2IAAL6QAAB3hhAAg");
	this.shape_195.setTransform(36.5,60.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FF9900").s().p("AreH0QhpAAAAh3IAAr6QAAh2BpAAIW+AAQBnAAABB2IAAL6QgBB3hnAAg");
	this.shape_196.setTransform(36.5,60.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FF9900").s().p("AsEH0QhtAAAAh3IAAr6QAAh2BtAAIYJAAQBtAAAAB2IAAL6QAAB3htAAg");
	this.shape_197.setTransform(36.5,60.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FF9900").s().p("AskH0QhxAAAAh3IAAr6QAAh2BxAAIZJAAQBxAAAAB2IAAL6QAAB3hxAAg");
	this.shape_198.setTransform(36.5,60.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FF9900").s().p("As+H0Qh0AAgBh3IAAr6QABh2B0AAIZ9AAQB0AAABB2IAAL6QgBB3h0AAg");
	this.shape_199.setTransform(36.5,60.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FF9900").s().p("AtSH0Qh3AAAAh3IAAr6QAAh2B3AAIalAAQB3AAAAB2IAAL6QAAB3h3AAg");
	this.shape_200.setTransform(36.5,60.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FF9900").s().p("AtgH0Qh6AAAAh3IAAr6QAAh2B6AAIbBAAQB6AAAAB2IAAL6QAAB3h6AAg");
	this.shape_201.setTransform(36.5,60.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FF9900").s().p("AtpH0Qh7AAABh3IAAr6QgBh2B7AAIbTAAQB7AAgBB2IAAL6QABB3h7AAg");
	this.shape_202.setTransform(36.5,60.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FF9900").s().p("AtsH0Qh7AAAAh3IAAr6QAAh2B7AAIbZAAQB7AAAAB2IAAL6QAAB3h7AAg");
	this.shape_203.setTransform(36.5,60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[]},132).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,76.1,83);


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

	// body
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4B3F80").ss(5,1,1).p("AASllIJ2hGIFKFFIh9AyIkTjmIlFCvID1IXIqZAAIivnCIlxCLIkKnGICggtICbEdIEEibg");
	this.shape_5.setTransform(57.6,101.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4B3F80").s().p("AinGrIivnBIlxCMIkKnHICggtICbEeIEEibIGkhpIJ2hHIFKFFIh9AzIkTjnIlFCwID1IVg");
	this.shape_6.setTransform(57.6,101.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.6,-2.9,200.6,150);


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
	this.shape.graphics.f("#4B3F80").s().p("AgYAeQgHgHAAgOQAAgLAFgMQAFgLAIgGQAJgGAKAAQAMAAAHAHQAHAGAAALIgMABQAAgHgEgEQgEgEgHAAQgGAAgGAFQgFAFgDAJQgDAJAAAJQAAAJAEAFQAEAEAGAAQAFAAAFgEQAGgFADgJIAMABQgEAOgJAGQgIAHgKAAQgMAAgIgIg");
	this.shape.setTransform(20.8,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B3F80").s().p("AgYAzIANg+IgLAAIACgJIALAAIACgLIADgLQACgDADgCQAEgDAHAAIANACIgCALQgGgCgEAAQgEAAgCACQgCACgBAGIgCAJIAOAAIgCAJIgOAAIgMA+g");
	this.shape_1.setTransform(16.1,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4B3F80").s().p("AgpAyIAAhjIAoAAIARABQAGABAEADQAFADADAFQADAGAAAGQAAAHgEAGQgEAGgGACQAJADAFAGQAFAHAAAIQAAAHgDAGQgDAHgGADQgFAFgIABIgYAAgAgVAhIATAAIANgBQAEAAADgDQADgDAAgGQAAgEgCgDQgCgEgEgBQgFgBgMgBIgRAAgAgVgKIAOAAIANAAQAFgBADgCQADgDAAgFQAAgFgCgDQgDgDgFAAIgQAAIgMAAg");
	this.shape_2.setTransform(8,13);

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
	this.shape_5.graphics.f().s("#4B3F80").ss(1,1,1).p("AgrhkIBfAAAgpBlIBhAAAhGhBIBOAAAhCBIICZAAAhWgWICFAAAhVAcIByAA");
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


(lib.perso_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.head_01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(16.9,28,1,1,0,0,0,8.1,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// body
	this.instance_1 = new lib.body_01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.6,51.4,1,1,0,0,0,13.6,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// arm
	this.instance_2 = new lib.arm_01("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(30.6,29.2,1,1,40.4,0,0,3.1,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({startPosition:0},0).wait(1).to({regX:9.6,rotation:40.2,x:35.6,y:33.4},0).wait(1).to({rotation:39.6},0).wait(1).to({rotation:38.3,x:35.7,y:33.3},0).wait(1).to({rotation:36.3,x:35.8,y:33.1},0).wait(1).to({rotation:33.4,x:36,y:32.8},0).wait(1).to({rotation:29.8,x:36.2,y:32.4},0).wait(1).to({rotation:25.9,x:36.5,y:32.1},0).wait(1).to({rotation:22.3,x:36.6,y:31.7},0).wait(1).to({rotation:19.1,x:36.7,y:31.4},0).wait(1).to({rotation:16.6,x:36.8,y:31.1},0).wait(1).to({rotation:14.7,x:36.9,y:30.9},0).wait(1).to({rotation:13.2,y:30.7},0).wait(1).to({rotation:12.1,x:37,y:30.6},0).wait(1).to({rotation:11.3},0).wait(1).to({rotation:10.8,y:30.5},0).wait(1).to({rotation:10.5,y:30.4},0).wait(1).to({regX:3.1,x:30.7,y:29.3},0).wait(13).to({startPosition:0},0).wait(1).to({regX:9.6,rotation:10.9,x:37,y:30.5},0).wait(1).to({rotation:12.5,y:30.8},0).wait(1).to({rotation:15.7,x:36.9,y:31.2},0).wait(1).to({rotation:21.1,x:36.7,y:32},0).wait(1).to({rotation:29.3,x:36.3,y:33.1},0).wait(1).to({rotation:39.2,x:35.7,y:34.4},0).wait(1).to({rotation:47.3,x:35,y:35.3},0).wait(1).to({rotation:52.3,x:34.6,y:35.9},0).wait(1).to({rotation:54.8,x:34.4,y:36.1},0).wait(1).to({regX:3.1,rotation:55.5,x:30.7,y:30.8},0).wait(51));

	// arm
	this.instance_3 = new lib.arm_01("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(40.5,37.8,0.899,0.998,-40.4,0,0,3.1,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({startPosition:0},0).wait(1).to({regX:9.6,regY:3.1,rotation:-40.2,x:44.9,y:33.8},0).wait(1).to({scaleX:0.9,rotation:-39.7,x:45.1},0).wait(1).to({scaleX:0.9,rotation:-38.7,x:45.3,y:33.6},0).wait(1).to({rotation:-37.1,x:45.6,y:33.3},0).wait(1).to({rotation:-34.9,x:46,y:32.9},0).wait(1).to({rotation:-32,x:46.6,y:32.5},0).wait(1).to({rotation:-29,x:47.2,y:32},0).wait(1).to({rotation:-26.1,x:47.7,y:31.6},0).wait(1).to({scaleX:0.9,rotation:-23.7,x:48.2,y:31.2},0).wait(1).to({scaleX:0.9,rotation:-21.7,x:48.6,y:30.9},0).wait(1).to({rotation:-20.2,x:48.8,y:30.6},0).wait(1).to({scaleX:0.9,rotation:-19,x:49.1,y:30.5},0).wait(1).to({rotation:-18.2,x:49.2,y:30.3},0).wait(1).to({scaleX:0.9,rotation:-17.6,x:49.3},0).wait(1).to({rotation:-17.2,x:49.4,y:30.2},0).wait(1).to({rotation:-17},0).wait(1).to({regX:3.1,regY:3.2,rotation:-16.9,x:43.9,y:32},0).wait(13).to({startPosition:0},0).wait(1).to({regX:9.6,regY:3.1,rotation:-15.3,x:49.4,y:30.4},0).wait(1).to({scaleX:0.9,rotation:-9.7,y:31.3},0).wait(1).to({scaleX:0.9,rotation:1.3,x:49.1,y:33.1},0).wait(1).to({rotation:20.2,x:48.1,y:36.1},0).wait(1).to({scaleX:0.9,rotation:48.7,x:45.5,y:40.4},0).wait(1).to({rotation:83.1,x:41.2,y:43.9},0).wait(1).to({rotation:111.6,x:37.3,y:45.4},0).wait(1).to({rotation:129.1,x:35.1,y:45.7},0).wait(1).to({rotation:137.5,x:34.2,y:45.6},0).wait(1).to({regX:3.2,regY:3.2,rotation:139.9,x:38.4,y:41.8},0).wait(51));

	// hand
	this.instance_4 = new lib.hand_02("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(50.3,29.3,1,1,0,0,0,1.3,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({startPosition:0},0).wait(1).to({regX:5.2,regY:5.8,x:54.3,y:25.9},0).wait(1).to({rotation:0.2,x:54.4},0).wait(1).to({rotation:0.5,x:54.7},0).wait(1).to({rotation:0.9,x:55.2,y:25.8},0).wait(1).to({rotation:1.5,x:55.9,y:25.7},0).wait(1).to({rotation:2.3,x:56.8,y:25.6},0).wait(1).to({rotation:3.1,x:57.8},0).wait(1).to({rotation:3.9,x:58.7,y:25.5},0).wait(1).to({rotation:4.6,x:59.5,y:25.4},0).wait(1).to({rotation:5.1,x:60.1},0).wait(1).to({rotation:5.6,x:60.6,y:25.3},0).wait(1).to({rotation:5.9,x:60.9},0).wait(1).to({rotation:6.1,x:61.2,y:25.2},0).wait(1).to({rotation:6.3,x:61.3},0).wait(1).to({rotation:6.4,x:61.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:1.3,regY:9.2,rotation:6.5,x:57.3,y:28.2},0).wait(13).to({startPosition:0},0).wait(1).to({regX:5.2,regY:5.8,rotation:4.9,x:61.2,y:25.4},0).wait(1).to({rotation:-0.4,x:60,y:26.2},0).wait(1).to({rotation:-11,x:57.5,y:27.8},0).wait(1).to({rotation:-29,x:53.1,y:30.8},0).wait(1).to({rotation:-56.3,x:46.1,y:36.4},0).wait(1).to({rotation:-89.2,x:37.8,y:44.6},0).wait(1).to({rotation:-116.5,x:31.8,y:52.4},0).wait(1).to({rotation:-133.2,x:28.6,y:57.4},0).wait(1).to({rotation:-141.3,x:27.2,y:59.9},0).wait(1).to({regX:1.3,regY:9.2,rotation:-143.5,x:31.9,y:60.1},0).to({_off:true},1).wait(50));

	// arm
	this.instance_5 = new lib.arm_01("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(12.3,32.6,1,1,128.2,0,0,3.3,3.1);

	this.instance_6 = new lib.arm_01("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(4.3,42.9,0.898,0.998,47.4,0,0,3.3,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(120));

	// leg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B3F80").ss(2,0,0,3).p("AhajRQAECCAwDgIgLAOQgMARgEAMQgEALAigDIAhgFABbjRQgFDDg1ClIAPAQQAQASACAJQACAKgjgGQgSgDgRgEIACmQ");
	this.shape.setTransform(21.5,87.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhDLIgjgHIACmQIgCGQIgiAFQghADAEgLQAEgMAMgRIALgOQgwjggEiCIBaAAIBaAAQgEDDg1ClIAPAQQAQASACAJQABAGgOAAQgHAAgNgCg");
	this.shape_1.setTransform(21.5,87.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(120));

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

	// machine
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E6501E").ss(4,0,0,3).p("Aqg1BIVBAAQAuAAAAAuMAAAAgVQAAAuguAAI1BAAQguAAAAguMAAAggVQAAguAuAAgAlGO6IPnAAQAuAAAAAuIAAEsQAAAuguAAIvnAAIlaAAQguAAAAguIAAksQAAguAuAAg");
	this.shape_2.setTransform(84.4,173.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E6501E").ss(4,1,1).p("AmEbbIoFAAMAAAg2HQAAgXAMgMIALgIQACgDAHAAIbFAAQAXAAALALQAMAMAAAXMAAAAoLIAANOQAAAXgLAMIgBABQgLAKgXAAgAMNmhQAUAAAPAUQAPAUAAAdIAAC1QAAAdgPAUQgPAVgUAAQgVAAgPgVQgOgUAAgdIAAi1QAAgdAOgUQAPgUAVAAg");
	this.shape_3.setTransform(90.6,175.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmEbbIAAmqIAAmIIPnAAQAugBAAAvIAAEsQAAAuguAAIvnAAIPnAAQAuAAAAguIAAksQAAgvguABIvnAAIAAhLIUNAAI0NAAIAABLIlaAAQgugBAAAvIAAEsQAAAuAuAAIFaAAIAAGqIoFAAMAAAg2HQAAgXAMgLIALgJQADgDAGAAIbEAAQAYAAALAMQALALAAAXMAAAAoKIAANPQAAAXgKALIgBABQgLALgYAAgAsMLxQAAAuAuAAIVBAAQAuAAAAguMAAAggWQAAgtgugBI1BAAIVBAAQAuABAAAtMAAAAgWQAAAuguAAI1BAAQguAAAAguMAAAggWQAAgtAugBQguABAAAtMAAAAgWgALbinQAAAdAOATQAPAWAUAAQAVAAAOgWQAPgTABgdIAAi1QgBgcgPgWQgOgTgVgBQAVABAOATQAPAWABAcIAAC1QgBAdgPATQgOAWgVAAQgUAAgPgWQgOgTAAgdIAAi1QAAgcAOgWQAPgTAUgBQgUABgPATQgOAWAAAcIAAC1gAmEUxgAreUxQguAAAAguIAAksQAAgvAuABIFaAAIAAGIgAmEOpg");
	this.shape_4.setTransform(90.6,175.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(50));

	// cadre
	this.instance_3 = new lib.cadre();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160.6,176,0.05,1,0,0,0,0,175.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(1).to({regX:309.1,scaleX:0.5,x:314.8},0).wait(1).to({scaleX:0.64,x:359.3},0).wait(1).to({scaleX:0.74,x:388.3},0).wait(1).to({scaleX:0.8,x:409.2},0).wait(1).to({scaleX:0.86,x:425},0).wait(1).to({scaleX:0.9,x:437.2},0).wait(1).to({scaleX:0.93,x:446.6},0).wait(1).to({scaleX:0.95,x:453.8},0).wait(1).to({scaleX:0.97,x:459.3},0).wait(1).to({scaleX:0.98,x:463.4},0).wait(1).to({scaleX:0.99,x:466.2},0).wait(1).to({scaleX:1,x:468.1},0).wait(1).to({scaleX:1,x:469.2},0).wait(1).to({scaleX:1,x:469.6},0).wait(1).to({regX:0,x:160.6},0).wait(21));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(550));

	// effect
	this.instance_1 = new lib.line_anime("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(508.6,146.3,1,1,0,0,0,0,128.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).to({_off:true},24).wait(392).to({_off:false,regX:0.1,scaleX:0.8,scaleY:0.8,x:498.6,y:-101.7},0).to({_off:true},24).wait(22));

	// bfc
	this.instance_2 = new lib.bfc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(487.8,-88,1,1,0,0,0,13.4,13.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(518).to({_off:false},0).wait(10).to({x:456.8,y:111},16).to({_off:true},1).wait(5));

	// bfc
	this.instance_3 = new lib.bfc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(509.4,148.1,1,1,0,0,0,13.4,13.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(128).to({_off:false},0).wait(1).to({regX:9.2,regY:13.3,x:505.2,y:147.2},0).wait(1).to({y:144.6},0).wait(1).to({y:140.1},0).wait(1).to({y:133.2},0).wait(1).to({y:123.6},0).wait(1).to({y:111.2},0).wait(1).to({y:95.6},0).wait(1).to({y:77},0).wait(1).to({y:55.7},0).wait(1).to({y:33},0).wait(1).to({y:10.3},0).wait(1).to({y:-10.9},0).wait(1).to({y:-29.6},0).wait(1).to({y:-45.1},0).wait(1).to({y:-57.6},0).wait(1).to({y:-67.1},0).wait(1).to({y:-74},0).wait(1).to({y:-78.6},0).wait(1).to({y:-81.1},0).wait(1).to({regX:13.4,regY:13.4,x:509.4,y:-81.9},0).wait(351).to({scaleX:2,scaleY:2,y:-101.8},10).wait(9).to({scaleX:1,scaleY:1,x:516.4,y:-108.9},0).wait(10).to({x:655.4,y:181.1},16).to({_off:true},1).wait(5));

	// SC
	this.instance_4 = new lib.SC("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(508,151.5,0.1,0.1,0,0,0,36.5,40);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(88).to({_off:false},0).wait(1).to({regX:36.4,regY:68,scaleX:0.68,scaleY:0.68,rotation:78.4,x:489.4,y:155.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:200.3,x:516.2,y:129.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:270,x:534.1,y:151.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:312.9,x:528.2,y:170.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:338.8,x:518.3,y:178.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:352.9,x:511.5,y:180.4},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:358.9,x:508.4,y:180.8},0).wait(1).to({regX:36.1,regY:39.5,scaleX:1.05,scaleY:1.05,rotation:360,x:508.1,y:151.5},0).to({regX:36,scaleX:0.98,scaleY:0.98,x:508},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4).wait(14).to({startPosition:0},0).wait(1).to({regX:36.4,regY:68,x:508.4,y:179.4},0).wait(1).to({y:177.5},0).wait(1).to({y:174.1},0).wait(1).to({y:168.9},0).wait(1).to({y:161.8},0).wait(1).to({y:152.5},0).wait(1).to({y:140.8},0).wait(1).to({y:126.9},0).wait(1).to({y:111},0).wait(1).to({y:94},0).wait(1).to({y:77},0).wait(1).to({y:61.2},0).wait(1).to({y:47.2},0).wait(1).to({y:35.6},0).wait(1).to({y:26.3},0).wait(1).to({y:19.1},0).wait(1).to({y:14},0).wait(1).to({y:10.6},0).wait(1).to({y:8.6},0).wait(1).to({regX:36,regY:39.5,x:508,y:-20.5},0).wait(5).to({mode:"synched",loop:false},0).wait(29).to({mode:"single",startPosition:29},0).wait(27).to({mode:"synched",loop:false},0).wait(19).to({mode:"single",startPosition:48},0).wait(31).to({mode:"synched",loop:false},0).wait(20).to({mode:"single",startPosition:68},0).wait(15).to({mode:"synched",loop:false},0).wait(21).to({mode:"single",startPosition:89},0).wait(24).to({mode:"synched",loop:false},0).wait(19).to({mode:"single",startPosition:108},0).wait(41).to({mode:"synched",loop:false},0).wait(21).to({mode:"single",startPosition:129},0).wait(49).to({mode:"synched",loop:false},0).wait(19).to({mode:"single",startPosition:148},0).wait(72));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},374).wait(176));

	// meal
	this.instance_5 = new lib.meal();
	this.instance_5.parent = this;
	this.instance_5.setTransform(564.1,252.7,0.1,0.1,0,0,0,45.5,20);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(279).to({_off:false},0).wait(1).to({regY:5.8,scaleX:0.82,scaleY:0.82,y:241},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:238.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:237.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:237.2},0).wait(1).to({regY:20,scaleX:1.1,scaleY:1.1,y:252.7},0).to({regX:45.6,scaleX:0.95,scaleY:0.95,x:564.2},3,cjs.Ease.get(-1)).to({regX:45.5,scaleX:1,scaleY:1,x:564.1},3).wait(34).to({y:202.7},7,cjs.Ease.get(1)).to({y:272.7},8,cjs.Ease.get(-1)).wait(21).to({regY:5.8,x:558.5,y:258.5},0).wait(1).to({x:536.6},0).wait(1).to({x:497.7},0).wait(1).to({x:458.4},0).wait(1).to({x:428},0).wait(1).to({x:405.3},0).wait(1).to({x:388.3},0).wait(1).to({x:375.4},0).wait(1).to({x:365.5},0).wait(1).to({x:358},0).wait(1).to({x:352.5},0).wait(1).to({x:348.6},0).wait(1).to({x:346},0).wait(1).to({x:344.6},0).wait(1).to({regY:20,x:344.1,y:272.7},0).to({x:226.1,y:308.7},10,cjs.Ease.get(-1)).wait(166));

	// boy
	this.instance_6 = new lib.boy_01("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(786.2,288.6,1,1,0,0,0,26.5,88.4);
	this.instance_6.alpha = 0.102;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(330).to({_off:false},0).wait(1).to({regX:57.6,regY:72,x:742.1,y:272.2,alpha:0.584},0).wait(1).to({x:719.4,alpha:0.73},0).wait(1).to({x:705.3,alpha:0.82},0).wait(1).to({x:695.7,alpha:0.881},0).wait(1).to({x:689,alpha:0.925},0).wait(1).to({x:684.3,alpha:0.955},0).wait(1).to({x:681,alpha:0.976},0).wait(1).to({x:679,alpha:0.989},0).wait(1).to({x:677.8,alpha:0.996},0).wait(1).to({x:677.3,alpha:0.999},0).wait(1).to({regX:26.5,regY:88.4,x:646.2,y:288.6,alpha:1},0).wait(18).to({startPosition:0},0).wait(1).to({regX:57.6,regY:72,x:671.6,y:272.2},0).wait(1).to({x:649.8},0).wait(1).to({x:610.9},0).wait(1).to({x:571.6},0).wait(1).to({x:541.1},0).wait(1).to({x:518.5},0).wait(1).to({x:501.5},0).wait(1).to({x:488.5},0).wait(1).to({x:478.7},0).wait(1).to({x:471.2},0).wait(1).to({x:465.7},0).wait(1).to({x:461.7},0).wait(1).to({x:459.1},0).wait(1).to({x:457.7},0).wait(1).to({regX:26.5,regY:88.4,x:426.2,y:288.6},0).wait(45).to({startPosition:0},0).wait(1).to({regX:57.6,regY:72,x:457.5,y:272.2},0).wait(1).to({x:459},0).wait(1).to({x:462.4},0).wait(1).to({x:468.5},0).wait(1).to({x:478.2},0).wait(1).to({x:492.7},0).wait(1).to({x:514},0).wait(1).to({x:546},0).wait(1).to({x:598.7},0).wait(1).to({regX:26.5,regY:88.4,x:746.2,y:288.6},0).to({_off:true},1).wait(69).to({_off:false,x:651.1,y:277.8},0).wait(51));

	// talk
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B3F80").s().p("AAZBWIgjhGIgbAcIAAAqIg1AAIAAirIA1AAIAABBIA2hBIBHAAIg/BBIBCBqg");
	this.shape_3.setTransform(556,127.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B3F80").s().p("AgtBPQgUgJgMgUQgLgUAAgeQAAgpAYgYQAXgXApAAQArAAAWAXQAYAXAAAqQAAAdgKATQgKATgTALQgUALgdAAQgcAAgSgKgAgagkQgJALAAAZQAAAaAJAMQAKALAQAAQARAAAJgLQAKgLAAgcQAAgYgKgMQgJgLgRAAQgPAAgLAMg");
	this.shape_4.setTransform(535.1,127.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4B3F80").ss(4,1,1).p("AFFAAQAAA1geBfQCHCugFADQgEADjHhGQgTAdgsAeQhXA6h5AAQicAAhuhuQhthtAAicQAAiaBthvQBuhtCcAAQCaAABuBtQBuBvAACag");
	this.shape_5.setTransform(550.1,127.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkJEJQhthuAAibQAAibBthtQBvhuCaAAQCbAABuBuQBuBtAACbQAAA1geBfIhIBuQgUAdgrAeQhYA6h6AAQiaAAhvhug");
	this.shape_6.setTransform(545.1,127.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},249).to({state:[]},20).wait(281));

	// chief
	this.instance_7 = new lib.cook_01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(823.6,288,1,1,0,0,0,59,223.3);
	this.instance_7.alpha = 0.102;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(214).to({_off:false},0).wait(1).to({regY:111.6,scaleY:1,skewX:-1.7,x:725.4,y:176.2,alpha:0.603},0).wait(1).to({skewX:-2.2,x:696.4,alpha:0.751},0).wait(1).to({skewX:-2.5,x:678.8,alpha:0.841},0).wait(1).to({skewX:-2.7,x:667.1,alpha:0.901},0).wait(1).to({skewX:-2.9,x:659.1,alpha:0.941},0).wait(1).to({skewX:-3,x:653.8,alpha:0.968},0).wait(1).to({x:650.4,alpha:0.986},0).wait(1).to({skewX:-3.1,x:648.5,alpha:0.995},0).wait(1).to({x:647.7,alpha:0.999},0).wait(1).to({regY:223.3,x:653.6,y:288,alpha:1},0).to({regX:59.1,scaleY:1,skewX:1.8,x:653.8},5,cjs.Ease.get(-1)).to({regX:59,skewX:0,x:653.6},5).wait(90).to({x:713.6,alpha:0},7).to({_off:true},1).wait(167).to({_off:false,x:460.6,y:334,alpha:1},0).wait(51));

	// gear
	this.instance_8 = new lib.Machine("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(197.3,175.5,1,1,0,0,0,90.5,175.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({mode:"synched",loop:false},0).wait(48).to({mode:"single",startPosition:48},0).wait(51).to({startPosition:49},0).wait(422));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76,-2,900.3,377.7);


// stage content:
(lib.Anime_long = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Explain("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(182.5,410.6,1,1,0,0,0,237.3,186.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(550));

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