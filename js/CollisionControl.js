var CollisionControl =  function() {
	
	var testCollisionX = function(sprite1, sprite2) {
        var rec1 = sprite1.getTextureRect();
        var rec2 = sprite2.getTextureRect();
        if( (sprite1.getPosition().x + rec1.size.width/2) < (sprite2.getPosition().x - rec2.size.width/2) || 
            (sprite1.getPosition().x - rec1.size.width/2) > (sprite2.getPosition().x + rec2.size.width/2) ) {
            return false;
        }
        return true;
    };
    
    var testCollisionY = function(sprite1, sprite2) {
        var rec1 = sprite1.getTextureRect();
        var rec2 = sprite2.getTextureRect();
        if( (sprite1.getPosition().y + rec1.size.height/2) < (sprite2.getPosition().y - rec2.size.height/2) || 
            (sprite1.getPosition().y - rec1.size.height/2) > (sprite2.getPosition().y + rec2.size.height/2) ) {
            return false;
        }
        return true;
    };

    this.testCollision = function(sprite1, sprite2) {
        if(testCollisionX(sprite1,sprite2) && testCollisionY(sprite1,sprite2)) {
            return true;
        }
        return false;
    };

};

var collisionControl = new CollisionControl();

CollisionControl.getInstance = function() {
	return collisionControl;
};