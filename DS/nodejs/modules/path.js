const path = require("path")

const fileName = path.basename('./algorithms/primsAlg.js')
console.log(fileName)

const dirName = path.dirname('./algorithms/primsAlg.js')
console.log(dirName)

var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }

var p = path.format(obj);
console.log(p);

const join = path.join('Users' , 'leelavathi' , 'kommana')
console.log(join)

