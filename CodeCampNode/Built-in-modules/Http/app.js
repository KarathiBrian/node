const http = require("http")

http.createServer((req,res)=>{
    console.log(req);
    
// res.writeHead(200,{"Content-Type":"text/html"})
// res.write("Hello here is my server")
if(req.url==="/"){

    res.end("On the right track")

}
if(req.url==="/home"){
    res.end("Home Page")
}

res.end(`<h1>OPPPS! </h1>
    
    <p>I cant seem to find the requested Page</p>
    <a href="/">  back home</a>

    `)



// res.end()
}).listen(7070)





