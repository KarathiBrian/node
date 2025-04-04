const path= require("path")
console.log(path.sep)

const me= path.join("/path","joi.js","path.js")
// console.log(me);


// console.log(path.basename("/path","joi.js","path.js"));

const absolute= path.resolve(--dirname,"joi.js","path.js")
console.log(absolute);

