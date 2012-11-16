var VitoriaScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var size = cc.Director.getInstance().getWinSize();
		var lazyLayer = new cc.Layer.create();
		this.addChild(lazyLayer);
		var backgroundSprite = cc.Sprite.create("./images/meme_fred_mercury.gif");

		backgroundSprite.setPosition(cc.p(size.weight/2,size.height/2));
		lazyLayer.addChild(backgroundSprite, 0);
	}
})

