const fs = require('fs')
const myChalk = require('chalk')


const getNotes = () => {
    console.log(myChalk.inverse("Listing Your notes..."))
    
}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((n) => n.title === title)

    if(!note){
        console.log(myChalk.red("Note not found!"))
    } else{
        console.log(myChalk.underline(note.title) + "\n" + note.body)
    }
}

const listNotes = () => {
    console.log(myChalk.inverse("Your notes..."))
    loadNotes().forEach((note) => console.log(myChalk.black.bgCyan(note.title)) )
}
const addNotes = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title == title
    // })
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) { //if the note doesn't already exist 
        notes.push({title: title, body: body})
        saveNotes(notes)
        console.log(myChalk.green.inverse('New note added!'))
    } else { // if we have a duplicate note title
        console.log(myChalk.red.inverse('Title is taken !!'))
    }
}


// remove a note
const removeNotes = (title) => { // first load the notes
    const old_notes = loadNotes()


    const new_notes = old_notes.filter((note) => note.title !== title) // return an array with all non matching titles
  

    if (old_notes.length == new_notes.length) {
        console.log(myChalk.red.inverse("The note with the title [" + title + "] doesn't exist!"))
    }
    else{
        saveNotes(new_notes)
        console.log(myChalk.green.inverse("Note with the title [" + title + "] successfully removed!"))
    }

}

// save notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// load current notes
const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote //<<< name of the function in here
}
