const { notes } = require('../../db/db.json')
const router = require('express').Router()

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notesArray }, null, 2)
    );
    return note;
  }

router.get('/notes', (req, res => {
    let results = notes

    res.json(results)
}))

router.post('/notes', (req, res => {
    req.body = notes.length.toString()

    const note = createNewNote(req.body, notesArray)
    res.json(note)
}))

module.exports = router