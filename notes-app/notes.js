const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title,body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find((note) => note.title === title)
    if(!duplicateNotes){
        notes.push({
            "title":title,
            "body":body
        })
        console.log(chalk.green.inverse('New Note Added !'))
        saveNotes(notes)
    }
    else{
        console.log(chalk.inverse.red('This Title Already Taken !'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const foundNotes = notes.filter((note) => note.title != title)
    
    if(notes.length == foundNotes.length){
        console.log(chalk.red.inverse('Note not Found !'))
    }
    else{
        console.log(chalk.yellow.inverse('Note Deleted !'))
        saveNotes(foundNotes)
    }
}

const loadNotes = () => {
    try{
        const  bufferData = fs.readFileSync('notes.json')
        const  dataString = bufferData.toString()
        return  JSON.parse(dataString)
    }
    catch(e){
        return [];
    }
}

const listNotes = () => {
    const notes  = loadNotes()
    notes.forEach(note => {
        console.log(chalk.yellow.inverse.bold('\nTitle : '+note.title))
        console.log(chalk.green.inverse.bold('Body : '+note.body+'\n'))
    });
}

const saveNotes = (note) => {    
    fs.writeFileSync('notes.json',JSON.stringify(note))
}

const showNote = (title) => {
    const notes = loadNotes();
    const matchedNotes = notes.filter((note) => note.title === title)
    if(matchedNotes.length>0){
        console.log(chalk.magenta.inverse.bold("Title : "+matchedNotes[0].title))
        console.log(chalk.cyan.inverse.bold("Body : "+matchedNotes[0].body))
    }
    else{
        console.log(chalk.red.inverse.bold('Note Not Found !'))
    }    
}

module.exports = {
    "addNotes" : addNotes,
    "removeNote" : removeNote, 
    "loadNotes" : loadNotes,
    "showNote" : showNote,
    "listNotes" : listNotes
}