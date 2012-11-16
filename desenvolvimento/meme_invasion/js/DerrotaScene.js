var DerrotaScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var lazyLayer = new cc.Layer.create();
		var size = cc.Director.getInstance().getWinSize();
		this.addChild(lazyLayer);
		var backgroundSprite = cc.Sprite.create("./images/meme_fuu.jpg");
		backgroundSprite.setPosition(cc.p(size.weight/2,size.height/2));
		lazyLayer.addChild(backgroundSprite, 0);
	}
})

