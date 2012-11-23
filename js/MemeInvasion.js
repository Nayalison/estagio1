var MemeInvasion = cc.LayerColor.extend({
	 _eventControl:null,
	 _inimigoScene:null,
	 _control:null,
    init:function(){
        this._super();
        this.initWithColor(new cc.Color4B(0,0,0,0));
        var size = cc.Director.getInstance().getWinSize();
		
		this._control = new Control();
		
        this._eventControl = new EventControl();
        this.setTouchEnabled(true);
        this.setKeyboardEnabled(true);

        this.setPosition(new cc.Point(0,0));

        this.addChild(this._eventControl);
        this._eventControl.setPosition(new cc.Point(0,size.height/2));
        this._eventControl.scheduleUpdate();
        this.schedule(this.update);
		
		_inimigoScene = new InimigoScene();
		_inimigoScene.setControl(this._control);
		_inimigoScene.setConteiner(this);
		_inimigoScene.init();
		
		

        return true;
    },
    onEnter:function(){
        this._super();
    },
    update:function(dt){
    },
    onTouchesEnded:function (pTouch,pEvent){
        this._eventControl.handleTouch(pTouch[0].getLocation());
    },
    onTouchesMoved:function(pTouch,pEvent){
        this._eventControl.handleTouchMove(pTouch[0].getLocation());
    },
    onKeyUp:function(e){
        this.handleKey(e);
		this._eventControl.handleKey(e);
    },
    onKeyDown:function(e){
       this.handleKey(e);
       this._eventControl.handleKey(e);
    },
    handleKey:function(e) {
       if(e === cc.KEY.enter) {
            var p = this._eventControl.getPosition();
            var poder = new Poder(this);
             poder.setPosition(p);
            this.addChild(poder);
        } 
    }
});

MemeInvasionScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new MemeInvasion();
        layer.init();
        this.addChild(layer);
    }
});
