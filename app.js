const myChalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

// customized yargs version
yargs.version('1.1.0')


// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
    
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'title of note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }

})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'title of note to be printed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

// list the notes
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler() {
        notes.listNotes()
    }
})


yargs.parse()
