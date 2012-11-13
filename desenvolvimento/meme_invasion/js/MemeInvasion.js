var MemeInvasion = cc.LayerColor.extend({
	 _personagem:null,
	 _inimigoScene:null,
	 _control:null,
     _placar:null,
     _possuiPoder: true,
    init:function(control){
        this._super();
        this.initWithColor(new cc.Color4B(100,100,100,100));
        var size = cc.Director.getInstance().getWinSize();
		
		this._control = control;
		
        this._personagem = new Personagem();
        this.setTouchEnabled(true);
        this.setKeyboardEnabled(true);

        this.setPosition(new cc.Point(0,0));

        this.addChild(this._personagem);
        this._personagem.setPosition(new cc.Point(0,size.height/2));
        this._personagem.scheduleUpdate();
		
		_inimigoScene = new InimigoScene();
		_inimigoScene.setControl(this._control);
		_inimigoScene.setConteiner(this);
		_inimigoScene.init();
     
        this._placar = cc.LabelTTF.create("0", "Helvetica", 32);
        this._placar.setColor({r:0,g:0,b:0});
        this._placar.setPosition(cc.p(300,580));
        this.addChild(this._placar);

        this.schedule(this.update);

        return true;
    },
    onEnter:function(){
        this._super();
    },
    update:function(dt){
        var label = "";
        label = "Pontos:" + this._control.getPoints() + "         Fase:"+ this._control.getFaseNumber()+
                "        Vidas: "+this._control.getVidas();
        this._placar.setString(label);

        if( this._control.isVitoria() ) {
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(0.5,new VitoriaScene()));
        }

        if( this._control.isDerrota() ) {
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(0.5,new DerrotaScene()));
        }
    },
    onTouchesEnded:function (pTouch,pEvent){
        this._personagem.handleTouch(pTouch[0].getLocation());
    },
    onTouchesMoved:function(pTouch,pEvent){
        this._personagem.handleTouchMove(pTouch[0].getLocation());
    },
    onKeyUp:function(e){
        this.handleKey(e);
		this._personagem.handleKey(e);
    },
    onKeyDown:function(e){
       this.handleKey(e);
       this._personagem.handleKey(e);
        if(e === cc.KEY.p) {
            this.pause();
        }
    },
    handleKey:function(e) {
       if(e === cc.KEY.enter ) {
            var p = this._personagem.getPosition();
            var poder = new Poder(this);
             poder.setPosition(p);
            this.addChild(poder);
        } 

    },
    recarregar:function() {
        this._possuiPoder = true;
    },
    pause:function() {
        if( cc.Director.getInstance().isPaused() ){
            cc.Director.getInstance().resume();
        } else {
            cc.Director.getInstance().pause();
        }
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
    }
});
