var MenuVoltar = cc.Layer.extend({   
    ctor:function(){
       this.setTouchEnabled( true );    
        var label = cc.LabelTTF.create( "Jogar Novamente", "Helvetica", 32 );
        var menuitem = cc.MenuItemLabel.create( label, this, function() {
                cc.Director.getInstance().replaceScene(cc.TransitionFade.create(0.5,new MemeInvasionScene()));
        });

        var menu = cc.Menu.create(menuitem);

        menu.setPosition( cc.p( 400, 20 ) );
        this.addChild(menu);
    }
});

var VitoriaScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		SoundControl.getInstance().stopBackgroundMusic();
		var size = cc.Director.getInstance().getWinSize();
		var lazyLayer = new cc.Layer.create();
		this.addChild(lazyLayer);
		var backgroundSprite = cc.Sprite.create("./images/meme_fred_mercury.gif");

		backgroundSprite.setPosition(cc.p(size.weight/2,size.height/2));
		lazyLayer.addChild(backgroundSprite, 0);

		var menuVoltar = new MenuVoltar();
		lazyLayer.addChild(menuVoltar, 0);
	}
});