var Poder = cc.Sprite.extend({
    _conteiner : null,
    ctor:function(conteiner) {
	this._conteiner = conteiner;
        this.initWithFile("./images/bola_fogo_small.gif");
		
        this.schedule(function() {
                //this.coordY += 10;
                var position = new cc.Point(this.getPosition().x + 10, this.getPosition().y);
                this.setPosition(this.validatePosition(position));
            });
        
        return true;
    },
    validatePosition:function(position) {
        if(position.x  > 830) {
			 //position = new cc.Point(830, position.y);
			 this._conteiner.removeChild(this);
		 }
		 return position;
    }
});
