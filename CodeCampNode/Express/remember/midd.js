const middle= (req,res,next)=>{
const method= req.method
const date= new Date().toString()

console.log(method,date);
next()
}


module.exports=middle

