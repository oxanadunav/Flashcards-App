var express = require('express');
var router = express.Router();

// to access the controllers in the flashcardsController.js
var flashcardsCtrl = require('../controllers/flashcardsController');

// Get all flashcards
router.get('/sets', flashcardsCtrl.findAll);

// Create a new flashcard document
router.post('/sets', flashcardsCtrl.create);

// Get flashcard document by id
router.get('/sets/:setid', flashcardsCtrl.findOne);

// Update flashcard document by id
router.put('/sets/:setid', flashcardsCtrl.update);

// Delete flashcard document by id
router.delete('/sets/:setid', flashcardsCtrl.delete);

module.exports = router;
