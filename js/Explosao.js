var Explosao = cc.Sprite.extend({
    _timeToLive: 60, 
    ctor:function() {
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
        ConteinerControl.getInstance().removeChild(this);
    }
});
