const http= require("http")
const fs = require("fs")


http.createServer(function(req,res){

fs.readFile('create.html',function(error,data){

if(data){
res.writeHead(200,{"content-Type":"text/html"})
res.write(data)



res.end()

}else{

    res.writeHead(404,{"content-Type":"text/html"})
res.write(error,"Error loading page")
res.end()
}

})

}).listen(9090)




