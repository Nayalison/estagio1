var GameControl =  (function() {
	var instance;

	function init(){
		var FATOR_PONTOS = 30;
		var MAX_FASES = 6;
		var NIVEIS_DIFICULDADES = [1, 2, 4, 6, 8];
		var fase_number = 1;
		var vidas = 10;
		var points = 0;
		var municao = 30;
		var recarregando = false;

		return {
			resetValues : function(){
				this.FATOR_PONTOS = 30;
				this.MAX_FASES = 6;
				this.NIVEIS_DIFICULDADES = [1, 2, 4, 6, 8];
				this.fase_number = 1;
				this.vidas = 10;
				this.points = 0;
				this.municao = 30;
				this.recarregando = false;
			},

			marcarPonto : function() {
				this.points++;
				this.verificarPontuacao();
			},

			perderVida : function() {
				if(this.vidas > 0) {
					this.vidas--;
				}
			}, 
			
			verificarPontuacao : function() {
				var maxPontos = this.FATOR_PONTOS * this.NIVEIS_DIFICULDADES[ this.fase_number - 1 ];
				if( this.points >= maxPontos) {
					this.fase_number++;
					this.points = 0;
				}
			},
			
			getPoints : function() {
				return this.points;
			},
			
			getVidas : function() {
				return this.vidas;
			},

			getFaseNumber : function() {
				return this.fase_number;
			},
			
			getNumeroInimigosFase : function() {
				return this.fase_number;
			},

			getVelocidadeInimigo : function() {
				return this.fase_number;
			},

			gameOver : function(){
				this.vidas = 0;
			},

			pausePlay : function() {
				if( cc.Director.getInstance().isPaused() ){
		            cc.Director.getInstance().resume();
		        } else {
		            cc.Director.getInstance().pause();
		        }
			},

			isVitoria : function() {
				if( this.MAX_FASES <= this.fase_number ) {
					return true;
				} else {
					return false;
				}
			},

			isDerrota : function() {
				if(this.vidas <= 0) {
					return true;
				} else {
					return false;
				}
			},

			getMunicao : function() {
		        return this.municao;
		    },

		    utilizarMunicao : function() {
		        this.municao--;
		    },

			possuiMunicao : function() {
		        if(this.municao > 0) {
		            return true;
		        }
		        return false;
		    },

		    recarregarMunicao : function(municao) {
		        this.municao += municao;
		        this.recarregando = false;
		    },

		    recarregar : function() {
		    	if(!this.recarregando) {
		    		this.recarregando = true;
		    		var self  = this;
			        setTimeout(function(){
			            self.recarregarMunicao(30);
			        }, 500);
		    	}
		    }

		};

	};

	return {
		getInstance : function(){
			if(!instance){
				instance = init();
			}
			return instance;
		}

	};	
	
})();