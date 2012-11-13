var Personagem = cc.Sprite.extend({
    _currentPosition:0,
	// _size : cc.Director.getInstance().getWinSize(),
	_size : 600,
    ctor:function() {
        this.initWithFile("./images/inimigo2.gif");
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
		if(this._currentPosition < 0) this._currentPosition = 0;
        if(this._currentPosition > 600) this._currentPosition = 600;
	},
	
    handleTouchMove:function(touchLocation) {
		this._currentPosition = touchLocation.y;
		this.validatePosition();
    }
});
