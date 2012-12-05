var Placar = cc.LabelTTF.extend({
	_control:null,
	ctor:function() {
        cc.LabelTTF.create("0", "Helvetica", 32);
        this.schedule(this.update());
    },

    getPlacarLabel:function() {
    	var label = "";
    	label = "Pontos:" + GameControl.getCurrentInstance().getPoints() + 
                "Fase:"+ GameControl.getCurrentInstance().getFaseNumber();
        return label;
    },

    update:function(){
        this.setString(this.getPlacarLabel());
    }
});
