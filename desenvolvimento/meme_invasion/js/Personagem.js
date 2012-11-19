var Personagem = cc.Sprite.extend({
    _currentPosition:0,
	_limiteInferior:0,
    _limiteSuperior:0,
    _size:null,
    _sizePlacar:32,
    ctor:function() {
        this.initWithFile("./images/inimigo2.gif");
        this._size = cc.Director.getInstance().getWinSize();
        this._limiteInferior = this.getTextureRect().size.height/2;
        this._limiteSuperior = this._size.height - this.getTextureRect().size.height/2 - this._sizePlacar;
    },
    
    update:function(dt) {
		this.setPosition(new cc.Point(50, this._currentPosition));
    },
    
    handleKey:function(e) {
        if(e === cc.KEY.up) {
            this._currentPosition = this._currentPosition + 10;
        }
        else if(e === cc.KEY.down) {
            this._currentPosition = this._currentPosition - 10;
		}
		this.validatePosition();
    },
    
    handleTouch:function(touchLocation) {	
		this._currentPosition = touchLocation.y;
		this.validatePosition();
    },
	
	validatePosition:function() {
        this.getTextureRect();
		if(this._currentPosition < this._limiteInferior) this._currentPosition = this._limiteInferior;
        if(this._currentPosition > this._limiteSuperior) this._currentPosition = this._limiteSuperior;
	},
	
    handleTouchMove:function(touchLocation) {
		this._currentPosition = touchLocation.y;
		this.validatePosition();
    }
});
