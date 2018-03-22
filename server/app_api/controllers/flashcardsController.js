var mongoose = require('mongoose');
var set = mongoose.model('FlashcardSet');

/* GET all sets */
module.exports.findAll = function(req, res, next) {
  set.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
}

/* POST a new flashcard set */
/* /api/sets */
module.exports.create = function(req, res,next) {
  set.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

/* GET a flashcard set by the id
* /api/sets/:setid*/
module.exports.findOne = function(req, res, next) {
  res.send('findOne');
}

/* PUT /api/sets/:setid */
module.exports.update = function(req, res, next) {
  res.send('update');
}

/* DELETE /api/sets/:setid */
module.exports.delete = function(req, res, next) {
  res.send('delete');
}
