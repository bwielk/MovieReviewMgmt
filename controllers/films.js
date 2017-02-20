var express = require('express');
var filmsRouter = express.Router();

var films = ["Trainspotting", "La Dolce Vita", "Birds", "The Hours", "Amelie"];

filmsRouter.get('/', function(req, res){
  res.json(films);
});

filmsRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]});
});

filmsRouter.post('/', function(req, res){
  films.push(req.body.film);
  res.json({data: films});
});

filmsRouter.put('/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({data: films});
});

filmsRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});

module.exports = filmsRouter;
