var ConteinerControl =  function() {
    this.self = this;
	this._conteiner = null;

    this.setConteiner = function(conteiner) {
        this._conteiner = conteiner;
    };

    this.addChild = function(child) {
        this._conteiner.addChild(child);
    };

    this.removeChild = function(child) {
        this._conteiner.removeChild(child);
        child.cleanup();
        delete child;
    };

    this.testComponentCollision = function( component, componentTypeCollision) {
        var child = null;
        for(var i = 0; i < this._conteiner.getChildren().length; i++) {
          child = this._conteiner.getChildren()[i];
          if(child instanceof componentTypeCollision) {
            if( CollisionControl.getInstance().testCollision(child,component)) {
                child.afterCollision();
                this.removeChild(child);
                component.afterCollision();
                this.removeChild(component);
            }
          } 
        }
    };

    this.testCollision = function() {
        var child = null;
        if(this._conteiner == null) {
            return;
        }

        for(var i = 0; i < this._conteiner.getChildren().length; i++) {
          child = this._conteiner.getChildren()[i];
          
          if(child instanceof Poder) {
            this.testComponentCollision(child, Inimigo);
          }

          if(child instanceof Personagem) {
            this.testComponentCollision(child, Inimigo);
          } 
        }
    }
};

var conteinerControl = new ConteinerControl();

ConteinerControl.getInstance = function() {
	return conteinerControl;
};