const allM= (req,res,next)=>{

    const method= req.method
const url= req.url
const time= new Date().toString()

console.log(method,url,time);
next()
}


module.exports= allM








