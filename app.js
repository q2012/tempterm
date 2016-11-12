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
        mute = req.query.mute;
        bass = req.query.bass;
        mono = req.query.mono;

        freq = req.query.freq;

        vol = req.query.vol;
        
        resp+="mute: "+mute+"\nmono: "+mono+"\nbass: "+bass+"\nfrequence: "+freq+"\nvolume: "+vol
    }
    else
    {
        resp+=mute+"-"+mono+"-"+bass+"-"+freq+"-"+vol;
    }
    
    res.send(resp);
    
    
});

app.listen(port, addr, function () {
  console.log('Example app listening on '+addr+':'+port+'!');
});