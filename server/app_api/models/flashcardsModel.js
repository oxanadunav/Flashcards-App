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
        front: 'winter',
        back: 'iarna'
    }, {
        front: 'spring',
        back: 'primavara'
    }, {
        front: 'summer',
        back: 'vara'
    }, {
        front: 'autumn',
        back: 'toamna'
    }]
})
*/

// db.flashcardsets.save({
//   name: 'fruitsRo-Eng',
//   fromLanguage: 'ro',
//   toLanguage: 'eng',
//   flashcards: [{
//     front: 'mar',
//     back: 'apple'
//   }, {
//     front: 'para',
//     back: 'pear'
//   }, {
//     front: 'cocos',
//     back: 'coconut'
//   }]
// })
