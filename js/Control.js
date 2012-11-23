var Control =  function(){
	this.FATOR_PONTOS = 10;
	this.NIVEIS_DIFICULDADES = [1, 1.5, 2, 2.5];
	this.fase_number = 1;
	this.points = 0;
	
	this.marcarPonto = function() {
		this.points++;
		this.verificarPontuacao();
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
	}
	
	this.getFaseNumber = function() {
		return this.fase_number;
	}
	
	this.getNumeroInimigosFase = function() {
		return this.fase_number;
	}
	
};