var mongoose = require('mongoose');

var flashcardSetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    nrOfCards: {
        type: Number,
        default: 0
    },
    createdOn: {
        type: Date,
        default: Date.now
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
        front: String,
        back: String
    }],
    //user_id: String,
    //shared_users: [userID: String]
});

mongoose.model('FlashcardSet', flashcardSetSchema);

/* example add collection and doc
db.flashcardsets.save({
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

