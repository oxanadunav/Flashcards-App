var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


// to access the controllers in the flashcardsController.js
var flashcardsCtrl = require('../controllers/flashcardsController');

// Get all flashcards --- myFlashcard collection
router.get('/flashcards', flashcardsCtrl.flashcardsReadAll);

// Get specific flashcard document
router.get('/flashcards/:flashcardid', flashcardsCtrl.flashcardsReadOne);

// Create a new flashcard document
router.post('/flashcards', flashcardsCtrl.flashcardsCreate);

// Update specific flashcard document
router.put('/flashcards/:flashcardid', flashcardsCtrl.flashcardsUpdateOne);

// Delete specific flashcard document
router.delete('/flashcards/:flashcardid', flashcardsCtrl.flashcardsDeleteOne);


module.exports = router;
