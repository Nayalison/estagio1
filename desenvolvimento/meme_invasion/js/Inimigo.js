var countTipoInimigo = 0;
var Inimigo = cc.Sprite.extend({
    _size:null,
    _conteiner : null,
	_control:null,
	_limiteX:0,
	_memes: ["./images/memes/meme_lol.gif","./images/memes/meme_me_gusta.gif","./images/memes/meme_peter_paker.gif",
			"./images/memes/meme_troll_face.gif", "./images/memes/meme_y_u.gif"],
    ctor:function(conteiner,control) {
		this.initWithFile(this._memes[countTipoInimigo]);
		this._conteiner = conteiner;
		this._control = control;
        this._size = cc.Director.getInstance().getWinSize();
        this._limiteX = -1 *  this.getTextureRect().size.width;
        
        countTipoInimigo++;
        if(countTipoInimigo > 4) {
        	countTipoInimigo = 0;
        }
		
        this.schedule(function() {
                var position = new cc.Point(this.getPosition().x - this._control.getVelocidadeInimigo(), this.getPosition().y);
                this.setPosition(this.validatePosition(position));
                this.process();
            });
        
        return true;
    },

    pontuar:function() {
    	this._control.marcarPonto();
    },

    perderVida:function() {
    	this._control.perderVida();
    },

    process:function() {
			if(!this.isAlive()) {
				this._conteiner.removeChild(this);
				this.cleanup();
				this.explodir(this);
				delete this;
			}
	},

	explodir:function(inimigo) {
		var explosao = new Explosao(this._conteiner);
		explosao.setPosition(inimigo.getPosition());
		this._conteiner.addChild(explosao);
	},
	
    validatePosition:function(position) {
        if(position.x  < this._limiteX) {
			 position = new cc.Point(this._limiteX, position.y);
		 }
		 return position;
    },
    
    isAlive:function() {
		var child = null;
		for(var i = 0; i < this._conteiner.getChildren().length; i++) {
		  child = this._conteiner.getChildren()[i];
		  if(this.getPosition().x <= this._limiteX) {
		  		this.perderVida();
				return false;
			}
			
		  if(child instanceof Poder) {
			if(	CollisionControl.getInstance().testCollision(child,this)) {
				this._conteiner.removeChild(child);
				delete child;
				this.pontuar();
			  return false; 
			}
		  } 
		}
		return true;
    },
});

var InimigoScene = (function(){
	var conteiner = null;
	var limiteInferior = 100;
	var limiteSuperior = 5000;
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
			var count = gerarNumero(1,control.getNumeroInimigosFase);
				for(i=1; i<= control.getNumeroInimigosFase(); i++) {
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
