const { notes } = require('../../db/db.json');
const router = require('express').Router();
const path = require('path')
const fs = require('fs')

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

router.get("/notes", (req, res) => {
  let results = notes;
  //   if (req.query) {
  //     results = filterByQuery(req.query, results);
  //   }
  res.json(results);
});

router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be
  // req.body = notes.length.toString();

  // if any data in req.body is incorrect, send 400 error back

  const note = createNewNote(req.body, notes);
  res.json(note);
});

module.exports = router;