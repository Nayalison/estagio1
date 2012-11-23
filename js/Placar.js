var Placar = cc.LabelAtlas.extend({
	_control:null,
	ctor:function(control) {
        this._super();
		this._control = control;
        var label1 = this.criarPlacar();
        //this.initWithString([label1, './images/tuffy_bold_italic-charmap.png',  48, 64, ' ']);
        this.initWithString([label1, './images/tuffy_bold_italic-charmap.png',  48, 64, ' ']);
        this.schedule(this.update);
        return true;
    },

    criarPlacar:function() {
    	var label = "";
    	label = "Pontos:" + this._control.getPoints() + "Fase:"+ this._control.getFaseNumber();
        return label;
    },

    update:function(){
        this.setString(this.criarPlacar());
    }
});
