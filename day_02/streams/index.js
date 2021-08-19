// Stream Class

// Stream Types - Readable (request), Writable (response), Duplex (Socket), Transform (Compression)

// const stream = require("stream").Stream
// const EventEmitter = require("events").EventEmitter;

// const readable = new stream.Readable()
// const writable = new stream.Writable()
// const duplex = new stream.Duplex()
// const transform = new stream.Transform()

// console.log(readable instanceof stream)
// console.log(writable instanceof stream)

// console.log(readable instanceof EventEmitter)

// EventEmitter -> Stream -> Readable/Writable -> readable/writable instance

const fs = require("fs")

const readStream = fs.createReadStream("./text.md")
const writeStream = fs.createWriteStream("./newfile.md")

readStream.pipe(process.stdout);

process.stdin.pipe(writeStream)