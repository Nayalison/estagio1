var countTipoInimigo = 0;
var Inimigo = cc.Sprite.extend({
    _size:null,
	_limiteX:0,
    ctor:function() {
		this.initWithFile(memes[countTipoInimigo]);
        this._size = cc.Director.getInstance().getWinSize();
        this._limiteX = -1 *  this.getTextureRect().size.width;
        
        countTipoInimigo++;
        if(countTipoInimigo > 4) {
        	countTipoInimigo = 0;
        }
		
        this.schedule(function() {
                var position = new cc.Point(this.getPosition().x - GameControl.getInstance().getVelocidadeInimigo(), this.getPosition().y);
                this.setPosition(this.validatePosition(position));
                this.process();
            });
        
        return true;
    },

	afterCollision:function() {
		this.explodir();
	},

	explodir:function() {
		var explosao = new Explosao();
		explosao.setPosition(this.getPosition());
		ConteinerControl.getInstance().addChild(explosao)
		SoundControl.getInstance().playExplosionSound();
	},
	
    validatePosition:function(position) {
        if(position.x  < this._limiteX) {
			 position = new cc.Point(this._limiteX, position.y);
		 }
		 return position;
    },

    process:function() {
    	if(this.getPosition().x <= this._limiteX) {
			GameControl.getInstance().perderVida();
			ConteinerControl.getInstance().removeChild(this);
		}
    }
});

var InimigoScene = (function(){
	var limiteInferior = 100;
	var limiteSuperior = 5000;	
	
	//TODO refatorar
	this.init = function() {
		setInterval(function() {
			var control = GameControl.getInstance();
			var count = gerarNumero(1,control.getNumeroInimigosFase);
				for(i=1; i<= control.getNumeroInimigosFase(); i++) {
					var inimigo = criarInimigo();
					ConteinerControl.getInstance().addChild(inimigo,0,0);
				}
			}, gerarNumero(limiteInferior,limiteSuperior));		
	};
	
	var criarInimigo = function() {
		inimigo = new Inimigo();
		inimigo.setPosition(new cc.Point(800, gerarNumero(63, 300)));
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