function greet(name){
    console.log(`Hello ${name}`)
}

function higherOrderFunction(callback){
    const name = "Ashis"
    callback(name)
}

higherOrderFunction(greet)