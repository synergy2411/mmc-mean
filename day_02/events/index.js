const EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();

// - emit() : trigger the event
// - on() : handles the event

emitter.on("newListener", (eventName, listenerFunc) => {
    console.log(eventName + " Event Registered with " + listenerFunc.name)
})

emitter.on("removeListener", (eventName, listenerFunc) => {
    console.log(eventName + " removed from function " + listenerFunc.name)
})

function theHandleFunc(){
    console.log("Handler executed.")
    emitter.removeListener("foo", theHandleFunc);
}

emitter.on("foo", theHandleFunc)

emitter.once("foo", () => {
    console.log("Foo event Fired.")
})

// emitter.on("bar", theHandleFunc)

emitter.emit("foo")
emitter.emit("foo")

// emitter.emit("bar")

// PUB/SUB pattern