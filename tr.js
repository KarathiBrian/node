var http= require("http")
var fs= require("fs")
console.log("YOUUU");
console.log("Juni");


// http.createServer((req,res)=>{

// fs.readFile("index.html",(err,data)=>{

// if(err){

//    res.writeHead(404,"error loading data")
//    res.write(err)
// console.log(err);


// }else{
// res.writeHead(200,{"Content-Type":"text/html"})
// res.write(data)
// console.log(data.toString);

// res.end()
// }

// })





// }).listen(8070)


// fs.appendFile("index.html","ADDED",(err)=>{

//     if(err)
//         console.log(err);
        

// })



fs.writeFile("index.html","Just overwrite",(err,data)=>{
if (err) 

    console.log(err);
    

})



fs.rename("index.html","indexy.html",()=>{

})

