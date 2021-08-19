// console.log(process)


process.on("uncaughtException", (code) => {
    console.log("Error occured", code)
})
// nonExist();

process.on("exit", () => {
    // db.close()
    // unsubcribe the result
    
    // console.log("ignoring....")
    console.log("existing....")
})

setTimeout(() => {
    process.exit(0);
}, 5000)

// console.log(process.env)