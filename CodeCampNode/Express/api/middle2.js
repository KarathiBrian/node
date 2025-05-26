const send=(req,res,next)=>{

const method= req.url
const date= new Date().toString()
const url= req.url
console.log(method,date,url);

console.log("Thats the data we fetched when the user run the server on the browser");
next()

}

module.exports=send







