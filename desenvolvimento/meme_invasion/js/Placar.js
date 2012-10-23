var Placar = cc.LabelAtlas.extend({
	_control:null,
	ctor:function(control) {
		this._control = control;
		this._super();

		var label1 = this.criarPlacar();
        this.setString({string: label1
                     ,itemWidth: 48
                     ,itemHeight: 64
                     ,startCharMap: ' ' });
        this.setPosition(new cc.Point(60, 80));
        this.opacity  = 200;
        return true;
    },

    criarPlacar:function() {
    	var label = "";
    	label = "Pontos: " + this._control.getPoints(); + "   Fase: "+ this._control.getFaseNumber();
        return label;
    },

    update:function(){
        this.setString({string: this.criarPlacar()
                     ,itemWidth: 48
                     ,itemHeight: 64
                     ,startCharMap: ' '});
    }
});
