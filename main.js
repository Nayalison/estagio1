var cocos2dApp = cc.Application.extend({
    
    config:document.querySelector('#cocos2d-html5')['c'],
    
    ctor:function (scene) {
        this._super();
        this.startScene = scene;
        cc.setup(this.config['tag']);

        cc.Loader.shareLoader().onloading = function () {
            cc.LoaderScene.shareLoaderScene().draw();
        };

        cc.Loader.shareLoader().onload = function () {
            cc.AppController.shareAppController().didFinishLaunchingWithOptions();
        };

        cc.AudioEngine.getInstance().init("mp3,ogg,wav");
        cc.Loader.shareLoader().preload([
            {type:"effect",src:"./Resources/tiro"},
            {type:"effect",src:"./Resources/bomb"},
            {type:"bgm",src:"./Resources/background"}
        ]);
    },
    
    applicationDidFinishLaunching:function () {
        
        var director = cc.Director.getInstance();

        director.runWithScene(new this.startScene());

        return true;
    }
});

var memeInvasion = new cocos2dApp(MenuScene);