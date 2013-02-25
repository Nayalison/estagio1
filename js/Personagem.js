var Personagem = cc.Sprite.extend({
    _currentPosition:0,
    _currentPositionX:70,
    _limite:{minX:70,  maxX:150, minY:0, maxY:320},
	_limiteInferior:0,
    _limiteSuperior:0,
    _size:null,
    _sizePlacar:32,
    _isFiring: false,

    ctor:function() {
        this.initWithFile(img_personagem);
    },

    init:function() {
        this._size = cc.Director.getInstance().getWinSize();
        this._limite.minY = this.getTextureRect().size.height/2;

        //this._limiteInferior = this.getTextureRect().size.height/2;
        //this._limiteSuperior = this._size.height - this.getTextureRect().size.height/2 - this._sizePlacar;
    },
    
    update:function(dt) {
		this.setPosition(new cc.Point(this._currentPositionX, this._currentPosition));
    },

    afterCollision:function() {
        GameControl.getInstance().gameOver();
    },
    
    handleKey:function(e) {
        if(e === cc.KEY.enter || e === cc.KEY.space) {
            this.atirar();
        }

        if(e === cc.KEY.up || e === cc.KEY.w) {
            this._currentPosition = this._currentPosition + 10;
            //this._currentPositionX = this._currentPositionX + 5;
        }
        else if(e === cc.KEY.down || e === cc.KEY.s) {
            this._currentPosition = this._currentPosition - 10;
          //  this._currentPositionX = this._currentPositionX - 5;
		}
		this.validatePosition();
    },
    
    handleTouch:function(touchLocation) {	
		this._currentPosition = touchLocation.y;
		this.validatePosition();
    },

    handleTouch:function(touchLocation,touchEvent) {   
        this._currentPosition = touchLocation.y;
        this.validatePosition();
    },
	
	validatePosition:function() {
        this.getTextureRect();
		if(this._currentPosition < this._limite.minY)  {
            this._currentPosition = this._limite.minY;
        } 
        if(this._currentPosition > this._limite.maxY) {
            this._currentPosition = this._limite.maxY;
        }

        if(this._currentPositionX < this._limite.minX)  {
            this._currentPositionX = this._limite.minX;
        } 
        if(this._currentPositionX > this._limite.maxX) {
            this._currentPositionX = this._limite.maxX;
        }

        
	},
	
    handleTouchMove:function(touchLocation) {
		this._currentPosition = touchLocation.y;
		this.validatePosition();
    },
    atirar:function() {
        if(!this._isFiring) {
            if(GameControl.getInstance().possuiMunicao()){
                var self = this;
                this._isFiring = true;
                setTimeout(function(){
                    self._isFiring = false; 
                    SoundControl.getInstance().pauseGunSound();
                    //self.setPosition(new cc.Point(self.getPosition().x-10, self.getPosition().y));       
                    self.setRotation(0);
                    self.initWithFile(img_personagem);
                },200);

                var psition = this.getPosition();
                var poder = new Poder();
                poder.setPosition(cc.p(psition.x + this.getTextureRect().size.width/2, psition.y));
                ConteinerControl.getInstance().addChild(poder);
                GameControl.getInstance().utilizarMunicao();
                SoundControl.getInstance().playGunSound();

                this.setRotation(-10);
                this.initWithFile(img_personagem_atirando);

                //this.setPosition(new cc.Point(this.getPosition().x+10, this.getPosition().y));

            } else {
                 GameControl.getInstance().recarregar();
            }  
        }
       
        
    }
    
});