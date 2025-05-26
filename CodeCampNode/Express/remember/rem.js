const express= require("express")
const { products } = require("../api/data")
const middle = require("./midd")
const middle2 = require("./midd2")
const app= express()


app.get("/sec2",[middle,middle2],(req,res)=>{

const {search}=req.params
if(search==="albany sofa"){
const newpp=[...products]

const np= newpp.filter((x)=>{

})

return np.name==="albany sofa"





}else

res.json({success:false})

// res.send(products)

}).listen(6060)












