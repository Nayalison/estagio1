var MemeInvasion = cc.LayerColor.extend({
	 _eventControl:null,
	 _inimigoScene:null,
	 _control:null,
     _placar:null,
     _possuiPoder: true,
    init:function(control){
        this._super();
        this.initWithColor(new cc.Color4B(100,100,100,100));
        var size = cc.Director.getInstance().getWinSize();
		
		this._control = control;
		
        this._eventControl = new EventControl();
        this.setTouchEnabled(true);
        this.setKeyboardEnabled(true);

        this.setPosition(new cc.Point(0,0));

        this.addChild(this._eventControl);
        this._eventControl.setPosition(new cc.Point(0,size.height/2));
        this._eventControl.scheduleUpdate();
		
		_inimigoScene = new InimigoScene();
		_inimigoScene.setControl(this._control);
		_inimigoScene.setConteiner(this);
		_inimigoScene.init();
     
        

        //initWithString([label1, cc.TextureCache.getInstance(),200, 70,' ']);

        this.schedule(this.update);
		

        return true;
    },
    onEnter:function(){
        this._super();
    },
    update:function(dt){
        

        //this._placar.update();
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
       if(e === cc.KEY.enter ) {
            var p = this._eventControl.getPosition();
            var poder = new Poder(this);
             poder.setPosition(p);
            this.addChild(poder);
        } 
    },
    recarregar:function() {
        this._possuiPoder = true;
    }
});

MemeInvasionScene = cc.Scene.extend({
    _control:null,
    _placar:null,
    onEnter:function(){
        this._super();
        this._control = new Control();
        var layer = new MemeInvasion();
        layer.init(this._control);
        this.addChild(layer);


        this._placar = new Placar(this._control);
        this._placar.position = new cc.Point(10, 200);
        this.addChild(this._placar);

    }
});
