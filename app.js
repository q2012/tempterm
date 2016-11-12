var env          = process.env;
var express = require('express');

var port = env.NODE_PORT || 8080;
var addr = env.NODE_IP || 'localhost';

var app = express();

var mute,mono,bass;

var freq;

var volume;



app.get('/', function (req, res) {
    
    var resp = "";
    if(req.query.goal)
    {
        mute = req.query.mute?req.query.mute:mute;
        bass = req.query.bass?req.query.bass:bass;
        mono = req.query.mono?req.query.mono:mono;

        freq = req.query.freq?req.query.freq:freq;

        vol = req.query.vol?req.query.vol:vol;
        
        resp+="mute: "+mute+"\nmono: "+mono+"\nbass: "+bass+"\nfrequence: "+freq+"\nvolume: "+vol
    }
    else
    {
        resp+=mute+"-"+mono+"-"+bass+"-"+freq+"-"+vol;
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(resp);
    
    
});

app.listen(port, addr, function () {
  console.log('Example app listening on '+addr+':'+port+'!');
});