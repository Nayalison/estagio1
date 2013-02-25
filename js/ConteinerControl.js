var ConteinerControl =  (function() {
    var instance;


    function init(){
       var conteiner = null;

        return {
            setConteiner : function(conteiner) {
                this.conteiner = conteiner;
            },

            getConteiner : function() {
               return this.conteiner;
            },

            addChild : function(child) {
                this.conteiner.addChild(child);
            },

            removeChild : function(child) {
                this.conteiner.removeChild(child);
                child.cleanup();
                delete child;
            },

            testComponentCollision : function(component, componentTypeCollision, lista) {
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
            },

            testCollision : function() {
                var child = null;
                var lista = this.conteiner.getChildren();
                if(this.conteiner == null) {
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