var CollisionControl =  function() {
	
	/*var testCollisionX = function(sprite1, sprite2) {
        if(inimigoPosition.x-31 <=position.x-10 && position.x+10 <=inimigoPosition.x+31) {
            return true;
        }
        return false;
    };
    
    var testCollisionY = function(sprite1, sprite2) {
        if(inimigoPosition.y-62 <=position.y-10 && position.y+10 <=inimigoPosition.y+62) {
            return true;
        }
        return false;
    };*/

    this.testCollision = function(sprite1, sprite2) {
        var rec =  cc.Rect.CCRectIntersectsRect(sprite1.getTextureRect(), sprite2.getTextureRect());
        if(rec != null && rec.size !=null) {
            console.log(rec.size.width);    
        }
        return false;
    };

};

var collisionControl = new CollisionControl();

CollisionControl.getInstance = function() {
	return collisionControl;
};