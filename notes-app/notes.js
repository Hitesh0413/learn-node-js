const fs = require('fs')
const addNotes = function (title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    console.log(duplicateNotes)
    if(duplicateNotes==0){
        notes.push({
            "title":title,
            "body":body
        })
        console.log('New Note Added !')
        saveNotes(notes)
        console.log(loadNotes())
    }
    else{
        console.log('This Title Already Taken')
    }
}

const removeNote = function (title){
    console.log('This Should be deleted : '+title)
}

const loadNotes = function (){
    try{
        const  bufferData = fs.readFileSync('notes.json')
        const  dataString = bufferData.toString()
        return  JSON.parse(dataString)
    }
    catch(e){
        return [];
    }
}

const saveNotes = function (note){
    
    fs.writeFileSync('notes.json',JSON.stringify(note))
}

module.exports = {
    "addNotes" : addNotes,
    "removeNote" : removeNote 
}