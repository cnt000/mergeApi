const mockCallback = require("./mockCallback")
const ghibliFilms = require("../lambdas/ghibliFilm")
;((event, context, callback) => {
  ghibliFilms(event, context, callback)
})({}, {}, mockCallback)
