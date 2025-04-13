const express= require("express")
const app=express()
const path= require("path")

app.get('/',(req,res)=>{
res.status(200).send("You're on the homepage section")

})

app.get("/about",(req,res)=>{

res.status(200).send("You are on the about page")

})

// app.all("*",(req,res)=>{
// res.status(404).send("<h1>Page Not Found</h1>")

// })

app.use(express.static(path.join(__dirname,"./public")))
app.get("/file",(req,res)=>{
// res.sendFile(path.join("C:/Users/BRIAN/OneDrive/Documents/NODE JS/roughWork/index.html"))
res.sendFile(path.join(__dirname,"../../roughWork/index.html"))
})





app.listen(7000,()=>{
console.log("Listening on server 7000");


})




