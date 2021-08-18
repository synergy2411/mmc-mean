const { string } = require("yargs")
const yargs = require("yargs")

yargs.command({
    command : "add",
    description : "to add new note",
    builder : {
        title : {
            description : "title for new note",
            demandOption : true,
            type : string
        },
        body : {
            type : string,
            demandOption : true,
            description : "body for new note"
        }
    },
    handler : (args) => {
        console.log("ARGUMENTS : ", args)
    }
})

yargs.parse();

// console.log("[YARGS]", yargs.parse())
// console.log("[PROCESS]", process.argv)
// Process built-in variable


// node index.js add --title="" --body=""
// node index.js remove --title=""
// node index.js read --title=""
// node index.js list 