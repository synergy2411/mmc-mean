

// function longRunningOperation(){
//     setTimeout(() => {
//         console.log("Running the operation....")
//     }, 3000)
// }

// function webRequest(req){
//     console.log("Starting the operation with ID #", req.id)
//     longRunningOperation();
//     console.log("Ending the operation with ID #", req.id)
// }

// webRequest({id : 1})
// webRequest({id : 2})

// OUTPUT ?
// - Starting the op 1
// - Ending the op 1
// - running the op (after 3 seconds)




// JavaScript - 
// - Synchronous Task - console.log()
// - Asychronous Task 
    // - Micro Task - Timer, Reading/writing, Obtaining sockets, XHR etc
    // - Macro Task - Promise

// setTimeout(()=>{
//     console.log("timer")
// }, 0)

// Promise.resolve().then(response => console.log("Promise"))

// console.log("Console log")


// OUTPUT > 
// -> timer -> Promise -> console
// -> 



// Handling Async JavaScript

// 1. Callback function
// 2. Promises
// 3. Async...Await
// 4. Observables