var DerrotaScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var lazyLayer = new cc.Layer.create();
		this.addChild(lazyLayer);
		var backgroundSprite = cc.Sprite.create("./images/meme_fuu.jpg");
		backgroundSprite.setPosition(cc.p(450,250));
		lazyLayer.addChild(backgroundSprite, 0);
	}
})

