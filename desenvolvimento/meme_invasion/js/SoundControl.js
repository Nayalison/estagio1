var SoundControl =  function(){
	this.AudioEngine = null;

	var _init = function() {
		this.AudioEngine = cc.AudioEngine.getInstance();
	};
	
	this.playGunSound = function(){
    	cc.AudioEngine.getInstance().playEffect("./Resources/tiro", true);
    };

    this.pauseGunSound = function(){
    	cc.AudioEngine.getInstance().pauseEffect("./Resources/tiro");
    };

    this.playBackgroundMusic = function(){
        cc.AudioEngine.getInstance().playBackgroundMusic("./Resources/background",true);
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