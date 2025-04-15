const express= require("express")
const app= express()
const path= require("path")
const {products}=require("./data")
app.get("/",(req,res)=>{

res.send("<h1>WELCOME</h1>  <a href='/team/1/'>Manchester United</a> ")



app.get("/team/1/:any",(req,res)=>{

const{any}=req.params

const setNumbe=products.find((x)=>{

return x.id===Number(any)

})

res.json(setNumbe)


const newP= products.map((p)=>{
const {id,name}=p
return name
})

// res.json(newP)


})





})










app.listen(8000)

