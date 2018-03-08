var mongoose = require('mongoose');

var flashcardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        "default": ''
    },
    nrOfCards: {
        type: Number,
        "default": 0
    },
    createdOn: {
        type: Date,
        "default": Date.now
    },
    fromLanguage: {
        type: String,
        required: true
    },
    toLanguage: {
        type: String,
        required: true
    },
    flashcards: [{
        firstWord: String,
        secondWord: String
    }]
});

mongoose.model('Flashcard', flashcardSchema, 'My_Flashcards');


/* example add collection and doc
db.myFlashcards.save({
    name: 'weatherEng-Ro',
    fromLanguage: 'eng',
    toLanguage: 'ro',
    flashcards: [{
        firstWord: 'winter',
        secondWord: 'iarna'
    }, {
        firstWord: 'spring',
        secondWord: 'primavara'
    }, {
        firstWord: 'summer',
        secondWord: 'vara'
    }, {
        firstWord: 'autumn',
        secondWord: 'toamna'
    }]

})

*/

