 const notes = require('./notes.js')
 const chalk = require('chalk')
 const yargs = require('yargs')



 yargs.command({
     command: "add",
     describe: "Add a new node",
     builder: {
         title: {
             describe: "Note Title",
             demandOption: true,
             type: 'string'
         },
         body: {
             describe: "Body of the Note",
             demandOption: true,
             type: "string"
         }
     },
     handler: function(argv) {
         notes.addNote(argv.title, argv.body)
     }
 })
 yargs.command({
     command: "remove",
     describe: "Removing a Note",
     builder: {
         title: {
             describe: "Specify the title of the note to remove",
             demandOption: true,
             type: 'string'
         }
     },

     handler: function(argv) {
         notes.remNote(argv.title)
     }
 })
 yargs.command({
     command: "list",
     describe: "List out the Notes",
     handler: function() {
         console.log('Listing the Notes ')
         notes.listNotes()
     }
 })
 yargs.command({
     command: "read",
     describe: "Reading a Note",
     builder: {
         title: {
             describe: "Specify the title of the note to read",
             demandOption: true,
             type: 'string'
         }
     },
     handler: function(argv) {
         notes.readNote(argv.title)
     }
 })

 yargs.parse()
















 //  const msg = getNotes()
 //  console.log(chalk.blue.bold(msg))
 //  console.log(chalk.red('Error'))
 //  const command = process.argv[2]

 //  if (command == 'add') {
 //      console.log('Adding Note')

 //  } else if (command == 'remove') {
 //      console.log('Removed')

 //  }
 //  console.log(process.argv)

 // const add = require('./utils.js')

 // const sum = add(4, -2)
 // console.log(sum)cls