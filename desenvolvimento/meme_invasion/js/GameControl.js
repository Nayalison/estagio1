var GameControl =  function() {
	this.FATOR_PONTOS = 30;
	this.MAX_FASES = 6;
	this.NIVEIS_DIFICULDADES = [1, 2, 4, 6, 8];
	this.fase_number = 1;
	this.vidas = 10;
	this.points = 0;
	
	this.marcarPonto = function() {
		this.points++;
		this.verificarPontuacao();
	};

	this.perderVida = function() {
		if(this.vidas > 0) {
			this.vidas--;
		}
	}; 
	
	this.verificarPontuacao = function() {
		var maxPontos = this.FATOR_PONTOS * this.NIVEIS_DIFICULDADES[ this.fase_number - 1 ];
		if( this.points >= maxPontos) {
			this.fase_number++;
			this.points = 0;
		}
	};
	
	this.getPoints = function() {
		return this.points;
	};
	
	this.getVidas = function() {
		return this.vidas;
	};

	this.getFaseNumber = function() {
		return this.fase_number;
	};
	
	this.getNumeroInimigosFase = function() {
		return this.fase_number;
	};

	this.getVelocidadeInimigo = function() {
		return this.fase_number;
	};

	this.gameOver = function(){
		this.vidas = 0;
	};

	this.pausePlay = function() {
		if( cc.Director.getInstance().isPaused() ){
            cc.Director.getInstance().resume();
        } else {
            cc.Director.getInstance().pause();
        }
	};

	this.isVitoria = function() {
		if( this.MAX_FASES <= this.fase_number ) {
			return true;
		} else {
			return false;
		}
	};

	this.isDerrota = function() {
		if(this.vidas <= 0) {
			return true;
		} else {
			return false;
		}
	}
	
};

var gameControl = null;

GameControl.getInstance = function() {
	gameControl = new GameControl();
	return gameControl;
};

GameControl.getCurrentInstance = function() {
	return gameControl;
};