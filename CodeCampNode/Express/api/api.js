const express = require("express")
const app = express()
const { products } = require("./data")

app.get("/", (req, res) => {
    // res.json(products)
    res.send('<h1>HOMEPAGE</h1> <a href="/api/products">products</a> \n <a href="/api/products/product1">single Product</a> ')
})


app.get("/api/products", (req, res) => {

    const newProduct = products.map((product) => {
        const { id, name, image } = product

        return { id, name, image }
    })
    res.json(newProduct)

})



app.get("/api/products/singleProduct3", (req, res) => {
    // console.log(req);
    // console.log(req.params);

    const singleProduct = products.find((product) => {
        return product.id === 3
    })

    res.json(singleProduct)


})


app.get("/api/products/:productID", (req, res) => {
    const { productID } = req.params
    
    
    const foundProduct = products.find((product) => {
        return product.id === Number(productID)
        
    })

if(!foundProduct){
res.status(404) .send("Product does not exist")

}

    
    res.json(foundProduct)
})



app.get("/miale/products/:proName/fruit/:veggie",(req,res)=>{

const {proName}=req.params
const {veggie}=req.params

const foundProduct2=products.find((product)=>{

return product.name===proName

})

const foundProduct3=products.find((pro)=>{

  return  pro.id===veggie
    
    })



if(!foundProduct2,!foundProduct3){
    return res.status(404) .send("No such name exists")
    
    }

res.json(foundProduct2)
res.json(foundProduct3)

})






















app.listen(6060, () => {
    console.log("Server running on port", 6060, "....");

})












