(function(window) {
mc_llanta_instancia_1 = function() {
	this.initialize();
}
mc_llanta_instancia_1._SpriteSheet = new createjs.SpriteSheet({images: ["llanta.png"], frames: [[0,0,133,133,0,0,0],[133,0,133,133,0,0,0],[266,0,133,133,0,0,0],[399,0,133,133,0,0,0],[532,0,133,133,0,0,0],[665,0,133,133,0,0,0],[798,0,133,133,0,0,0],[0,133,133,133,0,0,0],[133,133,133,133,0,0,0],[266,133,133,133,0,0,0],[399,133,133,133,0,0,0],[532,133,133,133,0,0,0],[665,133,133,133,0,0,0],[798,133,133,133,0,0,0],[0,266,133,133,0,0,0],[133,266,133,133,0,0,0],[266,266,133,133,0,0,0],[399,266,133,133,0,0,0],[532,266,133,133,0,0,0],[665,266,133,133,0,0,0],[798,266,133,133,0,0,0],[0,399,133,133,0,0,0],[133,399,133,133,0,0,0],[266,399,133,133,0,0,0],[0,0,133,133,0,0,0]]});
var mc_llanta_instancia_1_p = mc_llanta_instancia_1.prototype = new createjs.Sprite();
mc_llanta_instancia_1_p.Sprite_initialize = mc_llanta_instancia_1_p.initialize;
mc_llanta_instancia_1_p.initialize = function() {
	this.Sprite_initialize(mc_llanta_instancia_1._SpriteSheet);
	this.paused = false;
}
window.mc_llanta_instancia_1 = mc_llanta_instancia_1;
}(window));

