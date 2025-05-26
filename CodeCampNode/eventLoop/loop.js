// const fs= require("fs")

// console.log("Task 1");

// fs.readFile("loop.txt","utf8",((err,result)=>{
// if(err){
// console.log(err);
// return
// }
// console.log(result);
// console.log("Task 2");
// }))

// console.log("Task3");


// const http= require ("http")

// http.createServer((req,res)=>{
// console.log("Brian");
// res.end("Main Page")


// }).listen(6060,()=>{
// console.log("Listening on port 6060");


// })
// console.log("Last line");



////ASYNC/AWAIT AND PROMISES


// const { readFile, writeFile } = require("fs")
// const util = require("util")

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//     try {

//         const first = await readFilePromise("loop.txt", "utf8")
//         console.log(first);
// await writeFilePromise("loop2.txt","HELLO BRIAN")

//     } catch (error) {
//         console.log(error);


//     }

// }

// start()




////EXAMPLE 2


// const {readFile,writeFile}= require("fs")
// const util= require("util")


// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)


// const me= async()=>{

// try {

// const angela=await readFilePromise("loop2.txt","utf8")
// await writeFilePromise("loop3.txt","Hello Angela and Alpha")
// console.log(angela);


// } catch (error) {
//     console.log(error);

// }

// }

// me()




////EXAMPLE 3

// const {readFile,writeFile}= require("fs").promises

// const simple= async()=>{

// try {

// const pp= await readFile("loop3.txt","utf8")
// console.log(pp);
// await writeFile("loop3.txt","How was life back in school \n",{flag:"a"}) 
// } catch (error) {
//     console.log(error);

// }


// }

// simple()



////EXAMPLE 5

// const {readFile,writeFile}=require("fs").promises


// const jp= async()=>{
// try {
//     const dea=await readFile("loop3.txt","utf8")
// console.log(dea);

// await writeFile("loop3.txt","Appended TEXT",{flag:"a"})


// } catch (error) {
//     console.log(error);

// }


// }


// jp()







////EXAMPLE6
// const fs = require("fs")

// const me = fs.readFile("loop.txt", "utf8", (err, result) => {
//     if (err) {
//         console.log(err);
//         return

//     }
//     console.log(result);


// })

// console.log(me);


// const by = fs.writeFile("loop5.txt", "FILE OVERWRITTEN", (err, result) => {

//     if (err) {

//         console.log(err);
//         return
//     }
//     console.log(result);



// })



////EXAMPLE 7


// const { readFile, writeFile } = require("fs").promises

// const rm = async () => {
//     try {
//         const br = await readFile("loop.txt", "utf8")
//         console.log(br);
//         await writeFile("loop5.txt", "heyy", { flag: "w" })

//     } catch (error) {
//         console.log(error);
        
//     }
// }
// rm()





////EXAMPLE 8


// const {writeFile,readFile}=require("fs").promises

// const remainder= async()=>{
// const me=await readFile("loop5.txt","utf8")
// console.log(me);

// await writeFile("loop9.txt","KARATHI BRIAN")

// }

// remainder()
    




// const { log } = require("console");
// const fs= require("fs")

// fs.readFile("loop.txt","utf8", (err,result)=>{
// if(err){

//     console.log(err);
//     return
// }
// console.log(result);


// fs.writeFile("loop5.txt","Its been long \n",{flag:"a"},(err,result)=>{
// if(err){

//     console.log(err);
//     return
// }
// console.log(result);

// })




// })





// const {readFile,writeFile}=require("fs").promises

// const brian=async()=>{
// try {
    
// const a=await readFile("loop2.txt","utf8")

// console.log(a);



// await writeFile("loop10.txt","heyyyyy")





// } catch (error) {
//  console.log(error);
    
// }


// }


// brian()







const {readFile,writeFile}= require("fs").promises

const bri= async()=>{

try {
    
const b= await readFile("loop10.txt","utf8")
console.log(b);

await writeFile("loop3.txt","you good",{flag:"a"})
} catch (error) {
    console.log(error);
    
}


}

bri()










