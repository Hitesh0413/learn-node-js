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
    handler:function(argv){
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
    handler:function(argv){
        console.log('Removing A New Note : '+argv.title)
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'read',
    describe:'Read a note.',
    handler:function(){
        console.log('Reading a note : ')
    }
})

yargs.command({
    command:'list',
    describe:'Listing note.'    
})
yargs.parse();