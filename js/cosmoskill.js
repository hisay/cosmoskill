/***
*  CosmosKill entery  
*  Nothing can stand in my desire for freedom.
* author:hisay
* email:hisay@qq.com
*/
window.ck || (window.ck = function () { });
ck.loadJS = function(url,cb)
{
    var s = document.createElement("SCRIPT");
    s.src = url;
    s.type = 'text/javascript';
    s.language = 'javascript';
    s.async = true;
    if (cb) {
        s.onload = function () {
            cb();
        }
    }
    document.head.appendChild(s);
}
ck.getRootPath = function () {
    if (this._rootpath) return this._rootpath;
    var p = window.location.pathname;
    var ps = -1;
    var plen = p.length;
    plen--;
    while (p[plen] != '/')
        plen--;

    return this._rootpath = window.location.protocol + '//' + window.location.hostname+ p.substr(0, plen + 1);
}
ck.pushJS = function (path, fullpath) {fullpath = fullpath || false; if (!this._jslist) this._jslist = []; this._jslist.push(fullpath ? path : this.getRootPath() + path);}
ck.loadAllJS = function (finishcb) {
    if ( this._jslist && this._jslist.length)
    {
        this.loadJS(this._jslist.shift(),
            function () {
                ck.loadAllJS(finishcb);
            });
    } else {
        if (finishcb) finishcb();
    }
}
window.onload=function()
{
    ck.pushJS('js/jquery-2.2.0.min.js');
    ck.pushJS('js/res.js');
    ck.pushJS('js/game.js');
    
    ck.loadAllJS(function () {
        setTimeout(function () {
            $('.startPage').remove();
            initGame();
        },1000);
    });
}

function initGame()
{
    $('<canvas id="gameCanvas">Your browser not support canvas</canvas>').appendTo($('body')).css('opacity',0.1);
    ck.cv = $('#gameCanvas');

    ck.cv.animate({ opacity: 0.5 }, 'slow', function () {
        ck.game.loadResource(function () {
            ck.game.run();
        });
    });
}