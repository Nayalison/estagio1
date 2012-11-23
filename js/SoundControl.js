var SoundControl =  function(){
	this.AudioEngine = null;

	var _init = function() {
		this.AudioEngine = cc.AudioEngine.getInstance();
	};
	
	this.playGunSound = function(){
    	cc.AudioEngine.getInstance().playEffect("./Resources/tiro", true);
         cc.AudioEngine.getInstance().setEffectsVolume(1)
    };

    this.pauseGunSound = function(){
    	cc.AudioEngine.getInstance().pauseEffect("./Resources/tiro");
    };

    this.playExplosionSound = function(){
        cc.AudioEngine.getInstance().playEffect("./Resources/bomb", false);
         cc.AudioEngine.getInstance().setEffectsVolume(1)
    };

    this.playBackgroundMusic = function(){
        cc.AudioEngine.getInstance().playBackgroundMusic("./Resources/background",true);
        cc.AudioEngine.getInstance().setBackgroundMusicVolume(0.7)
    };

    this.stopBackgroundMusic = function(){
        if(cc.AudioEngine.getInstance().isBackgroundMusicPlaying()) {
            cc.AudioEngine.getInstance().stopBackgroundMusic();
        }
    };

    _init();
};

var soundControl = new SoundControl();

SoundControl.getInstance = function() {
	return soundControl;
};