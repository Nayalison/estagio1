var MemeInvasion = cc.Layer.extend({
	 _personagem:null,
	 _inimigoScene:null,
	 _gameControl:null,
     _placar:null,
    init:function(){
        this._super();
        this._gameControl = GameControl.getInstance();
        var size = cc.Director.getInstance().getWinSize();


        //this.initWithColor(new cc.Color4B(100,100,100,100));
        this._sprite = cc.Sprite.create(img_background_jogo);
        this._sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(this._sprite);


       
		
        this._personagem = new Personagem();
        this._personagem.init();
        this.setTouchEnabled(true);
        this.setKeyboardEnabled(true);

        this.setPosition(new cc.Point(0,0));

        this.addChild(this._personagem,1,0);
        this._personagem.setPosition(new cc.Point(70,size.height/2));
        this._personagem.scheduleUpdate();
		
		_inimigoScene = new InimigoScene();
		_inimigoScene.init();
     
        this._placar = cc.LabelTTF.create("0", "Helvetica", 32);
        this._placar.setColor({r:0,g:0,b:0});
        this._placar.setPosition(cc.p(310,580));
        this.addChild(this._placar);

        this.schedule(this.update);
       
        SoundControl.getInstance().playBackgroundMusic();


        return true;
    },
    onEnter:function(){
        this._super();
    },
    atualizarPlacar:function(){
        var label = "";
        label = "Pontos: " + this._gameControl.getPoints() + "  Fase:"+ this._gameControl.getFaseNumber()+
                "  Vidas: "+this._gameControl.getVidas() + "  Munição: " + this._gameControl.getMunicao();
        this._placar.setString(label);
    },
    update:function(dt){
        ConteinerControl.getInstance().testCollision();
        this.atualizarPlacar();

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
    },
    onKeyDown:function(e){
       this.handleKey(e);
       this._personagem.handleKey(e);
        if(e === cc.KEY.p) {
            GameControl.getCurrentInstance().pausePlay();
        }
    },
    handleKey:function(e) { 

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