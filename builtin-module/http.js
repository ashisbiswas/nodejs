const http = require("node:http")

// const server = http.createServer( (req, res) => {
//     res.writeHead(200, {"content-type" : "text/plain"})
//     res.end("Hello World!")
// })

// const server = http.createServer( (req, res) => {
//     const superHero = {
//         fName: "Ashis",
//         lname: "Biswas"
//     }
//     res.writeHead(200, {"content-type" : "application/json"})
//     res.end(JSON.stringify(superHero))
// })

const fs = require("fs")
const server = http.createServer( (req, res) => {
    res.writeHead(200, {"content-type" : "text/html"})
    fs.createReadStream(__dirname + "/response.html").pipe(res)

    // const html = fs.readFileSync("./response.html", "utf-8")
    // res.end(html)


})


server.listen(3000, ()=> {
    console.log("Server is running on port 3000")
    console.log("http://localhost:3000")
})