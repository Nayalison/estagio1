var Poder = cc.Sprite.extend({
    _size:null,
    ctor:function() {
		this.initWithFile("./images/bala.gif");
         this._size = cc.Director.getInstance().getWinSize();
        this.schedule(function() {
                var position = new cc.Point(this.getPosition().x + 10, this.getPosition().y);
                this.setPosition(position);
                this.process();
            });
        
        return true;
    },
    process:function() {
        if(this.getPosition().x  > this._size.weight + 2 * this.getTextureRect().size.width ) {
			 ConteinerControl.getInstance.removeChild(this);
		 }
    },
    afterCollision:function() {
        GameControl.getCurrentInstance().marcarPonto();
    }
});
