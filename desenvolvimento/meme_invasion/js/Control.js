var Control =  (function(){
	var FATOR_PONTOS = 100;
	var NIVEIS_DIFICULDADES = [1, 1.5, 2, 2.5];
	var fase_number = 1;
	var points = 0;
	
	this.marcarPonto = function() {
		points++;
		this.verificarPontuacao();
	};
	
	this.verificarPontuacao = function() {
		var maxPontos = this.FATOR_PONTOS * NIVEIS_DIFICULDADES[ fase_number - 1 ];
		if( points >= maxPontos) {
			fase_number++;
			points = 0;
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
	
});