const mockCallback = require("./mockCallback")
const ghibliFilmAsync = require("../lambdas/ghibliFilmAsync")
;((event, context, callback) => {
  ghibliFilmAsync(event, context, callback)
})({}, {}, console.log)
