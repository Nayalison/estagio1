(function () {
    var d = document;
    var c = {
        COCOS2D_DEBUG:2, //0 to turn debug off, 1 for basic debug, and 2 for full debug
        box2d:false,
        showFPS:false,
        frameRate:60,
        tag:'gameCanvas', //the dom element to run cocos2d on
        engineDir:'cocos2d/',
        appFiles:['js/MemeInvasion.js','js/EventControl.js','js/Poder.js','js/Inimigo.js', 'js/Control.js']
    };
    window.addEventListener('DOMContentLoaded', function () {
        //first load engine file if specified
        var s = d.createElement('script');
        s.src = c.engineDir + 'platform/jsloader.js';
        d.body.appendChild(s);
        s.c = c;
        s.id = 'cocos2d-html5';
    });
})();