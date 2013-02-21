var SoundControl =  (function(){
    var instance;

    function init(){
        var AudioEngine = null;

        var _init = function() {
            this.AudioEngine = cc.AudioEngine.getInstance();
        };

        return {
            playGunSound : function(){
                cc.AudioEngine.getInstance().playEffect("./Resources/tiro", true);
                cc.AudioEngine.getInstance().setEffectsVolume(1)
            },

            pauseGunSound : function(){
                cc.AudioEngine.getInstance().pauseEffect("./Resources/tiro");
            },

            playExplosionSound : function(){
                cc.AudioEngine.getInstance().playEffect("./Resources/bomb", false);
                cc.AudioEngine.getInstance().setEffectsVolume(1)
            },

            playBackgroundMusic : function(){
                cc.AudioEngine.getInstance().playBackgroundMusic("./Resources/background",true);
                cc.AudioEngine.getInstance().setBackgroundMusicVolume(0.7)
            },

            stopBackgroundMusic : function(){
                if(cc.AudioEngine.getInstance().isBackgroundMusicPlaying()) {
                    cc.AudioEngine.getInstance().stopBackgroundMusic();
                }
            },
        };
    };

    return {
        getInstance : function() {
            if(!instance){
                instance = init();
            }
            return instance;
        }
    };

})();