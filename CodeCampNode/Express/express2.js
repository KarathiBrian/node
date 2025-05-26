const express= require("express")
const path= require("path")
const app= express()


    app.use(express.static(path.join(__dirname, "public2")))



app.listen(8080,()=>{

    console.log("running on port ", 8080);
    
})




















