const http = require("http")
const fs = require("fs")

http.createServer(function (req, res) {

    fs.readFile("create2.html", function (err, data) {

        if (err) {

            console.log(err)
            res.writeHead(404, { 'content-Type': 'text/html' })
            res.write("404,PAGE NOT FOUND")



        } else {

            res.writeHead(200, { "content-Type": "text/html" })

            res.write(data)

        }

        res.end()

    })




}).listen(8080)


















