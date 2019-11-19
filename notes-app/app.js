const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes') 
yargs.command({
    command:'add',
    describe:'Add A note.',
    bulider:{
        title:{
            describe:'Add A title : ',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Add A Description : ',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title,argv.body)
    }    
})

yargs.command({
    command:'remove',
    describe:'Remove a note.',
    bulider:{
        title:{
            describe:'A note to be removed: ',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'read',
    describe:'Read a note.',
    builder:{
        title:{
            describe:"Note To Be Read",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.showNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'Listing all note.',
    handler(){
        notes.listNotes()
    }    
})
yargs.parse();