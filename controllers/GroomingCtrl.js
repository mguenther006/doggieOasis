var Grooming = require('../models/Grooming');

module.exports = {

  // create: function (req, res) {
  //   var newGrooming = new Grooming(req.body);
  //   newGrooming.save(function (err, result) {
  //     if (err) return res.status(500).send(err);
  //     else res.send(result);
  //   });
  // },

  read: function (req, res) {
    Grooming.find(req.query)
      .exec(function (err, result) {
        if (err) return res.status(500).send(err);
        else res.send(result);
      });
  },

  update: function (req, res) {
    Grooming.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }

  // delete: function (req, res) {
  //   Grooming.findByIdAndRemove(req.params.id, function (err, result) {
  //     if (err) return res.status(500).send(err);
  //     else res.send(result);
  //   });
  // }
};
