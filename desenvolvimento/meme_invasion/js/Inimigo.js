var Inimigo = cc.Sprite.extend({
    _conteiner : null,
	_control:null,
    ctor:function(conteiner,control) {
		this._conteiner = conteiner;
		this._control = control;
        this.initWithFile("./images/troll_face_completo.jpg");
		
        this.schedule(function() {
                var position = new cc.Point(this.getPosition().x - 5, this.getPosition().y);
                this.setPosition(this.validatePosition(position));
                this.process();
            });
        
        return true;
    },

    pontuar:function() {
    	this._control.marcarPonto();
    },
    process:function() {
			if(!this.isAlive()) {
				this._conteiner.removeChild(this);
				this.cleanup();
			}
	},
	
    validatePosition:function(position) {
        if(position.x  < -70) {
			 position = new cc.Point(-70, position.y);
		 }
		 return position;
    },
    
    isAlive:function() {
		var child = null;
		for(var i = 0; i < this._conteiner.getChildren().length; i++) {
		  child = this._conteiner.getChildren()[i];
		  if(this.getPosition().x <= -70) {
				return false;
			}
			
		  if(child instanceof Poder) {
			if(this.testCollisionX(child.getPosition(), this.getPosition()) && 
				this.testCollisionY(child.getPosition(), this.getPosition())) {
				this._conteiner.removeChild(child);
				this.pontuar();
			  return false; 
			}
		  }
		  
		}
		return true;
    },
	
	testCollisionX:function(position, inimigoPosition) {
		if(inimigoPosition.x-31 <=position.x-10 && position.x+10 <=inimigoPosition.x+31) {
			return true;
		}
		return false;
	},
	
	testCollisionY:function(position, inimigoPosition) {
		if(inimigoPosition.y-62 <=position.y-10 && position.y+10 <=inimigoPosition.y+62) {
			return true;
		}
		return false;
	}
});

var InimigoScene = (function(){
	var conteiner = null;
	var limiteInferior = 100;
	var limiteSuperior = 1000;
	var control = null;
	
	this.setConteiner = function(conteiner) {
		this.conteiner = conteiner;
	};
	
	this.setControl = function(control) {
		this.control = control;
	}
	
	//TODO refatorar
	this.init = function() {
		var teste = this.conteiner;
		var control = this.control;
		//var controle = this.control;
		setInterval(function() {
			var count = gerarNumero(1,3);
				for(i=1; i<= count; i++) {
					var inimigo = criarInimigo(teste,control);
					teste.addChild(inimigo);
				}
			}, gerarNumero(limiteInferior,limiteSuperior));		
	};

	var getConteiner = function() {
		return this.conteiner;
	};
	
	var criarInimigo = function(conteiner, control) {
		inimigo = new Inimigo(conteiner, control);
		inimigo.setPosition(new cc.Point(800, gerarNumero(63, 500)));
		return inimigo;
	};
	
	var gerarNumero = function (limiteInferior,limiteSuperior){
		numPossibilidades = limiteSuperior - limiteInferior;
		aleat = Math.random() * numPossibilidades;
		aleat = Math.floor(aleat);
		result = parseInt(limiteInferior) + aleat;
		if(result < 0) {
			result = 0;
		} 
		return result;
	};
	
});
