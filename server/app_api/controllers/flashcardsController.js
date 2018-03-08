var mongoose = require('mongoose');
var fc = mongoose.model('Flashcard');

/* GET list of all flashcards */
module.exports.flashcardsReadAll = function(req, res) {
    res.send('flashcardsReadAll');
}

/* GET a flashcards set by the id */
module.exports.flashcardsReadOne = function(req, res) {
    res.send('flashcardsReadOne');
}

/* POST a new flashcards set */
/* /api/flashcards */
module.exports.flashcardsCreate = function(req, res) {
    res.send('flashcardsCreate');
}

/* PUT /api/flashcards/:flashcardsid */
module.exports.flashcardsUpdateOne = function(req, res) {
    res.send('flashcardsUpdateOne');
}

/* DELETE /api/flashcards/:flashcardsid */
module.exports.flashcardsDeleteOne = function(req, res) {
    res.send('flashcardsDeleteOne');
}
