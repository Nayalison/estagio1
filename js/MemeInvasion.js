var MemeInvasion = cc.LayerColor.extend({
	 _personagem:null,
	 _inimigoScene:null,
	 _gameControl:null,
     _placar:null,
     _possuiPoder: true,
    init:function(){
        this._super();
        this._gameControl = GameControl.getInstance();
        this.initWithColor(new cc.Color4B(100,100,100,100));
       

        var size = cc.Director.getInstance().getWinSize();
        cc.AudioEngine.getInstance().setEffectsVolume(0.5);
		
		
		
        this._personagem = new Personagem();
        this.setTouchEnabled(true);
        this.setKeyboardEnabled(true);

        this.setPosition(new cc.Point(0,0));

        this.addChild(this._personagem,1,0);
        this._personagem.setPosition(new cc.Point(0,size.height/2));
        this._personagem.scheduleUpdate();
		
		_inimigoScene = new InimigoScene();
//		_inimigoScene.setControl(this._gameControl);
//		_inimigoScene.setConteiner(this);
		_inimigoScene.init();
     
        this._placar = cc.LabelTTF.create("0", "Helvetica", 32);
        this._placar.setColor({r:0,g:0,b:0});
        this._placar.setPosition(cc.p(300,580));
        this.addChild(this._placar);

        this.schedule(this.update);
       
        SoundControl.getInstance().playBackgroundMusic();


        return true;
    },
    onEnter:function(){
        this._super();
    },
    update:function(dt){
        ConteinerControl.getInstance().testCollision();
        var label = "";
        label = "Pontos:" + this._gameControl.getPoints() + "         Fase:"+ this._gameControl.getFaseNumber()+
                "        Vidas: "+this._gameControl.getVidas();
        this._placar.setString(label);

        if( this._gameControl.isVitoria() ) {
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(0.5,new VitoriaScene()));
        }

        if( this._gameControl.isDerrota() ) {
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(0.5,new DerrotaScene()));
        }
    },
    onTouchesEnded:function (pTouch,pEvent){
        this._personagem.handleTouch(pTouch[0].getLocation());
    },
    onTouchesMoved:function(pTouch,pEvent){
        this._personagem.handleTouchMove(pTouch[0].getLocation());
    },

    onTouchBegan:function(pTouch,pEvent){
        this._personagem.handleTouch(pTouch[0].getLocation(), pEvent);
    },
    onTouchEnded:function(pTouch,pEvent){
        this._personagem.handleTouch(pTouch[0].getLocation(), pEvent);
    },

    onKeyUp:function(e){
        this.handleKey(e);
		this._personagem.handleKey(e);
        if(e === cc.KEY.enter) {
            SoundControl.getInstance().pauseGunSound();
        }
    },
    onKeyDown:function(e){
       this.handleKey(e);
       this._personagem.handleKey(e);
        if(e === cc.KEY.p) {
            this.pause();
        }
        if(e === cc.KEY.enter) {
           SoundControl.getInstance().playGunSound();
        }
    },
    handleKey:function(e) {
       if(e === cc.KEY.enter ) {
            var p = this._personagem.getPosition();
            var poder = new Poder();
            poder.setPosition(cc.p(p.x + this._personagem.getTextureRect().size.width/2, p.y));
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
    _placar:null,
    onEnter:function(){
        this._super();
        var layer = new MemeInvasion();
        ConteinerControl.getInstance().setConteiner(layer);
        layer.init();
        this.addChild(layer);
    }
});