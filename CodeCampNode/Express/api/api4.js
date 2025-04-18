////QUERY PARAMETERS

const express= require("express")
const app= express()
const {products}= require("./data")


app.get("/brian/query",(req,res)=>{
const {search}=req.query

if(search==="al"){
res.json(products)

}else{

    const newPro= [...products]
const newz= newPro.map((x)=>{
return x.id

})

res.json(newz)

}

})



app.listen(9000)











