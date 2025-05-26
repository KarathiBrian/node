const express= require("express")
const app= express()
const {products}= require("./data")
const send= require("./middle2")
// app.use(send) ////  Its going to run Globally to all urls
app.use("/yo",send)  ////Its going to run only for urls that start with /yo

app.get("/yo/productPage/query",(req,res,)=>{
const {search}=req.query

if(search==="name"){

const namz=products.map((x)=>{
    
return x.name

})
res.json(namz)

}else{

    res.status(404).send({Success:false,data:[]}
        
    )
}


})

app.listen(8080)











