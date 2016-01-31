/***
* game main
*/
function Game()
{
    this.run = function () {
        this.playBackgroundAudio();
    }
     
    this.loadResource = function(cb)
    {
        for( var i in ck.res.audio )
        {
            ck.audioMng.pushAudio(i.toString(),ck.res.audio[i]);
        }

        //initialize
        this.gndAudio = ck.audioMng.A('xiaoyaoyou');
        this.gndAudio.loop = true;
        this.gndAudio.volume = 0.5;

        if (cb) cb();
    }
    this.playBackgroundAudio=function()
    {
        if (this.gndAudio)
            this.gndAudio.play();
    }
    this.stopBackgroundAudio=function()
    {
        if (this.gndAudio)
            this.gndAudio.pause();
    }
}


function AudioManager()
{
    this.map = {};

    this.pushAudio = function (name,url)
    {
        var a = this.map[name] = new Audio(url);
        a.autoplay = false;

        a.onerror = function () {
            console.log("Load audio failed:", url);
        }
    }
    this.play = function(name)
    {
        if (this.map[name])
            this.map[name].play();
    }
    this.stop = function(name)
    {
        if (this.map[name])
            this.map[name].pause();
    }
    this.stopAll = function()
    {
        for (var i in this.map.length)
            this.map[i].stop();
    }
    this.A = function (name) {
        return this.map[name];
    }
}


ck.game = new Game();
ck.audioMng = new AudioManager();