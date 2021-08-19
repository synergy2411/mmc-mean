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

const readNote = title => {
    const allNotes = loadNotes();
    const foundNote = allNotes.find(note => note.title === title)
    if(!foundNote){
        console.log(chalk.red("Regret! Note not found."))
    }else{
        console.log(chalk.green(`Title : ${foundNote.title}`))
        console.log(chalk.green(`Body : ${foundNote.body}`))
    }
}

const listNote = () => {
    const allNotes = loadNotes();
    allNotes.forEach(note => {
        console.log(chalk.grey("______________________"))
        console.log(chalk.green(`Title : ${note.title}`))
        console.log(chalk.green(`Body : ${note.body}`))
    })
}


module.exports = {
    addNote, readNote, listNote
}