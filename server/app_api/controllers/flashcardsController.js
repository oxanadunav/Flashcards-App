var mongoose = require('mongoose');
var set = mongoose.model('FlashcardSet');

/* GET all sets */
module.exports.findAll = function(req, res) {
  set.find(function (err, fcSets) {
    if (err) {
      res.status(404).json(err);
      return;
    }
    res.json(fcSets);
  });
};

/* GET a flashcard set by the id
* /api/sets/:setid*/
module.exports.findOne = function(req, res) {
  if (req.params && req.params.setid) { //check that setid exists in request parameters
    set
      .findById(req.params.setid)
      .exec(function (err, fcSet) {
        if (!fcSet) { //if Mongoose doesn’t return a set
          res.status(404).json({error: "Set id not found"});
          return;
        } else if (err) {
          res.status(404).json(err);
          return;
        }
        res.json(fcSet);
      });
  } else {
    res.status(404).json({error: "No set id in request"});
  }
};

/* POST a new flashcard set */
/* /api/sets */
module.exports.create = function(req, res) {
  set.create(req.body, function(err, fcSet) {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(201).json(fcSet);
    }
  });
};

/* PUT /api/sets/:setid */
module.exports.update = function(req, res) {
  var setid = req.params.setid;
  if (setid) {
    set
      .findByIdAndUpdate(setid, req.body)
      .exec(function (err, fcSet) {
          if (err) {
            res.status(404).json(err);
            return;
          }
          console.log("Set id " + setid + " updated");
          res.status(200).json(fcSet);
        }
      );
  } else {
    res.status(404).json({error: "No set id"});
  }
};

/* DELETE /api/sets/:setid */
module.exports.delete = function(req, res) {
  var setid = req.params.setid;
  if (setid) {
    set
      .findByIdAndRemove(setid)
      .exec(function (err, fcSet) {
        if (err) {
          res.status(404).json(err);
          return;
        }
        console.log("Set id " + setid + " deleted");
        res.status(204).json(null);
        }
      );
  } else {
    res.status(404).json({error: "No set id"});
  }
};

