const sayHi=((name)=>{
    console.log(`Hello ${name}`);
    
})
sayHi("George")
module.exports=sayHi

const received= require("./modu")
console.log(received);

