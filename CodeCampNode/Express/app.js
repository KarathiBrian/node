const express = require("express")
const app = express()
const { products } = require("./data")
app.get("/", (req, res) => {

    const newPro = products.filter((product) => {

        const { name } = product

        return name
    })

    res.json(newPro)
})

app.get("/albanysofa", (req, res) => {

    const specificPro = products.find((pro) => {

        return pro.name === "albany sectional"

    })

    res.json(specificPro)

})


app.get("/leather", (req, res) => {

    const leather = products.find((x) => {

        return x.name === "leather sofa"

    })

    res.json(leather)
})






app.get("/products/:proID", (req, res) => {

    const { proID } = req.params

    const newP = products.find((x) => {

        return x.name === proID
    })
    res.json(newP)


    // console.log(req.params);

})



app.get("/pro/:specificID/name/:nameID", (req, res) => {

    const { specificID } = req.params
    const { nameID } = req.params

    const userRequest = products.find((x) => {

        return x.id === Number(specificID), x.name === nameID


    })
    if (!userRequest) {

        return res.status(404).send("PRODUCT DOES NOT EXIST. TRY SEARCHING FOR ANOTHER PRODUCT")
    }



    res.send(userRequest)

})





////QUERY PARAMS

app.get("/tod/h1", (req, res) => {

    const { search } = req.query

    let coProducts = [...products]

    if (search) {

        coProducts = coProducts.filter((x) => {
            return x.name.startsWith(search)

        })

    }

    if (search.length < 3) {
        res.status(404).send("Input more than 3 characters")

    }



    res.send(coProducts)
})




////MIDDLEWARE

////Middleware is a function passed btw req and res and is executed before the final response

////Example

const all=require("./middle")
app.use(all)
const easyM = (req,res,next)=>{

const method = req.method
    const url = req.url
    const time = new Date().toString()
    console.log(method, url, time);
next()
}



app.get("/middle", (req, res) => {


    // const method = req.method
    // const url = req.url
    // const time = new Date().toString()
    // console.log(method, url, time);


    res.send("Hey")
})



app.get("/middle/about", (req, res) => {



    res.send("About")
})

// app.use(all)
console.log('start');


app.get("/middle/footer" ,(req, res) => {

console.log("end");



    res.send("footer")
})






app.listen(8080, () => {
    console.log("Server running on port 8080");


})





