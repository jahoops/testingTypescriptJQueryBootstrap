//command line > node fileutil.js questions 
//input must be in ./data_raw/
//output goes to ./data/
var inputfile = './data_raw/' + process.argv[2] + '.txt';
var outputfile = './public/data/' + process.argv[2] + '.json';

var jsonArray = [];

var fs = require('fs'),
readline = require('readline'),
instream = fs.createReadStream(inputfile),
outstream = new (require('stream'))(),
rl = readline.createInterface(instream, outstream);

rl.on('line', function (line) {   
    if(line.length===0) return;
    var qpos = line.indexOf(')');
    var isnum = line.slice(0,qpos);
    if(Number.isInteger(Number(isnum))) {
        jsonArray.push('q:' + line.slice(qpos+1));
    } else {
        jsonArray.push('a:' + line.slice(qpos+1));
    }
});

rl.on('close', function () {  
    var json = [];
    var jsonObj = {};

    for(var i = 0; i < jsonArray.length; i++){
        var row = jsonArray[i];
        console.log(row, row.slice(0,2));
        switch(row.slice(0,2)){
            case 'q:':
            if(jsonObj.q) {
                json.push({id:json.length,q:jsonObj.q,a:jsonObj.a});
            }
            jsonObj.q = row.slice(2).trim();
            jsonObj.a = '';
            break;
            case 'a:':
            jsonObj.a += row.slice(2).trim() + '<br>';
            break;
        }
    }    
    if(jsonObj!=='') {
        json.push({id:json.length,q:jsonObj.q,a:jsonObj.a});
    }

    var fs = require('fs');
    fs.writeFile(outputfile, JSON.stringify(json), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(inputfile + ' (' + jsonArray.length + ') rows processed and (' + json.length + ') items saved to ' + outputfile);
    }); 
});