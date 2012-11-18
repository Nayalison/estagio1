var Explosao = cc.Sprite.extend({
    _conteiner : null,
    _timeToLive: 10, 
    ctor:function(conteiner) {
	this._conteiner = conteiner;
        this.initWithFile("./images/Explosao.gif");
		
        this.schedule(function() {
                this._timeToLive--;
                if(this._timeToLive < 0) {
                    this._timeToLive = 0;
                }
                if(!this.isAlive()) {
                    this.destroy();
                }
            });
        
        return true;
    },
    isAlive:function() {
        if(this._timeToLive == 0) {
            return false;
        } else {
            return true;
        }
    },
    destroy:function() {
        this._conteiner.removeChild(this);
        delete this;
    }
});
