const express= require("express")
const app= express()
app.use(express.static("./methods-public"))

app.get("/",(req,res)=>{

res.send("Hello")

})


app.post("/login",(req,res)=>{

res.send("POST")

})



app.listen(8090)


