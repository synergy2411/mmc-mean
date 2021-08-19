const yargs = require("yargs")
const { addNote, readNote, listNote } = require("./utils/notes")

yargs.command({
    command : "add",
    description : "to add new note",
    builder : {
        title : {
            description : "title for new note",
            demandOption : true,
            type : String
        },
        body : {
            type : String,
            demandOption : true,
            description : "body for new note"
        }
    },
    handler : (args) => {
        addNote(args.title, args.body)
    }
})

yargs.command({
    command : "read",
    description : "to read single note",
    builder : {
        title : {
            type: String,
            demandOption : true,
            description : "title to read one note"
        }
    },
    handler : (args) => {
        readNote(args.title)
    }
})

yargs.command({
    command : "list",
    description : "to list all notes",
    handler : args => {
        listNote()
    }
})

yargs.parse();

// console.log("[YARGS]", yargs.parse()) // {title : "the title"}
// console.log("[PROCESS]", process.argv)  // ["--title='the title'"]
// Process built-in variable


// node index.js add --title="" --body=""
// node index.js read --title=""
// node index.js remove --title=""
// node index.js list 