const fs = require("node:fs")

const fileContents = fs.readFileSync("./file.txt", "utf-8")
console.log(fileContents) 

fs.readFile( "./file.txt", "utf-8", (error, data) =>{
    
    if( error ){
        console.log(error)
    }else{
        console.log(data)
    }

})

fs.writeFileSync("./greet.txt", "Hellow world!")

// fs.writeFile("./greet.txt", "Hello Ashis Again!", (err) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File Written.")
//     }
// })

fs.writeFile("./greet.txt", " Hello Ashis Again ok!", { flag: 'a' }, (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log("File Written.")
    }
})