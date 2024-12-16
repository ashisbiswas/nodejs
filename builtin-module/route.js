const http = require("node:http")

const server = http.createServer((req, res) =>{
    const route = req.url
    
    switch (route){
        case "/":
            res.writeHead("200", { "Content-Type" : "text/plain"})
            res.end("Home Page")
            break
        case "/api":
            res.writeHead("200", { "Content-Type" : "application/json"})
            res.end(JSON.stringify({ fname: "Ashis", lname: "Biswas"}))
            break
        case "/about":
            res.writeHead("200", { "Content-Type" : "text/plain"})
            res.end("About Page")
            break
        
        default :
            res.writeHead("400", { "Content-Type" : "text/plain"})
            res.end("Page Not Found")
    }
})

server.listen('3000',()=>{
    console.log("Server is running on port 3000")
    console.log("http://localhost:3000")
})