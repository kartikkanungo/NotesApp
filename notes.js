const fs = require('fs')
const chalk = require('chalk')


const getNotes = () => {
    return 'Your notes...'
}

const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('Note Added'))

    } else {
        console.log(chalk.inverse.red("Duplicate Entry"))
    }



}
const remNote = (title) => {
    const notes = loadNotes()
    const newnotes = notes.filter((note) => note.title !== title)

    if (notes.length > newnotes.length) {
        saveNotes(newnotes)
        console.log(chalk.inverse.green('Note Deleted'))
    } else {
        console.log(chalk.inverse.red('No Entry Found'))
    }


}

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length > 0) {
        console.log(chalk.inverse.white('Your Notes'))
        notes.forEach(note => {
            console.log(chalk.inverse.yellow(note.title))
            console.log(chalk.red(note.body))
        });

    } else {
        console.log(chalk.inverse.red('No Notes to Display'))
    }

}

const readNote = (title) => {
    const notes = loadNotes()
    const readnote = notes.find((note) => note.title == title)
    if (readnote) {
        console.log(chalk.cyan('Title: ') + chalk.yellow(readnote.title))
        console.log(chalk.cyan('Body: ') + chalk.yellow(readnote.body))
    } else {
        console.log(chalk.inverse.red('No Notes to Read'))
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []

    }


}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    remNote: remNote,
    listNotes: listNotes,
    readNote: readNote
}