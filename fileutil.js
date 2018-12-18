var inputfile = './data_raw/questions.txt';
var outputfile = './data/questions.js';

var jsonArray = [];

var fs = require('fs'),
readline = require('readline'),
instream = fs.createReadStream(inputfile),
outstream = new (require('stream'))(),
rl = readline.createInterface(instream, outstream);

rl.on('line', function (line) {   
    console.log('-->', line,jsonArray.length); 
    if(line.length===0) return;
    var qpos = line.indexOf(')');
    var isnum = line.slice(0,qpos);
    if(Number.isInteger(Number(isnum))) {
        jsonArray.push('Q:' + line.slice(qpos+1));
    } else {
        jsonArray.push('A:' + line.slice(qpos+1));
    }
});

rl.on('close', function () {  
    var json = [];
    var jsonObj = {};

    console.log('-->', jsonArray.length);
    for(var i = 0; i < jsonArray.length; i++){
        var row = jsonArray[i];
        console.log(row, row.slice(0,2));
        switch(row.slice(0,2)){
            case 'Q:':
            console.log('q');
            if(jsonObj.Q) {
                json.push({Q:jsonObj.Q,A:jsonObj.A});
            }
            jsonObj.Q = row.slice(2).trim();
            jsonObj.A = '';
            break;
            case 'A:':
            console.log(' a');
            jsonObj.A += row.slice(2).trim() + '/n';
            break;
        }
    }    
    if(jsonObj!=='') {
        json.push({Q:jsonObj.Q,A:jsonObj.A});
    }

    console.log(json.length);
    console.log(json);

    var fs = require('fs');
    fs.writeFile(outputfile, "var jsdata =" + JSON.stringify(json) + ";", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(inputfile + ' (' + jsonArray.length + ') rows processed and (' + json.length + ') items saved to ' + outputfile);
    }); 
});