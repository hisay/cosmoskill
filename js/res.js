ck.res || (ck.res = {
    audio:
        {
            xiaoyaoyou: 'res/audio/xiaoyaoyou.mp3',
            linghai: 'res/audio/linghai.mp3'
        }
});
ck.R || (ck.R = {});

(function () {
    for( var i in ck.res)
    {
        if (typeof (ck.res[i]) == 'object')
        {
            ck.R[i] = {};
            for( var j in ck.res[i])
            {
                ck.R[i][j] = j.toString();
            }
        } else {
            ck.R[i] = i.toString();
        }
    }
})();