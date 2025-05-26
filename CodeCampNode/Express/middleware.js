const express = require("express")
const app = express()
const logger = require("./api/middlewareAuto")

////MIDDLEWARE FUNCTION

// const logger= (req,res,next)=>{
// const method= req.method
// const url=req.url
// const date= new Date().toString()

// console.log(method,url,date);

// next()
// }

////MANUALLY INPUT THE MIDDLEWARE

////To use a middleware function, you can manually input it using this method.
////So in here when the user navigates to the "/" section:- The method used, url the user used and the specific date on which the user run the request will be displayed on our console

app.get("/", (req, res) => {

    // const method=req.method
    // const url=req.url
    // const date=new Date().toString()
    // console.log(method,url,date);

    res.send("Home")
})



////You can also use the middleware automatically without having to input it in every function. 
////You first have to create a file where your middleware function is at .(In our case here the middleware is stored in the middlewareAuto.js File). So in the file where our middleware is stored , you have to export it so that you can use it in different files. 
////After exporting you need to come  and import it in the file you wanna use it in.
//// So to use it automatically and globally in each function, you will need to use the app.use() method and pass you middleware function in there
////So in each and every function we have our middleware function will run in it and we can cleary see it in our console


app.use(logger)

app.get("/about", (req, res) => {
    
    res.send("About")
    
})

app.get("/page1", (req, res) => {
    
    res.send("Page1")
    
})


////If you want to use the middleware  automatically but for certan routes only, you can input another parameter in the app.use() for path in which our middleware is going to apply to . A specific route that is.

app.use("/avi", logger)
////So in here our middleware will only apply to routes that start with /avi






app.get("/avi/name", (req, res) => {

    res.send("Name Only")


})


app.get("/avi/name/school", (req, res) => {

    res.send("Name and School")


})







app.listen(7070, () => {

    console.log("Server is running on port 7070...");

})