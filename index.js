const fetch = require("node-fetch")
// totoro film
const aggregatorApi = "https://ghibliapi.herokuapp.com/films/"

const collectData = (api, metric) => {
  let responseData = {}
  return fetch(api)
    .then(response => response.json())
    .then(data => {
      responseData.aggregator = data
      return Promise.all(
        data[metric].map(url =>
          fetch(url)
            .then(response => response.json())
            .then(singleData => {
              responseData[singleData.name] = singleData
            })
        )
      ).then(() => responseData)
    })
}

module.exports.handler = (event, context, callback) => {
  //message: `Hello ${event.string}`
  const filmId = event.string || "58611129-2dbc-4a81-a72f-77ddfc1b1b49"
  const apiUrl = `${aggregatorApi}${filmId}`
  collectData(apiUrl, "people").then(res => {
    console.log(res)
    callback(null, res)
  })
}
