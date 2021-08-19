const fs = require("fs");
const chalk = require("chalk");

const loadNotes= () => {
    try{
        const notesBuffer = fs.readFileSync("./notes.json")
        const notesString = notesBuffer.toString();
        return JSON.parse(notesString);
    }catch(err){
        return [];
    }
}

const saveNotes = (note) => {
    const allNotes = loadNotes();
    allNotes.push(note)
    fs.writeFileSync("./notes.json", JSON.stringify(allNotes))
}

const addNote = (title, body) => {
    const allNotes = loadNotes();
    const foundNote = allNotes.find(note => note.title === title)
    if(!foundNote){
        saveNotes({title, body})
    }
    else{
        console.log(chalk.red("Note Already exist! Try again."))
    }
}


module.exports = {
    addNote
}