// const http = require("http")

// http.createServer((req,res)=>{
//     console.log(req);
    
// // res.writeHead(200,{"Content-Type":"text/html"})
// // res.write("Hello here is my server")
// if(req.url==="/"){

//     res.end("On the right track")

// }
// if(req.url==="/home"){
//     res.end("Home Page")
// }

// res.end(`<h1>OPPPS! </h1>
    
//     <p>I cant seem to find the requested Page</p>
//     <a href="/">  back home</a>

//     `)



// // res.end()
// }).listen(7070)








// const http= require("http")
// const fs= require("fs")
// const url = require("url")
// const os= require("os")

// http.createServer((req,res)=>{

// res.writeHead(200,{"content-type":"text/html"})




// res.end("Hello")

// }).listen (6070)

const{readFile,writeFile}= require("fs").promises


const brian= async()=>{

    try {
        
const task1= await readFile("app3.html","utf-8")
console.log(task1);

await writeFile("app4.html","Added This new file in my non-blocking code") 


    } catch (error) {
        
        
    }



}

brian()












