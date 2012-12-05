var MenuLayer = cc.Layer.extend({   
    ctor:function() {
      this.setTouchEnabled(true);
      this.setKeyboardEnabled(true);
      var size = cc.Director.getInstance().getWinSize();   	
      var sprite= cc.Sprite.create("./images/meme_invasion_principal.jpg");
      sprite.setPosition(cc.p(size.width / 2, size.height / 2));
      this.addChild(sprite);
      
      var itemJogar = cc.MenuItemImage.create(img_botao_jogar, img_botao_jogar, this, this.iniciarJogo);
      var menuJogar = cc.Menu.create(itemJogar);

      menuJogar.setPosition( cc.p(size.width / 2, 70 ) );
      this.addChild(menuJogar);
    },

    iniciarJogo:function() {
        cc.Director.getInstance().replaceScene(cc.TransitionFade.create(0.5,new MemeInvasionScene()));
    }
});

MenuScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var layer = new MenuLayer();
		layer.init();
		this.addChild(layer);
	}
});