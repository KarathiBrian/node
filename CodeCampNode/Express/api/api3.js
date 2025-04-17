////QUERY PARAMETERS


const express= require("express")
const app= express()
const {products}=require("./data")
app.get("/api/v1/query",(req,res)=>{
// res.send("Hello Everyone.How was your weekend")
// console.log(req.query)
let newPro=[...products]
const{search,limit}=req.query

if(search==="a"){

const final=newPro.filter((x)=>{

return x.name.match("albany")

})



res.json(final)
}else{
// res.send("No product matches your result")
res.status(200).json({success:true,data:[]})


}





})






app.listen(6060)










