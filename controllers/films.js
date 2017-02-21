var express = require('express');
var filmsRouter = express.Router();
var films = require('../client/src/models/films')(); //self-invoking
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

filmsRouter.get('/', function(req, res){
  res.json(films);
});

filmsRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]});
});

filmsRouter.post('/', function(req, res){
  var film = new Film({
    title: req.body.title,
    actors:req.body.actors,
    genre: req.body.genre
  });
  films.push(films);
  res.json({data: films});
});

filmsRouter.put('/:id', function(req, res){
  var film = new Film({
    title: req.body.title,
    actors:req.body.actors,
    genre: req.body.genre
  });
  films[req.params.id] = film;
  res.json({data: films});
});

filmsRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});

//add review
filmsRouter.post('/:id/reviews', function(req, rew){
  var film = films[req.params.id];
  review = new Review({
    comment: req.body.comment,
    rating: req.body.rate,
    author: req.body.author
  });
  film.addReview(review);
  res.json({data: films});

})

module.exports = filmsRouter;
