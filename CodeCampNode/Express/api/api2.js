// const express = require("express")
// const app = express()
// const path = require("path")
// const { products } = require("./data")
// app.get("/", (req, res) => {

//     res.send("<h1>WELCOME</h1>  <a href='/team/1/'>Manchester United</a> ")

//     app.get("/team/1/:any", (req, res) => {

//         const { any } = req.params

//         const setNumbe = products.find((x) => {

//             return x.id === Number(any)

//         })

//         res.json(setNumbe)

//         const newP = products.map((p) => {
//             const { id, name } = p
//             return name
//         })

//     })

// })

// app.listen(8000)









const express= require("express")

const app = express()
const {products}= require("./data")
app.get("/",(req,res)=>{
res.send("Heyy . On the right page. Hold in there    <h1>Main Page</h1>  <a href='/uef'>Show</a>      <a href='/uef/single' > See single product </a>  "      )

})

app.get("/uef",(req,res)=>{

res.json(products)

})

app.get("/uef/single/:specificNumber",(req,res)=>{
const {specificNumber}=req.params

const store = products.find((x)=>{
    const {id}=x

return id===Number(specificNumber)

})

if(!store){

    res.status(404).send("OOOPS , PRODUCT NOT FOUND") 
 return
 }

res.json(store)

})






app.listen(5000)










