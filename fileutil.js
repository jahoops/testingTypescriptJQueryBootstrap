function processFile(inputFile) {
  var fs = require('fs'),
      readline = require('readline'),
      instream = fs.createReadStream(inputFile),
      outstream = new (require('stream'))(),
      rl = readline.createInterface(instream, outstream),
      jsonArray = [];

  rl.on('line', function (line) {    
      if(line.length===0) return;
      var qpos = line.indexOf(')');
      var isnum = line.slice(0,qpos);
      if(Number.isInteger(Number(isnum))) {
        jsonArray.push('Q:' + line.slice(qpos+1));
      } else {
        jsonArray.push('A:' + line.slice(qpos+1));
      }
  });
  
  rl.on('close', function (line) {
     // console.log(line);
      console.log(jsonArray);
  });
}
processFile('./data/questions.txt');