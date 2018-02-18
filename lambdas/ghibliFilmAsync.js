const collectAsync = require("../lib/collectAsync")

function ghibliFilmAsync(event, context, callback) {
  const aggregatorApi = "https://ghibliapi.herokuapp.com/films/"
  const filmId = event.string || "58611129-2dbc-4a81-a72f-77ddfc1b1b49"
  const apiUrl = `${aggregatorApi}${filmId}`
  collectAsync(apiUrl, "people").then(res => {
    callback(null, res)
  })
}

module.exports = ghibliFilmAsync
