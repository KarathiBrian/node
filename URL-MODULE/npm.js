// const up= require("upper-case")

// var http =require("http")

// http.createServer(function(req,res){
// res.writeHead(200,{"content-Type":"text/html"})
// res.write(up.upperCase("YOU GOOD"))
// res.end()

// }).listen(9090)

// const url=require ("url")

// const info= new URL("https://fedhalandventures.co.ke/")

// console.log(info);



const whois = require("whois-json");

(async () => {
  const domain = "x.com"; 
  const data = await whois(domain);
  console.log(data);
})();








