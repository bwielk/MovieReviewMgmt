var Film = require('../film');
var is = require('assert');

describe('Film', function(){
  var film;

  beforeEach(function(){
    film = new Film({
      title: "Titanic",
      actors: ["Leonardo DiCaprio", "Kate Winslet"]
    });
  });

  it("should have a title", function(){
    is.equal(film.title,"Titanic");
  })
});