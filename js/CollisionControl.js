var CollisionControl = (function() {
    var instance;

    function init(){

        return {
            testCollisionX : function(sprite1, sprite2) {
                var rec1 = sprite1.getTextureRect();
                var rec2 = sprite2.getTextureRect();
                if( (sprite1.getPosition().x + rec1.size.width/2) < (sprite2.getPosition().x - rec2.size.width/2) || 
                    (sprite1.getPosition().x - rec1.size.width/2) > (sprite2.getPosition().x + rec2.size.width/2) ) {
                    return false;
                }
                return true;
            },
            
            testCollisionY : function(sprite1, sprite2) {
                var rec1 = sprite1.getTextureRect();
                var rec2 = sprite2.getTextureRect();
                if( (sprite1.getPosition().y + rec1.size.height/2) < (sprite2.getPosition().y - rec2.size.height/2) || 
                    (sprite1.getPosition().y - rec1.size.height/2) > (sprite2.getPosition().y + rec2.size.height/2) ) {
                    return false;
                }
                return true;
            },

            testCollision : function(sprite1, sprite2) {
                if(this.testCollisionX(sprite1,sprite2) && this.testCollisionY(sprite1,sprite2)) {
                    return true;
                }
                return false;
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