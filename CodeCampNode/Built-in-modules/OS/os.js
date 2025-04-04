const os= require('os')

const me= os.userInfo()
console.log(me);

console.log(`The system uptime is ${os.uptime()} seonds`)

const  up= os.uptime()
console.log(up);


const currentOs= {
name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem()

}

// console.log(currentOs);

console.log(os.type(),os.release(),os.freemem(),os.totalmem());


