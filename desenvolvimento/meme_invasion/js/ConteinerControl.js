var count = 0;
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

    this.testComponentCollision = function( component, componentTypeCollision, lista) {
        var child = null;
        
        for(var i = 0; i < lista.length; i++) {
          child = lista[i];
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
        var lista = this._conteiner.getChildren();
        if(this._conteiner == null) {
            return;
        }

        for(var i = 0; i < lista.length; i++) {
          child = lista[i];
          
          if(child instanceof Poder) {
            this.testComponentCollision(child, Inimigo, lista);
          }

          if(child instanceof Personagem) {
            this.testComponentCollision(child, Inimigo, lista);
          } 
        }
    }
};

var conteinerControl = new ConteinerControl();

ConteinerControl.getInstance = function() {
	return conteinerControl;
};