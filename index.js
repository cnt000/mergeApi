const ghibliFilms = require("./lambdas/ghibliFilm")

module.exports.handler = (event, context, callback) => {
  ghibliFilms(event, context, callback)
}
